/** Legacy Orvibo static site used jQuery/Swiper scripts; the Next app uses React only. */

export function isLegacyOrviboScript(publicPath: string): boolean {
  const path = publicPath.replace(/^\//, "").toLowerCase();
  if (path.includes("bower_components/")) return true;
  if (path.includes("jquery")) return true;
  if (path.endsWith(".js") && path.startsWith("guanwang_second/")) return true;
  if (path.endsWith(".js") && path.startsWith("orvibo/guanwang_second/")) return true;
  if (path.endsWith(".js") && path.startsWith("open/")) return true;
  return false;
}

/** Dev-only files bundled into the Next app — not CDN assets. */
export function isOrviboAppMetadata(publicPath: string): boolean {
  const path = publicPath.replace(/^\//, "");
  return path === "orvibo/asset-manifest.json" || path === "orvibo/redirect-map.json";
}

export function shouldHostOnCdn(publicPath: string): boolean {
  if (isLegacyOrviboScript(publicPath)) return false;
  if (isOrviboAppMetadata(publicPath)) return false;
  return true;
}

export type SyncableAssetKind = "image" | "video" | "css" | "js" | "other";

export function shouldSyncFromLiveSite(kind: SyncableAssetKind): boolean {
  return kind === "image" || kind === "video";
}
