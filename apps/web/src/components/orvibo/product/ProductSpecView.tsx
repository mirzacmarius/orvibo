import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { ProductSpecSheet } from "./ProductSpecSheet";
import { productPageHelpers } from "./productPageHelpers";

/**
 * A `spec` tab that lists the page's `spec.<key>` strings in the order of its
 * text file, for the orvibo.com `*_install` pages that are one spec per line.
 */
export function ProductSpecView({ locale, text, common }: ProductViewProps) {
  const { t } = productPageHelpers(locale, text);
  const keys = Object.keys(text).filter((key) => key.startsWith("spec."));

  return (
    <ProductSpecSheet
      common={common}
      items={keys.map((key) => ({ key, text: t(key) }))}
    />
  );
}
