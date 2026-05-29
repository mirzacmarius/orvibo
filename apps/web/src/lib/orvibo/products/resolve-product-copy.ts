import type { Dictionary, ProductCopy } from "@/app/[locale]/dictionaries";
import { getProductCopy } from "@/app/[locale]/dictionaries";
import type { ProductDefinition, ProductTab } from "./types";

export function resolveProductDefinition(
  product: ProductDefinition,
  dict: Dictionary,
  slug: string,
): { product: ProductDefinition; copy: ProductCopy } | undefined {
  const copy = getProductCopy(dict, slug);
  if (!copy) return undefined;

  const tabs: ProductTab[] = product.tabs.map((tab) => ({
    ...tab,
    label: copy.tabs[tab.id] ?? tab.label,
  }));

  return {
    copy,
    product: {
      ...product,
      title: copy.title,
      tabs,
    },
  };
}
