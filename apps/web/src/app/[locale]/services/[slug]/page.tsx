import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrviboPageShell } from "@/components/orvibo/OrviboPageShell";
import { isLocale } from "../../dictionaries";

const SERVICE_TITLES: Record<string, string> = {
  customization: "Custom solutions",
  case: "Featured projects",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const title = SERVICE_TITLES[slug] ?? slug;
  return { title: `${title} | ORVIBO` };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const title = SERVICE_TITLES[slug] ?? slug;

  return (
    <OrviboPageShell
      locale={locale}
      title={title}
      description="Support page — full clone coming in ORV-26."
    />
  );
}
