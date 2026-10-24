/** Canonical dictionary keys for inner marketing routes. */

export const PAGE_KEYS = [
  "product",
  "cooperation",
  "estate",
  "store",
  "app",
  "exploreConference",
] as const;

export type PageKey = (typeof PAGE_KEYS)[number];

export const ABOUT_SLUGS = [
  "about_us",
  "culture",
  "join_us",
  "contact",
] as const;

export type AboutSlug = (typeof ABOUT_SLUGS)[number];

export const SERVICE_SLUGS = ["customization", "case"] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const PRODUCT_SLUGS = ["mixstation", "mixpad_7", "mixpad_x"] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export function isAboutSlug(value: string): value is AboutSlug {
  return (ABOUT_SLUGS as readonly string[]).includes(value);
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export function isProductSlug(value: string): value is ProductSlug {
  return (PRODUCT_SLUGS as readonly string[]).includes(value);
}

/** Legacy `.html` paths on the source site → dictionary scope. */
export interface I18nSourceRoute {
  scope: "page" | "about" | "service" | "product";
  key: string;
  globalEn?: string;
  cn: string;
}

export const I18N_SOURCE_ROUTES: I18nSourceRoute[] = [
  {
    scope: "page",
    key: "product",
    globalEn: "https://global.orvibo.com/en/product/productList.html",
    cn: "https://www.orvibo.com/cn/product/productList.html",
  },
  {
    scope: "page",
    key: "cooperation",
    cn: "https://www.orvibo.com/cn/cooperation/cooperation.html",
  },
  {
    scope: "page",
    key: "estate",
    cn: "https://www.orvibo.com/cn/cooperation/estateCooperation.html",
  },
  {
    scope: "page",
    key: "store",
    cn: "https://www.orvibo.com/cn/store/orviboStore.html",
  },
  {
    scope: "page",
    key: "app",
    cn: "https://www.orvibo.com/cn/app.html",
  },
  {
    scope: "page",
    key: "exploreConference",
    cn: "https://www.orvibo.com/cn/conference2023.html",
  },
  {
    scope: "about",
    key: "about_us",
    globalEn: "https://global.orvibo.com/en/about/about_us.html",
    cn: "https://www.orvibo.com/cn/about/about_us.html",
  },
  {
    scope: "about",
    key: "culture",
    globalEn: "https://global.orvibo.com/en/about/culture.html",
    cn: "https://www.orvibo.com/cn/about/culture.html",
  },
  {
    scope: "about",
    key: "join_us",
    globalEn: "https://global.orvibo.com/en/about/join_us.html",
    cn: "https://www.orvibo.com/cn/about/join_us.html",
  },
  {
    scope: "about",
    key: "contact",
    globalEn: "https://global.orvibo.com/en/about/contact.html",
    cn: "https://www.orvibo.com/cn/about/contact.html",
  },
  {
    scope: "service",
    key: "customization",
    cn: "https://www.orvibo.com/cn/services/customization.html",
  },
  {
    scope: "service",
    key: "case",
    cn: "https://www.orvibo.com/cn/services/case.html",
  },
  {
    scope: "product",
    key: "mixstation",
    cn: "https://www.orvibo.com/cn/product/mixstation.html",
  },
  {
    scope: "product",
    key: "mixpad_7",
    cn: "https://www.orvibo.com/cn/product/mixpad_7.html",
  },
  {
    scope: "product",
    key: "mixpad_x",
    cn: "https://www.orvibo.com/cn/product/mixpad_x.html",
  },
];
