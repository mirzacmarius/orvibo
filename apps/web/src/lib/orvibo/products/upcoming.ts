/**
 * Products the site already links to (header mega-menu, footer, home page)
 * that do not have a page in `registry.ts` yet, mapped to their label key in
 * `dict.navProducts`.
 *
 * These slugs render a "coming soon" placeholder that is excluded from search
 * indexing. Any other unregistered slug returns a 404. When a product gets a
 * real page, register it in `registry.ts` and remove it from this list.
 */
const UPCOMING_PRODUCTS = new Map<string, string>([
  ["mixpad_plus", "mixpadPlus"],
  ["mixpad_mirror", "mixpadMirror"],
  ["robot_r2", "robotR2"],
  ["artisbox_play", "artisbox"],
  ["xiaofang", "xiaofang"],
  ["s30c", "s30c"],
  // Footer "Featured products"
  // Home page product grid
]);

/** Returns the `dict.navProducts` key for an upcoming product slug. */
export function getUpcomingProductLabelKey(slug: string): string | undefined {
  return UPCOMING_PRODUCTS.get(slug);
}

export function listUpcomingProductSlugs(): string[] {
  return [...UPCOMING_PRODUCTS.keys()];
}
