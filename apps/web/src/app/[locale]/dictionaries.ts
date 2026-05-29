import "server-only";

export type Locale = "en";

const dictionaries = {
  en: () =>
    import("./dictionaries/en.json").then(
      (module) => module.default as Dictionary,
    ),
} satisfies Record<Locale, () => Promise<Dictionary>>;

export type Dictionary = {
  meta: { title: string; description: string };
  common: {
    watchVideo: string;
    learnMore: string;
    visitStore: string;
    playVideo: string;
    english: string;
    chinese: string;
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
};

export function isLocale(value: string): value is Locale {
  return value === "en";
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
