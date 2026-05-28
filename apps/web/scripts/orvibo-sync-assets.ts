import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

type Asset = {
  sourceUrl: string;
  publicPath: string; // absolute public URL path (starts with /)
  kind: "image" | "video" | "css" | "js" | "other";
};

const ORIGIN_PAGE = "https://www.orvibo.com/cn/index.html";
const STATIC_ORIGIN = "https://static.orvibo.com";

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36";

function classify(url: string): Asset["kind"] {
  const u = url.toLowerCase();
  if (u.endsWith(".mp4") || u.includes(".mp4?")) return "video";
  if (
    u.endsWith(".png") ||
    u.endsWith(".jpg") ||
    u.endsWith(".jpeg") ||
    u.endsWith(".webp") ||
    u.endsWith(".gif") ||
    u.endsWith(".svg")
  )
    return "image";
  if (u.endsWith(".css") || u.includes(".css?")) return "css";
  if (u.endsWith(".js") || u.includes(".js?")) return "js";
  return "other";
}

function normalizeToAbsoluteUrl(raw: string): string | null {
  const s = raw.trim();
  if (!s) return null;
  if (s.startsWith("data:")) return null;

  if (s.startsWith("//")) return `https:${s}`;
  if (s.startsWith("http://") || s.startsWith("https://")) return s;

  // Root-relative on www.orvibo.com
  if (s.startsWith("/")) return new URL(s, "https://www.orvibo.com").toString();

  // Other relative → resolve against the page URL
  return new URL(s, ORIGIN_PAGE).toString();
}

function urlToPublicPath(urlStr: string): string | null {
  const u = new URL(urlStr);
  // For Orvibo site assets, keep the pathname so CSS url(/guanwang_second/front/...) works.
  if (
    u.hostname.endsWith("orvibo.com") ||
    u.hostname === "res.wx.qq.com"
  ) {
    return u.pathname;
  }
  return null;
}

function extractAttrUrls(html: string): string[] {
  const out: string[] = [];
  const patterns = [
    /\bsrc\s*=\s*"([^"]+)"/g,
    /\bsrc\s*=\s*'([^']+)'/g,
    /\bhref\s*=\s*"([^"]+)"/g,
    /\bhref\s*=\s*'([^']+)'/g,
  ];
  for (const re of patterns) {
    for (const m of html.matchAll(re)) {
      out.push(m[1] ?? "");
    }
  }
  return out;
}

function extractCssUrls(css: string): string[] {
  const out: string[] = [];
  const re = /url\(\s*(['"]?)([^'")]+)\1\s*\)/g;
  for (const m of css.matchAll(re)) {
    out.push(m[2] ?? "");
  }
  return out;
}

async function fetchText(url: string) {
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Referer: ORIGIN_PAGE },
  });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} ${url}`);
  return await res.text();
}

async function fetchBytes(url: string) {
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Referer: ORIGIN_PAGE },
  });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} ${url}`);

  const contentType = res.headers.get("content-type") ?? "";
  if (contentType.includes("text/html")) {
    throw new Error(`Unexpected HTML response for ${url}`);
  }

  return new Uint8Array(await res.arrayBuffer());
}

async function ensureDir(filePath: string) {
  await mkdir(path.dirname(filePath), { recursive: true });
}

async function main() {
  const root = process.cwd();
  const publicDir = path.join(root, "public");

  const pageHtml = await fetchText(ORIGIN_PAGE);

  // Include our already-downloaded CSS bundles as additional url() sources.
  const localCssPaths = [
    path.join(root, "src/styles/orvibo/global_ch.css"),
    path.join(root, "src/styles/orvibo/base.css"),
    path.join(root, "src/styles/orvibo/index_2020.css"),
    path.join(root, "src/styles/orvibo/swiper.css"),
  ];

  const cssTexts = await Promise.all(
    localCssPaths.map(async (p) => {
      const fileUrl = new URL(`file://${p}`);
      // Bun supports fetch(file://) but Node doesn't reliably; so we just read via fs by fetching from file URL is risky.
      // Instead, fetch the original CSS URLs directly again and parse them.
      // We'll treat local path list as hints only; the manifest will still be correct from the HTML + remote CSS.
      return { path: fileUrl.toString(), text: "" };
    }),
  );
  void cssTexts;

  const rawUrls = new Set<string>();
  for (const u of extractAttrUrls(pageHtml)) rawUrls.add(u);

  // Parse the remote CSS bundles referenced on the page to extract url(...)
  const cssBundleUrls = [
    `${STATIC_ORIGIN}/guanwang_second/front/css/global_ch-ac52a3605b.css`,
    `${STATIC_ORIGIN}/guanwang_second/front/css/base-d3ba1b8e2c.css`,
    `${STATIC_ORIGIN}/guanwang_second/front/css/index_2020-7f85cdb244.css`,
    `${STATIC_ORIGIN}/guanwang_second/front/css/swiper-bb2bb34927.min.css`,
  ];

  for (const cssUrl of cssBundleUrls) {
    const css = await fetchText(cssUrl);
    for (const u of extractCssUrls(css)) rawUrls.add(u);
  }

  const assets: Asset[] = [];
  for (const raw of rawUrls) {
    const abs = normalizeToAbsoluteUrl(raw);
    if (!abs) continue;

    const publicPath = urlToPublicPath(abs);
    if (!publicPath) continue;

    // Skip HTML pages; keep assets only.
    const kind = classify(abs);
    if (kind === "other") continue;

    assets.push({ sourceUrl: abs, publicPath, kind });
  }

  // Dedupe by publicPath.
  const byPath = new Map<string, Asset>();
  for (const a of assets) {
    if (!byPath.has(a.publicPath)) byPath.set(a.publicPath, a);
  }
  const manifest = [...byPath.values()].sort((a, b) =>
    a.publicPath.localeCompare(b.publicPath),
  );

  const manifestPath = path.join(publicDir, "orvibo", "asset-manifest.json");
  await ensureDir(manifestPath);
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8");

  // Download all assets into public/ at their publicPath.
  let ok = 0;
  let failed = 0;
  for (const a of manifest) {
    const dest = path.join(publicDir, a.publicPath.replace(/^\//, ""));
    try {
      const bytes = await fetchBytes(a.sourceUrl);
      await ensureDir(dest);
      await writeFile(dest, bytes);
      ok += 1;
    } catch {
      failed += 1;
    }
  }

  console.log(
    JSON.stringify(
      {
        manifestCount: manifest.length,
        downloaded: ok,
        failed,
        manifestPath: "/orvibo/asset-manifest.json",
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

