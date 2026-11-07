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

/** The pictures W260 and W300 share, without their words (hvac_clean.py); every word here is HTML laid over them.
 * Only the hero is each model's own, in /orvibo/products/<model>/. */
const IMG = "/orvibo/products/hvac/w-series";

/** The sections' headings and the line under them, each on its own line across the picture. */
const TITLE =
  "absolute inset-x-0 -translate-y-1/2 text-center font-semibold text-white";
const DESC = "absolute inset-x-0 -translate-y-1/2 text-center";
/** The gold card headings of the dark sections. */
const GOLD = "text-[#e4c595]";

/** sec3: what the one unit does, one heading in five parts. */
const USES = ["s3.ac", "s3.water", "s3.floor", "s3.fresh", "s3.smart"] as const;

/** sec3: the temperatures in the house, beside the lines the picture keeps. */
const HOUSE = [
  { key: "s3.acLabel", at: "left-[11.35rem] top-[6.63rem]" },
  { key: "s3.waterLabel", at: "left-[13.37rem] top-[7.24rem]" },
  { key: "s3.floorLabel", at: "left-[9.17rem] top-[7.71rem]" },
] as const;

/** sec4: the four rooms, a tag on each photo and the words under it. */
const ROOMS = [
  {
    tag: "s4.airTag",
    title: "s4.air",
    desc: "s4.airDesc",
    tagAt: "left-[2.6rem] top-[4.26rem]",
    at: "left-[2.95rem] top-[7.165rem]",
  },
  {
    tag: "s4.floorTag",
    title: "s4.floor",
    desc: "s4.floorDesc",
    tagAt: "left-[9.78rem] top-[4.26rem]",
    at: "left-[10.12rem] top-[7.165rem]",
  },
  {
    tag: "s4.waterTag",
    title: "s4.water",
    desc: "s4.waterDesc",
    tagAt: "left-[2.6rem] top-[9.16rem]",
    at: "left-[2.95rem] top-[12.065rem]",
  },
  {
    tag: "s4.freshTag",
    title: "s4.fresh",
    desc: "s4.freshDesc",
    tagAt: "left-[9.78rem] top-[9.16rem]",
    at: "left-[10.12rem] top-[12.065rem]",
  },
] as const;
/** sec4: the tag on each photo, a gold strip from the card's left edge. */
const TAG =
  "absolute flex h-[0.51rem] items-center whitespace-nowrap rounded-r-[0.1rem] bg-gradient-to-tr from-[#c4aa9b] from-20% to-[#f0d5b7] to-80% pr-[0.26rem] pl-[0.32rem] text-[0.28rem] font-medium text-[#79533f]";
/** sec4: what the energy system does, two by two under the last card. */
const HOME = ["s4.control", "s4.zones", "s4.selfCheck", "s4.stats"] as const;
/** sec4: the frosted bubbles by the control screen. */
const BUBBLE =
  "absolute whitespace-nowrap rounded-full border border-white/50 bg-white/25 px-[0.14rem] py-[0.04rem] text-[0.15rem] leading-[0.24rem] text-white shadow-[0_0_0.05rem_rgb(255_255_255/0.6)] [text-shadow:0_0_0.04rem_rgb(0_0_0/0.4)]";

/** sec5: the four parts, words at each card's top left in set lines, each line ending before the card's picture. */
const PARTS = [
  {
    title: "s5.compressor",
    desc: "s5.compressorDesc",
    at: "left-[3.05rem] top-[2.705rem]",
  },
  {
    title: "s5.valve",
    desc: "s5.valveDesc",
    at: "left-[10.23rem] top-[2.725rem]",
  },
  { title: "s5.tank", desc: "s5.tankDesc", at: "left-[3.05rem] top-[6.82rem]" },
  {
    title: "s5.motor",
    desc: "s5.motorDesc",
    at: "left-[10.23rem] top-[6.815rem]",
  },
] as const;

/** sec6: the three ways HomeAI Energy runs the temperature, under their icons. */
const MODES = [
  { key: "s6.zoned", centre: "left-[11.09rem]" },
  { key: "s6.active", centre: "left-[12.735rem]" },
  { key: "s6.scheduled", centre: "left-[14.37rem]" },
] as const;

/** sec8: the cards' headings, centred in their cards (the voice card's starts at its left). */
const SCREENS = [
  { key: "s8.phone", at: "left-[4.85rem] top-[5.87rem]" },
  { key: "s8.screen", at: "left-[9.635rem] top-[5.87rem]" },
  { key: "s8.climates", at: "left-[14.355rem] top-[5.87rem]" },
  { key: "s8.lights", at: "left-[14.365rem] top-[10.555rem]" },
] as const;
/** sec8: the names of the four climates in the app. */
const CLIMATES = [
  { key: "s8.spring", at: "left-[12.47rem] top-[7.08rem]" },
  { key: "s8.lake", at: "left-[14.84rem] top-[7.07rem]" },
  { key: "s8.cool", at: "left-[12.48rem] top-[8.455rem]" },
  { key: "s8.autumn", at: "left-[14.83rem] top-[8.435rem]" },
] as const;
/** sec8: what the family asks the screen, fading out line by line. */
const ASKS = [
  { key: "s8.ask1", at: "top-[11.265rem] text-white" },
  { key: "s8.ask2", at: "top-[11.805rem] text-[#cdcecf]" },
  { key: "s8.ask3", at: "top-[12.345rem] text-[#9c9c9e]" },
  { key: "s8.ask4", at: "top-[12.915rem] text-[#4f4f4f]" },
  { key: "s8.ask5", at: "top-[13.485rem] text-[#292929]" },
] as const;

/** sec10: the labels in the 3D house, beside its dots. */
const VILLA = [
  { key: "s10.light", at: "right-[10.83rem] top-[5.645rem] text-right" },
  { key: "s10.water", at: "left-[10.16rem] top-[6.045rem]" },
  { key: "s10.ac", at: "right-[11.27rem] top-[6.975rem] text-right" },
  { key: "s10.unit", at: "left-[11.44rem] top-[7.24rem]" },
  { key: "s10.floor", at: "left-[10.13rem] top-[7.87rem]" },
] as const;
/** sec10: the six figures, in their cards; each ends before its card's picture. */
const FIGURES = [
  { key: "s10.patents", at: "left-[2.9rem] top-[10.975rem] w-[3.5rem]" },
  { key: "s10.developers", at: "left-[10.12rem] top-[10.975rem] w-[3.1rem]" },
  { key: "s10.caqi", at: "left-[2.9rem] top-[12.975rem] w-[3.35rem]" },
  { key: "s10.stores", at: "left-[10.12rem] top-[12.975rem] w-[2.4rem]" },
  { key: "s10.users", at: "left-[2.9rem] top-[14.975rem] w-[2.8rem]" },
  { key: "s10.awards", at: "left-[10.12rem] top-[14.975rem] w-[3.4rem]" },
] as const;

/** sec11: the ten installation steps, under their numbers in the picture. */
const STEPS = [
  { key: "s11.step1", at: "left-[7.07rem] top-[13.31rem]" },
  { key: "s11.step2", at: "left-[9.07rem] top-[13.31rem]" },
  { key: "s11.step3", at: "left-[10.93rem] top-[13.31rem]" },
  { key: "s11.step4", at: "left-[12.9rem] top-[13.31rem]" },
  { key: "s11.step5", at: "left-[14.91rem] top-[13.31rem]" },
  { key: "s11.step6", at: "left-[7.07rem] top-[15.23rem]" },
  { key: "s11.step7", at: "left-[9.07rem] top-[15.23rem]" },
  { key: "s11.step8", at: "left-[10.93rem] top-[15.23rem]" },
  { key: "s11.step9", at: "left-[12.9rem] top-[15.23rem]" },
  { key: "s11.step10", at: "left-[14.91rem] top-[15.23rem]" },
] as const;

/** sec13: the specification table, four columns as orvibo.com lays it out (the values that differ are each model's). */
const SPECS = [
  "supply",
  "grade",
  "coolingInput",
  "cooling",
  "refrigerant",
  "waterResistance",
  "charge",
  "heating",
  "inputPower",
  "inputCurrent",
  "heatingInput",
  "cop",
  "overpressure",
  "cspf",
  "exchanger",
  "shock",
  "weight",
  "noise",
  "type",
  "water",
  "size",
] as const;
/** sec14: the notes under the page, labelled as on orvibo.com. */
const NOTES = ["note.summer", "note.winter"] as const;

/** The two models' page: orvibo.com draws W260 and W300 from the same pictures but the hero, the second chart's
 * figure and the specifications, which come from each model's text. */
export function WSeriesOverview({
  locale,
  text,
  common,
  model,
}: ProductViewProps & { model: "w260" | "w300" }) {
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
        {/* sec1: the main unit and its tank by the water (each model has its own photo) */}
        <section
          className={cn("relative h-[8.32rem] overflow-hidden", PHOTO)}
          style={bg(`/orvibo/products/${model}/sec1.webp`)}
        >
          <p className="sr-only">{t("alt.s1")}</p>
          <div className={FRAME}>
            <div className="absolute top-[4.13rem] left-[6.36rem] flex w-[9.6rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
              <p className="text-[0.3rem] leading-[0.4rem] font-medium text-[#f6efe9]">
                {t("s1.name")}
              </p>
              <h1 className="mt-[0.49rem] flex flex-wrap justify-center gap-x-[0.5rem] text-[0.6rem] leading-[0.76rem] font-semibold text-[#fbf3ec]">
                <span>{t("s1.title1")}</span>
                <span>{t("s1.title2")}</span>
              </h1>
              <p className="mt-[0.47rem] flex flex-wrap justify-center gap-x-[0.36rem] text-[0.32rem] leading-[0.46rem] font-medium text-[#fbf3ec]">
                <span>{t("s1.summer")}</span>
                <span>{t("s1.winter")}</span>
              </p>
            </div>
          </div>
        </section>
        <ResearchSection locale={locale} text={text} />
        <CctvCardBanner locale={locale} text={text} />
        {/* sec3: one unit for the whole house */}
        <section
          className={cn("relative h-[10.81rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec3.webp`)}
        >
          <p className="sr-only">{t("alt.s3")}</p>
          <div className={FRAME}>
            <p
              className={cn(
                "absolute top-[1.775rem] left-[9.605rem] whitespace-nowrap rounded-full bg-white px-[0.25rem] text-[0.3rem] leading-[0.61rem] font-semibold text-[#516887]",
                CENTRE,
              )}
            >
              {t("s3.pill")}
            </p>
            <div className="absolute inset-x-0 top-[2.45rem] text-center">
              <h2 className="mx-auto flex w-[16rem] flex-wrap justify-center gap-x-[0.3rem] text-[0.48rem] leading-[0.62rem] font-semibold text-white">
                {USES.map((use) => (
                  <span key={use}>{t(use)}</span>
                ))}
              </h2>
              <p className="mt-[0.415rem] text-[0.24rem] leading-[0.4rem] text-[#e4e3e3]">
                {t("s3.desc")}
              </p>
            </div>
            <p className="absolute top-[6.91rem] left-[8.93rem] -translate-y-1/2 whitespace-nowrap text-[0.15rem] leading-[0.19rem] text-white">
              {t("s3.screen")}
            </p>
            {HOUSE.map((label) => (
              <p
                key={label.key}
                className={cn(
                  "absolute whitespace-nowrap text-[0.15rem] leading-[0.19rem] text-white",
                  label.at,
                )}
              >
                {t(label.key)}
              </p>
            ))}
          </div>
        </section>
        {/* sec4: a water-based system for villas, five cards */}
        <section
          className={cn("relative h-[19.28rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec4.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[2.085rem] text-[0.5rem] leading-[0.66rem]",
              )}
            >
              {t("s4.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.94rem] text-[0.28rem] leading-[0.4rem] text-[#e2e3e4]",
              )}
            >
              {t("s4.desc")}
            </p>
            {ROOMS.map((room) => (
              <Fragment key={room.title}>
                <p className={cn(TAG, room.tagAt)}>{t(room.tag)}</p>
                <div className={cn("absolute whitespace-nowrap", room.at)}>
                  <h3 className="text-[0.27rem] leading-[0.38rem] font-medium text-[#b0b0b2]">
                    {t(room.title)}
                  </h3>
                  <p className="mt-[0.12rem] text-[0.19rem] leading-[0.305rem] text-[#8d8d8e]">
                    {t(room.desc)}
                  </p>
                </div>
              </Fragment>
            ))}
            {/* the energy system card: the control screen, what it says, and what the system does */}
            <p className={cn(TAG, "top-[14.05rem] left-[2.6rem]")}>
              {t("s4.homeTag")}
            </p>
            <p
              className={cn(
                BUBBLE,
                "top-[14.35rem] left-[9.5rem] -translate-y-full after:absolute after:top-full after:left-[0.35rem] after:border-t-[0.09rem] after:border-r-[0.07rem] after:border-t-white/40 after:border-r-transparent",
              )}
            >
              {t("s4.freshOn")}
            </p>
            <p className="absolute top-[14.7rem] left-[8.15rem] -translate-y-1/2 whitespace-nowrap text-[0.1rem] leading-[0.12rem] text-white">
              {t("s4.myHome")}
            </p>
            <p
              className={cn(
                BUBBLE,
                "top-[16.07rem] right-[10.93rem] after:absolute after:right-[0.27rem] after:bottom-full after:border-b-[0.11rem] after:border-l-[0.08rem] after:border-b-white/40 after:border-l-transparent",
              )}
            >
              {t("s4.acSet")}
            </p>
            <div className="absolute top-[16.965rem] left-[2.95rem] whitespace-nowrap">
              <h3 className="text-[0.27rem] leading-[0.38rem] font-medium text-[#b0b0b2]">
                {t("s4.home")}
              </h3>
              <ul className="mt-[0.115rem] grid w-max grid-cols-2 gap-x-[0.3rem] text-[0.19rem] leading-[0.3rem] text-[#8d8d8e]">
                {HOME.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* sec5: the parts */}
        <section
          className={cn("relative h-[10.79rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec5.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.33rem] text-[0.5rem] leading-[0.66rem]",
              )}
            >
              {t("s5.title")}
            </h2>
            {PARTS.map((part) => (
              <div
                key={part.title}
                className={cn("absolute whitespace-nowrap", part.at)}
              >
                <h3 className="text-[0.3rem] leading-[0.46rem] font-medium text-[#e3c398]">
                  {t(part.title)}
                </h3>
                <p className="mt-[0.13rem] text-[0.24rem] leading-[0.395rem] text-white">
                  {t(part.desc)}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* sec6: comfort and savings, three cards */}
        <section
          className={cn("relative h-[11.68rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec6.webp`)}
        >
          <p className="sr-only">{t("alt.s6")}</p>
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.72rem] text-[0.5rem] leading-[0.66rem]",
              )}
            >
              {t("s6.title")}
            </h2>
            {/* HeatCycle, under its logo: the heading may take two lines, the words under it follow */}
            <div className="absolute top-[3.595rem] left-[3.06rem] w-[5.2rem]">
              <h3
                className={cn(
                  "text-balance text-[0.3rem] leading-[0.4rem] font-medium",
                  GOLD,
                )}
              >
                {t("s6.recovery")}
              </h3>
              <p className="mt-[0.16rem] whitespace-nowrap text-[0.24rem] leading-[0.4rem] text-white">
                {t("s6.recoveryDesc")}
              </p>
            </div>
            <p
              className={cn(
                "absolute top-[6.385rem] left-[7.11rem] whitespace-nowrap text-[0.2rem] leading-[0.26rem] font-semibold text-white",
                CENTRE,
              )}
            >
              {t("s6.indoorHeat")}
            </p>
            <p
              className={cn(
                "absolute top-[9.35rem] left-[6.485rem] whitespace-nowrap text-[0.2rem] leading-[0.26rem] font-semibold text-white",
                CENTRE,
              )}
            >
              {t("s6.hotWater")}
            </p>
            {/* the full DC inverter, its lines ending before the chart */}
            <h3
              className={cn(
                "absolute top-[3.365rem] left-[9.33rem] -translate-y-1/2 whitespace-nowrap text-[0.3rem] leading-[0.4rem] font-medium",
                GOLD,
              )}
            >
              {t("s6.dc")}
            </h3>
            <p className="absolute top-[3.7375rem] left-[9.33rem] whitespace-nowrap text-[0.24rem] leading-[0.395rem] text-white">
              {t("s6.dcDesc")}
            </p>
            <p
              className={cn(
                "absolute top-[3.925rem] left-[13.64rem] text-[0.34rem] leading-[0.44rem] font-semibold text-[#8f8f90]",
                CENTRE,
              )}
            >
              {t("s6.standardValue")}
            </p>
            <p
              className={cn(
                "absolute top-[3.3rem] left-[15.195rem] text-[0.31rem] leading-[0.4rem] font-semibold text-[#0ef668]",
                CENTRE,
              )}
            >
              {t("s6.oursValue")}
            </p>
            <p className="absolute top-[5.9rem] left-[13.64rem] w-[1.4rem] -translate-x-1/2 text-balance text-center text-[0.13rem] leading-[0.16rem] text-[#8f8f90]">
              {t("s6.standard")}
            </p>
            <p className="absolute top-[5.9rem] left-[15.2rem] w-[1.4rem] -translate-x-1/2 text-balance text-center text-[0.13rem] leading-[0.16rem] font-medium text-white">
              {t("s6.ours")}
            </p>
            {/* HomeAI Energy, over its three icons */}
            <h3
              className={cn(
                "absolute top-[7.435rem] left-[9.35rem] -translate-y-1/2 whitespace-nowrap text-[0.3rem] leading-[0.4rem] font-medium",
                GOLD,
              )}
            >
              {t("s6.homeAi")}
            </h3>
            <p className="absolute top-[7.82rem] left-[9.35rem] whitespace-nowrap text-[0.24rem] leading-[0.4rem] text-white">
              {t("s6.homeAiDesc")}
            </p>
            {MODES.map((mode) => (
              <p
                key={mode.key}
                className={cn(
                  "absolute top-[10.075rem] whitespace-nowrap text-[0.14rem] leading-[0.2rem] text-white",
                  CENTRE,
                  mode.centre,
                )}
              >
                {t(mode.key)}
              </p>
            ))}
          </div>
        </section>
        {/* sec7: beyond grade 1, five years of savings (the picture keeps the 3D ¥36000) */}
        <section
          className={cn("relative h-[14.73rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec7.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.945rem] text-[0.52rem] leading-[0.68rem]",
              )}
            >
              {t("s7.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.815rem] text-[0.3rem] leading-[0.4rem] text-[#c0c1c1]",
              )}
            >
              {t("s7.desc")}
            </p>
            <p
              className={cn(
                "absolute top-[4.9rem] left-[9.62rem] whitespace-nowrap rounded-full border border-white/40 bg-white/30 px-[0.26rem] text-[0.3rem] leading-[0.5rem] font-semibold text-[#1f2538]",
                CENTRE,
              )}
            >
              {t("s7.pill")}
            </p>
            {/* the card: the words on the left, the chart's labels on the right */}
            <h3 className="absolute top-[11.22rem] left-[3.29rem] -translate-y-1/2 whitespace-nowrap text-[0.31rem] leading-[0.4rem] font-medium text-white">
              {t("s7.cardTitle")}
            </h3>
            <p className="absolute top-[11.745rem] left-[3.28rem] whitespace-nowrap text-[0.2rem] leading-[0.4rem] text-[#cecfd0]">
              {t("s7.cardDesc")}
            </p>
            <p className="absolute top-[11.07rem] right-[9rem] -translate-y-1/2 whitespace-nowrap text-right text-[0.13rem] leading-[0.18rem] text-white">
              {t("s7.axis")}
            </p>
            {/* in the green arrow over ORVIBO's bar */}
            <p
              className={cn(
                "absolute top-[11.2rem] left-[14.645rem] whitespace-nowrap text-[0.12rem] leading-[0.15rem] font-medium text-[#110618]",
                CENTRE,
              )}
            >
              {t("s7.tagTop")}
            </p>
            <p
              className={cn(
                "absolute top-[11.39rem] left-[14.62rem] whitespace-nowrap text-[0.22rem] leading-[0.26rem] font-semibold text-[#110618]",
                CENTRE,
              )}
            >
              {ts("s7.tagValue")
                .split(/(¥)/)
                .filter(Boolean)
                .map((part) =>
                  part === "¥" ? (
                    <span key={part} className="text-[0.13rem]">
                      ¥
                    </span>
                  ) : (
                    <Fragment key={part}>{part}</Fragment>
                  ),
                )}
            </p>
            <p
              className={cn(
                "absolute top-[12.855rem] left-[11.87rem] w-[3rem] text-balance text-[0.13rem] leading-[0.17rem] text-[#9f9fa1]",
                CENTRE,
              )}
            >
              {t("s7.other")}
            </p>
            <p
              className={cn(
                "absolute top-[12.855rem] left-[14.65rem] whitespace-nowrap rounded-full bg-gradient-to-r from-[#efe9e0] to-[#cfb497] px-[0.1rem] text-[0.15rem] leading-[0.23rem] font-medium text-black",
                CENTRE,
              )}
            >
              {t("s7.orvibo")}
            </p>
            <p className="absolute top-[13.76rem] left-[2.62rem] w-[15.4rem] -translate-y-1/2 text-[0.16rem] leading-[0.22rem] text-[#848685]">
              {t("note.lab")}
            </p>
          </div>
        </section>
        {/* sec8: a control screen in every room */}
        <section
          className={cn("relative h-[15.39rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec8.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[2.33rem] text-[0.5rem] leading-[0.97rem]",
              )}
            >
              {t("s8.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[3.9875rem] text-[0.28rem] leading-[0.495rem] text-[#c0c1c0]",
              )}
            >
              {t("s8.desc")}
            </p>
            {SCREENS.map((screen) => (
              <h3
                key={screen.key}
                className={cn(
                  "absolute w-[4.1rem] text-balance text-[0.28rem] leading-[0.36rem] font-medium text-[#e3c594]",
                  CENTRE,
                  screen.at,
                )}
              >
                {t(screen.key)}
              </h3>
            ))}
            <h3 className="absolute top-[10.555rem] left-[3.5rem] -translate-y-1/2 whitespace-nowrap text-[0.28rem] leading-[0.36rem] font-medium text-[#e3c594]">
              {t("s8.voice")}
            </h3>
            {CLIMATES.map((climate) => (
              <p
                key={climate.key}
                className={cn(
                  "absolute -translate-y-1/2 whitespace-nowrap text-[0.13rem] leading-[0.16rem] text-white",
                  climate.at,
                )}
              >
                {t(climate.key)}
              </p>
            ))}
            {ASKS.map((ask) => (
              <p
                key={ask.key}
                className={cn(
                  "absolute left-[9.85rem] whitespace-nowrap text-[0.26rem] leading-[0.34rem]",
                  CENTRE,
                  ask.at,
                )}
              >
                {t(ask.key)}
              </p>
            ))}
          </div>
        </section>
        {/* sec9: design */}
        <section
          className={cn("relative h-[10.8rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec9.webp`)}
        >
          <p className="sr-only">{t("alt.s9")}</p>
          <div className={FRAME}>
            <h2 className="absolute top-[3.87rem] left-[2.6rem] -translate-y-1/2 whitespace-nowrap text-[0.5rem] leading-[0.8rem] font-semibold text-white">
              {t("s9.title")}
            </h2>
            <p className="absolute top-[5.375rem] left-[2.63rem] whitespace-nowrap text-[0.3rem] leading-[0.6rem] text-[#c1c1c1]">
              {t("s9.desc")}
            </p>
          </div>
        </section>
        {/* sec10: smart new energy for every home */}
        <section
          className={cn("relative h-[18.17rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec10.webp`)}
        >
          <p className="sr-only">{t("alt.s10")}</p>
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[2.195rem] text-[0.6rem] leading-[0.8rem]",
              )}
            >
              {rich(
                "s10.title",
                "text-[#e2bf95] [text-shadow:0_0_0.12rem_rgb(45_30_20/0.55)]",
                "text-[#eadbc8]",
              )}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[3.305rem] text-[0.3rem] leading-[0.4rem] text-[#e6e1dd] [text-shadow:0_0_0.1rem_rgb(45_30_20/0.5)]",
              )}
            >
              {t("s10.desc")}
            </p>
            {VILLA.map((label) => (
              <p
                key={label.key}
                className={cn(
                  "absolute -translate-y-1/2 whitespace-nowrap text-[0.14rem] leading-[0.18rem] font-medium text-white [text-shadow:0_0_0.05rem_rgb(0_0_0/0.8),0_0_0.02rem_rgb(0_0_0/0.5)]",
                  label.at,
                )}
              >
                {t(label.key)}
              </p>
            ))}
            {FIGURES.map((figure) => (
              <p
                key={figure.key}
                className={cn(
                  "absolute -translate-y-1/2 text-balance text-[0.24rem] leading-[0.34rem] text-white",
                  figure.at,
                )}
              >
                {rich(figure.key, "text-[0.28rem] font-bold")}
              </p>
            ))}
          </div>
        </section>
        {/* sec11: installed by ORVIBO's headquarters */}
        <section
          className={cn("relative h-[18.25rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec11.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.285rem] text-[0.56rem] leading-[0.72rem]",
              )}
            >
              <span className="bg-gradient-to-r from-[#eadbc9] to-[#d2a676] bg-clip-text text-transparent">
                {t("s11.title")}
              </span>
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.21rem] text-[0.28rem] leading-[0.36rem] font-medium text-[#f9fbfa]",
              )}
            >
              {t("s11.desc")}
            </p>
            <h3 className="absolute top-[14.085rem] left-[3.1rem] -translate-y-1/2 whitespace-nowrap text-[0.36rem] leading-[0.5rem] font-semibold text-[#f6d6b8]">
              {t("s11.process")}
            </h3>
            <ol>
              {STEPS.map((step) => (
                <li
                  key={step.key}
                  className={cn(
                    "absolute w-[1.8rem] -translate-x-1/2 text-balance text-center text-[0.21rem] leading-[0.26rem] font-medium text-[#f6dcc3]",
                    step.at,
                  )}
                >
                  {t(step.key)}
                </li>
              ))}
            </ol>
          </div>
        </section>
        {/* sec12: a 10-year warranty (the picture keeps the badge) */}
        <section
          className={cn("relative h-[11.8rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec12.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.355rem] text-[0.52rem] leading-[0.68rem]",
              )}
            >
              {t("s12.title")}
            </h2>
            <p
              className={cn(
                "absolute top-[8.085rem] left-[9.6rem] whitespace-nowrap text-[0.4rem] leading-[0.52rem] font-semibold text-white",
                CENTRE,
              )}
            >
              {t("s12.split")}
            </p>
            <div className="absolute inset-x-0 top-[9.2525rem] mx-auto w-[15rem] text-balance text-center text-[0.13rem] leading-[0.285rem] text-[#878988]">
              <p>{t("note.standard")}</p>
              <p>{t("note.tenYear")}</p>
            </div>
          </div>
        </section>
        {/* sec13: specifications, in a card like orvibo.com's (its picture is only the card and its words) */}
        <section className="relative h-[18.67rem] overflow-hidden bg-black">
          <div className={FRAME}>
            <div className="absolute top-[0.23rem] left-[0.94rem] h-[17.44rem] w-[17.31rem] rounded-[0.3rem] bg-gradient-to-b from-[#18191d] to-[#0e0e0e]" />
            <h2
              className={cn(
                "absolute top-[2.305rem] left-1/2 whitespace-nowrap text-[0.6rem] leading-[0.78rem] font-semibold text-white",
                CENTRE,
              )}
            >
              {t("s13.title")}
            </h2>
            <p className="absolute top-[4.23rem] left-[2.99rem] flex -translate-y-1/2 items-baseline gap-[0.14rem] whitespace-nowrap">
              <span className="text-[0.22rem] text-[#979899]">
                {t("s13.seriesLabel")}
              </span>
              <span className="text-[0.26rem] font-semibold text-white">
                {t("s13.series")}
              </span>
            </p>
            <p className="absolute top-[4.23rem] left-[13.79rem] flex -translate-y-1/2 items-baseline gap-[0.14rem] whitespace-nowrap">
              <span className="text-[0.22rem] text-[#979899]">
                {t("s13.modelLabel")}
              </span>
              <span className="text-[0.26rem] font-semibold text-white">
                {t("s13.model")}
              </span>
            </p>
            <div className="absolute top-[4.8rem] left-[2.56rem] h-px w-[14rem] bg-[#c1c1c3]" />
            {/* labels sit on the line above their value, so a label in two lines grows upwards */}
            <dl className="absolute top-[5.43rem] left-[3.01rem] grid w-[14.33rem] grid-cols-4 auto-rows-[1.945rem]">
              {SPECS.map((spec) => (
                <div key={spec} className="pr-[0.3rem]">
                  <dt className="flex h-[0.56rem] flex-col justify-end text-[0.21rem] leading-[0.28rem] text-[#979899]">
                    {t(`spec.${spec}`)}
                  </dt>
                  <dd className="mt-[0.14rem] text-[0.25rem] leading-[0.32rem] font-medium text-white">
                    {t(`spec.${spec}Value`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        {/* sec14: the notes, as orvibo.com's last picture lays them out */}
        <section className="min-h-[2.58rem] bg-black">
          <ul className="mx-auto max-w-[19.2rem] list-disc pt-[0.34rem] pr-[1.84rem] pb-[0.3rem] pl-[2.07rem] text-[0.14rem] leading-[0.41rem] text-[#898989]">
            {NOTES.map((note) => (
              <li key={note}>{t(note)}</li>
            ))}
          </ul>
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
