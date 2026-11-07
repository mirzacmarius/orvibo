import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import { type CSSProperties, Fragment, type ReactNode } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. Its second picture is the CCTV banner MixStation's phone page shows too, so it is that
 * page's picture; its last (the spec table on a plain card) is HTML here. */
const PIC = "/orvibo/products/v180/phone";
const CCTV = "/orvibo/products/mixstation/phone/p02.webp";
const HEIGHT = {
  p01: 14.61,
  p03: 12.0,
  p04: 18.55,
  p05: 11.99,
  p06: 12.0,
  p07: 12.0,
  p08: 12.0,
  p09: 12.0,
  p10: 11.99,
  p11: 12.01,
  p12: 12.0,
  p13: 16.75,
  p14: 12.01,
  p15: 10.03,
} as const;
type Slice = keyof typeof HEIGHT;
/** Where p15's badge ends and its notes begin (set below it in HTML: they are long). */
const NOTES_CUT = 8.8;

/** The blue of the energy headings, from violet to cyan as orvibo.com draws it. */
const BLUE =
  "box-decoration-clone bg-gradient-to-r from-[#8a98e5] via-[#76b4f8] to-[#a5ebf7] bg-clip-text text-transparent";
/** The bronze of the brand headings' second tone. */
const BRONZE =
  "box-decoration-clone bg-gradient-to-b from-[#e8d3b8] to-[#cfa77c] bg-clip-text text-transparent";
const CENTRE = "-translate-x-1/2 -translate-y-1/2";
/** Words over a photo. */
const SHADE = "[text-shadow:0_0_0.06rem_rgba(0,0,0,0.75)]";
/** A spot in rem: the left edge (or, with CENTRE, the middle) and the top (or the middle). */
const spot = (x: number, y: number, width?: number): CSSProperties => ({
  left: `${x}rem`,
  top: `${y}rem`,
  width: width === undefined ? undefined : `${width}rem`,
});

/** The four uses (04): each card's key and the middle of its words. */
const USES = [
  ["ac", 5.91],
  ["floor", 9.56],
  ["water", 13.22],
  ["fresh", 16.87],
] as const;
/** The shower's and the bathtub's hot water tags (05): the key, the left edge and the middle. */
const TAPS = [
  ["shower", 6.42, 6.92],
  ["tub", 6.5, 7.78],
] as const;
/** The MixHPS features under their icons (09): the middle of each. */
const FEATURES = [
  ["control", 1.54],
  ["zones", 3.01],
  ["stats", 4.49],
  ["procare", 5.95],
] as const;
/** The component tiles (12): their words' top left. */
const TILES = [
  ["compressor", 1.07, 2.82],
  ["valve", 4.16, 2.82],
  ["tank", 1.07, 7.3],
  ["motor", 4.16, 7.3],
] as const;
/** The house's tags (13): the key, where it stands beside its dot (the right edge for those left of it) and the
 * middle. */
const TAGS = [
  ["light", "right", 2.93, 4.05],
  ["water", "left", 4.05, 4.3],
  ["ac", "right", 2.69, 4.86],
  ["unit", "left", 4.85, 5.01],
  ["floor", "left", 4.05, 5.4],
] as const;
/** The proof cards (13): the key and the middle of its words. */
const PROOFS = [
  ["s12.patents", 7.9],
  ["s12.caqi", 9.43],
  ["s13.users", 10.92],
  ["s13.developers", 12.45],
  ["s13.stores", 13.98],
  ["s13.awards", 15.5],
] as const;
/** The installation steps (14): the middle of each column, and each row's top. */
const STEP_X = [1.545, 2.655, 3.685, 4.775, 5.91] as const;
const STEP_Y = [9.95, 11.0] as const;
/** The spec table (16), in orvibo.com's phone order: each row's key group and name. */
const SPECS = [
  ["spec", "supply"],
  ["spec", "grade"],
  ["spec", "coolingInput"],
  ["spec", "cooling"],
  ["spec", "refrigerant"],
  ["spec", "coolingCurrent"],
  ["spec", "charge"],
  ["spec", "heating"],
  ["spec", "inputPower"],
  ["spec", "inputCurrent"],
  ["spec", "heatingInput"],
  ["spec", "heatingCurrent"],
  ["spec", "overpressure"],
  ["spec", "maxPressure"],
  ["spec", "exchanger"],
  ["spec", "shock"],
  ["spec", "weight"],
  ["spec", "noise"],
  ["spec", "apf"],
  ["spec", "water"],
] as const;

/** The V180 integrated HVAC page on phones: orvibo.com's phone page, its pictures without their words and the words
 * in HTML. */
export function V180Phone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
  /** A phone picture, or its part down to `bottom` (rem). */
  const pic = (name: Slice, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, 0, 7.5, bottom] as const,
  });
  /** A heading in orvibo.com's two tones: its [bracketed] words in `tone`, a "*" as a small raised mark. */
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
  /** A key's lines (`\n`) on one line. */
  const flat = (key: string) => ts(key).replaceAll("\n", " ");
  /** A key's lines (`\n`) as blocks. */
  const lines = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => (
        <span key={part} className="block">
          {part}
        </span>
      ));
  /** A section's heading and its line under it, centred from `top` (rem). */
  const head = (
    title: string,
    desc: string,
    top: number,
    {
      titleClass = "text-white",
      descClass = "text-[#d5d3d4]",
      tone = "",
    }: { titleClass?: string; descClass?: string; tone?: string } = {},
  ) => (
    <div
      className="absolute inset-x-[0.45rem] text-center"
      style={{ top: `${top}rem` }}
    >
      <h2
        className={cn(
          "text-[0.46rem] leading-[0.64rem] font-semibold text-balance",
          titleClass,
        )}
      >
        {rich(title, tone)}
      </h2>
      <p
        className={cn(
          "mt-[0.26rem] text-[0.21rem] leading-[0.32rem] font-normal text-balance",
          descClass,
        )}
      >
        {rich(desc)}
      </p>
    </div>
  );
  /** A speech bubble from `x` rem, its middle at `y` rem, its tail under its middle. */
  const bubble = (key: string, x: number, y: number, colour: string) => (
    <p
      className={cn(
        "absolute -translate-y-1/2 rounded-[0.14rem] px-[0.18rem] py-[0.07rem] text-[0.17rem] leading-[0.24rem] font-normal whitespace-nowrap text-[#fff4e1]",
      )}
      style={{ ...spot(x, y), backgroundColor: colour }}
    >
      {t(key)}
      <span
        className="absolute top-full left-1/2 -translate-x-1/2 border-x-[0.07rem] border-t-[0.09rem] border-x-transparent"
        style={{ borderTopColor: colour }}
      />
    </p>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the name, the slogan, the two savings */}
        <PhonePicture {...pic("p01")}>
          <p
            className={cn(
              "absolute rounded-full border border-[#a39a91] px-[0.24rem] text-[0.21rem] leading-[0.44rem] font-normal whitespace-nowrap text-[#f5ebe2]",
              CENTRE,
            )}
            style={spot(3.76, 1.93)}
          >
            {t("s1.name")}
          </p>
          <div className="absolute inset-x-[0.45rem] top-[2.47rem] flex h-[2.8rem] items-center justify-center text-center">
            <h1 className="text-[0.56rem] leading-[0.84rem] font-medium tracking-[0.04em] text-balance text-[#f4ebe2]">
              {lines("s1.title")}
            </h1>
          </div>
          <p className="absolute inset-x-[0.45rem] top-[5.48rem] flex flex-wrap justify-center gap-x-[0.24rem] text-[0.24rem] leading-[0.34rem] font-normal text-[#f6eae1]">
            {ts("s1.uses")
              .split("\n")
              .map((part) => (
                <span key={part}>{part}</span>
              ))}
          </p>
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
            <h2 className="text-[0.4rem] leading-[0.56rem] font-semibold text-balance text-white">
              {t("research.title")}
            </h2>
            <p className="mt-[0.24rem] text-[0.22rem] leading-[0.36rem] font-normal text-balance text-[#8c8c8c]">
              {t("research.lab")}
            </p>
          </div>
          <div
            className={cn("absolute -translate-y-full", SHADE)}
            style={spot(1.12, 8.95, 2.7)}
          >
            <p className="text-[0.3rem] leading-[0.4rem] font-medium text-[#fbfbfb]">
              {t("research.name")}
            </p>
            <p className="mt-[0.06rem] text-[0.14rem] leading-[0.2rem] font-normal text-[#d4d4d4]">
              {lines("research.bio")}
            </p>
          </div>
          <div className="absolute inset-x-[0.8rem] top-[9.86rem] text-center text-[0.21rem] leading-[0.34rem] font-normal text-balance text-[#8b8b8b]">
            <p>{t("research.tech")}</p>
            <p>{t("research.patents")}</p>
          </div>
        </PhonePicture>
        {/* one unit, four uses */}
        <PhonePicture {...pic("p04")}>
          <h2 className="absolute inset-x-[0.45rem] top-[0.95rem] text-center text-[0.4rem] leading-[0.56rem] font-semibold text-balance text-white">
            {lines("s3.title")}
          </h2>
          {USES.map(([key, y]) => (
            <Fragment key={key}>
              <p
                className="absolute -translate-y-1/2 text-[0.25rem] leading-[0.3rem] font-medium text-balance text-[#f2f2f2]"
                style={spot(0.98, y, 1.4)}
              >
                {t(`s3.${key}`)}
              </p>
              <p
                className="absolute -translate-y-1/2 text-[0.16rem] leading-[0.21rem] font-normal text-[#9a9a9a]"
                style={spot(2.5, y, 4.1)}
              >
                {lines(`s3.${key}Desc`)}
              </p>
            </Fragment>
          ))}
        </PhonePicture>
        {/* smart zero cold water: the call, the reply, the rooms */}
        <PhonePicture {...pic("p05")}>
          {head("s4.title", "s4.desc", 1.16, { descClass: "text-[#d0d3d6]" })}
          {bubble("s4.reply", 3.4, 6.52, "rgba(132,98,62,0.92)")}
          {bubble("s4.ask", 0.77, 7.42, "rgba(170,136,98,0.92)")}
          <p
            className={cn(
              "absolute -translate-x-full text-right text-[0.14rem] leading-[0.17rem] font-normal text-[#f7dec3]",
              SHADE,
            )}
            style={spot(3.48, 7.72, 1.2)}
          >
            {lines("s4.kitchen")}
          </p>
          {TAPS.map(([key, x, y]) => (
            <p
              key={key}
              className={cn(
                "absolute -translate-y-1/2 text-[0.14rem] leading-[0.17rem] font-normal text-[#fef0d8]",
                SHADE,
              )}
              style={spot(x, y, 0.96)}
            >
              {t(`s4.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {/* even warmth, clean air, compact design */}
        <PhonePicture {...pic("p06")}>
          {head("s5.title", "s5.desc", 1.18)}
        </PhonePicture>
        <PhonePicture {...pic("p07")}>
          {head("s6.title", "s6.desc", 1.18, { descClass: "text-[#ece4de]" })}
        </PhonePicture>
        <PhonePicture {...pic("p08")}>
          {head("s7.title", "s7.desc", 1.18, { descClass: "text-[#e5e4e6]" })}
        </PhonePicture>
        {/* MixHPS: the panels in the house, the four features */}
        <PhonePicture {...pic("p09")}>
          {head("s8.title", "s8.desc", 1.46, {
            titleClass: BLUE,
            descClass: "text-[#c0c1c3]",
          })}
          {(
            [
              ["s8.fresh", 5.03, 7.46, "text-[#e2e2e2]"],
              ["s8.ok", 5.27, 7.93, "text-[#bdbdbd]"],
              ["s8.ac", 4.68, 7.69, "text-[#e2e2e2]"],
              ["s8.ok", 4.83, 7.96, "text-[#bdbdbd]"],
            ] as const
          ).map(([key, x, y, colour]) => (
            <p
              key={`${key}-${x}`}
              className={cn(
                "absolute origin-top-left rotate-[8deg] text-[0.085rem] leading-[0.11rem] font-normal whitespace-nowrap",
                colour,
              )}
              style={spot(x, y)}
            >
              {t(key)}
            </p>
          ))}
          {FEATURES.map(([key, x]) => (
            <p
              key={key}
              className="absolute -translate-x-1/2 text-center text-[0.17rem] leading-[0.22rem] font-normal text-[#f9f9f9]"
              style={spot(x, 10.55, 1.42)}
            >
              {t(`s8.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {/* HeatCycle: the heat recovered and reused, the water's way */}
        <PhonePicture {...pic("p10")}>
          {head("s9.title", "s9.desc", 1.0, {
            titleClass: BLUE,
            descClass: "text-[#bfbfc1]",
          })}
          {(
            [
              ["recover", 6.66],
              ["reuse", 8.48],
            ] as const
          ).map(([key, y]) => (
            <div
              key={key}
              className={cn("absolute", SHADE)}
              style={spot(0.68, y, 1.5)}
            >
              <p className="text-[0.24rem] leading-[0.32rem] font-normal text-[#c3c4c7]">
                {t(`s9.${key}`)}
              </p>
              <p className="mt-[0.04rem] text-[0.15rem] leading-[0.2rem] font-normal text-[#a8a8ab]">
                {lines(`s9.${key}Desc`)}
              </p>
            </div>
          ))}
          {(
            [
              ["waterIn", 5.82, 6.8],
              ["waterOut", 5.79, 7.4],
            ] as const
          ).map(([key, x, y]) => (
            <p
              key={key}
              className="absolute origin-top-left rotate-[16deg] text-[0.22rem] leading-[0.28rem] font-normal whitespace-nowrap text-[#b2b2b5]"
              style={spot(x, y)}
            >
              {t(`s9.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {/* beyond grade 1: five years' savings, the chart */}
        <PhonePicture {...pic("p11")}>
          {head("s10.title", "s10.desc", 1.06, {
            titleClass: BLUE,
            descClass: "text-[#bebfc1]",
          })}
          <p
            className={cn(
              "absolute rounded-full bg-[#bac8e2] px-[0.18rem] text-[0.2rem] leading-[0.34rem] font-medium whitespace-nowrap text-[#1d283c]",
              CENTRE,
            )}
            style={spot(3.75, 4.73)}
          >
            {t("s10.pill")}
          </p>
          <p
            className="absolute -translate-y-1/2 text-right text-[0.13rem] leading-[0.16rem] font-normal text-[#a9a9ab]"
            style={spot(0.72, 8.88, 0.72)}
          >
            {t("s10.axis")}
          </p>
          <p
            className={cn(
              "absolute text-[0.13rem] leading-[0.16rem] font-medium whitespace-nowrap text-[#00410a]",
              CENTRE,
            )}
            style={spot(5.36, 8.99)}
          >
            {t("s10.tagTop")}
          </p>
          <p
            className={cn(
              "absolute text-center text-[0.13rem] leading-[0.17rem] font-normal text-[#8a8a8c]",
              CENTRE,
            )}
            style={spot(2.92, 10.44, 2.9)}
          >
            {t("s10.other")}
          </p>
          <p
            className={cn(
              "absolute rounded-full bg-[#d1c0ac] px-[0.12rem] text-[0.13rem] leading-[0.24rem] font-medium whitespace-nowrap text-[#0f0600]",
              CENTRE,
            )}
            style={spot(5.36, 10.44)}
          >
            {t("s10.orvibo")}
          </p>
          <p
            className="absolute text-[0.105rem] leading-[0.15rem] font-normal text-[#6d6d6d]"
            style={spot(1.19, 10.92, 5.2)}
          >
            {t("note.lab")}
          </p>
        </PhonePicture>
        {/* top-spec parts: the four tiles */}
        <PhonePicture {...pic("p12")}>
          <h2 className="absolute inset-x-[0.45rem] top-[1.18rem] text-center text-[0.44rem] leading-[0.6rem] font-semibold text-balance">
            <span className={BLUE}>{t("s11.title")}</span>
          </h2>
          {TILES.map(([key, x, y]) => (
            <div key={key} className="absolute" style={spot(x, y, 2.5)}>
              <p className="text-[0.19rem] leading-[0.27rem] font-medium text-[#dcc4a2]">
                {flat(`s11.${key}`)}
              </p>
              <p className="mt-[0.1rem] text-[0.15rem] leading-[0.21rem] font-normal text-[#fcfcff]">
                {lines(`s11.${key}Desc`)}
              </p>
            </div>
          ))}
        </PhonePicture>
        {/* smart new energy for every home: the house, the proof */}
        <PhonePicture {...pic("p13")}>
          {head("s12.title", "s12.desc", 1.5, {
            titleClass: "text-[0.4rem] text-[#eddfd0]",
            descClass: "text-[#dedcdc]",
            tone: BRONZE,
          })}
          {TAGS.map(([key, side, x, y]) => (
            <p
              key={key}
              className={cn(
                "absolute -translate-y-1/2 text-[0.12rem] leading-[0.16rem] font-normal whitespace-nowrap text-[#f2e8de]",
                side === "right" && "-translate-x-full",
                SHADE,
              )}
              style={spot(x, y)}
            >
              {t(`s12.${key}`)}
            </p>
          ))}
          {PROOFS.map(([key, y]) => (
            <p
              key={key}
              className="absolute -translate-y-1/2 text-[0.21rem] leading-[0.3rem] font-normal text-[#fffdf6]"
              style={spot(0.88, y, 2.95)}
            >
              {rich(key, "text-[0.25rem] font-semibold")}
            </p>
          ))}
        </PhonePicture>
        {/* installation straight from ORVIBO: the ten steps */}
        <PhonePicture {...pic("p14")}>
          {head("s14.title", "s14.desc", 1.46, {
            titleClass: "text-[#efe1d1]",
            descClass: "text-[#f9fafc]",
            tone: BRONZE,
          })}
          <p
            className={cn(
              "absolute text-center text-[0.28rem] leading-[0.36rem] font-medium text-[#f4dfcc]",
              CENTRE,
            )}
            style={spot(3.73, 8.9, 5.8)}
          >
            {flat("s14.process")}
          </p>
          {STEP_Y.map((y, row) =>
            STEP_X.map((x, column) => {
              const key = `s14.step${row * 5 + column + 1}`;
              return (
                <p
                  key={key}
                  className="absolute -translate-x-1/2 text-center text-[0.12rem] leading-[0.16rem] font-normal text-[#cdbcae]"
                  style={spot(x, y, 1.1)}
                >
                  {t(key)}
                </p>
              );
            }),
          )}
        </PhonePicture>
        {/* the industry's highest standard: a 6-year warranty */}
        <PhonePicture {...pic("p15", NOTES_CUT)}>
          <h2 className="absolute inset-x-[0.6rem] top-[1.36rem] text-center text-[0.46rem] leading-[0.7rem] font-semibold text-balance text-white">
            {t("s15.title")}
          </h2>
          <p
            className={cn(
              "absolute w-[6rem] text-center text-[0.36rem] leading-[0.44rem] font-medium text-[#fcffff]",
              CENTRE,
            )}
            style={spot(3.75, 7.52)}
          >
            {t("s15.badge")}
          </p>
        </PhonePicture>
        <div className="flex flex-col gap-[0.04rem] px-[0.6rem] pt-[0.06rem] pb-[0.4rem] text-[0.11rem] leading-[0.16rem] font-normal text-[#828388]">
          <p>{t("note.standard")}</p>
          <p>{t("note.tenYear")}</p>
        </div>
        {/* the specifications */}
        <div className="px-[0.4rem] pt-[0.3rem] pb-[0.3rem]">
          <div className="rounded-[0.24rem] bg-[#17181c] px-[0.42rem] pt-[0.6rem] pb-[0.5rem]">
            <h2 className="text-center text-[0.4rem] leading-[0.52rem] font-semibold text-balance text-white">
              {t("s16.title")}
            </h2>
            <div className="mt-[0.5rem] flex justify-between gap-[0.2rem] border-b border-[#4a4a4a] pb-[0.2rem] text-[0.15rem] leading-[0.22rem]">
              <p>
                <span className="text-[#898a8c]">{t("s16.seriesLabel")}</span>{" "}
                <span className="font-medium text-white">
                  {t("s16.series")}
                </span>
              </p>
              <p className="shrink-0 text-right">
                <span className="text-[#898a8c]">{t("m.modelLabel")}</span>{" "}
                <span className="font-medium text-white">{t("m.model")}</span>
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
              <div>
                <dt className="text-[0.13rem] leading-[0.18rem] font-normal text-[#808080]">
                  {t("s16.sizeLabel")}
                </dt>
                <dd className="mt-[0.06rem] text-[0.15rem] leading-[0.2rem] font-medium text-[#f4f4f4]">
                  {t("s16.size")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <ul className="flex list-disc flex-col gap-[0.04rem] pr-[0.6rem] pb-[0.8rem] pl-[0.8rem] text-[0.11rem] leading-[0.16rem] font-normal text-[#777777]">
          <li>{t("note.summer")}</li>
          <li>{t("note.winter")}</li>
          <li>{t("note.zeroCold")}</li>
          <li>{t("note.steadyHot")}</li>
        </ul>
      </div>
    </div>
  );
}
