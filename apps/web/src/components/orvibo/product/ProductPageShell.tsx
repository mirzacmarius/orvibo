import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  getDictionary,
  isLocale,
  type Locale,
} from "@/app/[locale]/dictionaries";
import { SiteShell } from "@/components/orvibo/layout";
import { ProductDetailNav } from "@/components/orvibo/product/ProductDetailNav";
import type { ProductDefinition } from "@/lib/orvibo/products/types";

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
    <div
      className={`orvibo-product orvibo-inner min-w-0 bg-transparent text-[#111] ${product.rootClass}`}
    >
      <SiteShell base={base} dict={dict}>
        <ProductDetailNav
          title={product.title}
          slug={product.slug}
          base={base}
          tabs={product.tabs}
          stickyClassName={navClassName}
        />
        <div className="w-full overflow-x-clip bg-transparent">{children}</div>
      </SiteShell>
    </div>
  );
}
