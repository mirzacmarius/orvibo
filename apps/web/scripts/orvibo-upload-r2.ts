import { shouldHostOnCdn } from "../src/lib/orvibo/publicAssetFilter";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const UPLOAD_PREFIXES = [
  "guanwang_second",
  // orvibo.com's older pages (security sensors, kits) keep images in /html/images/.
  "html",
  "orvibo",
  "8f4239b1vodgzp1251222210",
] as const;

const CONTENT_TYPES: Record<string, string> = {
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".ico": "image/x-icon",
};

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

function contentTypeFor(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  return CONTENT_TYPES[ext] ?? "application/octet-stream";
}

function isCorruptImage(bytes: Uint8Array, filePath: string): boolean {
  const ext = path.extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(ext)) return false;
  if (bytes.length < 12) return true;
  if (bytes[0] === 0x3c || bytes[1] === 0x21) return true;
  if (ext === ".png" && !(bytes[0] === 0x89 && bytes[1] === 0x50)) return true;
  if ((ext === ".jpg" || ext === ".jpeg") && !(bytes[0] === 0xff && bytes[1] === 0xd8))
    return true;
  if (ext === ".gif" && !(bytes[0] === 0x47 && bytes[1] === 0x49)) return true;
  if (ext === ".webp" && !(bytes[0] === 0x52 && bytes[1] === 0x49)) return true;
  return false;
}

async function walkFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walkFiles(full)));
    else if (entry.isFile()) files.push(full);
  }
  return files;
}

async function collectUploadJobs(publicRoot: string) {
  const jobs: { filePath: string; key: string; size: number }[] = [];

  for (const prefix of UPLOAD_PREFIXES) {
    const dir = path.join(publicRoot, prefix);
    try {
      const st = await stat(dir);
      if (!st.isDirectory()) continue;
    } catch {
      console.warn(`Skip missing directory: public/${prefix}`);
      continue;
    }

    const files = await walkFiles(dir);
    for (const filePath of files) {
      const key = path.relative(publicRoot, filePath).split(path.sep).join("/");
      if (!shouldHostOnCdn(`/${key}`)) continue;
      const { size } = await stat(filePath);
      jobs.push({ filePath, key, size });
    }
  }

  return jobs;
}

async function runPool<T>(
  items: T[],
  concurrency: number,
  worker: (item: T) => Promise<void>,
) {
  let index = 0;
  async function runWorker() {
    while (index < items.length) {
      const i = index++;
      await worker(items[i]!);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => runWorker()));
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const bucket = process.env.R2_BUCKET_NAME?.trim() || "orvibo-assets";

  const publicRoot = path.join(process.cwd(), "public");
  const jobs = await collectUploadJobs(publicRoot);
  const totalBytes = jobs.reduce((sum, j) => sum + j.size, 0);

  console.log(
    JSON.stringify(
      {
        bucket,
        dryRun,
        files: jobs.length,
        totalMiB: Math.round((totalBytes / 1024 / 1024) * 10) / 10,
        prefixes: UPLOAD_PREFIXES,
      },
      null,
      2,
    ),
  );

  if (dryRun) return;

  const accountId = requireEnv("R2_ACCOUNT_ID");
  const accessKeyId = requireEnv("R2_ACCESS_KEY_ID");
  const secretAccessKey = requireEnv("R2_SECRET_ACCESS_KEY");

  const client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });

  let uploaded = 0;
  let skipped = 0;
  let failed = 0;

  await runPool(jobs, 6, async ({ filePath, key }) => {
    try {
      const body = await readFile(filePath);
      if (isCorruptImage(body, filePath)) {
        skipped += 1;
        console.warn(`Skip corrupt image: ${key}`);
        return;
      }

      await client.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: key,
          Body: body,
          ContentType: contentTypeFor(filePath),
        }),
      );
      uploaded += 1;
      if (uploaded % 50 === 0) console.log(`Uploaded ${uploaded}/${jobs.length}…`);
    } catch (err) {
      failed += 1;
      console.error(`Failed ${key}:`, err);
    }
  });

  const publicBase = process.env.NEXT_PUBLIC_ORVIBO_ASSETS_URL?.replace(/\/$/, "");
  console.log(
    JSON.stringify({ bucket, uploaded, skipped, failed, publicBase: publicBase ?? null }, null, 2),
  );

  if (!publicBase) {
    console.warn(
      "Set NEXT_PUBLIC_ORVIBO_ASSETS_URL and ORVIBO_ASSETS_ORIGIN in .env.local, then redeploy Vercel.",
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
