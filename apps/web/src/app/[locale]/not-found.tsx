import { NotFoundView } from "@/components/orvibo/layout/NotFoundView";
import { DEFAULT_LOCALE } from "@/lib/orvibo/i18n";
import { getRequestLocale } from "@/lib/orvibo/requestLocale";
import type { Metadata } from "next";
import { formatPageTitle, getDictionary, isLocale } from "./dictionaries";

/**
 * Title of the 404 page; Next passes the route's params to it. A first segment
 * that is no locale (a missing file such as `/x.png`) gets the root 404, in
 * the default locale.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : DEFAULT_LOCALE);
  return { title: formatPageTitle(dict.shell.notFound.title) };
}

/** 404 for every page under a locale, in that locale. */
export default async function LocaleNotFound() {
  const locale = getRequestLocale();
  const dict = await getDictionary(locale);

  return <NotFoundView locale={locale} dict={dict} />;
}
