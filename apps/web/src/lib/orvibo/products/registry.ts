import { ProductSpecView } from "@/components/orvibo/product/ProductSpecView";
import { BachOverview } from "@/components/orvibo/products/bach/BachOverview";
import { BodysensorOverview } from "@/components/orvibo/products/bodysensor/BodysensorOverview";
import { BodysensorSpec } from "@/components/orvibo/products/bodysensor/BodysensorSpec";
import { Camera4Overview } from "@/components/orvibo/products/camera_4/Camera4Overview";
import { Camera4Spec } from "@/components/orvibo/products/camera_4/Camera4Spec";
import { CangqiongOverview } from "@/components/orvibo/products/cangqiong/CangqiongOverview";
import { ChuanglianOverview } from "@/components/orvibo/products/chuanglian/ChuanglianOverview";
import { ChuanglianSpec } from "@/components/orvibo/products/chuanglian/ChuanglianSpec";
import { Chuanglian2Overview } from "@/components/orvibo/products/chuanglian2/Chuanglian2Overview";
import { Chuanglian2Spec } from "@/components/orvibo/products/chuanglian2/Chuanglian2Spec";
import { ChuangliansmartOverview } from "@/components/orvibo/products/chuangliansmart/ChuangliansmartOverview";
import { ChuangliansmartSpec } from "@/components/orvibo/products/chuangliansmart/ChuangliansmartSpec";
import { Curtain3dOverview } from "@/components/orvibo/products/curtain_3d/Curtain3dOverview";
import { CurtainMotorOverview } from "@/components/orvibo/products/curtain_motor/CurtainMotorOverview";
import { DaofengOverview } from "@/components/orvibo/products/daofeng/DaofengOverview";
import { DefyOverview } from "@/components/orvibo/products/defy/DefyOverview";
import { DoorsensorOverview } from "@/components/orvibo/products/doorsensor/DoorsensorOverview";
import { DoorsensorSpec } from "@/components/orvibo/products/doorsensor/DoorsensorSpec";
import { DownlightOverview } from "@/components/orvibo/products/downlight/DownlightOverview";
import { DownlightSpec } from "@/components/orvibo/products/downlight/DownlightSpec";
import { GaosiOverview } from "@/components/orvibo/products/gaosi/GaosiOverview";
import { LightOverview } from "@/components/orvibo/products/light/LightOverview";
import { MiniHostOverview } from "@/components/orvibo/products/miniHost/MiniHostOverview";
import { Mixpad7Overview } from "@/components/orvibo/products/mixpad_7/Mixpad7Overview";
import { Mixpad7UltraOverview } from "@/components/orvibo/products/mixpad_7_ultra/Mixpad7UltraOverview";
import { MixpadElfOverview } from "@/components/orvibo/products/mixpad_elf/MixpadElfOverview";
import { MixpadM2Overview } from "@/components/orvibo/products/mixpad_m2/MixpadM2Overview";
import { MixpadS2Overview } from "@/components/orvibo/products/mixpad_s2/MixpadS2Overview";
import { MixpadS2Spec } from "@/components/orvibo/products/mixpad_s2/MixpadS2Spec";
import { MixpadSFlagshipOverview } from "@/components/orvibo/products/mixpad_s_flagship/MixpadSFlagshipOverview";
import { MixpadSwitchOverview } from "@/components/orvibo/products/mixpad_switch/MixpadSwitchOverview";
import { MixpadSwitchSpec } from "@/components/orvibo/products/mixpad_switch/MixpadSwitchSpec";
import { MixpadXOverview } from "@/components/orvibo/products/mixpad_x/MixpadXOverview";
import { MixstationOverview } from "@/components/orvibo/products/mixstation/MixstationOverview";
import { MotorDb28Overview } from "@/components/orvibo/products/motor_db28/MotorDb28Overview";
import { SoproQOverview } from "@/components/orvibo/products/q/SoproQOverview";
import { SoproQSpec } from "@/components/orvibo/products/q/SoproQSpec";
import { Q3Overview } from "@/components/orvibo/products/q3/Q3Overview";
import { SoproSOverview } from "@/components/orvibo/products/s/SoproSOverview";
import { SoproSSpec } from "@/components/orvibo/products/s/SoproSSpec";
import { S3Overview } from "@/components/orvibo/products/s3/S3Overview";
import { S5Overview } from "@/components/orvibo/products/s5/S5Overview";
import { SafepackageOverview } from "@/components/orvibo/products/safepackage/SafepackageOverview";
import { SosOverview } from "@/components/orvibo/products/sos/SosOverview";
import { T1COverview } from "@/components/orvibo/products/t1c/T1COverview";
import { T1CSpec } from "@/components/orvibo/products/t1c/T1CSpec";
import { TempHumSensorOverview } from "@/components/orvibo/products/temp_hum_sensor/TempHumSensorOverview";
import { V5Overview } from "@/components/orvibo/products/v5/V5Overview";
import { WaterAlarmOverview } from "@/components/orvibo/products/water_alarm/WaterAlarmOverview";
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
  {
    slug: "daofeng",
    title: "Blade Ultra-thin Magnetic Track Light",
    rootClass: "daofeng",
    tabs: [{ id: "overview", label: "Overview" }],
    View: DaofengOverview,
  },
  {
    slug: "q",
    title: "SOPRO Smart Lighting Q Series",
    rootClass: "q",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: SoproQOverview,
    segmentViews: { spec: SoproQSpec },
  },
  {
    slug: "s",
    title: "SOPRO Smart Lighting S Series",
    rootClass: "s",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: SoproSOverview,
    segmentViews: { spec: SoproSSpec },
  },
  {
    slug: "curtain_3d",
    title: "3D Light & Shadow Smart Curtain",
    rootClass: "curtain_3d",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: Curtain3dOverview,
    segmentViews: { spec: ProductSpecView },
  },
  {
    slug: "motor_db28",
    title: "DB28 Ultra-quiet Curtain Motor",
    rootClass: "db28",
    tabs: [{ id: "overview", label: "Overview" }],
    View: MotorDb28Overview,
  },
  {
    slug: "curtain_motor",
    title: "Elf Ultra-quiet Curtain Motor",
    rootClass: "curtain__motor",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: CurtainMotorOverview,
    segmentViews: { spec: ProductSpecView },
  },
  {
    slug: "chuangliansmart",
    title: "Super Smart Curtain (Smart Control)",
    rootClass: "chuangliansmart",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: ChuangliansmartOverview,
    segmentViews: { spec: ChuangliansmartSpec },
  },
  {
    slug: "chuanglian",
    title: "Smart Curtain Kit (Chocolate Edition)",
    rootClass: "chuanglian",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: ChuanglianOverview,
    segmentViews: { spec: ChuanglianSpec },
  },
  {
    slug: "chuanglian2",
    title: "Ultra-quiet Smart Curtain (Zigbee Edition)",
    rootClass: "chuanglian2",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: Chuanglian2Overview,
    segmentViews: { spec: Chuanglian2Spec },
  },
  {
    slug: "mixpad_s2",
    title: "Smart Lock S2",
    rootClass: "mixpad_s2",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: MixpadS2Overview,
    segmentViews: { spec: MixpadS2Spec },
  },
  {
    slug: "v5",
    title: "Smart Lock V5",
    rootClass: "v5",
    tabs: [{ id: "overview", label: "Overview" }],
    View: V5Overview,
  },
  {
    slug: "t1c",
    title: "Smart Lock T1C",
    rootClass: "t1c",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: T1COverview,
    segmentViews: { spec: T1CSpec },
  },
  {
    slug: "bodysensor",
    title: "Motion Sensor",
    rootClass: "bodysensor",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: BodysensorOverview,
    segmentViews: { spec: BodysensorSpec },
  },
  {
    slug: "doorsensor",
    title: "Door & Window Sensor",
    rootClass: "doorsensor",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: DoorsensorOverview,
    segmentViews: { spec: DoorsensorSpec },
  },
  {
    slug: "safepackage",
    title: "Security Kit",
    rootClass: "safepackage",
    tabs: [{ id: "overview", label: "Overview" }],
    View: SafepackageOverview,
  },
  {
    slug: "miniHost",
    title: "Zigbee Mini Gateway",
    rootClass: "miniHost",
    tabs: [{ id: "overview", label: "Overview" }],
    View: MiniHostOverview,
  },
  {
    slug: "sos",
    title: "Emergency Button",
    rootClass: "sos",
    tabs: [{ id: "overview", label: "Overview" }],
    View: SosOverview,
  },
  {
    slug: "temp_hum_sensor",
    title: "Temperature & Humidity Sensor",
    rootClass: "temp_hum_sensor",
    tabs: [{ id: "overview", label: "Overview" }],
    View: TempHumSensorOverview,
  },
  {
    slug: "water_alarm",
    title: "Water Leak Sensor",
    rootClass: "water_alarm",
    tabs: [{ id: "overview", label: "Overview" }],
    View: WaterAlarmOverview,
  },
  {
    slug: "camera_4",
    title: "S1 2K Smart Camera",
    rootClass: "camera_4",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "spec", label: "Specifications", segment: "spec" },
    ],
    View: Camera4Overview,
    segmentViews: { spec: Camera4Spec },
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
