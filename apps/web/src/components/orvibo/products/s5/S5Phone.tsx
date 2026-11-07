import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import type { ReactNode } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. orvibo.com's six GIFs are films here (FILM, MP4 with a JPEG poster beside each); three
 * have their words drawn in again per language. Its 2nd and 11th pictures (a heading on black) are HTML, and its
 * last two (a shop banner and a lottery long closed) are left out. */
const PIC = "/orvibo/products/s5/phone";
const HEIGHT = {
  p05: 20.42,
  p06: 12.81,
  p07: 11.96,
  p13: 15.93,
  p14: 21.24,
  p15: 15.12,
} as const;
type Slice = keyof typeof HEIGHT;
/** The films' heights, and whether each has a copy per language (its words drawn in). */
const FILM = {
  p01: [14.58, true],
  p03: [13.5, false],
  p08: [8.92, true],
  p09: [8.44, false],
  p10: [8.44, true],
  p12: [6.96, false],
} as const;
type Film = keyof typeof FILM;

/** Headings, a little larger than the other phone pages' (orvibo.com sets these big). */
const H2 = "text-[0.46rem] leading-[0.66rem] font-semibold";
/** A heading in a gradient (`bg-[image:…]` classes) clipped to its words. */
const CLIP = "bg-clip-text text-transparent";
/** The specification strip's captions, one under each value (675lm | Ra>90 | UGR<9 | 3840HZ), in its column. */
const SPECS = [
  ["flux", "left-[0.4rem] w-[1.6rem]"],
  ["cri", "left-[2rem] w-[1.78rem]"],
  ["ugr", "left-[3.78rem] w-[1.55rem]"],
  ["flicker", "left-[5.33rem] w-[1.77rem]"],
] as const;

/** The S5 page on phones: orvibo.com's phone page, its pictures and films without their words and the words in
 * HTML where it draws them (but the hero's, the films' bubbles and the floor plan's tags, drawn in per language).
 * Headings grow downwards over their dark ground; lines over a card's foot grow upwards. */
export function S5Phone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
  /** A phone picture. */
  const pic = (name: Slice) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
  });
  /** A film, playing muted and looped while it is on screen, with words laid over it. */
  const film = (name: Film, children?: ReactNode) => {
    const [height, perLocale] = FILM[name];
    const path = perLocale
      ? `/orvibo/i18n/${locale}${PIC}/${name}`
      : `${PIC}/${name}`;
    return (
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: `7.5 / ${height}` }}
      >
        <MarketingVideo
          bare
          src={`${path}.mp4`}
          poster={`${path}.jpg`}
          className="absolute inset-0 size-full object-cover"
        />
        {children}
      </div>
    );
  };
  /** A heading's lines (`\n`) as blocks, each wrapping on its own (but not at a hyphen: "într‑o"). */
  const heading = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => (
        <span key={part} className="block text-balance">
          {part.replace(/(\p{L})-(\p{L})/gu, "$1\u2011$2")}
        </span>
      ));

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the name, its badge and the line are in the film */}
        {film(
          "p01",
          <h1 className="sr-only">
            {ts("sec1.title")} S5. {ts("sec1.desc")}
          </h1>,
        )}
        {/* the band after it */}
        <div className="px-[0.5rem] py-[1.7rem] text-center">
          <p
            className={cn(
              "text-[0.6rem] leading-[0.86rem] font-semibold",
              CLIP,
              "bg-[image:linear-gradient(90deg,#fed3a7,#feb3a1,#fe88a0)]",
            )}
          >
            {heading("m.band")}
          </p>
        </div>
        {/* Mix-Light: the spotlight brightening (film) under the slider (a picture laid over it) */}
        {film(
          "p03",
          <>
            <img
              src={img(`${PIC}/p04.webp`)}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full"
            />
            <h2
              className={cn(
                "absolute top-[1.4rem] left-[0.69rem] right-[0.5rem]",
                H2,
                CLIP,
                "bg-[image:linear-gradient(90deg,#bbcdff,#ffffff,#f7d49c)]",
              )}
            >
              {heading("sec4.title")}
            </h2>
            <p className="absolute top-[11.06rem] left-[0.89rem] text-[0.14rem] leading-[0.24rem] font-medium text-white">
              {t("m.cct")}
            </p>
          </>,
        )}
        {/* Matrix Group: the heading, the floor plan (its tags drawn in), the cards' lines */}
        <PhonePicture {...pic("p05")}>
          <h2
            className={cn(
              "absolute top-[1.3rem] left-[0.65rem] right-[0.5rem]",
              H2,
              CLIP,
              "bg-[image:linear-gradient(90deg,#b7e9fd,#ffffff,#fcd298)]",
            )}
          >
            {heading("sec5.title")}
          </h2>
          <p className="absolute top-[14.96rem] left-[0.81rem] w-[2.1rem] text-[0.18rem] leading-[0.25rem] font-normal text-[#e5d1c6]">
            {t("m.auto")}
          </p>
          <p className="absolute bottom-[1.17rem] left-[0.5rem] w-[4rem] text-center text-[0.24rem] leading-[0.32rem] font-medium text-[#fffce4]">
            {t("m.single")}
          </p>
          <p className="absolute bottom-[1.2rem] left-[4.99rem] w-[2rem] text-center text-[0.24rem] leading-[0.32rem] font-medium text-[#fffef3]">
            {t("m.group")}
          </p>
        </PhonePicture>
        {/* four ways: the heading, the cards' names, the voice request, the footnote */}
        <PhonePicture {...pic("p06")}>
          <h2
            className={cn(
              "absolute top-[1.3rem] left-[0.76rem] right-[0.5rem] text-[0.42rem] leading-[0.6rem] font-semibold",
              CLIP,
              "bg-[image:linear-gradient(90deg,#a9c8f4,#ffffff,#efb48e)]",
            )}
          >
            {heading("sec6.sec6_title")}
          </h2>
          <p className="absolute top-[4.33rem] left-[0.77rem] whitespace-nowrap text-[0.27rem] leading-[0.36rem] font-medium text-[#f4efe8]">
            {t("m.voice")}
          </p>
          <p className="absolute top-[5.17rem] left-[2.14rem] whitespace-nowrap rounded-[0.22rem] rounded-bl-[0.04rem] bg-[#d6d1cc]/60 px-[0.2rem] text-[0.2rem] leading-[0.44rem] font-normal text-[#1e1b17]">
            {t("m.ask")}
          </p>
          <div className="absolute top-[4.33rem] left-[4.95rem] w-[2.12rem] text-center text-[0.24rem] leading-[0.36rem] font-medium text-[#f4efe8]">
            <p>{t("m.sensor")}</p>
            <p>{t("m.sensorDesc")}</p>
          </div>
          <p className="absolute top-[8.7rem] left-[0.4rem] w-[3.14rem] text-center text-[0.24rem] leading-[0.34rem] font-medium text-[#f4efe8]">
            {t("m.touch")}
          </p>
          <p className="absolute top-[8.7rem] left-[3.9rem] w-[3.14rem] text-center text-[0.24rem] leading-[0.34rem] font-medium text-[#f4efe8]">
            {t("m.app")}
          </p>
          <p className="absolute top-[11.94rem] left-[0.42rem] right-[0.4rem] text-[0.16rem] leading-[0.22rem] font-normal text-[#8b8b8b]">
            {t("sec6.sec6_tips")}
          </p>
        </PhonePicture>
        {/* many forms */}
        <PhonePicture {...pic("p07")}>
          <h2
            className={cn(
              "absolute top-[1.4rem] left-[0.68rem] right-[0.6rem]",
              H2,
              CLIP,
              "bg-[image:linear-gradient(90deg,#fee5df,#ffffff,#dee0db)]",
            )}
          >
            {heading("sec7.title")}
          </h2>
        </PhonePicture>
        {/* the three rooms (films; the gallery's and the hall's bubbles drawn in) */}
        {film(
          "p08",
          <p className="absolute bottom-[0.45rem] left-[0.94rem] w-[3.6rem] text-[0.15rem] leading-[0.21rem] font-normal text-[#cac7c5]">
            {t("m.notice")}
          </p>,
        )}
        {film("p09")}
        {film("p10")}
        {/* the tilt: a heading on black, the dial (film), the angle's line */}
        <div className="px-[0.66rem] pt-[1.42rem] pb-[0.5rem]">
          <h2
            className={cn(
              H2,
              CLIP,
              "bg-[image:linear-gradient(90deg,#8f8f8f,#c6c6c6)]",
            )}
          >
            {heading("sec8.title")}
          </h2>
        </div>
        {film("p12")}
        {/* FERMAT: the angle's line above the scale, the heading over the lens */}
        <PhonePicture {...pic("p13")}>
          <p className="absolute top-[0.24rem] inset-x-[0.6rem] text-center text-[0.21rem] leading-[0.3rem] font-normal text-[#bcbcbc]">
            {t("sec8.info")}
          </p>
          <h2
            className={cn(
              "absolute top-[2.62rem] left-[0.69rem] right-[0.6rem]",
              H2,
              CLIP,
              "bg-[image:linear-gradient(90deg,#8f8f8f,#cecece)]",
            )}
          >
            {heading("sec9.title")}
          </h2>
        </PhonePicture>
        {/* specifications: the heading, the two beams' cards, the strip's captions */}
        <PhonePicture {...pic("p14")}>
          <h2
            className={cn(
              "absolute top-[1.5rem] left-[0.72rem] right-[0.6rem]",
              H2,
              CLIP,
              "bg-[image:linear-gradient(90deg,#fff7e7,#f7dfc3)]",
            )}
          >
            {heading("sec10.title")}
          </h2>
          {(
            [
              ["sec10.info", "sec10.info2", "left-[0.45rem]"],
              ["sec10.info3", "sec10.info4", "left-[3.9rem]"],
            ] as const
          ).map(([angle, use, at]) => (
            <div
              key={angle}
              className={cn(
                "absolute top-[16.98rem] w-[3.12rem] text-center",
                at,
              )}
            >
              <p className="text-[0.24rem] leading-[0.38rem] font-semibold text-[#552816]">
                {t(angle)}
              </p>
              <p className="mt-[0.04rem] text-[0.17rem] leading-[0.24rem] font-normal text-[#4a2916]">
                {t(use)}
              </p>
            </div>
          ))}
          {SPECS.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute top-[20.16rem] px-[0.05rem] text-center text-[0.15rem] leading-[0.21rem] font-normal text-[#cdb7a2]",
                at,
              )}
            >
              {t(`m.spec.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {/* automotive craft: the heading, the heat sink's two callouts (over their lines), the warranty badge */}
        <PhonePicture {...pic("p15")}>
          <h2
            className={cn(
              "absolute top-[1.5rem] left-[0.66rem] right-[0.6rem]",
              H2,
              CLIP,
              "bg-[image:linear-gradient(90deg,#cdb8cc,#e0c4c5,#f2d2c0)]",
            )}
          >
            {heading("sec11.title")}
          </h2>
          {(
            [
              ["m.fins", "m.finsDesc", "bottom-[9.62rem]"],
              ["m.coat", "m.coatDesc", "bottom-[6.99rem]"],
            ] as const
          ).map(([name, desc, at]) => (
            <div
              key={name}
              className={cn(
                "absolute left-[0.97rem] w-[3rem] text-[0.2rem] leading-[0.28rem] font-normal text-[#9a9a9a]",
                at,
              )}
            >
              <p>{t(name)}</p>
              <p className="mt-[0.2rem]">{t(desc)}</p>
            </div>
          ))}
          <p className="absolute top-[10.44rem] left-[0.8rem] w-[2.42rem] text-center text-[0.15rem] leading-[0.27rem] font-normal text-[#d4c8b2]">
            {t("m.vip")}
          </p>
          <div className="absolute top-[13.24rem] left-[0.8rem] w-[2.42rem] text-center text-[0.15rem] leading-[0.33rem] font-normal text-[#a99f8b]">
            <p>{t("m.warranty")}</p>
            <p>{t("m.warranty2")}</p>
          </div>
        </PhonePicture>
      </div>
    </div>
  );
}
