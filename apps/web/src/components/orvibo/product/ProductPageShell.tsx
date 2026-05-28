import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getDictionary, isLocale, type Locale } from "@/app/[locale]/dictionaries";
import { OrviboFooter } from "@/components/orvibo/OrviboFooter";
import { OrviboHeader } from "@/components/orvibo/OrviboHeader";
import { OrviboScrollTop } from "@/components/orvibo/OrviboScrollTop";
import { ProductDetailNav } from "@/components/orvibo/product/ProductDetailNav";
import type { ProductDefinition } from "@/lib/orvibo/products/types";
import "@/styles/orvibo/product-detail.css";
import "@/styles/orvibo/products/common_detail.css";

interface ProductPageShellProps {
  locale: string;
  product: ProductDefinition;
  children: ReactNode;
  /** Extra classes on sticky sub-nav (e.g. `pZindex` on MixStation). */
  navClassName?: string;
}

export async function ProductPageShell({
  locale,
  product,
  children,
  navClassName,
}: ProductPageShellProps) {
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const base = `/${locale}`;

  return (
    <div className={`orvibo-product orvibo-inner min-w-0 ${product.rootClass}`}>
      <OrviboHeader base={base} nav={dict.nav} products={dict.navProducts} />
      <ProductDetailNav
        title={product.title}
        slug={product.slug}
        base={base}
        tabs={product.tabs}
        stickyClassName={navClassName}
      />
      <div className="detail__container">{children}</div>
      <OrviboFooter base={base} dict={dict} />
      <OrviboScrollTop />
    </div>
  );
}
