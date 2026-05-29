import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrviboPageShell } from "@/components/orvibo/OrviboPageShell";
import { ProductPageShell } from "@/components/orvibo/product/ProductPageShell";
import {
  formatPageTitle,
  getDictionary,
  getProductCopy,
  isLocale,
} from "../../dictionaries";
import { getProductDefinition } from "@/lib/orvibo/products/registry";
import { resolveProductDefinition } from "@/lib/orvibo/products/resolve-product-copy";

function titleFromSlug(slug: string) {
  return slug.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateStaticParams() {
  const { listProductSlugs } = await import("@/lib/orvibo/products/registry");
  const locales = ["en"] as const;
  return locales.flatMap((locale) =>
    listProductSlugs().map((slug) => ({ locale, slug })),
  );
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const product = getProductDefinition(slug);
  const copy = getProductCopy(dict, slug);
  const title = copy?.title ?? product?.title ?? titleFromSlug(slug);
  return { title: formatPageTitle(title) };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const definition = getProductDefinition(slug);

  if (!definition) {
    const fallbackTitle = titleFromSlug(slug);
    return (
      <OrviboPageShell
        locale={locale}
        copy={{
          meta: {
            title: fallbackTitle,
            description: dict.shell.unbuiltProduct,
          },
          title: fallbackTitle,
          lead: dict.shell.unbuiltProduct,
        }}
      />
    );
  }

  const resolved = resolveProductDefinition(definition, dict, slug);
  if (!resolved) notFound();

  const { product, copy } = resolved;
  const base = `/${locale}`;
  const View = product.View;

  return (
    <ProductPageShell
      locale={locale}
      product={product}
      navClassName={product.navClassName}
    >
      <View locale={locale} base={base} copy={copy} common={dict.common} />
    </ProductPageShell>
  );
}
