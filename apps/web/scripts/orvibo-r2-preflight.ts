import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const PREFIXES = ["guanwang_second", "html", "orvibo", "8f4239b1vodgzp1251222210"];

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

function envStatus(name: string) {
  const value = process.env[name]?.trim();
  return value ? "ok" : "missing";
}

async function main() {
  const publicRoot = path.join(process.cwd(), "public");
  const prefixStats: Record<string, { files: number; bytes: number }> = {};

  for (const prefix of PREFIXES) {
    const dir = path.join(publicRoot, prefix);
    try {
      const files = await walkFiles(dir);
      let bytes = 0;
      for (const file of files) {
        bytes += (await stat(file)).size;
      }
      prefixStats[prefix] = { files: files.length, bytes };
    } catch {
      prefixStats[prefix] = { files: 0, bytes: 0 };
    }
  }

  const totalBytes = Object.values(prefixStats).reduce((s, p) => s + p.bytes, 0);

  const report = {
    env: {
      R2_ACCOUNT_ID: envStatus("R2_ACCOUNT_ID"),
      R2_ACCESS_KEY_ID: envStatus("R2_ACCESS_KEY_ID"),
      R2_SECRET_ACCESS_KEY: envStatus("R2_SECRET_ACCESS_KEY"),
      R2_BUCKET_NAME: envStatus("R2_BUCKET_NAME"),
      NEXT_PUBLIC_ORVIBO_ASSETS_URL: envStatus("NEXT_PUBLIC_ORVIBO_ASSETS_URL"),
      ORVIBO_ASSETS_ORIGIN: envStatus("ORVIBO_ASSETS_ORIGIN"),
    },
    localAssets: prefixStats,
    totalFiles: Object.values(prefixStats).reduce((s, p) => s + p.files, 0),
    totalGiB: Math.round((totalBytes / 1024 / 1024 / 1024) * 100) / 100,
    readyToUpload:
      envStatus("R2_ACCOUNT_ID") === "ok" &&
      envStatus("R2_ACCESS_KEY_ID") === "ok" &&
      envStatus("R2_SECRET_ACCESS_KEY") === "ok",
  };

  console.log(JSON.stringify(report, null, 2));

  if (!report.readyToUpload) {
    console.log(`
Next steps:
  1. Cloudflare Dashboard → R2 → Create bucket "orvibo-assets"
  2. R2 → Manage R2 API Tokens → Object Read & Write → copy keys
  3. Enable public access (r2.dev subdomain or custom domain)
  4. Add to apps/web/.env.local (see .env.example)
  5. bun run orvibo:upload-r2
  6. Set same NEXT_PUBLIC_ORVIBO_ASSETS_URL + ORVIBO_ASSETS_ORIGIN on Vercel → redeploy
`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
