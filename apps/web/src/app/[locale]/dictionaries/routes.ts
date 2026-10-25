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

export const PRODUCT_SLUGS = [
  "mixstation",
  "mixpad_7",
  "mixpad_x",
  "mixpad_7_ultra",
  "mixpad_m2",
  "mixpad_s_flagship",
  "mixpad_elf",
  "bach",
  "defy",
  "gaosi",
  "mixpad_switch",
  "s3",
  "downlight",
  "cangqiong",
  "q3",
  "s5",
  "light",
  "daofeng",
  "q",
  "s",
  "curtain_3d",
] as const;

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
  {
    scope: "product",
    key: "mixpad_7_ultra",
    cn: "https://www.orvibo.com/cn/product/mixpad_7_ultra.html",
  },
  {
    scope: "product",
    key: "mixpad_m2",
    cn: "https://www.orvibo.com/cn/product/mixpad_m2.html",
  },
  {
    scope: "product",
    key: "mixpad_s_flagship",
    cn: "https://www.orvibo.com/cn/product/mixpad_s_flagship.html",
  },
  {
    scope: "product",
    key: "mixpad_elf",
    cn: "https://www.orvibo.com/cn/product/mixpad_elf.html",
  },
  {
    scope: "product",
    key: "bach",
    cn: "https://www.orvibo.com/cn/product/bach.html",
  },
  {
    scope: "product",
    key: "defy",
    cn: "https://www.orvibo.com/cn/product/defy.html",
  },
  {
    scope: "product",
    key: "gaosi",
    cn: "https://www.orvibo.com/cn/product/gaosi.html",
  },
  {
    scope: "product",
    key: "mixpad_switch",
    cn: "https://www.orvibo.com/cn/product/mixpad_switch.html",
  },
  {
    scope: "product",
    key: "s3",
    cn: "https://www.orvibo.com/cn/product/s3.html",
  },
  {
    scope: "product",
    key: "downlight",
    cn: "https://www.orvibo.com/cn/product/downlight.html",
  },
  {
    scope: "product",
    key: "cangqiong",
    cn: "https://www.orvibo.com/cn/product/cangqiong.html",
  },
  {
    scope: "product",
    key: "q3",
    cn: "https://www.orvibo.com/cn/product/q3.html",
  },
  {
    scope: "product",
    key: "s5",
    cn: "https://www.orvibo.com/cn/product/s5.html",
  },
  {
    scope: "product",
    key: "light",
    cn: "https://www.orvibo.com/cn/product/light.html",
  },
  {
    scope: "product",
    key: "daofeng",
    cn: "https://www.orvibo.com/cn/product/daofeng.html",
  },
  {
    scope: "product",
    key: "q",
    cn: "https://www.orvibo.com/cn/product/q.html",
  },
  {
    scope: "product",
    key: "s",
    cn: "https://www.orvibo.com/cn/product/s.html",
  },
  {
    scope: "product",
    key: "curtain_3d",
    cn: "https://www.orvibo.com/cn/product/curtain_3d.html",
  },
];
