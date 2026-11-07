import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import { Fragment, type ReactNode } from "react";

/** orvibo.com's twelve pictures without their words (hvac_clean.py); every word here is HTML laid over them. */
const IMG = "/orvibo/products/jidacheng";

const PHOTO = "bg-cover bg-center bg-no-repeat";
/** A box as wide as the 1920 px pictures, centred, so words laid over a cropped picture stay on their spot. */
const FRAME = "absolute inset-y-0 left-1/2 w-[19.2rem] -translate-x-1/2";
/** Centres a box on its left/top point. */
const CENTRE = "-translate-x-1/2 -translate-y-1/2 text-center";

/** sec2: what the one unit replaces, each label centred under its picture in the tiles. */
const REPLACES = [
  { key: "s2.ac", at: "left-[9.37rem] top-[6.655rem]", width: "w-[3.9rem]" },
  { key: "s2.air", at: "left-[14.24rem] top-[6.655rem]", width: "w-[3.9rem]" },
  { key: "s2.boiler", at: "left-[9.12rem] top-[8.62rem]", width: "w-[2.9rem]" },
  {
    key: "s2.heater",
    at: "left-[11.85rem] top-[8.62rem]",
    width: "w-[1.95rem]",
  },
  { key: "s2.panel", at: "left-[14.58rem] top-[8.62rem]", width: "w-[2.9rem]" },
] as const;

/** sec3: the three figures in the strip under the product; a long label grows upwards. */
const STATS = [
  { label: "s3.stat1", value: "s3.value1", centre: "left-[4.8rem]" },
  { label: "s3.stat2", value: "s3.value2", centre: "left-[9.51rem]" },
  { label: "s3.stat3", value: "s3.value3", centre: "left-[14.05rem]" },
] as const;

/** sec3's five cards: headings in amber, points in grey, from the top left of each card's words; each box ends
 * before the card's picture (the cans, the pipes, the floor plan, the steam, the window). */
const FEATURES = [
  {
    title: ["s3.storeTitle"],
    points: ["s3.store1", "s3.store2", "s3.store3"],
    box: "left-[2.45rem] top-[12.33rem] w-[3.3rem]",
  },
  {
    title: ["s3.channelsTitle"],
    points: ["s3.channels"],
    box: "left-[10.04rem] top-[12.33rem] w-[2.95rem]",
  },
  {
    title: ["s3.zonesTitle"],
    points: ["s3.zones1", "s3.zones2"],
    box: "left-[13.85rem] top-[12.33rem] w-[3.05rem]",
  },
  {
    title: ["s3.waterTitle", "s3.waterTitle2"],
    points: ["s3.water1", "s3.water2"],
    box: "left-[2.45rem] top-[16.75rem] w-[3.7rem]",
  },
  {
    title: ["s3.floorTitle"],
    points: ["s3.floor1", "s3.floor2"],
    box: "left-[10.05rem] top-[16.75rem] w-[3.05rem]",
  },
] as const;

/** sec4: the diagram's three outputs (labels under the pictures on the right) and the three steps under it. */
const OUTPUTS = [
  { key: "s4.cooling", at: "top-[8.065rem]" },
  { key: "s4.floor", at: "top-[9.685rem]" },
  { key: "s4.water", at: "top-[11.225rem]" },
] as const;
const STEPS = [
  {
    verb: "s4.draw",
    what: "s4.drawWhat",
    desc: "s4.drawDesc",
    centre: "left-[4.885rem]",
  },
  {
    verb: "s4.recover",
    what: "s4.recoverWhat",
    desc: "s4.recoverDesc",
    centre: "left-[9.685rem]",
  },
  {
    verb: "s4.store",
    what: "s4.storeWhat",
    desc: "s4.storeDesc",
    centre: "left-[14.21rem]",
  },
] as const;

/** sec5: the airflow figures, and the four scenes' words under their photos. */
const AIRFLOW = [
  { value: "s5.throw", desc: "s5.throwDesc", centre: "left-[5.065rem]" },
  { value: "s5.speed", desc: "s5.speedDesc", centre: "left-[9.6rem]" },
  { value: "s5.noise", desc: "s5.noiseDesc", centre: "left-[13.74rem]" },
] as const;
const SCENES = [
  { title: "s5.card1", desc: "s5.card1Desc", centre: "left-[3.85rem]" },
  { title: "s5.card2", desc: "s5.card2Desc", centre: "left-[7.69rem]" },
  { title: "s5.card3", desc: "s5.card3Desc", centre: "left-[11.54rem]" },
  { title: "s5.card4", desc: "s5.card4Desc", centre: "left-[15.35rem]" },
] as const;

/** sec6: the cost chart's rows (bars in the picture) and the five other savings. */
const COSTS = [
  {
    label: "s6.jidacheng",
    cost: "s6.jidachengCost",
    more: null,
    row: "top-[7.885rem]",
    at: "left-[8.12rem]",
  },
  {
    label: "s6.heatPump",
    cost: "s6.heatPumpCost",
    more: "s6.heatPumpMore",
    row: "top-[8.9rem]",
    at: "left-[10.13rem]",
  },
  {
    label: "s6.boiler",
    cost: "s6.boilerCost",
    more: "s6.boilerMore",
    row: "top-[9.89rem]",
    at: "left-[13.73rem]",
  },
] as const;
const SAVINGS = [
  ["s6.bills", "s6.billsDesc"],
  ["s6.devices", "s6.devicesDesc"],
  ["s6.space", "s6.spaceDesc"],
  ["s6.upkeep", "s6.upkeepDesc"],
  ["s6.payback", "s6.paybackDesc"],
] as const;

/** sec7: IntePilot's three cards; the first one's words end above the chart's trough label. */
const PILOT = [
  {
    title: "s7.pcm",
    desc: "s7.pcmDesc",
    box: "left-[2.66rem] top-[9.27rem] w-[2.2rem]",
  },
  {
    title: "s7.geo",
    desc: "s7.geoDesc",
    box: "left-[7.6rem] top-[9.27rem] w-[2.2rem]",
  },
  {
    title: "s7.zones",
    desc: "s7.zonesDesc",
    box: "left-[12.5rem] top-[9.27rem] w-[2.2rem]",
  },
] as const;

/** sec8: the two tall cards' words at their foot, the two short ones' at their top. */
const SMART = [
  {
    title: "s8.screen",
    tag: "s8.screenSize",
    desc: "s8.screenDesc",
    box: "left-[2.8rem] top-[8.73rem] w-[4rem]",
    tone: "text-[#6cb0dc]",
  },
  {
    title: "s8.butler",
    tag: "s8.butlerTag",
    desc: "s8.butlerDesc",
    box: "left-[7.63rem] top-[8.73rem] w-[4rem]",
    tone: "text-[#67ccc5]",
  },
] as const;
const SMART_SHORT = [
  {
    title: "s8.app",
    desc: "s8.appDesc",
    box: "left-[12.63rem] top-[4.87rem] w-[3rem]",
  },
  {
    title: "s8.ota",
    desc: "s8.otaDesc",
    box: "left-[12.61rem] top-[7.84rem] w-[3.3rem]",
  },
] as const;

/** sec9: the voice requests floating over the speaker photo. */
const REQUESTS = [
  { key: "s9.hi", at: "left-[7.73rem] top-[7.895rem]" },
  { key: "s9.ac", at: "left-[10.4rem] top-[7.99rem]" },
  { key: "s9.floor", at: "left-[8.05rem] top-[9.06rem]" },
] as const;
const PLATFORMS = [
  { pill: "s9.xiaoai", desc: "s9.xiaoaiDesc", centre: "left-[9.625rem]" },
  { pill: "s9.mcp", desc: "s9.mcpDesc", centre: "left-[14.51rem]" },
] as const;

/** sec10: the component cards with words at their top left, each box ending before the card's picture. */
const PARTS = [
  {
    title: "s10.compressor",
    desc: "s10.compressorDesc",
    box: "left-[3.06rem] top-[4.36rem] w-[2.9rem]",
  },
  {
    title: "s10.valve",
    desc: "s10.valveDesc",
    box: "left-[10.24rem] top-[4.36rem] w-[3rem]",
  },
  {
    title: "s10.fan",
    desc: "s10.fanDesc",
    box: "left-[3.06rem] top-[7.67rem] w-[3.4rem]",
  },
  {
    title: "s10.exchanger",
    desc: "s10.exchangerDesc",
    box: "left-[10.24rem] top-[7.67rem] w-[3.6rem]",
  },
  {
    title: "s10.piping",
    desc: null,
    box: "left-[10.23rem] top-[10.99rem] w-[2.9rem]",
  },
] as const;
/** sec10's two small cards, their words centred. */
const QUIET = [
  { key: "s10.indoor", at: "top-[11.105rem] left-[4.29rem] w-[2.9rem]" },
  { key: "s10.damping", at: "top-[11.32rem] left-[7.8rem] w-[2.8rem]" },
] as const;

/** sec11: the six service steps, beside their numbers in the picture. */
const SERVICE = [
  { key: "s11.step1", at: "left-[4.36rem] top-[14.99rem]" },
  { key: "s11.step2", at: "left-[9.28rem] top-[14.99rem]" },
  { key: "s11.step3", at: "left-[14.17rem] top-[14.99rem]" },
  { key: "s11.step4", at: "left-[4.36rem] top-[15.915rem]" },
  { key: "s11.step5", at: "left-[9.28rem] top-[15.915rem]" },
  { key: "s11.step6", at: "left-[14.17rem] top-[15.915rem]" },
] as const;

/** The twelve footnotes under the last picture, in orvibo.com's order. */
const NOTES = Array.from({ length: 12 }, (_, i) => i + 1);

/** A frosted speech bubble over a photo. */
const BUBBLE =
  "absolute -translate-y-1/2 whitespace-nowrap rounded-full px-[0.13rem] font-medium text-white backdrop-blur-[3px]";

export function JidachengOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, bg, lines } = productPageHelpers(locale, text);
  /** `t` with a footnote mark at the end of a line set small and raised, as orvibo.com draws it. */
  const star = (key: string): ReactNode =>
    ts(key)
      .split("\n")
      .map((line, i) => (
        <Fragment key={line}>
          {i > 0 && <br />}
          {line.endsWith("*") ? (
            <>
              {line.slice(0, -1)}
              <sup className="text-[0.6em]">*</sup>
            </>
          ) : (
            line
          )}
        </Fragment>
      ));

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview">
        {/* sec1: the series' banner */}
        <section
          className={cn("relative h-[8.32rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec1.webp`)}
        >
          <p className="sr-only">{t("alt.s1")}</p>
          <div className={FRAME}>
            <p className="absolute top-[2.39rem] left-[3.46rem] -translate-y-1/2 whitespace-nowrap text-[0.24rem] leading-[0.3rem] font-semibold text-[#848383]">
              {t("s1.series")}
            </p>
            <p className="absolute top-[2.655rem] left-[3.47rem] -translate-y-1/2 whitespace-nowrap text-[0.12rem] leading-[0.16rem] font-medium text-[#848382]">
              {t("s1.by")}
            </p>
            <h1 className="absolute top-[3.52rem] left-[2.75rem] whitespace-nowrap text-[0.62rem] leading-[0.76rem] font-medium text-[#cc4e01]">
              {t("s1.title")}
            </h1>
            <p className="absolute top-[5.42rem] left-[2.79rem] w-[8.4rem] text-[0.28rem] leading-[0.4rem] font-normal text-[#a07253]">
              {t("s1.desc")}
            </p>
          </div>
        </section>
        {/* sec2: one unit does the work of five */}
        <section
          className={cn("relative h-[11.4rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec2.webp`)}
        >
          <div className={FRAME}>
            <p className="absolute top-[2.9rem] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-[#ffd69f] px-[0.3rem] text-[0.26rem] leading-[0.44rem] font-medium text-[#ffd69f]">
              {t("s2.pill")}
            </p>
            <h2 className="absolute inset-x-0 top-[3.9rem] -translate-y-1/2 text-center text-[0.6rem] leading-[0.72rem] font-medium text-[#ffe1b9]">
              {t("s2.title")}
            </h2>
            <div
              className={cn(
                "absolute top-[8.19rem] left-[4.675rem] w-[3rem] text-[0.24rem] leading-[0.32rem] text-[#8a7a66]",
                CENTRE,
              )}
            >
              <p className="font-semibold">{t("s2.unit")}</p>
              <p className="text-balance">{t("s2.unitDesc")}</p>
            </div>
            {REPLACES.map((item) => (
              <p
                key={item.key}
                className={cn(
                  "absolute text-balance text-[0.24rem] leading-[0.3rem] text-[#8a7a66]",
                  CENTRE,
                  item.at,
                  item.width,
                )}
              >
                {t(item.key)}
              </p>
            ))}
          </div>
        </section>
        {/* sec3: replaces the gas boiler */}
        <section
          className={cn("relative h-[21.82rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec3.webp`)}
        >
          <div className={FRAME}>
            <p className="absolute top-[3.32rem] left-[6.43rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-[#ffcd8a] px-[0.3rem] text-[0.26rem] leading-[0.42rem] font-medium text-[#ffcd8a]">
              {t("s3.pill")}
            </p>
            <h2 className="absolute top-[4.02rem] left-[6.42rem] w-[8.2rem] -translate-x-1/2 text-balance text-center text-[0.56rem] leading-[0.7rem] font-medium text-[#ffe1b9]">
              {t("s3.title")}
            </h2>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p
                  className={cn(
                    "absolute top-[9.7rem] w-[4.2rem] -translate-x-1/2 -translate-y-full text-balance text-center text-[0.3rem] leading-[0.36rem] text-[#b99268]",
                    stat.centre,
                  )}
                >
                  {t(stat.label)}
                </p>
                <p
                  className={cn(
                    "absolute top-[10.31rem] whitespace-nowrap text-[0.6rem] leading-[0.7rem] font-medium text-[#f9c985]",
                    CENTRE,
                    stat.centre,
                  )}
                >
                  {star(stat.value)}
                </p>
              </div>
            ))}
            {FEATURES.map((card) => (
              <div key={card.title[0]} className={cn("absolute", card.box)}>
                {card.title.map((key) => (
                  <h3
                    key={key}
                    className="text-balance text-[0.22rem] leading-[0.32rem] font-medium text-[#e0a06c]"
                  >
                    {star(key)}
                  </h3>
                ))}
                <ul className="mt-[0.06rem] text-pretty text-[0.19rem] leading-[0.28rem] text-[#c9bcb3]">
                  {card.points.map((key) => (
                    <li key={key}>{star(key)}</li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="absolute top-[17.33rem] left-[6.27rem] flex -translate-y-1/2 items-center gap-[0.08rem] whitespace-nowrap rounded-full bg-white/20 py-[0.05rem] pr-[0.16rem] pl-[0.05rem] text-[0.15rem] leading-[0.32rem] font-medium text-[#e4e4e4] backdrop-blur-[3px]">
              <svg
                aria-hidden="true"
                viewBox="0 0 32 32"
                className="size-[0.32rem] shrink-0"
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
          </div>
        </section>
        {/* sec4: TurboHeatCycle, the heat pump recovering its own heat */}
        <section
          className={cn("relative h-[15.52rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec4.webp`)}
        >
          <p className="sr-only">{t("alt.s4")}</p>
          <div className={FRAME}>
            <p className="absolute inset-x-0 top-[2.22rem] -translate-y-1/2 text-center text-[0.3rem] leading-[0.4rem] text-[#d0d0d0]">
              {t("s4.kicker")}
            </p>
            <h2 className="absolute inset-x-0 top-[4.14rem] -translate-y-1/2 text-center text-[0.5rem] leading-[1.04rem] font-medium">
              <span className="block text-white">{star("s4.title")}</span>
              <span className="block text-[#e4e3e4]">{t("s4.title2")}</span>
            </h2>
            {OUTPUTS.map((item) => (
              <p
                key={item.key}
                className={cn(
                  "absolute left-[13.52rem] w-[1.9rem] text-[0.22rem] leading-[0.28rem] text-[#bebab3]",
                  CENTRE,
                  item.at,
                )}
              >
                {t(item.key)}
              </p>
            ))}
            {STEPS.map((step) => (
              <div
                key={step.verb}
                className={cn(
                  "absolute top-[13.12rem] w-[4rem] -translate-x-1/2 text-center",
                  step.centre,
                )}
              >
                <h3 className="text-[0.36rem] leading-[0.44rem] font-medium text-[#e34a14]">
                  {t(step.verb)}
                </h3>
                <p className="mt-[0.15rem] text-[0.34rem] leading-[0.44rem] font-medium text-white">
                  {t(step.what)}
                </p>
                <p className="mt-[0.18rem] text-balance text-[0.24rem] leading-[0.32rem] text-[#a6a6a6]">
                  {t(step.desc)}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* sec5: comfort in every season */}
        <section
          className={cn("relative h-[24.08rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec5.webp`)}
        >
          <div className={FRAME}>
            <h2 className="absolute inset-x-0 top-[2.72rem] -translate-y-1/2 text-center text-[0.56rem] leading-[0.7rem] text-[#efdfc7]">
              {t("s5.title")}
            </h2>
            <p className="absolute inset-x-0 top-[14.07rem] -translate-y-1/2 text-center text-[0.34rem] leading-[0.44rem] text-[#e6dccd]">
              {t("s5.lead")}
            </p>
            {AIRFLOW.map((item) => (
              <div key={item.value}>
                <p
                  className={cn(
                    "absolute top-[15.36rem] whitespace-nowrap text-[0.46rem] leading-[0.56rem] text-[#f1e0c9]",
                    CENTRE,
                    item.centre,
                  )}
                >
                  {t(item.value)}
                </p>
                <p
                  className={cn(
                    "absolute top-[15.83rem] whitespace-nowrap text-[0.22rem] leading-[0.3rem] text-[#ecdbc3]",
                    CENTRE,
                    item.centre,
                  )}
                >
                  {t(item.desc)}
                </p>
              </div>
            ))}
            {SCENES.map((scene) => (
              <div
                key={scene.title}
                className={cn(
                  "absolute top-[20.85rem] w-[3.6rem] -translate-x-1/2 text-center",
                  scene.centre,
                )}
              >
                <h3 className="text-balance text-[0.22rem] leading-[0.33rem] font-medium text-[#ffdebd]">
                  {star(scene.title)}
                </h3>
                <p className="mt-[0.14rem] text-balance text-[0.17rem] leading-[0.24rem] font-medium text-[#b0937f]">
                  {t(scene.desc)}
                </p>
              </div>
            ))}
            <p className="absolute inset-x-[2.2rem] top-[23.185rem] -translate-y-1/2 text-center text-[0.15rem] leading-[0.22rem] font-medium text-[#8a786b]">
              {t("s5.note")}
            </p>
          </div>
        </section>
        {/* sec6: half the bill */}
        <section
          className={cn("relative h-[17.73rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec6.webp`)}
        >
          <div className={FRAME}>
            <h2 className="absolute inset-x-0 top-[2.9rem] -translate-y-1/2 text-center text-[0.6rem] leading-[0.72rem] text-[#f0dfc7]">
              {t("s6.title")}
            </h2>
            <p className="absolute inset-x-0 top-[4.285rem] -translate-y-1/2 text-center text-[0.28rem] leading-[0.54rem] text-[#a6a6a5]">
              {t("s6.desc")}
            </p>
            <h3 className="absolute top-[6.57rem] left-[3.07rem] -translate-y-1/2 text-[0.28rem] leading-[0.36rem] text-[#8a8a8a]">
              {t("s6.chart")}
            </h3>
            {COSTS.map((row) => (
              <div key={row.label}>
                <p
                  className={cn(
                    "absolute left-[3.06rem] w-[2.75rem] -translate-y-1/2 text-[0.24rem] leading-[0.3rem]",
                    row.more ? "text-white" : "text-[#dbffbe]",
                    row.row,
                  )}
                >
                  {t(row.label)}
                </p>
                <p
                  className={cn(
                    "absolute flex -translate-y-1/2 items-center gap-x-[0.24rem] whitespace-nowrap",
                    row.row,
                    row.at,
                  )}
                >
                  <span
                    className={
                      row.more
                        ? "text-[0.3rem] leading-[0.4rem] text-white"
                        : "text-[0.48rem] leading-[0.6rem] font-semibold text-[#daffc2]"
                    }
                  >
                    {t(row.cost)}
                  </span>
                  {row.more && (
                    <span className="rounded-[0.1rem] border-[0.015rem] border-[#ff7862] px-[0.14rem] text-[0.24rem] leading-[0.35rem] text-[#ff7862]">
                      {t(row.more)}
                    </span>
                  )}
                </p>
              </div>
            ))}
            <div className="absolute top-[14rem] left-[5.29rem] w-[4.8rem] -translate-x-1/2 -translate-y-1/2 text-center text-[#ffefdb]">
              <h3 className="text-balance text-[0.62rem] leading-[0.74rem] font-medium">
                {t("s6.more")}
              </h3>
              <p className="mt-[0.2rem] text-[0.24rem] leading-[0.32rem] font-medium">
                {t("s6.moreDesc")}
              </p>
            </div>
            <dl className="absolute top-[11.98rem] left-[8.53rem] grid w-[8.37rem] auto-rows-[0.725rem] grid-cols-[auto_1fr] items-center gap-x-[0.14rem]">
              {SAVINGS.map(([title, desc]) => (
                <div key={title} className="contents">
                  <dt className="rounded-full bg-[#2d2d2d] px-[0.16rem] text-center text-[0.22rem] leading-[0.41rem] font-medium text-[#95e987]">
                    {t(title)}
                  </dt>
                  <dd className="text-pretty text-[0.22rem] leading-[0.29rem] text-white">
                    {t(desc)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        {/* sec7: IntePilot saves energy */}
        <section
          className={cn("relative h-[11.82rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec7.webp`)}
        >
          <div className={FRAME}>
            <p className="absolute top-[1.695rem] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/70 px-[0.3rem] text-[0.3rem] leading-[0.5rem] text-[#fafafa]">
              {t("s7.pill")}
            </p>
            <h2 className="absolute inset-x-0 top-[2.92rem] -translate-y-1/2 text-center text-[0.5rem] leading-[0.62rem] text-[#fbfafb]">
              {t("s7.title")}
            </h2>
            {PILOT.map((card) => (
              <div key={card.title} className={cn("absolute", card.box)}>
                <h3 className="whitespace-nowrap text-[0.19rem] leading-[0.26rem] font-medium text-[#eddcc3]">
                  {t(card.title)}
                </h3>
                <p className="mt-[0.06rem] text-pretty text-[0.14rem] leading-[0.21rem] text-[#c4c4c4]">
                  {t(card.desc)}
                </p>
              </div>
            ))}
            <p
              className={cn(
                "absolute top-[9.43rem] left-[6.135rem] whitespace-nowrap rounded-full bg-[#2d2d2d] px-[0.06rem] text-[0.1rem] leading-[0.17rem] font-medium text-[#dedede]",
                CENTRE,
              )}
            >
              {t("s7.peak")}
            </p>
            <p
              className={cn(
                "absolute top-[10.43rem] left-[3.97rem] whitespace-nowrap rounded-full bg-[#2d2d2d] px-[0.06rem] text-[0.1rem] leading-[0.17rem] font-medium text-[#dedede]",
                CENTRE,
              )}
            >
              {t("s7.trough")}
            </p>
          </div>
        </section>
        {/* sec8: the smart home starts here */}
        <section
          className={cn("relative h-[11.78rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec8.webp`)}
        >
          <div className={FRAME}>
            <p className="absolute inset-x-0 top-[1.945rem] -translate-y-1/2 text-center text-[0.32rem] leading-[0.4rem] text-[#dceaff]">
              {t("s8.kicker")}
            </p>
            <h2 className="absolute inset-x-0 top-[2.94rem] -translate-y-1/2 text-center text-[0.56rem] leading-[0.7rem] text-[#abd6f5]">
              {t("s8.title")}
            </h2>
            {SMART.map((card) => (
              <div key={card.title} className={cn("absolute", card.box)}>
                <h3
                  className={cn(
                    "text-[0.22rem] leading-[0.3rem] font-medium",
                    card.tone,
                  )}
                >
                  {t(card.title)}
                </h3>
                <p className="mt-[0.03rem] text-[0.19rem] leading-[0.27rem] font-semibold text-[#65d6bc]">
                  {t(card.tag)}
                </p>
                <p className="mt-[0.1rem] text-[0.15rem] leading-[0.26rem] text-[#b2b2b4]">
                  {t(card.desc)}
                </p>
              </div>
            ))}
            {SMART_SHORT.map((card) => (
              <div key={card.title} className={cn("absolute", card.box)}>
                <h3 className="text-[0.22rem] leading-[0.33rem] font-semibold text-[#64d6ba]">
                  {t(card.title)}
                </h3>
                <p className="text-[0.22rem] leading-[0.33rem] font-semibold text-[#67c6c5]">
                  {t(card.desc)}
                </p>
              </div>
            ))}
            <p
              className={cn(
                BUBBLE,
                "top-[5.12rem] left-[10.95rem] border border-white/60 bg-[#5a6580]/50 text-[0.12rem] leading-[0.27rem]",
              )}
            >
              {t("s8.ok")}
            </p>
            <p
              className={cn(
                BUBBLE,
                "top-[5.515rem] left-[10.4rem] border border-white/60 bg-[#70829f]/50 text-[0.12rem] leading-[0.29rem]",
              )}
            >
              {t("s8.sure")}
            </p>
            <p
              className={cn(
                BUBBLE,
                "top-[6.84rem] left-[7.62rem] border border-white/80 bg-black/30 text-[0.13rem] leading-[0.28rem] before:absolute before:-top-[0.12rem] before:left-[0.62rem] before:border-x-[0.05rem] before:border-b-[0.12rem] before:border-x-transparent before:border-b-white/80 before:content-['']",
              )}
            >
              {t("s8.ask1")}
            </p>
            <p
              className={cn(
                BUBBLE,
                "top-[7.35rem] left-[9.23rem] border border-white/80 bg-black/30 text-[0.13rem] leading-[0.3rem] before:absolute before:-top-[0.12rem] before:left-[0.55rem] before:border-x-[0.05rem] before:border-b-[0.12rem] before:border-x-transparent before:border-b-white/80 before:content-['']",
              )}
            >
              {t("s8.ask2")}
            </p>
          </div>
        </section>
        {/* sec9: works with the major ecosystems and AI platforms */}
        <section
          className={cn("relative h-[13.12rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec9.webp`)}
        >
          <div className={FRAME}>
            <h2 className="absolute inset-x-0 top-[2.91rem] -translate-y-1/2 text-center text-[0.52rem] leading-[1rem] font-medium text-[#fbf8f3]">
              {t("s9.title")}
            </h2>
            <p className="absolute inset-x-0 top-[4.64rem] flex -translate-y-1/2 justify-center gap-x-[0.4rem] text-[0.28rem] leading-[0.4rem] text-[#f2e2ca]">
              <span>{t("s9.matter")}</span>
              <span>{t("s9.apple")}</span>
            </p>
            <p className="absolute inset-x-0 top-[5.4rem] -translate-y-1/2 text-center text-[0.17rem] leading-[0.33rem] text-[#dcdcdc]">
              {t("s9.desc")}
              <br />
              {t("s9.kinds")}
            </p>
            <p className="absolute top-[7.955rem] left-[4.93rem] -translate-y-1/2 text-[0.075rem] leading-[0.1rem] font-semibold text-[#e8e4ee]">
              {t("s9.home")}
            </p>
            <p className="absolute top-[10.63rem] left-[4.76rem] w-[1.8rem] -translate-y-1/2 text-[0.17rem] leading-[0.24rem] text-[#e0dfe0]">
              {t("s9.siri")}
            </p>
            {REQUESTS.map((item) => (
              <p
                key={item.key}
                className={cn(
                  BUBBLE,
                  "bg-white/20 text-[0.15rem] leading-[0.33rem]",
                  item.at,
                )}
              >
                {t(item.key)}
              </p>
            ))}
            {PLATFORMS.map((item) => (
              <div key={item.pill}>
                <p
                  className={cn(
                    "absolute top-[10.675rem] whitespace-nowrap rounded-full bg-[linear-gradient(90deg,#b38d68,#dbb68c_50%,#b38d68)] px-[0.2rem] text-[0.2rem] leading-[0.34rem] font-medium text-[#372b21]",
                    CENTRE,
                    item.centre,
                  )}
                >
                  {t(item.pill)}
                </p>
                <p
                  className={cn(
                    "absolute top-[11.12rem] whitespace-nowrap text-[0.18rem] leading-[0.26rem] text-[#dcdcdc]",
                    CENTRE,
                    item.centre,
                  )}
                >
                  {t(item.desc)}
                </p>
              </div>
            ))}
            <p className="absolute inset-x-[2.2rem] top-[12.42rem] -translate-y-1/2 text-center text-[0.15rem] leading-[0.22rem] font-medium text-[#7c7c7c]">
              {t("s9.note")}
            </p>
          </div>
        </section>
        {/* sec10: flagship parts throughout */}
        <section
          className={cn("relative h-[15.33rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec10.webp`)}
        >
          <div className={FRAME}>
            <h2 className="absolute inset-x-0 top-[2.34rem] -translate-y-1/2 text-center text-[0.52rem] leading-[0.64rem] font-medium text-white">
              {t("s10.title")}
            </h2>
            <p className="absolute inset-x-0 top-[3.205rem] -translate-y-1/2 text-center text-[0.26rem] leading-[0.36rem] text-[#bfbfbf]">
              {t("s10.desc")}
            </p>
            {PARTS.map((part) => (
              <div key={part.title} className={cn("absolute", part.box)}>
                <h3 className="text-[0.26rem] leading-[0.38rem] font-medium text-[#e3c395]">
                  {t(part.title)}
                </h3>
                {part.desc && (
                  <p className="mt-[0.1rem] text-[0.19rem] leading-[0.3rem] text-white">
                    {t(part.desc)}
                  </p>
                )}
              </div>
            ))}
            {QUIET.map((card) => (
              <h3
                key={card.key}
                className={cn(
                  "absolute text-balance text-[0.26rem] leading-[0.38rem] font-medium text-[#e3c395]",
                  CENTRE,
                  card.at,
                )}
              >
                {t(card.key)}
              </h3>
            ))}
          </div>
        </section>
        {/* sec11: installed and serviced by the brand itself */}
        <section
          className={cn("relative h-[21.13rem] overflow-hidden", PHOTO)}
          style={bg(`${IMG}/sec11.webp`)}
        >
          <div className={FRAME}>
            <h2 className="absolute inset-x-0 top-[2.04rem] -translate-y-1/2 text-center text-[0.56rem] leading-[0.7rem] font-medium text-[#ecdcc9]">
              {t("s11.title")}
            </h2>
            <p className="absolute inset-x-0 top-[2.955rem] -translate-y-1/2 text-center text-[0.28rem] leading-[0.36rem] text-[#f9f9f9]">
              {t("s11.desc")}
            </p>
            <h3 className="absolute inset-x-0 top-[12.81rem] -translate-y-1/2 text-center text-[0.3rem] leading-[0.4rem] font-medium text-[#191919]">
              {t("s11.tab")}
            </h3>
            <p className="absolute inset-x-0 top-[13.725rem] -translate-y-1/2 text-center text-[0.23rem] leading-[0.41rem] text-[#bcbbbb]">
              {t("s11.tabDesc")}
            </p>
            <ol>
              {SERVICE.map((step) => (
                <li
                  key={step.key}
                  className={cn(
                    "absolute w-[2.35rem] -translate-y-1/2 text-[0.2rem] leading-[0.31rem] font-medium text-[#ababab]",
                    step.at,
                  )}
                >
                  {t(step.key)}
                </li>
              ))}
            </ol>
            <p className="absolute top-[18.83rem] left-[4.765rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[0.12rem] leading-[0.16rem] font-medium text-[#f8e8c9] uppercase">
              {t("s11.badge")}
            </p>
            <div className="absolute top-[17.9rem] left-[5.88rem]">
              <h3 className="text-[0.46rem] leading-[0.56rem] text-[#edd4b1]">
                {t("s11.warranty")}
              </h3>
              <p className="mt-[0.02rem] text-[0.26rem] leading-[0.36rem] text-[#bcbbbb]">
                {t("s11.warrantyDesc")}
              </p>
            </div>
            {/* the emblem in the diamond: orvibo.com has the character for "fine work" there, here a check mark in its gold */}
            <svg
              aria-hidden="true"
              viewBox="0 0 56 56"
              className="absolute top-[18.24rem] left-[11.81rem] size-[0.56rem] -translate-x-1/2 -translate-y-1/2"
            >
              <defs>
                <linearGradient
                  id="jidacheng-gold"
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
                stroke="url(#jidacheng-gold)"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute top-[17.92rem] left-[12.95rem] w-[4.1rem]">
              <h3 className="text-[0.42rem] leading-[0.56rem] text-[#ecd2ae]">
                {t("s11.precision")}
              </h3>
              <p className="mt-[0.02rem] whitespace-nowrap text-[0.26rem] leading-[0.32rem] text-[#bcbbbb]">
                {t("s11.precisionDesc")}
              </p>
            </div>
          </div>
        </section>
        {/* sec12: the end of the home gas era, and the footnotes for the whole page */}
        <section
          className="relative min-h-[25.69rem] bg-black bg-[length:100%_auto] bg-top bg-no-repeat pt-[19.12rem] pb-[0.8rem]"
          style={bg(`${IMG}/sec12.webp`)}
        >
          <div className={FRAME}>
            <h2 className="absolute inset-x-0 top-[3.255rem] -translate-y-1/2 text-center text-[1.1rem] leading-[1.6rem] font-medium text-[#d45304]">
              {t("s12.title")}
            </h2>
            <p className="absolute inset-x-0 top-[6.74rem] -translate-y-1/2 text-center text-[0.3rem] leading-[0.61rem] text-[#929191]">
              {t("s12.desc")}
            </p>
          </div>
          <ul className="relative mx-auto w-[15rem] list-disc pl-[0.2rem] text-[0.14rem] leading-[0.25rem] text-[#8a8a8a] marker:text-[#555555]">
            {NOTES.map((n) => (
              <li key={n} className="mb-[0.06rem]">
                {t(`note.${n}`)}
              </li>
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
