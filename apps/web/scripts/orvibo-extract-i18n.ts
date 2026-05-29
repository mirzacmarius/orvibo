/**
 * Scans source-site HTML for inner-page copy and reports EN vs CN-only gaps.
 *
 * Workflow:
 * 1. Run `bun run orvibo:extract-i18n` to fetch global.orvibo.com (EN) and orvibo.com/cn pages.
 * 2. Entries with `source: "cn-only"` need manual EN in `src/app/[locale]/dictionaries/en.json`.
 * 3. Merge verified EN `<title>` / meta description into the matching `pages.*` or `products.*` keys.
 *
 * This script does not overwrite en.json automatically — it produces a review report.
 */

import { writeFile } from "node:fs/promises";
import path from "node:path";
import { I18N_SOURCE_ROUTES } from "../src/app/[locale]/dictionaries/routes";

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36";

interface ExtractedPageMeta {
  scope: string;
  key: string;
  source: "global-en" | "cn-only" | "missing";
  url: string;
  status: number;
  title: string | null;
  description: string | null;
  headings: string[];
}

async function fetchHtml(url: string): Promise<{ status: number; html: string }> {
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Referer: "https://www.orvibo.com/cn/index.html" },
  });
  return { status: res.status, html: await res.text() };
}

function parseMeta(html: string) {
  const title = html.match(/<title>([^<]+)/i)?.[1]?.trim() ?? null;
  const description =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)/i)?.[1]?.trim() ??
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)?.[1]?.trim() ??
    null;
  const headings = [...html.matchAll(/<h[12][^>]*>([^<]+)/gi)]
    .map((match) => match[1]?.trim())
    .filter((value): value is string => Boolean(value))
    .slice(0, 12);

  return { title, description, headings };
}

async function extractRoute(route: (typeof I18N_SOURCE_ROUTES)[number]): Promise<ExtractedPageMeta> {
  const preferredUrl = route.globalEn ?? route.cn;
  const { status, html } = await fetchHtml(preferredUrl);
  const meta = parseMeta(html);

  let source: ExtractedPageMeta["source"] = "missing";
  if (status >= 200 && status < 400) {
    source = route.globalEn ? "global-en" : "cn-only";
  }

  if (source === "cn-only" || (route.globalEn && status >= 400)) {
    const cn = await fetchHtml(route.cn);
    const cnMeta = parseMeta(cn.html);
    return {
      scope: route.scope,
      key: route.key,
      source: route.globalEn && status < 400 ? "global-en" : "cn-only",
      url: route.globalEn && status < 400 ? preferredUrl : route.cn,
      status: route.globalEn && status < 400 ? status : cn.status,
      title: route.globalEn && status < 400 ? meta.title : cnMeta.title,
      description:
        route.globalEn && status < 400 ? meta.description : cnMeta.description,
      headings: route.globalEn && status < 400 ? meta.headings : cnMeta.headings,
    };
  }

  return {
    scope: route.scope,
    key: route.key,
    source,
    url: preferredUrl,
    status,
    title: meta.title,
    description: meta.description,
    headings: meta.headings,
  };
}

async function main() {
  const results: ExtractedPageMeta[] = [];

  for (const route of I18N_SOURCE_ROUTES) {
    results.push(await extractRoute(route));
  }

  const reportPath = path.join(
    process.cwd(),
    "src/app/[locale]/dictionaries/i18n-extract-report.json",
  );

  await writeFile(reportPath, JSON.stringify(results, null, 2), "utf8");

  const cnOnly = results.filter((item) => item.source === "cn-only");
  const enReady = results.filter((item) => item.source === "global-en");

  console.log(
    JSON.stringify(
      {
        reportPath,
        total: results.length,
        globalEn: enReady.length,
        cnOnly: cnOnly.length,
        cnOnlyKeys: cnOnly.map((item) => `${item.scope}/${item.key}`),
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
