import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES } from "@/lib/orvibo/i18n";
import { ProductPageShell } from "@/components/orvibo/product/ProductPageShell";
import {
  formatPageTitle,
  getDictionary,
  isLocale,
} from "../../../dictionaries";
import { loadProductPageText } from "@/lib/orvibo/products/page-text";
import { getProductDefinition } from "@/lib/orvibo/products/registry";
import { resolveProductDefinition } from "@/lib/orvibo/products/resolve-product-copy";
import { localeAlternates } from "@/lib/orvibo/site";

function titleFromSlug(slug: string) {
  return slug.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateStaticParams() {
  const { listProductSlugs, getProductDefinition } = await import(
    "@/lib/orvibo/products/registry"
  );
  const params: { locale: string; slug: string; segment: string }[] = [];

  for (const locale of LOCALES) {
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
  if (!product?.segmentViews?.[segment]) {
    return { title: formatPageTitle(dict.shell.notFound.title) };
  }
  const resolved = resolveProductDefinition(product, dict, slug);
  const title = resolved?.copy.title ?? product.title;
  const tab = resolved?.product.tabs.find((item) => item.segment === segment);
  const text = await loadProductPageText(slug, locale);
  return {
    title: formatPageTitle(`${title} — ${tab?.label ?? titleFromSlug(segment)}`),
    description: text[`meta.${segment}.description`] ?? text["meta.description"],
    alternates: localeAlternates(locale, `/product/${slug}/${segment}`),
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

  if (!definition || !SegmentView) notFound();

  const resolved = resolveProductDefinition(definition, dict, slug);
  if (!resolved) notFound();

  const { product, copy } = resolved;
  const base = `/${locale}`;
  const text = await loadProductPageText(slug, locale);

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
        text={text}
      />
    </ProductPageShell>
  );
}
