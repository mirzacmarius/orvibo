import "server-only";

import { type Locale, isLocale } from "@/lib/orvibo/i18n";
import type {
  AboutSlug,
  PageKey,
  ProductSlug,
  ServiceSlug,
} from "./dictionaries/routes";
import {
  isAboutSlug,
  isProductSlug,
  isServiceSlug,
} from "./dictionaries/routes";

export interface PageMetaCopy {
  title: string;
  description: string;
}

export interface PageCopy {
  meta: PageMetaCopy;
  title: string;
  lead: string;
  sections?: Record<string, string>;
}

export interface ProductSectionCopy {
  title: string;
  description?: string;
  /** Extra strings a section lays out itself (captions, list items, chat bubbles). */
  items?: Record<string, string>;
}

export interface ProductCopy {
  title: string;
  tabs: Record<string, string>;
  sections: Record<string, ProductSectionCopy>;
  specifications?: {
    title: string;
    rows: Record<string, { label: string; value: string }>;
  };
}

export type Dictionary = {
  meta: { title: string; description: string };
  common: {
    watchVideo: string;
    learnMore: string;
    visitStore: string;
    playVideo: string;
    /** Label of the footer language switcher. */
    language: string;
    /** Disclaimer at the bottom of product pages; `\n` separates paragraphs. */
    productDisclaimer: string;
    /** Extra closing line some product pages add to the disclaimer. */
    productDisclaimerNoNotice: string;
  };
  shell: {
    comingSoon: { title: string; description: string; body: string };
    unbuiltProduct: string;
    backHome: string;
    notFound: { title: string; description: string };
  };
  nav: {
    home: string;
    wholeHome: string;
    products: string;
    business: string;
    explore: string;
    about: string;
    dealer: string;
    estate: string;
    company: string;
    culture: string;
    careers: string;
    contact: string;
    categories: Record<string, string>;
  };
  navProducts: Record<string, string>;
  hero: { headline: string; subheadline: string; tagline: string };
  highlights: {
    switch: string;
    switchTagline: string;
    mixPad: string;
    mixPadTagline: string;
    lighting: string;
    lightingTagline: string;
  };
  productGrid: {
    title: string;
    curtain3d: string;
    spotlightS5: string;
    daofeng: string;
    lockV5: string;
    bauhausLight: string;
  };
  store: { title: string; body: string };
  cards: {
    partnership: { title: string; desc: string };
    custom: { title: string; desc: string };
    cases: { title: string; desc: string };
  };
  videos: {
    sectionTitle: string;
    items: {
      mixstation: string;
      tvc: string;
      sopro: string;
      s5: string;
      wholeHome: string;
    };
  };
  footer: {
    applyRealEstate: string;
    applyDealer: string;
    recommendedProducts: string;
    aboutUs: string;
    business: string;
    support: string;
    channels: string;
    news: string;
    contactUs: string;
    phone: string;
    onlineService: string;
    mixpadX: string;
    mixpadElf: string;
    soproS: string;
    soproQ: string;
    customization: string;
    cases: string;
    zhijiayi: string;
    orviboHome: string;
    tmall: string;
    jd: string;
    offlineStore: string;
    press: string;
    conference: string;
    copyright: string;
    privacy: string;
    investmentNotice: string;
  };
  pages: {
    product: PageCopy;
    cooperation: PageCopy;
    estate: PageCopy;
    store: PageCopy;
    app: PageCopy;
    exploreConference: PageCopy;
    about: Record<AboutSlug, PageCopy>;
    services: Record<ServiceSlug, PageCopy>;
  };
  products: Record<ProductSlug, ProductCopy>;
};

const dictionaries = {
  ro: () =>
    import("./dictionaries/ro.json").then(
      (module) => module.default satisfies Dictionary,
    ),
  en: () =>
    import("./dictionaries/en.json").then(
      (module) => module.default satisfies Dictionary,
    ),
} satisfies Record<Locale, () => Promise<Dictionary>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export function getPageCopy(dict: Dictionary, key: PageKey): PageCopy {
  return dict.pages[key];
}

export function getAboutPageCopy(
  dict: Dictionary,
  slug: string,
): PageCopy | undefined {
  if (!isAboutSlug(slug)) return undefined;
  return dict.pages.about[slug];
}

export function getServicePageCopy(
  dict: Dictionary,
  slug: string,
): PageCopy | undefined {
  if (!isServiceSlug(slug)) return undefined;
  return dict.pages.services[slug];
}

export function getProductCopy(
  dict: Dictionary,
  slug: string,
): ProductCopy | undefined {
  if (!isProductSlug(slug)) return undefined;
  return dict.products[slug];
}

/** `{pageTitle} | ORVIBO` for inner routes. */
export function formatPageTitle(pageTitle: string): string {
  return `${pageTitle} | ORVIBO`;
}

export { isLocale };
export type { AboutSlug, Locale, PageKey, ProductSlug, ServiceSlug };
