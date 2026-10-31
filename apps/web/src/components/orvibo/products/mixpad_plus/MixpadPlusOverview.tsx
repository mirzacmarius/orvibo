import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductSlideshow } from "@/components/orvibo/product/ProductSlideshow";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { orviboRoutes } from "@/lib/orvibo/routes";
import { cn } from "@v1/ui/utils";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

/** The pictures clean.py cuts out of orvibo.com's diagrams: the wheel without its words, the "Open" logos, the project photos. */
const ASSETS = "/orvibo/products/mixpad_plus";

/** The five developers under the hero, named in the line above them; a grey rule between two. */
const INVESTORS = [
  {
    src: "/guanwang_second/front/images/products/mixpad_plus/1-f974d0d3ab.webp",
    width: 79,
    height: 20,
    size: "h-[0.2rem] w-[0.79rem]",
  },
  {
    src: "/guanwang_second/front/images/products/mixpad_plus/2-9afc312462.webp",
    width: 65,
    height: 20,
    size: "h-[0.2rem] w-[0.65rem]",
  },
  {
    src: "/guanwang_second/front/images/products/mixpad_plus/4-ce76474fcd.webp",
    width: 101,
    height: 19,
    size: "h-[0.18rem] w-[0.87rem]",
  },
  {
    src: "/guanwang_second/front/images/products/mixpad_plus/3-5570892302.webp",
    width: 87,
    height: 18,
    size: "h-[0.18rem] w-[0.87rem]",
  },
  {
    src: "/guanwang_second/front/images/products/mixpad_plus/5-af5ae231d4.webp",
    width: 76,
    height: 18,
    size: "h-[0.18rem] w-[0.76rem]",
  },
] as const;

/** sec1 and sec2: three photos, each with a heading and a paragraph. */
const SMART = [
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec1_1-496b23edf7.webp",
    alt: "alt.sec1_1",
    title: "sec1.card",
    desc: "sec1.card2",
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec1_2-2faf3d0d39.webp",
    alt: null,
    title: "sec1.card3",
    desc: "sec1.card4",
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec1_3-a70d905f3e.webp",
    alt: null,
    title: "sec1.card5",
    desc: "sec1.card6",
  },
] as const;
const TROUBLES = [
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec2_1-2af2cff61a.webp",
    title: "sec2.card",
    desc: "sec2.card2",
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec2_2-15987198fb.webp",
    title: "sec2.card3",
    desc: "sec2.card4",
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec2_3-2df9190ec5.webp",
    title: "sec2.card5",
    desc: "sec2.card6",
  },
] as const;

/** sec3 and sec16: white cards with an icon. */
const REINVENTED = [
  {
    icon: "/guanwang_second/front/images/products/mixpad_plus/sec3_1-83e43fc568.webp",
    width: 104,
    title: "sec3.card",
    desc: "sec3.card2",
  },
  {
    icon: "/guanwang_second/front/images/products/mixpad_plus/sec3_2-853060d4a7.webp",
    width: 107,
    title: "sec3.card3",
    desc: "sec3.card4",
  },
  {
    icon: "/guanwang_second/front/images/products/mixpad_plus/sec3_3-a3c3a8111f.webp",
    width: 104,
    title: "sec3.card5",
    desc: "sec3.card6",
  },
] as const;
const ADVANTAGES = [
  {
    icon: "/guanwang_second/front/images/products/mixpad_plus/sec16_1-980527e4c0.webp",
    width: 128,
    height: 128,
    title: "sec16.card",
    desc: "sec16.card2",
  },
  {
    icon: "/guanwang_second/front/images/products/mixpad_plus/sec16_2-2eab0edd91.webp",
    width: 117,
    height: 114,
    title: "sec16.card3",
    desc: "sec16.card4",
  },
  {
    icon: "/guanwang_second/front/images/products/mixpad_plus/sec16_3-22c9079112.webp",
    width: 142,
    height: 142,
    title: "sec16.card5",
    desc: "sec16.card6",
  },
] as const;

/** sec6: three panel screens; the columns are wider than the screens, for the longer Latin text. */
const STANDARD = [
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec6_1-60facad36b.webp",
    width: 338,
    height: 242,
    size: "w-[3.38rem]",
    title: "sec6.card",
    points: [
      "sec6.cardDesc",
      "sec6.cardDesc2",
      "sec6.cardDesc3",
      "sec6.cardDesc4",
    ],
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec6_2-48b210081d.webp",
    width: 315,
    height: 236,
    size: "w-[3.15rem]",
    title: "sec6.card2",
    points: [
      "sec6.cardDesc5",
      "sec6.cardDesc6",
      "sec6.cardDesc7",
      "sec6.cardDesc8",
    ],
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec6_3-7b77622498.webp",
    width: 364,
    height: 242,
    size: "w-[3.64rem]",
    title: "sec6.card3",
    points: ["sec6.cardDesc9", "sec6.cardDesc10"],
  },
] as const;

/**
 * sec7's comparison (words in the picture on orvibo.com): each product's name,
 * centred under it, and its features, from the left edge of its column.
 */
const COMPARISON = [
  {
    name: "MixPad E",
    centre: "left-[3.685rem]",
    column: "left-[1.97rem] w-[4.9rem]",
    rows: [
      ["sec7.e1", "sec7.e1_desc"],
      ["sec7.e2", "sec7.e2_desc"],
      ["sec7.e3", "sec7.e3_desc"],
      ["sec7.e4", "sec7.e4_desc"],
      ["sec7.e5", "sec7.e5_desc"],
      ["sec7.e6", "sec7.e6_desc"],
    ],
  },
  {
    name: "MixPad Plus",
    centre: "left-[9.175rem]",
    column: "left-[7.33rem] w-[4.85rem]",
    rows: [
      ["sec7.p1", "sec7.p1_desc"],
      ["sec7.p2", "sec7.p2_desc"],
      ["sec7.p3", "sec7.p3_desc"],
      ["sec7.p4", "sec7.p4_desc"],
      ["sec7.p5", "sec7.p5_desc"],
      ["sec7.p6", "sec7.p6_desc"],
    ],
  },
  {
    name: "sec7.classic",
    centre: "left-[15.205rem]",
    column: "left-[13.18rem] w-[4.4rem]",
    rows: [
      ["sec7.c1", "sec7.c1_desc"],
      ["sec7.c2", "sec7.c2_desc"],
    ],
  },
] as const;

/** sec9: four scenes. */
const SCENES = [
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec9_1-9a1746d334.webp",
    title: "sec9.card",
    desc: "sec9.card2",
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec9_2-0324003194.webp",
    title: "sec9.card3",
    desc: "sec9.card4",
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec9_3-92d0827ce1.webp",
    title: "sec9.card5",
    desc: "sec9.card6",
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec9_4-ca85cd5551.webp",
    title: "sec9.card7",
    desc: "sec9.card8",
  },
] as const;

/** sec11: three services, their grey boxes as tall as the tallest. */
const COMMUNITY = [
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec11_1-9ed64b3d37.webp",
    title: "sec11.item_info",
    desc: "sec11.item_info2",
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec11_2-d0fc1c0e81.webp",
    title: "sec11.item_info3",
    desc: "sec11.item_info4",
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec11_3-952ccf2601.webp",
    title: "sec11.item_info5",
    desc: "sec11.item_info6",
  },
] as const;

/** The building door station's four cards (white panels in the picture): heading over the rule, points under it. */
const ACCESS = [
  {
    title: "sec12.safer",
    points: ["sec12.safer1", "sec12.safer2"],
    box: "top-[4.245rem] left-[8.72rem]",
  },
  {
    title: "sec12.faster",
    points: ["sec12.faster1", "sec12.faster2"],
    box: "top-[4.245rem] left-[12rem]",
  },
  {
    title: "sec12.easier",
    points: ["sec12.easier1", "sec12.easier2"],
    box: "top-[6.965rem] left-[8.72rem]",
  },
  {
    title: "sec12.stronger",
    points: ["sec12.stronger1", "sec12.stronger2"],
    box: "top-[6.965rem] left-[12rem]",
  },
] as const;

/**
 * The service wheel's words (a picture on orvibo.com), where they were in the
 * 1057 × 760 wheel: the outer ones by their edge nearest the wheel and their
 * middle; the inner ones by their middle, or by the edge beside the upright
 * spoke for the four that touch it.
 */
const WHEEL_OUTER = [
  ["sec14.out1", "right-[7.97rem] top-[0.21rem] text-right"],
  ["sec14.out2", "right-[9.21rem] top-[1.43rem] text-right"],
  ["sec14.out3", "right-[9.64rem] top-[3.05rem] text-right"],
  ["sec14.out4", "right-[9.64rem] top-[4.62rem] text-right"],
  ["sec14.out5", "right-[9.01rem] top-[6.18rem] text-right"],
  ["sec14.out6", "right-[7.69rem] top-[7.47rem] text-right"],
  ["sec14.out7", "left-[7.91rem] top-[0.21rem]"],
  ["sec14.out8", "left-[8.88rem] top-[1.43rem]"],
  ["sec14.out9", "left-[9.63rem] top-[3.05rem]"],
  ["sec14.out10", "left-[9.55rem] top-[4.62rem]"],
  ["sec14.out11", "left-[8.96rem] top-[6.18rem]"],
  ["sec14.out12", "left-[7.47rem] top-[7.46rem]"],
] as const;
const WHEEL_INNER = [
  ["sec14.in1", "right-[5.38rem] top-[2.09rem] max-w-[0.8rem] text-right"],
  ["sec14.in2", "left-[5.31rem] top-[2.09rem] text-left"],
  ["sec14.in3", "left-[4.05rem] top-[2.55rem] -translate-x-1/2"],
  ["sec14.in4", "left-[6.525rem] top-[2.55rem] -translate-x-1/2"],
  ["sec14.in5", "left-[3.5rem] top-[3.355rem] -translate-x-1/2"],
  ["sec14.in6", "left-[6.885rem] top-[3.345rem] -translate-x-1/2"],
  ["sec14.in7", "left-[3.51rem] top-[4.155rem] -translate-x-1/2"],
  ["sec14.in8", "left-[6.84rem] top-[4.165rem] -translate-x-1/2"],
  ["sec14.in9", "left-[3.985rem] top-[4.98rem] -translate-x-1/2"],
  ["sec14.in10", "right-[5.41rem] top-[5.365rem] text-right"],
  ["sec14.in11", "left-[5.34rem] top-[5.36rem] text-left"],
] as const;

/** A box of the system diagram: a title and its pills (`arch.*` keys, or names that need no words). */
interface ArchGroup {
  title: string;
  pills: readonly string[];
  /** Width and number of columns. */
  layout: string;
}
const ARCH_USERS: readonly ArchGroup[] = [
  {
    title: "arch.owners",
    pills: ["arch.zhijia", "MixPad"],
    layout: "w-[4rem] grid-cols-2",
  },
  {
    title: "arch.management",
    pills: ["Web", "arch.console", "arch.app_home_ai"],
    layout: "flex-1 grid-cols-3",
  },
];
const ARCH_APPS: readonly ArchGroup[] = [
  {
    title: "arch.community_apps",
    pills: [
      "arch.cloud_intercom",
      "arch.face",
      "arch.gate",
      "arch.payments",
      "arch.notices",
      "arch.visitors",
      "arch.visitors",
      "arch.repairs",
      "arch.elevator",
    ],
    layout: "w-[4.01rem] grid-cols-3",
  },
  {
    title: "arch.home_apps",
    pills: [
      "arch.away",
      "arch.away_lift",
      "arch.lighting",
      "arch.lock",
      "arch.shading",
      "arch.appliances",
      "arch.media",
      "arch.alarms",
      "arch.arming",
    ],
    layout: "w-[3.99rem] grid-cols-3",
  },
  {
    title: "arch.property_apps",
    pills: [
      "arch.residents",
      "arch.access_log",
      "arch.events",
      "arch.security_log",
      "arch.bills",
      "arch.utilities",
    ],
    layout: "flex-1 grid-cols-2",
  },
];
const ARCH_CORE: readonly ArchGroup[] = [
  {
    title: "arch.vision",
    pills: ["arch.face", "arch.geofence", "arch.plates"],
    layout: "w-[4.01rem] grid-cols-3",
  },
  {
    title: "arch.speech",
    pills: ["arch.voice", "arch.shortcuts", "arch.dialects"],
    layout: "w-[3.99rem] grid-cols-3",
  },
  {
    title: "arch.biometrics",
    pills: ["arch.fingerprint", "arch.infrared"],
    layout: "flex-1 grid-cols-2",
  },
];
const ARCH_AIOT = [
  "arch.hosting",
  "arch.deploy",
  "arch.data",
  "arch.onboarding",
  "arch.device_mgmt",
  "arch.models",
] as const;
const ARCH_DEVICES: readonly ArchGroup[] = [
  {
    title: "arch.community_hw",
    pills: [
      "arch.community_hw",
      "arch.indoor",
      "arch.wall_intercom",
      "arch.central",
    ],
    layout: "w-[3.94rem] grid-cols-2",
  },
  {
    title: "arch.home_hw",
    pills: [
      "MixPad",
      "arch.curtains",
      "arch.lock",
      "arch.switches",
      "arch.ac",
      "arch.lights",
      "arch.strips",
      "arch.security_sensors",
      "arch.env_sensors",
      "arch.music",
    ],
    layout: "flex-1 grid-cols-5",
  },
];

/** The diagram's colours: users blue, applications and capabilities orange, devices purple. */
const ARCH_TONES = {
  blue: {
    box: "border-[#7099d7]",
    head: "border-[#7399d7] bg-[#e9f0f8] text-[#3f4144]",
    pill: "min-h-[0.35rem] bg-[#e9f0f8] text-[#404449]",
  },
  orange: {
    box: "border-[#c25342]",
    head: "border-[#c65140] bg-[#ffdcc6] text-[#493e38]",
    pill: "min-h-[0.31rem] bg-[#ffdcc6] text-[#4e3e33]",
  },
  purple: {
    box: "border-[#502dd1]",
    head: "border-[#502dd1] bg-[#f0ecfa] text-[#413e43]",
    pill: "min-h-[0.31rem] bg-[#f0ecfa] text-[#434147]",
  },
} as const;

const ARCH_BAND = "flex rounded-[0.06rem] border border-[#979797] bg-white";
const ARCH_INNER = "flex rounded-[0.04rem] border border-[#c1c1c1]";
const ARCH_LAYER =
  "flex shrink-0 items-center justify-center text-center text-[0.2rem] leading-[0.26rem] text-[#3f3e3e]";

/** sec18: the eight projects with photos. */
const PROJECTS = [
  { title: "sec18.p1", desc: "sec18.p1_desc" },
  { title: "sec18.p2", desc: "sec18.p2_desc" },
  { title: "sec18.p3", desc: "sec18.p3_desc" },
  { title: "sec18.p4", desc: "sec18.p4_desc" },
  { title: "sec18.p5", desc: "sec18.p5_desc" },
  { title: "sec18.p6", desc: "sec18.p6_desc" },
  { title: "sec18.p7", desc: "sec18.p7_desc" },
  { title: "sec18.p8", desc: "sec18.p8_desc" },
] as const;

/** sec18's list of 49 more projects (sec18.city<n>, sec18.place<n>), in five columns read downwards. */
const PROJECT_COLUMNS = [0, 10, 20, 30, 40].map((start) =>
  Array.from({ length: start === 40 ? 9 : 10 }, (_, i) => start + i + 1),
);

/** sec19: three more products, their words under the picture in each card. */
const MORE = [
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec19_1-d93366ebf0.webp",
    title: "sec19.sec",
    desc: "sec19.sec2",
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec19_2-f611cf3caf.webp",
    title: "sec19.sec3",
    desc: "sec19.sec4",
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/sec19_3-c63451ade9.webp",
    title: "sec19.sec5",
    desc: "sec19.sec6",
  },
] as const;

/**
 * The specifications, one column per product: label and value (a `params.*` or
 * `spec.*` key, or a value that needs no words).
 */
const PARAMS = [
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/param1-5f0ad4aaa9.webp",
    width: 91,
    height: 182,
    size: "h-[1.82rem] w-[0.91rem]",
    rows: [
      ["params.list", "params.list2"],
      ["params.list3", "spec.e_size"],
      ["params.list4", "params.list5"],
      ["params.list6", "params.list7"],
      ["params.list8", "params.list9"],
      ["params.list10", "params.list11"],
      ["params.list12", "params.list13"],
      ["params.list14", "params.list15"],
      ["params.list16", "spec.memory"],
      ["params.list17", "spec.storage"],
      ["params.list18", "params.list19"],
      ["params.list20", "params.list21"],
    ],
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/param2-e533094106.webp",
    width: 243,
    height: 183,
    size: "h-[1.83rem] w-[2.43rem]",
    rows: [
      ["params.list22", "params.list23"],
      ["params.list24", "spec.plus_size"],
      ["params.list25", "params.list26"],
      ["params.list27", "params.list28"],
      ["params.list29", "params.list30"],
      ["params.list31", "params.list32"],
      ["params.list33", "params.list34"],
      ["params.list35", "params.list36"],
      ["params.list37", "spec.memory"],
      ["params.list38", "spec.storage"],
      ["params.list39", "-"],
      ["params.list40", "-"],
      ["params.list41", "-"],
    ],
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/param3-ac0be0d9b8.webp",
    width: 73,
    height: 182,
    size: "h-[1.82rem] w-[0.73rem]",
    rows: [
      ["params.list42", "params.list43"],
      ["params.list44", "params.list45"],
      ["params.list46", "spec.mkj01_size"],
      ["params.list47", "spec.mkj01_box"],
      ["params.list48", "params.list49"],
      ["params.list50", "params.list51"],
      ["params.list52", "params.list53"],
      ["params.list54", "IP54"],
      ["params.list55", "spec.mkj01_temp"],
      ["params.list56", "spec.dc12"],
      ["params.list57", "params.list58"],
      ["params.list59", "params.list60"],
      ["params.list61", "params.list62"],
    ],
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_plus/param4-217b389cf2.webp",
    width: 96,
    height: 183,
    size: "h-[1.83rem] w-[0.96rem]",
    rows: [
      ["params.list63", "params.list64"],
      ["params.list65", "params.list66"],
      ["params.list67", "spec.mkj02_size"],
      ["params.list68", "spec.mkj02_box"],
      ["params.list69", "params.list70"],
      ["params.list71", "params.list72"],
      ["params.list73", "-"],
      ["params.list74", "IP55"],
      ["params.list75", "spec.mkj02_temp"],
      ["params.list76", "spec.dc12"],
      ["params.list77", "params.list78"],
      ["params.list79", "params.list80"],
    ],
  },
] as const;

const TITLE =
  "mx-auto max-w-[15rem] text-balance text-center text-[0.48rem] leading-[0.77rem] font-extrabold text-[#111111]";
const DESC =
  "mx-auto text-balance text-center text-[0.24rem] leading-[0.38rem] font-medium text-[#111111]";
const PHOTO = "bg-cover bg-center bg-no-repeat";
/** A box as wide as the 1920 px pictures, centred, so words laid over a cropped photo stay on their spot. */
const FRAME = "absolute inset-y-0 left-1/2 w-[19.2rem] -translate-x-1/2";

/** The diagram's two-way arrow between layers, on a white gap in the borders it crosses. */
function ArchArrow({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 36 30"
      className={cn(
        "absolute z-[1] h-[0.3rem] w-[0.36rem] -translate-x-1/2 bg-white",
        className,
      )}
    >
      <path d="M18 5v20" stroke="#949494" strokeWidth="2" />
      <path d="M13 10.5 18 2l5 8.5zM13 19.5l5 8.5 5-8.5z" fill="#949494" />
    </svg>
  );
}

export function MixpadPlusOverview({
  locale,
  base,
  text,
  common,
}: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);
  /** A diagram pill or title: a key, or a name such as "MixPad". */
  const archText = (item: string) =>
    item.startsWith("arch.") ? t(item) : item;
  /** A specification value: a key, or a value such as "IP54". */
  const paramText = (item: string) =>
    item.startsWith("params.") || item.startsWith("spec.") ? t(item) : item;
  const archGroup = (group: ArchGroup, tone: keyof typeof ARCH_TONES) => (
    <div
      key={group.title}
      className={cn(
        "flex flex-col rounded-[0.04rem] border",
        ARCH_TONES[tone].box,
        group.layout,
      )}
    >
      <p
        className={cn(
          "border-b text-center text-[0.18rem] leading-[0.38rem] font-medium",
          ARCH_TONES[tone].head,
        )}
      >
        {archText(group.title)}
      </p>
      <ul
        className={cn(
          "grid flex-1 gap-[0.1rem] px-[0.12rem] pt-[0.13rem] pb-[0.11rem]",
          group.layout.split(" ")[1],
        )}
      >
        {group.pills.map((pill, i) => (
          <li
            // biome-ignore lint/suspicious/noArrayIndexKey: a group can list a pill twice, as orvibo.com's does.
            key={`${pill}-${i}`}
            className={cn(
              "flex items-center justify-center rounded-[0.04rem] px-[0.06rem] py-[0.03rem] text-center",
              ARCH_TONES[tone].pill,
            )}
          >
            {archText(pill)}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview">
        {/* banner: the film is on orvibo.com's video host; "custom project" leads to the developers' page */}
        <section
          className={cn(
            "relative h-[9.96rem] overflow-hidden pt-[1.28rem] text-center tracking-[0.01rem] text-white",
            PHOTO,
          )}
          style={bg(
            "/guanwang_second/front/images/products/mixpad_plus/banner-3f10168e38.webp",
          )}
        >
          <p className="text-[0.24rem] leading-[0.33rem] font-normal">
            {t("banner.bannerDesc")}
          </p>
          <h1 className="mt-[0.01rem] text-[0.54rem] leading-[0.75rem] font-extrabold">
            {t("banner.bannerTitle")}
          </h1>
          <div className="mt-[0.3rem] flex items-center justify-center text-[0.18rem] leading-[0.4rem] font-normal">
            <OrviboWatchTrigger
              videoSrc="/8f4239b1vodgzp1251222210/b3463c425285890801436420507/ArPkCONowNcA.mp4"
              showPlayIcon={false}
              className="cursor-pointer"
            >
              {t("banner.playWrapper")}
              <Image
                src={img(
                  "/guanwang_second/front/images/products/mixpad_plus/play-6ef08d66ee.webp",
                )}
                alt=""
                width={18}
                height={18}
                unoptimized
                className="ml-[0.1rem] inline size-[0.18rem] align-middle"
              />
            </OrviboWatchTrigger>
            <Link
              href={orviboRoutes(base).estateCooperation}
              className="relative ml-[0.26rem] h-[0.4rem] min-w-[1.5rem] overflow-hidden rounded-[4px] bg-[#0d7fef] px-[0.24rem] text-center text-white before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-[#359ffc] before:transition-[width] before:duration-300 before:content-[''] hover:before:w-full"
            >
              <span className="relative z-[1]">{t("banner.applyNow")}</span>
            </Link>
          </div>
          <div className="mt-[5.59rem]">
            <p className="mb-[0.12rem] text-[0.2rem] leading-[0.28rem] font-normal tracking-normal">
              {t("banner.investorWrapper")}
            </p>
            <div className="flex items-center justify-center gap-x-[0.03rem]">
              {INVESTORS.map((logo, i) => (
                <Fragment key={logo.src}>
                  {i > 0 && (
                    <span className="h-[0.2rem] w-[0.01rem] bg-[#707070]" />
                  )}
                  <Image
                    src={img(logo.src)}
                    alt=""
                    width={logo.width}
                    height={logo.height}
                    unoptimized
                    className={logo.size}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        {/* sec1: what digital infrastructure brings */}
        <section className="min-h-[9.8rem] bg-[#f5f5f5] pt-[1.1rem] pb-[0.8rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec1.title")}</h2>
          <p className={cn(DESC, "mt-[0.3rem] max-w-[15.8rem]")}>
            {t("sec1.desc")}
          </p>
          <ul className="mx-auto mt-[0.8rem] flex w-[16rem] justify-between text-center">
            {SMART.map((card) => (
              <li key={card.title} className="w-[5.1rem]">
                <Image
                  src={img(card.photo)}
                  alt={card.alt ? ts(card.alt) : ""}
                  width={510}
                  height={300}
                  unoptimized
                  className="block h-[3rem] w-full"
                />
                <h3 className="mt-[0.3rem] mb-[0.21rem] text-[0.24rem] leading-[0.33rem] font-extrabold">
                  {t(card.title)}
                </h3>
                <p className="text-pretty text-[0.16rem] leading-[0.26rem] font-normal">
                  {t(card.desc)}
                </p>
              </li>
            ))}
          </ul>
        </section>
        {/* sec2: the trouble with traditional intercoms */}
        <section className="min-h-[8.6rem] bg-white pt-[1.1rem] pb-[0.8rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec2.title")}</h2>
          <ul className="mx-auto mt-[0.8rem] flex w-[16rem] justify-between text-center">
            {TROUBLES.map((card) => (
              <li key={card.title} className="w-[5.1rem]">
                <Image
                  src={img(card.photo)}
                  alt=""
                  width={510}
                  height={300}
                  unoptimized
                  className="block h-[3rem] w-full"
                />
                <h3 className="mt-[0.3rem] mb-[0.21rem] text-[0.24rem] leading-[0.33rem] font-extrabold">
                  {t(card.title)}
                </h3>
                <p className="text-pretty text-[0.16rem] leading-[0.26rem] font-normal">
                  {t(card.desc)}
                </p>
              </li>
            ))}
          </ul>
        </section>
        {/* sec3: the intercom, reinvented */}
        <section className="min-h-[10.8rem] bg-[#f2f2f2] pt-[1.1rem] pb-[0.8rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec3.title")}</h2>
          <p className={cn(DESC, "mt-[0.3rem] max-w-[11.5rem]")}>
            {t("sec3.desc")}
          </p>
          <ul className="mx-auto mt-[0.8rem] flex w-[16rem] justify-between text-center">
            {REINVENTED.map((card) => (
              <li
                key={card.title}
                className="min-h-[5.6rem] w-[5.24rem] bg-white px-[0.47rem] pt-[1.2rem] pb-[0.4rem]"
              >
                <Image
                  src={img(card.icon)}
                  alt=""
                  width={card.width}
                  height={104}
                  unoptimized
                  className="mx-auto block size-[1.04rem]"
                />
                <h3 className="mt-[0.52rem] mb-[0.2rem] text-balance text-[0.3rem] leading-[0.42rem] font-extrabold">
                  {t(card.title)}
                </h3>
                <p className="text-pretty text-[0.2rem] leading-[0.32rem] font-normal">
                  {t(card.desc)}
                </p>
              </li>
            ))}
          </ul>
        </section>
        {/* sec4: the panel runs the home (the labels are in the photo) */}
        <section
          className={cn(
            "h-[10.6rem] overflow-hidden pt-[1.1rem] text-[#111111]",
            PHOTO,
          )}
          style={bg(
            "/guanwang_second/front/images/products/mixpad_plus/sec4-e330bbb827.webp",
          )}
        >
          <h2 className={TITLE}>{t("sec4.title")}</h2>
          <p className={cn(DESC, "mt-[0.3rem] max-w-[12.8rem]")}>
            {t("sec4.desc")}
          </p>
          <p className="sr-only">{t("alt.sec4")}</p>
        </section>
        {/* sec5: the Red Dot design */}
        <section className="min-h-[13rem] bg-white pt-[1.13rem] pb-[0.6rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec5.title")}</h2>
          <p className={cn(DESC, "mt-[0.3rem] max-w-[14.2rem]")}>
            {t("sec5.desc")}
          </p>
          <div
            className={cn("mx-auto mt-[0.8rem] h-[8.11rem] w-[16rem]", PHOTO)}
            style={bg(
              "/guanwang_second/front/images/products/mixpad_plus/sec5-45d84e367c.webp",
            )}
          />
        </section>
        {/* sec6: a new standard */}
        <section className="min-h-[9.7rem] bg-[#f7f7f7] pt-[1.13rem] pb-[1rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec6.title")}</h2>
          <div className="mt-[1rem] flex justify-center gap-x-[0.8rem]">
            {STANDARD.map((column) => (
              <div key={column.title} className="w-[4.3rem]">
                <Image
                  src={img(column.photo)}
                  alt=""
                  width={column.width}
                  height={column.height}
                  unoptimized
                  className={cn("block h-auto", column.size)}
                />
                <h3 className="mt-[0.4rem] mb-[0.27rem] text-balance text-[0.3rem] leading-[0.42rem] font-extrabold">
                  {t(column.title)}
                </h3>
                <ul className="pl-[0.08rem]">
                  {column.points.map((point) => (
                    <li
                      key={point}
                      className="relative text-pretty py-[0.06rem] pl-[0.1rem] text-[0.2rem] leading-[0.28rem] font-medium before:absolute before:top-[0.18rem] before:left-0 before:size-[0.04rem] before:rounded-full before:bg-black before:content-['']"
                    >
                      {t(point)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* sec7: better looking and more capable; the comparison is words in the photo on orvibo.com */}
        <section
          className={cn(
            "relative h-[13.2rem] overflow-hidden pt-[1.13rem] text-black",
            PHOTO,
          )}
          style={bg(
            "/guanwang_second/front/images/products/mixpad_plus/sec7-513121bf33.webp",
          )}
        >
          <h2 className={TITLE}>{t("sec7.title")}</h2>
          <div className={FRAME}>
            {COMPARISON.map((product) => (
              <div key={product.name}>
                <h3
                  className={cn(
                    "absolute top-[6.25rem] -translate-x-1/2 whitespace-nowrap text-[0.24rem] leading-[0.34rem] font-medium",
                    product.centre,
                  )}
                >
                  {product.name.startsWith("sec7.")
                    ? t(product.name)
                    : product.name}
                </h3>
                <dl
                  className={cn(
                    "absolute top-[7.08rem] flex flex-col gap-y-[0.28rem]",
                    product.column,
                  )}
                >
                  {product.rows.map(([title, desc]) => (
                    <div key={title}>
                      <dt className="text-[0.2rem] leading-[0.28rem] font-bold">
                        {t(title)}
                      </dt>
                      <dd className="mt-[0.08rem] text-[0.16rem] leading-[0.24rem] font-normal">
                        {t(desc)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>
        {/* sec8: unlock from anywhere indoors */}
        <section className="min-h-[11.3rem] bg-[#f7f7f7] pt-[1.13rem] pb-[0.6rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec8.title")}</h2>
          <p className={cn(DESC, "mt-[0.3rem] max-w-[13.3rem]")}>
            {t("sec8.desc")}
          </p>
          <div
            role="img"
            aria-label={ts("alt.sec8")}
            className={cn(
              "mx-auto mt-[0.97rem] h-[5.61rem] w-[10.95rem]",
              PHOTO,
            )}
            style={bg(
              "/guanwang_second/front/images/products/mixpad_plus/sec8-d605974337.webp",
            )}
          />
        </section>
        {/* sec9: scenes */}
        <section className="min-h-[17.1rem] bg-white pt-[1.13rem] pb-[0.6rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec9.title")}</h2>
          <p className={cn(DESC, "mt-[0.3rem] max-w-[14rem]")}>
            {t("sec9.desc")}
          </p>
          <ul className="mx-auto mt-[0.87rem] flex w-[16rem] flex-wrap justify-between text-center">
            {SCENES.map((scene) => (
              <li key={scene.title} className="mb-[0.65rem] w-[7.8rem]">
                <Image
                  src={img(scene.photo)}
                  alt=""
                  width={780}
                  height={438}
                  unoptimized
                  className="block h-[4.38rem] w-full"
                />
                <h3 className="mt-[0.4rem] mb-[0.2rem] text-[0.3rem] leading-[0.42rem] font-extrabold">
                  {t(scene.title)}
                </h3>
                <p className="mx-auto max-w-[6.1rem] text-[0.16rem] leading-[0.26rem] font-medium">
                  {t(scene.desc)}
                </p>
              </li>
            ))}
          </ul>
        </section>
        {/* sec10: hundreds of appliances (their names are in the photo) */}
        <section
          className={cn(
            "h-[13.2rem] overflow-hidden pt-[1.13rem] text-[#111111]",
            PHOTO,
          )}
          style={bg(
            "/guanwang_second/front/images/products/mixpad_plus/sec10-9ab4ee5cf9.webp",
          )}
        >
          <h2 className={TITLE}>{t("sec10.title")}</h2>
          <p className={cn(DESC, "mt-[0.3rem] max-w-[14.1rem]")}>
            {t("sec10.desc")}
          </p>
          <p className="sr-only">{t("alt.sec10")}</p>
        </section>
        {/* sec11: community services */}
        <section className="bg-white pt-[1.13rem] pb-[1.85rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec11.title")}</h2>
          <ul className="mt-[1rem] flex justify-center gap-x-[1.11rem]">
            {COMMUNITY.map((item) => (
              <li key={item.title} className="flex w-[3.86rem] flex-col">
                <Image
                  src={img(item.photo)}
                  alt=""
                  width={386}
                  height={280}
                  unoptimized
                  className="block h-[2.8rem] w-full"
                />
                <div className="flex min-h-[1.77rem] flex-1 flex-col items-center bg-[#f3f3f3] px-[0.13rem] pt-[0.27rem] pb-[0.24rem] text-center">
                  <h3 className="text-balance text-[0.24rem] leading-[0.33rem] font-extrabold">
                    {t(item.title)}
                  </h3>
                  <p className="mt-[0.2rem] text-pretty text-[0.16rem] leading-[0.26rem] font-medium">
                    {t(item.desc)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        {/* sec12: the two door stations, sliding up as on orvibo.com; their words are pictures there */}
        <ProductSlideshow
          direction="vertical"
          pagination="none"
          speed={1000}
          delay={6000}
          className="h-[10.8rem]"
          slides={[
            {
              key: "unit",
              content: (
                <div
                  className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_plus/sec12_1-678289b3e9.webp",
                  )}
                >
                  <div className={FRAME}>
                    <h2 className="absolute top-[1.27rem] left-[8.35rem] text-[0.48rem] leading-[0.68rem] font-extrabold text-[#101010]">
                      {t("sec12.title")}
                    </h2>
                    <p className="absolute top-[2.085rem] left-[8.37rem] w-[6.25rem] text-[0.24rem] leading-[0.38rem] font-normal text-[#4f4f4f]">
                      {t("sec12.desc1")}
                    </p>
                    {ACCESS.map((card) => (
                      <div
                        key={card.title}
                        className={cn("absolute w-[2.4rem]", card.box)}
                      >
                        <h3 className="text-[0.2rem] leading-[0.28rem] font-bold text-[#111111]">
                          {t(card.title)}
                        </h3>
                        <ul className="mt-[0.395rem] flex flex-col gap-y-[0.12rem] text-[0.14rem] leading-[0.22rem] font-normal text-[#555555]">
                          {card.points.map((point) => (
                            <li
                              key={point}
                              className="relative pl-[0.13rem] before:absolute before:top-[0.09rem] before:left-0 before:size-[0.04rem] before:rounded-full before:bg-[#555555] before:content-['']"
                            >
                              {t(point)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <p className="absolute top-[9.66rem] left-[4.665rem] -translate-x-1/2 whitespace-nowrap text-[0.24rem] leading-[0.34rem] font-normal text-[#545454]">
                      {t("sec12.unit")}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              key: "villa",
              content: (
                <div
                  className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_plus/sec12_2-d74c9ffc1c.webp",
                  )}
                >
                  <div className={FRAME}>
                    <p
                      aria-hidden="true"
                      className="absolute top-[4.22rem] left-[2.9rem] text-[0.48rem] leading-[0.68rem] font-extrabold text-[#0f1113]"
                    >
                      {t("sec12.title")}
                    </p>
                    <p className="absolute top-[5.025rem] left-[2.92rem] w-[6.2rem] text-[0.24rem] leading-[0.38rem] font-normal text-[#474b4d]">
                      {t("sec12.desc2")}
                    </p>
                    <p className="absolute top-[9.845rem] left-[13.485rem] -translate-x-1/2 whitespace-nowrap text-[0.24rem] leading-[0.34rem] font-normal text-[#505356]">
                      {t("sec12.villa")}
                    </p>
                  </div>
                </div>
              ),
            },
          ]}
        />
        {/* sec12-1: where the door stations fit */}
        <section className="h-[20.22rem] overflow-hidden bg-[#f5f5f5] pt-[1.04rem]">
          <h2 className={TITLE}>{t("sec12_1.title")}</h2>
          <div
            role="img"
            aria-label={ts("alt.sec121_1")}
            className={cn(
              "mx-auto mt-[0.9rem] mb-[0.4rem] h-[7.76rem] w-[16rem]",
              PHOTO,
            )}
            style={bg(
              "/guanwang_second/front/images/products/mixpad_plus/sec121_1-ab34e6091e.webp",
            )}
          />
          <div
            role="img"
            aria-label={ts("alt.sec121_2")}
            className={cn("mx-auto h-[7.76rem] w-[16rem]", PHOTO)}
            style={bg(
              "/guanwang_second/front/images/products/mixpad_plus/sec121_2-55f668bda7.webp",
            )}
          />
        </section>
        {/* sec13: security (its labels are in the picture) */}
        <section
          className={cn(
            "h-[12.06rem] overflow-hidden pt-[1.1rem] text-[#111111]",
            PHOTO,
          )}
          style={bg(
            "/guanwang_second/front/images/products/mixpad_plus/sec13-46144c8ae4.webp",
          )}
        >
          <h2 className={TITLE}>{t("sec13.title")}</h2>
          <p className={cn(DESC, "mt-[0.3rem] max-w-[11.6rem]")}>
            {t("sec13.desc")}
          </p>
          <p className="sr-only">{t("alt.sec13")}</p>
        </section>
        {/* sec14: the service wheel; its words are a picture on orvibo.com */}
        <section className="min-h-[11.96rem] overflow-hidden bg-[#f9f9f9] pt-[0.9rem] pb-[0.8rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec14.title")}</h2>
          <p
            className={cn(DESC, "mt-[0.3rem] max-w-[14rem] leading-[0.33rem]")}
          >
            {t("sec14.desc")}
          </p>
          <div
            className={cn(
              "relative mx-auto mt-[0.92rem] h-[7.6rem] w-[10.57rem]",
              PHOTO,
            )}
            style={bg(`${ASSETS}/wheel.webp`)}
          >
            <ul className="text-[0.22rem] leading-[0.28rem] font-normal text-[#373d47]">
              {WHEEL_OUTER.map(([key, place]) => (
                <li
                  key={key}
                  className={cn(
                    "absolute w-max max-w-[2.6rem] -translate-y-1/2 text-balance",
                    place,
                  )}
                >
                  {t(key)}
                </li>
              ))}
            </ul>
            <ul className="text-[0.15rem] leading-[0.18rem] font-normal text-[#3f3a39]">
              {WHEEL_INNER.map(([key, place]) => (
                <li
                  key={key}
                  className={cn(
                    "absolute w-max max-w-[0.9rem] -translate-y-1/2 text-center",
                    place,
                  )}
                >
                  {t(key)}
                </li>
              ))}
            </ul>
            <p className="absolute top-[3.94rem] left-[5.225rem] w-[1.5rem] -translate-x-1/2 text-center text-[0.2rem] leading-[0.26rem] font-normal text-white">
              {t("sec14.center")}
            </p>
          </div>
        </section>
        {/* sec15: the system diagram, a picture on orvibo.com; only the "Open" logos stay a picture */}
        <section className="bg-white pt-[1.02rem] pb-[1.09rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec15.title")}</h2>
          <p className={cn(DESC, "mt-[0.21rem] leading-[0.33rem]")}>
            {t("sec15.desc")}
          </p>
          <div className="mx-auto mt-[0.76rem] w-[15.11rem] text-[0.14rem] leading-[0.16rem] font-normal">
            <div
              className={cn(
                ARCH_BAND,
                "w-[13.02rem] pt-[0.09rem] pr-[0.1rem] pb-[0.15rem]",
              )}
            >
              <p className={cn(ARCH_LAYER, "w-[1.82rem]")}>{t("arch.user")}</p>
              <div className="flex flex-1 gap-x-[0.17rem]">
                {ARCH_USERS.map((group) => archGroup(group, "blue"))}
              </div>
            </div>
            <div className="relative h-[0.09rem]">
              <ArchArrow className="-top-[0.12rem] left-[8rem]" />
            </div>
            <div
              className={cn(ARCH_BAND, "py-[0.12rem] pr-[0.12rem] pl-[0.1rem]")}
            >
              <div className="w-[12.91rem]">
                <div
                  className={cn(
                    ARCH_INNER,
                    "pt-[0.08rem] pr-[0.11rem] pb-[0.09rem]",
                  )}
                >
                  <p className={cn(ARCH_LAYER, "w-[1.71rem]")}>
                    {t("arch.app")}
                  </p>
                  <div className="flex flex-1 gap-x-[0.155rem]">
                    {ARCH_APPS.map((group) => archGroup(group, "orange"))}
                  </div>
                </div>
                <div className="relative h-[0.14rem]">
                  <ArchArrow className="-top-[0.07rem] left-[7.89rem]" />
                </div>
                <div
                  className={cn(
                    ARCH_INNER,
                    "flex-col gap-y-[0.19rem] pt-[0.11rem] pr-[0.11rem] pb-[0.14rem]",
                  )}
                >
                  <div className="flex">
                    <p className={cn(ARCH_LAYER, "w-[1.71rem]")}>
                      {t("arch.core")}
                    </p>
                    <div className="flex flex-1 gap-x-[0.155rem]">
                      {ARCH_CORE.map((group) => archGroup(group, "orange"))}
                    </div>
                  </div>
                  <div className="flex">
                    <p className={cn(ARCH_LAYER, "w-[1.71rem]")}>
                      {t("arch.aiot")}
                    </p>
                    <ul className="flex flex-1 gap-x-[0.17rem]">
                      {ARCH_AIOT.map((pill) => (
                        <li
                          key={pill}
                          className="flex min-h-[0.35rem] flex-1 items-center justify-center rounded-[0.06rem] border border-[#c55142] bg-[#ffdcc6] px-[0.06rem] py-[0.03rem] text-center text-[#4e3e33]"
                        >
                          {t(pill)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <p className="ml-[0.24rem] flex w-[1.72rem] items-center justify-center rounded-[0.04rem] border border-[#c34f38] bg-[#ffdcc6] text-center text-[0.2rem] leading-[0.28rem] text-[#493e38]">
                {t("arch.home_ai")}
              </p>
            </div>
            <div className="relative h-[0.11rem]">
              <ArchArrow className="-top-[0.1rem] left-[8rem]" />
              <ArchArrow className="-top-[0.1rem] left-[14.17rem]" />
            </div>
            <div className="flex justify-between">
              <div
                className={cn(
                  ARCH_BAND,
                  "w-[13.02rem] pt-[0.11rem] pr-[0.1rem] pb-[0.13rem]",
                )}
              >
                <p className={cn(ARCH_LAYER, "w-[1.82rem]")}>
                  {t("arch.device")}
                </p>
                <div className="flex flex-1 gap-x-[0.16rem]">
                  {ARCH_DEVICES.map((group) => archGroup(group, "purple"))}
                </div>
              </div>
              <div
                className={cn(
                  ARCH_BAND,
                  "w-[1.86rem] px-[0.09rem] py-[0.12rem]",
                )}
              >
                <div className="flex flex-1 flex-col rounded-[0.04rem] border border-[#966d7b]">
                  <p className="border-[#8f6f7a] border-b bg-[#f4f0f1] text-center text-[0.22rem] leading-[0.38rem] text-[#3f3e3e]">
                    {t("arch.open")}
                  </p>
                  <Image
                    src={img(`${ASSETS}/open-logos.webp`)}
                    alt={ts("alt.arch_open")}
                    width={90}
                    height={82}
                    unoptimized
                    className="mx-auto mt-[0.06rem] mb-[0.08rem] block h-[0.82rem] w-[0.9rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* sec16: why AI video intercom */}
        <section className="min-h-[9.2rem] bg-[#f8f8f8] pt-[1.03rem] pb-[0.8rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec16.title")}</h2>
          <ul className="mx-auto mt-[0.83rem] flex w-[16rem] justify-between text-center">
            {ADVANTAGES.map((card) => (
              <li
                key={card.title}
                className="min-h-[5.14rem] w-[5.24rem] bg-white px-[0.5rem] pt-[1rem] pb-[0.4rem]"
              >
                <Image
                  src={img(card.icon)}
                  alt=""
                  width={card.width}
                  height={card.height}
                  unoptimized
                  className="mx-auto block size-[1.28rem]"
                />
                <h3 className="my-[0.2rem] text-[0.3rem] leading-[0.42rem] font-extrabold">
                  {t(card.title)}
                </h3>
                <p className="text-pretty text-[0.2rem] leading-[0.32rem] font-normal">
                  {t(card.desc)}
                </p>
              </li>
            ))}
          </ul>
        </section>
        {/* sec17: developers ORVIBO works with (their logos are the picture) */}
        <section
          className={cn(
            "h-[14.64rem] overflow-hidden pt-[0.9rem] text-[#111111]",
            PHOTO,
          )}
          style={bg(
            "/guanwang_second/front/images/products/mixpad_plus/sec17-654c4d94e4.webp",
          )}
        >
          <h2 className={TITLE}>{t("sec17.title")}</h2>
          <p className={cn(DESC, "mt-[0.3rem] max-w-[11.8rem]")}>
            {t("sec17.desc")}
          </p>
          <p className="sr-only">{t("alt.sec17")}</p>
        </section>
        {/* sec18: projects; photos, captions and list are one picture on orvibo.com */}
        <section className="bg-[#f8f8f8] pt-[1.03rem] pb-[1.43rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec18.title")}</h2>
          <ul className="mx-auto mt-[1.02rem] grid w-[16rem] grid-cols-4 gap-x-[0.2rem] gap-y-[0.38rem]">
            {PROJECTS.map((project, i) => (
              <li key={project.title}>
                <Image
                  src={img(`${ASSETS}/project-${i + 1}.webp`)}
                  alt=""
                  width={385}
                  height={244}
                  unoptimized
                  className="block h-[2.44rem] w-full"
                />
                <h3 className="mt-[0.255rem] text-[0.2rem] leading-[0.28rem] font-normal">
                  {t(project.title)}
                </h3>
                <p className="mt-[0.105rem] min-h-[0.48rem] text-[0.16rem] leading-[0.24rem] font-normal text-[#5c5c5c]">
                  {t(project.desc)}
                </p>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-[0.585rem] w-[16.4rem] text-[0.15rem] leading-[0.337rem] font-normal">
            <div className="flex justify-between whitespace-nowrap">
              {PROJECT_COLUMNS.map((column, i) => (
                <div key={column[0]}>
                  <dl className="grid grid-cols-[auto_auto] gap-x-[0.15rem]">
                    {column.map((n) => (
                      <Fragment key={n}>
                        <dt>{t(`sec18.city${n}`)}</dt>
                        <dd>{t(`sec18.place${n}`)}</dd>
                      </Fragment>
                    ))}
                  </dl>
                  {i === PROJECT_COLUMNS.length - 1 && <p>{t("sec18.more")}</p>}
                </div>
              ))}
            </div>
            <p className="mt-[0.37rem] text-[0.14rem] leading-[0.2rem]">
              {t("sec18.note")}
            </p>
          </div>
        </section>
        {/* sec19: more products and support */}
        <section className="min-h-[9.37rem] bg-white pt-[1.03rem] pb-[0.6rem] text-[#111111]">
          <h2 className={TITLE}>{t("sec19.title")}</h2>
          <ul className="mx-auto mt-[0.83rem] flex w-[16rem] justify-between text-center">
            {MORE.map((card) => (
              <li
                key={card.title}
                className={cn(
                  "min-h-[5.56rem] w-[5.06rem] px-[0.3rem] pt-[3.28rem] pb-[0.3rem]",
                  PHOTO,
                  "bg-top",
                )}
                style={bg(card.photo)}
              >
                <h3 className="mb-[0.2rem] text-[0.3rem] leading-[0.42rem] font-extrabold">
                  {t(card.title)}
                </h3>
                <p className="text-pretty text-[0.2rem] leading-[0.32rem] font-normal">
                  {t(card.desc)}
                </p>
              </li>
            ))}
          </ul>
        </section>
        {/* params: one column per product; the two notes are CSS content on orvibo.com */}
        <section className="bg-[#fbfbfb] pt-[0.91rem] pb-[1.5rem] text-[#111111]">
          <h2 className={TITLE}>{t("params.title")}</h2>
          <div className="mx-auto mt-[0.91rem] grid w-[16rem] grid-cols-4 gap-x-[0.5rem]">
            {PARAMS.map((product) => (
              <div key={product.photo}>
                <Image
                  src={img(product.photo)}
                  alt=""
                  width={product.width}
                  height={product.height}
                  unoptimized
                  className={cn("block", product.size)}
                />
                <dl className="mt-[0.71rem] flex flex-col gap-y-[0.17rem] text-[0.16rem] leading-[0.24rem]">
                  {product.rows.map(([label, value]) => (
                    <div key={label}>
                      <dt className="inline font-extrabold">{t(label)}</dt>{" "}
                      <dd className="inline font-normal">{paramText(value)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-[0.68rem] flex w-[16rem] flex-col gap-y-[0.08rem] text-[0.16rem] leading-[0.22rem] font-medium text-[#111111]/60">
            <p>{t("params.note1")}</p>
            <p>{t("params.note2")}</p>
          </div>
        </section>
      </div>
      {/* product_detail_tips */}
      <div className="bg-[#202020] p-[60px]">
        <p className="mx-auto max-w-[1200px] text-[14px] leading-[24px] font-medium text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
