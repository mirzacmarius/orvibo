import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrviboPageShell } from "@/components/orvibo/OrviboPageShell";
import { isLocale } from "../../dictionaries";

const ABOUT_TITLES: Record<string, string> = {
  about_us: "Company profile",
  culture: "Culture",
  join_us: "Careers",
  contact: "Contact us",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const title = ABOUT_TITLES[slug] ?? slug;
  return { title: `${title} | ORVIBO` };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const title = ABOUT_TITLES[slug] ?? slug;

  return (
    <OrviboPageShell
      locale={locale}
      title={title}
      description="About page — full clone coming in ORV-25."
    />
  );
}
