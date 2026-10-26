import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/orvibo/i18n";
import { listProductSlugs } from "@/lib/orvibo/products/registry";
import { localeAlternateUrls, SITE_URL } from "@/lib/orvibo/site";

/**
 * Lists only pages with real content, once per locale with `hreflang`
 * alternates. Placeholder ("coming soon") routes are marked noindex and stay
 * out of the sitemap until they are built.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...listProductSlugs().map((slug) => `/product/${slug}`)];
  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: { languages: localeAlternateUrls(path) },
    })),
  );
}
