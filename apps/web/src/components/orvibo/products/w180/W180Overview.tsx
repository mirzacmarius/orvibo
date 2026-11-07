import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import {
  CENTRE,
  CctvCardBanner,
  FRAME,
  PHOTO,
} from "@/components/orvibo/products/hvac/HvacSections";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import { Fragment, type ReactNode } from "react";

/** orvibo.com's pictures without their words (hvac_clean.py); every word here is HTML laid over them. */
const IMG = "/orvibo/products/w180";

/** The sections' headings and the line under them, each on its own line across the picture. */
const TITLE =
  "absolute inset-x-0 -translate-y-1/2 text-center font-semibold text-white";
const DESC = "absolute inset-x-0 -translate-y-1/2 text-center";
/** The badges over the headings ("truly efficient" .. "peace of mind"), grey on the dark sections, light on the others. */
const BADGE =
  "absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-[0.08rem] px-[0.22rem] text-[0.34rem] leading-[0.64rem] font-semibold";
const BADGE_DARK = "bg-[#4c5059] text-white";
const BADGE_LIGHT = "bg-[#e3e4e9] text-black";
/** The labels beside the thin lines in the cutaway houses. */
const LABEL = "absolute whitespace-nowrap text-white";
/** The words on screens and tags drawn in perspective: a box skewed like the surface, its words placed inside it. */
const SKEWED = "absolute origin-top-left whitespace-nowrap text-white";
const ON_SKEW = "absolute -translate-x-1/2 -translate-y-1/2 text-center";

/** sec4: zero waiting, zero cold water, zero interference: each word starts in its gold 0 (drawn here, open on its
 * right like orvibo.com's), the line under it centred on the 0. */
const ZEROS = [
  { word: "s4.wait", desc: "s4.waitDesc", centre: "left-[3.6rem]" },
  { word: "s4.cold", desc: "s4.coldDesc", centre: "left-[5.44rem]" },
  { word: "s4.clash", desc: "s4.clashDesc", centre: "left-[7.42rem]" },
] as const;

/** sec4: where the hot water arrives, beside the lines the picture keeps. */
const TAPS = [
  { key: "s4.shower", at: "left-[14.42rem] top-[5.165rem]" },
  { key: "s4.tub", at: "left-[15.31rem] top-[5.85rem]" },
  { key: "s4.laundry", at: "left-[12.42rem] top-[6.005rem]" },
  { key: "s4.washroom", at: "right-[7.79rem] top-[7.485rem] text-right" },
  { key: "s4.kitchen", at: "left-[16rem] top-[7.68rem]" },
] as const;

/** sec5: the same, at the kitchen, the shower and the bathtub. */
const ROOMS = [
  { key: "s5.kitchen", at: "right-[12.75rem] top-[8.11rem] text-right" },
  { key: "s5.shower", at: "left-[10.95rem] top-[7.07rem]" },
  { key: "s5.tub", at: "right-[7.38rem] top-[8.37rem] text-right" },
] as const;

/** sec6: the labels in the winter house (hot water is labelled twice: at the kitchen and at the shower). */
const WINTER_HOUSE = [
  { id: "kitchen", key: "s6.water", at: "left-[8.18rem] top-[9.97rem]" },
  { id: "screen", key: "s6.screen", at: "left-[12.92rem] top-[9.64rem]" },
  {
    id: "shower",
    key: "s6.water",
    at: "right-[3.35rem] top-[9.3rem] -translate-y-full text-right",
  },
  { id: "floor", key: "s6.floor", at: "left-[8.78rem] top-[12.85rem]" },
] as const;

/** sec6: the two cards under the house. */
const WINTER = [
  { title: "s6.coldTitle", desc: "s6.coldDesc", centre: "left-[5.625rem]" },
  { title: "s6.nightTitle", desc: "s6.nightDesc", centre: "left-[13.5rem]" },
] as const;

/** sec8: the room tags on the floor plan, tilted with it (top left corner of each tag). */
const ROOM_TAGS = [
  {
    room: "s8.master",
    temp: "s8.masterTemp",
    at: "left-[10.76rem] top-[15.62rem]",
  },
  {
    room: "s8.dining",
    temp: "s8.diningTemp",
    at: "left-[9.09rem] top-[16.25rem]",
  },
  {
    room: "s8.second",
    temp: "s8.secondTemp",
    at: "left-[11.49rem] top-[16.33rem]",
  },
  {
    room: "s8.living",
    temp: "s8.livingTemp",
    at: "left-[10.37rem] top-[16.89rem]",
  },
] as const;

/** sec8: the tablet's tabs, in the tilted screen's own coordinates. */
const TABS = [
  { key: "s8.week", at: "left-[1.65rem]", active: true },
  { key: "s8.month", at: "left-[1.98rem]", active: false },
  { key: "s8.year", at: "left-[2.3rem]", active: false },
] as const;

/** sec8: what the voice card hears and does. */
const VOICE = [
  { key: "s8.hello", at: "left-[13.78rem] top-[13.405rem]" },
  { key: "s8.acSet", at: "left-[15.76rem] top-[13.765rem]" },
  { key: "s8.floorOn", at: "left-[13.95rem] top-[14.4rem]" },
] as const;

/** sec9: the four ways to install it, a name in each orange pill and a line under each picture. */
const OPTIONS = [
  {
    title: "s9.option1",
    desc: "s9.option1Desc",
    centre: "left-[3.9rem]",
    top: "top-[20.29rem]",
  },
  {
    title: "s9.option2",
    desc: "s9.option2Desc",
    centre: "left-[7.7rem]",
    top: "top-[20.29rem]",
  },
  {
    title: "s9.option3",
    desc: "s9.option3Desc",
    centre: "left-[11.55rem]",
    top: "top-[20.17rem]",
  },
  {
    title: "s9.option4",
    desc: "s9.option4Desc",
    centre: "left-[15.36rem]",
    top: "top-[20.17rem]",
  },
] as const;

/** sec10: the two cards over their photos. */
const COMFORT = [
  { title: "s10.babyTitle", desc: "s10.babyDesc", centre: "left-[5.67rem]" },
  { title: "s10.skinTitle", desc: "s10.skinDesc", centre: "left-[13.54rem]" },
] as const;

/** sec11: the four cards over their photos. */
const FRESH = [
  {
    title: "s11.flowTitle",
    desc: "s11.flowDesc",
    at: "left-[5.6rem] top-[17.845rem]",
  },
  {
    title: "s11.co2Title",
    desc: "s11.co2Desc",
    at: "left-[13.5rem] top-[17.845rem]",
  },
  {
    title: "s11.quietTitle",
    desc: "s11.quietDesc",
    at: "left-[5.6rem] top-[24.55rem]",
  },
  {
    title: "s11.filterTitle",
    desc: "s11.filterDesc",
    at: "left-[13.5rem] top-[24.55rem]",
  },
] as const;

/** sec11: what the green figures in the filter photo stand for, under each figure. */
const STATS = [
  { key: "s11.stat1", at: "top-[27.38rem]" },
  { key: "s11.stat2", at: "top-[28.32rem]" },
  { key: "s11.stat3", at: "top-[29.24rem]" },
] as const;

/** sec12: the four ways to control it, words over each card's photo. */
const CONTROLS = [
  {
    title: "s12.screen",
    desc: "s12.screenDesc",
    at: "left-[5.62rem] top-[13.71rem]",
  },
  {
    title: "s12.knob",
    desc: "s12.knobDesc",
    at: "left-[13.5rem] top-[13.71rem]",
  },
  {
    title: "s12.butler",
    desc: "s12.butlerDesc",
    at: "left-[5.62rem] top-[20.13rem]",
  },
  {
    title: "s12.app",
    desc: "s12.appDesc",
    at: "left-[13.5rem] top-[20.13rem]",
  },
] as const;

/** sec13: the four parts, words at each card's top left in set lines, each line ending before the card's picture
 * (the valve's title starts its second line below the bracket by the pipe). */
const PARTS = [
  {
    title: "s13.compressor",
    desc: "s13.compressorDesc",
    at: "left-[2.6rem] top-[5.95rem]",
  },
  {
    title: "s13.valve",
    desc: "s13.valveDesc",
    at: "left-[10.42rem] top-[5.95rem]",
  },
  {
    title: "s13.motor",
    desc: "s13.motorDesc",
    at: "left-[2.59rem] top-[9.9rem]",
  },
  {
    title: "s13.tank",
    desc: "s13.tankDesc",
    at: "left-[10.41rem] top-[9.9rem]",
  },
] as const;

/** sec14: the captions under the four factory photos. */
const CHECKS = [
  { key: "s14.nitrogen", centre: "left-[3.725rem]" },
  { key: "s14.online", centre: "left-[7.625rem]" },
  { key: "s14.parts", centre: "left-[11.525rem]" },
  { key: "s14.extreme", centre: "left-[15.425rem]" },
] as const;

/** sec17: the six installation steps, each beside its number in the picture. */
const STEPS = [
  { key: "s17.step1", at: "left-[5.31rem] top-[14.45rem]" },
  { key: "s17.step2", at: "left-[9.1rem] top-[14.45rem]" },
  { key: "s17.step3", at: "left-[13.18rem] top-[14.45rem]" },
  { key: "s17.step4", at: "left-[5.31rem] top-[15.65rem]" },
  { key: "s17.step5", at: "left-[9.1rem] top-[15.65rem]" },
  { key: "s17.step6", at: "left-[13.18rem] top-[15.65rem]" },
] as const;

/** sec18: the specification table, four columns of five rows, as orvibo.com lays it out. */
const SPECS = [
  "supply",
  "grade",
  "inputPower",
  "inputCurrent",
  "refrigerant",
  "charge",
  "waterResistance",
  "size",
  "netWeight",
  "operatingWeight",
  "noiseA35",
  "noiseW41",
  "noiseW35",
  "shock",
  "water",
  "overpressure",
  "maxPressure",
  "exchanger",
  "cspf",
  "type",
] as const;

export function W180Overview({ locale, text, common }: ProductViewProps) {
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
        {/* sec1: the W180 and its storage module by a lake at night */}
        <section
          className={cn("relative h-[11.47rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec1.webp`)}
        >
          <p className="sr-only">{t("alt.s1")}</p>
          <div className={FRAME}>
            <div className="absolute top-[5.1rem] left-[5.9rem] flex w-[7rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
              <p className="rounded-full border border-[#8c8c8c] px-[0.3rem] text-[0.27rem] leading-[0.54rem] font-semibold text-[#b7b7b7]">
                {t("s1.name")}
              </p>
              <h1 className="mt-[0.3rem] text-[0.6rem] leading-[0.78rem] font-medium text-[#fcfcfc]">
                {t("s1.title")}
              </h1>
              <p className="mt-[0.28rem] text-[0.25rem] leading-[0.36rem] text-[#b6b6b6]">
                {t("s1.uses")}
              </p>
            </div>
          </div>
        </section>
        {/* sec2: the academician, with W180's own lab photo (the words are the shared research.* ones) */}
        <section
          className={cn("relative h-[10.07rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec2.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.155rem] text-[0.5rem] leading-[0.66rem]",
              )}
            >
              {t("research.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.02rem] text-[0.3rem] leading-[0.4rem] text-[#dadada]",
              )}
            >
              {t("research.lab")}
            </p>
            <div className="absolute top-[3.6rem] left-[15.12rem] w-[1.8rem] text-white">
              <h3 className="text-[0.37rem] leading-[0.48rem]">
                {t("research.name")}
              </h3>
              <p className="mt-[0.06rem] text-[0.14rem] leading-[0.2rem] font-medium text-[#ceced0]">
                {t("research.bio")}
              </p>
            </div>
            {/* the two tags in the lab, one each side of the robot */}
            <p className="absolute top-[7.19rem] right-[15.25rem] -translate-y-1/2 whitespace-nowrap rounded-[0.08rem] bg-white/10 px-[0.16rem] text-[0.22rem] leading-[0.54rem] text-[#a9aeb4]">
              {t("s2.ai")}
            </p>
            <p className="absolute top-[7.765rem] left-[9.89rem] w-max max-w-[1.95rem] -translate-y-1/2 text-balance rounded-[0.08rem] bg-white/10 px-[0.16rem] py-[0.1rem] text-[0.2rem] leading-[0.28rem] text-[#aaaeb5]">
              {t("s2.energy")}
            </p>
            <div className="absolute inset-x-0 top-[8.81rem] mx-auto w-[14.2rem] text-balance text-center text-[0.22rem] leading-[0.38rem] text-[#aaaeb4]">
              <p>{t("research.tech")}</p>
              <p>{t("s2.patents")}</p>
            </div>
          </div>
        </section>
        <CctvCardBanner locale={locale} text={text} />
        {/* sec3: free hot water in summer, HeatCycle heat recovery */}
        <section
          className={cn("relative h-[14.28rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec3.webp`)}
        >
          <p className="sr-only">{t("alt.s3")}</p>
          <div className={FRAME}>
            <p className={cn(BADGE, BADGE_DARK, "top-[1.24rem]")}>
              {t("s3.badge")}
            </p>
            <h2
              className={cn(
                TITLE,
                "top-[2.95rem] text-[0.5rem] leading-[1.01rem]",
              )}
            >
              {rich("s3.title", "")}
            </h2>
            <div className="absolute top-[5.45rem] left-[1.89rem] w-[9.6rem]">
              <h3 className="text-[0.46rem] leading-[0.6rem] text-white">
                {t("s3.heatcycle")}
              </h3>
              <p className="mt-[0.26rem] text-[0.24rem] leading-[0.42rem] text-[#aaaeb4]">
                {t("s3.desc")}
              </p>
            </div>
            {/* the two cards: the integrated HVAC keeps the heat, a conventional AC throws it out */}
            <div className="absolute top-[9.09rem] left-[3.335rem] w-[2.7rem] -translate-x-1/2 text-center">
              <h3 className="text-[0.18rem] leading-[0.26rem] font-semibold text-white">
                {t("s3.ours")}
              </h3>
              <p className="mt-[0.02rem] text-[0.12rem] leading-[0.16rem] text-[#98a0b3]">
                {t("s3.oursDesc")}
              </p>
            </div>
            <div className="absolute top-[9.37rem] left-[5.92rem] w-[2.3rem] -translate-x-1/2 text-center">
              <h3 className="text-[0.2rem] leading-[0.3rem] text-white">
                {t("s3.other")}
              </h3>
              <p className="mt-[0.02rem] text-[0.12rem] leading-[0.16rem] text-[#98a0b3]">
                {t("s3.otherDesc")}
              </p>
            </div>
            <p
              className={cn(
                LABEL,
                "top-[10.35rem] left-[3.68rem] -translate-y-1/2 text-[0.12rem] leading-[0.16rem] font-semibold",
              )}
            >
              {t("s3.indoorHeat")}
            </p>
            <p
              className={cn(
                LABEL,
                "top-[11.77rem] left-[3.5rem] -translate-y-1/2 text-[0.12rem] leading-[0.16rem] font-semibold",
              )}
            >
              {t("s3.hotWater")}
            </p>
            <p
              className={cn(
                LABEL,
                "top-[11.05rem] left-[5.1rem] -translate-y-1/2 text-[0.12rem] leading-[0.16rem] font-semibold",
              )}
            >
              {t("s3.ventOut")}
            </p>
            <p className="absolute top-[11.05rem] left-[6.47rem] w-[0.62rem] -translate-y-1/2 text-balance text-[0.12rem] leading-[0.15rem] font-semibold text-white">
              {t("s3.indoorHeat")}
            </p>
            <p
              className={cn(
                "absolute top-[10.4rem] left-[15.87rem] whitespace-nowrap text-[0.32rem] leading-[0.4rem] font-semibold text-white [text-shadow:0_0_0.06rem_rgb(0_0_0/0.35)]",
                CENTRE,
              )}
            >
              {t("s3.recovery")}
            </p>
            <p className="absolute top-[12.82rem] left-[1.96rem] w-[15.3rem] text-[0.15rem] leading-[0.24rem] text-[#5d5e62]">
              {t("note.summer")}
            </p>
          </div>
        </section>
        {/* sec4: pressurized storage, the same temperature on every floor */}
        <section
          className={cn("relative h-[10.31rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec4.webp`)}
        >
          <p className="sr-only">{t("alt.s4")}</p>
          <div className={FRAME}>
            <div className="absolute inset-x-0 top-[0.98rem] text-center">
              <h2 className="text-[0.4rem] leading-[0.52rem] font-semibold text-white">
                {t("s4.title")}
              </h2>
              <p className="mx-auto mt-[0.22rem] w-[15rem] text-[0.25rem] leading-[0.42rem] text-[#aaaeb5]">
                {t("s4.desc")}
              </p>
            </div>
            <svg
              aria-hidden="true"
              viewBox="0 0 449 100"
              className="absolute top-[5.54rem] left-[3.28rem] h-[1rem] w-[4.49rem]"
            >
              <defs>
                <linearGradient id="w180-gold">
                  <stop offset="0" stopColor="#b39276" />
                  <stop offset="1" stopColor="#f1e1c8" />
                </linearGradient>
              </defs>
              {[0, 184, 384].map((x) => (
                <path
                  key={x}
                  transform={`translate(${x})`}
                  fill="url(#w180-gold)"
                  d="M62.82 32A32.5 50 0 1 0 62.82 68H47.79A17.5 37 0 1 1 47.79 32Z"
                />
              ))}
            </svg>
            {ZEROS.map((zero) => (
              <Fragment key={zero.word}>
                <p
                  className={cn(
                    "absolute top-[6.04rem] -translate-y-1/2 whitespace-nowrap text-[0.26rem] leading-[0.34rem] font-medium text-white",
                    zero.centre,
                  )}
                >
                  {t(zero.word)}
                </p>
                <p
                  className={cn(
                    "absolute top-[6.645rem] -translate-x-1/2 whitespace-nowrap text-center text-[0.22rem] leading-[0.33rem] text-[#aaaeb5]",
                    zero.centre,
                  )}
                >
                  {t(zero.desc)}
                </p>
              </Fragment>
            ))}
            {TAPS.map((tap) => (
              <p
                key={tap.key}
                className={cn(
                  LABEL,
                  "-translate-y-1/2 text-[0.12rem] leading-[0.16rem]",
                  tap.at,
                )}
              >
                {t(tap.key)}
              </p>
            ))}
          </div>
        </section>
        {/* sec5: smart zero cold water */}
        <section
          className={cn("relative h-[14.04rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec5.webp`)}
        >
          <p className="sr-only">{t("alt.s5")}</p>
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.72rem] text-[0.4rem] leading-[0.52rem]",
              )}
            >
              {t("s5.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.88rem] text-[0.257rem] leading-[0.455rem] text-[#aaaeb4]",
              )}
            >
              {rich("s5.desc", "")}
            </p>
            {/* the woman's request, its tail pointing down at her (the bubble ends at the same spot in both languages), and
                the control screen's reply */}
            <p className="absolute top-[7.96rem] right-[14.6rem] -translate-y-full whitespace-nowrap rounded-[0.3rem] bg-[#b39478]/90 px-[0.24rem] py-[0.13rem] text-[0.2rem] leading-[0.3rem] text-white after:absolute after:top-full after:right-[0.43rem] after:border-x-[0.07rem] after:border-t-[0.1rem] after:border-x-transparent after:border-t-[#b39478]/90">
              {t("s5.ask")}
            </p>
            <p className="absolute top-[7.7rem] left-[7.9rem] -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-full bg-[#96714a]/90 px-[0.24rem] text-[0.2rem] leading-[0.56rem] text-white after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-x-[0.07rem] after:border-t-[0.1rem] after:border-x-transparent after:border-t-[#96714a]/90">
              {t("s5.reply")}
            </p>
            {ROOMS.map((room) => (
              <p
                key={room.key}
                className={cn(
                  LABEL,
                  "text-[0.19rem] leading-[0.26rem]",
                  room.at,
                )}
              >
                {t(room.key)}
              </p>
            ))}
            <div className="absolute top-[12.59rem] left-[1.935rem] w-[15.3rem] text-[0.157rem] leading-[0.23rem] text-[#616265]">
              <p>{t("note.zeroCold")}</p>
              <p>{t("note.steadyHot")}</p>
            </div>
          </div>
        </section>
        {/* sec6: free heat from the air in winter */}
        <section
          className={cn("relative h-[26.51rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec6.webp`)}
        >
          <p className="sr-only">{t("alt.s6")}</p>
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.88rem] text-[0.41rem] leading-[0.54rem] font-medium",
              )}
            >
              {rich(
                "s6.title",
                "bg-gradient-to-r from-[#e3c6a8] to-[#f6ebdf] bg-clip-text text-transparent",
              )}
            </h2>
            <p
              className={cn(
                TITLE,
                "top-[2.54rem] text-[0.32rem] leading-[0.42rem] font-medium",
              )}
            >
              {t("s6.sub")}
            </p>
            <p
              className={cn(
                DESC,
                "top-[3.64rem] text-[0.27rem] leading-[0.453rem] text-[#aaaeb4]",
              )}
            >
              {t("s6.desc")}
            </p>
            {WINTER_HOUSE.map((label) => (
              <p
                key={label.id}
                className={cn(
                  LABEL,
                  "text-[0.24rem] leading-[0.3rem]",
                  label.at,
                )}
              >
                {t(label.key)}
              </p>
            ))}
            {WINTER.map((card) => (
              <div
                key={card.title}
                className={cn(
                  "absolute top-[19.7rem] w-[7rem] -translate-x-1/2 -translate-y-1/2 text-center",
                  card.centre,
                )}
              >
                <h3 className="text-balance text-[0.29rem] leading-[0.4rem] font-medium text-white">
                  {t(card.title)}
                </h3>
                <p className="mt-[0.2rem] text-[0.21rem] leading-[0.342rem] text-[#babec4]">
                  {t(card.desc)}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* sec7: savings */}
        <section
          className={cn("relative h-[14.17rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec7.webp`)}
        >
          <div className={FRAME}>
            <p
              className={cn(
                BADGE,
                BADGE_DARK,
                "top-[1.765rem] px-[0.28rem] text-[0.4rem] leading-[0.77rem]",
              )}
            >
              {t("s7.badge")}
            </p>
            <h2
              className={cn(
                TITLE,
                "top-[3.06rem] text-[0.56rem] leading-[0.76rem]",
              )}
            >
              {rich("s7.title", "")}
            </h2>
            <p className="absolute top-[5.08rem] left-[1.925rem] text-[0.35rem] leading-[0.625rem] font-semibold text-white">
              {t("s7.mode")}
            </p>
            <p className="absolute top-[6.78rem] left-[1.95rem] text-[0.24rem] leading-[0.445rem] text-[#aaaeb5]">
              {t("s7.desc")}
            </p>
            {/* beside the big 36000 the picture keeps */}
            <p className="absolute top-[6rem] right-[8.35rem] -translate-y-1/2 bg-gradient-to-b from-[#dcdde0] to-[#83868d] bg-clip-text text-right text-[0.6rem] leading-[0.86rem] font-bold text-transparent">
              {t("s7.fiveYears")}
            </p>
            {/* the chart card */}
            <p
              className={cn(
                "absolute top-[9.13rem] left-[4.63rem] whitespace-nowrap text-[0.22rem] leading-[0.3rem] font-semibold text-[#ebcca8]",
                CENTRE,
              )}
            >
              {t("s7.chartTitle")}
            </p>
            <p className="absolute top-[11.13rem] left-[3.71rem] w-[2.2rem] -translate-x-1/2 text-balance text-center text-[0.15rem] leading-[0.2rem] font-medium text-white">
              {t("s7.chartStandard")}
            </p>
            <p className="absolute top-[11.13rem] left-[6.03rem] w-[2.3rem] -translate-x-1/2 text-balance text-center text-[0.15rem] leading-[0.2rem] font-semibold text-white">
              {t("s7.chartOrvibo")}
            </p>
            {/* the tag on the control screen in the house, its line running on to the screen */}
            <p className="absolute top-[9.11rem] right-[6.32rem] -translate-y-1/2 whitespace-nowrap rounded-full bg-[#fddfa1] px-[0.1rem] text-[0.15rem] leading-[0.29rem] text-[#392616]">
              {t("s7.tag")}
            </p>
            <p className="absolute top-[12.9rem] left-[1.88rem] w-[15.4rem] -translate-y-1/2 text-[0.16rem] leading-[0.22rem] text-[#5e5f64]">
              {t("note.lab")}
            </p>
          </div>
        </section>
        {/* sec8: the technology, two grids of cards */}
        <section
          className={cn("relative h-[19.71rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec8.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.96rem] text-[0.6rem] leading-[0.78rem]",
              )}
            >
              {t("s8.title")}
            </h2>
            {/* the 3-in-1 card: three spheres */}
            <p
              className={cn(
                "absolute top-[3.78rem] left-[4.52rem] whitespace-nowrap text-[0.28rem] leading-[0.36rem] font-medium text-[#9699a7]",
                CENTRE,
              )}
            >
              {t("s8.ac")}
            </p>
            <p
              className={cn(
                "absolute top-[5.22rem] left-[4.55rem] w-[2.6rem] text-balance text-[0.28rem] leading-[0.4rem] font-medium text-white",
                CENTRE,
              )}
            >
              {t("s8.threeInOne")}
            </p>
            <p
              className={cn(
                "absolute top-[6rem] left-[2.98rem] whitespace-nowrap text-[0.28rem] leading-[0.36rem] text-[#9c8d97]",
                CENTRE,
              )}
            >
              {t("s8.water")}
            </p>
            <p
              className={cn(
                "absolute top-[6rem] left-[6.07rem] whitespace-nowrap text-[0.28rem] leading-[0.36rem] text-[#a29c9d]",
                CENTRE,
              )}
            >
              {t("s8.floor")}
            </p>
            <p
              className={cn(
                "absolute top-[8.25rem] left-[4.58rem] whitespace-nowrap text-[0.17rem] leading-[0.24rem] font-semibold text-white",
                CENTRE,
              )}
            >
              {t("s8.heatcycle")}
            </p>
            <h3 className="absolute top-[3.45rem] left-[7.83rem] w-[3.6rem] text-[0.27rem] leading-[0.36rem] font-semibold text-[#edf0f8]">
              {t("s8.dc")}
            </h3>
            <h3 className="absolute top-[3.45rem] left-[12.13rem] w-[4.9rem] text-[0.27rem] leading-[0.36rem] font-semibold text-[#fcf7f0]">
              {t("s8.floorHeat")}
            </h3>
            <h3 className="absolute top-[5.62rem] left-[12.13rem] w-[4.9rem] text-[0.27rem] leading-[0.36rem] font-semibold text-[#fcf5ec]">
              {t("s8.waterBoost")}
            </h3>
            <h2
              className={cn(
                TITLE,
                "top-[11.22rem] text-[0.6rem] leading-[0.78rem]",
              )}
            >
              {t("s8.aiTitle")}
            </h2>
            <p
              className={cn(
                "absolute top-[14.57rem] left-[4.6rem] whitespace-nowrap text-[0.22rem] leading-[0.3rem] font-medium text-white",
                CENTRE,
              )}
            >
              {t("s8.homeAi")}
            </p>
            <h3 className="absolute top-[17.17rem] left-[2.38rem] -translate-y-1/2 text-[0.28rem] leading-[0.4rem] font-semibold text-[#fdfaf6]">
              {t("s8.dynamic")}
            </h3>
            <h3
              className={cn(
                "absolute top-[12.97rem] left-[10.17rem] whitespace-nowrap text-[0.27rem] leading-[0.36rem] font-semibold text-[#f3fcfc]",
                CENTRE,
              )}
            >
              {t("s8.monitor")}
            </h3>
            {/* the tablet's screen, tilted 12° like the picture's */}
            <div
              className={cn(SKEWED, "top-[14.5rem] left-[8.5rem] -skew-y-12")}
            >
              {TABS.map((tab) => (
                <span
                  key={tab.key}
                  className={cn(
                    ON_SKEW,
                    "top-[-0.16rem] text-[0.075rem] leading-[0.1rem]",
                    tab.active ? "text-white" : "text-white/70",
                    tab.at,
                  )}
                >
                  {t(tab.key)}
                </span>
              ))}
              <span
                className={cn(
                  ON_SKEW,
                  "top-[0.139rem] left-[1.98rem] text-[0.06rem] leading-[0.08rem] text-white/70",
                )}
              >
                {t("s8.weekUse")}
              </span>
              <span
                className={cn(
                  ON_SKEW,
                  "top-[0.261rem] left-[1.98rem] text-[0.12rem] leading-[0.14rem]",
                )}
              >
                {t("s8.weekValue")}
                <span className="ml-[0.01rem] text-[0.05rem]">
                  {t("s8.unit")}
                </span>
              </span>
              <span
                className={cn(
                  ON_SKEW,
                  "top-[0.27rem] left-[0.47rem] text-[0.2rem] leading-[0.22rem]",
                )}
              >
                {t("s8.todayValue")}
                <span className="ml-[0.01rem] text-[0.06rem]">
                  {t("s8.unit")}
                </span>
              </span>
              <span
                className={cn(
                  ON_SKEW,
                  "top-[0.456rem] left-[0.5rem] text-[0.065rem] leading-[0.08rem] text-white/70",
                )}
              >
                {t("s8.today")}
              </span>
              <span className="absolute top-[0.92rem] left-[0.13rem] w-[0.84rem] -translate-y-1/2 whitespace-normal text-[0.06rem] leading-[0.085rem]">
                {t("s8.compare")}
              </span>
              <span className="absolute top-[1.338rem] left-[0.2rem] -translate-y-1/2 text-[0.07rem] leading-[0.09rem] text-white/70">
                {t("s8.cost")}
              </span>
              <span className="absolute top-[1.33rem] right-[-0.88rem] -translate-y-1/2 text-[0.12rem] leading-[0.14rem]">
                {t("s8.costValue")}
              </span>
            </div>
            {/* the room tags on the floor plan, tilted 15° with it */}
            {ROOM_TAGS.map((tag) => (
              <p
                key={tag.room}
                className={cn(
                  SKEWED,
                  "-skew-y-[15deg] rounded-[0.06rem] bg-[#8fc0a8]/70 px-[0.05rem] py-[0.03rem] text-center text-[0.1rem] leading-[0.13rem]",
                  tag.at,
                )}
              >
                <span className="block text-[0.14rem] leading-[0.17rem] font-medium">
                  {t(tag.temp)}
                </span>
                {t(tag.room)}
              </p>
            ))}
            <h3
              className={cn(
                "absolute top-[12.88rem] left-[15.22rem] whitespace-nowrap text-[0.2rem] leading-[0.28rem] font-semibold text-[#f0f3fc]",
                CENTRE,
              )}
            >
              {t("s8.voice")}
            </h3>
            {VOICE.map((voice) => (
              <p
                key={voice.key}
                className={cn(
                  "absolute -translate-y-1/2 whitespace-nowrap rounded-full bg-[#2b3142]/80 px-[0.1rem] text-[0.12rem] leading-[0.29rem] text-white",
                  voice.at,
                )}
              >
                {t(voice.key)}
              </p>
            ))}
            <h3 className="absolute top-[15.9rem] left-[13.3rem] -translate-y-1/2 text-[0.23rem] leading-[0.34rem] font-semibold text-[#fdfaf5]">
              {t("s8.zones")}
            </h3>
            {/* in the tilted glass frame */}
            <p
              className={cn(
                SKEWED,
                "top-[15.56rem] left-[15.06rem] w-[0.72rem] -skew-y-[20deg] text-center text-[0.09rem] leading-[0.12rem]",
              )}
            >
              {t("s8.frame")}
            </p>
          </div>
        </section>
        {/* sec9: the split design */}
        <section
          className={cn("relative h-[22.98rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec9.webp`)}
        >
          <p className="sr-only">{t("alt.s9")}</p>
          <div className={FRAME}>
            <p className={cn(BADGE, BADGE_DARK, "top-[1.86rem]")}>
              {t("s9.badge")}
            </p>
            <h2
              className={cn(
                TITLE,
                "top-[3.2rem] text-[0.48rem] leading-[0.63rem]",
              )}
            >
              {t("s9.title")}
            </h2>
            <div className="absolute top-[6.955rem] left-[1.89rem] w-[8.06rem]">
              <h3 className="text-[0.34rem] leading-[0.69rem] font-semibold text-white">
                {t("s9.fit")}
              </h3>
              <p className="mt-[0.39rem] text-[0.25rem] leading-[0.445rem] text-[#aaaeb5]">
                {rich("s9.desc", "")}
              </p>
            </div>
            <p className="absolute top-[12.25rem] left-[1.91rem] w-[7.9rem] text-[0.159rem] leading-[0.228rem] text-[#7b8089]">
              {t("note.size")}
            </p>
            {/* over the 75% the picture keeps */}
            <p className="absolute top-[11.42rem] left-[15rem] -translate-y-1/2 whitespace-nowrap bg-gradient-to-b from-white to-[#9da1a8] bg-clip-text text-[0.52rem] leading-[0.7rem] font-semibold text-transparent">
              {t("s9.smaller")}
            </p>
            {OPTIONS.map((option) => (
              <Fragment key={option.title}>
                <h3
                  className={cn(
                    "absolute top-[16.61rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[0.22rem] leading-[0.3rem] text-[#2f3235]",
                    option.centre,
                  )}
                >
                  {t(option.title)}
                </h3>
                <p
                  className={cn(
                    "absolute w-[3.3rem] -translate-x-1/2 text-balance text-center text-[0.17rem] leading-[0.29rem] font-medium text-white",
                    option.centre,
                    option.top,
                  )}
                >
                  {t(option.desc)}
                </p>
              </Fragment>
            ))}
          </div>
        </section>
        {/* sec10: comfort */}
        <section
          className={cn("relative h-[22.48rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec10.webp`)}
        >
          <div className={FRAME}>
            <p className={cn(BADGE, "top-[1.65rem] bg-white text-[#212b37]")}>
              {t("s10.badge")}
            </p>
            <h2
              className={cn(
                TITLE,
                "top-[2.95rem] text-[0.52rem] leading-[0.7rem]",
              )}
            >
              {t("s10.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[4.31rem] text-[0.26rem] leading-[0.46rem] text-white",
              )}
            >
              {t("s10.desc")}
            </p>
            {COMFORT.map((card) => (
              <div
                key={card.title}
                className={cn(
                  "absolute top-[14.75rem] w-[7.2rem] -translate-x-1/2 text-center",
                  card.centre,
                )}
              >
                <h3 className="text-[0.3rem] leading-[0.62rem] font-semibold text-white">
                  {t(card.title)}
                </h3>
                <p className="mt-[0.12rem] text-[0.2rem] leading-[0.34rem] font-medium text-[#babec4]">
                  {t(card.desc)}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* sec11: fresh air */}
        <section
          className={cn("relative h-[31.81rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec11.webp`)}
        >
          <div className={FRAME}>
            <p
              className={cn(
                BADGE,
                "top-[1.665rem] bg-[#e9dccb] text-[#57493e]",
              )}
            >
              {t("s11.badge")}
            </p>
            <h2
              className={cn(
                TITLE,
                "top-[3.05rem] text-[0.48rem] leading-[0.64rem]",
              )}
            >
              {t("s11.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[4.4rem] text-[0.26rem] leading-[0.451rem] text-white",
              )}
            >
              {t("s11.desc")}
            </p>
            {FRESH.map((card) => (
              <div
                key={card.title}
                className={cn(
                  "absolute w-[7.2rem] -translate-x-1/2 text-center",
                  card.at,
                )}
              >
                <h3 className="text-[0.29rem] leading-[0.39rem] font-semibold text-white">
                  {t(card.title)}
                </h3>
                <p className="mt-[0.2rem] text-[0.2rem] leading-[0.33rem] font-medium text-[#d5d5d5]">
                  {t(card.desc)}
                </p>
              </div>
            ))}
            {STATS.map((stat) => (
              <p
                key={stat.key}
                className={cn(
                  "absolute left-[14.49rem] w-[2.58rem] text-[0.17rem] leading-[0.22rem] font-medium text-[#a6a6a6]",
                  stat.at,
                )}
              >
                {t(stat.key)}
              </p>
            ))}
          </div>
        </section>
        {/* sec12: control */}
        <section
          className={cn("relative h-[27.91rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec12.webp`)}
        >
          <div className={FRAME}>
            <p className={cn(BADGE, BADGE_LIGHT, "top-[1.63rem]")}>
              {t("s12.badge")}
            </p>
            <h2
              className={cn(
                TITLE,
                "top-[2.756rem] text-[0.5rem] leading-[0.66rem]",
              )}
            >
              {t("s12.title")}
            </h2>
            {/* the sterilization card floating by the unit, tilted 12° */}
            <div
              className={cn(
                SKEWED,
                "top-[4.5rem] left-[15.32rem] w-[1.2rem] -skew-y-12",
              )}
            >
              <span
                className={cn(
                  ON_SKEW,
                  "top-[0.105rem] left-[0.6rem] text-[0.1rem] leading-[0.12rem]",
                )}
              >
                {t("s12.sterilize")}
              </span>
              <span
                className={cn(
                  ON_SKEW,
                  "top-[0.978rem] left-[0.6rem] text-[0.26rem] leading-[0.28rem] font-light",
                )}
              >
                25
                <span className="ml-[0.02rem] align-top text-[0.08rem] leading-[0.1rem]">
                  {t("s12.days")}
                </span>
              </span>
              <span
                className={cn(
                  ON_SKEW,
                  "top-[1.251rem] left-[0.6rem] text-[0.075rem] leading-[0.09rem] text-white/80",
                )}
              >
                {t("s12.next")}
              </span>
              <span
                className={cn(
                  ON_SKEW,
                  "top-[1.511rem] left-[0.6rem] text-[0.075rem] leading-[0.09rem] text-white/80",
                )}
              >
                {t("s12.last")}
              </span>
              <span
                className={cn(
                  ON_SKEW,
                  "top-[1.828rem] left-[0.6rem] text-[0.09rem] leading-[0.1rem]",
                )}
              >
                {t("s12.now")}
              </span>
            </div>
            <div className="absolute top-[6.51rem] left-[3.41rem] w-[6.5rem]">
              <h3 className="text-[0.38rem] leading-[0.69rem] font-semibold text-white">
                {t("s12.heading")}
              </h3>
              <p className="mt-[0.39rem] text-[0.23rem] leading-[0.45rem] font-medium text-white">
                {t("s12.desc")}
              </p>
            </div>
            {CONTROLS.map((card) => (
              <div
                key={card.title}
                className={cn(
                  "absolute w-[7.2rem] -translate-x-1/2 text-center",
                  card.at,
                )}
              >
                <h3 className="text-[0.3rem] leading-[0.4rem] font-semibold text-white">
                  {t(card.title)}
                </h3>
                <p className="mt-[0.26rem] text-balance text-[0.2rem] leading-[0.26rem] font-medium text-[#d5d5d5]">
                  {t(card.desc)}
                </p>
              </div>
            ))}
            {/* on the 7-inch screen in the first photo, over its 26° */}
            <p
              className={cn(
                "absolute top-[15.7rem] left-[6.81rem] whitespace-nowrap text-[0.1rem] leading-[0.12rem] text-white/90",
                CENTRE,
              )}
            >
              {t("s12.ac")}
            </p>
            {/* what the family asks, in the two photos */}
            <p className="absolute top-[16.56rem] left-[5.05rem] -translate-y-1/2 whitespace-nowrap rounded-[0.28rem] bg-white/70 px-[0.18rem] py-[0.08rem] text-[0.15rem] leading-[0.22rem] text-[#3b3127]">
              {t("s12.babyAsk")}
            </p>
            <p className="absolute top-[16.935rem] left-[10.05rem] -translate-y-1/2 whitespace-nowrap rounded-[0.32rem] bg-white/70 px-[0.22rem] py-[0.1rem] text-[0.2rem] leading-[0.28rem] text-[#2e2d2e]">
              {t("s12.dryAsk")}
            </p>
          </div>
        </section>
        {/* sec13: the parts */}
        <section
          className={cn("relative h-[14.3rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec13.webp`)}
        >
          <div className={FRAME}>
            <p className={cn(BADGE, BADGE_LIGHT, "top-[1.87rem]")}>
              {t("s13.badge")}
            </p>
            <h2
              className={cn(
                TITLE,
                "top-[2.94rem] text-[0.5rem] leading-[0.66rem]",
              )}
            >
              {t("s13.title")}
            </h2>
            {PARTS.map((part) => (
              <div
                key={part.title}
                className={cn("absolute whitespace-nowrap", part.at)}
              >
                <h3 className="text-[0.24rem] leading-[0.34rem] font-semibold text-white">
                  {t(part.title)}
                </h3>
                <p className="mt-[0.12rem] text-[0.18rem] leading-[0.28rem] font-medium text-[#c9c9c9]">
                  {rich(part.desc, "")}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* sec14: the factory */}
        <section
          className={cn("relative h-[15.88rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec14.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.72rem] text-[0.5rem] leading-[0.66rem]",
              )}
            >
              {t("s14.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[4.045rem] text-[0.27rem] leading-[0.37rem] font-medium text-white",
              )}
            >
              {t("s14.caqi")}
            </p>
            {CHECKS.map((check) => (
              <p
                key={check.key}
                className={cn(
                  "absolute top-[13.97rem] w-[3.4rem] -translate-x-1/2 -translate-y-1/2 text-balance text-center text-[0.22rem] leading-[0.28rem] font-medium text-white",
                  check.centre,
                )}
              >
                {t(check.key)}
              </p>
            ))}
          </div>
        </section>
        {/* sec15: design */}
        <section
          className={cn("relative h-[16.74rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec15.webp`)}
        >
          <div className={FRAME}>
            <p className={cn(BADGE, BADGE_LIGHT, "top-[1.74rem]")}>
              {t("s15.badge")}
            </p>
            <h2
              className={cn(
                TITLE,
                "top-[2.806rem] text-[0.52rem] leading-[0.7rem]",
              )}
            >
              {t("s15.title")}
            </h2>
            <h3
              className={cn(
                TITLE,
                "top-[4.385rem] text-[0.4rem] leading-[0.53rem]",
              )}
            >
              {t("s15.team")}
            </h3>
            <p
              className={cn(
                DESC,
                "top-[5.44rem] text-[0.24rem] leading-[0.448rem] text-white",
              )}
            >
              {t("s15.desc")}
            </p>
          </div>
        </section>
        {/* sec16: the AirPro indoor unit */}
        <section
          className={cn("relative h-[10.82rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec16.webp`)}
        >
          <div className={FRAME}>
            <h2
              className={cn(
                TITLE,
                "top-[1.494rem] text-[0.36rem] leading-[0.48rem]",
              )}
            >
              {t("s16.title")}
            </h2>
            <p
              className={cn(
                DESC,
                "top-[2.875rem] text-[0.25rem] leading-[0.44rem] text-[#aaaeb5]",
              )}
            >
              {t("s16.desc")}
            </p>
          </div>
        </section>
        {/* sec17: installed by ORVIBO, a 10-year warranty */}
        <section
          className={cn("relative h-[21.12rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec17.webp`)}
        >
          <div className={FRAME}>
            <p className={cn(BADGE, "top-[1.77rem] bg-[#cecece] text-black")}>
              {t("s17.badge")}
            </p>
            <h2
              className={cn(
                TITLE,
                "top-[3.1rem] text-[0.5rem] leading-[0.66rem]",
              )}
            >
              {rich("s17.title", "")}
            </h2>
            <ol>
              {STEPS.map((step) => (
                <li
                  key={step.key}
                  className={cn(
                    "absolute -translate-y-1/2 whitespace-nowrap text-[0.23rem] leading-[0.34rem] font-semibold text-[#fce0c8]",
                    step.at,
                  )}
                >
                  {t(step.key)}
                </li>
              ))}
            </ol>
            {/* the two boxes under the steps: service, and the warranty */}
            <p
              className={cn(
                "absolute top-[17.03rem] left-[6.15rem] whitespace-nowrap text-[0.28rem] leading-[0.37rem] font-semibold text-white",
                CENTRE,
              )}
            >
              {t("s17.service")}
            </p>
            <p
              className={cn(
                "absolute top-[17.98rem] left-[6.15rem] whitespace-nowrap text-[0.43rem] leading-[0.55rem] font-bold text-[#ffe4c2]",
                CENTRE,
              )}
            >
              7×14
              <span className="ml-[0.06rem] text-[0.22rem] font-semibold">
                {t("s17.hoursUnit")}
              </span>
            </p>
            <p
              className={cn(
                "absolute top-[18.53rem] left-[6.15rem] whitespace-nowrap text-[0.25rem] leading-[0.33rem] font-semibold text-[#fff9f3]",
                CENTRE,
              )}
            >
              {t("s17.hotline")}
            </p>
            <p
              className={cn(
                "absolute top-[17.03rem] left-[13.1rem] whitespace-nowrap text-[0.28rem] leading-[0.37rem] font-semibold text-white",
                CENTRE,
              )}
            >
              {t("s17.carefree")}
            </p>
            <p
              className={cn(
                "absolute top-[18rem] left-[13.1rem] whitespace-nowrap text-[0.32rem] leading-[0.55rem] font-semibold text-[#eed3b5]",
                CENTRE,
              )}
            >
              {rich("s17.highest", "")}
            </p>
            <p
              className={cn(
                "absolute top-[18.53rem] left-[13.1rem] whitespace-nowrap text-[0.25rem] leading-[0.33rem] font-semibold text-[#fff9f3]",
                CENTRE,
              )}
            >
              {t("s17.warranty")}
            </p>
            <div className="absolute top-[19.45rem] left-[2.79rem] w-[14.4rem] text-[0.17rem] leading-[0.235rem] text-[#5c5d61]">
              <p>{t("note.tenYear")}</p>
              <p>{t("note.standard")}</p>
            </div>
          </div>
        </section>
        {/* sec18: specifications, in a card like orvibo.com's (its picture is only the card and its words) */}
        <section className="relative h-[17.8rem] overflow-hidden bg-gradient-to-b from-[#1a1b1f] to-black to-50%">
          <div className={FRAME}>
            <div className="absolute top-[1.44rem] left-[1.89rem] h-[13.88rem] w-[15.4rem] rounded-[0.1rem] bg-[#1c1c1c]" />
            <h2 className="absolute top-[2.69rem] left-[3.12rem] -translate-y-1/2 whitespace-nowrap text-[0.36rem] leading-[0.48rem] font-medium text-white">
              {t("s18.title")}
            </h2>
            <p className="absolute top-[3.84rem] left-[3.1rem] flex -translate-y-1/2 items-baseline gap-[0.12rem] whitespace-nowrap">
              <span className="text-[0.22rem] text-[#999999]">
                {t("s18.seriesLabel")}
              </span>
              <span className="text-[0.24rem] font-medium text-white">
                {t("s18.series")}
              </span>
            </p>
            <p className="absolute top-[3.84rem] left-[10.98rem] flex -translate-y-1/2 items-baseline gap-[0.12rem] whitespace-nowrap">
              <span className="text-[0.22rem] text-[#999999]">
                {t("s18.modelLabel")}
              </span>
              <span className="text-[0.24rem] font-medium text-white">
                {t("s18.model")}
              </span>
            </p>
            <div className="absolute top-[4.43rem] left-[2.56rem] h-px w-[14rem] bg-[#7a7a7a]" />
            {/* labels sit on the line above their value, so a label in two lines grows upwards */}
            <dl className="absolute top-[5.065rem] left-[3.03rem] grid w-[14.29rem] grid-cols-4 auto-rows-[1.95rem]">
              {SPECS.map((spec) => (
                <div key={spec} className="pr-[0.3rem]">
                  <dt className="flex h-[0.56rem] flex-col justify-end text-[0.2rem] leading-[0.28rem] text-[#999999]">
                    {t(`spec.${spec}`)}
                  </dt>
                  <dd className="mt-[0.15rem] text-[0.22rem] leading-[0.3rem] text-white">
                    {t(`spec.${spec}Value`)}
                  </dd>
                </div>
              ))}
            </dl>
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
