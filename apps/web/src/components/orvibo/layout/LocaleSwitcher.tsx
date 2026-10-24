"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import {
  LOCALE_LANG,
  LOCALE_NAMES,
  LOCALES,
  type Locale,
  splitLocalePath,
  switchLocalePath,
} from "@/lib/orvibo/i18n";

interface LocaleSwitcherProps {
  label: string;
}

/** Footer language links that keep the visitor on the same page. */
export function LocaleSwitcher({ label }: LocaleSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const current = splitLocalePath(pathname).locale;

  return (
    <nav aria-label={label} className="flex shrink-0">
      {LOCALES.map((locale: Locale, index) => (
        <Fragment key={locale}>
          {index > 0 ? <span aria-hidden="true">|</span> : null}
          {locale === current ? (
            <span
              aria-current="true"
              className="px-[16px] text-white/60"
              lang={LOCALE_LANG[locale]}
            >
              {LOCALE_NAMES[locale]}
            </span>
          ) : (
            <span className="px-[16px] text-white/60 hover:text-white">
              <NextLink
                href={switchLocalePath(pathname, locale)}
                hrefLang={LOCALE_LANG[locale]}
                lang={LOCALE_LANG[locale]}
              >
                {LOCALE_NAMES[locale]}
              </NextLink>
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
