import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import type { CSSProperties } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. orvibo.com's 13th picture is only footnotes on black: here they are HTML, as are the
 * packages' notes cut off the foot of p11. */
const PIC = "/orvibo/products/jidacheng/phone";
const HEIGHT = {
  p01: 13.52,
  p02: 19.9,
  p03: 14.32,
  p04: 10.32,
  p05: 22.27,
  p06: 11.2,
  p07: 15.5,
  p08: 19.17,
  p09: 26.2,
  p10: 14.74,
  p11: 23.92,
  p12: 11.6,
} as const;
type Slice = keyof typeof HEIGHT;
/** Where p11's packages end and its notes begin. */
const PLANS_CUT = 21.55;

/** A spot in rem: the left edge (or, with `centre`, the middle) and the middle of the line. */
const spot = (x: number, y: number, width?: number): CSSProperties => ({
  left: `${x}rem`,
  top: `${y}rem`,
  width: width === undefined ? undefined : `${width}rem`,
});

/** The five jobs the unit replaces (02): the middle of each name. */
const JOBS = [
  ["s2.ac", 4.14, 4.39],
  ["s2.air", 6.04, 4.39],
  ["s2.heater", 3.55, 5.9],
  ["s2.boiler", 4.71, 5.9],
  ["s2.panel", 6.03, 5.9],
] as const;
/** The three figures under the storage unit (02): the middle of each column. */
const STATS = [
  ["1", 1.56],
  ["2", 3.75],
  ["3", 5.97],
] as const;
/** The two small cards (03): their middle and their heading's two lines (the second may be a line). */
const SMALL_CARDS = [
  { x: 2.07, title: ["s3.channelsTitle"], desc: "s3.channels" },
  { x: 5.39, title: ["s3.zonesTitle", "s3.zones1"], desc: "s3.zones2" },
] as const;
/** The three wide cards (03): their top and lines. */
const WIDE_CARDS = [
  {
    y: 1.6,
    title: ["s3.storeTitle"],
    lines: ["s3.store1", "s3.store2", "s3.store3"],
    width: 2.85,
  },
  {
    y: 8.48,
    title: ["s3.waterTitle", "s3.waterTitle2"],
    lines: ["s3.water1", "s3.water2"],
    width: 3.3,
  },
  {
    y: 11.62,
    title: ["s3.floorTitle"],
    lines: ["s3.floor1", "s3.floor2"],
    width: 3.3,
  },
] as const;
/** The heat diagram's three outputs (04): the middle of each tile's name. */
const OUTPUTS = [
  ["s4.cooling", 5.2],
  ["s4.floor", 6.27],
  ["s4.water", 7.26],
] as const;
/** The cycle's three steps (04): the middle of each column. */
const CYCLE = [
  ["draw", 1.43],
  ["recover", 3.72],
  ["store", 6.15],
] as const;
/** The cooling figures (05): the middle of each column. */
const COOLING = [
  ["throw", 1.68],
  ["speed", 3.79],
  ["noise", 5.9],
] as const;
/** The four photo cards (05): the middle and top of their words. */
const COMFORT = [
  ["1", 2.1, 13.22],
  ["2", 5.42, 13.22],
  ["3", 2.1, 17.2],
  ["4", 5.42, 17.2],
] as const;
/** The cost chart's rows (06): the middle of the row, the bar's end, the cost and the pill. */
const COSTS = [
  {
    key: "jidacheng",
    y: 4.75,
    end: 3.06,
    tone: "text-[#d8f1bf]",
    cost: "text-[#c5e9b5]",
  },
  {
    key: "heatPump",
    y: 5.26,
    end: 4.0,
    tone: "text-[#ededec]",
    cost: "text-[#e4e4e2]",
    more: "s6.heatPumpMore",
  },
  {
    key: "boiler",
    y: 5.76,
    end: 5.5,
    tone: "text-[#f8f7f6]",
    cost: "text-[#f3f2f0]",
    more: "s6.boilerMore",
  },
] as const;
const SAVINGS = ["bills", "devices", "space", "upkeep", "payback"] as const;
/** The three energy cards (07): the top of their words and the width they may take beside the picture. */
const ENERGY = [
  { title: "s7.pcm", desc: "s7.pcmDesc", y: 7.3, width: 2.65 },
  { title: "s7.geo", desc: "s7.geoDesc", y: 10.22, width: 2.25 },
  { title: "s7.zones", desc: "s7.zonesDesc", y: 12.62, width: 2.5 },
] as const;
/** The house's labels (08): the left of each (just past its dot) and its middle. */
const HOUSE = [
  ["s3.waterTag", 1.21, 4.52],
  ["m.house.ac", 2.92, 4.43],
  ["m.house.ambient", 3.93, 4.47],
  ["m.house.lights", 4.95, 3.94],
  ["m.house.solar", 5.97, 4.15],
  ["m.house.acTemp", 3.1, 4.75],
  ["m.house.air", 5.77, 4.78],
  ["m.house.floor", 3.38, 5.3],
] as const;
/** The speaker's bubbles (09): the left of each and its middle. */
const SPEAKER = [
  ["s9.hi", 1.04, 7.8],
  ["s9.ac", 2.6, 8.69],
  ["s9.floor", 1.15, 8.98],
] as const;
/** The core parts (09): the top left of each tile's words and their width. */
const PARTS = [
  {
    title: "s10.compressor",
    desc: "s10.compressorDesc",
    x: 1.02,
    y: 16.2,
    width: 2.2,
  },
  { title: "s10.valve", desc: "s10.valveDesc", x: 4.17, y: 16.2, width: 2.6 },
  {
    title: "s10.exchanger",
    desc: "s10.exchangerDesc",
    x: 4.16,
    y: 19.36,
    width: 2.1,
  },
  { title: "s10.fan", desc: "s10.fanDesc", x: 1.01, y: 20.08, width: 2.4 },
] as const;
/** The service steps (10): the left of each step's lines and the row's middle. */
const STEPS = [
  [1.38, 10.69],
  [3.39, 10.69],
  [5.5, 10.69],
  [1.38, 11.34],
  [3.39, 11.34],
  [5.5, 11.34],
] as const;
/** The three packages (11): their heading's middle, the pill's middle and the left edge of the unit it runs under,
 * the table's header row and its three rows. */
const PLANS = [
  {
    key: "p1",
    y: 9.3,
    pill: 9.69,
    unit: 6.32,
    head: 10.44,
    rows: [11.0, 11.61, 12.22],
    config: ["units3", "units5", "units6"],
    extra: undefined,
    models: ["EV180", "EV260", "EV300"],
  },
  {
    key: "p2",
    y: 13.55,
    pill: 13.94,
    unit: 5.92,
    head: 14.68,
    rows: [15.27, 15.89, 16.48],
    config: ["units3", "units5", "units6"],
    extra: ["tank", "tank", "tank"],
    models: ["EV180", "EV260", "EV300"],
  },
  {
    key: "p3",
    y: 17.8,
    pill: 18.15,
    unit: 5.95,
    head: 18.93,
    rows: [19.52, 20.12, 20.72],
    config: ["units3", "units5", "units6"],
    extra: ["pcm400", "pcm500", "pcm500"],
    models: ["EV180S", "EV260", "EV300"],
  },
] as const;
const PLAN_NOTES = ["1", "2", "3", "4", "5", "6"] as const;
const NOTES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
] as const;

const CENTRE = "-translate-x-1/2 -translate-y-1/2";

/** The Jidacheng integrated HVAC page on phones: orvibo.com's phone page, its pictures without their words and the
 * words in HTML. */
export function JidachengPhone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
  /** A phone picture, or its part down to `bottom` (rem). */
  const pic = (name: Slice, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, 0, 7.5, bottom] as const,
  });
  /** Lines (`\n`) as blocks. */
  const lines = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => (
        <span key={part} className="block">
          {part}
        </span>
      ));
  /** A pill with a fine border, centred on (x, y). */
  const pill = (key: string, y: number, className: string) => (
    <p
      className={cn(
        "absolute left-1/2 rounded-full border px-[0.26rem] text-center whitespace-nowrap",
        CENTRE,
        className,
      )}
      style={{ top: `${y}rem` }}
    >
      {t(key)}
    </p>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the series, the name and its line */}
        <PhonePicture {...pic("p01")}>
          <div className="absolute top-[0.93rem] left-[1.17rem]">
            <p className="text-[0.21rem] leading-[0.27rem] font-semibold text-[#5c5c5c]">
              {t("s1.series")}
            </p>
            <p className="text-[0.12rem] leading-[0.18rem] font-normal tracking-[0.04em] text-[#4a4a4a]">
              {t("s1.by")}
            </p>
          </div>
          <div className="absolute inset-x-[0.5rem] top-[2.5rem] text-center">
            <h1 className="text-[0.5rem] leading-[0.66rem] font-medium text-[#cd5713]">
              {lines("s1.title")}
            </h1>
            <p className="mt-[0.22rem] text-[0.26rem] leading-[0.38rem] font-normal tracking-[0.04em] text-balance text-[#8b6852]">
              {t("s1.desc")}
            </p>
          </div>
        </PhonePicture>
        {/* one unit, five jobs; it replaces the gas boiler, with its three figures */}
        <PhonePicture {...pic("p02")}>
          {pill(
            "s2.pill",
            1.4,
            "border-[#a88f6c] text-[0.22rem] leading-[0.4rem] font-normal text-[#f5debc]",
          )}
          <h2 className="absolute inset-x-[0.6rem] top-[2.23rem] -translate-y-1/2 text-center text-[0.54rem] leading-[0.66rem] font-medium text-[#f6d6ad]">
            {t("s2.title")}
          </h2>
          {JOBS.map(([key, x, y]) => (
            <p
              key={key}
              className={cn(
                "absolute w-[1.16rem] text-center text-[0.16rem] leading-[0.2rem] font-normal text-balance text-[#8a7f72]",
                CENTRE,
              )}
              style={spot(x, y)}
            >
              {t(key)}
            </p>
          ))}
          <div
            className={cn("absolute w-[1.8rem] text-center", CENTRE)}
            style={spot(1.65, 5.78)}
          >
            <p className="text-[0.21rem] leading-[0.28rem] font-normal text-[#968a7b]">
              {t("s2.unit")}
            </p>
            <p className="text-[0.15rem] leading-[0.2rem] font-normal text-[#8c8174]">
              {t("s2.unitDesc")}
            </p>
          </div>
          {pill(
            "s3.pill",
            9.07,
            "border-[#a88f6c] text-[0.22rem] leading-[0.4rem] font-normal text-[#f7e1c1]",
          )}
          <h2 className="absolute inset-x-[0.5rem] top-[9.62rem] text-center text-[0.5rem] leading-[0.64rem] font-medium text-balance text-[#fbe4be]">
            {t("s3.title")}
          </h2>
          {STATS.map(([n, x]) => (
            <div key={n}>
              <p
                className="absolute w-[2rem] -translate-x-1/2 -translate-y-full text-center text-[0.2rem] leading-[0.26rem] font-normal text-balance text-[#b59a7a]"
                style={spot(x, 18.52)}
              >
                {t(`s3.stat${n}`)}
              </p>
              <p
                className="absolute -translate-x-1/2 text-center text-[0.42rem] leading-[0.5rem] font-medium whitespace-nowrap text-[#edc688]"
                style={spot(x, 18.6)}
              >
                {t(`s3.value${n}`)}
              </p>
            </div>
          ))}
        </PhonePicture>
        {/* the storage, the two circuits and the zones, steady hot water, warm floors */}
        <PhonePicture {...pic("p03")}>
          {WIDE_CARDS.map((card) => (
            <div
              key={card.title[0]}
              className="absolute"
              style={spot(0.79, card.y, card.width)}
            >
              {card.title.map((key) => (
                <p
                  key={key}
                  className="text-[0.24rem] leading-[0.34rem] font-medium text-[#e1b28a]"
                >
                  {lines(key)}
                </p>
              ))}
              <div className="mt-[0.08rem] text-[0.17rem] leading-[0.25rem] font-normal text-[#c9c2bd]">
                {card.lines.map((key) => (
                  <p key={key}>{t(key)}</p>
                ))}
              </div>
            </div>
          ))}
          {SMALL_CARDS.map((card) => (
            <div
              key={card.desc}
              className="absolute -translate-x-1/2 text-center text-balance"
              style={spot(card.x, 4.3, 2.9)}
            >
              {card.title.map((key) => (
                <p
                  key={key}
                  className="text-[0.21rem] leading-[0.3rem] font-medium text-[#e2b48c]"
                >
                  {t(key)}
                </p>
              ))}
              <p className="mt-[0.06rem] text-[0.16rem] leading-[0.23rem] font-normal text-[#cdc6c1]">
                {t(card.desc)}
              </p>
            </div>
          ))}
          <p className="absolute top-[8.7rem] left-[4.3rem] flex -translate-y-1/2 items-center gap-[0.06rem] rounded-full bg-white/20 py-[0.04rem] pr-[0.14rem] pl-[0.04rem] text-[0.14rem] leading-[0.28rem] font-medium whitespace-nowrap text-[#e4e4e4] backdrop-blur-[3px]">
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="size-[0.28rem] shrink-0"
            >
              <circle
                cx="16"
                cy="16"
                r="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16 8.5c-3 4.2-4.6 7-4.6 9a4.6 4.6 0 0 0 9.2 0c0-2-1.6-4.8-4.6-9Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            {t("s3.waterTag")}
          </p>
        </PhonePicture>
        {/* TurboHeatCycle: the heat diagram's outputs and its three steps */}
        <PhonePicture {...pic("p04")}>
          <div className="absolute inset-x-[0.45rem] top-[1.2rem] text-center">
            <p className="text-[0.21rem] leading-[0.3rem] font-normal text-balance text-[#c5c5c5]">
              {t("s4.kicker")}
            </p>
            <h2 className="mt-[0.28rem] text-[0.46rem] leading-[0.7rem] font-medium text-balance">
              <span className="block text-white">{t("s4.title")}</span>
              <span className="block text-[#d2d1d4]">{t("s4.title2")}</span>
            </h2>
          </div>
          {OUTPUTS.map(([key, y]) => (
            <p
              key={key}
              className={cn(
                "absolute w-[1.24rem] text-center text-[0.14rem] leading-[0.17rem] font-normal text-balance text-[#c0c0bc]",
                CENTRE,
              )}
              style={spot(6.26, y)}
            >
              {t(key)}
            </p>
          ))}
          {CYCLE.map(([key, x]) => (
            <div
              key={key}
              className="absolute -translate-x-1/2 text-center"
              style={spot(x, 8.47, 2.15)}
            >
              <p className="text-[0.28rem] leading-[0.36rem] font-medium text-[#d35c35]">
                {t(`s4.${key}`)}
              </p>
              <p className="text-[0.25rem] leading-[0.34rem] font-medium text-white">
                {t(`s4.${key}What`)}
              </p>
              <p className="mt-[0.06rem] text-[0.16rem] leading-[0.22rem] font-normal text-balance text-[#a8a8a8]">
                {t(`s4.${key}Desc`)}
              </p>
            </div>
          ))}
        </PhonePicture>
        {/* one system for every season: the cooling card and the four photo cards */}
        <PhonePicture {...pic("p05")}>
          <h2 className="absolute inset-x-[0.5rem] top-[1.1rem] text-center text-[0.46rem] leading-[0.58rem] font-medium text-balance text-[#e9d9c0]">
            {t("s5.title")}
          </h2>
          <p className="absolute inset-x-[0.7rem] top-[10.62rem] text-center text-[0.2rem] leading-[0.28rem] font-normal text-balance text-[#fff9e9]">
            {t("s5.lead")}
          </p>
          {COOLING.map(([key, x]) => (
            <div
              key={key}
              className="absolute -translate-x-1/2 text-center"
              style={spot(x, 11.42, 2)}
            >
              <p className="text-[0.3rem] leading-[0.38rem] font-normal whitespace-nowrap text-[#e4d2bc]">
                {t(`s5.${key}`)}
              </p>
              <p className="text-[0.16rem] leading-[0.21rem] font-normal text-balance text-[#dbc8b1]">
                {t(`s5.${key}Desc`)}
              </p>
            </div>
          ))}
          {COMFORT.map(([n, x, y]) => (
            <div
              key={n}
              className="absolute -translate-x-1/2 text-center text-balance"
              style={spot(x, y, 2.95)}
            >
              <p className="text-[0.18rem] leading-[0.25rem] font-normal text-[#ffedd4]">
                {lines(`s5.card${n}`)}
              </p>
              <p className="mt-[0.06rem] text-[0.15rem] leading-[0.21rem] font-normal text-[#b39784]">
                {t(`s5.card${n}Desc`)}
              </p>
            </div>
          ))}
          <p className="absolute inset-x-[0.62rem] top-[21.5rem] text-[0.13rem] leading-[0.19rem] font-normal text-[#6e6056]">
            {t("s5.note")}
          </p>
        </PhonePicture>
        {/* better warmth, half the bill: the cost chart and the savings */}
        <PhonePicture {...pic("p06")}>
          <div className="absolute inset-x-[0.75rem] top-[1.62rem] text-center">
            <h2 className="text-[0.44rem] leading-[0.56rem] font-normal text-balance text-[#ebdcc5]">
              {t("s6.title")}
            </h2>
            <p className="mt-[0.18rem] text-[0.2rem] leading-[0.34rem] font-normal text-[#b3b1ae]">
              {lines("s6.desc")}
            </p>
          </div>
          <p className="absolute top-[4.25rem] right-[0.85rem] left-[1.07rem] -translate-y-1/2 text-[0.14rem] leading-[0.2rem] font-normal text-[#7a7a78]">
            {t("s6.chart")}
          </p>
          {COSTS.map((row) => (
            <div key={row.key}>
              <p
                className={cn(
                  "absolute w-[1.22rem] -translate-y-1/2 text-[0.13rem] leading-[0.16rem] font-medium",
                  row.tone,
                )}
                style={spot(1.07, row.y)}
              >
                {t(`s6.${row.key}`)}
              </p>
              <p
                className="absolute flex -translate-y-1/2 items-center gap-[0.08rem] whitespace-nowrap"
                style={spot(row.end + 0.04, row.y)}
              >
                <span
                  className={cn(
                    "text-[0.16rem] leading-[0.2rem] font-medium",
                    row.cost,
                  )}
                >
                  {t(`s6.${row.key}Cost`)}
                </span>
                {"more" in row && (
                  <span className="rounded-full border border-[#b8695e] px-[0.06rem] text-[0.12rem] leading-[0.18rem] font-normal text-[#c97a6e]">
                    {t(row.more)}
                  </span>
                )}
              </p>
            </div>
          ))}
          <div className="absolute inset-x-[0.8rem] top-[6.88rem] -translate-y-1/2 text-center">
            <p className="text-[0.24rem] leading-[0.3rem] font-medium text-[#fff9e6]">
              {t("s6.more")}
            </p>
            <p className="text-[0.16rem] leading-[0.22rem] font-normal text-[#f3e6cf]">
              {t("s6.moreDesc")}
            </p>
          </div>
          <ul className="absolute top-[7.55rem] right-[0.8rem] left-[0.98rem] flex list-disc flex-col gap-[0.1rem] pl-[0.16rem] text-[0.17rem] leading-[0.24rem] font-normal text-[#a8a3a3] marker:text-[#d9a46c]">
            {SAVINGS.map((key) => (
              <li key={key}>
                <span className="font-medium text-[#d9a46c]">
                  {t(`s6.${key}`)}:
                </span>{" "}
                {t(`s6.${key}Desc`)}
              </li>
            ))}
          </ul>
        </PhonePicture>
        {/* IntePilot: the off-peak curve, geofencing, the zones */}
        <PhonePicture {...pic("p07")}>
          {pill(
            "s7.pill",
            1.33,
            "border-white/60 text-[0.22rem] leading-[0.42rem] font-normal text-[#eae5e4]",
          )}
          <h2 className="absolute inset-x-[0.5rem] top-[1.82rem] text-center text-[0.44rem] leading-[0.58rem] font-medium text-balance text-[#f7f4f3]">
            {t("s7.title")}
          </h2>
          {ENERGY.map((card) => (
            <div
              key={card.title}
              className="absolute"
              style={spot(0.9, card.y, card.width)}
            >
              <p className="text-[0.21rem] leading-[0.29rem] font-medium text-[#ece0cb]">
                {ts(card.title).replace("\n", " ")}
              </p>
              <p className="mt-[0.06rem] text-[0.15rem] leading-[0.22rem] font-normal text-[#cbcbcb]">
                {t(card.desc)}
              </p>
            </div>
          ))}
          {(
            [
              ["s7.peak", 6.17, 7.15],
              ["s7.trough", 3.1, 8.58],
            ] as const
          ).map(([key, x, y]) => (
            <p
              key={key}
              className={cn(
                "absolute rounded-full border border-white/10 bg-[#262626] px-[0.12rem] text-[0.13rem] leading-[0.3rem] font-normal whitespace-nowrap text-[#d2d2d2]",
                CENTRE,
              )}
              style={spot(x, y)}
            >
              {t(key)}
            </p>
          ))}
        </PhonePicture>
        {/* the smart home's new star: the house, the screen, the butler, the app and OTA */}
        <PhonePicture {...pic("p08")}>
          {pill(
            "s8.kicker",
            1.42,
            "border-white/60 text-[0.22rem] leading-[0.42rem] font-normal text-[#edebeb]",
          )}
          <h2 className="absolute inset-x-[0.5rem] top-[1.9rem] text-center text-[0.44rem] leading-[0.58rem] font-medium text-balance text-[#f4f3f2]">
            {t("s8.title")}
          </h2>
          {HOUSE.map(([key, x, y]) => (
            <p
              key={key}
              className="absolute -translate-y-1/2 text-[0.085rem] leading-none font-normal whitespace-nowrap text-[#f1d8c4]"
              style={spot(x, y)}
            >
              {t(key)}
            </p>
          ))}
          <div className="absolute w-[2.6rem]" style={spot(0.92, 9.55)}>
            <p className="text-[0.22rem] leading-[0.3rem] font-medium whitespace-nowrap text-[#83bed7]">
              {t("s8.screen")}
            </p>
            <p className="text-[0.15rem] leading-[0.2rem] font-normal text-balance text-[#85c9d0]">
              {t("s8.screenSize")}
            </p>
          </div>
          <p
            className="absolute w-[2.8rem] -translate-y-1/2 text-right text-[0.14rem] leading-[0.19rem] font-normal text-[#a09f9d]"
            style={spot(3.98, 9.95)}
          >
            {lines("s8.screenDesc")}
          </p>
          {(
            [
              ["m.chat.ask", "left-[0.88rem] top-[11.6rem] max-w-[4.4rem]"],
              ["m.chat.baby", "left-[0.72rem] top-[12.27rem] max-w-[3.4rem]"],
              ["s8.sure", "right-[0.82rem] top-[12.36rem] text-[#9a9aa8]"],
              ["m.chat.bedroom", "right-[0.8rem] top-[12.8rem] max-w-[3.6rem]"],
            ] as const
          ).map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute -translate-y-1/2 rounded-[0.17rem] border border-white/35 bg-white/15 px-[0.14rem] py-[0.07rem] text-[0.14rem] leading-[0.19rem] font-normal text-[#f0ecea] backdrop-blur-[2px]",
                at,
              )}
            >
              {t(key)}
            </p>
          ))}
          <div
            className="absolute w-[2.9rem] -translate-y-1/2 text-[0.2rem] leading-[0.3rem] font-medium text-[#86cdd8]"
            style={spot(0.95, 13.82)}
          >
            <p>{t("s8.butler")}</p>
            <p>{t("s8.butlerTag")}</p>
          </div>
          <p
            className="absolute w-[2.9rem] -translate-y-1/2 text-right text-[0.14rem] leading-[0.19rem] font-normal text-[#9a9997]"
            style={spot(3.88, 13.85)}
          >
            {lines("s8.butlerDesc")}
          </p>
          {(
            [
              ["app", 2.0],
              ["ota", 5.44],
            ] as const
          ).map(([key, x]) => (
            <div
              key={key}
              className="absolute -translate-x-1/2 text-center text-[0.22rem] leading-[0.32rem] font-medium text-balance text-[#84cfd4]"
              style={spot(x, 17.42, 2.9)}
            >
              <p>{t(`s8.${key}`)}</p>
              <p>{t(`s8.${key}Desc`)}</p>
            </div>
          ))}
        </PhonePicture>
        {/* the ecosystems, then the flagship core parts */}
        <PhonePicture {...pic("p09")}>
          <h2 className="absolute inset-x-[0.4rem] top-[1.15rem] text-center text-[0.38rem] leading-[0.54rem] font-medium text-white">
            {lines("s9.title")}
          </h2>
          <p className="absolute inset-x-[0.6rem] top-[3.48rem] flex flex-wrap justify-center gap-x-[0.24rem] text-[0.19rem] leading-[0.28rem] font-medium text-[#e5d7c0]">
            <span>{t("s9.matter")}</span>
            <span>{t("s9.apple")}</span>
          </p>
          <p className="absolute inset-x-[0.62rem] top-[3.86rem] text-center text-[0.135rem] leading-[0.2rem] font-normal text-[#b7b6b6]">
            {t("s9.desc")}
            <br />
            {t("s9.kinds")}
          </p>
          <p className="absolute top-[5.41rem] left-[2.88rem] -translate-y-1/2 text-[0.075rem] leading-none font-semibold whitespace-nowrap text-[#e3d4f0]">
            {t("s9.home")}
          </p>
          <p
            className="absolute w-[1.42rem] -translate-y-1/2 text-[0.15rem] leading-[0.2rem] font-normal text-[#d6d3d3]"
            style={spot(4.42, 6.17)}
          >
            {t("s9.siri")}
          </p>
          {SPEAKER.map(([key, x, y]) => (
            <p
              key={key}
              className="absolute -translate-y-1/2 rounded-full border border-white/25 bg-[#3e4a66]/60 px-[0.08rem] text-[0.11rem] leading-[0.22rem] font-normal whitespace-nowrap text-[#e0e4ec] backdrop-blur-[2px]"
              style={spot(x, y)}
            >
              {t(key)}
            </p>
          ))}
          {(
            [
              ["xiaoai", 2.21, "bg-[#d7b289] text-[#3f270e]"],
              [
                "mcp",
                5.32,
                "border border-[#c9925f] bg-[#2e201e] text-[#e3c29b]",
              ],
            ] as const
          ).map(([key, x, tone]) => (
            <div key={key}>
              <p
                className={cn(
                  "absolute rounded-full px-[0.14rem] text-[0.15rem] leading-[0.3rem] font-medium whitespace-nowrap",
                  CENTRE,
                  tone,
                )}
                style={spot(x, 10.04)}
              >
                {t(`s9.${key}`)}
              </p>
              <p
                className="absolute -translate-x-1/2 text-center text-[0.12rem] leading-[0.17rem] font-normal text-balance text-[#bfc0c0]"
                style={spot(x, 10.26, 2.7)}
              >
                {t(`s9.${key}Desc`)}
              </p>
            </div>
          ))}
          <p className="absolute inset-x-[0.66rem] top-[11.22rem] text-[0.13rem] leading-[0.19rem] font-normal text-[#555555]">
            {t("s9.note")}
          </p>
          <div className="absolute inset-x-[0.5rem] top-[13.2rem] text-center">
            <h2 className="text-[0.42rem] leading-[0.58rem] font-medium text-balance text-[#f9f8f8]">
              {t("s10.title")}
            </h2>
            <p className="mt-[0.14rem] text-[0.28rem] leading-[0.4rem] font-medium text-balance text-[#f4f4f4]">
              {t("s10.desc")}
            </p>
          </div>
          {PARTS.map((part) => (
            <div
              key={part.title}
              className="absolute"
              style={spot(part.x, part.y, part.width)}
            >
              <p className="text-[0.17rem] leading-[0.25rem] font-medium text-[#d1ba9d]">
                {lines(part.title)}
              </p>
              <p className="mt-[0.07rem] text-[0.13rem] leading-[0.19rem] font-normal text-[#aca9a7] [text-shadow:0_0_0.06rem_#1a1412]">
                {lines(part.desc)}
              </p>
            </div>
          ))}
          <p
            className="absolute w-[2.7rem] -translate-y-1/2 text-[0.19rem] leading-[0.26rem] font-medium text-[#d4c6ad]"
            style={spot(0.99, 23.28)}
          >
            {t("s10.indoor")}
          </p>
          <p
            className="absolute w-[2rem] -translate-y-1/2 text-[0.19rem] leading-[0.3rem] font-medium text-[#ceb799]"
            style={spot(4.6, 23.48)}
          >
            {lines("s10.piping")}
          </p>
          <p
            className="absolute w-[2.8rem] -translate-y-1/2 text-[0.19rem] leading-[0.26rem] font-medium text-[#c4b69e]"
            style={spot(1.01, 24.82)}
          >
            {lines("s10.damping")}
          </p>
        </PhonePicture>
        {/* installation and service by ORVIBO: the tab, the six steps, the warranty and the standard */}
        <PhonePicture {...pic("p10")}>
          <div className="absolute inset-x-[0.5rem] top-[0.9rem] text-center">
            <h2 className="text-[0.4rem] leading-[0.56rem] font-medium text-balance text-[#e9dac4]">
              {t("s11.title")}
            </h2>
            <p className="mt-[0.12rem] text-[0.28rem] leading-[0.4rem] font-medium text-balance text-[#ecdec7]">
              {t("s11.desc")}
            </p>
          </div>
          <p className="absolute top-[8.92rem] left-1/2 -translate-x-1/2 rounded-b-[0.14rem] bg-[linear-gradient(90deg,#a98257,#e2bd87_50%,#a98257)] px-[0.36rem] text-[0.21rem] leading-[0.46rem] font-medium whitespace-nowrap text-[#1a0d00]">
            {t("s11.tab")}
          </p>
          <p className="absolute inset-x-[0.5rem] top-[9.47rem] text-center text-[0.13rem] leading-[0.2rem] font-normal text-[#c4c2bf]">
            {lines("s11.tabDesc")}
          </p>
          {STEPS.map(([x, y], i) => (
            <p
              key={`s11.step${i + 1}`}
              className="absolute w-[1.62rem] -translate-y-1/2 text-[0.135rem] leading-[0.19rem] font-normal text-[#aba8a5]"
              style={spot(x, y)}
            >
              {lines(`s11.step${i + 1}`)}
            </p>
          ))}
          <p className="absolute top-[13.19rem] left-[1.67rem] -translate-x-1/2 -translate-y-1/2 text-[0.07rem] leading-none font-medium whitespace-nowrap text-[#b3aa9a] uppercase">
            {t("s11.badge")}
          </p>
          <div
            className="absolute w-[1.3rem] -translate-y-1/2"
            style={spot(2.26, 12.96)}
          >
            <p className="text-[0.3rem] leading-[0.38rem] font-medium text-[#caae89]">
              {t("s11.warranty")}
            </p>
            <p className="text-[0.17rem] leading-[0.22rem] font-normal text-[#c1bfbd]">
              {t("s11.warrantyDesc")}
            </p>
          </div>
          {/* the emblem in the diamond: orvibo.com has the character for "fine work" there, here a check mark */}
          <svg
            aria-hidden="true"
            viewBox="0 0 56 56"
            className="absolute top-[12.82rem] left-[4.61rem] size-[0.3rem] -translate-x-1/2 -translate-y-1/2"
          >
            <defs>
              <linearGradient
                id="jidacheng-phone-gold"
                x1="0"
                y1="8"
                x2="0"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#c6b08d" />
                <stop offset="1" stopColor="#f6dcbb" />
              </linearGradient>
            </defs>
            <path
              d="M11 29.5 23 41 45.5 15"
              fill="none"
              stroke="url(#jidacheng-phone-gold)"
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            className="absolute w-[1.8rem] -translate-y-1/2"
            style={spot(5.12, 12.96)}
          >
            <p className="text-[0.22rem] leading-[0.3rem] font-medium text-[#d8c19e]">
              {t("s11.precision")}
            </p>
            <p className="mt-[0.03rem] text-[0.14rem] leading-[0.19rem] font-normal text-[#cbc9c7]">
              {t("s11.precisionDesc")}
            </p>
          </div>
        </PhonePicture>
        {/* the packages: three tables of prices, then their notes */}
        <PhonePicture {...pic("p11", PLANS_CUT)}>
          <div className="absolute inset-x-[0.5rem] top-[1.2rem] text-center">
            <h2 className="text-[0.44rem] leading-[0.6rem] font-medium">
              <span className="block text-[#e7ebfa]">
                {ts("m.plans.title").split("\n")[0]}
              </span>
              <span className="block text-[#8692b2]">
                {ts("m.plans.title").split("\n")[1]}
              </span>
            </h2>
            <p className="mt-[0.2rem] text-[0.2rem] leading-[0.3rem] font-normal text-balance text-[#aeafb6]">
              {t("m.plans.desc")}
            </p>
          </div>
          {PLANS.map((plan) => (
            <div key={plan.key}>
              <h3
                className="absolute left-[0.76rem] -translate-y-1/2 text-[0.24rem] leading-[0.32rem] font-medium text-[#e37646]"
                style={{ top: `${plan.y}rem` }}
              >
                {t(`m.plans.${plan.key}`)}
              </h3>
              <p
                className="absolute w-[2.45rem] -translate-y-1/2 text-[0.15rem] leading-[0.2rem] font-normal text-[#adadad]"
                style={spot(0.76, plan.pill)}
              >
                {t(`m.plans.${plan.key}Tag`)}
              </p>
              <p
                className="absolute max-w-[2.9rem] -translate-y-1/2 rounded-l-[0.13rem] bg-[linear-gradient(90deg,#c4c4c4,#b0b0b0)] py-[0.03rem] pr-[0.08rem] pl-[0.14rem] text-[0.13rem] leading-[0.17rem] font-normal text-balance text-[#1d1d1d]"
                style={{
                  top: `${plan.pill}rem`,
                  right: `${7.5 - plan.unit}rem`,
                }}
              >
                {t(`m.plans.${plan.key}Pill`)}
              </p>
              {(
                [
                  ["name", 1.56],
                  ["config", 3.82],
                  ["price", 5.88],
                ] as const
              ).map(([key, x]) => (
                <p
                  key={key}
                  className={cn(
                    "absolute text-[0.16rem] leading-[0.2rem] font-normal whitespace-nowrap text-[#c1c2c4]",
                    CENTRE,
                  )}
                  style={spot(x, plan.head)}
                >
                  {t(`m.plans.${key}`)}
                </p>
              ))}
              {plan.rows.map((y, i) => (
                <div key={plan.models[i]}>
                  <div
                    className={cn(
                      "absolute text-center whitespace-nowrap",
                      CENTRE,
                    )}
                    style={spot(1.56, y)}
                  >
                    <p className="text-[0.13rem] leading-[0.18rem] font-normal text-[#ababab]">
                      {t("m.plans.model")} {plan.models[i]}
                    </p>
                    <p className="text-[0.105rem] leading-[0.15rem] font-normal text-[#6c6c6c]">
                      {t(`m.plans.area${i + 1}`)}
                    </p>
                  </div>
                  <p
                    className={cn(
                      "absolute w-[2.05rem] text-center text-[0.115rem] leading-[0.15rem] font-normal text-[#7c7c7c]",
                      CENTRE,
                    )}
                    style={spot(3.82, y)}
                  >
                    {lines(`m.plans.${plan.config[i]}`)}
                    {plan.extra && (
                      <span className="block">
                        {t(`m.plans.${plan.extra[i]}`)}
                      </span>
                    )}
                  </p>
                  <div
                    className={cn(
                      "absolute text-center whitespace-nowrap",
                      CENTRE,
                    )}
                    style={spot(5.88, y)}
                  >
                    <p className="text-[0.21rem] leading-[0.26rem] font-medium text-[#e37344]">
                      <span className="text-[0.12rem] font-normal">
                        {t("m.plans.from")}
                      </span>{" "}
                      {t(`m.plans.${plan.key}r${i + 1}`)}
                    </p>
                    <p className="text-[0.105rem] leading-[0.15rem] font-normal text-[#767677]">
                      {t(`m.plans.${plan.key}r${i + 1}Install`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </PhonePicture>
        <div className="flex flex-col gap-[0.06rem] px-[0.64rem] pt-[0.06rem] pb-[0.5rem] text-[0.13rem] leading-[0.2rem] font-normal text-[#555555]">
          {PLAN_NOTES.map((n) => (
            <p key={n}>{t(`m.plans.note${n}`)}</p>
          ))}
        </div>
        {/* the end of the home gas era */}
        <PhonePicture {...pic("p12")}>
          <div className="absolute inset-x-[0.4rem] top-[1.6rem] text-center">
            <h2 className="text-[0.8rem] leading-[1.06rem] font-semibold text-[#cc5206]">
              {lines("s12.title")}
            </h2>
            <p className="mt-[0.4rem] text-[0.21rem] leading-[0.48rem] font-normal text-balance text-[#b0a9a0]">
              {lines("s12.desc")}
            </p>
          </div>
        </PhonePicture>
        {/* the footnotes for the whole page */}
        <div className="flex flex-col gap-[0.2rem] px-[0.64rem] pt-[0.5rem] pb-[1rem] text-[0.15rem] leading-[0.23rem] font-normal text-[#5c5c5c]">
          {NOTES.map((n) => (
            <p key={n}>{t(`note.${n}`)}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
