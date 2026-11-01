import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { ProductSlideshow } from "@/components/orvibo/product/ProductSlideshow";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import type { ReactNode } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. The headings and lines on the page's dark ground are HTML blocks between parts of the
 * pictures; p03-p04 and p08-p11 are orvibo.com's two swipers (the second cut from one row of five cards, so a
 * card's words are set in every slide it reaches); p06's touch panel and app screens are translated per language
 * (`img()`). */
const PIC = "/orvibo/products/daofeng/phone";
const HEIGHT = {
  p01: 13.24,
  p02: 18.01,
  p03: 4.69,
  p04: 4.69,
  p05: 15.53,
  p06: 12.67,
  p07: 20.71,
  p08: 8.2,
  p09: 8.2,
  p10: 8.2,
  p11: 8.2,
  p12: 14.45,
  p13: 11.19,
  p14: 20.17,
  p15: 27.17,
} as const;
type Slice = keyof typeof HEIGHT;

const H2 = "text-[0.42rem] leading-[0.6rem] font-semibold text-white";
/** The large headings in orvibo.com's bronze, its gradient spanning the words. */
const BRONZE =
  "w-fit bg-[image:linear-gradient(90deg,#957d72,#e8dad2)] bg-clip-text text-[0.46rem] leading-[0.66rem] font-semibold text-transparent";
const DESC = "text-[0.25rem] leading-[0.42rem] font-normal text-[#e3e4e6]";
/** The row of optics cards: where each starts and ends along the four slides (7.5 rem each). */
const OPTICS = [
  ["m.optic1", 0.3, 5.97],
  ["m.optic2", 6.24, 11.9],
  ["m.optic3", 12.17, 17.83],
  ["m.optic4", 18.1, 23.34],
  ["m.optic5", 23.61, 29.23],
] as const;
const OPTIC_SLIDES = ["p08", "p09", "p10", "p11"] as const;
/** The six group control tiles: their middle and the top of their words. */
const NET = [
  ["m.net1", "left-[0.65rem]", "top-[4.3rem]"],
  ["m.net2", "left-[3.8rem]", "top-[4.3rem]"],
  ["m.net3", "left-[0.65rem]", "top-[6.3rem]"],
  ["m.net4", "left-[3.8rem]", "top-[6.3rem]"],
  ["m.net5", "left-[0.65rem]", "top-[8.75rem]"],
  ["m.net6", "left-[3.8rem]", "top-[8.75rem]"],
] as const;
/** The five lights' names: right-aligned at the foot of their card (the part starts at 2.4 rem). */
const LAMPS = [
  ["pendant", "right-[0.67rem] w-[2.6rem] top-[3.68rem]"],
  ["grille", "right-[3.57rem] w-[3.1rem] top-[7.51rem]"],
  ["flood", "right-[0.67rem] w-[2.6rem] top-[7.5rem]"],
  ["folding", "right-[0.66rem] w-[5rem] top-[11.16rem]"],
  ["spot", "right-[0.62rem] w-[5rem] top-[14.87rem]"],
] as const;
/** The connectors' names, at their card's foot (the part starts at 2.9 rem). */
const CONNECTORS = [
  ["t", "left-[5.31rem] top-[20.2rem]"],
  ["i", "left-[0.81rem] top-[23.04rem]"],
  ["flat", "left-[2.77rem] top-[23.12rem]"],
  ["corner", "left-[5.08rem] top-[23.12rem]"],
] as const;

/** The Blade track lights page on phones: orvibo.com's phone page, its pictures without their words and the words
 * in HTML (but the MixPad tiles' screens, pasted per language). Headings and lines on the dark ground grow
 * downwards between the pictures' parts. */
export function DaofengPhone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
  /** A phone picture, or the part of it from `top` to `bottom` (rem). */
  const pic = (name: Slice, top = 0, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, top, 7.5, bottom] as const,
  });
  /** Lines (`\n`) as blocks, each wrapping on its own (but not at a hyphen). */
  const lines = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => (
        <span key={part} className="block text-balance">
          {part.replace(/(\p{L})-(\p{L})/gu, "$1‑$2")}
        </span>
      ));
  /** orvibo.com's swipe hint under a swiper. */
  const swipe = (
    <p className="text-center text-[0.22rem] leading-[0.32rem] font-normal text-white">
      ‹‹&nbsp;&nbsp;{t("m.swipe")}
    </p>
  );
  /** A heading and its lines on the dark ground. */
  const band = (className: string, children: ReactNode) => (
    <div className={cn("px-[0.58rem]", className)}>{children}</div>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-[#151515]">
        {/* hero: the name and the line over the room, the word beside ORVIBO on the badge */}
        <PhonePicture {...pic("p01")}>
          <span className="absolute top-[1.1rem] left-[6.43rem] flex h-[0.21rem] w-[0.64rem] items-center justify-center text-[0.12rem] leading-none font-medium text-[#d6d6d4]">
            {t("m.badge")}
          </span>
          <div className="absolute top-[1.84rem] inset-x-[0.4rem] flex flex-col items-center text-center">
            <h1 className="bg-[image:linear-gradient(180deg,#d8c8bd,#8f786d)] bg-clip-text text-[0.66rem] leading-[0.96rem] font-semibold text-transparent">
              {t("m.name")}
            </h1>
            <p className="mt-[0.08rem] bg-[image:linear-gradient(180deg,#d2c3b9,#a08d82)] bg-clip-text text-[0.3rem] leading-[0.44rem] font-medium tracking-[0.02em] text-balance text-transparent">
              {t("daofeng_banner.banner_desc")}
            </p>
          </div>
        </PhonePicture>
        {/* seamless lines: the heading, the room, then thinner than a phone */}
        {band(
          "pt-[1.22rem] pb-[0.5rem]",
          <h2 className={BRONZE}>{lines("sec2.info")}</h2>,
        )}
        <PhonePicture {...pic("p02", 3.6, 14)} />
        {band(
          "pt-[0.72rem] pb-[0.42rem]",
          <>
            <h2 className={BRONZE}>{lines("sec3.title")}</h2>
            <p className={cn(DESC, "mt-[0.4rem]")}>{t("sec3.desc")}</p>
          </>,
        )}
        <ProductSlideshow
          autoplay={false}
          pagination="none"
          slides={(["p03", "p04"] as const).map((name) => ({
            key: name,
            content: <PhonePicture {...pic(name)} />,
          }))}
        />
        {/* SPWM: the swipe hint, the heading and its lines, the bedroom with its app card */}
        {band(
          "pt-[0.14rem] pb-[0.42rem]",
          <>
            {swipe}
            <h2 className={cn(BRONZE, "mt-[1.12rem]")}>
              {lines("sec3.title2")}
            </h2>
            <p className={cn(DESC, "mt-[0.5rem]")}>{t("sec3.desc2")}</p>
          </>,
        )}
        <PhonePicture {...pic("p05", 5.4)}>
          <p className="absolute top-[5.85rem] left-[1.23rem] text-[0.15rem] leading-[0.2rem] font-normal text-[#fdf6e9]">
            {t("m.card")}
          </p>
          <p className="absolute top-[6.07rem] left-[1.24rem] text-[0.11rem] leading-[0.16rem] font-normal text-[#fdf6e9]">
            {t("m.cardOn")}
          </p>
        </PhonePicture>
        {/* MixPad dimming: the heading, the four tiles' names and lines, the voice request */}
        {band(
          "pt-[0.88rem] pb-[0.3rem]",
          <h2 className={H2}>{lines("sec5.title")}</h2>,
        )}
        <PhonePicture {...pic("p06", 2.5)}>
          {(
            [
              ["keys", "top-[0.68rem] left-[0.65rem] w-[2.4rem]"],
              ["touch", "top-[0.68rem] left-[4.17rem] w-[2.5rem]"],
              ["voice", "top-[5.28rem] left-[0.65rem] w-[2.4rem]"],
              [
                "app",
                "top-[9.6rem] left-[4.17rem] w-[1.6rem] -translate-y-full [text-shadow:0_0_0.08rem_rgba(0,0,0,0.5)]",
              ],
            ] as const
          ).map(([key, at]) => (
            <div key={key} className={cn("absolute", at)}>
              <h3 className="text-[0.27rem] leading-[0.38rem] font-semibold text-white">
                {t(`m.${key}`)}
              </h3>
              <p className="text-[0.23rem] leading-[0.34rem] font-normal text-white">
                {t(`m.${key}Desc`)}
              </p>
            </div>
          ))}
          <p className="absolute top-[6.65rem] left-[0.81rem] rounded-full bg-white/20 px-[0.2rem] text-[0.15rem] leading-[0.58rem] font-normal whitespace-nowrap text-white">
            {t("m.ask")}
          </p>
        </PhonePicture>
        {/* the engineers: the heading and the figures, the drawing with its story, then eye care */}
        {band(
          "pt-[0.98rem] pb-[0.3rem]",
          <>
            <h2 className={H2}>{lines("sec6.title")}</h2>
            <p className={cn(DESC, "mt-[0.5rem] text-[#e0e1e3]")}>
              {lines("sec6.desc")}
            </p>
          </>,
        )}
        <PhonePicture {...pic("p07", 4.8, 13.4)} />
        <div className="mx-[0.38rem] rounded-b-[0.12rem] bg-[image:linear-gradient(180deg,#e8ecf1,#eef2f5)] px-[0.71rem] pt-[0.2rem] pb-[0.66rem]">
          <p className="text-[0.23rem] leading-[0.42rem] font-normal text-[#030508]">
            {t("sec6.desc2")}
          </p>
        </div>
        {band(
          "pt-[1.0rem] pb-[0.2rem]",
          <>
            <h2 className={H2}>{lines("sec7.title")}</h2>
            <p className={cn(DESC, "mt-[0.5rem] text-[#fdfdfd]")}>
              {t("sec7.desc")}
            </p>
          </>,
        )}
        {/* the five optics cards, as orvibo.com's four slides */}
        <ProductSlideshow
          autoplay={false}
          pagination="none"
          slides={OPTIC_SLIDES.map((name, i) => ({
            key: name,
            content: (
              <PhonePicture {...pic(name)}>
                {OPTICS.filter(
                  ([, from, to]) => to > 7.5 * i && from < 7.5 * (i + 1),
                ).map(([key, from, to]) => (
                  <div
                    key={key}
                    className="absolute top-[5.96rem] flex h-[1.7rem] flex-col items-center justify-center px-[0.2rem] text-center"
                    style={{
                      left: `${from - 7.5 * i}rem`,
                      width: `${to - from}rem`,
                    }}
                  >
                    <p className="text-[0.26rem] leading-[0.42rem] font-medium text-black">
                      {lines(key)}
                    </p>
                    {key === "m.optic1" && (
                      <p className="mt-[0.06rem] text-[0.19rem] leading-[0.28rem] font-normal text-black">
                        {t("m.optic1Note")}
                      </p>
                    )}
                  </div>
                ))}
                {i === 2 && (
                  <>
                    <p className="absolute top-[5.3rem] left-[3.88rem] w-[1.3rem] text-center text-[0.19rem] leading-[0.3rem] font-normal text-[#c9cacd]">
                      {t("m.optic4High")}
                    </p>
                    <p className="absolute top-[5.3rem] left-[6.73rem] w-[1.3rem] text-center text-[0.19rem] leading-[0.3rem] font-normal text-[#858586]">
                      {t("m.optic4Low")}
                    </p>
                  </>
                )}
                {i === 3 && (
                  <p className="absolute top-[5.3rem] -left-[0.77rem] w-[1.3rem] text-center text-[0.19rem] leading-[0.3rem] font-normal text-[#858586]">
                    {t("m.optic4Low")}
                  </p>
                )}
              </PhonePicture>
            ),
          }))}
        />
        {/* the safety lock: the swipe hint, the tag line, the heading and its lines, the lock */}
        {band(
          "pt-[0.06rem] pb-[0.3rem]",
          <>
            {swipe}
            <p className="mt-[0.9rem] w-fit bg-[image:linear-gradient(90deg,#948882,#e4ddd8)] bg-clip-text text-[0.27rem] leading-[0.4rem] font-medium text-balance text-transparent">
              {t("m.lockTag")}
            </p>
            <h2 className={cn(H2, "mt-[0.3rem]")}>{lines("sec8.title")}</h2>
            <p className={cn(DESC, "mt-[0.36rem]")}>{t("sec8.desc")}</p>
          </>,
        )}
        <PhonePicture {...pic("p12", 4.3)} />
        {/* 1,000 lights: the heading, the six tiles' lines */}
        <PhonePicture {...pic("p13")}>
          <h2 className={cn(BRONZE, "absolute top-[1.2rem] left-[0.58rem]")}>
            {lines("sec9.title")}
          </h2>
          {NET.map(([key, x, y]) => (
            <p
              key={key}
              className={cn(
                "absolute w-[3.05rem] text-center text-[0.2rem] leading-[0.32rem] font-normal text-white",
                x,
                y,
              )}
            >
              {lines(key)}
            </p>
          ))}
        </PhonePicture>
        {/* the five lights: the heading, their names, the note */}
        {band(
          "bg-black pt-[0.42rem] pb-[0.36rem]",
          <h2 className={BRONZE}>{lines("m.range")}</h2>,
        )}
        <PhonePicture {...pic("p14", 2.4)}>
          {LAMPS.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute -translate-y-full text-right text-[0.22rem] leading-[0.3rem] font-medium text-balance text-white",
                at,
              )}
            >
              {t(`m.lamp.${key}`)}
            </p>
          ))}
          <p className="absolute top-[15.74rem] inset-x-[0.42rem] text-[0.2rem] leading-[0.4rem] font-normal text-[#949494]">
            {t("sec12.desc")}
          </p>
        </PhonePicture>
        {/* the accessories: the heading, the power supply's and the track's specs, the connectors */}
        {band(
          "pt-[0.5rem] pb-[0.3rem]",
          <h2 className={BRONZE}>{lines("sec13.title")}</h2>,
        )}
        <PhonePicture {...pic("p15", 2.9)}>
          <div className="absolute top-[10.42rem] left-[4.53rem] w-[2.55rem] text-[0.21rem] leading-[0.42rem] font-normal text-white">
            <h3 className="text-[0.26rem] font-semibold">{t("m.power")}</h3>
            <p>{t("m.powerDesc")}</p>
            <p>{t("m.powerWatts")}</p>
            <p>{t("m.powerVolts")}</p>
          </div>
          <div className="absolute top-[17.68rem] left-[0.82rem] w-[3.2rem] text-[0.22rem] leading-[0.43rem] font-normal text-white">
            <h3 className="text-[0.26rem] font-semibold">{t("m.track")}</h3>
            <p>{t("m.trackSize")}</p>
            <p>{t("m.trackDepth")}</p>
          </div>
          <p className="absolute top-[18.52rem] right-[0.83rem] w-[2.6rem] text-right text-[0.22rem] leading-[0.3rem] font-normal text-white">
            {t("m.trackDesc")}
          </p>
          {CONNECTORS.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute text-[0.2rem] leading-[0.3rem] font-normal text-white",
                at,
              )}
            >
              {t(`m.conn.${key}`)}
            </p>
          ))}
        </PhonePicture>
      </div>
    </div>
  );
}
