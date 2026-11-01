import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import { type CSSProperties, Fragment, type ReactNode } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. Its second picture is the CCTV banner MixStation's phone page shows too, so it is that
 * page's picture; its last (the spec table on a plain card) is HTML here. */
const PIC = "/orvibo/products/w180/phone";
const CCTV = "/orvibo/products/mixstation/phone/p02.webp";
const HEIGHT = {
  p01: 10.56,
  p03: 12.58,
  p04: 15.8,
  p05: 5.8,
  p06: 11.33,
  p07: 10.29,
  p08: 9.36,
  p09: 13.94,
  p10: 15.29,
  p11: 9.17,
  p12: 8.43,
  p13: 16.69,
  p14: 10.82,
  p15: 23.03,
  p16: 15.44,
  p17: 17.37,
  p18: 13.39,
  p19: 22.72,
  p20: 16.93,
  p21: 17.93,
  p22: 10.48,
  p23: 5.68,
  p24: 12.83,
} as const;
type Slice = keyof typeof HEIGHT;
/** Where p04's unit ends and its note begins, and where p24's service cards end and its notes begin (set below
 * them in HTML: they are long). */
const P04_CUT = 15.0;
const P24_CUT = 11.36;

const CENTRE = "-translate-x-1/2 -translate-y-1/2";
/** Words over a photo. */
const SHADE = "[text-shadow:0_0_0.06rem_rgba(0,0,0,0.75)]";
/** A spot in rem: the left edge (or, with CENTRE, the middle) and the top (or the middle). */
const spot = (x: number, y: number, width?: number): CSSProperties => ({
  left: `${x}rem`,
  top: `${y}rem`,
  width: width === undefined ? undefined : `${width}rem`,
});

/** The section badges: the picture, the badge's key, its middle (rem) and its colours. */
const BADGES = {
  p04: ["s3.badge", 0.96, "bg-[#4c5059] text-white"],
  p10: ["s7.badge", 1.63, "bg-[#394659] text-white"],
  p13: ["s9.badge", 1.72, "bg-[#39455c] text-white"],
  p15: ["s10.badge", 1.67, "bg-[#58677a] text-white"],
  p16: ["s11.badge", 1.14, "bg-[#e7e5e6] text-[#8a765e]"],
  p18: ["s12.badge", 1.4, "bg-[#e3e4e9] text-black"],
  p20: ["s13.badge", 1.5, "bg-white text-[#0e0f11]"],
  p22: ["s15.badge", 1.36, "bg-white text-black"],
  p24: ["s17.badge", 1.1, "bg-white text-black"],
} as const;
/** The comparison diagram's arrow words (05): the key, the middle and the colour. */
const ARROWS = [
  ["indoorHeat", 3.08, 2.22, "text-[#fef5ed]"],
  ["hotWater", 2.73, 4.08, "text-[#fff2cf]"],
  ["ventOut", 4.54, 3.14, "text-[#fef1e7]"],
  ["indoorHeat", 6.3, 3.14, "text-[#eef0f6]"],
] as const;
/** The house's hot water taps (06): the key, the left edge and the middle. */
const TAPS = [
  ["shower", 4.26, 4.64],
  ["tub", 4.9, 5.14],
  ["laundry", 2.8, 5.27],
  ["washroom", 1.68, 6.34],
  ["kitchen", 5.4, 6.48],
] as const;
/** The three zeros (06): the word (it starts in the zero's open side, as orvibo.com sets it), the zero's left edge
 * and the column's middle. */
const ZEROS = [
  ["wait", 1.36, 1.72],
  ["cold", 3.22, 3.56],
  ["clash", 5.19, 5.56],
] as const;
/** The winter house's tags (08): the key, the side its line is on, the edge beside the line and the middle. */
const WINTER_TAGS = [
  ["water", "left", 3.1, 6.28],
  ["water", "right", 6.12, 5.76],
  ["screen", "left", 4.94, 6.24],
  ["floor", "left", 3.34, 7.44],
] as const;
/** The new-energy tiles' captions (11): the key, the left edge, the middle and the width. */
const ENERGY_TILES = [
  ["dc", 4.21, 2.07, 2.5],
  ["waterBoost", 1.02, 6.22, 2.8],
  ["floorHeat", 4.23, 6.45, 2.5],
] as const;
/** The three-in-one orb's words (11): the key, the middle and the colour. */
const ORB = [
  ["ac", 2.18, 2.14, "text-[#a0a5b8]"],
  ["water", 1.18, 3.6, "text-[#b09aa2]"],
  ["floor", 3.21, 3.59, "text-[#bcb1ad]"],
] as const;
/** The voice tile's bubbles (12): the key, the left edge, the middle and the colour. */
const VOICE = [
  ["hello", 0.86, 4.24, "text-[#e8ebf2]"],
  ["acSet", 2.7, 4.33, "text-[#c4c8d0]"],
  ["floorOn", 1.33, 4.64, "text-[#edeff7]"],
] as const;
/** The install options (14): the middle of each card. */
const OPTIONS = [
  [1, 2.22, 1.28, 4.73],
  [2, 5.22, 1.28, 4.73],
  [3, 2.22, 5.55, 8.96],
  [4, 5.22, 5.55, 8.96],
] as const;
/** The comfort cards (15): the key and their words' top. */
const COMFORT = [
  ["baby", 10.26],
  ["skin", 16.48],
] as const;
/** The fresh-air cards (17): the key and their words' top. */
const FRESH = [
  ["co2", 0.44],
  ["quiet", 5.9],
] as const;
/** The fresh-air figures' captions (17): the middle of each. */
const STATS = [13.36, 14.28, 15.23] as const;
/** The control cards (19): the key, their words' top, and what someone asks in the photo with its middle. */
const CONTROLS = [
  ["screen", 0.98, "babyAsk", 4.64, 3.6],
  ["knob", 6.18, "dryAsk", 2.48, 9.17],
  ["butler", 11.66, null, 0, 0],
  ["app", 17.02, null, 0, 0],
] as const;
/** The core parts (20): the key, the left edge and the top. */
const PARTS = [
  ["compressor", 0.94, 4.93],
  ["valve", 4.08, 4.93],
  ["motor", 0.94, 10.58],
  ["tank", 4.08, 10.6],
] as const;
/** The factory photos' captions (21): the key and the middle. */
const FACTORY = [
  ["nitrogen", 2.14, 12.27],
  ["online", 5.34, 12.27],
  ["parts", 2.14, 16.43],
  ["extreme", 5.34, 16.45],
] as const;
/** The install steps (24): the left of each step's lines and the row's top. */
const STEPS = [
  [1.39, 8.3],
  [3.35, 8.3],
  [5.45, 8.3],
  [1.39, 8.97],
  [3.35, 8.97],
  [5.45, 8.97],
] as const;
/** The spec table (25), in orvibo.com's phone order: each row's key group and name; the m.* rows are the phone
 * page's own. */
const SPECS = [
  ["spec", "supply"],
  ["spec", "grade"],
  ["spec", "inputPower"],
  ["spec", "inputCurrent"],
  ["spec", "refrigerant"],
  ["spec", "charge"],
  ["spec", "waterResistance"],
  ["spec", "netWeight"],
  ["spec", "operatingWeight"],
  ["spec", "noiseA35"],
  ["spec", "noiseW41"],
  ["spec", "noiseW35"],
  ["spec", "shock"],
  ["spec", "water"],
  ["spec", "overpressure"],
  ["spec", "maxPressure"],
  ["spec", "exchanger"],
  ["m", "cop"],
  ["m", "lowInput"],
  ["spec", "type"],
  ["spec", "size"],
] as const;

/** The W180 integrated HVAC page on phones: orvibo.com's phone page, its pictures without their words and the words
 * in HTML. */
export function W180Phone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
  /** A phone picture, or its part down to `bottom` (rem). */
  const pic = (name: Slice, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, 0, 7.5, bottom] as const,
  });
  /** Words in orvibo.com's two tones: the [bracketed] ones in `tone`, a "*" as a small raised mark. */
  const rich = (textKey: string, tone = ""): ReactNode => {
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
            <sup key={key} className="text-[0.6em]">
              *
            </sup>
          );
        }
        if (part.startsWith("[")) {
          return (
            <span key={key} className={tone}>
              {part.slice(1, -1)}
            </span>
          );
        }
        return <Fragment key={key}>{part}</Fragment>;
      });
  };
  /** A key's lines (`\n`) as blocks. */
  const lines = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => (
        <span key={part} className="block">
          {part}
        </span>
      ));
  /** A key's lines (`\n`) side by side, wrapping as they need. */
  const row = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => <span key={part}>{part}</span>);
  /** A section's badge. */
  const badge = (name: keyof typeof BADGES) => {
    const [key, y, colours] = BADGES[name];
    return (
      <p
        className={cn(
          "absolute rounded-[0.1rem] px-[0.2rem] text-[0.28rem] leading-[0.54rem] font-medium whitespace-nowrap",
          CENTRE,
          colours,
        )}
        style={spot(3.76, y)}
      >
        {t(key)}
      </p>
    );
  };
  /** A block of words centred across the picture from `top` (rem). */
  const block = (top: number, children: ReactNode, inset = 0.5) => (
    <div
      className="absolute text-center"
      style={{ top: `${top}rem`, left: `${inset}rem`, right: `${inset}rem` }}
    >
      {children}
    </div>
  );
  /** A section heading. */
  const heading = (key: string, className = "", tone = "") => (
    <h2
      className={cn(
        "text-[0.42rem] leading-[0.6rem] font-semibold text-balance text-white",
        className,
      )}
    >
      {rich(key, tone)}
    </h2>
  );
  /** A line under a heading. */
  const line = (key: string, className = "") => (
    <p
      className={cn(
        "text-[0.19rem] leading-[0.31rem] font-normal text-balance",
        className,
      )}
    >
      {rich(key)}
    </p>
  );
  /** A speech bubble from `x` rem, its middle at `y` rem, its tail under its middle. */
  const bubble = (key: string, x: number, y: number, colour: string) => (
    <p
      className="absolute -translate-y-1/2 rounded-[0.14rem] px-[0.16rem] py-[0.06rem] text-[0.15rem] leading-[0.21rem] font-normal whitespace-nowrap text-[#fff8ec]"
      style={{ ...spot(x, y), backgroundColor: colour }}
    >
      {lines(key)}
      <span
        className="absolute top-full left-1/2 -translate-x-1/2 border-x-[0.07rem] border-t-[0.09rem] border-x-transparent"
        style={{ borderTopColor: colour }}
      />
    </p>
  ); /** A small tag beside a line in a photo: from its left edge, or (`right`) ending at `x`; on one line unless given a
   * width. */
  const tag = (
    key: string,
    x: number,
    y: number,
    side: "left" | "right" = "left",
    className = "text-[0.11rem] leading-[0.14rem]",
    width?: number,
  ) => (
    <p
      key={`${key}-${x}`}
      className={cn(
        "absolute -translate-y-1/2 font-normal text-white",
        width === undefined && "whitespace-nowrap",
        side === "right" && "-translate-x-full text-right",
        SHADE,
        className,
      )}
      style={spot(x, y, width)}
    >
      {lines(key)}
    </p>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the name, the line, the five uses */}
        <PhonePicture {...pic("p01")}>
          <p
            className={cn(
              "absolute rounded-full border border-[#8f8d8e] px-[0.24rem] text-[0.21rem] leading-[0.44rem] font-normal whitespace-nowrap text-[#c9c7c8]",
              CENTRE,
            )}
            style={spot(3.76, 1.93)}
          >
            {t("s1.name")}
          </p>
          {block(
            2.48,
            <>
              <h1 className="text-[0.5rem] leading-[0.68rem] font-semibold text-balance text-[#fafafa]">
                {lines("s1.title")}
              </h1>
              <p className="mt-[0.3rem] flex flex-wrap justify-center gap-x-[0.16rem] text-[0.2rem] leading-[0.32rem] font-normal text-[#a9a8a9]">
                {row("s1.uses")}
              </p>
            </>,
          )}
        </PhonePicture>
        {/* the CCTV banner (MixStation's picture) */}
        <PhonePicture src={img(CCTV)} size={[7.5, 11.93]}>
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
        {/* co-developed with an academician: the lab, its two tags, the academician */}
        <PhonePicture {...pic("p03")}>
          {block(
            1.5,
            <>
              {heading("research.title", "text-[0.4rem] leading-[0.56rem]")}
              <p className="mt-[0.3rem] text-[0.23rem] leading-[0.4rem] font-normal text-balance text-[#fcfeff]">
                {t("research.lab")}
              </p>
              {line("s2.patents", "mt-[0.2rem] text-[#a2a5ab]")}
            </>,
            0.85,
          )}
          {(
            [
              ["s2.ai", 1.65, 7.3, "text-[0.2rem]"],
              ["s2.energy", 5.94, 6.77, "text-[0.16rem]"],
            ] as const
          ).map(([key, x, y, size]) => (
            <p
              key={key}
              className={cn(
                "absolute rounded-[0.06rem] border border-white/10 bg-[#30333c]/90 px-[0.1rem] leading-[0.34rem] font-normal whitespace-nowrap text-[#a9acb3]",
                CENTRE,
                size,
              )}
              style={spot(x, y)}
            >
              {t(key)}
            </p>
          ))}
          <div className="absolute top-[10.48rem] right-[4.19rem] w-[2.7rem] text-right">
            <p className="text-[0.26rem] leading-[0.34rem] font-medium text-[#f8fafe]">
              {t("research.name")}
            </p>
            <p className="mt-[0.06rem] text-[0.13rem] leading-[0.19rem] font-normal text-[#c8cbd0]">
              {lines("research.bio")}
            </p>
          </div>
        </PhonePicture>
        {/* truly efficient: HeatCycle heat recovery */}
        <PhonePicture {...pic("p04", P04_CUT)}>
          {badge("p04")}
          {block(
            1.6,
            <>
              {heading("s3.title", "text-[0.36rem] leading-[0.54rem]")}
              <p className="mt-[0.3rem] text-[0.28rem] leading-[0.38rem] font-semibold text-balance text-white">
                {t("s3.heatcycle")}
              </p>
              <p className="mt-[0.16rem] text-[0.17rem] leading-[0.27rem] font-normal text-balance text-[#ebebee]">
                {lines("s3.desc")}
              </p>
            </>,
            0.45,
          )}
          <p
            className={cn(
              "absolute w-[1.3rem] text-center text-[0.2rem] leading-[0.26rem] font-medium text-white",
              CENTRE,
            )}
            style={spot(5.79, 12.87)}
          >
            {lines("s3.recovery")}
          </p>
        </PhonePicture>
        <p className="bg-[#19212d] px-[0.65rem] pt-[0.04rem] pb-[0.3rem] text-[0.1rem] leading-[0.15rem] font-normal text-[#68707b]">
          {t("note.summer")}
        </p>
        {/* the integrated HVAC against classic central AC */}
        <PhonePicture {...pic("p05")}>
          {(
            [
              ["ours", 2.34, 0.71, 1.06, 3.2],
              ["other", 5.44, 1.08, 1.42, 2.7],
            ] as const
          ).map(([key, x, y, descY, width]) => (
            <Fragment key={key}>
              <p
                className={cn(
                  "absolute text-[0.25rem] leading-[0.32rem] font-medium whitespace-nowrap text-white",
                  CENTRE,
                )}
                style={spot(x, y)}
              >
                {t(`s3.${key}`)}
              </p>
              <p
                className="absolute -translate-x-1/2 text-center text-[0.135rem] leading-[0.18rem] font-normal text-[#a3adc0]"
                style={spot(x, descY - 0.09, width)}
              >
                {t(`s3.${key}Desc`)}
              </p>
            </Fragment>
          ))}
          {ARROWS.map(([key, x, y, colour]) => (
            <p
              key={`${key}-${x}`}
              className={cn(
                "absolute text-[0.13rem] leading-[0.17rem] font-medium whitespace-nowrap",
                CENTRE,
                colour,
              )}
              style={spot(x, y)}
            >
              {t(`s3.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {/* pressurized storage: the house, the three zeros */}
        <PhonePicture {...pic("p06")}>
          {block(
            0.78,
            <>
              {heading("s4.title", "text-[0.36rem] leading-[0.56rem]")}
              <p className="mt-[0.22rem] text-[0.17rem] leading-[0.27rem] font-normal text-balance text-[#a3a7af]">
                {lines("s4.desc")}
              </p>
            </>,
            0.45,
          )}
          {TAPS.map(([key, x, y]) => tag(`s4.${key}`, x, y))}
          <svg
            aria-hidden="true"
            viewBox="0 0 449 100"
            className="absolute top-[8.35rem] left-[1.36rem] h-[1rem] w-[4.49rem]"
          >
            <defs>
              <linearGradient id="w180-phone-gold">
                <stop offset="0" stopColor="#b39276" />
                <stop offset="1" stopColor="#f1e1c8" />
              </linearGradient>
            </defs>
            {ZEROS.map(([key, x]) => (
              <path
                key={key}
                transform={`translate(${Math.round((x - 1.36) * 100)})`}
                fill="url(#w180-phone-gold)"
                d="M62.82 32A32.5 50 0 1 0 62.82 68H47.79A17.5 37 0 1 1 47.79 32Z"
              />
            ))}
          </svg>
          {ZEROS.map(([key, x, middle]) => (
            <Fragment key={key}>
              <p
                className={cn(
                  "absolute -translate-y-1/2 text-[0.2rem] leading-[0.28rem] font-medium whitespace-nowrap text-white",
                  SHADE,
                )}
                style={spot(x + 0.3, 8.85)}
              >
                {t(`s4.${key}`)}
              </p>
              <p
                className="absolute -translate-x-1/2 text-center text-[0.2rem] leading-[0.31rem] font-normal whitespace-nowrap text-[#a7abb2]"
                style={spot(middle, 9.52)}
              >
                {lines(`s4.${key}Desc`)}
              </p>
            </Fragment>
          ))}
        </PhonePicture>
        {/* smart zero cold water: the call, the reply, the rooms */}
        <PhonePicture {...pic("p07")}>
          {block(
            1.0,
            <>
              {heading("s5.title", "text-[0.36rem] leading-[0.52rem]")}
              <p className="mt-[0.2rem] text-[0.18rem] leading-[0.29rem] font-normal text-balance text-[#a3a7ad]">
                {lines("s5.desc")}
              </p>
            </>,
            0.45,
          )}
          {bubble("s5.reply", 3.21, 5.86, "rgba(150,112,72,0.94)")}
          {bubble("s5.ask", 0.42, 6.24, "rgba(176,146,112,0.94)")}
          {tag(
            "s5.kitchen",
            2.64,
            6.45,
            "left",
            "text-[0.13rem] leading-[0.16rem]",
          )}
          {tag(
            "s5.shower",
            6.38,
            5.73,
            "left",
            "text-[0.13rem] leading-[0.16rem]",
            1.06,
          )}
          {tag(
            "s5.tub",
            6.45,
            6.68,
            "left",
            "text-[0.13rem] leading-[0.16rem]",
            1.0,
          )}
          <div className="absolute inset-x-[0.54rem] top-[9.18rem] text-[0.1rem] leading-[0.15rem] font-normal text-[#6d6c6c]">
            <p>{t("note.zeroCold")}</p>
            <p>{t("note.steadyHot")}</p>
          </div>
        </PhonePicture>
        {/* free heat from the air in winter */}
        <PhonePicture {...pic("p08")}>
          {block(
            1.1,
            <>
              {heading(
                "s6.title",
                "text-[0.36rem] leading-[0.54rem]",
                "box-decoration-clone bg-gradient-to-b from-[#f1dcc1] to-[#d8b48b] bg-clip-text text-transparent",
              )}
              <p className="mt-[0.24rem] text-[0.24rem] leading-[0.34rem] font-medium text-balance text-white">
                {t("s6.sub")}
              </p>
              <p className="mt-[0.14rem] text-[0.16rem] leading-[0.26rem] font-normal text-balance text-[#e9f0ff]">
                {lines("s6.desc")}
              </p>
            </>,
            0.45,
          )}
          {WINTER_TAGS.map(([key, side, x, y]) =>
            tag(`s6.${key}`, x, y, side, "text-[0.12rem] leading-[0.15rem]"),
          )}
        </PhonePicture>
        {/* powerful in the cold; floor heating with no chill at night */}
        <PhonePicture {...pic("p09")}>
          {(
            [
              ["cold", 0.8],
              ["night", 7.28],
            ] as const
          ).map(([key, top]) => (
            <Fragment key={key}>
              {block(
                top,
                <>
                  <h3 className="text-[0.3rem] leading-[0.42rem] font-semibold text-balance text-white">
                    {t(`s6.${key}Title`)}
                  </h3>
                  <p className="mt-[0.15rem] text-[0.17rem] leading-[0.28rem] font-normal text-balance text-[#b8bdc6]">
                    {lines(`s6.${key}Desc`)}
                  </p>
                </>,
                0.85,
              )}
            </Fragment>
          ))}
        </PhonePicture>
        {/* real savings: five years, the screen, beyond grade 1 */}
        <PhonePicture {...pic("p10")}>
          {badge("p10")}
          {block(
            2.46,
            <>
              {heading("s7.title", "text-[0.4rem] leading-[0.58rem]")}
              <p className="mt-[0.26rem] text-[0.28rem] leading-[0.44rem] font-medium text-balance text-white">
                {lines("s7.mode")}
              </p>
              <p className="mt-[0.22rem] text-[0.18rem] leading-[0.3rem] font-normal text-balance text-[#e8edf5]">
                {lines("s7.desc")}
              </p>
            </>,
            0.45,
          )}
          <p className="absolute top-[6.38rem] left-[0.72rem] bg-gradient-to-b from-[#e8e8ea] to-[#a6a5aa] bg-clip-text text-[0.24rem] leading-[0.5rem] font-semibold text-transparent">
            {lines("s7.fiveYears")}
          </p>
          <p
            className={cn(
              "absolute rounded-full bg-[#fddb9b] px-[0.08rem] text-[0.115rem] leading-[0.22rem] font-medium whitespace-nowrap text-[#654c23]",
              CENTRE,
            )}
            style={spot(2.89, 9.1)}
          >
            {t("s7.tag")}
          </p>
          <p className="absolute top-[10.66rem] left-[0.6rem] w-[5.6rem] text-[0.1rem] leading-[0.15rem] font-normal text-[#76746f]">
            {t("note.lab")}
          </p>
          <p
            className={cn(
              "absolute text-[0.24rem] leading-[0.32rem] font-medium whitespace-nowrap text-[#e0c9ae]",
              CENTRE,
            )}
            style={spot(3.75, 12.31)}
          >
            {t("s7.chartTitle")}
          </p>
          <p
            className={cn(
              "absolute rounded-[0.03rem] bg-[#3d7e44] px-[0.04rem] text-[0.09rem] leading-[0.17rem] font-semibold whitespace-nowrap text-white",
              CENTRE,
            )}
            style={spot(2.76, 13.27)}
          >
            {t("m.grade1")}
          </p>
          {(
            [
              ["s7.chartStandard", 2.86],
              ["s7.chartOrvibo", 5.22],
            ] as const
          ).map(([key, x]) => (
            <p
              key={key}
              className={cn(
                "absolute text-[0.14rem] leading-[0.18rem] font-medium whitespace-nowrap text-[#f5f5f7]",
                CENTRE,
              )}
              style={spot(x, 14.32)}
            >
              {t(key)}
            </p>
          ))}
        </PhonePicture>
        {/* new-energy technology: the tiles */}
        <PhonePicture {...pic("p11")}>
          {block(0.72, heading("s8.title", "text-[0.4rem] leading-[0.52rem]"))}
          {ORB.map(([key, x, y, colour]) => (
            <p
              key={key}
              className={cn(
                "absolute text-[0.18rem] leading-[0.24rem] font-normal whitespace-nowrap",
                CENTRE,
                colour,
              )}
              style={spot(x, y)}
            >
              {t(`s8.${key}`)}
            </p>
          ))}
          <p
            className={cn(
              "absolute w-[1.6rem] text-center text-[0.17rem] leading-[0.22rem] font-medium text-[#fffbf2]",
              CENTRE,
            )}
            style={spot(2.13, 3.1)}
          >
            {lines("s8.threeInOne")}
          </p>
          <p
            className={cn(
              "absolute w-[2.6rem] text-center text-[0.15rem] leading-[0.2rem] font-normal text-[#f3f4f7]",
              CENTRE,
            )}
            style={spot(2.24, 5.23)}
          >
            {t("s8.heatcycle")}
          </p>
          {ENERGY_TILES.map(([key, x, y, width]) => (
            <p
              key={key}
              className={cn(
                "absolute -translate-y-1/2 text-[0.19rem] leading-[0.25rem] font-normal text-[#f3ece4]",
                SHADE,
              )}
              style={spot(x, y, width)}
            >
              {t(`s8.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {/* AI technology: the tiles */}
        <PhonePicture {...pic("p12")}>
          {block(
            0.56,
            heading("s8.aiTitle", "text-[0.4rem] leading-[0.52rem]"),
          )}
          <p
            className="absolute -translate-y-1/2 text-[0.1rem] leading-[0.13rem] font-normal whitespace-nowrap text-[#e2eaee]"
            style={spot(0.86, 2.6)}
          >
            {t("s8.homeAi")}
          </p>
          <p
            className={cn(
              "absolute text-center text-[0.19rem] leading-[0.25rem] font-normal text-[#f2fbfb]",
              CENTRE,
            )}
            style={spot(5.35, 2.06, 2.8)}
          >
            {t("s8.monitor")}
          </p>
          <p
            className="absolute -translate-y-1/2 text-[0.18rem] leading-[0.24rem] font-normal text-[#fcfcfe]"
            style={spot(0.88, 3.7, 2.9)}
          >
            {t("s8.voice")}
          </p>
          {VOICE.map(([key, x, y, colour]) => (
            <p
              key={key}
              className={cn(
                "absolute -translate-y-1/2 rounded-full border border-white/20 bg-[#3b404e]/90 px-[0.08rem] text-[0.09rem] leading-[0.17rem] font-normal whitespace-nowrap",
                colour,
              )}
              style={spot(x, y)}
            >
              {t(`s8.${key}`)}
            </p>
          ))}
          <p
            className="absolute -translate-y-1/2 text-[0.17rem] leading-[0.22rem] font-normal text-[#f4ece7]"
            style={spot(0.86, 5.5, 2.15)}
          >
            {ts("s8.dynamic").replaceAll("\n", " ")}
          </p>
          <p
            className={cn(
              "absolute text-[0.17rem] leading-[0.22rem] font-normal text-[#f0eeeb]",
              SHADE,
            )}
            style={spot(3.4, 5.34, 1.9)}
          >
            {ts("s8.zones").replaceAll("\n", " ")}
          </p>
        </PhonePicture>
        {/* easy to install: the split design, a quarter of the size */}
        <PhonePicture {...pic("p13")}>
          {badge("p13")}
          {block(
            2.56,
            <>
              {heading("s9.title", "text-[0.34rem] leading-[0.5rem]")}
              <p className="mt-[0.3rem] text-[0.26rem] leading-[0.42rem] font-medium text-balance text-white">
                {lines("s9.fit")}
              </p>
              {line("s9.desc", "mt-[0.22rem] text-[#ebebee]")}
            </>,
            0.45,
          )}
          <p className="absolute top-[12.12rem] left-[5.18rem] bg-gradient-to-b from-[#eceef1] to-[#9a9ca2] bg-clip-text text-[0.34rem] leading-[0.5rem] font-medium whitespace-nowrap text-transparent">
            {t("s9.smaller")}
          </p>
          <p className="absolute top-[15.9rem] left-[0.59rem] w-[6.3rem] text-[0.1rem] leading-[0.15rem] font-normal text-[#5f6166]">
            {t("note.size")}
          </p>
        </PhonePicture>
        {/* the four ways to install it */}
        <PhonePicture {...pic("p14")}>
          {OPTIONS.map(([n, x, y, descY]) => (
            <Fragment key={n}>
              <p
                className={cn(
                  "absolute rounded-[0.12rem] bg-[#eba675] px-[0.2rem] text-[0.2rem] leading-[0.42rem] font-medium whitespace-nowrap text-[#462c1b]",
                  CENTRE,
                )}
                style={spot(x, y)}
              >
                {t(`s9.option${n}`)}
              </p>
              <p
                className={cn(
                  "absolute text-center text-[0.14rem] leading-[0.22rem] font-normal text-[#f3f8ff]",
                  CENTRE,
                )}
                style={spot(x, descY, 2.7)}
              >
                {lines(`s9.option${n}Desc`)}
              </p>
            </Fragment>
          ))}
        </PhonePicture>
        {/* true comfort: water-based AC, two cards */}
        <PhonePicture {...pic("p15")}>
          {badge("p15")}
          {block(
            2.14,
            <>
              <h2 className="text-[0.36rem] leading-[0.52rem] font-semibold text-balance text-white">
                {ts("s10.title")
                  .split("\n")
                  .map((part, i) => (
                    <span
                      key={part}
                      className={cn(
                        "block",
                        i > 0 && "mt-[0.1rem] text-[0.27rem] leading-[0.4rem]",
                      )}
                    >
                      {part}
                    </span>
                  ))}
              </h2>
              <p className="mt-[0.2rem] text-[0.16rem] leading-[0.27rem] font-normal text-balance text-[#f5fdff]">
                {lines("s10.desc")}
              </p>
            </>,
            0.45,
          )}
          {COMFORT.map(([key, top]) => (
            <Fragment key={key}>
              {block(
                top,
                <>
                  <h3 className="text-[0.21rem] leading-[0.29rem] font-medium text-balance text-white">
                    {lines(`s10.${key}Title`)}
                  </h3>
                  <p className="mt-[0.08rem] text-[0.15rem] leading-[0.23rem] font-normal text-balance text-[#e8ebf0]">
                    {lines(`s10.${key}Desc`)}
                  </p>
                </>,
                0.85,
              )}
            </Fragment>
          ))}
        </PhonePicture>
        {/* healthy air: fresh air without opening a window */}
        <PhonePicture {...pic("p16")}>
          {badge("p16")}
          {block(
            1.92,
            <div className={SHADE}>
              {heading("s11.title", "text-[0.38rem] leading-[0.54rem]")}
              <p className="mt-[0.22rem] text-[0.16rem] leading-[0.27rem] font-normal text-balance text-[#fffbf2]">
                {lines("s11.desc")}
              </p>
            </div>,
            0.45,
          )}
          {block(
            9.7,
            <>
              <h3 className="text-[0.24rem] leading-[0.34rem] font-medium text-balance text-white">
                {t("s11.flowTitle")}
              </h3>
              <p className="mt-[0.1rem] text-[0.155rem] leading-[0.25rem] font-normal text-balance text-[#fffbf6]">
                {lines("s11.flowDesc")}
              </p>
            </>,
            0.85,
          )}
        </PhonePicture>
        {/* fresh air: CO2, quiet, filtration */}
        <PhonePicture {...pic("p17")}>
          {FRESH.map(([key, top]) => (
            <Fragment key={key}>
              {block(
                top,
                <>
                  <h3 className="text-[0.24rem] leading-[0.32rem] font-medium text-balance text-white">
                    {t(`s11.${key}Title`)}
                  </h3>
                  <p className="mt-[0.1rem] text-[0.155rem] leading-[0.25rem] font-normal text-balance text-[#fffcf8]">
                    {lines(`s11.${key}Desc`)}
                  </p>
                </>,
                0.85,
              )}
            </Fragment>
          ))}
          {block(
            11.42,
            <h3 className="text-[0.24rem] leading-[0.32rem] font-medium text-balance text-white">
              {t("s11.filterTitle")}
            </h3>,
            0.85,
          )}
          {STATS.map((y, i) => (
            <p
              key={y}
              className={cn(
                "absolute w-[2.4rem] text-center text-[0.16rem] leading-[0.2rem] font-normal text-[#b5b5b5]",
                CENTRE,
              )}
              style={spot(5.42, y)}
            >
              {t(`s11.stat${i + 1}`)}
            </p>
          ))}
        </PhonePicture>
        {/* easy to use: a large control screen in every room */}
        <PhonePicture {...pic("p18")}>
          {badge("p18")}
          {block(
            2.06,
            <>
              {heading("s12.title", "text-[0.42rem] leading-[0.58rem]")}
              <p className="mt-[0.2rem] flex flex-wrap justify-center gap-x-[0.2rem] text-[0.27rem] leading-[0.4rem] font-medium text-white">
                {row("s12.heading")}
              </p>
              <p className="mt-[0.2rem] text-[0.17rem] leading-[0.28rem] font-normal text-balance text-[#fdfdfe]">
                {lines("s12.desc")}
              </p>
            </>,
            0.45,
          )}
          <div className="absolute top-[6.18rem] left-[5.33rem] w-[0.75rem] origin-top-left -rotate-[6deg] text-center font-normal text-white/85">
            <p className="text-[0.085rem] leading-[0.12rem]">
              {t("s12.sterilize")}
            </p>
          </div>
          <p className="absolute top-[6.97rem] left-[5.86rem] text-[0.07rem] leading-[0.1rem] font-normal whitespace-nowrap text-white/85">
            {t("s12.days")}
          </p>
          <div className="absolute top-[7.12rem] left-[5.33rem] w-[0.78rem] origin-top-left -rotate-[6deg] text-center text-[0.06rem] leading-[0.085rem] font-normal text-white/75">
            <p>{t("s12.next")}</p>
            <p className="mt-[0.13rem]">{t("s12.last")}</p>
            <p className="mt-[0.12rem] text-[0.07rem]">{t("s12.now")}</p>
          </div>
        </PhonePicture>
        {/* four ways to control it */}
        <PhonePicture {...pic("p19")}>
          {CONTROLS.map(([key, top, ask, x, y]) => (
            <Fragment key={key}>
              {block(
                top,
                <>
                  <h3 className="text-[0.28rem] leading-[0.38rem] font-medium text-balance text-white">
                    {t(`s12.${key}`)}
                  </h3>
                  <p className="mt-[0.12rem] text-[0.17rem] leading-[0.26rem] font-normal text-balance text-[#fcfdff]">
                    {t(`s12.${key}Desc`)}
                  </p>
                </>,
                0.8,
              )}
              {ask && (
                <p
                  className={cn(
                    "absolute text-center text-[0.1rem] leading-[0.14rem] font-normal whitespace-nowrap text-[#43403f]",
                    CENTRE,
                  )}
                  style={spot(x, y)}
                >
                  {lines(`s12.${ask}`)}
                </p>
              )}
            </Fragment>
          ))}
        </PhonePicture>
        {/* quality inside: the core parts */}
        <PhonePicture {...pic("p20")}>
          {badge("p20")}
          {block(
            2.24,
            heading("s13.title", "text-[0.42rem] leading-[0.6rem]"),
            0.8,
          )}
          {PARTS.map(([key, x, y]) => (
            <div key={key} className="absolute" style={spot(x, y, 2.62)}>
              <p className="text-[0.22rem] leading-[0.32rem] font-semibold text-white">
                {lines(`s13.${key}`)}
              </p>
              <p className="mt-[0.16rem] text-[0.16rem] leading-[0.25rem] font-normal text-[#c8c9cb]">
                {rich(`s13.${key}Desc`)}
              </p>
            </div>
          ))}
        </PhonePicture>
        {/* production to world-class standards */}
        <PhonePicture {...pic("p21")}>
          {block(
            1.14,
            heading("s14.title", "text-[0.38rem] leading-[0.6rem]"),
            0.8,
          )}
          {block(
            3.46,
            <p className="text-[0.25rem] leading-[0.4rem] font-normal text-balance text-white">
              {t("s14.caqi")}
            </p>,
            1.05,
          )}
          {FACTORY.map(([key, x, y]) => (
            <p
              key={key}
              className={cn(
                "absolute w-[2.8rem] text-center text-[0.19rem] leading-[0.25rem] font-medium text-white",
                CENTRE,
              )}
              style={spot(x, y)}
            >
              {t(`s14.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {/* good looks */}
        <PhonePicture {...pic("p22")}>
          {badge("p22")}
          {block(
            2.1,
            <>
              {heading("s15.title", "text-[0.42rem] leading-[0.6rem]")}
              <p className="mt-[0.3rem] text-[0.27rem] leading-[0.36rem] font-medium text-balance text-white">
                {t("s15.team")}
              </p>
              <p className="mt-[0.22rem] text-[0.17rem] leading-[0.29rem] font-normal text-balance text-[#fbfdff]">
                {lines("s15.desc")}
              </p>
            </>,
            0.45,
          )}
        </PhonePicture>
        {/* the AirPro indoor unit */}
        <PhonePicture {...pic("p23")}>
          {block(
            0.7,
            <>
              {heading("s16.title", "text-[0.3rem] leading-[0.42rem]")}
              <p className="mt-[0.16rem] text-[0.16rem] leading-[0.27rem] font-normal text-balance text-[#f4f4f4]">
                {lines("s16.desc")}
              </p>
            </>,
            0.45,
          )}
        </PhonePicture>
        {/* peace of mind: installed by ORVIBO, a 10-year warranty */}
        <PhonePicture {...pic("p24", P24_CUT)}>
          {badge("p24")}
          {block(
            1.84,
            heading("s17.title", "text-[0.38rem] leading-[0.56rem]"),
            0.45,
          )}
          {STEPS.map(([x, y], i) => (
            <p
              key={`s17.step${i + 1}`}
              className="absolute text-[0.13rem] leading-[0.19rem] font-normal text-[#f5e1d0]"
              style={spot(x, y, 1.3)}
            >
              {lines(`s17.step${i + 1}`)}
            </p>
          ))}
          <p
            className={cn(
              "absolute w-[2.5rem] text-center text-[0.15rem] leading-[0.2rem] font-normal text-[#fffefb]",
              CENTRE,
            )}
            style={spot(2.16, 10.15)}
          >
            {t("s17.service")}
          </p>
          <p
            className="absolute -translate-y-1/2 text-[0.1rem] leading-[0.12rem] font-normal whitespace-nowrap text-[#fae5ca]"
            style={spot(2.45, 10.66)}
          >
            {t("s17.hoursUnit")}
          </p>
          <p
            className={cn(
              "absolute w-[2.8rem] text-center text-[0.12rem] leading-[0.16rem] font-normal text-[#fcf8f4]",
              CENTRE,
            )}
            style={spot(2.16, 10.89)}
          >
            {t("s17.hotline")}
          </p>
          <p
            className={cn(
              "absolute w-[2.5rem] text-center text-[0.15rem] leading-[0.2rem] font-normal text-[#fffefa]",
              CENTRE,
            )}
            style={spot(5.32, 10.16)}
          >
            {t("s17.carefree")}
          </p>
          <p
            className={cn(
              "absolute w-[2.9rem] text-center text-[0.17rem] leading-[0.21rem] font-medium text-[#e9d6bd]",
              CENTRE,
            )}
            style={spot(5.34, 10.58)}
          >
            {rich("s17.highest")}
          </p>
          <p
            className={cn(
              "absolute w-[2.8rem] text-center text-[0.12rem] leading-[0.16rem] font-normal text-[#f8f4ef]",
              CENTRE,
            )}
            style={spot(5.32, 10.95)}
          >
            {t("s17.warranty")}
          </p>
        </PhonePicture>
        <div className="flex flex-col gap-[0.04rem] px-[0.55rem] pt-[0.04rem] pb-[0.4rem] text-[0.1rem] leading-[0.15rem] font-normal text-[#6b6c6f]">
          <p>{t("note.tenYear")}</p>
          <p>{t("note.standard")}</p>
        </div>
        {/* the specifications */}
        <div className="px-[0.63rem] pt-[0.3rem] pb-[0.8rem]">
          <div className="rounded-[0.12rem] bg-[#1c1c1c] px-[0.38rem] pt-[0.6rem] pb-[0.6rem]">
            <h2 className="text-center text-[0.4rem] leading-[0.52rem] font-semibold text-balance text-white">
              {t("s18.title")}
            </h2>
            <div className="mt-[0.5rem] flex justify-between gap-[0.2rem] border-b border-[#4a4a4a] pb-[0.2rem] text-[0.15rem] leading-[0.22rem]">
              <p>
                <span className="text-[#8b8b8b]">{t("s18.seriesLabel")}</span>{" "}
                <span className="font-medium text-white">
                  {t("s18.series")}
                </span>
              </p>
              <p className="shrink-0 text-right">
                <span className="text-[#8c8c8c]">{t("s18.modelLabel")}</span>{" "}
                <span className="font-medium text-white">{t("s18.model")}</span>
              </p>
            </div>
            <dl className="mt-[0.34rem] grid grid-cols-3 gap-x-[0.2rem] gap-y-[0.34rem]">
              {SPECS.map(([group, name]) => (
                <div key={name}>
                  <dt className="text-[0.13rem] leading-[0.18rem] font-normal text-[#888888]">
                    {t(`${group}.${name}`)}
                  </dt>
                  <dd className="mt-[0.06rem] text-[0.15rem] leading-[0.2rem] font-medium text-[#fbfbfb]">
                    {t(`${group}.${name}Value`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
