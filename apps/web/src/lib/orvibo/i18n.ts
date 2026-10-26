/**
 * Locales the site is published in. Kept free of server-only imports so the
 * middleware (edge runtime) and client components can use it.
 */
export const LOCALES = ["ro", "en"] as const;

export type Locale = (typeof LOCALES)[number];

/** Locale for `/` and for paths without a locale prefix. */
export const DEFAULT_LOCALE: Locale = "ro";

/** Value of the `lang` attribute (and `hreflang`) for each locale. */
export const LOCALE_LANG: Record<Locale, string> = {
  ro: "ro",
  en: "en",
};

/** Each locale's name in its own language, for the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  ro: "Română",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Splits `/ro/product/x` into `ro` and `/product/x`. */
export function splitLocalePath(pathname: string): {
  locale: Locale | undefined;
  rest: string;
} {
  const match = pathname.match(/^\/([^/]+)(\/.*)?$/);
  const first = match?.[1];
  if (first && isLocale(first)) {
    return { locale: first, rest: match?.[2] ?? "" };
  }
  return { locale: undefined, rest: pathname === "/" ? "" : pathname };
}

/** The same page in another locale: `/ro/product/x` → `/en/product/x`. */
export function switchLocalePath(pathname: string, locale: Locale): string {
  return `/${locale}${splitLocalePath(pathname).rest}`;
}
