import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import { figureWithUnit, richWords } from "./words";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, p01 to p25, and each one's height in
 * hundreds of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px
 * goes at (x / 100, y / 100) rem. */
const PIC = "/orvibo/products/mixstation/phone";
const HEIGHT = {
  p01: 15.46,
  p02: 11.93,
  prices: 12.2,
  p03: 15.25,
  p04: 12.5,
  p05: 8.07,
  p06: 10.21,
  p07: 9.36,
  p08: 7.79,
  p09: 10.74,
  p10: 10.48,
  p11: 11.91,
  p12: 5.21,
  p13: 7.95,
  p14: 8.15,
  p15: 12.02,
  p16: 13.92,
  p17: 12.43,
  p18: 14.1,
  p19: 13.38,
  p20: 12.18,
  p21: 11.92,
  p22: 9.08,
  p23: 12.61,
  p24: 11.5,
  p25: 10.68,
} as const;
type Slice = keyof typeof HEIGHT;

/** The line over each "more ..." heading, and that heading. */
const COMPARE = "text-[0.3rem] leading-[0.42rem] font-normal";
const MORE = "mt-[0.22rem] text-[0.72rem] leading-[0.9rem] font-bold";
/** Words centred over a tile. */
const TILE = "absolute text-center";

/** sec1: the four tags between gold brackets. */
const TAGS = ["hero.tag1", "hero.tag2", "hero.tag3", "hero.tag4"] as const;
/** The hero's four perks, under the icons in the picture. */
const PERKS = [
  { title: "m.perk1", desc: "m.perk1Desc" },
  { title: "m.perk2", desc: "m.perk2Desc" },
  { title: "m.perk3", desc: "m.perk3Desc" },
  { title: "m.perk4", desc: "m.perk4Desc" },
] as const;
/** The price list: 7 HP with 3 to 6 indoor units, each card's words at its left and its price at its right. */
const PRICES = [
  { n: 3, at: "top-[0.46rem]", priceAt: "top-[0.74rem]" },
  { n: 4, at: "top-[2.59rem]", priceAt: "top-[2.87rem]" },
  { n: 5, at: "top-[4.73rem]", priceAt: "top-[5.01rem]" },
  { n: 6, at: "top-[6.86rem]", priceAt: "top-[7.14rem]" },
] as const;
/** One unit for many uses: the captions under the three photos. */
const USES = [
  { key: "m.useSummer", at: "top-[2.02rem]" },
  { key: "m.useWinter", at: "top-[3.37rem]" },
  { key: "m.useWater", at: "top-[4.98rem]" },
] as const;
/** The efficiency chart: each bar's label (right-aligned before it) and figure (after it). */
const BARS = [
  {
    label: "m.barTop",
    value: "m.barTopValue",
    labelAt: "top-[0.93rem]",
    valueAt:
      "top-[0.9rem] left-[4.84rem] text-[0.15rem] font-bold text-[#80e05e]",
  },
  {
    label: "m.bar1",
    value: "m.bar1Value",
    labelAt: "top-[1.17rem]",
    valueAt: "top-[1.17rem] left-[5.3rem]",
  },
  {
    label: "m.bar2",
    value: "m.bar2Value",
    labelAt: "top-[1.4rem]",
    valueAt: "top-[1.4rem] left-[5.8rem]",
  },
  {
    label: "m.bar3",
    value: "m.bar3Value",
    labelAt: "top-[1.63rem]",
    valueAt: "top-[1.63rem] left-[6.28rem]",
  },
  {
    label: "m.barHigh",
    value: "m.barHighValue",
    labelAt: "top-[1.86rem]",
    valueAt: "top-[1.86rem] left-[6.72rem]",
  },
] as const;
/** The three ways the unit keeps from freezing, under their icons. */
const FROST = [
  { title: "frost.pump", desc: "frost.pumpDesc", at: "left-[0.84rem]" },
  { title: "frost.heater", desc: "frost.heaterDesc", at: "left-[2.84rem]" },
  { title: "frost.unit", desc: "frost.unitDesc", at: "left-[4.84rem]" },
] as const;
/** The seven quiet-running parts, over the tops of their tiles. */
const QUIET = [
  { key: "quiet.fan", at: "top-[2.76rem] left-[0.29rem] w-[2.69rem]" },
  { key: "quiet.motor", at: "top-[2.8rem] left-[3.15rem] w-[4.08rem]" },
  { key: "quiet.foam", at: "top-[5.57rem] left-[0.29rem] w-[3.98rem]" },
  { key: "quiet.damping", at: "top-[5.58rem] left-[4.4rem] w-[2.83rem]" },
  { key: "quiet.compressor", at: "top-[7.99rem] left-[0.29rem] w-[3.98rem]" },
  { key: "quiet.pipes", at: "top-[9.31rem] left-[4.4rem] w-[2.83rem]" },
  { key: "quiet.grille", at: "top-[10.57rem] left-[0.29rem] w-[3.98rem]" },
] as const;
/** The climates in the app, over their round previews (the fourth, cut off at the edge, has no name). */
const CLIMATES = [
  { key: "smart.spring", at: "left-[2.6rem] text-[#dddedd]" },
  { key: "smart.cool", at: "left-[3.85rem] text-[#cdd6df]" },
  { key: "smart.sea", at: "left-[5.08rem] text-[#e2dfe6]" },
] as const;
/** The energy screen's two savings, down its left side. */
const SAVED = [
  { label: "smart.powerSaved", value: "smart.powerValue" },
  { label: "smart.moneySaved", value: "smart.moneyValue" },
] as const;
/** The four scene cards' names, at their tops. */
const SCENES = [
  { key: "smart.sceneSteady", at: "left-[4.46rem]" },
  { key: "smart.sceneSaving", at: "left-[5.12rem]" },
  { key: "smart.sceneDamp", at: "left-[5.78rem]" },
  { key: "smart.sceneClean", at: "left-[6.46rem]" },
] as const;
/** The all-in-one package: what it includes, what the customer sees to, and what ORVIBO can add. */
const PACK = [
  "m.pack1",
  "m.pack2",
  "m.pack3",
  "m.pack4",
  "m.pack5",
  "m.pack6",
  "m.pack7",
  "m.pack8",
  "m.pack9",
  "m.pack10",
] as const;
const PACK_LISTS = [
  {
    title: "m.packExcluded",
    items: [
      "m.packOut1",
      "m.packOut2",
      "m.packOut3",
      "m.packOut4",
      "m.packOut5",
      "m.packOut6",
      "m.packOut7",
      "m.packOut8",
      "m.packOut9",
      "m.packOut10",
    ],
  },
  {
    title: "m.packExtra",
    items: [
      "m.packExtra1",
      "m.packExtra2",
      "m.packExtra3",
      "m.packExtra4",
      "m.packExtra5",
      "m.packExtra6",
      "m.packExtra7",
      "m.packExtra8",
    ],
  },
] as const;
/** The pale gold pills of the package's headings. */
const GOLD_PILL =
  "rounded-full bg-gradient-to-r from-[#efc096] to-[#fff3d9] text-[#5a2a0a]";
/** The W1's specifications after its series and model, two to a row in orvibo.com's order. */
const W1_SPECS = [
  "supply",
  "refrigerant",
  "grade",
  "iplv",
  "cooling",
  "heating",
  "water",
  "maxTemp",
  "net",
  "operating",
  "noise",
  "resistance",
  "heatingPipe",
  "waterPipe",
  "size",
] as const;
/** The MixPad's, after its series and system. */
const PAD_SPECS = [
  "screen",
  "mic",
  "network",
  "load",
  "input",
  "loadType",
  "sensors",
  "speaker",
  "ir",
  "size",
] as const;
/** A specification card, its heading and its rows. */
const CARD =
  "rounded-[0.2rem] bg-[#111111] px-[0.5rem] pt-[0.6rem] pb-[0.5rem]";
const CARD_TITLE =
  "text-center text-[0.3rem] leading-[0.42rem] font-medium text-white";
const SPEC_ROW =
  "grid grid-cols-2 gap-x-[0.2rem] border-[#2b2b2b] border-b py-[0.24rem]";
const SPEC_TERM = "text-[0.18rem] leading-[0.26rem] font-normal text-[#a5a5a5]";
const SPEC_VALUE =
  "mt-[0.08rem] text-[0.2rem] leading-[0.28rem] font-medium text-white";
/** The six AirPro indoor units, three to a table as on orvibo.com's phone page. */
const AIRPRO = [
  ["34", "51", "68"],
  ["85", "102", "136"],
] as const;
const AIR_HEAD =
  "border border-[#2b2b2d] px-[0.04rem] text-[0.14rem] leading-[0.18rem] font-normal text-[#929292]";
const AIR_VALUE =
  "border border-[#2b2b2d] px-[0.02rem] text-[0.14rem] leading-[0.18rem] font-normal text-[#d9d9d9]";
/** The footnotes, all at the page's end as on orvibo.com's phone page. */
const NOTES = [
  "frost.note",
  "turbo.note",
  "size.note",
  "m.noteFreeWater",
  "note.cycle",
  "note.iplv",
  "note.water",
  "note.floor",
  "m.noteShowers",
  "note.standard",
  "note.tenYear",
] as const;

/** A list two to a row. */
function pairs<T>(items: readonly T[]): T[][] {
  const rows: T[][] = [];
  for (let index = 0; index < items.length; index += 2) {
    rows.push(items.slice(index, index + 2));
  }
  return rows;
}

/** The ORVIBO Integrated HVAC W1 page on phones: orvibo.com's phone page, its pictures without their words and the
 * words in HTML where it draws them. Where a picture's words stand on a flat ground, that ground is a block that
 * grows with the words (Romanian and English run longer than Chinese) and the picture goes on below it. */
export function MixstationPhone({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);
  const rich = (textKey: string, accent = "") => richWords(ts(textKey), accent);
  /** A text's lines as one paragraph, for words the desktop breaks to fit its picture. */
  const flow = (textKey: string) => ts(textKey).replace(/\n/g, " ");
  /** One of a text's lines. */
  const line = (textKey: string, index: number) =>
    ts(textKey).split("\n")[index] ?? "";
  /** A phone picture, or the part of it from `top` to `bottom` (in hundreds of its pixels). */
  const pic = (name: Slice, top = 0, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, top, 7.5, bottom] as const,
  });
  const [airLead, airRest] = line("airpro.title", 0).split("AirPro");
  const [quietLead, quietSecond, quietThird] = ts("quiet.layers").split("\n");

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the logo's line and the badge, then the title and the tags, then the unit and four perks */}
        <PhonePicture {...pic("p01", 0, 1.55)}>
          <p className="absolute top-[0.6rem] left-[0.3rem] text-[0.17rem] leading-[0.2rem] font-normal text-[#a8aaa9]">
            {t("m.logo")}
          </p>
          <p className="absolute top-[1.12rem] left-[6.32rem] w-[0.84rem] rounded-b-[0.05rem] bg-[#014099] p-[0.04rem] text-center text-[0.1rem] leading-[0.13rem] font-normal text-white">
            {flow("hero.badge")}
          </p>
        </PhonePicture>
        <div className="min-h-[3.94rem] bg-[#050807] px-[0.4rem] pt-[0.23rem] pb-[0.3rem] text-center text-white">
          <p className="text-[0.32rem] leading-[0.42rem] font-normal">
            {t("hero.brand")}
          </p>
          <h1 className="mt-[0.24rem] text-[0.46rem] leading-[0.6rem] font-bold text-balance">
            {flow("hero.title")}
          </h1>
          <p className="mt-[0.12rem] text-[0.36rem] leading-[0.5rem] font-bold text-balance">
            {t("hero.subtitle")}
          </p>
          <ul className="mt-[0.36rem] flex flex-wrap justify-center gap-x-[0.12rem] gap-y-[0.1rem]">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="flex items-stretch gap-x-[0.04rem] text-[0.18rem] leading-[0.24rem] font-normal text-[#e4ccad]"
              >
                <span
                  className="w-[0.09rem] shrink-0 bg-[length:100%_100%] bg-no-repeat"
                  style={bg("/orvibo/products/mixstation/bracket-left.webp")}
                />
                <span className="py-[0.02rem]">{t(tag)}</span>
                <span
                  className="w-[0.09rem] shrink-0 bg-[length:100%_100%] bg-no-repeat"
                  style={bg("/orvibo/products/mixstation/bracket-right.webp")}
                />
              </li>
            ))}
          </ul>
        </div>
        <PhonePicture {...pic("p01", 5.49)}>
          <ul className="absolute top-[8.94rem] left-[0.46rem] grid w-[6.69rem] grid-cols-4 text-center">
            {PERKS.map((perk) => (
              <li key={perk.title} className="px-[0.06rem]">
                <p className="text-[0.22rem] leading-[0.3rem] font-medium text-[#c9c9c9]">
                  {t(perk.title)}
                </p>
                <p className="mt-[0.06rem] text-[0.15rem] leading-[0.2rem] font-normal text-[#b2b2b2]">
                  {t(perk.desc)}
                </p>
              </li>
            ))}
          </ul>
        </PhonePicture>
        {/* the CCTV banner */}
        <PhonePicture {...pic("p02")}>
          <div className="absolute inset-x-[0.4rem] top-[1.6rem] text-center">
            <p className="text-[0.32rem] leading-[0.4rem] font-medium text-[#fff3dc]">
              {t("cctv.brand")}
            </p>
            <p className="mt-[0.3rem] bg-gradient-to-b from-[#fce1ca] to-[#d9a77f] bg-clip-text text-[0.9rem] leading-[1.1rem] font-black text-transparent italic">
              {t("cctv.title")}
            </p>
            <p className="mt-[0.3rem] text-[0.21rem] leading-[0.28rem] font-normal text-[#fdd5b4]">
              {t("cctv.channels")}
            </p>
          </div>
        </PhonePicture>
        {/* the price list */}
        <div className="min-h-[3.05rem] px-[0.5rem] pt-[1.14rem] pb-[0.3rem] text-center">
          <h2 className="text-[0.48rem] leading-[0.62rem] font-medium text-balance text-[#dce8ff]">
            {t("label.model")}
          </h2>
          <p className="mt-[0.2rem] text-[0.24rem] leading-[0.34rem] font-normal text-white">
            {t("m.priceSubtitle")}
          </p>
        </div>
        <PhonePicture {...pic("prices", 3.05)}>
          {PRICES.map((price) => (
            <div key={price.n}>
              <div
                className={cn("absolute left-[0.5rem] w-[2.3rem]", price.at)}
              >
                <p className="bg-gradient-to-b from-white to-[#f3d9a9] bg-clip-text text-[0.28rem] leading-[0.34rem] font-bold text-transparent">
                  {t(`m.price${price.n}Set`)}
                </p>
                <p className="mt-[0.08rem] text-[0.17rem] leading-[0.23rem] font-normal text-white">
                  {t(`m.price${price.n}Area`)}
                  <br />
                  {t(`m.price${price.n}Rooms`)}
                </p>
              </div>
              <div
                className={cn(
                  "absolute right-[0.46rem] text-right",
                  price.priceAt,
                )}
              >
                <p className="bg-gradient-to-b from-[#fff6e4] to-[#e9c48e] bg-clip-text text-[0.42rem] leading-[0.5rem] font-bold text-transparent">
                  {figureWithUnit(
                    ts(`m.price${price.n}Value`),
                    "text-[0.28rem]",
                  )}
                </p>
                <p className="mt-[0.04rem] text-[0.13rem] leading-[0.18rem] font-normal text-[#d3d5d9]">
                  {t("m.priceNote")}
                </p>
              </div>
            </div>
          ))}
        </PhonePicture>
        {/* one unit for many uses: what it does, then the appliances it stands for */}
        <div className="min-h-[4.2rem] px-[0.83rem] pt-[0.62rem] pb-[0.3rem] text-white">
          <h2 className="text-[0.64rem] leading-[0.8rem] font-bold">
            {line("value.title", 0)}
          </h2>
          <p className="mt-[0.1rem] text-[0.44rem] leading-[0.58rem] font-medium">
            {line("value.title", 1)}
          </p>
          <p className="mt-[0.6rem] text-[0.27rem] leading-[0.45rem] font-normal">
            {t("value.text")}
          </p>
        </div>
        <PhonePicture {...pic("p03", 4.2)}>
          {USES.map((use) => (
            <p
              key={use.key}
              className={cn(
                "absolute left-[4.62rem] w-[2.2rem] text-[0.14rem] leading-[0.18rem] font-normal text-[#dbdbdb]",
                use.at,
              )}
            >
              {t(use.key)}
            </p>
          ))}
        </PhonePicture>
        {/* cheaper to run: HeatCycle, the unit inside, then the tiles */}
        <div className="min-h-[3.34rem] px-[0.83rem] pt-[1.15rem] pb-[0.2rem]">
          <p className={cn(COMPARE, "text-[#62eab4]")}>{t("compare")}</p>
          <h2
            className={cn(
              MORE,
              "w-fit bg-gradient-to-b from-[#3ef28f] to-[#3ef2e0] bg-clip-text text-transparent",
            )}
          >
            {t("savings.title")}
          </h2>
        </div>
        <PhonePicture {...pic("p04", 3.34, 4.51)} />
        <div className="min-h-[1.83rem] px-[0.88rem] pt-[0.12rem] pb-[0.2rem] text-[0.36rem] leading-[0.56rem] font-normal text-white">
          <p>{flow("m.heatCycle")}</p>
          <p className="mt-[0.08rem]">{rich("m.freeWater")}</p>
        </div>
        <PhonePicture {...pic("p04", 6.34)}>
          <div className="absolute top-[1.66rem] left-[0.82rem] w-[1.6rem]">
            <p className="text-[0.28rem] leading-[0.34rem] font-medium text-[#e6e6e6]">
              {t("m.winter")}
            </p>
            <p className="text-[0.17rem] leading-[0.21rem] font-normal text-[#c0c2c2]">
              {t("m.winterDesc")}
            </p>
          </div>
          <div className="absolute top-[3.62rem] left-[0.88rem] w-[1.6rem]">
            <p className="text-[0.22rem] leading-[0.28rem] font-medium text-[#f4f4f4]">
              {t("m.summer")}
            </p>
            <p className="text-[0.17rem] leading-[0.21rem] font-normal text-[#c2c3c5]">
              {t("m.summerDesc")}
            </p>
          </div>
          <p className="absolute top-[3.72rem] left-[4.06rem] text-[0.14rem] leading-[0.17rem] font-normal text-[#c9a46a]">
            {t("m.convert")}
          </p>
          <p className="absolute top-[2.44rem] left-[5.38rem] origin-top-left rotate-[14deg] text-[0.11rem] leading-[0.14rem] font-normal whitespace-nowrap text-[#a9b4bf]">
            {t("m.loopIn")}
          </p>
          <p className="absolute top-[2.72rem] left-[5.38rem] origin-top-left rotate-[14deg] text-[0.11rem] leading-[0.14rem] font-normal whitespace-nowrap text-[#c29d95]">
            {t("m.loopOut")}
          </p>
          <p className="absolute top-[4.64rem] left-[5.5rem] origin-top-left rotate-[14deg] text-center text-[0.13rem] leading-[0.16rem] font-normal text-[#b0947a]">
            {t("m.hotOut")}
          </p>
          <p className="absolute top-[4.82rem] left-[2.4rem] w-[1.5rem] text-right text-[0.12rem] leading-[0.15rem] font-normal text-[#76838f]">
            {t("m.waterIn")}
          </p>
        </PhonePicture>
        <PhonePicture {...pic("p05")}>
          {/* cyclic energy storage: 33 % and 4 in the picture */}
          <div
            className={cn(
              TILE,
              "top-[0.62rem] left-[0.33rem] w-[3.35rem] px-[0.15rem]",
            )}
          >
            <p className="text-[0.24rem] leading-[0.3rem] font-bold text-white">
              {t("savings.cycleTitle")}
            </p>
            <p className="mt-[0.1rem] text-[0.16rem] leading-[0.23rem] font-normal text-balance text-[#aaaaaa]">
              {richWords(flow("savings.cycleDesc"))}
            </p>
          </div>
          <p
            className={cn(
              TILE,
              "top-[3rem] left-[0.33rem] w-[3.35rem] text-[0.16rem] leading-[0.22rem] font-normal text-[#787878]",
            )}
          >
            {t("savings.bills")}
          </p>
          <p className="absolute top-[3.96rem] left-[2.42rem] text-[0.4rem] leading-[0.46rem] font-bold text-[#f28a17]">
            {t("savings.times")}
          </p>
          <p
            className={cn(
              TILE,
              "top-[4.58rem] left-[0.33rem] w-[3.35rem] text-[0.16rem] leading-[0.22rem] font-normal text-[#767676]",
            )}
          >
            {t("savings.ratio")}
          </p>
          {/* air-source technology, over the steam */}
          <div
            className={cn(
              TILE,
              "top-[0.98rem] left-[3.83rem] w-[3.39rem] px-[0.15rem]",
            )}
          >
            <p className="text-[0.25rem] leading-[0.32rem] font-bold text-white">
              {t("savings.airTitle")}
            </p>
            <p className="mt-[0.08rem] text-[0.16rem] leading-[0.23rem] font-normal text-[#e7e7e7]">
              {rich("savings.airDesc", "text-[#80e05e]")}
            </p>
          </div>
          {/* instant hot water: 45 °C in the picture */}
          <div
            className={cn(
              TILE,
              "top-[3rem] left-[3.83rem] w-[3.39rem] px-[0.15rem]",
            )}
          >
            <p className="text-[0.21rem] leading-[0.27rem] font-bold text-white">
              {flow("savings.instantTitle")}
            </p>
            <p className="mt-[0.04rem] text-[0.14rem] leading-[0.19rem] font-normal text-[#e4e4e4]">
              {flow("savings.instantDesc")}
            </p>
          </div>
          {/* the patents */}
          <div className={cn(TILE, "top-[5.94rem] left-[0.3rem] w-[6.9rem]")}>
            <p className="text-[0.34rem] leading-[0.42rem] font-bold text-[#ba9a79]">
              {t("savings.patentsTitle")}
            </p>
            <p className="mt-[0.1rem] text-[0.28rem] leading-[0.36rem] font-normal text-white">
              {t("savings.patentsDesc")}
            </p>
          </div>
        </PhonePicture>
        <div className="min-h-[2.14rem] px-[0.88rem] pt-[0.65rem] pb-[0.2rem] text-[0.38rem] leading-[0.62rem] font-bold text-white">
          <h3>{t("m.standardTitle")}</h3>
        </div>
        <PhonePicture {...pic("p06", 2.14)}>
          {/* weighted efficiency, with the chart's labels and figures */}
          <p className="absolute top-[0.33rem] left-[0.83rem] w-[6.2rem] text-[0.24rem] leading-[0.3rem] font-bold text-white">
            {flow("savings.iplvTitle")}
          </p>
          <p className="absolute top-[0.68rem] left-[0.83rem] w-[2.3rem] text-[0.17rem] leading-[0.22rem] font-normal text-[#a8a8a8]">
            {flow("savings.iplvDesc")}
          </p>
          <p className="absolute top-[1.12rem] left-[0.78rem] text-[1.24rem] leading-[1rem] font-light text-[#28fe0c]">
            {rich("savings.iplvValue")}
          </p>
          <p className="absolute top-[0.72rem] left-[3.91rem] text-[0.11rem] leading-[0.14rem] font-normal text-[#80e05e]">
            {t("m.barW1")}
          </p>
          {BARS.map((bar) => (
            <p
              key={bar.label}
              className={cn(
                "absolute right-[3.68rem] text-[0.11rem] leading-[0.14rem] font-normal whitespace-nowrap text-[#bbbbbb]",
                bar.labelAt,
              )}
            >
              {t(bar.label)}
            </p>
          ))}
          {BARS.map((bar) => (
            <p
              key={bar.value}
              className={cn(
                "absolute text-[0.1rem] leading-[0.14rem] font-normal text-[#9a9a9a]",
                bar.valueAt,
              )}
            >
              {t(bar.value)}
            </p>
          ))}
          {/* central AC in every season, with its two photos */}
          <p
            className={cn(
              TILE,
              "top-[2.62rem] left-[0.3rem] w-[3.38rem] px-[0.15rem] text-[0.22rem] leading-[0.32rem] font-bold text-balance text-white",
            )}
          >
            {flow("savings.seasonsTitle")}
          </p>
          <p
            className={cn(
              TILE,
              "top-[4.96rem] left-[0.3rem] w-[3.38rem] px-[0.15rem] text-[0.15rem] leading-[0.21rem] font-normal text-[#d8d8d8]",
            )}
          >
            {flow("savings.summer")}
          </p>
          <p
            className={cn(
              TILE,
              "top-[6.9rem] left-[0.3rem] w-[3.38rem] px-[0.15rem] text-[0.15rem] leading-[0.21rem] font-normal text-[#d9d9d9]",
            )}
          >
            {flow("savings.winter")}
          </p>
          {/* hot water, 8 times: the 8 in the picture */}
          <p
            className={cn(
              TILE,
              "top-[2.62rem] left-[3.83rem] w-[3.39rem] px-[0.2rem] text-[0.25rem] leading-[0.36rem] font-bold text-balance text-white",
            )}
          >
            {rich("savings.waterTitle")}
          </p>
          <p className="absolute top-[3.92rem] left-[5.62rem] text-[0.3rem] leading-[0.36rem] font-normal text-white">
            {t("savings.times")}
          </p>
          <p
            className={cn(
              TILE,
              "top-[4.47rem] left-[3.83rem] w-[3.39rem] text-[0.16rem] leading-[0.2rem] font-normal text-[#b1afae]",
            )}
          >
            {t("m.tank")}
          </p>
          {/* floor heating: 50 % in the picture */}
          <p
            className={cn(
              TILE,
              "top-[5.3rem] left-[3.83rem] w-[3.39rem] px-[0.2rem] text-[0.23rem] leading-[0.3rem] font-bold text-white",
            )}
          >
            {flow("savings.floorTitle")}
          </p>
          <p className="absolute top-[6.37rem] left-[6rem] text-[0.17rem] leading-[0.22rem] font-normal text-[#8e8d8d]">
            {t("savings.floorWinter")}
          </p>
          <p
            className={cn(
              TILE,
              "top-[6.9rem] left-[3.83rem] w-[3.39rem] text-[0.16rem] leading-[0.2rem] font-normal text-[#aba8a7]",
            )}
          >
            {t("savings.floorVs")}
          </p>
        </PhonePicture>
        {/* grade 1, twice: the two China Energy Labels keep their words */}
        <div className="min-h-[3rem] px-[0.87rem] pt-[0.28rem] pb-[0.3rem] text-white">
          <h3 className="text-[0.4rem] leading-[0.64rem] font-bold text-balance">
            {t("label.title")}
          </h3>
          <p className="mt-[0.3rem] text-[0.25rem] leading-[0.42rem] font-normal">
            {t("label.model")}
            <br />
            {flow("label.desc")}
          </p>
        </div>
        <PhonePicture {...pic("p07", 3)}>
          <p className="absolute top-[0.42rem] left-[1.4rem] flex w-[2.16rem] items-baseline justify-end gap-x-[0.12rem]">
            <span className="text-[0.2rem] font-normal text-[#74ddf6]">
              {t("label.iplv")}
            </span>
            <span className="text-[0.6rem] leading-[0.7rem] font-bold text-[#7eebff]">
              {t("label.cooling")}
            </span>
          </p>
          <p className="absolute top-[0.42rem] left-[4.2rem] flex w-[2.2rem] items-baseline justify-end gap-x-[0.12rem]">
            <span className="text-[0.2rem] font-normal text-[#74ddf6]">
              {t("label.iplvHeating")}
            </span>
            <span className="text-[0.6rem] leading-[0.7rem] font-bold text-[#7eebff]">
              {t("label.heating")}
            </span>
          </p>
          <p
            className={cn(
              TILE,
              "top-[4.7rem] left-[1.3rem] w-[2.5rem] text-[0.19rem] leading-[0.24rem] font-normal text-[#898989]",
            )}
          >
            {t("label.coolingCaption")}
          </p>
          <p
            className={cn(
              TILE,
              "top-[4.7rem] left-[4.08rem] w-[2.5rem] text-[0.19rem] leading-[0.24rem] font-normal text-[#898989]",
            )}
          >
            {t("label.heatingCaption")}
          </p>
        </PhonePicture>
        {/* more comfortable */}
        <div className="min-h-[3.7rem] bg-gradient-to-b from-[#ebf3f6] to-[#f3f9fe] px-[0.83rem] pt-[1.13rem] pb-[0.2rem]">
          <p className={cn(COMPARE, "text-[#2a9d75]")}>{t("compare")}</p>
          <h2
            className={cn(
              MORE,
              "w-fit bg-gradient-to-t from-[#76e4d5] to-[#4cd282] bg-clip-text text-transparent",
            )}
          >
            {t("comfort.title")}
          </h2>
        </div>
        <PhonePicture {...pic("p08", 3.7)} />
        <PhonePicture {...pic("p09")}>
          <div className="absolute top-[0.1rem] left-[0.86rem] w-[6.3rem] font-bold text-[#75cbad]">
            <h3 className="text-[0.48rem] leading-[0.64rem]">
              {line("comfort.breeze", 0)}
            </h3>
            <p className="mt-[0.08rem] text-[0.38rem] leading-[0.52rem]">
              {line("comfort.breeze", 1)}
            </p>
          </div>
          <p className="absolute top-[2.48rem] left-[0.83rem] text-[0.25rem] leading-[0.38rem] font-medium text-white">
            {t("comfort.soft")}
          </p>
          <p className="absolute top-[5.96rem] left-[0.83rem] w-[2.6rem] text-[0.22rem] leading-[0.36rem] font-medium text-white">
            {t("comfort.dry")}
          </p>
          <div className="absolute top-[6.01rem] left-[4.35rem] w-[2.75rem] text-[0.2rem] leading-[0.32rem] font-medium text-white">
            <p>{line("comfort.feet", 0)}</p>
            <p>
              {line("comfort.feet", 1)} {line("comfort.feet", 2)}
            </p>
          </div>
        </PhonePicture>
        <div className="min-h-[3.9rem] bg-[#e8eaee] px-[0.83rem] pt-[0.56rem] pb-[0.3rem]">
          <h3 className="text-[0.42rem] leading-[0.7rem] font-bold text-[#323232]">
            {t("comfort.heatTitle")}
          </h3>
          <p className="mt-[0.3rem] text-[0.23rem] leading-[0.42rem] font-normal text-[#18191a]">
            {flow("comfort.heatText")}
          </p>
        </div>
        <PhonePicture {...pic("p10", 3.9)} />
        <PhonePicture {...pic("p11")}>
          <div className="absolute top-[0.96rem] left-[0.86rem] w-[5.6rem] text-white">
            <h3 className="text-[0.38rem] leading-[0.44rem] font-medium">
              {rich("size.title")}
            </h3>
            <p className="mt-[0.3rem] text-[0.46rem] leading-[0.8rem] font-bold">
              {flow("size.text")}
            </p>
          </div>
        </PhonePicture>
        <PhonePicture {...pic("p12")}>
          <div className="absolute top-[3.8rem] left-[0.84rem] w-[5.9rem] text-[0.2rem] leading-[0.28rem] font-normal">
            <p className="font-bold text-white">{t("m.integratedTitle")}</p>
            <p className="mt-[0.12rem] text-[#a5a5a6]">
              {t("m.integratedText")}
            </p>
          </div>
        </PhonePicture>
        {/* more powerful: HeatTurbo, the floor plans each 7 HP system covers, the compressor */}
        <div className="min-h-[3.89rem] px-[0.78rem] pt-[1.29rem] pb-[0.2rem]">
          <p className={cn(COMPARE, "text-[#e3e3e3]")}>{t("compare")}</p>
          <h2
            className={cn(
              MORE,
              "w-fit bg-gradient-to-r from-[#ff7934] to-[#58a1ff] bg-clip-text text-transparent",
            )}
          >
            {t("power.title")}
          </h2>
        </div>
        <PhonePicture {...pic("p13", 3.89, 4.33)} />
        <div className="min-h-[3.62rem] px-[0.8rem] pt-[0.3rem] pb-[0.35rem] text-white">
          <h3 className="text-[0.4rem] leading-[0.68rem] font-bold">
            {t("m.turbo")}
            <br />
            {t("m.turboMore")}
          </h3>
          <p className="mt-[0.3rem] text-[0.24rem] leading-[0.4rem] font-normal text-[#cbcbcb]">
            {t("turbo.text")}
          </p>
        </div>
        <PhonePicture {...pic("p14")}>
          <p className="absolute top-[0.82rem] left-[1.47rem] w-[4.9rem] text-[0.26rem] leading-[0.34rem] font-normal text-[#a7b2ba]">
            {t("turbo.vrf")}
          </p>
          <p className="absolute top-[3.48rem] left-[0.88rem] flex h-[0.74rem] items-center rounded-full bg-[#0f1014] px-[0.3rem] text-[0.3rem] font-medium text-[#94b1ff]">
            {t("turbo.hydronic")}
          </p>
        </PhonePicture>
        <div className="min-h-[5.28rem] bg-[#0d0d0d] pt-[0.99rem] pr-[0.6rem] pb-[0.3rem] pl-[1.07rem] text-white">
          <h3 className="text-[0.4rem] leading-[0.66rem] font-bold">
            {t("power.heading")}
          </h3>
          <p className="mt-[0.5rem] text-[0.26rem] leading-[0.42rem] font-normal">
            {flow("power.text")}
          </p>
        </div>
        <PhonePicture {...pic("p15", 5.28)}>
          <p className="absolute top-[4.44rem] left-[1.04rem] flex h-[0.5rem] w-[1.45rem] items-center text-[0.2rem] leading-[0.24rem] font-normal text-[#6b6b6b]">
            {t("m.otherCompressors")}
          </p>
          <p className="absolute top-[4.57rem] left-[5.99rem] text-[0.24rem] leading-[0.3rem] font-normal text-[#6b6b6b]">
            {t("m.sixYears")}
          </p>
          <p className="absolute top-[5.08rem] left-[1.04rem] flex h-[0.5rem] w-[1.45rem] items-center text-[0.2rem] leading-[0.24rem] font-normal text-[#9bb9ff]">
            {t("m.panasonic")}
          </p>
          <p className="absolute top-[5.23rem] left-[6rem] text-[0.24rem] leading-[0.3rem] font-normal text-[#98b6fe]">
            {t("m.tenYears")}
          </p>
        </PhonePicture>
        <div className="min-h-[3.97rem] bg-gradient-to-b from-[#232738] via-[#313347] to-[#3c3f52] px-[0.88rem] pt-[0.84rem] pb-[0.3rem]">
          <h3 className="text-[0.44rem] leading-[0.7rem] font-bold text-white">
            {rich("frost.title", "text-[#b7d8ff]")}
          </h3>
        </div>
        <PhonePicture {...pic("p16", 3.97)}>
          {FROST.map((frost) => (
            <div
              key={frost.title}
              className={cn(
                TILE,
                "top-[1.4rem] w-[1.82rem] px-[0.08rem]",
                frost.at,
              )}
            >
              <p className="text-[0.16rem] leading-[0.22rem] font-medium text-white">
                {t(frost.title)}
              </p>
              <p className="mt-[0.06rem] text-[0.12rem] leading-[0.16rem] font-normal text-[#b0b2b5]">
                {flow(frost.desc)}
              </p>
            </div>
          ))}
        </PhonePicture>
        <div className="min-h-[5.11rem] px-[0.86rem] pt-[1.26rem] pb-[0.3rem] text-white">
          <p className="text-[0.28rem] leading-[0.4rem] font-bold">
            {flow("tank.title")}
          </p>
          <h3 className="mt-[0.2rem] text-[0.42rem] leading-[0.66rem] font-bold">
            {t("tank.heading")}
          </h3>
          <p className="mt-[0.36rem] text-[0.26rem] leading-[0.46rem] font-normal text-[#bfbfbf]">
            {t("tank.text")}
          </p>
        </div>
        <PhonePicture {...pic("p17", 5.11)}>
          <p className="absolute top-[5.7rem] left-[1.6rem] flex h-[0.84rem] w-[4.35rem] items-center justify-center text-[0.28rem] font-medium text-[#f8d4b6]">
            {rich("m.showers")}
          </p>
        </PhonePicture>
        {/* seven layers of quiet: the 7 in the picture */}
        <PhonePicture {...pic("p18")}>
          <h3 className="absolute top-[0.5rem] left-[1.4rem] w-[5.8rem] text-[0.38rem] leading-[0.58rem] font-bold text-white">
            {quietLead} {quietSecond}
            <span className="-ml-[0.51rem] block">{quietThird}</span>
          </h3>
          {QUIET.map((part) => (
            <p
              key={part.key}
              className={cn(
                TILE,
                "px-[0.1rem] text-[0.23rem] leading-[0.3rem] font-medium text-white",
                part.at,
              )}
            >
              {flow(part.key)}
            </p>
          ))}
        </PhonePicture>
        {/* smarter: the MixPad screen, the app's tiles, the voice assistant */}
        <div className="min-h-[3.44rem] bg-[#0a0a0a] px-[0.84rem] pt-[1.57rem] pb-[0.2rem]">
          <p className={cn(COMPARE, "text-[#56abfb]")}>{t("compare")}</p>
          <h2 className={cn(MORE, "text-[#8ed0f3]")}>{t("smart.title")}</h2>
        </div>
        <PhonePicture {...pic("p19", 3.44, 5.46)} />
        <div className="min-h-[3.84rem] bg-gradient-to-b from-[#0a0b10] via-[#0d0d0d] to-[#1d1d1d] px-[0.86rem] pt-[0.37rem] pb-[0.3rem] text-white">
          <h3 className="text-[0.36rem] leading-[0.56rem] font-bold">
            {t("smart.heading")}
          </h3>
          <p className="mt-[0.3rem] text-[0.25rem] leading-[0.4rem] font-normal">
            {flow("smart.text")}
          </p>
        </div>
        <PhonePicture {...pic("p19", 9.3)}>
          <p className="absolute inset-x-[0.5rem] top-[3.43rem] text-center text-[0.2rem] leading-[0.26rem] font-normal text-[#a7a7a7]">
            {t("smart.lights")}
          </p>
        </PhonePicture>
        <PhonePicture {...pic("p20")}>
          {/* 3D airflow */}
          <p className="absolute top-[0.78rem] left-[0.83rem] w-[3.6rem] text-[0.24rem] leading-[0.32rem] font-bold text-white">
            {t("smart.airTitle")}
          </p>
          <p className="absolute top-[1.56rem] left-[0.85rem] w-[3.3rem] text-[0.17rem] leading-[0.23rem] font-normal text-[#c4c4c4]">
            {t("smart.airDesc")}
          </p>
          {/* Climate Pro (in the picture) */}
          <p className="absolute top-[3.72rem] left-[0.8rem] w-[1.75rem] text-[0.17rem] leading-[0.24rem] font-bold text-white">
            {flow("smart.climate")}
          </p>
          {CLIMATES.map((climate) => (
            <p
              key={climate.key}
              className={cn(
                TILE,
                "top-[3.5rem] w-[1.1rem] text-[0.11rem] leading-[0.14rem] font-normal",
                climate.at,
              )}
            >
              {t(climate.key)}
            </p>
          ))}
          {/* HomeAI Energy (in the picture), the week's savings beside its chart */}
          <p className="absolute top-[5.94rem] left-[0.85rem] w-[3rem] text-[0.2rem] leading-[0.26rem] font-bold text-white">
            {t("smart.energy")}
          </p>
          <dl className="absolute top-[6.48rem] left-[0.63rem] w-[0.8rem]">
            {SAVED.map((saved) => (
              <div key={saved.label}>
                <dt className="text-[0.1rem] leading-[0.12rem] font-normal text-[#939393]">
                  {flow(saved.label)}
                </dt>
                <dd className="text-[0.32rem] leading-[0.38rem] font-normal text-[#e0e0e0]">
                  {figureWithUnit(ts(saved.value), "text-[0.13rem]")}
                </dd>
              </div>
            ))}
          </dl>
          {/* AI scenes */}
          <div className="absolute top-[5.56rem] left-[4.53rem] w-[2.6rem] font-bold text-white">
            <p className="text-[0.22rem] leading-[0.3rem]">
              {richWords(line("smart.scenesTitle", 0))}
            </p>
            <p className="text-[0.18rem] leading-[0.24rem]">
              {line("smart.scenesTitle", 1)}
            </p>
          </div>
          {SCENES.map((scene) => (
            <p
              key={scene.key}
              className={cn(
                TILE,
                "top-[6.58rem] w-[0.62rem] text-[0.09rem] leading-[0.11rem] font-normal text-[#cecece]",
                scene.at,
              )}
            >
              {t(scene.key)}
            </p>
          ))}
          {/* faults reported, with the app's alert */}
          <div className="absolute top-[8.5rem] left-[0.62rem] w-[3.1rem]">
            <p className="text-[0.19rem] leading-[0.26rem] font-bold text-white">
              {t("smart.faultTitle")}
            </p>
            <p className="mt-[0.04rem] text-[0.13rem] leading-[0.17rem] font-normal text-[#a4a4a4]">
              {t("smart.faultDesc")}
            </p>
          </div>
          <p className="absolute top-[10.1rem] left-[0.72rem] w-[2.8rem] text-[0.145rem] leading-[0.2rem] font-normal text-[#fdfdfd]">
            {flow("smart.faultAlert")}
          </p>
          <p className="absolute top-[10.82rem] left-[1.12rem] flex h-[0.36rem] w-[0.91rem] items-center justify-center text-[0.18rem] font-normal text-white">
            {t("smart.faultOk")}
          </p>
          <p className="absolute top-[10.82rem] left-[2.2rem] flex h-[0.36rem] w-[0.9rem] items-center justify-center text-[0.18rem] font-normal text-[#b0b0b0]">
            {t("smart.faultIgnore")}
          </p>
          {/* 7-day schedules: 7x24 in the picture */}
          <div className="absolute top-[8.5rem] left-[4.38rem] w-[2.75rem]">
            <p className="text-[0.24rem] leading-[0.33rem] font-bold text-white">
              {t("m.scheduleTitle")}
            </p>
            <p className="mt-[0.06rem] text-[0.13rem] leading-[0.18rem] font-normal text-[#9b9b9b]">
              {flow("smart.scheduleDesc")}
            </p>
          </div>
        </PhonePicture>
        <PhonePicture {...pic("p21")}>
          <h3 className="absolute top-[0.86rem] left-[0.81rem] w-[6.5rem] text-[0.38rem] leading-[0.58rem] font-bold text-white">
            {rich("smart.voice", "text-[#4b8aff]")}
          </h3>
          <div className="absolute top-[8.34rem] left-[0.84rem] w-[6.1rem]">
            <p className="text-[0.3rem] leading-[0.36rem] font-bold text-[#99dafb]">
              {t("m.voiceSay")}
            </p>
            <ul className="mt-[0.4rem] flex flex-col gap-y-[0.1rem] text-[0.2rem] leading-[0.28rem] font-normal text-white">
              <li>{t("m.voice1")}</li>
              <li>{t("m.voice2")}</li>
              <li>{t("m.voice3")}</li>
            </ul>
          </div>
        </PhonePicture>
        {/* more beautiful: the design, the AirPro indoor unit */}
        <div className="min-h-[4.85rem] bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#383836] px-[0.8rem] pt-[1.04rem] pb-[0.3rem]">
          <p className={cn(COMPARE, "text-[#b7b7b7]")}>{t("compare")}</p>
          <h2 className={cn(MORE, "text-[#fcfcfc]")}>{t("beauty.title")}</h2>
          <p className="mt-[0.6rem] text-[0.33rem] leading-[0.48rem] font-normal text-[#e5e5e5]">
            {t("beauty.text")}
          </p>
        </div>
        <PhonePicture {...pic("p22", 4.85)} />
        <div className="min-h-[2.11rem] bg-gradient-to-b from-[#181818] via-[#0d0d0d] to-[#0a0a0a] px-[0.82rem] pt-[0.26rem] pb-[0.2rem] text-white">
          <h3 className="font-bold">
            <span className="block text-[0.28rem] leading-[0.4rem]">
              {line("design.title", 0)}
            </span>
            <span className="block text-[0.32rem] leading-[0.44rem]">
              {line("design.title", 1)}
            </span>
          </h3>
          <p className="mt-[0.22rem] text-[0.23rem] leading-[0.32rem] font-normal text-[#cbcbcb]">
            {t("design.text")}
          </p>
        </div>
        <PhonePicture {...pic("p23", 2.11)}>
          <h3 className="absolute top-[6.36rem] left-[0.82rem] w-[6.1rem] font-bold text-white">
            <span className="block text-[0.34rem] leading-[0.6rem]">
              {airLead}
              {airRest !== undefined && (
                <span className="text-[0.52rem] font-light text-[#eaeaea]">
                  AirPro
                </span>
              )}
              {airRest}
            </span>
            <span className="mt-[0.06rem] block text-[0.34rem] leading-[0.44rem]">
              {line("airpro.title", 1)}
            </span>
          </h3>
        </PhonePicture>
        <div className="min-h-[3.46rem] bg-[#0a0a0a] px-[0.82rem] pt-[0.62rem] pb-[0.3rem] text-white">
          <h3 className="text-[0.32rem] leading-[0.4rem] font-bold">
            {t("silent.title")}
          </h3>
          <p className="mt-[0.3rem] text-[0.19rem] leading-[0.33rem] font-normal text-[#c2c2c2]">
            {t("silent.text")}
          </p>
        </div>
        <PhonePicture {...pic("p24", 3.46)} />
        {/* a 10-year warranty (the badge is in the picture) */}
        <PhonePicture {...pic("p25")}>
          <h3 className="absolute inset-x-[0.6rem] top-[1.34rem] text-center text-[0.42rem] leading-[0.64rem] font-bold text-balance text-white">
            {richWords(ts("warranty.title").replace(": ", ":\n"))}
          </h3>
          <p className="absolute inset-x-[0.5rem] top-[8.42rem] text-center text-[0.4rem] leading-[0.52rem] font-bold text-[#fcecc9]">
            {t("warranty.split")}
          </p>
        </PhonePicture>
        {/* the all-in-one package */}
        <section className="px-[0.6rem] pt-[1rem] pb-[0.5rem] text-center">
          <h2 className="bg-gradient-to-b from-[#f8d4b5] to-[#e7a77b] bg-clip-text text-[0.68rem] leading-[0.86rem] font-black text-transparent">
            {t("m.packTitle")}
          </h2>
          <p className="mt-[0.14rem] text-[0.42rem] leading-[0.54rem] font-bold text-[#ffe3c3]">
            {t("m.packSubtitle")}
          </p>
          <p
            className={cn(
              GOLD_PILL,
              "mx-auto mt-[0.34rem] w-fit px-[0.24rem] py-[0.06rem] text-[0.22rem] leading-[0.3rem] font-bold",
            )}
          >
            {t("m.packPromise")}
          </p>
          <div className="relative mt-[0.8rem] rounded-[0.24rem] bg-[#281f18] px-[0.3rem] pt-[0.7rem] pb-[0.4rem] text-left">
            <h3
              className={cn(
                GOLD_PILL,
                "absolute inset-x-[0.3rem] -top-[0.28rem] mx-auto w-fit px-[0.24rem] py-[0.08rem] text-center text-[0.26rem] leading-[0.34rem] font-bold",
              )}
            >
              {t("m.packIncluded")}
            </h3>
            <ol className="flex list-inside list-decimal flex-col gap-y-[0.08rem] text-[0.19rem] leading-[0.27rem] font-normal text-[#fddebc]">
              {PACK.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ol>
          </div>
          {PACK_LISTS.map((list) => {
            const [main, aside] = ts(list.title).split(" (");
            return (
              <div
                key={list.title}
                className="relative mt-[0.7rem] rounded-[0.24rem] bg-[#141414] px-[0.24rem] pt-[0.6rem] pb-[0.36rem] text-left"
              >
                <h3 className="absolute inset-x-[0.3rem] -top-[0.24rem] mx-auto w-fit rounded-full bg-[#414141] px-[0.24rem] py-[0.06rem] text-center text-[0.24rem] leading-[0.32rem] font-bold text-[#ababab]">
                  {main}
                  {aside && (
                    <span className="text-[0.16rem] font-normal">
                      {` (${aside}`}
                    </span>
                  )}
                </h3>
                <ul className="grid grid-cols-2 gap-x-[0.2rem] gap-y-[0.1rem] text-[0.17rem] leading-[0.24rem] font-normal text-[#929292]">
                  {list.items.map((item) => (
                    <li key={item} className="flex gap-x-[0.06rem]">
                      <span aria-hidden>·</span>
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="mt-[0.3rem] text-left text-[0.17rem] leading-[0.28rem] font-normal text-[#636363]">
            <p>{t("m.packNote1")}</p>
            <p>{t("m.packNote2")}</p>
          </div>
        </section>
        {/* the W1's and the MixPad's specifications */}
        <section className="flex flex-col gap-y-[0.3rem] px-[0.2rem] pt-[0.4rem]">
          <div className={CARD}>
            <h2 className={CARD_TITLE}>{t("specW1.title")}</h2>
            <dl className="mt-[0.3rem]">
              <div className={SPEC_ROW}>
                <div>
                  <dt className={SPEC_TERM}>{t("specW1.seriesLabel")}</dt>
                  <dd className={SPEC_VALUE}>{t("specW1.series")}</dd>
                </div>
                <div>
                  <dt className={SPEC_TERM}>{t("specW1.modelLabel")}</dt>
                  <dd className={SPEC_VALUE}>{t("specW1.model")}</dd>
                </div>
              </div>
              {pairs(W1_SPECS).map((row) => (
                <div key={row[0]} className={SPEC_ROW}>
                  {row.map((spec) => (
                    <div key={spec}>
                      <dt className={SPEC_TERM}>{t(`specW1.${spec}`)}</dt>
                      <dd className={SPEC_VALUE}>{t(`specW1.${spec}Value`)}</dd>
                    </div>
                  ))}
                </div>
              ))}
            </dl>
          </div>
          <div className={CARD}>
            <h2 className={CARD_TITLE}>{t("specPad.title")}</h2>
            <dl className="mt-[0.3rem]">
              <div className={SPEC_ROW}>
                <div>
                  <dt className={SPEC_TERM}>{t("specPad.seriesLabel")}</dt>
                  <dd className={SPEC_VALUE}>{t("specPad.series")}</dd>
                </div>
                <div>
                  <dt className={SPEC_TERM}>{t("specPad.os")}</dt>
                  <dd className={SPEC_VALUE}>{t("specPad.osValue")}</dd>
                </div>
              </div>
              {pairs(PAD_SPECS).map((row) => (
                <div key={row[0]} className={SPEC_ROW}>
                  {row.map((spec) => (
                    <div key={spec}>
                      <dt className={SPEC_TERM}>{t(`specPad.${spec}`)}</dt>
                      <dd className={SPEC_VALUE}>
                        {t(`specPad.${spec}Value`)}
                      </dd>
                    </div>
                  ))}
                </div>
              ))}
            </dl>
          </div>
        </section>
        {/* the AirPro indoor units' specifications, three models to a table */}
        <section className="px-[0.2rem] pt-[0.5rem] pb-[0.3rem]">
          <h2 className="text-center text-[0.34rem] leading-[0.48rem] font-medium text-white">
            {t("specAir.title")}
          </h2>
          {AIRPRO.map((models) => (
            <div
              key={models[0]}
              className="mt-[0.3rem] overflow-hidden rounded-[0.12rem] border border-[#2b2b2d]"
            >
              <table className="w-full table-fixed border-collapse text-center">
                <colgroup>
                  <col className="w-[1.05rem]" />
                  <col className="w-[1.05rem]" />
                  <col className="w-[0.45rem]" />
                  {models.map((model) => (
                    <col key={model} />
                  ))}
                </colgroup>
                <tbody>
                  <tr className="h-[0.36rem]">
                    <th scope="row" rowSpan={2} className={AIR_HEAD}>
                      {t("specAir.model")}
                    </th>
                    <th scope="row" colSpan={2} className={AIR_HEAD}>
                      {t("specAir.right")}
                    </th>
                    {models.map((model) => (
                      <td key={model} className={AIR_HEAD}>
                        {t(`specAir.right${model}`)}
                      </td>
                    ))}
                  </tr>
                  <tr className="h-[0.36rem]">
                    <th scope="row" colSpan={2} className={AIR_HEAD}>
                      {t("specAir.left")}
                    </th>
                    {models.map((model) => (
                      <td key={model} className={AIR_HEAD}>
                        {t(`specAir.left${model}`)}
                      </td>
                    ))}
                  </tr>
                  <tr className="h-[0.36rem]">
                    <th scope="row" colSpan={3} className={AIR_HEAD}>
                      {t("specAir.supply")}
                    </th>
                    {models.map((model) => (
                      <td key={model} className={AIR_VALUE}>
                        {t("specAir.supplyValue")}
                      </td>
                    ))}
                  </tr>
                  <tr className="h-[0.36rem]">
                    <th scope="row" className={AIR_HEAD}>
                      {t("specAir.cooling")}
                    </th>
                    <td className={AIR_HEAD}>{t("specAir.coolingAt")}</td>
                    <td className={AIR_HEAD}>{t("specAir.kw")}</td>
                    {models.map((model) => (
                      <td key={model} className={AIR_VALUE}>
                        {t(`specAir.cooling${model}`)}
                      </td>
                    ))}
                  </tr>
                  <tr className="h-[0.36rem]">
                    <th scope="row" className={AIR_HEAD}>
                      {t("specAir.heating")}
                    </th>
                    <td className={AIR_HEAD}>{t("specAir.heatingAt")}</td>
                    <td className={AIR_HEAD}>{t("specAir.kw")}</td>
                    {models.map((model) => (
                      <td key={model} className={AIR_VALUE}>
                        {t(`specAir.heating${model}`)}
                      </td>
                    ))}
                  </tr>
                  <tr className="h-[0.36rem]">
                    <th scope="row" colSpan={2} className={AIR_HEAD}>
                      {t("specAir.airflow")}
                    </th>
                    <td className={AIR_HEAD}>{t("specAir.flow")}</td>
                    {models.map((model) => (
                      <td key={model} className={AIR_VALUE}>
                        {t(`specAir.airflow${model}`)}
                      </td>
                    ))}
                  </tr>
                  <tr className="h-[0.36rem]">
                    <th scope="row" colSpan={2} className={AIR_HEAD}>
                      {t("specAir.pressure")}
                    </th>
                    <td className={AIR_HEAD}>{t("specAir.pa")}</td>
                    {models.map((model) => (
                      <td key={model} className={AIR_VALUE}>
                        {t("specAir.pressureValue")}
                      </td>
                    ))}
                  </tr>
                  <tr className="h-[0.36rem]">
                    <th scope="row" className={AIR_HEAD}>
                      {t("specAir.noise")}
                    </th>
                    <td className={AIR_HEAD}>{t("specAir.noiseAt")}</td>
                    <td className={AIR_HEAD}>{t("specAir.db")}</td>
                    {models.map((model) => (
                      <td key={model} className={AIR_VALUE}>
                        {t(`specAir.noise${model}`)}
                      </td>
                    ))}
                  </tr>
                  <tr className="h-[0.36rem]">
                    <th scope="row" className={AIR_HEAD}>
                      {t("specAir.size")}
                    </th>
                    <td className={AIR_HEAD}>{t("specAir.sizeAxes")}</td>
                    <td className={AIR_HEAD}>{t("specAir.mm")}</td>
                    {models.map((model) => (
                      <td key={model} className={AIR_VALUE}>
                        {t(`specAir.size${model}`)}
                      </td>
                    ))}
                  </tr>
                  <tr className="h-[0.36rem]">
                    <th scope="row" rowSpan={2} className={AIR_HEAD}>
                      {t("specAir.pipes")}
                    </th>
                    <td className={AIR_HEAD}>{t("specAir.water")}</td>
                    <td className={AIR_HEAD}>{t("specAir.inch")}</td>
                    {models.map((model) => (
                      <td key={model} className={AIR_VALUE}>
                        {t("specAir.waterValue")}
                      </td>
                    ))}
                  </tr>
                  <tr className="h-[0.36rem]">
                    <td className={AIR_HEAD}>{t("specAir.drain")}</td>
                    <td className={AIR_HEAD}>{t("specAir.mm")}</td>
                    {models.map((model) => (
                      <td key={model} className={AIR_VALUE}>
                        {t("specAir.drainValue")}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </section>
        {/* the footnotes */}
        <ul className="px-[0.36rem] pt-[0.3rem] pb-[0.6rem] text-[0.17rem] leading-[0.3rem] font-normal text-[#b7b7b7]">
          {NOTES.map((note) => (
            <li key={note}>{t(note)}</li>
          ))}
        </ul>
      </div>
      {/* product_detail_tips */}
      <div className="bg-[#202020] px-[20px] py-[32px]">
        <p className="text-[13px] leading-[22px] font-medium text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
