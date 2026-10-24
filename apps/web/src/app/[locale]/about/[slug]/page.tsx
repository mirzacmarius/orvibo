import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrviboPageShell } from "@/components/orvibo/OrviboPageShell";
import { PLACEHOLDER_ROBOTS } from "@/lib/orvibo/site";
import {
  formatPageTitle,
  getAboutPageCopy,
  getDictionary,
  isLocale,
} from "../../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const copy = getAboutPageCopy(dict, slug);
  if (!copy) return { title: formatPageTitle(dict.shell.notFound.title) };
  return {
    title: formatPageTitle(copy.meta.title),
    description: copy.meta.description,
    robots: PLACEHOLDER_ROBOTS,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const copy = getAboutPageCopy(dict, slug);
  if (!copy) notFound();

  return <OrviboPageShell locale={locale} copy={copy} />;
}
