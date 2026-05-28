import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrviboPageShell } from "@/components/orvibo/OrviboPageShell";
import { ProductPageShell } from "@/components/orvibo/product/ProductPageShell";
import { isLocale } from "../../dictionaries";
import { getProductDefinition } from "@/lib/orvibo/products/registry";

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
  const product = getProductDefinition(slug);
  const title = product?.title ?? titleFromSlug(slug);
  return { title: `${title} | ORVIBO` };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const product = getProductDefinition(slug);
  if (!product) {
    return (
      <OrviboPageShell
        locale={locale}
        title={titleFromSlug(slug)}
        description="This product page is not built yet. Each product uses its own React layout registered in the product catalog."
      />
    );
  }

  const base = `/${locale}`;
  const View = product.View;

  return (
    <ProductPageShell
      locale={locale}
      product={product}
      navClassName={product.navClassName}
    >
      <View locale={locale} base={base} />
    </ProductPageShell>
  );
}
