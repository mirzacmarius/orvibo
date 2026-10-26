import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatPageTitle, getDictionary, isLocale } from "../dictionaries";

/**
 * Paths under a locale that no route matches. Without this route Next answers
 * them with the root 404, which only knows the default locale.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: formatPageTitle(dict.shell.notFound.title) };
}

export default function UnmatchedPage() {
  notFound();
}
