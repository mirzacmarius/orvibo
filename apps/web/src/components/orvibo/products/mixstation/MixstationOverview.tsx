import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import {
  CENTRE,
  CctvBanner,
  FRAME,
  PHOTO,
} from "@/components/orvibo/products/hvac/HvacSections";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import { Fragment, type ReactNode } from "react";

/** orvibo.com's pictures that carry no words, used as they are; the savings, power and tank backgrounds (sec3, sec9
 * and sec11) have translated copies (localized-assets.generated.ts). */
const CN = "/guanwang_second/front/images/new/products/mixstation";
/** orvibo.com's tiles and energy label band without their words, the hero badge's emblem and the tags' brackets
 * (clean_spec.py, crops.py); every word here is HTML laid over them. */
const IMG = "/orvibo/products/mixstation";
/** The play icon after "Watch the video", as on the other pages. */
const PLAY =
  "/guanwang_second/front/images/new/products/mixpad_elf/icon_player-7fc7fa8ef7.webp";
/** A tile: one of orvibo.com's small pictures, placed in its group. */
const TILE = "absolute bg-cover bg-center bg-no-repeat";

/** sec1: the four tags between gold brackets. */
const TAGS = ["hero.tag1", "hero.tag2", "hero.tag3", "hero.tag4"] as const;
/** sec_add1: the notes on the savings tiles, under the energy labels. */
const SAVING_NOTES = [
  "note.cycle",
  "note.standardSave",
  "note.iplv",
  "note.water",
  "note.floor",
] as const;
/** sec5: the three photos by the breeze heading, their words at the top left. */
const BREEZE = [
  {
    key: "comfort.dry",
    pic: "pic10-51b7daa0e3",
    box: "top-0 left-0 h-[7.07rem] w-[6.54rem]",
  },
  {
    key: "comfort.soft",
    pic: "pic11-80e6d9ef50",
    box: "top-0 left-[6.71rem] h-[3.37rem] w-[6.39rem]",
  },
  {
    key: "comfort.feet",
    pic: "pic12-c54fe8cddc",
    box: "top-[3.54rem] left-[6.71rem] h-[3.53rem] w-[6.39rem]",
  },
] as const;
/** sec12: the three ways the unit keeps from freezing. */
const FROST = [
  { title: "frost.pump", desc: "frost.pumpDesc", pic: "pic21" },
  { title: "frost.heater", desc: "frost.heaterDesc", pic: "pic22" },
  { title: "frost.unit", desc: "frost.unitDesc", pic: "pic23" },
] as const;
/** sec13: the floor plans each 7 HP system covers, the refrigerant AC's (grey) and the water system's (blue). */
const PLANS = [
  { key: "turbo.vrf", pic: "pic24-798b4fdce8", colour: "text-[#979797]" },
  { key: "turbo.hydronic", pic: "pic25-a4b1f5cdff", colour: "text-[#8ba8ff]" },
] as const;
/** sec15: the quiet-running parts, words at each tile's top left (the motor's under its photo); pic30 is the layers'. */
const QUIET = [
  {
    title: "quiet.motor",
    desc: "quiet.motorDesc",
    pic: "pic26",
    box: "top-[2.5rem] left-[2.38rem] h-[3.04rem] w-[4.62rem]",
    at: "top-[2.27rem] left-[0.3rem]",
  },
  {
    title: "quiet.pipes",
    desc: "quiet.pipesDesc",
    pic: "pic28",
    box: "top-[5.64rem] left-[2.38rem] h-[3.04rem] w-[2.14rem]",
    at: "top-[0.21rem] left-[0.3rem]",
  },
  {
    title: "quiet.grille",
    desc: "quiet.grilleDesc",
    pic: "pic29",
    box: "top-[5.64rem] left-[4.62rem] h-[3.04rem] w-[2.38rem]",
    at: "top-[0.21rem] left-[0.23rem]",
  },
  {
    title: "quiet.fan",
    desc: "quiet.fanDesc",
    pic: "pic31",
    box: "top-[2.5rem] left-[11.66rem] h-[3.7rem] w-[3.06rem]",
    at: "top-[0.29rem] left-[0.22rem]",
  },
  {
    title: "quiet.damping",
    desc: "quiet.dampingDesc",
    pic: "pic32",
    box: "top-[2.5rem] left-[14.82rem] h-[3.7rem] w-[2rem]",
    at: "top-[0.29rem] left-[0.23rem]",
  },
  {
    title: "quiet.foam",
    desc: "quiet.foamDesc",
    pic: "pic33",
    box: "top-[6.3rem] left-[11.66rem] h-[2.38rem] w-[2.53rem]",
    at: "top-[0.21rem] left-[0.24rem]",
  },
  {
    title: "quiet.compressor",
    desc: "quiet.compressorDesc",
    pic: "pic34",
    box: "top-[6.3rem] left-[14.29rem] h-[2.38rem] w-[2.53rem]",
    at: "top-[0.21rem] left-[0.27rem]",
  },
] as const;
/** sec6: the climates in the app, over the three round previews (their tops; the temperatures are in the picture). */
const CLIMATES = [
  { key: "smart.spring", at: "left-[2.335rem] text-[#dddedd]" },
  { key: "smart.cool", at: "left-[3.265rem] text-[#cdd6df]" },
  { key: "smart.sea", at: "left-[4.195rem] text-[#e2dfe6]" },
] as const;
/** sec6: the energy screen's two savings, beside its chart. */
const SAVED = [
  { label: "smart.powerSaved", value: "smart.powerValue" },
  { label: "smart.moneySaved", value: "smart.moneyValue" },
] as const;
/** sec6: the four scene cards' names, at their tops. */
const SCENES = [
  { key: "smart.sceneSteady", at: "left-[1.18rem]" },
  { key: "smart.sceneSaving", at: "left-[2.08rem]" },
  { key: "smart.sceneDamp", at: "left-[2.97rem]" },
  { key: "smart.sceneClean", at: "left-[3.86rem]" },
] as const;
/** sec18: the warranty's notes. */
const WARRANTY_NOTES = ["note.standard", "note.tenYear"] as const;
/** sec19: the W1's specifications, three to a row as on orvibo.com's card. */
const W1_SPECS = [
  "supply",
  "grade",
  "iplv",
  "cooling",
  "heating",
  "water",
  "net",
  "operating",
  "maxTemp",
  "noise",
  "resistance",
  "size",
  "refrigerant",
  "heatingPipe",
  "waterPipe",
] as const;
/** sec19: the MixPad's, some across two or three columns as on orvibo.com's card. */
const PAD_SPECS = [
  { key: "os", span: "" },
  { key: "screen", span: "" },
  { key: "mic", span: "" },
  { key: "network", span: "" },
  { key: "load", span: "col-span-2" },
  { key: "input", span: "col-span-2" },
  { key: "loadType", span: "" },
  { key: "sensors", span: "" },
  { key: "speaker", span: "" },
  { key: "ir", span: "" },
  { key: "size", span: "col-span-3" },
] as const;
/** sec19: a specification card, its heading and its list. */
const CARD =
  "absolute top-0 h-[8.35rem] w-[7.15rem] rounded-[0.2rem] bg-[#1c1c1c]";
const CARD_TITLE =
  "absolute top-[0.535rem] left-[0.63rem] whitespace-nowrap text-[0.36rem] leading-[0.5rem] font-semibold text-white";
const CARD_ROW =
  "absolute top-[1.51rem] flex -translate-y-1/2 items-baseline gap-x-[0.18rem] whitespace-nowrap";
const CARD_LABEL = "text-[0.16rem] text-[#979797]";
const CARD_VALUE = "text-[0.24rem] font-medium text-white";
const CARD_RULE =
  "absolute top-[1.81rem] left-[0.62rem] h-px w-[5.92rem] bg-[#707070]";
const CARD_LIST =
  "absolute top-[1.98rem] left-[0.63rem] grid w-[5.92rem] auto-rows-[0.98rem]";
/** Labels sit on the line above their value, so a label in two lines grows upwards. */
const SPEC_TERM =
  "flex h-[0.44rem] flex-col justify-end text-[0.16rem] leading-[0.22rem] text-[#979797]";
const SPEC_VALUE =
  "mt-[0.11rem] text-[0.165rem] leading-[0.24rem] font-medium text-white";
/** sec_add2: the six AirPro indoor units, in orvibo.com's column order. */
const AIRPRO = ["34", "51", "68", "85", "102", "136"] as const;
const AIR_HEAD =
  "border border-[#707070] px-[0.06rem] text-[0.18rem] leading-[0.22rem] font-normal text-[#bebebe]";
const AIR_MODEL =
  "border border-[#707070] text-[0.15rem] leading-[0.2rem] text-[#bebebe]";
const AIR_VALUE =
  "border border-[#707070] text-[0.16rem] leading-[0.2rem] text-white";

/** The ORVIBO Integrated HVAC W1 page: orvibo.com's headings, and the words its pictures carry, as HTML. */
export function MixstationOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, bg, pseudoBg, lines } = productPageHelpers(locale, text);
  /** A heading in two tones: its [bracketed] words in `accent`; a "*" is a small raised footnote mark. */
  const rich = (textKey: string, accent = ""): ReactNode => {
    const seen = new Map<string, number>();
    return ts(textKey)
      .split(/(\[[^\]]*\]|\*|\n)/)
      .filter(Boolean)
      .map((part) => {
        const count = (seen.get(part) ?? 0) + 1;
        seen.set(part, count);
        const key = `${part}-${count}`;
        if (part === "\n") return <br key={key} />;
        if (part === "*") {
          return (
            <sup key={key} className="text-[0.5em]">
              *
            </sup>
          );
        }
        if (part.startsWith("[")) {
          return (
            <span key={key} className={accent}>
              {part.slice(1, -1)}
            </span>
          );
        }
        return <Fragment key={key}>{part}</Fragment>;
      });
  };
  /** A figure with its unit (% or ¥, with the space before it) set smaller, as orvibo.com draws it. */
  const unit = (textKey: string, unitClass: string): ReactNode =>
    ts(textKey)
      .split(/(\u00a0?[%¥])/)
      .filter(Boolean)
      .map((part, index) =>
        /[%¥]/.test(part) ? (
          <span
            key={part}
            className={cn(
              index === 0 ? "mr-[0.03rem]" : "ml-[0.03rem]",
              unitClass,
            )}
          >
            {part}
          </span>
        ) : (
          <Fragment key={part}>{part}</Fragment>
        ),
      );
  /** The line over each "more ..." heading, then the heading in its colours. */
  const heading = (titleKey: string, kicker: string, title: string) => (
    <>
      <p className={cn("text-[0.36rem] leading-[0.58rem] font-medium", kicker)}>
        {t("compare")}
      </p>
      <h2
        className={cn("text-[0.56rem] leading-[0.9rem] font-extrabold", title)}
      >
        {t(titleKey)}
      </h2>
    </>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview" className="relative bg-black">
        {/* sec1: the unit on a rock; orvibo.com draws the badge, the title and the tags as one picture */}
        <section
          className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec1-7a1373cc0f.webp`)}
        >
          <div className={FRAME}>
            <div className="absolute top-[2.35rem] left-[6.28rem] flex w-[9.4rem] -translate-x-1/2 flex-col items-center text-center">
              <p className="flex h-[0.71rem]">
                <span
                  className="w-[0.82rem] bg-cover bg-no-repeat"
                  style={bg(`${IMG}/emblem.webp`)}
                />
                <span className="flex items-center rounded-r-[0.05rem] bg-[#014099] px-[0.12rem] text-left text-[0.14rem] leading-[0.19rem] font-medium text-white">
                  {t("hero.badge")}
                </span>
              </p>
              <p className="mt-[0.43rem] text-[0.36rem] leading-[0.5rem] text-[#c3c3c3]">
                {t("hero.brand")}
              </p>
              <h1 className="mt-[0.26rem] text-[0.56rem] leading-[0.72rem] font-bold text-white">
                {t("hero.title")}
              </h1>
              <p className="mt-[0.1rem] text-[0.38rem] leading-[0.56rem] font-semibold text-white">
                {t("hero.subtitle")}
              </p>
              <ul className="mt-[0.3rem] flex flex-wrap justify-center gap-x-[0.07rem] gap-y-[0.06rem]">
                {TAGS.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center gap-x-[0.05rem] whitespace-nowrap text-[0.19rem] leading-[0.32rem] text-[#f7ecd2]"
                  >
                    <span
                      className="h-[0.32rem] w-[0.13rem] bg-contain bg-no-repeat"
                      style={bg(`${IMG}/bracket-left.webp`)}
                    />
                    {t(tag)}
                    <span
                      className="h-[0.32rem] w-[0.13rem] bg-contain bg-no-repeat"
                      style={bg(`${IMG}/bracket-right.webp`)}
                    />
                  </li>
                ))}
              </ul>
              <OrviboWatchTrigger
                videoSrc="/orvibo/videos/mixStation.mp4"
                className="mt-[0.45rem]"
                showPlayIcon={false}
              >
                <span
                  className="relative inline-block cursor-pointer pr-[0.36rem] text-[0.24rem] leading-[0.34rem] font-medium text-white after:absolute after:top-1/2 after:right-0 after:h-[0.24rem] after:w-[0.24rem] after:-translate-y-1/2 after:bg-[image:var(--after-bg)] after:bg-cover after:bg-center after:bg-no-repeat after:content-['']"
                  style={pseudoBg("after", PLAY)}
                >
                  {t("hero.video")}
                </span>
              </OrviboWatchTrigger>
            </div>
          </div>
        </section>
        {/* sec2: one unit for many uses */}
        <section
          className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec2-3d7b16e746.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[1.45rem] text-center text-white">
              <h2 className="text-[0.56rem] leading-[0.8rem] font-extrabold">
                {t("value.title")}
              </h2>
              <p className="mt-[0.15rem] text-[0.26rem] leading-[0.42rem]">
                {t("value.text")}
              </p>
            </ProductReveal>
          </div>
        </section>
        {/* sec_add3: the CCTV banner, as on S350L's page */}
        <CctvBanner locale={locale} text={text} />
        {/* sec4: cheaper to run, nine tiles (the background's HeatCycle words are a translated copy) */}
        <section
          className={cn("relative h-[21.61rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec3-8b32066edb.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[1.22rem] text-center">
              {heading(
                "savings.title",
                "text-[#57d19f]",
                "bg-gradient-to-b from-[#3ef28f] to-[#3ef2e0] bg-clip-text text-transparent",
              )}
            </ProductReveal>
            <div className="absolute top-[12.33rem] left-[2.38rem] h-[6.03rem] w-[14.44rem]">
              {/* cyclic energy storage: the picture keeps 33% and the 4 */}
              <ProductReveal
                className={cn(TILE, "top-0 left-0 h-[4.53rem] w-[2.81rem]")}
                style={bg(`${IMG}/pic1.webp`)}
              >
                <h3 className="absolute inset-x-0 top-[0.69rem] -translate-y-1/2 text-center text-[0.19rem] leading-[0.25rem] font-semibold text-white">
                  {t("savings.cycleTitle")}
                </h3>
                <p className="absolute inset-x-0 top-[0.9rem] text-center text-[0.125rem] leading-[0.2rem] font-semibold text-white">
                  {rich("savings.cycleDesc")}
                </p>
                <p className="absolute inset-x-0 top-[2.6rem] text-center text-[0.13rem] leading-[0.17rem] font-medium text-[#979797]">
                  {t("savings.bills")}
                </p>
                <p className="absolute top-[3.7rem] left-[1.74rem] -translate-y-1/2 text-[0.34rem] leading-[0.4rem] font-semibold text-[#df7f17]">
                  {t("savings.times")}
                </p>
                <p className="absolute inset-x-0 top-[4rem] text-center text-[0.12rem] leading-[0.16rem] font-medium text-[#979797]">
                  {t("savings.ratio")}
                </p>
              </ProductReveal>
              {/* a new standard: up to 6,000 a year */}
              <ProductReveal
                className={cn(
                  TILE,
                  "top-0 left-[2.91rem] h-[1.83rem] w-[5.19rem]",
                )}
                style={bg(`${IMG}/pic2.webp`)}
              >
                <h3 className="absolute top-1/2 left-[0.43rem] -translate-y-1/2 whitespace-nowrap text-[0.187rem] leading-[0.3rem] font-semibold text-white">
                  {rich("savings.standardTitle")}
                </h3>
                <p className="absolute top-[0.93rem] left-[3.8rem] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center whitespace-nowrap text-[#df7f17]">
                  <span className="text-[0.2rem] leading-[0.26rem] font-medium">
                    {t("savings.standardSave")}
                  </span>
                  <span className="text-[0.56rem] leading-[0.62rem] font-bold">
                    {unit("savings.standardAmount", "text-[0.34rem]")}
                  </span>
                </p>
              </ProductReveal>
              {/* the combined efficiency of 5.6, beside the picture's small chart */}
              <ProductReveal
                className={cn(
                  TILE,
                  "top-0 left-[8.21rem] h-[1.83rem] w-[6.23rem]",
                )}
                style={bg(`${IMG}/pic3.webp`)}
              >
                <div className="absolute top-1/2 left-[0.4rem] -translate-y-1/2 whitespace-nowrap">
                  <h3 className="text-[0.19rem] leading-[0.25rem] font-semibold text-white">
                    {t("savings.iplvTitle")}
                  </h3>
                  <p className="mt-[0.08rem] text-[0.12rem] leading-[0.17rem] text-[#979797]">
                    {t("savings.iplvDesc")}
                  </p>
                </div>
                <p className="absolute top-[0.925rem] left-[2.6rem] -translate-y-1/2 whitespace-nowrap text-[0.7rem] leading-[0.8rem] font-bold text-[#25ff08] [&_sup]:font-normal [&_sup]:text-[0.32em]">
                  {rich("savings.iplvValue")}
                </p>
                <p
                  className={cn(
                    "absolute top-[0.68rem] left-[4.15rem] whitespace-nowrap text-[0.09rem] leading-[0.12rem] font-medium text-[#479e21]",
                    CENTRE,
                  )}
                >
                  {t("savings.iplvLow")}
                </p>
                <p
                  className={cn(
                    "absolute top-[1.155rem] left-[4.15rem] whitespace-nowrap text-[0.09rem] leading-[0.12rem] font-medium text-[#4b4b4b]",
                    CENTRE,
                  )}
                >
                  {t("savings.iplvHigh")}
                </p>
              </ProductReveal>
              {/* air-source technology, over the cloud */}
              <ProductReveal
                className={cn(
                  TILE,
                  "top-[1.93rem] left-[2.91rem] h-[2.6rem] w-[2.74rem]",
                )}
                style={bg(`${IMG}/pic4.webp`)}
              >
                <div className="absolute inset-x-0 top-[0.85rem] text-center">
                  <h3 className="text-[0.19rem] leading-[0.25rem] font-semibold text-white">
                    {t("savings.airTitle")}
                  </h3>
                  <p className="mt-[0.08rem] text-[0.117rem] leading-[0.2rem] font-medium text-white [text-shadow:0_0_0.06rem_rgb(0_0_0/0.6)]">
                    {rich("savings.airDesc", "text-[#63b658]")}
                  </p>
                </div>
              </ProductReveal>
              {/* instant hot water: the picture keeps the 45 °C drop */}
              <ProductReveal
                className={cn(
                  TILE,
                  "top-[1.93rem] left-[5.75rem] h-[4.07rem] w-[2.36rem]",
                )}
                style={bg(`${IMG}/pic5.webp`)}
              >
                <h3 className="absolute inset-x-0 top-[0.767rem] text-center text-[0.174rem] leading-[0.23rem] font-semibold text-white">
                  {t("savings.instantTitle")}
                </h3>
                <p className="absolute inset-x-0 top-[1.3rem] text-center text-[0.117rem] leading-[0.17rem] font-medium text-[#979797]">
                  {t("savings.instantDesc")}
                </p>
              </ProductReveal>
              {/* every season: summer under the shower, winter under the floor */}
              <ProductReveal
                className={cn(
                  TILE,
                  "top-[1.93rem] left-[8.21rem] h-[4.09rem] w-[2.54rem]",
                )}
                style={bg(`${IMG}/pic6.webp`)}
              >
                <h3 className="absolute inset-x-0 top-[0.344rem] text-center text-[0.172rem] leading-[0.297rem] font-semibold text-white">
                  {t("savings.seasonsTitle")}
                </h3>
                <p className="absolute inset-x-0 top-[2.16rem] text-center text-[0.12rem] leading-[0.16rem] font-medium text-[#979797]">
                  {t("savings.summer")}
                </p>
                <p className="absolute inset-x-0 top-[3.63rem] text-center text-[0.104rem] leading-[0.15rem] font-medium text-[#797979]">
                  {t("savings.winter")}
                </p>
              </ProductReveal>
              {/* the patents, over the circuit boards */}
              <ProductReveal
                className={cn(
                  TILE,
                  "top-[4.63rem] left-0 h-[1.39rem] w-[5.65rem]",
                )}
                style={bg(`${IMG}/pic7.webp`)}
              >
                <h3 className="absolute inset-x-0 top-[0.53rem] -translate-y-1/2 text-center text-[0.26rem] leading-[0.34rem] font-medium text-white">
                  {t("savings.patentsTitle")}
                </h3>
                <p className="absolute inset-x-0 top-[0.86rem] -translate-y-1/2 text-center text-[0.122rem] leading-[0.16rem] font-medium text-[#909090]">
                  {t("savings.patentsDesc")}
                </p>
              </ProductReveal>
              {/* hot water 8 times as efficient: the picture keeps the 8 */}
              <ProductReveal
                className={cn(
                  TILE,
                  "top-[1.93rem] left-[10.85rem] h-[1.94rem] w-[3.59rem]",
                )}
                style={bg(`${IMG}/pic8.webp`)}
              >
                <h3 className="absolute inset-x-0 top-[0.47rem] -translate-y-1/2 text-center text-[0.174rem] leading-[0.23rem] font-semibold text-white">
                  {rich("savings.waterTitle")}
                </h3>
                <p className="absolute top-[1.41rem] left-[1.99rem] -translate-y-1/2 text-[0.3rem] leading-[0.36rem] font-semibold text-white">
                  {t("savings.times")}
                </p>
              </ProductReveal>
              {/* floor heating saves up to 50%: the picture keeps the figure */}
              <ProductReveal
                className={cn(
                  TILE,
                  "top-[3.98rem] left-[10.85rem] h-[2.05rem] w-[3.59rem]",
                )}
                style={bg(`${IMG}/pic9.webp`)}
              >
                <h3 className="absolute inset-x-0 bottom-[1.437rem] text-center text-[0.174rem] leading-[0.226rem] font-semibold text-white">
                  {t("savings.floorTitle")}
                </h3>
                <p className="absolute top-[1.32rem] left-[2.26rem] -translate-y-1/2 whitespace-nowrap text-[0.17rem] leading-[0.22rem] text-[#898687]">
                  {t("savings.floorWinter")}
                </p>
                <p className="absolute inset-x-0 top-[1.635rem] -translate-y-1/2 text-center text-[0.113rem] leading-[0.15rem] font-medium text-[#909090]">
                  {t("savings.floorVs")}
                </p>
              </ProductReveal>
            </div>
          </div>
        </section>
        {/* sec_add1: grade 1 twice, over the two China Energy Labels (www.orvibo.com 404s this picture) */}
        <section
          className={cn(
            "relative -mt-[2.8rem] h-[9.76rem] overflow-hidden",
            PHOTO,
          )}
          style={bg(`${IMG}/labels.webp`)}
        >
          <div className={FRAME}>
            <p className="absolute top-[0.79rem] left-[10.73rem] flex items-baseline gap-x-[0.31rem] whitespace-nowrap text-[#75dcff]">
              <span className="text-[0.26rem]">{t("label.iplv")}</span>
              <span className="text-[0.72rem] leading-[0.86rem] font-bold">
                {t("label.cooling")}
              </span>
            </p>
            <p className="absolute top-[0.79rem] left-[14.19rem] flex items-baseline gap-x-[0.14rem] whitespace-nowrap text-[#75dcff]">
              <span className="text-[0.26rem]">{t("label.iplvHeating")}</span>
              <span className="text-[0.72rem] leading-[0.86rem] font-bold">
                {t("label.heating")}
              </span>
            </p>
            <div className="absolute top-[2.165rem] left-[3.125rem] whitespace-nowrap text-white">
              <h2 className="text-[0.405rem] leading-[0.665rem] font-semibold">
                {t("label.title")}
              </h2>
              <p className="mt-[0.236rem] text-[0.235rem] leading-[0.477rem] font-medium">
                {t("label.model")}
              </p>
              <p className="text-[0.235rem] leading-[0.477rem] font-medium">
                {t("label.desc")}
              </p>
            </div>
            <p
              className={cn(
                "absolute top-[6.445rem] left-[11.92rem] whitespace-nowrap text-[0.23rem] leading-[0.3rem] text-[#979797]",
                CENTRE,
              )}
            >
              {t("label.coolingCaption")}
            </p>
            <p
              className={cn(
                "absolute top-[6.445rem] left-[15.505rem] whitespace-nowrap text-[0.23rem] leading-[0.3rem] text-[#979797]",
                CENTRE,
              )}
            >
              {t("label.heatingCaption")}
            </p>
            <ul className="absolute top-[7.03rem] left-[3.05rem] w-[14.2rem] text-[0.15rem] leading-[0.25rem] text-[#515151]">
              {SAVING_NOTES.map((note) => (
                <li key={note} className="mt-[0.03rem]">
                  {t(note)}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* sec5: more comfortable */}
        <section
          className={cn("relative h-[32.4rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec4-9b00bfc477.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[1.5rem] text-center">
              {heading(
                "comfort.title",
                "text-[#58bba3]",
                "bg-gradient-to-t from-[#76e4d5] to-[#4cd282] bg-clip-text text-transparent",
              )}
            </ProductReveal>
            <h3 className="absolute top-[12.06rem] left-[3.05rem] text-[0.48rem] leading-[0.77rem] font-bold text-[#7dcdb1]">
              {t("comfort.breeze")}
            </h3>
            <div className="absolute top-[14.09rem] left-[3.13rem] h-[7.07rem] w-[13.1rem]">
              {BREEZE.map((photo) => (
                <ProductReveal
                  key={photo.key}
                  className={cn(TILE, photo.box)}
                  style={bg(`${CN}/${photo.pic}.webp`)}
                >
                  <p className="absolute top-[0.6rem] left-[0.6rem] whitespace-nowrap text-[0.24rem] leading-[0.36rem] font-medium text-white [text-shadow:0_0_0.08rem_rgb(0_0_0/0.35)]">
                    {t(photo.key)}
                  </p>
                </ProductReveal>
              ))}
            </div>
            <div className="absolute top-[22.76rem] left-[3.05rem] w-[13.09rem]">
              <h3 className="text-[0.48rem] leading-[0.77rem] font-bold text-[#434b49]">
                {t("comfort.heatTitle")}
              </h3>
              <p className="mt-[0.28rem] text-[0.26rem] leading-[0.48rem] text-[#4d5652]">
                {t("comfort.heatText")}
              </p>
            </div>
            <ProductReveal
              className={cn(
                TILE,
                "top-[26.1rem] left-[3.13rem] h-[5.67rem] w-[13.09rem]",
              )}
              style={bg(`${CN}/pic13-6ac85cf610.webp`)}
            />
          </div>
        </section>
        {/* sec3: 45% smaller */}
        <section
          className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec14-f817e9c328.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[1.25rem] text-center text-white">
              <h2 className="text-[0.48rem] leading-[0.77rem]">
                {rich("size.title")}
              </h2>
              <p className="text-[0.56rem] leading-[0.9rem] font-extrabold">
                {t("size.text")}
              </p>
            </ProductReveal>
            <p className="absolute top-[8.93rem] left-[2.06rem] w-[4.9rem] text-[0.14rem] leading-[0.2rem] font-medium text-[#e9e9e9]">
              {t("size.note")}
            </p>
          </div>
        </section>
        {/* sec11: more powerful (the picture's bars are a translated copy) */}
        <section
          className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec9-84c88c36ea.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[0.78rem] text-center">
              {heading(
                "power.title",
                "text-[#d5d5d5]",
                "bg-gradient-to-t from-[#ff7934] to-[#58a1ff] bg-clip-text text-transparent",
              )}
            </ProductReveal>
            <ProductReveal className="absolute top-[3.17rem] left-[3.06rem] whitespace-nowrap text-white">
              <h3 className="text-[0.48rem] leading-[0.62rem] font-extrabold">
                {t("power.heading")}
              </h3>
              <p className="mt-[0.32rem] text-[0.26rem] leading-[0.416rem] font-medium">
                {t("power.text")}
              </p>
            </ProductReveal>
          </div>
        </section>
        {/* sec12: enhanced vapor injection, three anti-freeze tiles */}
        <section
          className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec10-e9e4e6e191.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute top-[2.1rem] left-[3.06rem] whitespace-nowrap">
              <h3 className="text-[0.48rem] leading-[0.62rem] font-bold text-white">
                {rich("frost.title", "text-[#8ba8ff]")}
              </h3>
            </ProductReveal>
            <div className="absolute top-[4.98rem] left-[3.06rem] flex gap-x-[0.26rem]">
              {FROST.map((tile) => (
                <ProductReveal
                  key={tile.pic}
                  className={cn("relative h-[2.75rem] w-[2.08rem]", PHOTO)}
                  style={bg(`${IMG}/${tile.pic}.webp`)}
                >
                  <h4 className="absolute inset-x-0 top-[1.46rem] whitespace-nowrap text-center text-[0.18rem] leading-[0.254rem] font-semibold text-white">
                    {t(tile.title)}
                  </h4>
                  <p className="absolute inset-x-0 top-[1.95rem] whitespace-nowrap text-center text-[0.12rem] leading-[0.3rem] font-semibold text-[#c6c6c6]">
                    {t(tile.desc)}
                  </p>
                </ProductReveal>
              ))}
            </div>
            <p className="absolute top-[8.25rem] left-[3.06rem] w-[4.9rem] text-[0.14rem] leading-[0.2rem] font-medium text-[#c5c5c5]">
              {t("frost.note")}
            </p>
          </div>
        </section>
        {/* sec13: HeatTurbo, the floor area each 7 HP system covers */}
        <section className="relative h-[10.8rem] overflow-hidden">
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[1.5rem] text-center">
              <h3 className="text-[0.48rem] leading-[0.62rem] font-bold text-white">
                {rich("turbo.title", "text-[#8ba8ff]")}
              </h3>
              <p className="mt-[0.32rem] text-[0.26rem] leading-[0.42rem]">
                {t("turbo.text")}
              </p>
            </ProductReveal>
            <div className="absolute top-[4.44rem] left-[2.38rem] flex gap-x-[0.32rem]">
              {PLANS.map((plan) => (
                <figure key={plan.key}>
                  <ProductReveal
                    className={cn("h-[4.56rem] w-[7.06rem]", PHOTO)}
                    style={bg(`${CN}/${plan.pic}.webp`)}
                  />
                  <figcaption
                    className={cn(
                      "mt-[0.2rem] text-[0.28rem] leading-[0.4rem] font-bold",
                      plan.colour,
                    )}
                  >
                    {t(plan.key)}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="absolute top-[10.14rem] left-[2.38rem] w-[14.44rem] text-[0.16rem] leading-[0.26rem] font-medium">
              {t("turbo.note")}
            </p>
          </div>
        </section>
        {/* sec14: the tank (the picture's 78L and its two notes are a translated copy) */}
        <section
          className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec11-fe0c16d3ec.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute top-[2.08rem] left-[3.06rem] whitespace-nowrap text-white">
              <p className="text-[0.36rem] leading-[0.62rem]">
                {t("tank.title")}
              </p>
              <h3 className="text-[0.42rem] leading-[0.62rem] font-bold">
                {t("tank.heading")}
              </h3>
              <p className="mt-[0.3rem] text-[0.26rem] leading-[0.48rem]">
                {t("tank.text")}
              </p>
            </ProductReveal>
          </div>
        </section>
        {/* sec15: quiet running, eight tiles */}
        <section className="relative h-[10.98rem] overflow-hidden">
          <div className={FRAME}>
            {QUIET.map((part) => (
              <ProductReveal
                key={part.pic}
                className={cn(TILE, part.box)}
                style={bg(`${IMG}/${part.pic}.webp`)}
              >
                <div className={cn("absolute whitespace-nowrap", part.at)}>
                  <h3 className="text-[0.185rem] leading-[0.26rem] font-semibold text-white">
                    {t(part.title)}
                  </h3>
                  <p className="mt-[0.065rem] text-[0.13rem] leading-[0.245rem] font-medium text-[#b8b8b8]">
                    {t(part.desc)}
                  </p>
                </div>
              </ProductReveal>
            ))}
            {/* the picture keeps the big 7 */}
            <ProductReveal
              className={cn(
                TILE,
                "top-[2.5rem] left-[7.1rem] h-[6.18rem] w-[4.46rem]",
              )}
              style={bg(`${IMG}/pic30.webp`)}
            >
              <h3 className="absolute top-[0.325rem] left-[1.68rem] whitespace-nowrap text-[0.22rem] leading-[0.35rem] font-semibold text-white">
                <span className="sr-only">{t("quiet.layersCount")} </span>
                {t("quiet.layers")}
              </h3>
            </ProductReveal>
          </div>
        </section>
        {/* sec6: smarter, seven tiles */}
        <section
          className={cn("relative h-[19.21rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec40-0d5e98b4ac.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[1.28rem] text-center">
              {heading("smart.title", "text-white", "text-white")}
            </ProductReveal>
            <ProductReveal className="absolute top-[4.24rem] left-[2.46rem] whitespace-nowrap text-white">
              <h3 className="text-[0.48rem] leading-[0.62rem] font-extrabold">
                {t("smart.heading")}
              </h3>
              <p className="mt-[0.32rem] text-[0.26rem] leading-[0.416rem] font-medium">
                {t("smart.text")}
              </p>
              <p className="mt-[0.95rem] text-[0.2rem] leading-[0.48rem] font-medium text-[#5b5b5b]">
                {t("smart.lights")}
              </p>
            </ProductReveal>
            {/* car-grade airflow control */}
            <ProductReveal
              className={cn(
                TILE,
                "top-[12.42rem] left-[2.43rem] h-[1.79rem] w-[5.09rem]",
              )}
              style={bg(`${IMG}/pic14.webp`)}
            >
              <h4 className="absolute top-[0.447rem] left-[0.44rem] whitespace-nowrap text-[0.17rem] leading-[0.32rem] font-semibold text-white">
                {t("smart.airTitle")}
              </h4>
              <p className="absolute top-[1.17rem] left-[0.44rem] whitespace-nowrap text-[0.131rem] leading-[0.17rem] font-medium text-[#979797]">
                {t("smart.airDesc")}
              </p>
            </ProductReveal>
            {/* Climate Pro: the world's climates */}
            <ProductReveal
              className={cn(
                TILE,
                "top-[14.33rem] left-[2.43rem] h-[1.79rem] w-[5.09rem]",
              )}
              style={bg(`${IMG}/pic15.webp`)}
            >
              <div className="absolute top-[0.36rem] left-[0.44rem] whitespace-nowrap text-white">
                <h4 className="text-[0.17rem] leading-[0.26rem] font-semibold">
                  {t("smart.climateName")}
                </h4>
                <p className="mt-[0.05rem] text-[0.14rem] leading-[0.22rem] font-semibold">
                  {t("smart.climate")}
                </p>
              </div>
              {CLIMATES.map((climate) => (
                <p
                  key={climate.key}
                  className={cn(
                    "absolute top-[0.6rem] whitespace-nowrap text-[0.075rem] leading-[0.1rem] font-medium",
                    CENTRE,
                    climate.at,
                  )}
                >
                  {t(climate.key)}
                </p>
              ))}
            </ProductReveal>
            {/* HomeAI Energy (the picture keeps its name and chart) */}
            <ProductReveal
              className={cn(
                TILE,
                "top-[12.42rem] left-[7.62rem] h-[3.7rem] w-[5.45rem]",
              )}
              style={bg(`${IMG}/pic16.webp`)}
            >
              <p
                className={cn(
                  "absolute top-[1.145rem] left-1/2 whitespace-nowrap text-[0.131rem] leading-[0.17rem] font-medium text-[#979797]",
                  CENTRE,
                )}
              >
                {t("smart.energy")}
              </p>
              <dl className="absolute top-[1.42rem] left-[0.5rem] flex flex-col gap-y-[0.2rem] whitespace-nowrap">
                {SAVED.map((saved) => (
                  <div key={saved.label}>
                    <dt className="text-[0.12rem] leading-[0.16rem] font-medium text-[#757575]">
                      {t(saved.label)}
                    </dt>
                    <dd className="text-[0.42rem] leading-[0.5rem] font-light text-[#d9d9d9]">
                      {unit(saved.value, "text-[0.13rem]")}
                    </dd>
                  </div>
                ))}
              </dl>
            </ProductReveal>
            {/* faults report themselves: the alert on the screen */}
            <ProductReveal
              className={cn(
                TILE,
                "top-[12.42rem] left-[13.17rem] h-[3.7rem] w-[3.7rem]",
              )}
              style={bg(`${IMG}/pic17.webp`)}
            >
              <h4 className="absolute inset-x-0 top-[0.445rem] text-center text-[0.174rem] leading-[0.3rem] font-semibold text-white">
                {t("smart.faultTitle")}
              </h4>
              <p
                className={cn(
                  "absolute top-[1.285rem] left-1/2 whitespace-nowrap text-[0.131rem] leading-[0.17rem] font-medium text-[#909090]",
                  CENTRE,
                )}
              >
                {t("smart.faultDesc")}
              </p>
              <p className="absolute top-[2.02rem] left-[0.78rem] whitespace-nowrap text-[0.125rem] leading-[0.2rem] font-medium text-[#f9f9fb]">
                {t("smart.faultAlert")}
              </p>
              <p
                className={cn(
                  "absolute top-[2.9rem] left-[1.345rem] whitespace-nowrap text-[0.15rem] leading-[0.2rem] text-[#f8f8f9]",
                  CENTRE,
                )}
              >
                {t("smart.faultOk")}
              </p>
              <p
                className={cn(
                  "absolute top-[2.9rem] left-[2.365rem] whitespace-nowrap text-[0.15rem] leading-[0.2rem] text-[#a2a2a2]",
                  CENTRE,
                )}
              >
                {t("smart.faultIgnore")}
              </p>
            </ProductReveal>
            {/* 7-day schedules (the picture keeps 7x24) */}
            <ProductReveal
              className={cn(
                TILE,
                "top-[16.22rem] left-[2.43rem] h-[2.95rem] w-[3.66rem]",
              )}
              style={bg(`${IMG}/pic20.webp`)}
            >
              <h4
                className={cn(
                  "absolute top-[0.485rem] left-1/2 whitespace-nowrap text-[0.165rem] leading-[0.22rem] font-semibold text-white",
                  CENTRE,
                )}
              >
                {t("smart.scheduleTitle")}
              </h4>
              <p className="absolute inset-x-0 top-[0.709rem] text-center text-[0.12rem] leading-[0.237rem] font-medium text-[#979797]">
                {t("smart.scheduleDesc")}
              </p>
            </ProductReveal>
            {/* the voice assistant, beside the headset */}
            <ProductReveal
              className={cn(
                TILE,
                "top-[16.22rem] left-[6.19rem] h-[2.95rem] w-[5.53rem]",
              )}
              style={bg(`${IMG}/pic19.webp`)}
            >
              <h4 className="absolute top-[0.947rem] left-[0.4rem] whitespace-nowrap text-[0.154rem] leading-[0.34rem] font-semibold text-white">
                {rich("smart.voice", "text-[#5476ff]")}
              </h4>
            </ProductReveal>
            {/* AI scenes: the four cards' names */}
            <ProductReveal
              className={cn(
                TILE,
                "top-[16.22rem] left-[11.82rem] h-[2.95rem] w-[5.05rem]",
              )}
              style={bg(`${IMG}/pic18.webp`)}
            >
              <h4 className="absolute inset-x-0 top-[0.355rem] text-center text-[0.174rem] leading-[0.3rem] font-semibold text-white">
                {rich("smart.scenesTitle", "text-[#4a93de]")}
              </h4>
              {SCENES.map((scene) => (
                <p
                  key={scene.key}
                  className={cn(
                    "absolute top-[1.38rem] whitespace-nowrap text-[0.096rem] leading-[0.13rem] font-medium text-[#d0d0d0]",
                    CENTRE,
                    scene.at,
                  )}
                >
                  {t(scene.key)}
                </p>
              ))}
            </ProductReveal>
          </div>
        </section>
        {/* sec7: more beautiful */}
        <section
          className={cn("relative h-[11.92rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec5-4518e87583.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[1.5rem] text-center">
              {heading(
                "beauty.title",
                "text-[#d5d5d5]",
                "bg-[linear-gradient(322deg,#ffffff_0%,#5d5d5d_100%)] bg-clip-text text-transparent",
              )}
              <p className="mt-[0.22rem] text-[0.3rem] leading-[0.48rem] font-medium text-white">
                {t("beauty.text")}
              </p>
            </ProductReveal>
          </div>
        </section>
        {/* sec8: the design */}
        <section
          className={cn("relative h-[9.7rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec6-3e7aebf1a6.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute top-[0.15rem] left-[3.06rem] whitespace-nowrap text-white">
              <h3 className="text-[0.48rem] leading-[0.62rem] font-extrabold">
                {t("design.title")}
              </h3>
              <p className="mt-[0.32rem] text-[0.26rem] leading-[0.42rem] font-medium">
                {t("design.text")}
              </p>
            </ProductReveal>
          </div>
        </section>
        {/* sec9: the AirPro indoor unit */}
        <section
          className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec7-d416a0ab3a.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute top-[1.63rem] left-[3.06rem] whitespace-nowrap">
              <h3 className="text-[0.48rem] leading-[0.62rem] font-semibold text-white">
                {t("airpro.title")}
              </h3>
            </ProductReveal>
          </div>
        </section>
        {/* sec10: quiet and slim */}
        <section
          className={cn("relative h-[14.29rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec8-41a029f7dc.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute top-0 right-[3.18rem] whitespace-nowrap text-right text-white">
              <h3 className="text-[0.48rem] leading-[0.62rem] font-semibold">
                {t("silent.title")}
              </h3>
              <p className="mt-[0.32rem] text-[0.26rem] leading-[0.416rem] font-medium">
                {t("silent.text")}
              </p>
            </ProductReveal>
          </div>
        </section>
        {/* sec16: greener */}
        <section
          className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec12-4257cad085.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[1.1rem] text-center">
              {heading(
                "eco.title",
                "text-[#4ab8bc]",
                "bg-[linear-gradient(320deg,#32d5a3_0%,#057cd6_100%)] bg-clip-text text-transparent",
              )}
            </ProductReveal>
            <ProductReveal className="absolute inset-x-0 top-[3.45rem] text-center text-black">
              <h3 className="text-[0.48rem] leading-[0.77rem] font-bold">
                {t("eco.heading")}
              </h3>
              <p className="mt-[0.42rem] text-[0.26rem] leading-[0.48rem]">
                {t("eco.text")}
              </p>
            </ProductReveal>
          </div>
        </section>
        {/* sec17: the manifesto */}
        <section
          className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec13-0a7711cf85.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[1.6rem] text-center text-white">
              <p className="text-[0.36rem] leading-[0.58rem] font-bold">
                {t("outlook.kicker")}
              </p>
              <h2 className="text-[0.48rem] leading-[0.62rem] font-bold">
                {rich("outlook.title", "text-[#ff2424]")}
              </h2>
            </ProductReveal>
          </div>
        </section>
        {/* sec18: a 10-year warranty (the badge is orvibo.com's picture) */}
        <section
          className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
          style={bg(`${CN}/sec15-97b2088155.webp`)}
        >
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[1.6rem] text-center text-white">
              <h2 className="text-[0.48rem] leading-[0.62rem] font-bold">
                {rich("warranty.title")}
              </h2>
              <div
                className={cn("mx-auto h-[4.98rem] w-[4.17rem]", PHOTO)}
                style={bg(`${CN}/pic39-d1101d8d83.webp`)}
              />
              <p className="text-[0.48rem] leading-[0.62rem] font-bold">
                {t("warranty.split")}
              </p>
            </ProductReveal>
            <ul className="absolute top-[8.42rem] left-[3.06rem] max-w-[10.5rem] text-[0.14rem] leading-[0.2rem] font-medium text-[#515151]">
              {WARRANTY_NOTES.map((note) => (
                <li key={note}>{t(note)}</li>
              ))}
            </ul>
          </div>
        </section>
        {/* sec19: the W1's and the MixPad's specifications, as orvibo.com's two cards */}
        <section className="relative h-[13.2rem] overflow-hidden">
          <div className={FRAME}>
            <ProductReveal className="absolute inset-x-0 top-[2.4rem] h-[8.35rem]">
              <div className={cn(CARD, "left-[2.31rem]")}>
                <h2 className={CARD_TITLE}>{t("specW1.title")}</h2>
                <p className={cn(CARD_ROW, "left-[0.63rem]")}>
                  <span className={CARD_LABEL}>{t("specW1.seriesLabel")}</span>
                  <span className={CARD_VALUE}>{t("specW1.series")}</span>
                </p>
                <p className={cn(CARD_ROW, "left-[4.84rem]")}>
                  <span className={CARD_LABEL}>{t("specW1.modelLabel")}</span>
                  <span className={CARD_VALUE}>{t("specW1.model")}</span>
                </p>
                <div className={CARD_RULE} />
                <dl
                  className={cn(CARD_LIST, "grid-cols-[2.1rem_2.1rem_1.72rem]")}
                >
                  {W1_SPECS.map((spec) => (
                    <div key={spec} className="pr-[0.12rem]">
                      <dt className={SPEC_TERM}>{t(`specW1.${spec}`)}</dt>
                      <dd className={SPEC_VALUE}>{t(`specW1.${spec}Value`)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className={cn(CARD, "left-[9.6rem]")}>
                <h2 className={CARD_TITLE}>{t("specPad.title")}</h2>
                <p className={cn(CARD_ROW, "left-[0.63rem]")}>
                  <span className={CARD_LABEL}>{t("specPad.seriesLabel")}</span>
                  <span className={CARD_VALUE}>{t("specPad.series")}</span>
                </p>
                <div className={CARD_RULE} />
                <dl
                  className={cn(
                    CARD_LIST,
                    "grid-cols-[2.29rem_1.71rem_1.92rem]",
                  )}
                >
                  {PAD_SPECS.map((spec) => (
                    <div
                      key={spec.key}
                      className={cn("pr-[0.12rem]", spec.span)}
                    >
                      <dt className={SPEC_TERM}>{t(`specPad.${spec.key}`)}</dt>
                      <dd className={SPEC_VALUE}>
                        {t(`specPad.${spec.key}Value`)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ProductReveal>
          </div>
        </section>
        {/* sec_add2: the AirPro indoor units' specifications, as orvibo.com's table */}
        <section className="relative h-[10.8rem] overflow-hidden">
          <div className={FRAME}>
            <h2 className="absolute top-[1.68rem] left-[2.38rem] whitespace-nowrap text-[0.36rem] leading-[0.5rem] font-semibold text-white">
              {t("specAir.title")}
            </h2>
            <table className="absolute top-[2.52rem] left-[2.38rem] w-[14.43rem] table-fixed border-collapse text-center">
              <colgroup>
                <col className="w-[1.87rem]" />
                <col className="w-[1.87rem]" />
                <col className="w-[0.82rem]" />
                {AIRPRO.map((model) => (
                  <col key={model} className="w-[1.645rem]" />
                ))}
              </colgroup>
              <tbody>
                <tr className="h-[0.6rem]">
                  <th scope="row" rowSpan={2} className={AIR_HEAD}>
                    {t("specAir.model")}
                  </th>
                  <th scope="row" colSpan={2} className={AIR_HEAD}>
                    {t("specAir.right")}
                  </th>
                  {AIRPRO.map((model) => (
                    <td key={model} className={AIR_MODEL}>
                      {t(`specAir.right${model}`)}
                    </td>
                  ))}
                </tr>
                <tr className="h-[0.6rem]">
                  <th scope="row" colSpan={2} className={AIR_HEAD}>
                    {t("specAir.left")}
                  </th>
                  {AIRPRO.map((model) => (
                    <td key={model} className={AIR_MODEL}>
                      {t(`specAir.left${model}`)}
                    </td>
                  ))}
                </tr>
                <tr className="h-[0.6rem]">
                  <th scope="row" colSpan={3} className={AIR_HEAD}>
                    {t("specAir.supply")}
                  </th>
                  {AIRPRO.map((model) => (
                    <td key={model} className={AIR_VALUE}>
                      {t("specAir.supplyValue")}
                    </td>
                  ))}
                </tr>
                <tr className="h-[0.6rem]">
                  <th scope="row" className={AIR_HEAD}>
                    {t("specAir.cooling")}
                  </th>
                  <td className={AIR_HEAD}>{t("specAir.coolingAt")}</td>
                  <td className={AIR_HEAD}>{t("specAir.kw")}</td>
                  {AIRPRO.map((model) => (
                    <td key={model} className={AIR_VALUE}>
                      {t(`specAir.cooling${model}`)}
                    </td>
                  ))}
                </tr>
                <tr className="h-[0.6rem]">
                  <th scope="row" className={AIR_HEAD}>
                    {t("specAir.heating")}
                  </th>
                  <td className={AIR_HEAD}>{t("specAir.heatingAt")}</td>
                  <td className={AIR_HEAD}>{t("specAir.kw")}</td>
                  {AIRPRO.map((model) => (
                    <td key={model} className={AIR_VALUE}>
                      {t(`specAir.heating${model}`)}
                    </td>
                  ))}
                </tr>
                <tr className="h-[0.6rem]">
                  <th scope="row" colSpan={2} className={AIR_HEAD}>
                    {t("specAir.airflow")}
                  </th>
                  <td className={AIR_HEAD}>{t("specAir.flow")}</td>
                  {AIRPRO.map((model) => (
                    <td key={model} className={AIR_VALUE}>
                      {t(`specAir.airflow${model}`)}
                    </td>
                  ))}
                </tr>
                <tr className="h-[0.6rem]">
                  <th scope="row" colSpan={2} className={AIR_HEAD}>
                    {t("specAir.pressure")}
                  </th>
                  <td className={AIR_HEAD}>{t("specAir.pa")}</td>
                  {AIRPRO.map((model) => (
                    <td key={model} className={AIR_VALUE}>
                      {t("specAir.pressureValue")}
                    </td>
                  ))}
                </tr>
                <tr className="h-[0.6rem]">
                  <th scope="row" className={AIR_HEAD}>
                    {t("specAir.noise")}
                  </th>
                  <td className={AIR_HEAD}>{t("specAir.noiseAt")}</td>
                  <td className={AIR_HEAD}>{t("specAir.db")}</td>
                  {AIRPRO.map((model) => (
                    <td key={model} className={AIR_VALUE}>
                      {t(`specAir.noise${model}`)}
                    </td>
                  ))}
                </tr>
                <tr className="h-[0.6rem]">
                  <th scope="row" className={AIR_HEAD}>
                    {t("specAir.size")}
                  </th>
                  <td className={AIR_HEAD}>{t("specAir.sizeAxes")}</td>
                  <td className={AIR_HEAD}>{t("specAir.mm")}</td>
                  {AIRPRO.map((model) => (
                    <td key={model} className={AIR_VALUE}>
                      {t(`specAir.size${model}`)}
                    </td>
                  ))}
                </tr>
                <tr className="h-[0.6rem]">
                  <th scope="row" rowSpan={2} className={AIR_HEAD}>
                    {t("specAir.pipes")}
                  </th>
                  <td className={AIR_HEAD}>{t("specAir.water")}</td>
                  <td className={AIR_HEAD}>{t("specAir.inch")}</td>
                  {AIRPRO.map((model) => (
                    <td key={model} className={AIR_VALUE}>
                      {t("specAir.waterValue")}
                    </td>
                  ))}
                </tr>
                <tr className="h-[0.6rem]">
                  <td className={AIR_HEAD}>{t("specAir.drain")}</td>
                  <td className={AIR_HEAD}>{t("specAir.mm")}</td>
                  {AIRPRO.map((model) => (
                    <td key={model} className={AIR_VALUE}>
                      {t("specAir.drainValue")}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      {/* product_detail_tips */}
      <div className="p-[60px] bg-[#202020]">
        <p className="mx-auto max-w-[1200px] text-[14px] leading-[24px] font-medium text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
