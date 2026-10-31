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

/** orvibo.com's pictures without their words (hvac_clean.py); every word here is HTML laid over them. */
const IMG = "/orvibo/products/s350l";
/** The sections' headings, on one line across the picture. */
const TITLE =
  "absolute inset-x-0 -translate-y-1/2 text-center text-[0.56rem] leading-[0.7rem] font-semibold";
/** The gold of the headings' second tone, lighter at the top as orvibo.com draws it. */
const GOLD =
  "bg-gradient-to-b from-[#f9ecde] to-[#eacba5] bg-clip-text text-transparent";

/** sec2: what the one unit replaces, each label above its count ("X 10") in the picture; a long one grows upwards. */
const REPLACES = [
  { key: "s2.split", centre: "left-[11.455rem]" },
  { key: "s2.air", centre: "left-[12.8rem]" },
  { key: "s2.water", centre: "left-[14.285rem]" },
  { key: "s2.boiler", centre: "left-[15.855rem]" },
] as const;

/** sec4: the ten component cards, words at their top left; each box ends before the card's picture, and words that
 * still cross a picture (the valve's pipes, the motor, the snow, the tubes, the fins) get a soft shadow. */
const PARTS = [
  {
    title: "s4.compressor",
    desc: "s4.compressorDesc",
    box: "left-[2.38rem] top-[3.96rem] w-[3.4rem]",
    shade: false,
  },
  {
    title: "s4.cooling",
    desc: "s4.coolingDesc",
    box: "left-[6.78rem] top-[3.96rem] w-[4rem]",
    shade: false,
  },
  {
    title: "s4.valve",
    desc: "s4.valveDesc",
    box: "left-[11.75rem] top-[3.96rem] w-[2.45rem]",
    shade: true,
  },
  {
    title: "s4.chip",
    desc: "s4.chipDesc",
    box: "left-[14.66rem] top-[3.96rem] w-[2.55rem]",
    shade: false,
  },
  {
    title: "s4.motor",
    desc: null,
    box: "left-[6.65rem] top-[6.4rem] w-[2.75rem]",
    shade: true,
  },
  {
    title: "s4.frost",
    desc: "s4.frostDesc",
    box: "left-[9.97rem] top-[6.4rem] w-[2.05rem]",
    shade: true,
  },
  {
    title: "s4.tubes",
    desc: "s4.tubesDesc",
    box: "left-[14.4rem] top-[6.4rem] w-[2.75rem]",
    shade: true,
  },
  {
    title: "s4.heating",
    desc: "s4.heatingDesc",
    box: "left-[2.35rem] top-[9.28rem] w-[5.6rem]",
    shade: false,
  },
  {
    title: "s4.sensors",
    desc: null,
    box: "left-[9.03rem] top-[9.28rem] w-[3.6rem]",
    shade: false,
  },
  {
    title: "s4.coating",
    desc: "s4.coatingDesc",
    box: "left-[13.45rem] top-[9.28rem] w-[3.6rem]",
    shade: true,
  },
] as const;
/** sec4: the fins card's picture rises to the right, so its second line stays short. */
const DESC_WIDTH: Partial<Record<string, string>> = {
  "s4.coatingDesc": "max-w-[2.6rem]",
};

/** sec5: the two airflows beside the arrows on the left, and the three outputs under their pictures on the right. */
const FLOWS = [
  { title: "s5.cool", desc: "s5.coolDesc", at: "top-[11.12rem]" },
  { title: "s5.heat", desc: "s5.heatDesc", at: "top-[12.615rem]" },
] as const;
const OUTPUTS = [
  { key: "s5.outAc", at: "top-[9.89rem]" },
  { key: "s5.outFloor", at: "top-[11.275rem]" },
  { key: "s5.outWater", at: "top-[12.915rem]" },
] as const;

/** sec6: the cost chart's rows (bars in the picture): label, then each bar's cost just past its end. */
const COSTS = [
  {
    label: "s6.summer",
    row: "top-[11.29rem]",
    s350l: "s6.summerS350l",
    at: "left-[13.97rem] top-[11.175rem]",
    other: "s6.summerOther",
    otherAt: "left-[15.09rem] top-[11.41rem]",
  },
  {
    label: "s6.winter",
    row: "top-[12.215rem]",
    s350l: "s6.winterS350l",
    at: "left-[12.94rem] top-[12.125rem]",
    other: "s6.winterOther",
    otherAt: "left-[16.26rem] top-[12.36rem]",
  },
  {
    label: "s6.water",
    row: "top-[13.18rem]",
    s350l: "s6.waterS350l",
    at: "left-[11.21rem] top-[13.075rem]",
    other: "s6.waterOther",
    otherAt: "left-[11.73rem] top-[13.31rem]",
  },
] as const;

/** sec7: the three figures in the frosted strip: a pill, the number, and its unit in two lines beside it. */
const FIGURES = [
  {
    pill: "s7.instant",
    value: "s7.outlets",
    top: "s7.outletsTop",
    bottom: "s7.outletsBottom",
    at: "left-[2.82rem]",
  },
  {
    pill: "s7.together",
    value: "s7.tubs",
    top: "s7.tubsTop",
    bottom: "s7.tubsBottom",
    at: "left-[4.72rem]",
  },
  {
    pill: "s7.flow",
    value: "s7.litres",
    top: "s7.litresTop",
    bottom: "s7.litresBottom",
    at: "left-[6.74rem]",
  },
] as const;
/** sec7: the frosted labels beside the house, in the boxes the picture keeps. */
const ROOMS = [
  { key: "s7.bath", at: "top-[5.285rem]" },
  { key: "s7.kitchen", at: "top-[6.775rem]" },
  { key: "s7.shower", at: "top-[8.145rem]" },
] as const;

/** sec8: the three cards' words under their photos. */
const FREE = [
  { title: "s8.produce", desc: "s8.produceDesc", centre: "left-[4.47rem]" },
  { title: "s8.recover", desc: "s8.recoverDesc", centre: "left-[9.63rem]" },
  { title: "s8.use", desc: "s8.useDesc", centre: "left-[14.785rem]" },
] as const;

/** sec9: the six service steps, beside their numbers in the picture. */
const SERVICE = [
  { key: "s9.step1", at: "left-[5.28rem] top-[14.755rem] w-[2.2rem]" },
  { key: "s9.step2", at: "left-[9.06rem] top-[14.755rem] w-[2.4rem]" },
  { key: "s9.step3", at: "left-[13.13rem] top-[14.755rem] w-[3rem]" },
  { key: "s9.step4", at: "left-[5.28rem] top-[15.94rem] w-[2.2rem]" },
  { key: "s9.step5", at: "left-[9.06rem] top-[15.94rem] w-[2.4rem]" },
  { key: "s9.step6", at: "left-[13.13rem] top-[15.94rem] w-[3rem]" },
] as const;

/** sec11: the specification table, four columns of five rows, as orvibo.com lays it out. */
const SPECS = [
  "supply",
  "grade",
  "inputPower",
  "inputCurrent",
  "refrigerant",
  "charge",
  "waterDrop",
  "size",
  "netWeight",
  "runWeight",
  "noise1",
  "noise2",
  "noise3",
  "shock",
  "water",
  "suction",
  "discharge",
  "low",
  "high",
  "type",
] as const;

export function S350lOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, bg, lines } = productPageHelpers(locale, text);
  /** A heading in orvibo.com's two tones: its [bracketed] words in `gold`, a "*" as a small raised footnote mark. */
  const rich = (textKey: string, gold = GOLD): ReactNode => {
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
            <span key={key} className={gold}>
              {part.slice(1, -1)}
            </span>
          );
        }
        return <Fragment key={key}>{part}</Fragment>;
      });
  };

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview">
        {/* sec1: the S350L on a rock under the stars */}
        <section
          className={cn("relative h-[9.2rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec1.webp`)}
        >
          <p className="sr-only">{t("alt.s1")}</p>
          <div className={FRAME}>
            <p className="absolute top-[2.2rem] left-[6.43rem] flex h-[0.6rem] -translate-x-1/2 -translate-y-1/2 items-center gap-[0.12rem] whitespace-nowrap rounded-full border border-[#b7b7b7] px-[0.32rem] text-[0.28rem] font-medium text-[#c4c4c4]">
              {t("s1.name")}
              <span className="rounded-[0.05rem] border border-[#838486] px-[0.05rem] text-[0.15rem] leading-[0.22rem] text-[#a3a3a5]">
                {t("s1.edition")}
              </span>
            </p>
            <h1 className="absolute top-[2.62rem] left-[6.43rem] w-[9rem] -translate-x-1/2 text-center text-[0.72rem] leading-[0.86rem] font-semibold text-white">
              {t("s1.title")}
            </h1>
            <p
              className={cn(
                "absolute top-[4.72rem] left-[6.43rem] whitespace-nowrap text-[0.24rem] leading-[0.32rem] text-[#b6b6b5]",
                CENTRE,
              )}
            >
              {t("s1.uses")}
            </p>
          </div>
        </section>
        {/* sec2: one unit instead of many */}
        <section
          className={cn("relative h-[11.29rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec2.webp`)}
        >
          <p className="sr-only">{t("alt.s2")}</p>
          <div className={FRAME}>
            <h2 className={cn(TITLE, "top-[2.515rem] text-white")}>
              {rich("s2.title")}
            </h2>
            <p
              className={cn(
                "absolute top-[10.08rem] left-[4.4rem] w-[4.3rem] text-[0.24rem] leading-[0.32rem] font-medium text-[#b8b8ba]",
                CENTRE,
              )}
            >
              {t("s2.unit")}
            </p>
            {REPLACES.map((item) => (
              <p
                key={item.key}
                className={cn(
                  "absolute top-[9.66rem] w-[1.36rem] -translate-x-1/2 -translate-y-full text-center text-[0.19rem] leading-[0.24rem] font-medium text-[#d4d4d4]",
                  item.centre,
                )}
              >
                {t(item.key)}
              </p>
            ))}
          </div>
        </section>
        {/* the CCTV banner (MixStation shows it too) */}
        <CctvBanner locale={locale} text={text} />
        {/* sec3: the plant room becomes living space */}
        <section
          className={cn("relative h-[11.81rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec3.webp`)}
        >
          <div className={FRAME}>
            <h2 className={cn(TITLE, "top-[1.705rem] text-white")}>
              {rich("s3.title")}
            </h2>
            <p className="absolute top-[2.83rem] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-[#b5b5b8] px-[0.3rem] text-[0.3rem] leading-[0.62rem] text-[#bbbbbf]">
              {t("s3.pill")}
            </p>
          </div>
        </section>
        {/* sec4: the components */}
        <section
          className={cn("relative h-[13.36rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec4.webp`)}
        >
          <div className={FRAME}>
            <h2 className={cn(TITLE, "top-[1.89rem] text-white")}>
              {rich("s4.title")}
            </h2>
            {PARTS.map((card) => (
              <div
                key={card.title}
                className={cn(
                  "absolute",
                  card.box,
                  card.shade && "[text-shadow:0_0_0.08rem_rgb(0_0_0/0.9)]",
                )}
              >
                <h3 className="text-balance text-[0.24rem] leading-[0.32rem] font-semibold text-white">
                  {t(card.title)}
                </h3>
                {card.desc && (
                  <p
                    className={cn(
                      "mt-[0.12rem] text-balance text-[0.19rem] leading-[0.26rem] text-[#a7a7a9]",
                      DESC_WIDTH[card.desc],
                    )}
                  >
                    {t(card.desc)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* sec5: HeatCycle, the heat recovery behind the free hot water */}
        <section
          className={cn("relative h-[19.1rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec5.webp`)}
        >
          <p className="sr-only">{t("alt.s5")}</p>
          <div className={FRAME}>
            <h2 className={cn(TITLE, "top-[2rem] text-white")}>
              {rich("s5.title")}
            </h2>
            <p className="absolute top-[4.97rem] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#cbbcaa] px-[0.3rem] text-[0.26rem] leading-[0.46rem] font-semibold text-black">
              {t("s5.pill")}
            </p>
            <p className="absolute inset-x-0 top-[6.795rem] -translate-y-1/2 text-center text-[0.3rem] leading-[0.4rem] font-medium text-[#bcbcbf]">
              {t("s5.patent")}
            </p>
            {FLOWS.map((flow) => (
              <div
                key={flow.title}
                className={cn("absolute left-[2.4rem] w-[1.6rem]", flow.at)}
              >
                <h3 className="text-[0.21rem] leading-[0.26rem] font-medium text-[#f3f3f3]">
                  {t(flow.title)}
                </h3>
                <p className="mt-[0.04rem] text-[0.15rem] leading-[0.2rem] text-[#dfdfe1]">
                  {t(flow.desc)}
                </p>
              </div>
            ))}
            {OUTPUTS.map((item) => (
              <p
                key={item.key}
                className={cn(
                  "absolute left-[15.81rem] whitespace-nowrap text-[0.18rem] leading-[0.24rem] font-medium text-[#e0e0e2]",
                  CENTRE,
                  item.at,
                )}
              >
                {t(item.key)}
              </p>
            ))}
            <div className="absolute top-[15.76rem] left-[1.93rem] w-[15.3rem] space-y-[0.04rem] text-[0.15rem] leading-[0.26rem] text-[#878787]">
              <p>{t("note.1")}</p>
              <p>{t("note.2")}</p>
            </div>
          </div>
        </section>
        {/* sec6: efficiency, and five years of savings */}
        <section
          className={cn("relative h-[16.5rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec6.webp`)}
        >
          <div className={FRAME}>
            <h2 className={cn(TITLE, "top-[2rem] text-white")}>
              {rich("s6.title")}
            </h2>
            <p className="absolute top-[4.14rem] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white/20 px-[0.28rem] text-[0.28rem] leading-[0.52rem] font-semibold text-[#1e2535]">
              {t("s6.pill")}
            </p>
            <h3
              className={cn(
                "absolute top-[10.58rem] left-[5.53rem] whitespace-nowrap text-[0.3rem] leading-[0.4rem] font-semibold text-[#e4c49f]",
                CENTRE,
              )}
            >
              {t("s6.grade")}
            </h3>
            <p
              className={cn(
                "absolute top-[11.96rem] left-[5.22rem] text-[0.3rem] leading-[0.36rem] font-medium text-[#303030]",
                CENTRE,
              )}
            >
              {t("s6.standardValue")}
            </p>
            <p
              className={cn(
                "absolute top-[11.54rem] left-[7.17rem] text-[0.32rem] leading-[0.38rem] font-medium text-white",
                CENTRE,
              )}
            >
              {t("s6.s350lValue")}
            </p>
            <p
              className={cn(
                "absolute top-[13.29rem] left-[4.555rem] whitespace-nowrap text-[0.15rem] leading-[0.2rem] font-semibold text-[#f5f5f5]",
                CENTRE,
              )}
            >
              {t("s6.standard")}
            </p>
            <p
              className={cn(
                "absolute top-[13.31rem] left-[7.155rem] whitespace-nowrap text-[0.17rem] leading-[0.22rem] font-semibold text-[#f5f5f5]",
                CENTRE,
              )}
            >
              {t("s6.s350l")}
            </p>
            <p className="absolute top-[10.475rem] left-[9.74rem] -translate-y-1/2 whitespace-nowrap text-[0.2rem] leading-[0.26rem] text-[#aaaaad]">
              {t("s6.chart")}
            </p>
            <ul className="absolute top-[10.475rem] left-[14.1rem] -translate-y-1/2 whitespace-nowrap text-[0.13rem] leading-[0.19rem] text-[#959596]">
              <li className="flex items-center gap-[0.07rem]">
                <span
                  aria-hidden="true"
                  className="size-[0.08rem] rounded-full bg-[#26ac77]"
                />
                {t("s6.legendS350l")}
              </li>
              <li className="flex items-center gap-[0.07rem]">
                <span
                  aria-hidden="true"
                  className="size-[0.08rem] rounded-full bg-[#5e5e60]"
                />
                {t("s6.legendOther")}
              </li>
            </ul>
            {COSTS.map((row) => (
              <div key={row.label}>
                <p
                  className={cn(
                    "absolute left-[9.73rem] -translate-y-1/2 text-[0.19rem] leading-[0.23rem] font-medium text-[#e9e9e9]",
                    row.row,
                  )}
                >
                  {t(row.label)}
                </p>
                <p
                  className={cn(
                    "absolute -translate-y-1/2 whitespace-nowrap text-[0.2rem] leading-[0.26rem] font-medium text-[#26ac77]",
                    row.at,
                  )}
                >
                  {t(row.s350l)}
                </p>
                <p
                  className={cn(
                    "absolute -translate-y-1/2 whitespace-nowrap text-[0.18rem] leading-[0.24rem] text-[#767677]",
                    row.otherAt,
                  )}
                >
                  {t(row.other)}
                </p>
              </div>
            ))}
            <p className="absolute top-[14.95rem] left-[2.09rem] w-[15rem] -translate-y-1/2 text-[0.15rem] leading-[0.24rem] text-[#9fa0a1]">
              {t("note.3")}
            </p>
          </div>
        </section>
        {/* sec7: hot water for a whole villa */}
        <section
          className={cn("relative h-[11.3rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec7.webp`)}
        >
          <div className={FRAME}>
            <h2 className={cn(TITLE, "top-[2rem] text-white")}>
              {rich("s7.title")}
            </h2>
            <p className="absolute top-[4.645rem] left-[2.81rem] whitespace-nowrap text-[0.36rem] leading-[0.69rem] font-semibold text-white">
              {t("s7.hub")}
            </p>
            {FIGURES.map((figure) => (
              <div
                key={figure.pill}
                className={cn("absolute top-[6.88rem]", figure.at)}
              >
                <p className="inline-block rounded-full border border-white/50 px-[0.14rem] text-[0.18rem] leading-[0.3rem] whitespace-nowrap text-[#e8ebea]">
                  {t(figure.pill)}
                </p>
                <div className="mt-[0.09rem] flex items-end gap-[0.07rem] whitespace-nowrap">
                  <span className="bg-gradient-to-b from-white to-[#d1e4f3] bg-clip-text text-[0.66rem] leading-none font-bold text-transparent">
                    {t(figure.value)}
                  </span>
                  <span className="mb-[0.04rem] flex flex-col text-white">
                    <span className="text-[0.17rem] leading-[0.22rem] font-medium">
                      {t(figure.top)}
                    </span>
                    <span className="text-[0.21rem] leading-[0.26rem] font-semibold">
                      {t(figure.bottom)}
                    </span>
                  </span>
                </div>
              </div>
            ))}
            {ROOMS.map((room) => (
              <p
                key={room.key}
                className={cn(
                  "absolute left-[10.8rem] whitespace-nowrap text-[0.15rem] leading-[0.19rem] text-[#e0e4e6]",
                  CENTRE,
                  room.at,
                )}
              >
                {t(room.key)}
              </p>
            ))}
          </div>
        </section>
        {/* sec8: direct solar drive */}
        <section
          className={cn("relative h-[20.25rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec8.webp`)}
        >
          <p className="sr-only">{t("alt.s8")}</p>
          <div className={FRAME}>
            <h2 className={cn(TITLE, "top-[2.025rem] text-black")}>
              {rich("s8.title", "text-[#9d5c29]")}
            </h2>
            <p className="absolute inset-x-0 top-[3.32rem] -translate-y-1/2 text-center text-[0.28rem] leading-[0.455rem] text-[#6c6c6c]">
              {t("s8.desc")}
            </p>
            {FREE.map((card) => (
              <div key={card.title}>
                <h3
                  className={cn(
                    "absolute top-[16.93rem] whitespace-nowrap text-[0.32rem] leading-[0.42rem] font-semibold text-white",
                    CENTRE,
                    card.centre,
                  )}
                >
                  {t(card.title)}
                </h3>
                <p
                  className={cn(
                    "absolute top-[17.5rem] whitespace-nowrap text-[0.27rem] leading-[0.34rem] text-[#d0d1d1]",
                    CENTRE,
                    card.centre,
                  )}
                >
                  {t(card.desc)}
                </p>
              </div>
            ))}
            <p className="absolute top-[18.865rem] left-[2.14rem] w-[15.2rem] text-[0.16rem] leading-[0.29rem] text-[#a7a39e]">
              {t("note.4")}
            </p>
          </div>
        </section>
        {/* sec9: installed by ORVIBO itself */}
        <section
          className={cn("relative h-[18.67rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec9.webp`)}
        >
          <div className={FRAME}>
            <h2 className={cn(TITLE, "top-[2.5rem] text-white")}>
              {t("s9.title")}
            </h2>
            <p className={cn(TITLE, "top-[3.43rem] text-[#eed4b1]")}>
              {t("s9.desc")}
            </p>
            <ol>
              {SERVICE.map((step) => (
                <li
                  key={step.key}
                  className={cn(
                    "absolute -translate-y-1/2 text-[0.22rem] leading-[0.34rem] font-medium text-[#fbdfc6]",
                    step.at,
                  )}
                >
                  {t(step.key)}
                </li>
              ))}
            </ol>
          </div>
        </section>
        {/* sec10: a 10-year warranty */}
        <section
          className={cn("relative h-[11.87rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec10.webp`)}
        >
          <div className={FRAME}>
            <h2 className={cn(TITLE, "top-[2.155rem] text-white")}>
              {t("s10.title")}
            </h2>
            <p className="absolute inset-x-0 top-[8.765rem] -translate-y-1/2 text-center text-[0.42rem] leading-[0.54rem] font-medium text-white">
              {t("s10.terms")}
            </p>
            <div className="absolute inset-x-0 top-[9.6rem] mx-auto w-[15rem] text-balance text-center text-[0.13rem] leading-[0.285rem] text-[#878787]">
              <p>{t("note.5")}</p>
              <p>{t("note.6")}</p>
            </div>
          </div>
        </section>
        {/* sec11: specifications, in the card the picture keeps */}
        <section
          className={cn("relative h-[18.61rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec11.webp`)}
        >
          <div className={FRAME}>
            <h2 className="absolute top-[3.255rem] left-[3.1rem] -translate-y-1/2 whitespace-nowrap text-[0.4rem] leading-[0.52rem] font-medium text-white">
              {t("s11.title")}
            </h2>
            <p className="absolute top-[4.425rem] left-[3.04rem] flex -translate-y-1/2 items-baseline gap-[0.14rem] whitespace-nowrap">
              <span className="text-[0.24rem] text-[#8b8b8b]">
                {t("s11.seriesLabel")}
              </span>
              <span className="text-[0.26rem] font-semibold text-white">
                {t("s11.series")}
              </span>
            </p>
            <p className="absolute top-[4.425rem] left-[10.93rem] flex -translate-y-1/2 items-baseline gap-[0.14rem] whitespace-nowrap">
              <span className="text-[0.24rem] text-[#8b8b8b]">
                {t("s11.modelLabel")}
              </span>
              <span className="text-[0.26rem] font-semibold text-white">
                {t("s11.model")}
              </span>
            </p>
            <div className="absolute top-[4.98rem] left-[2.52rem] h-px w-[14rem] bg-[#868686]" />
            <dl className="absolute top-[5.89rem] left-[2.98rem] grid w-[14.32rem] grid-cols-4 auto-rows-[1.95rem]">
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
