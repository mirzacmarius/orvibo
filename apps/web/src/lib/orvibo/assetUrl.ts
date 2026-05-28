/**
 * Resolves a site asset path (e.g. `/orvibo/videos/foo.mp4`) to a full URL.
 * When `NEXT_PUBLIC_ORVIBO_ASSETS_URL` is set, prefixes with the R2/CDN origin.
 * Otherwise returns the path unchanged (served from `public/` or Next rewrites).
 */
export function assetUrl(publicPath: string): string {
  const path = publicPath.startsWith("/") ? publicPath : `/${publicPath}`;
  const base = process.env.NEXT_PUBLIC_ORVIBO_ASSETS_URL?.replace(/\/$/, "");
  if (!base) return path;
  return `${base}${path}`;
}

export function assetUrlForCss(publicPath: string): string {
  const path = publicPath.startsWith("/") ? publicPath : `/${publicPath}`;
  const base = process.env.NEXT_PUBLIC_ORVIBO_ASSETS_URL?.replace(/\/$/, "");
  if (!base) return `url(${path})`;
  return `url(${base}${path})`;
}
