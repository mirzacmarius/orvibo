import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrviboPageShell } from "@/components/orvibo/OrviboPageShell";
import { ProductPageShell } from "@/components/orvibo/product/ProductPageShell";
import { isLocale } from "../../../dictionaries";
import { getProductDefinition } from "@/lib/orvibo/products/registry";

function titleFromSlug(slug: string) {
  return slug.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateStaticParams() {
  const { listProductSlugs, getProductDefinition } = await import(
    "@/lib/orvibo/products/registry"
  );
  const locales = ["en"] as const;
  const params: { locale: string; slug: string; segment: string }[] = [];

  for (const locale of locales) {
    for (const slug of listProductSlugs()) {
      const product = getProductDefinition(slug);
      if (!product?.segmentViews) continue;
      for (const segment of Object.keys(product.segmentViews)) {
        params.push({ locale, slug, segment });
      }
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string; segment: string }>;
}): Promise<Metadata> {
  const { locale, slug, segment } = await params;
  if (!isLocale(locale)) return {};
  const product = getProductDefinition(slug);
  const title = product?.title ?? titleFromSlug(slug);
  const tab = product?.tabs.find((item) => item.segment === segment);
  return {
    title: `${title} — ${tab?.label ?? titleFromSlug(segment)} | ORVIBO`,
  };
}

export default async function ProductSegmentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string; segment: string }>;
}) {
  const { locale, slug, segment } = await params;
  if (!isLocale(locale)) notFound();

  const product = getProductDefinition(slug);
  const SegmentView = product?.segmentViews?.[segment];

  if (!product || !SegmentView) {
    return (
      <OrviboPageShell
        locale={locale}
        title={titleFromSlug(slug)}
        description="This product tab is not available yet."
      />
    );
  }

  const base = `/${locale}`;

  return (
    <ProductPageShell
      locale={locale}
      product={product}
      navClassName={product.navClassName}
    >
      <SegmentView locale={locale} base={base} />
    </ProductPageShell>
  );
}
