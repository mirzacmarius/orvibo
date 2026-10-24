import type { Locale } from "./i18n";
import { assetUrl } from "./assetUrl";
import { LOCALIZED_ASSETS } from "./localized-assets.generated";

/**
 * Images from orvibo.com often have Chinese text baked in. For those, a
 * translated copy per locale lives under `/orvibo/i18n/<locale>/<original
 * path>` (as WebP); `LOCALIZED_ASSETS` lists the originals that have one.
 */
export function localizedAssetPath(publicPath: string, locale: Locale): string {
  if (!LOCALIZED_ASSETS.has(publicPath)) return publicPath;
  const withoutExt = publicPath.replace(/\.[a-z0-9]+$/i, "");
  return `/orvibo/i18n/${locale}${withoutExt}.webp`;
}

/** `assetUrl()` for an image that may have a translated copy. */
export function localizedAssetUrl(publicPath: string, locale: Locale): string {
  return assetUrl(localizedAssetPath(publicPath, locale));
}
