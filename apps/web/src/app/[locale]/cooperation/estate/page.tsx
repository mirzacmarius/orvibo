import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrviboPageShell } from "@/components/orvibo/OrviboPageShell";
import { isLocale } from "../../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: "Real estate projects | ORVIBO" };
}

export default async function EstateCooperationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <OrviboPageShell
      locale={locale}
      title="Real estate projects"
      description="Real estate cooperation page — full clone coming in ORV-24."
    />
  );
}
