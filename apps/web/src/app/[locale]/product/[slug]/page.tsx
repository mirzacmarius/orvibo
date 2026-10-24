import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrviboPageShell } from "@/components/orvibo/OrviboPageShell";
import { ProductPageShell } from "@/components/orvibo/product/ProductPageShell";
import {
  type Dictionary,
  formatPageTitle,
  getDictionary,
  getProductCopy,
  isLocale,
} from "../../dictionaries";
import {
  getProductDefinition,
  listProductSlugs,
} from "@/lib/orvibo/products/registry";
import { resolveProductDefinition } from "@/lib/orvibo/products/resolve-product-copy";
import {
  getUpcomingProductLabelKey,
  listUpcomingProductSlugs,
} from "@/lib/orvibo/products/upcoming";
import { PLACEHOLDER_ROBOTS } from "@/lib/orvibo/site";

function titleFromSlug(slug: string) {
  return slug.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Display name for a product that is linked from the site but not built yet. */
function upcomingProductTitle(dict: Dictionary, slug: string) {
  const labelKey = getUpcomingProductLabelKey(slug);
  if (!labelKey) return undefined;
  return dict.navProducts[labelKey] ?? titleFromSlug(slug);
}

export async function generateStaticParams() {
  const locales = ["en"] as const;
  const slugs = [...listProductSlugs(), ...listUpcomingProductSlugs()];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const product = getProductDefinition(slug);

  if (product) {
    const copy = getProductCopy(dict, slug);
    return { title: formatPageTitle(copy?.title ?? product.title) };
  }

  const upcomingTitle = upcomingProductTitle(dict, slug);
  if (!upcomingTitle) return {};
  return {
    title: formatPageTitle(upcomingTitle),
    description: dict.shell.unbuiltProduct,
    robots: PLACEHOLDER_ROBOTS,
  };
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
    const title = upcomingProductTitle(dict, slug);
    if (!title) notFound();
    return (
      <OrviboPageShell
        locale={locale}
        copy={{
          meta: { title, description: dict.shell.unbuiltProduct },
          title,
          lead: "",
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
