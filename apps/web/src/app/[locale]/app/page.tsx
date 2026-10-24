import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrviboPageShell } from "@/components/orvibo/OrviboPageShell";
import { PLACEHOLDER_ROBOTS } from "@/lib/orvibo/site";
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
  const copy = getPageCopy(dict, "app");
  return {
    title: formatPageTitle(copy.meta.title),
    description: copy.meta.description,
    robots: PLACEHOLDER_ROBOTS,
  };
}

export default async function AppDownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return <OrviboPageShell locale={locale} copy={getPageCopy(dict, "app")} />;
}
