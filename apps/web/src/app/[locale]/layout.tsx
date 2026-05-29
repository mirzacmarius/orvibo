import "../../styles/orvibo.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { OrviboVideoProvider } from "@/components/orvibo/OrviboVideoProvider";
import { getDictionary, isLocale, type Locale } from "./dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="orvibo-site" data-locale={locale as Locale}>
      <OrviboVideoProvider>{children}</OrviboVideoProvider>
    </div>
  );
}
