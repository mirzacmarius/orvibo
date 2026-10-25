import { ProductSpecView } from "@/components/orvibo/product/ProductSpecView";
import { BachOverview } from "@/components/orvibo/products/bach/BachOverview";
import { CangqiongOverview } from "@/components/orvibo/products/cangqiong/CangqiongOverview";
import { DefyOverview } from "@/components/orvibo/products/defy/DefyOverview";
import { DownlightOverview } from "@/components/orvibo/products/downlight/DownlightOverview";
import { DownlightSpec } from "@/components/orvibo/products/downlight/DownlightSpec";
import { GaosiOverview } from "@/components/orvibo/products/gaosi/GaosiOverview";
import { LightOverview } from "@/components/orvibo/products/light/LightOverview";
import { Mixpad7Overview } from "@/components/orvibo/products/mixpad_7/Mixpad7Overview";
import { Mixpad7UltraOverview } from "@/components/orvibo/products/mixpad_7_ultra/Mixpad7UltraOverview";
import { MixpadElfOverview } from "@/components/orvibo/products/mixpad_elf/MixpadElfOverview";
import { MixpadM2Overview } from "@/components/orvibo/products/mixpad_m2/MixpadM2Overview";
import { MixpadSFlagshipOverview } from "@/components/orvibo/products/mixpad_s_flagship/MixpadSFlagshipOverview";
import { MixpadSwitchOverview } from "@/components/orvibo/products/mixpad_switch/MixpadSwitchOverview";
import { MixpadSwitchSpec } from "@/components/orvibo/products/mixpad_switch/MixpadSwitchSpec";
import { MixpadXOverview } from "@/components/orvibo/products/mixpad_x/MixpadXOverview";
import { MixstationOverview } from "@/components/orvibo/products/mixstation/MixstationOverview";
import { Q3Overview } from "@/components/orvibo/products/q3/Q3Overview";
import { S3Overview } from "@/components/orvibo/products/s3/S3Overview";
import { S5Overview } from "@/components/orvibo/products/s5/S5Overview";
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
  {
    slug: "bach",
    title: "Bach Smart Switch",
    rootClass: "bach",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: BachOverview,
    segmentViews: { spec: ProductSpecView },
  },
  {
    slug: "defy",
    title: "Defy Smart Switch",
    rootClass: "defy",
    tabs: [{ id: "overview", label: "Overview" }],
    View: DefyOverview,
  },
  {
    slug: "gaosi",
    title: "Gauss Smart Switch",
    rootClass: "gaosi",
    tabs: [{ id: "overview", label: "Overview" }],
    View: GaosiOverview,
  },
  {
    slug: "mixpad_switch",
    title: "MixSwitch Smart Switch",
    rootClass: "mixpad_switch",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: MixpadSwitchOverview,
    segmentViews: { spec: MixpadSwitchSpec },
  },
  {
    slug: "s3",
    title: "Anti-glare Smart Downlight S3",
    rootClass: "s3",
    tabs: [{ id: "overview", label: "Overview" }],
    View: S3Overview,
  },
  {
    slug: "downlight",
    title: "Smart Tunable Light",
    rootClass: "downlight",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: DownlightOverview,
    segmentViews: { spec: DownlightSpec },
  },
  {
    slug: "cangqiong",
    title: "Cangqiong Pro Natural Light",
    rootClass: "cangqiong",
    tabs: [{ id: "overview", label: "Overview" }],
    View: CangqiongOverview,
  },
  {
    slug: "q3",
    title: "Eye-care Downlight Q3",
    rootClass: "q3",
    tabs: [{ id: "overview", label: "Overview" }],
    View: Q3Overview,
  },
  {
    slug: "s5",
    title: "Smart Spotlight S5",
    rootClass: "s5",
    tabs: [{ id: "overview", label: "Overview" }],
    View: S5Overview,
  },
  {
    slug: "light",
    title: "Bauhaus Smart Ambient Lights",
    rootClass: "light",
    tabs: [{ id: "overview", label: "Overview" }],
    View: LightOverview,
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
