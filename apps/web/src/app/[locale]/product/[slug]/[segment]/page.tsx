import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrviboPageShell } from "@/components/orvibo/OrviboPageShell";
import { ProductPageShell } from "@/components/orvibo/product/ProductPageShell";
import {
  formatPageTitle,
  getDictionary,
  isLocale,
} from "../../../dictionaries";
import { getProductDefinition } from "@/lib/orvibo/products/registry";
import { resolveProductDefinition } from "@/lib/orvibo/products/resolve-product-copy";

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
  const dict = await getDictionary(locale);
  const product = getProductDefinition(slug);
  const resolved = product
    ? resolveProductDefinition(product, dict, slug)
    : undefined;
  const title = resolved?.copy.title ?? product?.title ?? titleFromSlug(slug);
  const tab = resolved?.product.tabs.find((item) => item.segment === segment);
  return {
    title: formatPageTitle(`${title} — ${tab?.label ?? titleFromSlug(segment)}`),
  };
}

export default async function ProductSegmentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string; segment: string }>;
}) {
  const { locale, slug, segment } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const definition = getProductDefinition(slug);
  const SegmentView = definition?.segmentViews?.[segment];

  if (!definition || !SegmentView) {
    const fallbackTitle = titleFromSlug(slug);
    const lead = "This product tab is not available yet.";
    return (
      <OrviboPageShell
        locale={locale}
        copy={{
          meta: { title: fallbackTitle, description: lead },
          title: fallbackTitle,
          lead,
        }}
      />
    );
  }

  const resolved = resolveProductDefinition(definition, dict, slug);
  if (!resolved) notFound();

  const { product, copy } = resolved;
  const base = `/${locale}`;

  return (
    <ProductPageShell
      locale={locale}
      product={product}
      navClassName={product.navClassName}
    >
      <SegmentView
        locale={locale}
        base={base}
        copy={copy}
        common={dict.common}
      />
    </ProductPageShell>
  );
}
