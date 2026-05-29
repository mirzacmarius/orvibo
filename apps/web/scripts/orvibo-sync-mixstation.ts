/**
 * Downloads MixStation product detail images used by the React overview page.
 * Run after changing mixstation content paths or when R2/local public is missing assets.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  mixstationHero,
  mixstationSections,
} from "../src/lib/orvibo/products/content/mixstation";

type Asset = {
  sourceUrl: string;
  publicPath: string;
  kind: "image";
};

const STATIC_ORIGIN = "https://static.orvibo.com";
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36";

function collectPaths(): string[] {
  const paths = new Set<string>([
    mixstationHero.imagePath,
    mixstationHero.logoPath,
    ...mixstationSections.map((section) => section.imagePath),
  ]);
  return [...paths].sort();
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
  const root = process.cwd();
  const publicDir = path.join(root, "public");
  const publicPaths = collectPaths();
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
      console.log(`OK ${asset.publicPath}`);
    } catch (error) {
      console.error(`FAIL ${asset.publicPath}`, error);
      failed += 1;
    }
  }

  await mergeManifest(publicDir, assets);
  console.log(JSON.stringify({ paths: publicPaths.length, downloaded: ok, failed }, null, 2));
  if (failed > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
