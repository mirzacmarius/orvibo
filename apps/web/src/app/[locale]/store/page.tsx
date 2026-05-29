import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrviboPageShell } from "@/components/orvibo/OrviboPageShell";
import {
  formatPageTitle,
  getDictionary,
  getPageCopy,
  isLocale,
} from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const copy = getPageCopy(dict, "store");
  return {
    title: formatPageTitle(copy.meta.title),
    description: copy.meta.description,
  };
}

export default async function StorePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return <OrviboPageShell locale={locale} copy={getPageCopy(dict, "store")} />;
}
