import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALE_LANG, LOCALES, type Locale } from "./i18n";

/**
 * Public origin of the production site. Used for `metadataBase` (absolute
 * OpenGraph/Twitter image URLs), robots.txt and the sitemap.
 */
export const SITE_URL = "https://www.orvibo.ro";

/**
 * Robots directive for routes that only render the "coming soon" placeholder.
 * Remove it from a route's metadata once the page has real content, and add
 * the route to `app/sitemap.ts`.
 */
export const PLACEHOLDER_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: true,
};

/**
 * Canonical and `hreflang` links for a page that exists in every locale.
 * `path` is the part after the locale prefix, e.g. `/product/mixpad_7`
 * (empty for the home page). Relative URLs resolve against `metadataBase`.
 */
export function localeAlternates(
  locale: Locale,
  path: string,
): Metadata["alternates"] {
  return {
    canonical: `/${locale}${path}`,
    languages: localeAlternateUrls(path, ""),
  };
}

/** `{ ro: "<origin>/ro<path>", en: …, "x-default": … }` for `path`. */
export function localeAlternateUrls(
  path: string,
  origin: string = SITE_URL,
): Record<string, string> {
  return {
    ...Object.fromEntries(
      LOCALES.map((locale) => [LOCALE_LANG[locale], `${origin}/${locale}${path}`]),
    ),
    "x-default": `${origin}/${DEFAULT_LOCALE}${path}`,
  };
}
