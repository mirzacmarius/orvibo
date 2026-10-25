import type { MetadataRoute } from "next";
import { listProductSlugs } from "@/lib/orvibo/products/registry";
import { orviboRoutes } from "@/lib/orvibo/routes";
import { SITE_URL } from "@/lib/orvibo/site";

/**
 * Lists only pages with real content. Placeholder ("coming soon") routes are
 * marked noindex and stay out of the sitemap until they are built.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = orviboRoutes("/en");
  const paths = [routes.home, ...listProductSlugs().map(routes.product)];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
