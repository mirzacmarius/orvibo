import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. p03a to p03c are the frames of its animated scene picture; p04 and p05 show screens and
 * cards translated per language (`img()`). Its last two pictures (specifications, notes) are HTML here. */
const PIC = "/orvibo/products/s3/phone";
const HEIGHT = {
  p01: 16.38,
  p02: 15.12,
  p03a: 7.04,
  p03b: 7.04,
  p03c: 7.04,
  p04: 13.59,
  p05: 18.49,
  p06: 15.33,
  p07: 15.23,
  p08: 10.96,
  p09: 9.03,
  p10: 9.03,
  p11: 13.52,
} as const;
type Slice = keyof typeof HEIGHT;

const H2 = "text-[0.42rem] leading-[0.62rem] font-semibold";
/** The bedroom's three scenes: orvibo.com shows them in turn, a second each, the bar over the scene's name dark. */
const SCENES = [
  { key: "couple", frame: "p03a", delay: "" },
  { key: "reading", frame: "p03b", delay: "[animation-delay:-2s]" },
  { key: "night", frame: "p03c", delay: "[animation-delay:-1s]" },
] as const;
/** The touch and app tiles' two lines and where they stand. */
const TILES = [
  ["m.touch", "m.touchDesc", "left-[0.68rem]"],
  ["m.app", "m.appDesc", "left-[4.1rem]"],
] as const;
/** The anti-glare features beside the lens (pairs of desktop keys, the first with its bullet). */
const FEATURES = [
  ["sec5.item", "sec5.item2"],
  ["sec5.item3", "sec5.item4"],
  ["sec5.item5", "sec5.item6"],
] as const;
/** The four cards: their lines on the photo (the third's first line, Ra ≥ 90*, stays in it) and their name below. */
const CARDS = [
  {
    top: "sec6.item",
    line: "sec6.item2",
    name: "bright",
    at: "left-[0.36rem]",
    row: 0,
  },
  {
    top: "sec6.item3",
    line: "sec6.item4",
    name: "flicker",
    at: "left-[3.88rem]",
    row: 0,
  },
  { top: "", line: "sec6.item5", name: "color", at: "left-[0.36rem]", row: 1 },
  {
    top: "sec6.item6",
    line: "sec6.item7",
    name: "durable",
    at: "left-[3.88rem]",
    row: 1,
  },
] as const;
/** The specifications orvibo.com's phone page lists (two columns) and its table of models. */
const SPECS = [
  "material",
  "dimming",
  "power",
  "output",
  "cri",
  "cct",
  "protocol",
  "cutout",
] as const;
const MODELS = [
  { name: "downlight", variant: "7 W", size: "Φ85 × H44 mm", beam: "90°" },
  { name: "spot", variant: "7 W, 24°", size: "Φ85 × H44 mm", beam: "24°" },
  { name: "spot", variant: "7 W, 36°", size: "Φ85 × H44 mm", beam: "36°" },
  { name: "antiglare", variant: "7 W, 24°", size: "Φ85 × H69 mm", beam: "24°" },
  { name: "antiglare", variant: "7 W, 36°", size: "Φ85 × H69 mm", beam: "36°" },
] as const;

/** The S3 page on phones: orvibo.com's phone page, its pictures without their words and the words in HTML where it
 * draws them. Headings on a flat ground stand in a block of that ground that grows with the words (Romanian and
 * English run longer than Chinese), and the picture goes on below it. */
export function S3Phone({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, lines } = productPageHelpers(locale, text);
  /** A phone picture, or the part of it from `top` to `bottom` (in hundreds of its pixels). */
  const pic = (name: Slice, top = 0, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, top, 7.5, bottom] as const,
  });
  /** A heading's lines (`\n`) as blocks, each wrapping on its own. */
  const heading = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => (
        <span key={part} className="block text-balance">
          {part}
        </span>
      ));

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-white">
        {/* hero: the name and the two lines over the floating spotlights */}
        <PhonePicture {...pic("p01")}>
          <div className="absolute top-[1.3rem] inset-x-[0.5rem] text-center text-[#241004]">
            <h1 className="text-[0.26rem] leading-[0.36rem] font-medium">
              {t("m.hero.name")}
            </h1>
            <p className="mt-[0.36rem] text-[0.42rem] leading-[0.64rem] font-normal">
              <span className="block text-balance font-semibold">
                {t("m.hero.title")}
              </span>
              <span className="block text-balance">{t("m.hero.title2")}</span>
            </p>
          </div>
        </PhonePicture>
        {/* SPWM: the heading and its line over the wall, the sliders' names over the room */}
        <PhonePicture {...pic("p02")}>
          <div className="absolute top-[1.2rem] left-[0.7rem] right-[0.6rem]">
            <h2 className={cn(H2, "text-[#4b3123]")}>
              {heading("sec2.title")}
            </h2>
            <p className="mt-[0.4rem] text-[0.21rem] leading-[0.38rem] font-normal text-[#503a2b]">
              {ts("sec2.text").replaceAll("\n", " ")}
            </p>
          </div>
          <p className="absolute top-[12.22rem] left-[0.87rem] [text-shadow:0_0_0.06rem_rgb(0_0_0/0.45)] text-[0.2rem] leading-[0.3rem] font-medium text-white">
            {t("m.cct")}
          </p>
          <p className="absolute top-[13.4rem] left-[0.84rem] [text-shadow:0_0_0.06rem_rgb(0_0_0/0.45)] text-[0.2rem] leading-[0.3rem] font-medium text-white">
            {t("m.levels")}
          </p>
        </PhonePicture>
        {/* the bedroom's three scenes in turn, their names below */}
        <div className="relative">
          {SCENES.map(({ frame, delay }, i) => (
            <PhonePicture
              key={frame}
              {...pic(frame, 0, 5.45)}
              className={cn(
                i > 0 && "absolute inset-0",
                "animate-[orvibo-one-of-three_3s_infinite] motion-reduce:animate-none",
                i > 0 && "motion-reduce:hidden",
                delay,
              )}
            />
          ))}
        </div>
        <div className="grid min-h-[1.59rem] grid-cols-3 gap-x-[0.16rem] bg-[#f4e8da] px-[0.3rem] pt-[0.1rem] pb-[0.3rem] text-center">
          {SCENES.map(({ key }) => (
            <div key={key}>
              <p className="text-[0.24rem] leading-[0.34rem] font-medium text-balance text-[#3b2417]">
                {t(`sec3.${key}.title`)}
              </p>
              <p className="mt-[0.06rem] text-[0.17rem] leading-[0.26rem] font-normal text-pretty text-[#3e2c1e]">
                {t(`sec3.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
        {/* controls: the heading and its line, then the three tiles and the note under them */}
        <div className="min-h-[4rem] bg-black px-[0.5rem] pt-[1.4rem] pb-[0.3rem] text-center">
          <h2 className={cn(H2, "text-balance text-[#ecd2b3]")}>
            {t("sec4.title")}
          </h2>
          <p className="mt-[0.3rem] text-[0.24rem] leading-[0.36rem] font-normal text-white">
            {t("sec4.text")}
          </p>
        </div>
        <PhonePicture {...pic("p04", 4, 12.4)}>
          {TILES.map(([title, desc, at]) => (
            <div
              key={title}
              className={cn(
                "absolute top-[0.5rem] w-[2.9rem] text-[0.26rem] leading-[0.41rem] font-medium text-white",
                at,
              )}
            >
              <p>{t(title)}</p>
              <p>{t(desc)}</p>
            </div>
          ))}
          <p className="absolute top-[5.04rem] left-[0.82rem] text-[0.26rem] leading-[0.36rem] font-medium text-white">
            {t("sec4.item3")}
          </p>
          <p className="absolute top-[5.68rem] left-[3.85rem] -translate-x-1/2 whitespace-nowrap rounded-full bg-[#e2dbd5]/75 px-[0.2rem] text-[0.2rem] leading-[0.42rem] font-normal text-[#292520]">
            {t("m.ask")}
          </p>
        </PhonePicture>
        <p className="min-h-[1.19rem] bg-black px-[0.4rem] pt-[0.14rem] pb-[0.3rem] text-[0.17rem] leading-[0.26rem] font-normal text-[#dedede]">
          {t("sec4.text2")}
        </p>
        {/* anti-glare: the heading, the lens and its three features, the three generations and their glare */}
        <div className="min-h-[2.6rem] bg-black px-[0.4rem] pt-[0.95rem] pb-[0.3rem] text-center">
          <h2 className={cn(H2, "text-[#eed4b5]")}>{heading("sec5.title")}</h2>
        </div>
        <PhonePicture {...pic("p05", 2.6, 16.7)}>
          <ul className="absolute top-[6.42rem] left-[0.77rem] w-[3.4rem]">
            {FEATURES.map(([name, desc]) => (
              <li key={name} className="[&+&]:mt-[0.26rem]">
                <p className="border-l-[0.05rem] border-[#f5dec0] pl-[0.1rem] text-[0.23rem] leading-[0.28rem] font-medium text-[#f5dec0]">
                  {ts(name).replace(/^•\s*/, "")}
                </p>
                <p className="mt-[0.14rem] text-[0.18rem] leading-[0.26rem] font-normal text-[#e6e6e6]">
                  {t(desc)}
                </p>
              </li>
            ))}
          </ul>
        </PhonePicture>
        <div className="grid min-h-[1.79rem] grid-cols-3 gap-x-[0.2rem] bg-black px-[0.5rem] pt-[0.24rem] pb-[0.3rem] text-center text-[0.18rem] leading-[0.24rem] font-normal text-[#f6f6f6]">
          {["sec5.item7", "sec5.item8", "sec5.item9"].map((key) => (
            <p key={key}>{heading(key)}</p>
          ))}
        </div>
        {/* optics: the heading, then the four cards */}
        <div className="min-h-[3rem] px-[0.4rem] pt-[1.1rem] pb-[0.3rem] text-center">
          <h2 className={cn(H2, "text-[#533a2c]")}>{heading("sec6.title")}</h2>
        </div>
        <PhonePicture {...pic("p06", 3)}>
          {CARDS.map(({ top, line, name, at, row }) => (
            <div key={name}>
              <div
                className={cn(
                  "absolute w-[3.26rem] text-center text-white",
                  at,
                  row ? "top-[10.06rem]" : "top-[4.26rem]",
                )}
              >
                {top ? (
                  <p className="text-[0.22rem] leading-[0.34rem] font-medium">
                    {t(top)}
                  </p>
                ) : (
                  <p className="h-[0.34rem]" />
                )}
                <p className="mt-[0.06rem] text-[0.17rem] leading-[0.24rem] font-normal text-white/85">
                  {t(line)}
                </p>
              </div>
              <p
                className={cn(
                  "absolute w-[3.26rem] text-center text-[0.24rem] leading-[0.36rem] font-medium text-[#533a2c]",
                  at,
                  row ? "top-[11.21rem]" : "top-[5.38rem]",
                )}
              >
                {t(`m.card.${name}`)}
              </p>
            </div>
          ))}
        </PhonePicture>
        {/* the light arc: the heading and its two lines over the wall */}
        <PhonePicture {...pic("p07")}>
          <div className="absolute top-[1.3rem] inset-x-[0.5rem] text-center text-white">
            <h2 className={H2}>{heading("sec7.title")}</h2>
            <p className="mt-[0.28rem] text-[0.2rem] leading-[0.34rem] font-normal text-balance text-[#ececec]">
              <span className="block">{t("m.arc")}</span>
              <span className="block">{t("m.arc2")}</span>
            </p>
          </div>
        </PhonePicture>
        {/* 100 moods: the heading, then three rooms */}
        <div className="min-h-[1.9rem] px-[0.74rem] pt-[0.9rem] pb-[0.2rem]">
          <h2 className={cn(H2, "text-[#533a2c]")}>{t("m.hero.title2")}</h2>
        </div>
        {(
          [
            ["p08", 1.9, "bedroom", "top-[8.02rem] left-[0.91rem]"],
            ["p09", 0, "living", "top-[7.96rem] left-[0.93rem]"],
            ["p10", 0, "hall", "top-[7.98rem] left-[0.92rem]"],
          ] as const
        ).map(([name, top, room, at]) => (
          <PhonePicture key={name} {...pic(name, top)}>
            <p
              className={cn(
                "absolute text-[0.24rem] leading-[0.34rem] font-medium text-white",
                at,
              )}
            >
              {t(`m.room.${room}`)}
            </p>
          </PhonePicture>
        ))}
        {/* offline: the heading and its line, then the chip */}
        <div className="min-h-[4.8rem] px-[0.73rem] pt-[0.82rem] pb-[0.3rem]">
          <h2 className={cn(H2, "text-[#533a2c]")}>
            {heading("m.offline.title")}
          </h2>
          <p className="mt-[0.5rem] text-[0.22rem] leading-[0.42rem] font-normal text-[#8a7f77]">
            {t("m.offline.desc")}
          </p>
        </div>
        <PhonePicture {...pic("p11", 4.8)} />
        {/* the specifications */}
        <div className="bg-[#f1f1f1] px-[0.52rem] pt-[1.3rem] pb-[0.7rem]">
          <h2 className="px-[0.1rem] text-[0.46rem] leading-[0.66rem] font-medium text-[#111]">
            <span className="block">{t("m.spec.title")}</span>
            <span className="block">{t("m.spec.title2")}</span>
          </h2>
          <ul className="mt-[0.56rem] grid grid-cols-2 gap-x-[0.3rem] gap-y-[0.24rem] border-y border-[#d6d6d6] py-[0.4rem] text-[0.18rem] leading-[0.28rem] font-normal text-[#333]">
            {SPECS.map((key) => (
              <li key={key}>{t(`m.spec.${key}`)}</li>
            ))}
          </ul>
          <table className="mt-[0.56rem] w-full border-separate border-spacing-y-[0.1rem] text-center text-[0.17rem] leading-[0.26rem] font-normal text-[#555]">
            <thead>
              <tr className="bg-[#222] text-white">
                <th className="py-[0.12rem] font-medium">
                  {t("m.spec.model")}
                </th>
                <th className="py-[0.12rem] font-medium">{t("m.spec.size")}</th>
                <th className="py-[0.12rem] font-medium">{t("m.spec.beam")}</th>
              </tr>
            </thead>
            <tbody>
              {MODELS.map(({ name, variant, size, beam }) => (
                <tr key={`${name}-${variant}`} className="bg-white">
                  <td className="w-[2.6rem] px-[0.1rem] py-[0.14rem]">
                    {t(`m.spec.${name}`)}
                    <span className="block">({variant})</span>
                  </td>
                  <td className="py-[0.14rem] whitespace-nowrap">{size}</td>
                  <td className="py-[0.14rem]">{beam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* notes */}
        <div className="px-[0.38rem] pt-[0.6rem] pb-[0.5rem] text-[0.16rem] leading-[0.26rem] font-normal text-[#555]">
          <p>{t("sec8.title")}</p>
          <p>{lines(ts("sec8.text"))}</p>
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
