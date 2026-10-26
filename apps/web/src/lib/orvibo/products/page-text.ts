import type { Locale } from "@/lib/orvibo/i18n";

/** Translated strings of one product page, keyed like `sec5.title`. */
export type ProductPageText = Record<string, string>;

/**
 * Loads `text/<slug>.<locale>.json`. Product pages converted from orvibo.com
 * keep their copy there instead of in the site dictionary, so a page only
 * loads its own strings. Returns an empty object for pages without one.
 */
export async function loadProductPageText(
  slug: string,
  locale: Locale,
): Promise<ProductPageText> {
  try {
    const loaded = await import(`./text/${slug}.${locale}.json`);
    return loaded.default as ProductPageText;
  } catch {
    return {};
  }
}
