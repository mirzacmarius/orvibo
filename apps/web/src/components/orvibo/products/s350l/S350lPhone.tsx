import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import { type CSSProperties, Fragment, type ReactNode } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. Its second picture is the CCTV banner MixStation's phone page shows too, so it is that
 * page's picture; its last (the spec table on a plain card) is HTML here. */
const PIC = "/orvibo/products/s350l/phone";
const CCTV = "/orvibo/products/mixstation/phone/p02.webp";
const HEIGHT = {
  p01: 13.38,
  p03: 13.61,
  p04: 10.21,
  p05: 12.99,
  p06: 11.81,
  p07: 15.39,
  p08: 12.11,
  p09: 13.51,
  p10: 10.22,
  p11: 8.68,
} as const;
type Slice = keyof typeof HEIGHT;
/** Where p06's diagram ends and its notes begin (set below it in HTML: they are long). */
const NOTES_CUT = 10.12;

/** The gold of the headings' second tone, lighter at the top as orvibo.com draws it. */
const GOLD =
  "box-decoration-clone bg-gradient-to-b from-[#f9ecde] to-[#eacba5] bg-clip-text text-transparent";
const CENTRE = "-translate-x-1/2 -translate-y-1/2";
/** A spot in rem: the left edge (or, with CENTRE, the middle) and the top (or the middle). */
const spot = (x: number, y: number, width?: number): CSSProperties => ({
  left: `${x}rem`,
  top: `${y}rem`,
  width: width === undefined ? undefined : `${width}rem`,
});

/** What the one unit replaces (03): the middle of each label, which ends above its count ("X 10") in the picture. */
const REPLACES = [
  ["s2.split", 1.48],
  ["s2.air", 2.86],
  ["s2.water", 4.32],
  ["s2.boiler", 5.9],
] as const;
/** The ten component tiles (05): their words' top left and the width they may take before the tile's picture. */
const PARTS = [
  { key: "compressor", x: 0.45, y: 3.6, width: 2.9 },
  { key: "cooling", x: 3.88, y: 3.6, width: 3.1 },
  { key: "valve", x: 0.43, y: 6.05, width: 1.75 },
  { key: "chip", x: 2.52, y: 6.05, width: 1.85 },
  { key: "motor", x: 4.76, y: 6.05, width: 2.3 },
  { key: "frost", x: 0.45, y: 8.2, width: 2.6 },
  { key: "tubes", x: 3.54, y: 8.2, width: 3.2 },
  { key: "heating", x: 0.43, y: 10.08, width: 3.4 },
  { key: "sensors", x: 4.42, y: 10.08, width: 1.45 },
  { key: "coating", x: 4.42, y: 11.2, width: 2.6 },
] as const;
/** The HeatCycle diagram's outputs (06): the middle of each tile's name. */
const OUTPUTS = [
  ["s5.outAc", 6.79],
  ["s5.outFloor", 7.6],
  ["s5.outWater", 8.57],
] as const;
/** The cost chart's rows (07): the row's middle, where the S350L's (green) and the other's (grey) bars end. */
const COSTS = [
  ["summer", 11.7, 4.25, 5.15],
  ["winter", 12.43, 3.43, 6.1],
  ["water", 13.18, 2.0, 2.45],
] as const;
/** The room tags (08): their middle (they start at the leader lines). */
const ROOMS = [
  ["s7.bath", 4.95],
  ["s7.kitchen", 6.11],
  ["s7.shower", 7.19],
] as const;
/** The hot water figures (08): the middle of each column. */
const WATER = [
  ["instant", "outlets", 1.27],
  ["together", "tubs", 3.42],
  ["flow", "litres", 5.7],
] as const;
/** The three free energies (09): the middle of each card. */
const ENERGIES = [
  ["produce", 1.41],
  ["recover", 3.75],
  ["use", 6.08],
] as const;
/** The service steps (10): the left of each step's lines and the row's middle. */
const STEPS = [
  [1.33, 8.12],
  [3.34, 8.12],
  [5.44, 8.12],
  [1.33, 8.72],
  [3.34, 8.72],
  [5.44, 8.72],
] as const;
/** The spec table (12), in orvibo.com's phone order: each row's key group and name; m.cooling is the phone page's
 * own. */
const SPECS = [
  ["spec", "supply"],
  ["spec", "grade"],
  ["spec", "inputPower"],
  ["spec", "inputCurrent"],
  ["spec", "refrigerant"],
  ["spec", "charge"],
  ["spec", "waterDrop"],
  ["spec", "netWeight"],
  ["spec", "runWeight"],
  ["spec", "noise1"],
  ["spec", "noise2"],
  ["spec", "noise3"],
  ["spec", "shock"],
  ["spec", "water"],
  ["spec", "suction"],
  ["spec", "discharge"],
  ["spec", "low"],
  ["spec", "high"],
  ["spec", "type"],
  ["m", "cooling"],
  ["spec", "size"],
] as const;

/** The S350L integrated HVAC page on phones: orvibo.com's phone page, its pictures without their words and the words
 * in HTML. */
export function S350lPhone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
  /** A phone picture, or its part down to `bottom` (rem). */
  const pic = (name: Slice, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, 0, 7.5, bottom] as const,
  });
  /** A heading in orvibo.com's two tones: its [bracketed] words in `tone`, a "*" as a small raised mark. */
  const rich = (textKey: string, tone: string = GOLD): ReactNode => {
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
            <span key={key} className={tone}>
              {part.slice(1, -1)}
            </span>
          );
        }
        return <Fragment key={key}>{part}</Fragment>;
      });
  };
  /** A key's lines (`\n`) on one line. */
  const flat = (key: string) => ts(key).replaceAll("\n", " ");
  /** A section's heading, centred from `top` (rem). */
  const heading = (key: string, top: number, className = "text-white") => (
    <h2
      className={cn(
        "absolute inset-x-[0.45rem] text-center text-[0.46rem] leading-[0.62rem] font-semibold text-balance",
        className,
      )}
      style={{ top: `${top}rem` }}
    >
      {rich(key)}
    </h2>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the name and its edition, the line, the four jobs */}
        <PhonePicture {...pic("p01")}>
          <p
            className={cn(
              "absolute flex items-center gap-[0.1rem] rounded-full border border-[#7d7d7d] px-[0.26rem] text-[0.22rem] leading-[0.5rem] font-normal whitespace-nowrap text-[#b8b8b8]",
              CENTRE,
            )}
            style={spot(3.74, 2.31)}
          >
            {t("s1.name")}
            <span className="rounded-[0.04rem] border border-[#77787a] px-[0.04rem] text-[0.12rem] leading-[0.18rem] text-[#9a9a9a]">
              {t("s1.edition")}
            </span>
          </p>
          <div className="absolute inset-x-[0.45rem] top-[2.78rem] text-center">
            <h1 className="text-[0.54rem] leading-[0.68rem] font-semibold text-[#f9f9f9]">
              {ts("s1.title")
                .split("\n")
                .map((part) => (
                  <span key={part} className="block">
                    {part}
                  </span>
                ))}
            </h1>
            <p className="mt-[0.16rem] text-[0.2rem] leading-[0.3rem] font-normal text-balance text-[#9a9a9a]">
              {t("s1.uses")}
            </p>
          </div>
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
        {/* one unit, whole home: what it replaces */}
        <PhonePicture {...pic("p03")}>
          {heading("s2.title", 0.86)}
          <p
            className={cn(
              "absolute w-[6.4rem] text-center text-[0.26rem] leading-[0.34rem] font-normal text-[#a4a4a4]",
              CENTRE,
            )}
            style={spot(3.74, 7.92)}
          >
            {t("s2.unit")}
          </p>
          {REPLACES.map(([key, x]) => (
            <p
              key={key}
              className="absolute w-[1.36rem] -translate-x-1/2 -translate-y-full text-center text-[0.16rem] leading-[0.2rem] font-normal text-[#cacaca]"
              style={spot(x, 12.2)}
            >
              {flat(key)}
            </p>
          ))}
        </PhonePicture>
        {/* simpler: the plant room becomes living space */}
        <PhonePicture {...pic("p04")}>
          <div className="absolute inset-x-[0.45rem] top-[0.95rem] text-center">
            <h2 className="text-[0.46rem] leading-[0.62rem] font-semibold text-balance text-white">
              {rich("s3.title")}
            </h2>
            <p className="mt-[0.24rem] inline-block rounded-full border border-[#76787e] px-[0.22rem] text-[0.18rem] leading-[0.36rem] font-normal text-[#b2b3b8]">
              {t("s3.pill")}
            </p>
          </div>
        </PhonePicture>
        {/* peak performance: the ten component tiles */}
        <PhonePicture {...pic("p05")}>
          {heading("s4.title", 1.12)}
          {PARTS.map((part) => (
            <div
              key={part.key}
              className="absolute [text-shadow:0_0_0.06rem_#000]"
              style={spot(part.x, part.y, part.width)}
            >
              <p className="text-[0.19rem] leading-[0.25rem] font-medium text-white">
                {flat(`s4.${part.key}`)}
              </p>
              {`s4.${part.key}Desc` in text && (
                <p className="mt-[0.04rem] text-[0.14rem] leading-[0.19rem] font-normal text-[#a3a4a9]">
                  {t(`s4.${part.key}Desc`)}
                </p>
              )}
            </div>
          ))}
        </PhonePicture>
        {/* HeatCycle: free hot water in summer, carefree floor heating in winter */}
        <PhonePicture {...pic("p06", NOTES_CUT)}>
          {heading("s5.title", 0.58)}
          <p
            className={cn(
              "absolute rounded-full bg-[#b9ab9e] px-[0.16rem] text-[0.19rem] leading-[0.34rem] font-medium whitespace-nowrap text-[#120a05]",
              CENTRE,
            )}
            style={spot(3.75, 3.63)}
          >
            {t("s5.pill")}
          </p>
          <p
            className={cn(
              "absolute w-[5rem] text-center text-[0.2rem] leading-[0.28rem] font-normal text-[#b4b4b9]",
              CENTRE,
            )}
            style={spot(3.75, 5.0)}
          >
            {t("s5.patent")}
          </p>
          {(
            [
              ["cool", 7.42],
              ["heat", 8.5],
            ] as const
          ).map(([key, y]) => (
            <div key={key} className="absolute w-[1rem]" style={spot(0.5, y)}>
              <p className="text-[0.14rem] leading-[0.18rem] font-medium text-[#ededee]">
                {t(`s5.${key}`)}
              </p>
              <p className="text-[0.115rem] leading-[0.15rem] font-normal text-[#d6d6d8]">
                {flat(`s5.${key}Desc`)}
              </p>
            </div>
          ))}
          {OUTPUTS.map(([key, y]) => (
            <p
              key={key}
              className={cn(
                "absolute w-[0.98rem] text-center text-[0.1rem] leading-[0.12rem] font-normal text-[#e7e7e9]",
                CENTRE,
              )}
              style={spot(6.31, y)}
            >
              {t(key)}
            </p>
          ))}
        </PhonePicture>
        <div className="flex flex-col gap-[0.04rem] px-[0.64rem] pt-[0.04rem] pb-[0.4rem] text-[0.115rem] leading-[0.17rem] font-normal text-[#777777]">
          <p>{t("note.1")}</p>
          <p>{t("note.2")}</p>
        </div>
        {/* beyond grade 1: the scale and the costs over a year */}
        <PhonePicture {...pic("p07")}>
          {heading("s6.title", 1.18)}
          <p
            className={cn(
              "absolute rounded-full bg-[#8a96ad] px-[0.18rem] text-[0.2rem] leading-[0.38rem] font-medium whitespace-nowrap text-[#182030]",
              CENTRE,
            )}
            style={spot(3.75, 3.87)}
          >
            {t("s6.pill")}
          </p>
          <p
            className={cn(
              "absolute w-[6rem] text-center text-[0.22rem] leading-[0.3rem] font-medium text-[#d7c1a9]",
              CENTRE,
            )}
            style={spot(3.75, 7.89)}
          >
            {t("s6.grade")}
          </p>
          <p
            className="absolute -translate-y-1/2 rounded-[0.05rem] bg-[#3f7a4f] px-[0.05rem] text-[0.1rem] leading-[0.2rem] font-semibold whitespace-nowrap text-white"
            style={spot(1.98, 8.86)}
          >
            {t("m.grade1")}
          </p>
          {(
            [
              ["s6.standard", 2.28],
              ["s6.s350l", 5.62],
            ] as const
          ).map(([key, x]) => (
            <p
              key={key}
              className={cn(
                "absolute w-[3rem] text-center text-[0.16rem] leading-[0.2rem] font-normal text-[#f6f6f6]",
                CENTRE,
              )}
              style={spot(x, 10.02)}
            >
              {t(key)}
            </p>
          ))}
          <p
            className="absolute w-[3.4rem] -translate-y-1/2 text-[0.14rem] leading-[0.19rem] font-normal text-[#aeaeae]"
            style={spot(0.9, 10.93)}
          >
            {t("s6.chart")}
          </p>
          <div
            className="absolute w-[2.5rem] -translate-y-1/2 text-[0.115rem] leading-[0.16rem] font-normal text-[#8f8f8f]"
            style={spot(4.58, 10.97)}
          >
            <p>{t("s6.legendS350l")}</p>
            <p className="mt-[0.06rem]">{t("s6.legendOther")}</p>
          </div>
          {COSTS.map(([key, y, ours, other]) => (
            <Fragment key={key}>
              <p
                className="absolute w-[0.85rem] -translate-y-1/2 text-[0.14rem] leading-[0.18rem] font-normal text-[#f1f1f1]"
                style={spot(0.88, y)}
              >
                {t(`s6.${key}`)}
              </p>
              <p
                className="absolute -translate-y-1/2 text-[0.14rem] leading-[0.18rem] font-normal whitespace-nowrap text-[#469875]"
                style={spot(ours + 0.06, y - 0.1)}
              >
                {t(`s6.${key}S350l`)}
              </p>
              <p
                className="absolute -translate-y-1/2 text-[0.14rem] leading-[0.18rem] font-normal whitespace-nowrap text-[#7b7b7b]"
                style={spot(other + 0.07, y + 0.1)}
              >
                {t(`s6.${key}Other`)}
              </p>
            </Fragment>
          ))}
          <p className="absolute inset-x-[0.66rem] top-[14.16rem] text-[0.11rem] leading-[0.16rem] font-normal text-[#7b7b7b]">
            {t("note.3")}
          </p>
        </PhonePicture>
        {/* steady hot water, plenty of it: the rooms and the three figures */}
        <PhonePicture {...pic("p08")}>
          <div className="absolute inset-x-[0.45rem] top-[0.9rem] text-center">
            <h2 className="text-[0.46rem] leading-[0.62rem] font-semibold text-balance text-white">
              {rich("s7.title")}
            </h2>
            <p className="mt-[0.2rem] flex flex-wrap justify-center gap-x-[0.2rem] text-[0.19rem] leading-[0.28rem] font-normal text-[#fbfeff]">
              {ts("s7.hub")
                .split("\n")
                .map((part) => (
                  <span key={part}>{part}</span>
                ))}
            </p>
          </div>
          {ROOMS.map(([key, y]) => (
            <p
              key={key}
              className="absolute max-w-[2.55rem] -translate-y-1/2 rounded-[0.06rem] border border-white/30 bg-[#2e4356]/75 px-[0.08rem] py-[0.05rem] text-[0.11rem] leading-[0.15rem] font-normal text-[#d8e5f2] backdrop-blur-[2px]"
              style={spot(4.81, y)}
            >
              {flat(key)}
            </p>
          ))}
          {WATER.map(([label, value, x]) => (
            <Fragment key={label}>
              <p
                className={cn(
                  "absolute rounded-full border border-white/40 px-[0.1rem] text-[0.14rem] leading-[0.26rem] font-normal whitespace-nowrap text-[#d7d7d7]",
                  CENTRE,
                )}
                style={spot(x, 10.11)}
              >
                {t(`s7.${label}`)}
              </p>
              <p
                className={cn(
                  "absolute flex items-center gap-[0.04rem] whitespace-nowrap text-white",
                  CENTRE,
                )}
                style={spot(x, 10.64)}
              >
                <span className="text-[0.5rem] leading-[0.6rem] font-semibold">
                  {t(`s7.${value}`)}
                </span>
                <span className="flex flex-col">
                  <span className="text-[0.11rem] leading-[0.14rem] font-normal">
                    {t(`s7.${value}Top`)}
                  </span>
                  <span className="text-[0.14rem] leading-[0.18rem] font-medium">
                    {t(`s7.${value}Bottom`)}
                  </span>
                </span>
              </p>
            </Fragment>
          ))}
        </PhonePicture>
        {/* direct solar drive: truly zero power bills */}
        <PhonePicture {...pic("p09")}>
          <div className="absolute inset-x-[0.45rem] top-[0.82rem] text-center">
            <h2 className="text-[0.44rem] leading-[0.58rem] font-semibold text-balance text-black">
              {rich("s8.title", "text-[#93592b]")}
            </h2>
            <p className="mt-[0.16rem] text-[0.18rem] leading-[0.3rem] font-normal text-balance text-[#7c7c7e]">
              {ts("s8.desc").replace("\n", " ")}
            </p>
          </div>
          {ENERGIES.map(([key, x]) => (
            <div
              key={key}
              className="absolute -translate-x-1/2 text-center"
              style={spot(x, 11.58, 2.15)}
            >
              <p className="text-[0.18rem] leading-[0.24rem] font-medium text-[#fffcf5]">
                {t(`s8.${key}`)}
              </p>
              <p className="mt-[0.03rem] text-[0.14rem] leading-[0.18rem] font-normal text-[#c9c1b9]">
                {t(`s8.${key}Desc`)}
              </p>
            </div>
          ))}
          <p className="absolute inset-x-[0.7rem] top-[12.58rem] text-[0.11rem] leading-[0.15rem] font-normal text-[#a0988f]">
            {t("note.4")}
          </p>
        </PhonePicture>
        {/* installation straight from ORVIBO: the six steps */}
        <PhonePicture {...pic("p10")}>
          <div className="absolute inset-x-[0.45rem] top-[0.92rem] text-center">
            <h2 className="text-[0.46rem] leading-[0.62rem] font-semibold text-balance text-white">
              {t("s9.title")}
            </h2>
            <p
              className={cn(
                "mt-[0.14rem] text-[0.32rem] leading-[0.46rem] font-semibold text-balance",
                GOLD,
              )}
            >
              {t("s9.desc")}
            </p>
          </div>
          {STEPS.map(([x, y], i) => (
            <p
              key={`s9.step${i + 1}`}
              className="absolute w-[1.78rem] -translate-y-1/2 text-[0.145rem] leading-[0.2rem] font-normal text-[#f6e6d6]"
              style={spot(x, y)}
            >
              {ts(`s9.step${i + 1}`)
                .split("\n")
                .map((part) => (
                  <span key={part} className="block">
                    {part}
                  </span>
                ))}
            </p>
          ))}
        </PhonePicture>
        {/* the industry's highest standard: a 10-year warranty */}
        <PhonePicture {...pic("p11")}>
          {heading("s10.title", 1.02)}
          <p
            className={cn(
              "absolute w-[6.4rem] text-center text-[0.28rem] leading-[0.36rem] font-medium text-white",
              CENTRE,
            )}
            style={spot(3.75, 6.73)}
          >
            {t("s10.terms")}
          </p>
          <div className="absolute inset-x-[0.8rem] top-[7.3rem] text-center text-[0.105rem] leading-[0.15rem] font-normal text-[#8a8b90]">
            <p>{t("note.5")}</p>
            <p>{t("note.6")}</p>
          </div>
        </PhonePicture>
        {/* the specifications */}
        <div className="px-[0.4rem] pt-[0.3rem] pb-[0.8rem]">
          <div className="rounded-[0.24rem] bg-[#1c1c1c] px-[0.42rem] pt-[0.6rem] pb-[0.5rem]">
            <h2 className="text-center text-[0.4rem] leading-[0.52rem] font-semibold text-balance text-white">
              {t("s11.title")}
            </h2>
            <div className="mt-[0.5rem] flex justify-between gap-[0.2rem] border-b border-[#4a4a4a] pb-[0.2rem] text-[0.15rem] leading-[0.22rem]">
              <p>
                <span className="text-[#818181]">{t("s11.seriesLabel")}</span>{" "}
                <span className="font-medium text-white">
                  {t("s11.series")}
                </span>
              </p>
              <p className="text-right">
                <span className="text-[#818181]">{t("s11.modelLabel")}</span>{" "}
                <span className="font-medium text-white">{t("s11.model")}</span>
              </p>
            </div>
            <dl className="mt-[0.34rem] grid grid-cols-3 gap-x-[0.2rem] gap-y-[0.34rem]">
              {SPECS.map(([group, name]) => (
                <div key={name}>
                  <dt className="text-[0.13rem] leading-[0.18rem] font-normal text-[#808080]">
                    {t(`${group}.${name}`)}
                  </dt>
                  <dd className="mt-[0.06rem] text-[0.15rem] leading-[0.2rem] font-medium text-[#f4f4f4]">
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
