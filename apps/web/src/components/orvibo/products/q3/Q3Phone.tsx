import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import type { ReactNode } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. orvibo.com's 16th picture (sec19) is missing on its own server, so neither page shows
 * anything there; the names skip p16. */
const PIC = "/orvibo/products/q3/phone";
const HEIGHT = {
  p01: 14.12,
  p02: 20.82,
  p03: 12.67,
  p04: 14.41,
  p05: 12.95,
  p06: 13.86,
  p07: 16.34,
  p08: 16.79,
  p09: 15.19,
  p10: 13.35,
  p11: 11,
  p12: 9.06,
  p13: 9.1,
  p14: 9.82,
  p15: 12.03,
  p17: 10.15,
  p18: 17.31,
} as const;
type Slice = keyof typeof HEIGHT;

const H2 = "text-[0.44rem] leading-[0.62rem] font-semibold";
/** A heading in a gradient (`bg-[image:…]` classes) clipped to its words. */
const CLIP = "bg-clip-text text-transparent";
/** The four groups' cards: their tag's middle (x) and top, in two rows of two. */
const GROUPS = [
  ["parents", "left-[2.05rem]", "top-[6.28rem]"],
  ["night", "left-[5.45rem]", "top-[6.28rem]"],
  ["students", "left-[2.05rem]", "top-[10.4rem]"],
  ["seniors", "left-[5.45rem]", "top-[10.4rem]"],
] as const;
/** The spectrum chart's legend, each word beside its swatch. */
const LEGEND = [
  ["trueShort", "left-[1.4rem]"],
  ["fakeShort", "left-[2.82rem]"],
  ["sun", "left-[4.22rem]"],
] as const;
/** The RG0 table's group names (the groups and ranges stay in the picture), row by row. */
const RISKS = [
  ["exempt", "top-[13.64rem]"],
  ["low", "top-[14.14rem]"],
  ["moderate", "top-[14.68rem]"],
] as const;
/** The rooms after "where it fits": picture and where its name stands. */
const ROOMS = [
  ["p12", "hall", "top-[8.13rem]"],
  ["p13", "bedroom", "top-[8.16rem]"],
  ["p14", "dining", "top-[8.15rem]"],
] as const;

/** The Q3 page on phones: orvibo.com's phone page, its pictures without their words and the words in HTML where it
 * draws them, the pills round some of them too. Headings grow downwards over their flat or dark ground (Romanian and
 * English run longer than Chinese). */
export function Q3Phone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
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
  /** A footnote centred near a picture's foot. */
  const note = (words: ReactNode, at: string, color: string) => (
    <p
      className={cn(
        "absolute inset-x-[0.5rem] text-center text-[0.14rem] leading-[0.21rem] font-normal",
        at,
        color,
      )}
    >
      {words}
    </p>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the name and its badge, the two lines */}
        <PhonePicture {...pic("p01")}>
          <div className="absolute top-[1.9rem] inset-x-[0.4rem] text-center text-[#3f2d18]">
            <h1 className="text-[0.3rem] leading-[0.46rem] font-medium">
              {t("m.hero.name")}
              <span className="ml-[0.1rem] inline-block rounded-[0.06rem] bg-[#7d6c55] px-[0.06rem] align-[0.03rem] text-[0.2rem] leading-[0.3rem] text-[#efe6d8]">
                Q3
              </span>
            </h1>
            <p className="mt-[0.3rem] text-[0.62rem] leading-[0.9rem] font-semibold">
              {heading("m.hero.title")}
            </p>
          </div>
        </PhonePicture>
        {/* design: the heading over the wall, the award and its lines over the rock, the logos stay */}
        <PhonePicture {...pic("p02")}>
          <h2
            className={cn(
              "absolute top-[1.66rem] inset-x-[0.5rem] text-center text-[#5f472a]",
              H2,
            )}
          >
            {heading("sec2.title")}
          </h2>
          <div className="absolute top-[16.62rem] left-[0.6rem] right-[0.6rem]">
            <p className="text-[0.26rem] leading-[0.4rem] font-medium text-[#f2bc7a]">
              {t("sec2.info")}
            </p>
            <p className="mt-[0.2rem] text-[0.18rem] leading-[0.29rem] font-normal text-[#a78052]">
              {ts("sec2.info2").replace("\n", " ")}
            </p>
          </div>
        </PhonePicture>
        {/* tired eyes: the heading, the four groups' tags and lines */}
        <PhonePicture {...pic("p03")}>
          <h2
            className={cn(
              "absolute top-[1.62rem] inset-x-[0.6rem] text-center",
              H2,
              CLIP,
              "bg-[image:linear-gradient(180deg,#9b7650,#bc976e)]",
            )}
          >
            {t("sec3.title")}
          </h2>
          {GROUPS.map(([key, x, y]) => (
            <div
              key={key}
              className={cn(
                "absolute w-[3rem] -translate-x-1/2 text-center",
                x,
                y,
              )}
            >
              <p className="inline-block whitespace-nowrap rounded-full bg-[#9e7b57] px-[0.18rem] text-[0.2rem] leading-[0.42rem] font-medium text-white">
                {t(`m.group.${key}`)}
              </p>
              <p className="mt-[0.08rem] text-[0.19rem] leading-[0.29rem] font-normal text-[#2d2d2b]">
                {heading(`m.group.${key}Desc`)}
              </p>
            </div>
          ))}
        </PhonePicture>
        {/* SUNNYLIKE (stays in the picture): the heading and its lines, the chart's tags and legend */}
        <PhonePicture {...pic("p04")}>
          <div className="absolute top-[2.58rem] left-[0.44rem] right-[0.5rem]">
            <h2
              className={cn(
                "text-[0.56rem] leading-[0.78rem] font-semibold text-balance",
                CLIP,
                "bg-[image:linear-gradient(180deg,#e9b041,#d68f1c)]",
              )}
            >
              {t("m.sunny.title")}
            </h2>
            <p className="mt-[0.3rem] text-[0.3rem] leading-[0.44rem] font-medium text-[#a8781d]">
              {t("m.sunny.sub")}
            </p>
            <p className="mt-[0.3rem] text-[0.19rem] leading-[0.33rem] font-normal text-[#a87d33]">
              {t("m.sunny.desc")}
            </p>
          </div>
          <p className="absolute top-[9.11rem] left-[2.76rem] whitespace-nowrap rounded-full bg-black px-[0.12rem] text-[0.15rem] leading-[0.31rem] font-medium text-white">
            {t("m.sunny.fake")}
          </p>
          <p className="absolute top-[9.65rem] right-[0.63rem] whitespace-nowrap rounded-full bg-white px-[0.12rem] text-[0.15rem] leading-[0.31rem] font-medium text-black">
            {t("m.sunny.true")}
          </p>
          {LEGEND.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute top-[11.86rem] whitespace-nowrap text-[0.13rem] leading-[0.2rem] font-normal text-[#bfb9b1]",
                at,
              )}
            >
              {t(`m.sunny.${key}`)}
            </p>
          ))}
          {note(t("sec6.tips"), "top-[12.62rem]", "text-[#6b6142]")}
        </PhonePicture>
        {/* SUNNYRISE (stays in the picture): the heading and its line, the badge and the chart's line */}
        <PhonePicture {...pic("p05")}>
          <div className="absolute top-[1.94rem] left-[0.4rem] right-[0.5rem]">
            <h2 className="text-[0.56rem] leading-[0.76rem] font-semibold text-balance text-[#f6ead0]">
              {t("m.rise.title")}
            </h2>
            <p className="mt-[0.26rem] text-[0.28rem] leading-[0.42rem] font-normal text-[#fffee9]">
              {t("m.rise.sub")}
            </p>
          </div>
          <p className="absolute top-[5.34rem] left-[0.72rem] whitespace-nowrap rounded-full bg-[image:linear-gradient(90deg,#c4a468,#ead3a0)] px-[0.18rem] text-[0.2rem] leading-[0.4rem] font-medium text-[#1d140a]">
            Q3 {t("m.hero.name")}
          </p>
          <p className="absolute top-[11.3rem] left-[0.75rem] right-[0.5rem] text-[0.26rem] leading-[0.4rem] font-medium text-white">
            {t("m.rise.chart")}
          </p>
        </PhonePicture>
        {/* red light: the heading and its lines over the cream, the references under the photo */}
        <PhonePicture {...pic("p06")}>
          <div className="absolute top-[1.74rem] left-[0.48rem] right-[0.48rem]">
            <h2
              className={cn(
                "text-[0.6rem] leading-[0.82rem] font-semibold",
                CLIP,
                "bg-[image:linear-gradient(90deg,#bf863e,#d9a45e)]",
              )}
            >
              {t("sec4.left")}
            </h2>
            <p className="mt-[0.2rem] text-[0.3rem] leading-[0.44rem] font-medium text-[#c28c43]">
              {t("sec4.left2")}
            </p>
            <p className="mt-[0.24rem] text-[0.19rem] leading-[0.32rem] font-normal text-[#c99858]">
              {t("sec4.left3")}
            </p>
          </div>
          {note(ts("sec4.tips"), "top-[12.66rem]", "text-[#a89a86]")}
        </PhonePicture>
        {/* RG0: the heading and its lines over the cream, the table and its note */}
        <PhonePicture {...pic("p07")}>
          <div className="absolute top-[1.5rem] left-[0.62rem] right-[0.5rem]">
            <h2
              className={cn(
                "text-[0.62rem] leading-[0.86rem] font-semibold text-balance",
                CLIP,
                "bg-[image:linear-gradient(180deg,#927049,#a8865e)]",
              )}
            >
              {/* (a hyphen that does not break: "risk-free" stays whole) */}
              {ts("sec5.left").replace("-", "\u2011")}
            </h2>
            <p className="mt-[0.3rem] text-[0.3rem] leading-[0.44rem] font-medium text-[#937044]">
              {t("sec5.left2")}
            </p>
            <p className="mt-[0.2rem] text-[0.19rem] leading-[0.32rem] font-normal text-[#a48560]">
              {t("sec5.left3")}
            </p>
          </div>
          <div className="absolute top-[12.98rem] left-[0.55rem] right-[0.5rem] grid grid-cols-[1.8fr_2fr_2.67fr] text-center text-[0.19rem] leading-[0.26rem] font-medium text-[#7d5a34]">
            <p>{t("m.rg.level")}</p>
            <p>{t("m.rg.name")}</p>
            <p>{t("m.rg.tmax")}</p>
          </div>
          {RISKS.map(([name, at]) => (
            <p
              key={name}
              className={cn(
                "absolute left-[3.34rem] -translate-x-1/2 whitespace-nowrap text-[0.19rem] leading-[0.3rem] font-normal text-[#967a5b]",
                at,
              )}
            >
              {t(`m.rg.${name}`)}
            </p>
          ))}
          {note(`*${ts("sec5.tips")}`, "top-[15.58rem]", "text-[#b39a7b]")}
        </PhonePicture>
        {/* Ra98 (stays in the picture): the heading and its lines, the photo's tags and the chart's names */}
        <PhonePicture {...pic("p08")}>
          <div className="absolute top-[3.12rem] left-[0.54rem] right-[0.5rem]">
            <h2 className="text-[0.62rem] leading-[0.84rem] font-semibold text-[#fbf4dd]">
              {t("m.ra.title")}
            </h2>
            <p className="mt-[0.2rem] text-[0.3rem] leading-[0.42rem] font-medium text-[#fff7d7]">
              {t("sec6.info2")}
            </p>
            <p className="mt-[0.2rem] text-[0.19rem] leading-[0.32rem] font-normal text-[#f0dec4]">
              {ts("sec6.info3").replace("\n", " ")}
            </p>
          </div>
          <p className="absolute top-[11.76rem] left-[0.48rem] whitespace-nowrap rounded-full bg-[#3a2a1c]/60 px-[0.14rem] text-[0.2rem] leading-[0.38rem] font-normal text-[#faf8f4]">
            {t("m.ra.good")}
          </p>
          <p className="absolute top-[11.76rem] right-[0.56rem] whitespace-nowrap rounded-full bg-[#3a2a1c]/60 px-[0.14rem] text-[0.2rem] leading-[0.38rem] font-normal text-[#faf8f4]">
            {t("m.ra.dull")}
          </p>
          {(
            [
              ["goodDesc", "left-[0.6rem]"],
              ["dullDesc", "left-[3.85rem]"],
            ] as const
          ).map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute top-[12.5rem] w-[3.05rem] text-center text-[0.19rem] leading-[0.28rem] font-normal text-[#f5f1ee]",
                at,
              )}
            >
              {t(`m.ra.${key}`)}
            </p>
          ))}
          {note(t("sec6.tips"), "top-[15.9rem]", "text-[#8b7055]")}
        </PhonePicture>
        {/* flicker: the heading and its lines over the wall */}
        <PhonePicture {...pic("p09")}>
          <div className="absolute top-[1.3rem] left-[0.4rem] right-[0.5rem]">
            <h2 className="text-[0.62rem] leading-[0.86rem] font-semibold text-[#f9efd1]">
              {heading("sec8.left")}
            </h2>
            <p className="mt-[0.3rem] text-[0.32rem] leading-[0.46rem] font-medium text-white">
              {t("sec8.left2")}
            </p>
            <p className="mt-[0.2rem] text-[0.19rem] leading-[0.32rem] font-normal text-[#f3e6cf]">
              {t("sec8.left3")}
            </p>
          </div>
        </PhonePicture>
        {/* arcs of light: the heading and its lines above the wall */}
        <PhonePicture {...pic("p10")}>
          <div className="absolute top-[1.42rem] inset-x-[0.6rem]">
            <h2 className={cn("text-center text-balance text-[#fde0a2]", H2)}>
              {t("sec9.info")}
            </h2>
            <p className="mt-[0.2rem] text-[0.19rem] leading-[0.32rem] font-normal text-[#efdaac]">
              {ts("sec9.info2").replace("\n", " ")}
            </p>
          </div>
        </PhonePicture>
        {/* rooms: the heading, then each room with its name */}
        <PhonePicture {...pic("p11")}>
          <h2
            className={cn(
              "absolute top-[0.95rem] inset-x-[0.5rem] text-center text-[#f0cc9c]",
              H2,
            )}
          >
            {t("m.rooms")}
          </h2>
          <p className="absolute top-[10.02rem] left-[0.91rem] text-[0.3rem] leading-[0.42rem] font-normal text-white">
            {t("m.room.living")}
          </p>
        </PhonePicture>
        {ROOMS.map(([name, room, at]) => (
          <PhonePicture key={name} {...pic(name)}>
            <p
              className={cn(
                "absolute left-[0.89rem] text-[0.3rem] leading-[0.42rem] font-normal text-white",
                at,
              )}
            >
              {t(`m.room.${room}`)}
            </p>
          </PhonePicture>
        ))}
        {/* three color temperatures: the heading, each beam's name (the middle one along its beam) */}
        <PhonePicture {...pic("p15")}>
          <h2
            className={cn(
              "absolute top-[1.42rem] inset-x-[0.6rem] text-center text-balance",
              H2,
              CLIP,
              "bg-[image:linear-gradient(180deg,#ffdc9c,#fbd194)]",
            )}
          >
            {t("sec10.title")}
          </h2>
          <p className="absolute top-[6.26rem] left-[1.68rem] -translate-x-1/2 whitespace-nowrap text-[0.2rem] leading-[0.3rem] font-normal text-[#f7f3f1]">
            {t("m.cct.yellow")}
          </p>
          <p className="absolute top-[6.85rem] left-[4.22rem] -translate-x-1/2 rotate-[50deg] whitespace-nowrap text-[0.2rem] leading-[0.3rem] font-normal text-[#e4d6c0]">
            {t("m.cct.warm")}
          </p>
          <p className="absolute top-[9.45rem] left-[4.52rem] -translate-x-1/2 whitespace-nowrap text-[0.2rem] leading-[0.3rem] font-normal text-[#f0efef]">
            {t("m.cct.neutral")}
          </p>
        </PhonePicture>
        {/* 25° (stays in the picture): the heading and the note */}
        <PhonePicture {...pic("p17")}>
          <h2
            className={cn(
              "absolute top-[1.46rem] inset-x-[0.5rem] text-center",
              H2,
              CLIP,
              "bg-[image:linear-gradient(180deg,#ffd99a,#fed497)]",
            )}
          >
            {heading("m.tilt")}
          </h2>
          <p className="absolute top-[9.18rem] left-[0.64rem] right-[0.5rem] text-[0.17rem] leading-[0.26rem] font-normal text-[#a3835f]">
            {t("m.tiltNote")}
          </p>
        </PhonePicture>
        {/* craft: the heading, a line on each card */}
        <PhonePicture {...pic("p18")}>
          <h2
            className={cn(
              "absolute top-[1.32rem] inset-x-[0.6rem] text-center text-balance",
              H2,
              CLIP,
              "bg-[image:linear-gradient(180deg,#f1cc9d,#dab58a)]",
            )}
          >
            {t("sec12.title")}
          </h2>
          <p className="absolute top-[8.5rem] left-[0.8rem] right-[0.8rem] text-[0.2rem] leading-[0.3rem] font-normal text-[#ededed]">
            {t("m.coat")}
          </p>
          <p className="absolute top-[15.36rem] left-[0.8rem] right-[0.8rem] text-[0.2rem] leading-[0.3rem] font-normal text-[#f4f1ef]">
            {t("m.fins")}
          </p>
        </PhonePicture>
      </div>
    </div>
  );
}
