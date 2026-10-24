import "server-only";

import { cache } from "react";
import { DEFAULT_LOCALE, type Locale } from "./i18n";

/**
 * The locale of the page being rendered, for server components that get no
 * `params`, such as `app/[locale]/not-found.tsx`. `app/[locale]/layout.tsx`
 * sets it; everything under that layout renders after it, in the same request.
 */
const requestLocale = cache((): { locale?: Locale } => ({}));

export function setRequestLocale(locale: Locale) {
  requestLocale().locale = locale;
}

export function getRequestLocale(): Locale {
  return requestLocale().locale ?? DEFAULT_LOCALE;
}
