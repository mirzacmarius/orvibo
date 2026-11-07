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
import { Card, CardText, CardTitle } from "@/components/orvibo/ui/card";
import { TextLink } from "@/components/orvibo/ui/text-link";
import { listProductSlugs } from "@/lib/orvibo/products/registry";
import { orviboRoutes } from "@/lib/orvibo/routes";

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
    <div className="orvibo-inner min-h-screen min-w-0 bg-ov-page text-ov-ink">
      <SiteShell base={base} dict={dict}>
        <main className="orvibo-inner-main mx-auto max-w-ov-content px-ov-4 py-ov-24 sm:px-ov-6">
          <h1 className="mb-ov-4 text-ov-title-l text-ov-ink">{copy.title}</h1>
          {copy.lead ? (
            <p className="mb-ov-8 max-w-[640px] text-ov-body text-ov-ink-muted">
              {copy.lead}
            </p>
          ) : null}
          {children ?? (
            <Card className="max-w-[760px]">
              <CardTitle>{shell.title}</CardTitle>
              <CardText>{shell.description}</CardText>
              {builtProducts.length > 0 ? (
                <div className="flex flex-col gap-ov-3">
                  <p className="text-ov-body-s text-ov-ink-muted">
                    {shell.body}
                  </p>
                  <ul className="flex flex-col gap-ov-2">
                    {builtProducts.map((product) => (
                      <li className="text-ov-body" key={product.slug}>
                        <TextLink href={routes.product(product.slug)}>
                          {product.title}
                        </TextLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <p className="mt-ov-2 text-ov-body-s">
                <TextLink href={routes.home}>{dict.shell.backHome}</TextLink>
              </p>
            </Card>
          )}
        </main>
      </SiteShell>
    </div>
  );
}
