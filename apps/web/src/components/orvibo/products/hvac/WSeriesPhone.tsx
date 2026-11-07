import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import { type CSSProperties, Fragment, type ReactNode } from "react";

/** orvibo.com's phone pictures for W260 and W300 (750 px wide) without their words, and each one's height in
 * hundreds of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px
 * goes at (x / 100, y / 100) rem. The two pages share them but the hero (p01) and the efficiency chart (p07), which
 * are each model's, in /orvibo/products/<model>/phone/. The second picture is the CCTV banner MixStation's phone page
 * shows too; the last two (the spec table on a plain card, the footnotes on black) are HTML here. */
const PIC = "/orvibo/products/hvac/w-series/phone";
const CCTV = "/orvibo/products/mixstation/phone/p02.webp";
const HEIGHT = {
  p01: 14.61,
  p03: 12.0,
  p04: 12.0,
  p05: 22.14,
  p06: 12.02,
  p07: 12.71,
  p08: 11.68,
  p09: 18.11,
  p10: 12.5,
  p11: 16.1,
  p12: 11.55,
  p13: 10.02,
} as const;
type Slice = keyof typeof HEIGHT;
/** The model's own pictures. */
const OWN = new Set<Slice>(["p01", "p07"]);
/** Where p13's warranty badge ends and its notes begin (set below it in HTML: they are long). */
const P13_CUT = 8.8;

const CENTRE = "-translate-x-1/2 -translate-y-1/2";
/** Words over a photo. */
const SHADE = "[text-shadow:0_0_0.06rem_rgba(0,0,0,0.75)]";
/** A spot in rem: the left edge (or, with CENTRE, the middle) and the top (or the middle). */
const spot = (x: number, y: number, width?: number): CSSProperties => ({
  left: `${x}rem`,
  top: `${y}rem`,
  width: width === undefined ? undefined : `${width}rem`,
});

/** The headings' gold. */
const GOLD = "text-[#e4c396]";
/** p04: the house's labels: the key, the left edge, the middle and the width they may take. */
const HOUSE = [
  ["s3.screen", 0.28, 8.02, 1.9],
  ["s3.acLabel", 2.36, 7.96, 1.4],
  ["s3.waterLabel", 4.1, 8.51, 1.4],
  ["s3.floorLabel", 0.44, 8.93, 1.4],
] as const;
/** p05: the five cards: the tag's key, the tag's middle, and the title and lines under the photo with their top. */
const ROOMS = [
  ["s4.airTag", 3.57, "s4.air", "s4.airDesc", 5.6],
  ["s4.floorTag", 7.19, "s4.floor", "s4.floorDesc", 9.24],
  ["s4.waterTag", 10.85, "s4.water", "s4.waterDesc", 12.89],
  ["s4.freshTag", 14.51, "s4.fresh", "s4.freshDesc", 16.65],
] as const;
/** p05: the gold tag on each photo, a strip from the card's left edge. */
const TAG =
  "absolute flex h-[0.44rem] -translate-y-1/2 items-center rounded-tl-[0.12rem] rounded-r-[0.22rem] bg-gradient-to-r from-[#d3b39b] to-[#ecd4bd] pr-[0.2rem] pl-[0.2rem] text-[0.2rem] font-medium whitespace-nowrap text-[#855c44]";
/** p05: the frosted bubbles by the control screen: the key and the left edge and middle. */
const BUBBLES = [
  ["s4.freshOn", 3.6, 18.53],
  ["s4.acSet", 2.0, 19.7],
] as const;
const BUBBLE =
  "absolute -translate-y-1/2 rounded-full border border-white/50 bg-white/25 px-[0.12rem] text-[0.12rem] leading-[0.24rem] whitespace-nowrap text-white shadow-[0_0_0.05rem_rgb(255_255_255/0.6)] [text-shadow:0_0_0.04rem_rgb(0_0_0/0.4)]";
/** p06: the four parts: the key and the left edge and top of their words. */
const PARTS = [
  ["compressor", 1.05, 2.9],
  ["valve", 4.16, 2.9],
  ["tank", 1.05, 7.34],
  ["motor", 4.16, 7.34],
] as const;
/** p07: the icons' captions: the key and the middle. */
const ICONS = [
  ["s6.zoned", 5.45, 10.44],
  ["s6.active", 4.95, 11.41],
  ["s6.scheduled", 5.96, 11.42],
] as const;
/** p09: the four tiles' headings: the key and the middle. */
const TILES = [
  ["s8.phone", 2.2, 5.98],
  ["s8.screen", 5.3, 5.98],
  ["s8.climates", 2.2, 10.23],
  ["s8.lights", 5.3, 10.23],
] as const;
/** p09: the climate cards' names: the key, the left edge, the middle and the width. */
const CLIMATES = [
  ["s8.spring", 0.71, 10.99, 1.8],
  ["s8.lake", 2.89, 10.98, 0.75],
  ["s8.cool", 0.72, 12.4, 1.8],
  ["s8.autumn", 2.9, 12.37, 0.75],
] as const;
/** p09: what someone asks the screen, each fainter than the one before. */
const ASKS = [
  ["s8.ask1", "text-[#dbdbdd]"],
  ["s8.ask2", "text-[#a0a1a3]"],
  ["s8.ask3", "text-[#6a6b6d]"],
  ["s8.ask4", "text-[#3a3b3d]"],
  ["s8.ask5", "text-[#242426]"],
] as const;
/** p11: the house's labels: the key, the left edge and the middle. */
const HOUSE_LABELS = [
  ["s10.light", 2.39, 4.19],
  ["s10.water", 3.99, 4.41],
  ["s10.ac", 2.43, 4.9],
  ["s10.unit", 4.84, 5.07],
] as const;
/** p11: the six figures: the key and the middle. */
const FIGURES = [
  ["s10.patents", 7.24],
  ["s10.caqi", 8.77],
  ["s10.users", 10.27],
  ["s10.developers", 11.79],
  ["s10.stores", 13.33],
  ["s10.awards", 14.85],
] as const;
/** p12: the install steps' middles across, and each row's top. */
const STEP_X = [1.57, 2.67, 3.69, 4.8, 5.91] as const;
const STEP_Y = [9.48, 10.53] as const;
/** p14: the spec table, in orvibo.com's phone order (three a row). */
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

/** The W260 and W300 integrated HVAC pages on phones: orvibo.com's phone pages, their pictures without their words
 * and the words in HTML; the hero, the chart and the specifications come from each model's text. */
export function WSeriesPhone({
  locale,
  text,
  model,
}: ProductViewProps & { model: "w260" | "w300" }) {
  const { t, ts, img } = productPageHelpers(locale, text);
  /** A phone picture, or its part down to `bottom` (rem). */
  const pic = (name: Slice, bottom: number = HEIGHT[name]) => ({
    src: img(
      OWN.has(name)
        ? `/orvibo/products/${model}/phone/${name}.webp`
        : `${PIC}/${name}.webp`,
    ),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, 0, 7.5, bottom] as const,
  });
  /** Words in orvibo.com's two tones: the [bracketed] ones in `tone`. */
  const rich = (textKey: string, tone = ""): ReactNode => {
    const seen = new Map<string, number>();
    return ts(textKey)
      .split(/(\[[^\]]*\]|\n)/)
      .filter(Boolean)
      .map((part) => {
        const count = (seen.get(part) ?? 0) + 1;
        seen.set(part, count);
        const key = `${part}-${count}`;
        if (part === "\n") return <br key={key} />;
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
  /** Lines (`\n`) as blocks. */
  const blocks = (parts: string[]) =>
    parts.map((part) => (
      <span key={part} className="block">
        {part}
      </span>
    ));
  /** A key's lines (`\n`) as blocks. */
  const lines = (key: string) => blocks(ts(key).split("\n"));
  /** A key's lines run together. */
  const flat = (key: string) => ts(key).replace(/\n/g, " ");
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
  const heading = (content: ReactNode, className = "") => (
    <h2
      className={cn(
        "text-[0.4rem] leading-[0.56rem] font-semibold text-balance text-white",
        className,
      )}
    >
      {content}
    </h2>
  );
  /** A line under a heading. */
  const line = (content: ReactNode, className = "") => (
    <p
      className={cn(
        "text-[0.21rem] leading-[0.38rem] font-normal text-balance text-[#d2d2d2]",
        className,
      )}
    >
      {content}
    </p>
  );
  /** A small label beside a line in a photo, from its left edge. */
  const label = (
    key: string,
    x: number,
    y: number,
    className: string,
    width?: number,
  ) => (
    <p
      key={key}
      className={cn(
        "absolute -translate-y-1/2 font-normal",
        width === undefined && "whitespace-nowrap",
        SHADE,
        className,
      )}
      style={spot(x, y, width)}
    >
      {lines(key)}
    </p>
  );
  /** The design heading's last line is the badge above it on orvibo.com's phone page; the warranty heading goes on
   * two lines, after its colon. */
  const aesthetics = ts("s9.title").split("\n");
  const aestheticsTeam = aesthetics.pop();
  const warranty = ts("s12.title").split(/(?<=:) /);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the model's name, its slogan and the line */}
        <PhonePicture {...pic("p01")}>
          {block(
            1.76,
            <>
              <p className="text-[0.26rem] leading-[0.32rem] font-normal text-white">
                {t("s1.name")}
              </p>
              <h1 className="mt-[0.42rem] text-[0.5rem] leading-[0.72rem] font-medium tracking-[0.03em] text-balance text-[#e1e1e1]">
                <span className="block">{t("s1.title1")}</span>
                <span className="block">{t("s1.title2")}</span>
              </h1>
              <p className="mt-[0.36rem] flex flex-wrap justify-center gap-x-[0.16rem] text-[0.24rem] leading-[0.34rem] font-normal text-[#fbfbfb]">
                <span>{t("s1.summer")}</span>
                <span>
                  {t("s1.winter")}
                  <sup className="text-[0.6em]">*</sup>
                </span>
              </p>
            </>,
            0.45,
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
        {/* co-developed with an academician */}
        <PhonePicture {...pic("p03")}>
          <div className="absolute inset-x-[0.75rem] top-[1.16rem] text-center">
            {heading(t("research.title"))}
            <p className="mt-[0.24rem] text-[0.22rem] leading-[0.36rem] font-normal text-balance text-[#8d8d8d]">
              {t("research.lab")}
            </p>
          </div>
          <div
            className={cn("absolute -translate-y-full", SHADE)}
            style={spot(1.12, 8.82, 2.7)}
          >
            <p className="text-[0.3rem] leading-[0.4rem] font-medium text-white">
              {t("research.name")}
            </p>
            <p className="mt-[0.06rem] text-[0.14rem] leading-[0.2rem] font-normal text-[#d5d5d5]">
              {lines("research.bio")}
            </p>
          </div>
          <div className="absolute inset-x-[0.8rem] top-[9.8rem] text-center text-[0.21rem] leading-[0.36rem] font-normal text-balance text-[#8c8c8c]">
            <p>{t("research.tech")}</p>
            <p>{t("research.patents")}</p>
          </div>
        </PhonePicture>
        {/* all in one: the uses, the line, the house's labels */}
        <PhonePicture {...pic("p04")}>
          <p
            className={cn(
              "absolute rounded-full bg-white px-[0.2rem] text-[0.25rem] leading-[0.46rem] font-medium whitespace-nowrap text-[#30445c]",
              CENTRE,
            )}
            style={spot(3.75, 1.52)}
          >
            {t("s3.pill")}
          </p>
          {block(
            2.3,
            <>
              {heading(
                <>
                  <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                    {(
                      ["s3.ac", "s3.water", "s3.floor", "s3.fresh"] as const
                    ).map((key) => (
                      <span key={key}>{t(key)}</span>
                    ))}
                  </span>
                  <span className="block">{t("s3.smart")}</span>
                </>,
              )}
              {line(lines("s3.desc"), "mt-[0.3rem] text-[#e9e9e9]")}
            </>,
          )}
          {HOUSE.map(([key, x, y, width]) =>
            label(
              key,
              x,
              y,
              "text-[0.15rem] leading-[0.19rem] text-[#e4e5e8]",
              width,
            ),
          )}
        </PhonePicture>
        {/* the villa water system: five cards */}
        <PhonePicture {...pic("p05")}>
          {block(
            1.32,
            <>
              {heading(t("s4.title"))}
              {line(t("s4.desc"), "mt-[0.12rem]")}
            </>,
          )}
          {ROOMS.map(([tagKey, tagY, title, desc, top]) => (
            <Fragment key={tagKey}>
              <p className={TAG} style={spot(0.73, tagY)}>
                {t(tagKey)}
              </p>
              <div className="absolute" style={spot(1.17, top, 5.3)}>
                <p className="text-[0.23rem] leading-[0.3rem] font-normal text-[#acacac]">
                  {t(title)}
                </p>
                <p className="mt-[0.06rem] text-[0.155rem] leading-[0.24rem] font-normal text-[#8c8c8c]">
                  {lines(desc)}
                </p>
              </div>
            </Fragment>
          ))}
          <p className={TAG} style={spot(0.73, 18.15)}>
            {t("s4.homeTag")}
          </p>
          {BUBBLES.map(([key, x, y]) => (
            <p key={key} className={BUBBLE} style={spot(x, y)}>
              {t(key)}
            </p>
          ))}
          <div className="absolute" style={spot(1.17, 20.08, 5.3)}>
            <p className="text-[0.23rem] leading-[0.3rem] font-normal text-[#acacac]">
              {t("s4.home")}
            </p>
            <p className="mt-[0.06rem] text-[0.155rem] leading-[0.24rem] font-normal text-[#8c8c8c]">
              <span className="block">
                {t("s4.control")} · {t("s4.zones")}
              </span>
              <span className="block">
                {t("s4.selfCheck")} · {t("s4.stats")}
              </span>
            </p>
          </div>
        </PhonePicture>
        {/* the core parts */}
        <PhonePicture {...pic("p06")}>
          {block(1.2, heading(t("s5.title")))}
          {PARTS.map(([key, x, y]) => (
            <div key={key} className="absolute" style={spot(x, y, 2.35)}>
              <p
                className={cn(
                  "text-[0.19rem] leading-[0.27rem] font-medium text-balance",
                  GOLD,
                )}
              >
                {flat(`s5.${key}`)}
              </p>
              <p className="mt-[0.08rem] text-[0.15rem] leading-[0.22rem] font-normal text-white">
                {lines(`s5.${key}Desc`)}
              </p>
            </div>
          ))}
        </PhonePicture>
        {/* comfort and savings: heat recovery, the inverter chart, HomeAI */}
        <PhonePicture {...pic("p07")}>
          {block(1.48, heading(t("s6.title")))}
          <div className="absolute" style={spot(1.07, 3.6, 2.8)}>
            <p
              className={cn(
                "text-[0.25rem] leading-[0.34rem] font-medium",
                GOLD,
              )}
            >
              {t("s6.recovery")}
            </p>
            <p className="mt-[0.08rem] text-[0.17rem] leading-[0.3rem] font-normal text-white">
              {lines("s6.recoveryDesc")}
            </p>
          </div>
          <p
            className={cn(
              "absolute text-[0.11rem] leading-[0.14rem] font-medium whitespace-nowrap text-white",
              CENTRE,
            )}
            style={spot(6.04, 3.74)}
          >
            {t("s6.indoorHeat")}
          </p>
          <p
            className={cn(
              "absolute text-[0.11rem] leading-[0.14rem] font-medium whitespace-nowrap text-white",
              CENTRE,
            )}
            style={spot(5.7, 5.34)}
          >
            {t("s6.hotWater")}
          </p>
          <div className="absolute" style={spot(1.06, 6.3, 2.85)}>
            <p
              className={cn(
                "text-[0.25rem] leading-[0.34rem] font-medium",
                GOLD,
              )}
            >
              {t("s6.dc")}
            </p>
            <p className="mt-[0.08rem] text-[0.16rem] leading-[0.25rem] font-normal text-white">
              {lines("s6.dcDesc")}
            </p>
          </div>
          <p
            className={cn(
              "absolute text-[0.26rem] leading-[0.3rem] font-normal text-[#8a8a8a]",
              CENTRE,
            )}
            style={spot(4.65, 6.94)}
          >
            {t("s6.standardValue")}
          </p>
          <p
            className={cn(
              "absolute text-[0.26rem] leading-[0.3rem] font-medium text-[#5ee08a]",
              CENTRE,
            )}
            style={spot(5.87, 6.46)}
          >
            {t("s6.oursValue")}
          </p>
          <p
            className="absolute -translate-x-1/2 text-center text-[0.1rem] leading-[0.13rem] font-normal text-[#757575]"
            style={spot(4.45, 8.47, 1.15)}
          >
            {t("s6.standard")}
          </p>
          <p
            className="absolute -translate-x-1/2 text-center text-[0.1rem] leading-[0.13rem] font-normal text-[#d5d5d5]"
            style={spot(5.67, 8.47, 1.15)}
          >
            {t("s6.ours")}
          </p>
          <div className="absolute" style={spot(1.05, 9.44, 3.35)}>
            <p
              className={cn(
                "text-[0.25rem] leading-[0.34rem] font-medium",
                GOLD,
              )}
            >
              {t("s6.homeAi")}
            </p>
            <p className="mt-[0.08rem] text-[0.17rem] leading-[0.28rem] font-normal text-white">
              {lines("s6.homeAiDesc")}
            </p>
          </div>
          {ICONS.map(([key, x, y]) => (
            <p
              key={key}
              className={cn(
                "absolute text-[0.12rem] leading-[0.16rem] font-normal whitespace-nowrap text-[#d8d9db]",
                CENTRE,
              )}
              style={spot(x, y)}
            >
              {t(key)}
            </p>
          ))}
        </PhonePicture>
        {/* beyond grade 1: five years' savings */}
        <PhonePicture {...pic("p08")}>
          {block(
            0.92,
            <>
              {heading(t("s7.title"))}
              {line(t("s7.desc"), "mt-[0.2rem] text-[0.23rem] text-[#bfbfbf]")}
            </>,
          )}
          <p
            className={cn(
              "absolute rounded-full bg-[#b5c3de] px-[0.14rem] text-[0.2rem] leading-[0.34rem] font-medium whitespace-nowrap text-[#20283a]",
              CENTRE,
            )}
            style={spot(3.76, 4.47)}
          >
            {t("s7.pill")}
          </p>
          <p
            className="absolute -translate-x-full -translate-y-1/2 text-right text-[0.12rem] leading-[0.15rem] font-normal whitespace-nowrap text-[#acacad]"
            style={spot(1.5, 8.6)}
          >
            {t("s7.axis")}
          </p>
          <p
            className={cn(
              "absolute text-center font-medium whitespace-nowrap text-[#20282b]",
              CENTRE,
            )}
            style={spot(5.36, 8.82)}
          >
            <span className="block text-[0.1rem] leading-[0.15rem] font-semibold">
              {t("s7.tagTop")}
            </span>
            <span className="block text-[0.15rem] leading-[0.2rem]">
              {t("s7.tagValue")}
            </span>
          </p>
          <p
            className={cn(
              "absolute text-center text-[0.11rem] leading-[0.15rem] font-normal text-balance text-[#8a8a8c]",
              CENTRE,
            )}
            style={spot(2.8, 10.17, 3.0)}
          >
            {t("s7.other")}
          </p>
          <p
            className={cn(
              "absolute rounded-full bg-[#f4efe8] px-[0.12rem] text-[0.12rem] leading-[0.22rem] font-medium whitespace-nowrap text-[#1b1b1b]",
              CENTRE,
            )}
            style={spot(5.37, 10.18)}
          >
            {t("s7.orvibo")}
          </p>
          <p className="absolute inset-x-[1.1rem] top-[10.55rem] text-center text-[0.12rem] leading-[0.17rem] font-normal text-[#6c6c6c]">
            {t("note.lab")}
          </p>
        </PhonePicture>
        {/* a control screen in every room */}
        <PhonePicture {...pic("p09")}>
          {block(
            1.36,
            <>
              {heading(lines("s8.title"), "text-[0.36rem] leading-[0.5rem]")}
              {line(
                lines("s8.desc"),
                "mt-[0.26rem] text-[0.19rem] leading-[0.32rem]",
              )}
            </>,
            0.6,
          )}
          {TILES.map(([key, x, y]) => (
            <p
              key={key}
              className={cn(
                "absolute text-center text-[0.24rem] leading-[0.34rem] font-medium text-balance",
                CENTRE,
                GOLD,
              )}
              style={spot(x, y, 2.2)}
            >
              {t(key)}
            </p>
          ))}
          {CLIMATES.map(([key, x, y, width]) =>
            label(
              key,
              x,
              y,
              "text-[0.11rem] leading-[0.13rem] text-white",
              width,
            ),
          )}
          <p
            className={cn(
              "absolute text-center text-[0.26rem] leading-[0.34rem] font-medium whitespace-nowrap",
              CENTRE,
              GOLD,
            )}
            style={spot(3.75, 14.31)}
          >
            {t("s8.voice")}
          </p>
          <div
            className="absolute text-center text-[0.15rem] leading-[0.37rem] font-normal"
            style={spot(4.43, 14.88, 2.2)}
          >
            {ASKS.map(([key, colour]) => (
              <p key={key} className={colour}>
                {t(key)}
              </p>
            ))}
          </div>
        </PhonePicture>
        {/* design: the badge, the heading, the line */}
        <PhonePicture {...pic("p10")}>
          <p
            className={cn(
              "absolute rounded-full bg-gradient-to-r from-[#d4b183] to-[#e9cfa6] px-[0.18rem] text-[0.18rem] leading-[0.4rem] font-medium whitespace-nowrap text-[#68460b]",
              CENTRE,
            )}
            style={spot(3.75, 1.24)}
          >
            {aestheticsTeam}
          </p>
          {block(
            1.86,
            <>
              {heading(blocks(aesthetics))}
              {line(lines("s9.desc"), "mt-[0.3rem]")}
            </>,
          )}
        </PhonePicture>
        {/* ORVIBO in figures */}
        <PhonePicture {...pic("p11")}>
          {block(
            0.9,
            <>
              {heading(
                rich("s10.title", "block text-[#e1c3a0]"),
                "text-[0.46rem] leading-[0.7rem] text-[#ebdac6]",
              )}
              {line(t("s10.desc"), "mt-[0.2rem] text-[0.23rem] text-[#dedddd]")}
            </>,
          )}
          {HOUSE_LABELS.map(([key, x, y]) =>
            label(key, x, y, "text-[0.1rem] leading-[0.12rem] text-[#e0d8d0]"),
          )}
          {FIGURES.map(([key, y]) => (
            <p
              key={key}
              className="absolute -translate-y-1/2 text-[0.18rem] leading-[0.23rem] font-normal text-white"
              style={spot(0.87, y, 3.1)}
            >
              {rich(key, "font-semibold")}
            </p>
          ))}
        </PhonePicture>
        {/* installation by ORVIBO HQ */}
        <PhonePicture {...pic("p12")}>
          {block(
            0.98,
            <>
              {heading(
                t("s11.title"),
                "text-[0.44rem] leading-[0.6rem] text-[#ecdbc8]",
              )}
              {line(
                t("s11.desc"),
                "mt-[0.16rem] text-[0.22rem] text-[#f9f9f9]",
              )}
            </>,
          )}
          <p
            className={cn(
              "absolute text-center text-[0.26rem] leading-[0.34rem] font-medium whitespace-nowrap",
              CENTRE,
              GOLD,
            )}
            style={spot(3.74, 8.45)}
          >
            {flat("s11.process")}
          </p>
          {STEP_Y.map((y, row) =>
            STEP_X.map((x, column) => (
              <p
                key={`${x}-${y}`}
                className="absolute -translate-x-1/2 text-center text-[0.11rem] leading-[0.14rem] font-normal text-[#cfcfcf]"
                style={spot(x, y, 1.04)}
              >
                {t(`s11.step${row * 5 + column + 1}`)}
              </p>
            )),
          )}
        </PhonePicture>
        {/* the 10-year warranty */}
        <PhonePicture {...pic("p13", P13_CUT)}>
          {block(
            1.32,
            heading(blocks(warranty), "text-[0.4rem] leading-[0.56rem]"),
          )}
          <p
            className={cn(
              "absolute text-[0.34rem] leading-[0.44rem] font-normal whitespace-nowrap text-white",
              CENTRE,
            )}
            style={spot(3.75, 7.52)}
          >
            {t("s12.split")}
          </p>
        </PhonePicture>
        <div className="flex flex-col gap-[0.04rem] bg-gradient-to-b from-[#141622] to-black px-[0.55rem] pt-[0.06rem] pb-[0.4rem] text-[0.11rem] leading-[0.16rem] font-normal text-[#80828a]">
          <p>{t("note.standard")}</p>
          <p>{t("note.tenYear")}</p>
        </div>
        {/* the specifications */}
        <div className="px-[0.38rem] pt-[0.1rem] pb-[0.4rem]">
          <div className="rounded-[0.3rem] bg-[#16171b] px-[0.32rem] pt-[0.6rem] pb-[0.6rem]">
            <h2 className="text-center text-[0.42rem] leading-[0.56rem] font-semibold text-balance text-white">
              {t("s13.title")}
            </h2>
            <div className="mt-[0.5rem] flex justify-between gap-[0.2rem] border-b border-[#4a4a4a] pb-[0.2rem] text-[0.15rem] leading-[0.22rem]">
              <p>
                <span className="text-[#8b8b8b]">{t("s13.seriesLabel")}</span>{" "}
                <span className="font-medium text-white">
                  {t("s13.series")}
                </span>
              </p>
              <p className="shrink-0 text-right">
                <span className="text-[#8c8c8c]">{t("s13.modelLabel")}</span>{" "}
                <span className="font-medium text-white">{t("s13.model")}</span>
              </p>
            </div>
            <dl className="mt-[0.34rem] grid grid-cols-3 gap-x-[0.2rem] gap-y-[0.34rem]">
              {SPECS.map((name) => (
                <div key={name}>
                  <dt className="text-[0.13rem] leading-[0.18rem] font-normal text-[#888888]">
                    {t(`spec.${name}`)}
                  </dt>
                  <dd className="mt-[0.06rem] text-[0.15rem] leading-[0.2rem] font-medium text-[#fbfbfb]">
                    {t(`spec.${name}Value`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        {/* the footnotes */}
        <div className="flex flex-col gap-[0.06rem] px-[0.75rem] pb-[0.6rem] text-[0.1rem] leading-[0.15rem] font-normal text-[#6b6c6f]">
          <p>{t("note.summer")}</p>
          <p>{t("note.winter")}</p>
        </div>
      </div>
    </div>
  );
}
