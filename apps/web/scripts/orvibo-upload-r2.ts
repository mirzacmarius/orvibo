import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const CONTENT_TYPES: Record<string, string> = {
  ".mp4": "video/mp4",
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

async function main() {
  const accountId = requireEnv("R2_ACCOUNT_ID");
  const accessKeyId = requireEnv("R2_ACCESS_KEY_ID");
  const secretAccessKey = requireEnv("R2_SECRET_ACCESS_KEY");
  const bucket = process.env.R2_BUCKET_NAME?.trim() || "orvibo-assets";

  const client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });

  const root = path.join(process.cwd(), "public");
  const prefixes = ["guanwang_second", "orvibo", "8f4239b1vodgzp1251222210"];

  let uploaded = 0;
  const skipped = 0;
  let failed = 0;

  for (const prefix of prefixes) {
    const dir = path.join(root, prefix);
    try {
      const st = await stat(dir);
      if (!st.isDirectory()) continue;
    } catch {
      console.warn(`Skip missing directory: public/${prefix}`);
      continue;
    }

    const files = await walkFiles(dir);
    for (const filePath of files) {
      const key = path.relative(root, filePath).split(path.sep).join("/");
      try {
        const body = await readFile(filePath);
        await client.send(
          new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: body,
            ContentType: contentTypeFor(filePath),
          }),
        );
        uploaded += 1;
        if (uploaded % 25 === 0) console.log(`Uploaded ${uploaded}…`);
      } catch (err) {
        failed += 1;
        console.error(`Failed ${key}:`, err);
      }
    }
  }

  console.log(
    JSON.stringify({ bucket, uploaded, skipped, failed }, null, 2),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
