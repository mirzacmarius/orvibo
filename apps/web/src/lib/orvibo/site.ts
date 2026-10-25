import type { Metadata } from "next";

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
