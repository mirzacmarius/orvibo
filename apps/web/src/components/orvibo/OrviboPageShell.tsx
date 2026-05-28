import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getDictionary, isLocale, type Locale } from "@/app/[locale]/dictionaries";
import { OrviboFooter } from "@/components/orvibo/OrviboFooter";
import { OrviboHeader } from "@/components/orvibo/OrviboHeader";
import { OrviboScrollTop } from "@/components/orvibo/OrviboScrollTop";

interface OrviboPageShellProps {
  locale: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export async function OrviboPageShell({
  locale,
  title,
  description,
  children,
}: OrviboPageShellProps) {
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const base = `/${locale}`;

  return (
    <div className="orvibo-inner min-h-screen min-w-0 bg-[#f0f2f5] text-[#111]">
      <OrviboHeader base={base} nav={dict.nav} products={dict.navProducts} />
      <main className="orvibo-inner-main mx-auto max-w-[1200px] px-6 py-24">
        <h1 className="mb-4 text-[32px] font-medium leading-tight">{title}</h1>
        {description ? (
          <p className="mb-8 max-w-[640px] text-[16px] leading-relaxed text-[#666]">
            {description}
          </p>
        ) : null}
        {children}
      </main>
      <OrviboFooter base={base} dict={dict} />
      <OrviboScrollTop />
    </div>
  );
}
