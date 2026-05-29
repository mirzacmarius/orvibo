import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  getDictionary,
  isLocale,
  type Locale,
} from "@/app/[locale]/dictionaries";
import { SiteShell } from "@/components/orvibo/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@v1/ui/card";

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
      <SiteShell base={base} dict={dict}>
        <main className="orvibo-inner-main mx-auto max-w-[1200px] px-[24px] py-[96px]">
          <h1 className="mb-[16px] text-[32px] font-medium leading-[40px]">
            {title}
          </h1>
          {description ? (
            <p className="mb-[32px] max-w-[640px] text-[16px] leading-[26px] text-[#666]">
              {description}
            </p>
          ) : null}
          {children ?? (
            <Card className="max-w-[760px] rounded-[4px] bg-white shadow-none">
              <CardHeader className="p-[32px] pb-[16px]">
                <CardTitle className="text-[24px] font-medium leading-[32px] text-orvibo-fg">
                  Coming soon
                </CardTitle>
                <CardDescription className="text-[16px] leading-[26px] text-[#666]">
                  This page is queued for the Tailwind migration.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-[32px] pt-0 text-[14px] leading-[24px] text-[#777]">
                The route is already wired into the new site shell so the shared
                chrome can be validated before the full page clone lands.
              </CardContent>
            </Card>
          )}
        </main>
      </SiteShell>
    </div>
  );
}
