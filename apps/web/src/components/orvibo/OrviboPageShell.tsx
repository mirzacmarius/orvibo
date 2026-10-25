import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  getDictionary,
  getProductCopy,
  isLocale,
  type Locale,
  type PageCopy,
} from "@/app/[locale]/dictionaries";
import { SiteShell } from "@/components/orvibo/layout";
import { Link } from "@/components/orvibo/ui/link";
import { listProductSlugs } from "@/lib/orvibo/products/registry";
import { orviboRoutes } from "@/lib/orvibo/routes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@v1/ui/card";

interface OrviboPageShellProps {
  locale: string;
  copy: PageCopy;
  children?: ReactNode;
}

export async function OrviboPageShell({
  locale,
  copy,
  children,
}: OrviboPageShellProps) {
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const base = `/${locale}`;
  const routes = orviboRoutes(base);
  const shell = dict.shell.comingSoon;
  const builtProducts = listProductSlugs().flatMap((slug) => {
    const title = getProductCopy(dict, slug)?.title;
    return title ? [{ slug, title }] : [];
  });

  return (
    <div className="orvibo-inner min-h-screen min-w-0 bg-[#f0f2f5] text-[#111]">
      <SiteShell base={base} dict={dict}>
        <main className="orvibo-inner-main mx-auto max-w-[1200px] px-[24px] py-[96px]">
          <h1 className="mb-[16px] text-[32px] font-medium leading-[40px]">
            {copy.title}
          </h1>
          {copy.lead ? (
            <p className="mb-[32px] max-w-[640px] text-[16px] leading-[26px] text-[#666]">
              {copy.lead}
            </p>
          ) : null}
          {children ?? (
            <Card className="max-w-[760px] rounded-[4px] bg-white shadow-none">
              <CardHeader className="p-[32px] pb-[16px]">
                <CardTitle className="text-[24px] font-medium leading-[32px] text-orvibo-fg">
                  {shell.title}
                </CardTitle>
                <CardDescription className="text-[16px] leading-[26px] text-[#666]">
                  {shell.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-[32px] pt-0 text-[14px] leading-[24px] text-[#777]">
                {builtProducts.length > 0 ? (
                  <>
                    <p>{shell.body}</p>
                    {/* `.orvibo-site a` inherits its colour, so links are coloured via their wrapper. */}
                    <ul className="mt-[12px] flex flex-col gap-[8px]">
                      {builtProducts.map((product) => (
                        <li
                          className="w-fit text-[16px] leading-[24px] text-orvibo-link hover:text-orvibo-link-hover"
                          key={product.slug}
                        >
                          <Link href={routes.product(product.slug)}>
                            {product.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
                <p className="mt-[24px] w-fit text-[14px] leading-[24px] text-orvibo-link hover:text-orvibo-link-hover">
                  <Link href={routes.home}>{dict.shell.backHome}</Link>
                </p>
              </CardContent>
            </Card>
          )}
        </main>
      </SiteShell>
    </div>
  );
}
