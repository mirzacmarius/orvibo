import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import {
  CENTRE,
  CctvCardBanner,
  FRAME,
  PHOTO,
  ResearchSection,
} from "@/components/orvibo/products/hvac/HvacSections";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import { Fragment, type ReactNode } from "react";

/** orvibo.com's pictures without their words (hvac_clean.py); every word here is HTML laid over them. */
const IMG = "/orvibo/products/v180";

/** The sections' headings and the line under them, each on its own line across the picture. */
const TITLE =
  "absolute inset-x-0 -translate-y-1/2 text-center font-semibold text-white";
const DESC = "absolute inset-x-0 -translate-y-1/2 text-center";
/** The blue headings, purple at the left to cyan at the right, as orvibo.com draws them. */
const BLUE =
  "bg-gradient-to-r from-[#9190e0] via-[#77bbff] to-[#a3f0fc] bg-clip-text text-transparent";
/** The two-tone headings: purple words, then [cyan] ones. */
const PURPLE =
  "bg-gradient-to-r from-[#9190e0] to-[#74b4fc] bg-clip-text text-transparent";
const CYAN = "text-[#9be9f5]";
/** The labels on the 3D panels and pipes, tilted with the surface they sit on. */
const TILT =
  "absolute origin-top-left whitespace-nowrap leading-[1.2] text-white";

/** sec3: the four uses, words under each card's photo. */
const USES = [
  { title: "s3.ac", desc: "s3.acDesc", at: "left-[2.6rem] top-[7.45rem]" },
  {
    title: "s3.floor",
    desc: "s3.floorDesc",
    at: "left-[9.78rem] top-[7.45rem]",
  },
  {
    title: "s3.water",
    desc: "s3.waterDesc",
    at: "left-[2.6rem] top-[12.35rem]",
  },
  {
    title: "s3.fresh",
    desc: "s3.freshDesc",
    at: "left-[9.78rem] top-[12.35rem]",
  },
] as const;

/** sec4: where the hot water arrives, beside the lines the picture keeps. */
const OUTLETS = [
  { key: "s4.kitchen", at: "right-[12.35rem] top-[7.59rem] text-right" },
  { key: "s4.shower", at: "left-[11.68rem] top-[6.515rem]" },
  { key: "s4.tub", at: "right-[6.54rem] top-[7.895rem] text-right" },
] as const;

/** sec8: the four features under their icons. */
const FEATURES = [
  { key: "s8.control", centre: "left-[4.4rem]" },
  { key: "s8.zones", centre: "left-[7.905rem]" },
  { key: "s8.stats", centre: "left-[11.395rem]" },
  { key: "s8.procare", centre: "left-[14.86rem]" },
] as const;

/** sec11: the four parts, words at each card's top left; each description ends before the card's picture. */
const PARTS = [
  {
    title: "s11.compressor",
    desc: "s11.compressorDesc",
    at: "left-[3.18rem] top-[3.95rem]",
    width: "w-[2.3rem]",
  },
  {
    title: "s11.valve",
    desc: "s11.valveDesc",
    at: "left-[10.37rem] top-[3.83rem]",
    width: "w-[2.7rem]",
  },
  {
    title: "s11.tank",
    desc: "s11.tankDesc",
    at: "left-[3.19rem] top-[8.88rem]",
    width: "w-[2.7rem]",
  },
  {
    title: "s11.motor",
    desc: "s11.motorDesc",
    at: "left-[10.37rem] top-[8.9rem]",
    width: "w-[2.4rem]",
  },
] as const;

/** sec12: the labels in the 3D house. */
const HOUSE = [
  { key: "s12.light", at: "right-[11.4rem] top-[7.405rem]" },
  { key: "s12.water", at: "left-[10.2rem] top-[7.975rem]" },
  { key: "s12.ac", at: "right-[12rem] top-[9.22rem]" },
  { key: "s12.unit", at: "left-[11.96rem] top-[9.545rem]" },
  { key: "s12.floor", at: "left-[10.0rem] top-[10.43rem]" },
] as const;

/** sec13: the four figures, on the left of their cards. */
const FIGURES = [
  { key: "s13.users", at: "top-[1.655rem]" },
  { key: "s13.developers", at: "top-[5.185rem]" },
  { key: "s13.stores", at: "top-[8.595rem]" },
  { key: "s13.awards", at: "top-[12.06rem]" },
] as const;

/** sec14: the ten installation steps, under their numbers in the picture. */
const STEPS = [
  { key: "s14.step1", at: "left-[7.06rem] top-[14.1rem]" },
  { key: "s14.step2", at: "left-[9.075rem] top-[14.1rem]" },
  { key: "s14.step3", at: "left-[10.92rem] top-[14.1rem]" },
  { key: "s14.step4", at: "left-[12.9rem] top-[14.1rem]" },
  { key: "s14.step5", at: "left-[14.915rem] top-[14.1rem]" },
  { key: "s14.step6", at: "left-[7.075rem] top-[16rem]" },
  { key: "s14.step7", at: "left-[9.07rem] top-[16rem]" },
  { key: "s14.step8", at: "left-[10.91rem] top-[16rem]" },
  { key: "s14.step9", at: "left-[12.895rem] top-[16rem]" },
  { key: "s14.step10", at: "left-[14.895rem] top-[16rem]" },
] as const;

/** sec16: the specification table, four columns of five rows, as orvibo.com lays it out. */
const SPECS = [
  "supply",
  "grade",
  "coolingInput",
  "cooling",
  "refrigerant",
  "coolingCurrent",
  "charge",
  "heating",
  "inputPower",
  "inputCurrent",
  "heatingInput",
  "heatingCurrent",
  "overpressure",
  "maxPressure",
  "exchanger",
  "shock",
  "weight",
  "noise",
  "apf",
  "water",
] as const;
/** sec16: the notes under the card. */
const NOTES = [
  "note.summer",
  "note.winter",
  "note.zeroCold",
  "note.steadyHot",
] as const;

export function V180Overview({ locale, text, common }: ProductViewProps) {
  const { t, ts, bg, lines } = productPageHelpers(locale, text);
  /** A heading in two tones: its [bracketed] words in `accent`, the rest in `base`; a "*" is a small raised
   * footnote mark. */
  const rich = (textKey: string, accent: string, base?: string): ReactNode => {
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
        if (base) {
          return (
            <span key={key} className={base}>
              {part}
            </span>
          );
        }
        return <Fragment key={key}>{part}</Fragment>;
      });
  };

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview">
        {/* sec1: the V180 on a rock at dusk */}
        <section
          className={cn("relative h-[8.32rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec1.webp`)}
        >
          <p className="sr-only">{t("alt.s1")}</p>
          <div className={FRAME}>
            <div
              className={cn(
                "absolute top-[3.75rem] left-[6.2rem] w-[8.6rem]",
                CENTRE,
              )}
            >
              <p className="text-[0.3rem] leading-[0.4rem] font-medium text-[#f7ede4]">
                {t("s1.name")}
              </p>
              <h1 className="mt-[0.22rem] text-[0.7rem] leading-[0.86rem] font-semibold text-[#f6ece4]">
                {t("s1.title")}
              </h1>
              <p className="mt-[0.3rem] text-[0.3rem] leading-[0.42rem] text-[#f7ede4]">
                {t("s1.uses")}
              </p>
            </div>
          </div>
        </section>
        <ResearchSection locale={locale} text={text} />
        <CctvCardBanner locale={locale} text={text} />
        {/* sec3: one unit, four uses */}
        <section
          className={cn("relative h-[15.49rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec3.webp`)}
        >
          <div className={FRAME}>
            <h2 className="absolute inset-x-0 top-[1.33rem] text-center text-[0.56rem] leading-[1rem] font-semibold text-white">
              {t("s3.title")}
            </h2>
            {USES.map((use) => (
              <div
                key={use.title}
                className={cn(
                  "absolute flex h-[1.45rem] w-[6.82rem] flex-col justify-center px-[0.4rem]",
                  use.at,
                )}
              >
                <h3 className="text-[0.34rem] leading-[0.44rem] font-semibold text-[#fafafa]">
                  {t(use.title)}
                </h3>
                <p className="mt-[0.05rem] text-[0.18rem] leading-[0.27rem] text-[#8b8b8b]">
                  {t(use.desc)}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* sec4: hot water on call */}
        <section
          className={cn("relative h-[12.06rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec4.webp`)}
        >
          <p className="sr-only">{t("alt.s4")}</p>
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.95rem] text-[0.5rem] leading-[0.64rem]",
              )}
            >
              {t("s4.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.85rem] text-[0.29rem] leading-[0.38rem] font-medium text-[#bfbfbf]",
              )}
            >
              {rich("s4.desc", "")}
            </p>
            {/* the woman's request, its tail pointing down at her */}
            <p className="absolute top-[7.86rem] left-[2.45rem] max-w-[3rem] -translate-y-full rounded-[0.2rem] bg-[#8f6b44]/90 px-[0.3rem] py-[0.2rem] text-[0.28rem] leading-[0.4rem] text-white backdrop-blur-sm after:absolute after:top-full after:left-[2.1rem] after:border-x-[0.08rem] after:border-t-[0.12rem] after:border-x-transparent after:border-t-[#8f6b44]/90">
              {t("s4.ask")}
            </p>
            <p
              className={cn(
                "absolute top-[6.73rem] left-[8.375rem] whitespace-nowrap rounded-[0.2rem] bg-[#8f6b44]/90 px-[0.28rem] text-[0.24rem] leading-[0.86rem] text-white backdrop-blur-sm",
                CENTRE,
              )}
            >
              {t("s4.reply")}
            </p>
            {OUTLETS.map((outlet) => (
              <p
                key={outlet.key}
                className={cn(
                  "absolute -translate-y-1/2 whitespace-nowrap text-[0.2rem] leading-[0.26rem] text-white",
                  outlet.at,
                )}
              >
                {t(outlet.key)}
              </p>
            ))}
          </div>
        </section>
        {/* sec5: floor heating */}
        <section
          className={cn("relative h-[12.1rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec5.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.97rem] text-[0.52rem] leading-[0.66rem]",
              )}
            >
              {t("s5.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.86rem] text-[0.28rem] leading-[0.36rem] text-[#c3c1be] [text-shadow:0_0_0.08rem_rgb(0_0_0/0.35)]",
              )}
            >
              {t("s5.desc")}
            </p>
          </div>
        </section>
        {/* sec6: fresh air */}
        <section
          className={cn("relative h-[12.1rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec6.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.955rem] text-[0.51rem] leading-[0.66rem]",
              )}
            >
              {t("s6.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.855rem] text-[0.29rem] leading-[0.38rem] text-[#cfcac5]",
              )}
            >
              {t("s6.desc")}
            </p>
          </div>
        </section>
        {/* sec7: the compact unit */}
        <section
          className={cn("relative h-[12.09rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec7.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.97rem] text-[0.49rem] leading-[0.64rem]",
              )}
            >
              {t("s7.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.845rem] text-[0.32rem] leading-[0.42rem] text-[#c5c2c0]",
              )}
            >
              {t("s7.desc")}
            </p>
          </div>
        </section>
        {/* sec8: the MixHPS energy system */}
        <section
          className={cn("relative h-[14.72rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec8.webp`)}
        >
          <p className="sr-only">{t("alt.s8")}</p>
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.97rem] text-[0.44rem] leading-[0.58rem]",
              )}
            >
              <span className={BLUE}>{t("s8.title")}</span>
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.82rem] text-[0.26rem] leading-[0.34rem] font-medium text-[#c5c6c9]",
              )}
            >
              {t("s8.desc")}
            </p>
            {/* the screens in the 3D house: the water tank's, and the two status panels by the car */}
            <p
              className={cn(
                TILT,
                "top-[4.62rem] left-[8.58rem] -rotate-[10deg] text-[0.13rem]",
              )}
            >
              {t("s8.sterilize")}
            </p>
            <p
              className={cn(
                TILT,
                "top-[8.22rem] left-[11.12rem] skew-y-[24deg] text-[0.17rem]",
              )}
            >
              {t("s8.ac")}
            </p>
            <p
              className={cn(
                TILT,
                "top-[8.74rem] left-[11.31rem] skew-y-[24deg] text-[0.13rem]",
              )}
            >
              {t("s8.ok")}
            </p>
            <p
              className={cn(
                TILT,
                "top-[7.99rem] left-[11.69rem] skew-y-[24deg] text-[0.16rem]",
              )}
            >
              {t("s8.fresh")}
            </p>
            <p
              className={cn(
                TILT,
                "top-[8.71rem] left-[12.1rem] skew-y-[24deg] text-[0.13rem]",
              )}
            >
              {t("s8.ok")}
            </p>
            {FEATURES.map((feature) => (
              <p
                key={feature.key}
                className={cn(
                  "absolute top-[12.72rem] w-[3.2rem] -translate-x-1/2 text-balance text-center text-[0.24rem] leading-[0.3rem] font-medium text-white",
                  feature.centre,
                )}
              >
                {t(feature.key)}
              </p>
            ))}
          </div>
        </section>
        {/* sec9: HeatCycle, the heat recovery */}
        <section
          className={cn("relative h-[14.75rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec9.webp`)}
        >
          <p className="sr-only">{t("alt.s9")}</p>
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.96rem] text-[0.52rem] leading-[0.66rem]",
              )}
            >
              {rich("s9.title", CYAN, PURPLE)}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.835rem] text-[0.29rem] leading-[0.38rem] font-medium text-[#bfbfbf]",
              )}
            >
              {rich("s9.desc", "")}
            </p>
            <div className="absolute top-[6.904rem] left-[3.255rem] w-[2.45rem]">
              <h3 className="text-[0.34rem] leading-[0.44rem] font-medium text-[#cacbcb]">
                {t("s9.recover")}
              </h3>
              <p className="mt-[0.1rem] text-[0.22rem] leading-[0.34rem] text-[#d3d4d5]">
                {t("s9.recoverDesc")}
              </p>
            </div>
            <div className="absolute top-[9.914rem] left-[3.24rem] w-[2.45rem]">
              <h3 className="text-[0.34rem] leading-[0.44rem] font-medium text-[#cfd0d1]">
                {t("s9.reuse")}
              </h3>
              <p className="mt-[0.1rem] text-[0.22rem] leading-[0.34rem] text-[#d0d0d1]">
                {t("s9.reuseDesc")}
              </p>
            </div>
            <p
              className={cn(
                TILT,
                "top-[7.12rem] left-[12rem] skew-y-[20deg] text-[0.24rem] text-[#d9d9d9]",
              )}
            >
              {t("s9.waterIn")}
            </p>
            <p
              className={cn(
                TILT,
                "top-[8rem] left-[12.02rem] skew-y-[20deg] text-[0.24rem] text-[#d9d9d9]",
              )}
            >
              {t("s9.waterOut")}
            </p>
          </div>
        </section>
        {/* sec10: efficiency, and five years of savings */}
        <section
          className={cn("relative h-[14.71rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec10.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.93rem] text-[0.52rem] leading-[0.66rem]",
              )}
            >
              {rich("s10.title", CYAN, PURPLE)}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.805rem] text-[0.3rem] leading-[0.4rem] text-[#bfbfbf]",
              )}
            >
              {t("s10.desc")}
            </p>
            <p className="absolute top-[4.9rem] left-[9.64rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white/20 px-[0.24rem] text-[0.28rem] leading-[0.48rem] font-semibold text-[#1e2535]">
              {t("s10.pill")}
            </p>
            <h3 className="absolute top-[11.02rem] left-[3.3rem] -translate-y-1/2 whitespace-nowrap text-[0.31rem] leading-[0.4rem] font-medium text-white">
              {t("s10.cardTitle")}
            </h3>
            <p className="absolute top-[11.72rem] left-[3.28rem] w-[6.6rem] text-[0.2rem] leading-[0.4rem] font-medium text-[#cdcdcd]">
              {t("s10.cardDesc")}
            </p>
            <p className="absolute top-[11.05rem] right-[9.02rem] -translate-y-1/2 whitespace-nowrap text-[0.16rem] leading-[0.2rem] font-medium text-white">
              {t("s10.axis")}
            </p>
            {/* the tag over ORVIBO's bar */}
            <p
              className={cn(
                "absolute top-[11.16rem] left-[14.635rem] whitespace-nowrap text-[0.15rem] leading-[0.2rem] font-medium text-[#16261a]",
                CENTRE,
              )}
            >
              {t("s10.tagTop")}
            </p>
            <p
              className={cn(
                "absolute top-[11.37rem] left-[14.635rem] whitespace-nowrap text-[0.2rem] leading-[0.26rem] font-semibold text-[#16261a]",
                CENTRE,
              )}
            >
              {t("s10.tagValue")}
            </p>
            <p
              className={cn(
                "absolute top-[12.84rem] left-[11.87rem] w-[3rem] text-balance text-[0.15rem] leading-[0.2rem] text-[#868689]",
                CENTRE,
              )}
            >
              {t("s10.other")}
            </p>
            <p
              className={cn(
                "absolute top-[12.82rem] left-[14.65rem] whitespace-nowrap rounded-full bg-gradient-to-r from-[#ebe3d8] to-[#c9b39b] px-[0.1rem] text-[0.16rem] leading-[0.24rem] font-medium text-[#1a1a1a]",
                CENTRE,
              )}
            >
              {t("s10.orvibo")}
            </p>
            <p className="absolute top-[13.74rem] left-[2.64rem] w-[15rem] -translate-y-1/2 text-[0.16rem] leading-[0.24rem] text-[#838383]">
              {t("note.lab")}
            </p>
          </div>
        </section>
        {/* sec11: the parts */}
        <section
          className={cn("relative h-[14.68rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec11.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.905rem] text-[0.52rem] leading-[0.66rem]",
              )}
            >
              <span className={BLUE}>{t("s11.title")}</span>
            </h2>
            {PARTS.map((part) => (
              <div key={part.title} className={cn("absolute", part.at)}>
                <h3 className="whitespace-nowrap text-[0.32rem] leading-[0.48rem] font-medium text-[#e9c99e]">
                  {t(part.title)}
                </h3>
                <p
                  className={cn(
                    "mt-[0.3rem] text-[0.22rem] leading-[0.34rem] font-medium text-white",
                    part.width,
                  )}
                >
                  {t(part.desc)}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* sec12: smart new energy, patents and certifications */}
        <section
          className={cn("relative h-[19.9rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec12.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[3.01rem] text-[0.56rem] leading-[0.72rem] text-[#f5e6d4]",
              )}
            >
              {rich("s12.title", "text-[#e0b483]")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[4.07rem] text-[0.35rem] leading-[0.46rem] text-[#e6e3e3]",
              )}
            >
              {t("s12.desc")}
            </p>
            {HOUSE.map((label) => (
              <p
                key={label.key}
                className={cn(
                  "absolute -translate-y-1/2 whitespace-nowrap text-[0.2rem] leading-[0.26rem] font-medium text-white [text-shadow:0_0_0.06rem_rgb(0_0_0/0.6)]",
                  label.at,
                )}
              >
                {t(label.key)}
              </p>
            ))}
            <p className="absolute top-[14.745rem] left-[3.3rem] w-[7rem] -translate-y-1/2 text-balance text-[0.4rem] leading-[0.56rem] text-white">
              {rich("s12.patents", "text-[0.5rem] font-bold")}
            </p>
            <p className="absolute top-[18.125rem] left-[3.3rem] w-[7rem] -translate-y-1/2 text-balance text-[0.4rem] leading-[0.56rem] text-white">
              {rich("s12.caqi", "text-[0.5rem] font-bold")}
            </p>
          </div>
        </section>
        {/* sec13: ORVIBO in figures */}
        <section
          className={cn("relative h-[15.14rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec13.webp`)}
        >
          <div className={FRAME}>
            {FIGURES.map((figure) => (
              <p
                key={figure.key}
                className={cn(
                  "absolute left-[3.3rem] w-[6.4rem] -translate-y-1/2 text-balance text-[0.36rem] leading-[0.5rem] text-white",
                  figure.at,
                )}
              >
                {rich(figure.key, "text-[0.46rem] font-bold")}
              </p>
            ))}
          </div>
        </section>
        {/* sec14: installed by ORVIBO itself */}
        <section
          className={cn("relative h-[18.26rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec14.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[2.045rem] text-[0.6rem] leading-[0.78rem] text-[#f3e4d2]",
              )}
            >
              {rich("s14.title", "text-[#ddb17f]")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.965rem] text-[0.26rem] leading-[0.34rem] font-semibold text-white",
              )}
            >
              {t("s14.desc")}
            </p>
            <h3 className="absolute top-[14.845rem] left-[3.1rem] -translate-y-1/2 text-[0.36rem] leading-[0.5rem] font-semibold text-[#ffe1c6]">
              {t("s14.process")}
            </h3>
            <ol>
              {STEPS.map((step) => (
                <li
                  key={step.key}
                  className={cn(
                    "absolute w-[1.85rem] -translate-x-1/2 text-balance text-center text-[0.21rem] leading-[0.27rem] font-medium text-[#fae0c7]",
                    step.at,
                  )}
                >
                  {t(step.key)}
                </li>
              ))}
            </ol>
          </div>
        </section>
        {/* sec15: a 6-year warranty */}
        <section
          className={cn("relative h-[11.8rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec15.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[2.11rem] text-[0.52rem] leading-[0.66rem]",
              )}
            >
              {t("s15.title")}
            </h2>
            <p
              className={cn(
                "absolute top-[8.835rem] left-[9.6rem] whitespace-nowrap text-[0.42rem] leading-[0.54rem] font-semibold text-white",
                CENTRE,
              )}
            >
              {t("s15.badge")}
            </p>
            <div className="absolute inset-x-0 top-[10rem] mx-auto w-[15rem] text-balance text-center text-[0.13rem] leading-[0.28rem] font-medium text-[#888a8e]">
              <p>{t("note.standard")}</p>
              <p>{t("note.tenYear")}</p>
            </div>
          </div>
        </section>
        {/* sec16: specifications, in a card like orvibo.com's (its picture is only the card and its words) */}
        <section className="relative h-[21.48rem] overflow-hidden bg-black">
          <div className={FRAME}>
            <div className="absolute top-[0.98rem] left-[0.94rem] h-[17.44rem] w-[17.31rem] rounded-[0.3rem] bg-gradient-to-b from-[#18191d] to-[#0e0e0e]" />
            <p
              className={cn(
                "absolute top-[3.22rem] left-1/2 whitespace-nowrap text-[0.3rem] leading-[0.4rem] font-medium text-[#c7c7c7]",
                CENTRE,
              )}
            >
              {t("s16.name")}
            </p>
            <h2
              className={cn(
                "absolute top-[4.28rem] left-1/2 whitespace-nowrap text-[0.6rem] leading-[0.78rem] font-semibold text-white",
                CENTRE,
              )}
            >
              {t("s16.title")}
            </h2>
            <p className="absolute top-[6.39rem] left-[3.09rem] flex -translate-y-1/2 items-baseline gap-[0.14rem] whitespace-nowrap">
              <span className="text-[0.24rem] text-[#8b8b8b]">
                {t("s16.seriesLabel")}
              </span>
              <span className="text-[0.26rem] font-semibold text-white">
                {t("s16.series")}
              </span>
            </p>
            <p className="absolute top-[6.39rem] left-[10.41rem] flex -translate-y-1/2 items-baseline gap-[0.14rem] whitespace-nowrap">
              <span className="text-[0.24rem] text-[#8b8b8b]">
                {t("s16.sizeLabel")}
              </span>
              <span className="text-[0.26rem] font-semibold text-white">
                {t("s16.size")}
              </span>
            </p>
            <div className="absolute top-[6.94rem] left-[2.56rem] h-px w-[14rem] bg-[#4a4a4c]" />
            <dl className="absolute top-[7.83rem] left-[3rem] grid w-[14.32rem] grid-cols-4 auto-rows-[1.94rem]">
              {SPECS.map((spec) => (
                <div key={spec} className="pr-[0.3rem]">
                  <dt className="text-[0.22rem] leading-[0.3rem] text-[#858585]">
                    {t(`spec.${spec}`)}
                  </dt>
                  <dd className="mt-[0.1rem] text-[0.26rem] leading-[0.34rem] font-medium text-white">
                    {t(`spec.${spec}Value`)}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="absolute top-[18.85rem] left-[2.06rem] w-[15.4rem] list-disc text-[0.15rem] leading-[0.35rem] text-[#8a8a8a]">
              {NOTES.map((note) => (
                <li key={note}>{t(note)}</li>
              ))}
            </ul>
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
