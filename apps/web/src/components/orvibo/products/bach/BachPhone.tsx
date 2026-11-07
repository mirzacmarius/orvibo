import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";

/** orvibo.com's phone pictures for this page (scaled to 750 px wide) without their words, p01 to p10, and each one's
 * height in hundreds of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at
 * (x, y) px goes at (x / 100, y / 100) rem. p09 and p10 carry engraved key labels, drawn per language (`img()`). */
const PIC = "/orvibo/products/bach/phone";
const HEIGHT = {
  p01: 13.82,
  p02: 11.34,
  p03: 10.46,
  p04: 8.93,
  p05: 10.89,
  p06: 13.61,
  p07: 12.86,
  p08: 10.32,
  p09: 13.6,
  p10: 11.06,
} as const;
type Slice = keyof typeof HEIGHT;

/** A section's heading and its lines. */
const H2 = "text-[0.44rem] leading-[0.68rem] font-semibold";
const DESC = "text-[0.25rem] leading-[0.4rem] font-normal";
/** A tile's words, centred over it (`at` places the block). */
const TILE = "absolute text-center text-balance";
/** The four safety tiles: their two lines, centred under each picture. */
const SAFETY = [
  { key: "relay", at: "top-[2.12rem] left-[0.58rem]" },
  { key: "surge", at: "top-[2.12rem] left-[3.96rem]" },
  { key: "fuse", at: "top-[5.3rem] left-[0.58rem]" },
  { key: "fire", at: "top-[5.3rem] left-[3.96rem]" },
] as const;
/** The finishes on the four photos, by picture and where each name starts (after its dot). */
const FINISHES = [
  { pic: "p07", key: "gold", at: "top-[3.15rem]", color: "text-[#b7977d]" },
  { pic: "p07", key: "blue", at: "top-[7.81rem]", color: "text-[#909ca9]" },
  { pic: "p08", key: "silver", at: "top-[3.17rem]", color: "text-[#524f4e]" },
  { pic: "p08", key: "gray", at: "top-[7.8rem]", color: "text-[#282927]" },
] as const;
/** The 14 colours under their swatches, row by row (text keys `sec9.<key>`), and the three processes' pills. */
const SWATCH_X = [
  "left-[0.56rem]",
  "left-[2.25rem]",
  "left-[3.94rem]",
  "left-[5.63rem]",
];
const SWATCH_ROWS = [
  {
    top: "top-[2.55rem]",
    keys: ["snow_silver", "luxembourg_gold", "champagne_gold", "rose_gold"],
  },
  {
    top: "top-[4.55rem]",
    keys: ["amsterdam_orange", "ferrari_red", "emerald_green", "hawaii_blue"],
  },
  {
    top: "top-[6.55rem]",
    keys: ["midnight_purple", "mica_black", "sumatra_gray"],
  },
  { top: "top-[9.62rem]", keys: ["jade_black", "ivory_white", "gold_24k"] },
] as const;
const PROCESSES = [
  { key: "anodized", at: "top-[0.1rem] left-[0.51rem]" },
  { key: "electrophoretic", at: "top-[7.17rem] left-[0.51rem]" },
  { key: "electroplated", at: "top-[7.17rem] left-[3.94rem]" },
] as const;
/** The specification list, in orvibo.com's order (text keys `spec.<key>`, "label: value"). */
const SPECS = [
  "m.spec.brand",
  "spec.model",
  "spec.category",
  "spec.versions",
  "spec.material",
  "spec.voltage",
  "spec.mounting",
  "spec.load",
  "spec.loadTypes",
  "spec.protocol",
  "spec.environment",
  "spec.size",
] as const;

/** The Bach page on phones: orvibo.com's phone page, its pictures without their words and the words in HTML where
 * it draws them. Headings on a flat ground stand in a block of that ground that grows with the words (Romanian and
 * English run longer than Chinese), and the picture goes on below it. */
export function BachPhone({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, lines } = productPageHelpers(locale, text);
  /** A phone picture, or the part of it from `top` to `bottom` (in hundreds of its pixels). */
  const pic = (name: Slice, top = 0, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, top, 7.5, bottom] as const,
  });
  /** A heading whose lines (`\n`) stay lines, each wrapping on its own. */
  const heading = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => (
        <span key={part} className="block text-pretty">
          {part}
        </span>
      ));

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the line under the wordmark and the slogan */}
        <PhonePicture {...pic("p01")}>
          <p className="absolute top-[1.93rem] inset-x-0 text-center text-[0.3rem] leading-[0.4rem] font-normal text-[#b9b9b9]">
            {t("m.subtitle")}
          </p>
          <h1 className="absolute top-[2.58rem] inset-x-[0.5rem] text-center text-[0.42rem] leading-[0.62rem] font-normal text-balance text-[#beb4a1]">
            {t("banner.slogan")}
          </h1>
        </PhonePicture>
        {/* the seven tiles (Zigbee 3.0 keeps its words in the picture) */}
        <PhonePicture {...pic("p02")}>
          <div className={cn(TILE, "top-[1.3rem] left-[0.4rem] w-[4.4rem]")}>
            <p className="text-[0.26rem] leading-[0.34rem] font-semibold text-[#d5d8e2]">
              {t("m.tile.series")}
            </p>
            <p className="mt-[0.04rem] text-[0.21rem] leading-[0.3rem] font-normal text-[#a0a4ae]">
              {t("m.tile.colors")}
            </p>
          </div>
          <p
            className={cn(
              TILE,
              "top-[4.66rem] left-[5.1rem] w-[2rem] text-[0.18rem] leading-[0.24rem] font-normal text-[#a8a9ae]",
            )}
          >
            {t("m.tile.matter")}
          </p>
          <div className={cn(TILE, "top-[6.98rem] left-[0.4rem] w-[3.2rem]")}>
            <p className="text-[0.25rem] leading-[0.3rem] font-semibold text-[#d0d4dc]">
              MixCtrl 2.0
            </p>
            <p className="text-[0.25rem] leading-[0.32rem] font-semibold text-[#d0d4dc]">
              {t("m.tile.keys")}
            </p>
            <p className="mt-[0.06rem] text-[0.19rem] leading-[0.26rem] font-normal text-[#d0d4dc]">
              {t("m.tile.press")}
            </p>
          </div>
          <div className={cn(TILE, "top-[7.35rem] left-[3.92rem] w-[3.18rem]")}>
            <p className="text-[0.24rem] leading-[0.32rem] font-semibold text-[#d8dce4]">
              {t("m.tile.circuits")}
            </p>
            <p className="mt-[0.02rem] text-[0.19rem] leading-[0.26rem] font-normal text-[#9ea1a6]">
              {t("m.tile.load")}
            </p>
          </div>
          <p
            className={cn(
              TILE,
              "top-[9.27rem] left-[0.4rem] w-[4.28rem] text-[0.24rem] leading-[0.32rem] font-semibold text-[#d4dde8]",
            )}
          >
            {t("m.tile.metal")}
          </p>
          <p
            className={cn(
              TILE,
              "top-[9.62rem] left-[4.95rem] w-[2.17rem] text-[0.22rem] leading-[0.3rem] font-semibold text-[#d0dce2]",
            )}
          >
            {t("m.tile.light")}
          </p>
        </PhonePicture>
        {/* a tribute to the classics */}
        <div className="min-h-[4.4rem] bg-[image:linear-gradient(#101010,#131313)] px-[0.57rem] pt-[1.17rem] pb-[0.4rem]">
          <h2 className={cn(H2, "text-[#dbe0eb]")}>
            {heading("sec2.bach_title")}
          </h2>
          <p className={cn(DESC, "mt-[0.36rem] text-[#fcfcfc]")}>
            {t("sec2.bach_desc")}
          </p>
        </div>
        <PhonePicture {...pic("p03", 4.4)} />
        {/* the ganged switches */}
        <div className="min-h-[5rem] bg-white px-[0.6rem] pt-[1.02rem] pb-[0.4rem] text-black">
          <h2 className={H2}>{heading("sec3.bach_title")}</h2>
          <p className={cn(DESC, "mt-[0.4rem] text-[#111111]")}>
            {t("sec3.bach_desc")}
          </p>
        </div>
        <PhonePicture {...pic("p04", 5)} />
        {/* the nine layers: the words left of the exploded switch */}
        <PhonePicture {...pic("p05")}>
          <div className="absolute top-[1.36rem] left-[0.62rem] w-[3.22rem] text-black">
            <h2 className="text-[0.38rem] leading-[0.58rem] font-semibold">
              {ts("sec4.bach_title")
                .split("\n")
                .map((part) => (
                  <span key={part} className="block [&+&]:mt-[0.12rem]">
                    {part}
                  </span>
                ))}
            </h2>
            <p className={cn(DESC, "mt-[0.36rem] text-[#111111]")}>
              {t("sec4.bach_desc")}
            </p>
          </div>
        </PhonePicture>
        {/* four levels of protection: the heading, the four tiles, then their footnotes */}
        <div className="min-h-[3rem] px-[0.5rem] pt-[0.95rem] pb-[0.3rem] text-center text-white">
          <h2 className={cn(H2, "text-balance")}>{t("sec5.bach_title")}</h2>
        </div>
        <PhonePicture {...pic("p06", 3, 9.8)}>
          {SAFETY.map((tile) => (
            <div
              key={tile.key}
              className={cn(TILE, "w-[2.96rem] text-[#eef0f4]", tile.at)}
            >
              <p className="text-[0.19rem] leading-[0.24rem] font-medium">
                {t(`m.safe.${tile.key}`)}
              </p>
              <p className="mt-[0.02rem] text-[0.17rem] leading-[0.23rem] font-normal">
                {t(`m.safe.${tile.key}Desc`)}
              </p>
            </div>
          ))}
        </PhonePicture>
        <p className="px-[0.58rem] pt-[0.2rem] pb-[0.6rem] text-[0.19rem] leading-[0.38rem] font-normal text-[#5e5e5e]">
          {t("sec5.desc")}
        </p>
        {/* the four finishes */}
        <div className="min-h-[3.5rem] bg-white px-[0.65rem] pt-[1.34rem] pb-[0.3rem] text-black">
          <h2 className={cn(H2, "text-center text-balance")}>
            {t("sec6.bach_title")}
          </h2>
          <p className={cn(DESC, "mt-[0.2rem] text-[#141414]")}>
            {t("sec6.bach_desc")}
          </p>
        </div>
        {(["p07", "p08"] as const).map((name) => (
          <PhonePicture key={name} {...pic(name, name === "p07" ? 3.5 : 0)}>
            {FINISHES.filter((finish) => finish.pic === name).map((finish) => (
              <p
                key={finish.key}
                className={cn(
                  "absolute left-[1.56rem] text-[0.24rem] leading-[0.34rem] font-normal whitespace-nowrap",
                  finish.at,
                  finish.color,
                )}
              >
                {t(`m.finish.${finish.key}`)}
              </p>
            ))}
          </PhonePicture>
        ))}
        {/* the 14 custom colours */}
        <div className="min-h-[2.75rem] bg-white px-[0.53rem] pt-[0.66rem] pb-[0.3rem] text-black">
          <h2 className={cn(H2, "max-w-[5.6rem]")}>{t("sec9.bach_title")}</h2>
        </div>
        <PhonePicture {...pic("p09", 2.75)}>
          {PROCESSES.map((process) => (
            <p
              key={process.key}
              className={cn(
                "absolute flex h-[0.43rem] items-center whitespace-nowrap rounded-[0.14rem] border-[0.015rem] border-[#c4c4c4] px-[0.2rem] text-[0.2rem] leading-none font-normal text-[#888888]",
                process.at,
              )}
            >
              {t(`sec9.${process.key}`)}
            </p>
          ))}
          {SWATCH_ROWS.flatMap((row) =>
            row.keys.map((key, i) => (
              <p
                key={key}
                className={cn(
                  "absolute w-[1.42rem] text-center text-[0.18rem] leading-[0.22rem] font-normal text-balance text-[#939393]",
                  row.top,
                  SWATCH_X[i],
                )}
              >
                {t(`sec9.${key}`)}
              </p>
            )),
          )}
        </PhonePicture>
        {/* custom key labels */}
        <div className="min-h-[3.3rem] bg-white px-[0.62rem] pt-[0.64rem] pb-[0.3rem] text-black">
          <h2 className={cn(H2, "text-[0.5rem] leading-[0.8rem]")}>
            {t("sec8.bach_title")}
          </h2>
        </div>
        <PhonePicture {...pic("p10", 3.3)} />
        {/* the specifications */}
        <div className="px-[0.76rem] pt-[0.98rem] pb-[1rem]">
          <h2 className="mb-[0.56rem] text-center text-[0.44rem] leading-[0.6rem] font-semibold text-white">
            {t("m.specTitle")}
          </h2>
          <dl className="grid grid-cols-[2.1rem_1fr] gap-x-[0.24rem] gap-y-[0.28rem] text-[0.24rem] leading-[0.36rem] font-normal">
            {SPECS.map((key) => {
              const [label, ...value] = ts(key).split(": ");
              return (
                <div key={key} className="contents">
                  <dt className="text-[#aaa9a9]">{label}</dt>
                  <dd className="text-[#7a7a7a]">{value.join(": ")}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
      {/* product_detail_tips */}
      <div className="bg-[#202020] px-[20px] py-[32px]">
        <p className="text-[13px] leading-[22px] font-medium text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
