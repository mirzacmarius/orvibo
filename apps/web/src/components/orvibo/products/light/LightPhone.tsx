import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { ProductSlideshow } from "@/components/orvibo/product/ProductSlideshow";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import type { ReactNode } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. orvibo.com's seven GIFs are films here (FILM, MP4 with a JPEG poster beside each); four
 * have their words drawn in again per language. Its five headings on black are HTML; p16 to p18 are the floor
 * lamp's slides; p23's app screen, touch panel and switch are translated per language (`img()`). */
const PIC = "/orvibo/products/light/phone";
const HEIGHT = {
  p01: 14.76,
  p08: 12.93,
  p12: 13.73,
  p14: 12.93,
  p15: 13.9,
  p16: 11.49,
  p17: 11.49,
  p18: 11.49,
  p20: 12.93,
  p21: 11.28,
  p23: 18.96,
  p24: 26.22,
} as const;
type Slice = keyof typeof HEIGHT;
/** The films' heights, and whether each has a copy per language (its words drawn in). */
const FILM = {
  p02: [13.34, true],
  p04: [10, true],
  p05: [10, true],
  p06: [10, true],
  p09: [17.32, false],
  p11: [5.5, false],
  p22: [12.52, false],
} as const;
type Film = keyof typeof FILM;

const H2 = "text-[0.46rem] leading-[0.66rem] font-semibold";
/** A heading in a gradient (`bg-[image:…]` classes) clipped to its words. */
const CLIP = "bg-clip-text text-transparent";
/** The three rooms after "layered light": film and caption. */
const ROOMS = [
  ["p04", "sec4.row_item"],
  ["p05", "sec4.row_item2"],
  ["p06", "sec4.row_item3"],
] as const;
/** The floor lamp's light shapes, one slide each. */
const SHAPES = [
  ["p16", "butterfly"],
  ["p17", "hills"],
  ["p18", "sunrise"],
] as const;
/** The six features: name, where its lines stand (beside the product, left or right) and their top. */
const FEATURES = [
  ["head", "left-[4.41rem] w-[2.7rem]", "top-[4.68rem]"],
  ["grille", "left-[0.91rem] w-[3.3rem]", "top-[8.18rem]"],
  ["lens", "left-[4.44rem] w-[2.7rem]", "top-[11.67rem]"],
  ["cord", "left-[0.91rem] w-[3.3rem]", "top-[15.18rem]"],
  ["uplight", "left-[4.06rem] w-[3.04rem]", "top-[18.2rem]"],
  ["touch", "left-[1.35rem] w-[3.3rem]", "top-[22.16rem]"],
] as const;

/** The Bauhaus lights page on phones: orvibo.com's phone page, its pictures and films without their words and the
 * words in HTML where it draws them (but the films' lines and app cards and the control tiles' screens, drawn in per
 * language). Headings grow downwards over their dark ground. */
export function LightPhone({ locale, text }: ProductViewProps) {
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
  /** A heading's lines (`\n`) as blocks, each wrapping on its own (but not at a hyphen). */
  const heading = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => (
        <span key={part} className="block text-balance">
          {part.replace(/(\p{L})-(\p{L})/gu, "$1‑$2")}
        </span>
      ));
  /** One of the five headings on black: the lamp's name, then its claim, large. */
  const band = (name: string, claim: string, gradient: string) => (
    <div className="px-[0.7rem] pt-[3.1rem] pb-[0.9rem]">
      <p className="text-[0.36rem] leading-[0.5rem] font-medium text-white">
        {t(name)}
      </p>
      <h2
        className={cn(
          "mt-[0.36rem] text-[0.6rem] leading-[0.84rem] font-semibold",
          CLIP,
          gradient,
        )}
      >
        {heading(claim)}
      </h2>
    </div>
  );
  /** A control tile's name and line, at its place on p23. */
  const tile = (key: string, at: string, title = "text-[0.3rem]") => (
    <div className={cn("absolute", at)}>
      <h3 className={cn("leading-[0.4rem] font-semibold text-white", title)}>
        {t(`m.${key}`)}
      </h3>
      <p className="mt-[0.08rem] text-[0.2rem] leading-[0.28rem] font-normal text-white/90">
        {t(`m.${key}Desc`)}
      </p>
    </div>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the name and its series pill, the handwritten line (the desktop page's translated picture) */}
        <PhonePicture {...pic("p01")}>
          <div className="absolute top-[1.98rem] inset-x-[0.3rem] flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-x-[0.16rem] gap-y-[0.1rem]">
              <h1 className="text-[0.42rem] leading-[0.6rem] font-semibold text-white">
                {ts("sec1.title").replace("\n", " ")}
              </h1>
              <span className="rounded-full bg-[#9d8569] px-[0.2rem] text-[0.24rem] leading-[0.46rem] font-medium text-[#fffbed]">
                {t("sec1.desc")}
              </span>
            </div>
            <img
              src={img(
                "/guanwang_second/front/images/products/light/pic1-10f0c5952c.webp",
              )}
              alt=""
              className="mt-[0.12rem] w-[4.89rem]"
            />
          </div>
        </PhonePicture>
        {/* meet Bauhaus: three scenes, their lines in the film */}
        {film(
          "p02",
          <h2 className="sr-only">{ts("sec2.title").replace("\n", ". ")}</h2>,
        )}
        {/* layered light: the heading, the three rooms (the app card's words in each film) and their captions */}
        <div className="px-[0.6rem] pt-[3.1rem] pb-[0.83rem]">
          <h2
            className={cn(
              "text-[0.6rem] leading-[0.86rem] font-semibold",
              CLIP,
              "bg-[image:linear-gradient(90deg,#9cb2ef,#c7bcbc,#f0c084)]",
            )}
          >
            {heading("sec4.title")}
          </h2>
        </div>
        {ROOMS.map(([name, caption]) => (
          <div key={name}>
            {film(
              name,
              <p className="absolute top-[9.28rem] left-[0.6rem] right-[0.5rem] text-[0.22rem] leading-[0.36rem] font-normal text-white">
                <span className="mr-[0.1rem] text-[0.12rem] align-[0.03rem]">
                  ▲
                </span>
                {t(caption)}
              </p>,
            )}
          </div>
        ))}
        {/* the dining pendant */}
        {band(
          "sec5.title",
          "sec5.desc",
          "bg-[image:linear-gradient(180deg,#fed19d,#ec8b3d)]",
        )}
        <PhonePicture {...pic("p08")} />
        {/* light up and down (film): the heading, the lines under the table's glow */}
        {film(
          "p09",
          <>
            <h2
              className={cn(
                "absolute top-[2.4rem] inset-x-[0.5rem] text-center",
                H2,
                CLIP,
                "bg-[image:linear-gradient(180deg,#fbcf9d,#ed9c57)]",
              )}
            >
              {heading("sec6.title")}
            </h2>
            <p
              className={cn(
                "absolute top-[12.12rem] inset-x-[0.5rem] text-center text-[0.23rem] leading-[0.6rem] font-normal",
                CLIP,
                "bg-[image:linear-gradient(180deg,#fffefa,#f6dfbf)]",
              )}
            >
              {heading("sec6.desc")}
            </p>
          </>,
        )}
        {/* a wave: the heading, the hand (film), the line over the dish */}
        <div className="px-[0.5rem] pt-[0.55rem] pb-[0.5rem] text-center">
          <h2
            className={cn(
              "text-[0.5rem] leading-[0.7rem] font-semibold text-balance",
              CLIP,
              "bg-[image:linear-gradient(180deg,#fbce9a,#ee9951)]",
            )}
          >
            {t("sec7.title")}
          </h2>
        </div>
        {film("p11")}
        <PhonePicture {...pic("p12")}>
          <p className="absolute top-[1.7rem] left-[0.8rem] right-[0.6rem] text-[0.22rem] leading-[0.4rem] font-normal text-[#fcfcfc]">
            {ts("sec7.desc").replace("\n", " ")}
          </p>
        </PhonePicture>
        {/* the floor lamp */}
        {band(
          "sec8.title",
          "sec8.desc",
          "bg-[image:linear-gradient(90deg,#fee8a6,#fee6b4,#fb7a47)]",
        )}
        <PhonePicture {...pic("p14")} />
        {/* two-way light: the heading over the beams, the lines between them */}
        <PhonePicture {...pic("p15")}>
          <h2
            className={cn(
              "absolute top-[4.4rem] inset-x-[0.5rem] text-center",
              H2,
              CLIP,
              "bg-[image:linear-gradient(90deg,#fbe492,#fffdf3,#ffffff)]",
            )}
          >
            {heading("sec9.title")}
          </h2>
          <p className="absolute top-[7.06rem] inset-x-[0.5rem] text-center text-[0.25rem] leading-[0.7rem] font-normal text-white">
            {heading("sec9.desc")}
          </p>
        </PhonePicture>
        <ProductSlideshow
          autoplay={false}
          pagination="none"
          slides={SHAPES.map(([name, shape]) => ({
            key: shape,
            content: (
              <PhonePicture {...pic(name)}>
                <p className="absolute top-[1.08rem] left-[1rem] text-[0.3rem] leading-[0.42rem] font-medium text-white">
                  {t(`m.shape.${shape}`)}
                </p>
                <p className="absolute top-[10.06rem] inset-x-[0.5rem] flex items-center justify-center gap-[0.08rem] text-[0.19rem] leading-[0.3rem] font-normal text-[#9d9d9d]">
                  <span className="flex size-[0.22rem] items-center justify-center rounded-full border border-[#9d9d9d] text-[0.16rem] leading-none">
                    ‹
                  </span>
                  {t("m.swipe")}
                </p>
              </PhonePicture>
            ),
          }))}
        />
        {/* the wall lamp */}
        {band(
          "sec10.title",
          "sec10.desc",
          "bg-[image:linear-gradient(90deg,#99b1f1,#c7bcbc,#f2c282)]",
        )}
        <PhonePicture {...pic("p20")} />
        {/* moonlight: the heading in the light, the lines under it */}
        <PhonePicture {...pic("p21")}>
          <h2
            className={cn(
              "absolute top-[4.44rem] inset-x-[0.5rem] text-center text-white",
              H2,
            )}
          >
            {heading("sec11.title")}
          </h2>
          <p
            className={cn(
              "absolute top-[7.22rem] inset-x-[0.5rem] text-center text-[0.24rem] leading-[0.7rem] font-normal",
              CLIP,
              "bg-[image:linear-gradient(180deg,#f1dab5,#faf9f2)]",
            )}
          >
            {heading("sec11.desc")}
          </p>
        </PhonePicture>
        {film("p22")}
        {/* control: the heading, the six tiles' names and lines, the bubble and the notes */}
        <PhonePicture {...pic("p23")}>
          <h2
            className={cn(
              "absolute top-[1.62rem] inset-x-[0.5rem] text-center",
              H2,
              CLIP,
              "bg-[image:linear-gradient(90deg,#fb7296,#f69a7e,#f7b272)]",
            )}
          >
            {heading("sec3.title")}
          </h2>
          {tile("app", "top-[4.5rem] left-[0.5rem] w-[3.1rem] text-center")}
          {tile("voice", "top-[4.5rem] left-[4.17rem] w-[2.85rem]")}
          <p className="absolute top-[5.53rem] right-[0.82rem] max-w-[2.9rem] rounded-[0.2rem] rounded-br-[0.04rem] bg-white/25 px-[0.16rem] text-[0.15rem] leading-[0.43rem] font-normal whitespace-nowrap text-white">
            {t("m.ask")}
          </p>
          {tile("wall", "top-[9.52rem] left-[0.5rem] w-[3.1rem] text-center")}
          {tile("touch", "top-[8.68rem] left-[3.9rem] w-[3.1rem] text-center")}
          {tile("gesture", "top-[13.5rem] left-[0.8rem] w-[2.8rem]")}
          {tile(
            "pole",
            "top-[13.5rem] left-[4.15rem] w-[1.7rem]",
            "text-[0.26rem]",
          )}
          <p className="absolute top-[16.74rem] left-[0.75rem] w-[2.85rem] text-[0.14rem] leading-[0.2rem] font-normal text-white/90">
            {t("m.gestureNote")}
          </p>
          <p className="absolute top-[16.74rem] left-[4.1rem] w-[1.8rem] text-[0.14rem] leading-[0.2rem] font-normal text-white/90">
            {t("m.poleNote")}
          </p>
        </PhonePicture>
        {/* less is more: the heading, the six features beside their product */}
        <PhonePicture {...pic("p24")}>
          <h2
            className={cn(
              "absolute top-[1rem] left-[0.65rem] right-[0.5rem]",
              H2,
              CLIP,
              "bg-[image:linear-gradient(90deg,#1fd9c0,#17b8ca,#078ad9)]",
            )}
          >
            {heading("sec12.title")}
          </h2>
          {FEATURES.map(([key, x, y]) => (
            <div key={key} className={cn("absolute", x, y)}>
              <h3 className="text-[0.24rem] leading-[0.34rem] font-medium text-white">
                {t(`m.feat.${key}`)}
              </h3>
              <p className="mt-[0.1rem] text-[0.19rem] leading-[0.27rem] font-normal text-[#bdbdbd]">
                {t(`m.feat.${key}Desc`)}
              </p>
            </div>
          ))}
        </PhonePicture>
      </div>
    </div>
  );
}
