import { ProductSpecSheet } from "@/components/orvibo/product/ProductSpecSheet";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** Keys under `spec.` in the page's text files, in display order. */
const specs = [
  "size",
  "color",
  "cpu",
  "os",
  "screen",
  "mics",
  "speakers",
  "housing",
  "protocols",
  "backBox",
  "voltage",
  "circuits",
  "load",
  "ir",
  "zigbee",
  "scenes",
];

export function MixpadXSpec({ locale, text, common }: ProductViewProps) {
  const { t } = productPageHelpers(locale, text);

  return (
    <ProductSpecSheet
      common={common}
      items={specs.map((key) => ({ key, text: t(`spec.${key}`) }))}
    />
  );
}
