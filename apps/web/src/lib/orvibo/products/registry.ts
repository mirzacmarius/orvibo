import { Mixpad7Overview } from "@/components/orvibo/products/mixpad_7/Mixpad7Overview";
import { Mixpad7UltraOverview } from "@/components/orvibo/products/mixpad_7_ultra/Mixpad7UltraOverview";
import { MixpadElfOverview } from "@/components/orvibo/products/mixpad_elf/MixpadElfOverview";
import { MixpadM2Overview } from "@/components/orvibo/products/mixpad_m2/MixpadM2Overview";
import { MixpadSFlagshipOverview } from "@/components/orvibo/products/mixpad_s_flagship/MixpadSFlagshipOverview";
import { MixpadXOverview } from "@/components/orvibo/products/mixpad_x/MixpadXOverview";
import { MixstationOverview } from "@/components/orvibo/products/mixstation/MixstationOverview";
import { ProductSpecView } from "@/components/orvibo/product/ProductSpecView";
import type { ProductDefinition } from "./types";

const definitions: ProductDefinition[] = [
  {
    slug: "mixstation",
    title: "ORVIBO Integrated HVAC",
    rootClass: "mixstation",
    tabs: [{ id: "overview", label: "Overview", sectionId: "overview" }],
    navClassName: "pZindex",
    View: MixstationOverview,
  },
  {
    slug: "mixpad_7",
    title: "MixPad 7 Control Panel",
    rootClass: "mixpad__7",
    tabs: [
      { id: "overview", label: "Overview", sectionId: "overview" },
      {
        id: "specifications",
        label: "Specifications",
        sectionId: "specifications",
      },
    ],
    View: Mixpad7Overview,
  },
  {
    slug: "mixpad_x",
    title: "MixPad 12 Smart Panel",
    rootClass: "mixpad_x",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: MixpadXOverview,
    segmentViews: { spec: ProductSpecView },
  },
  {
    slug: "mixpad_7_ultra",
    title: "MixPad 10 Smart Panel",
    rootClass: "mixpad7",
    tabs: [{ id: "overview", label: "Overview" }],
    View: Mixpad7UltraOverview,
  },
  {
    slug: "mixpad_m2",
    title: "MixPad 4 Smart Voice Switch",
    rootClass: "mixpad_m2",
    tabs: [{ id: "overview", label: "Overview" }],
    View: MixpadM2Overview,
  },
  {
    slug: "mixpad_s_flagship",
    title: "MixPad S Smart Panel (Flagship)",
    rootClass: "mixpad_s_flagship",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: MixpadSFlagshipOverview,
    segmentViews: { spec: ProductSpecView },
  },
  {
    slug: "mixpad_elf",
    title: "MixPad Elf Smart Switch (Gateway)",
    rootClass: "elf",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: MixpadElfOverview,
    segmentViews: { spec: ProductSpecView },
  },
];

const bySlug = new Map(definitions.map((product) => [product.slug, product]));

export function getProductDefinition(
  slug: string,
): ProductDefinition | undefined {
  return bySlug.get(slug);
}

export function listProductSlugs(): string[] {
  return [...bySlug.keys()];
}
