import type { ComponentType } from "react";
import type {
  Dictionary,
  Locale,
  ProductCopy,
} from "@/app/[locale]/dictionaries";

/**
 * Product detail pages are not one shared template.
 * Each product ships its own React layout; only the chrome (header, sticky tabs, footer)
 * is shared via ProductPageShell.
 */
export interface ProductTab {
  id: string;
  label: string;
  /** In-page anchor — smooth-scroll + scroll-spy when set. */
  sectionId?: string;
  /** Extra path segment, e.g. `spec` → `/[locale]/product/[slug]/spec` */
  segment?: string;
}

export interface ProductDefinition {
  slug: string;
  title: string;
  /** Root wrapper class on the live site (e.g. `mixstation`, `mixpad__7`). */
  rootClass: string;
  tabs: ProductTab[];
  /** Optional class on `.detail_header` (e.g. MixStation uses `pZindex`). */
  navClassName?: string;
  View: ComponentType<ProductViewProps>;
  /** Secondary tab bodies keyed by `segment` (e.g. `spec`). */
  segmentViews?: Partial<Record<string, ComponentType<ProductViewProps>>>;
}

export interface ProductViewProps {
  locale: Locale;
  base: string;
  copy: ProductCopy;
  common: Dictionary["common"];
}
