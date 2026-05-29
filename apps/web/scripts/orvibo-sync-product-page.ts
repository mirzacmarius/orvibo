import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type Asset = {
  sourceUrl: string;
  publicPath: string;
  kind: "image" | "video";
};

const STATIC_ORIGIN = "https://static.orvibo.com";
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36";

function extractPublicPaths(html: string, pathFilter: RegExp): string[] {
  const matches = html.matchAll(/\/guanwang_second\/[^"'\\s)]+/g);
  const paths = new Set<string>();
  for (const match of matches) {
    const publicPath = match[0]?.split("?")[0];
    if (!publicPath || !pathFilter.test(publicPath)) continue;
    if (!/\.(png|jpe?g|webp|gif|svg)$/i.test(publicPath)) continue;
    paths.add(publicPath);
  }
  return [...paths].sort();
}

async function fetchText(url: string) {
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Referer: "https://www.orvibo.com/cn/index.html" },
  });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} ${url}`);
  return await res.text();
}

async function fetchBytes(url: string) {
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Referer: "https://www.orvibo.com/cn/index.html" },
  });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} ${url}`);
  return new Uint8Array(await res.arrayBuffer());
}

async function ensureDir(filePath: string) {
  await mkdir(path.dirname(filePath), { recursive: true });
}

async function mergeManifest(publicDir: string, assets: Asset[]) {
  const manifestPath = path.join(publicDir, "orvibo", "asset-manifest.json");
  const existing = JSON.parse(await readFile(manifestPath, "utf8")) as Asset[];
  const byPath = new Map(existing.map((item) => [item.publicPath, item]));
  for (const asset of assets) byPath.set(asset.publicPath, asset);
  const merged = [...byPath.values()].sort((a, b) =>
    a.publicPath.localeCompare(b.publicPath),
  );
  await writeFile(manifestPath, JSON.stringify(merged, null, 2), "utf8");
}

async function main() {
  const pageUrl = process.argv[2];
  const pathFilterArg = process.argv[3];
  if (!pageUrl || !pathFilterArg) {
    console.error(
      "Usage: bun scripts/orvibo-sync-product-page.ts <pageUrl> <pathFilterRegex>",
    );
    process.exit(1);
  }

  const pathFilter = new RegExp(pathFilterArg);
  const root = process.cwd();
  const publicDir = path.join(root, "public");
  const html = await fetchText(pageUrl);
  const publicPaths = extractPublicPaths(html, pathFilter);

  const assets: Asset[] = publicPaths.map((publicPath) => ({
    sourceUrl: `${STATIC_ORIGIN}${publicPath}`,
    publicPath,
    kind: "image",
  }));

  let ok = 0;
  let failed = 0;
  for (const asset of assets) {
    const dest = path.join(publicDir, asset.publicPath.replace(/^\//, ""));
    try {
      const bytes = await fetchBytes(asset.sourceUrl);
      await ensureDir(dest);
      await writeFile(dest, bytes);
      ok += 1;
    } catch (error) {
      console.error(`FAIL ${asset.publicPath}`, error);
      failed += 1;
    }
  }

  await mergeManifest(publicDir, assets);

  console.log(
    JSON.stringify(
      {
        pageUrl,
        matched: assets.length,
        downloaded: ok,
        failed,
      },
      null,
      2,
    ),
  );

  if (failed > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
