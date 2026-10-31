import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";

/** orvibo.com's phone pictures for this page (scaled to 750 px wide) without their words, p01 to p11, and each one's
 * height in hundreds of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at
 * (x, y) px goes at (x / 100, y / 100) rem. p09 and p11 show screens, translated per language (`img()`). */
const PIC = "/orvibo/products/defy/phone";
const HEIGHT = {
  p01: 13.35,
  p02: 18.75,
  p03: 14.18,
  p04: 13.89,
  p05: 13.9,
  p06: 13.89,
  p07: 10.43,
  p08: 10.42,
  p09: 11.34,
  p10: 13.89,
  p11: 12.25,
} as const;
type Slice = keyof typeof HEIGHT;

/** The pastel gradient of the name and the love letter, as on orvibo.com's pictures. */
const GRADIENT =
  "bg-[image:linear-gradient(90deg,#8a9fd9_0%,#a77fc0_35%,#cf7a78_65%,#e8a66f_100%)] bg-clip-text [-webkit-text-fill-color:transparent]";
/** The four features under the name in the love letter (text keys `m.feature.<key>`). */
const FEATURES = ["screens", "dip", "paint", "keys"] as const;
/** A heading's lines (`\n`) as blocks. */
const LINE = "block text-pretty";
/** A footnote under a picture. */
const NOTE = "text-center text-[0.22rem] leading-[0.32rem] font-normal";

/** The Defy page on phones: orvibo.com's phone page, its pictures without their words and the words in HTML where
 * it draws them. Headings on a flat ground stand in a block of that ground that grows with the words (Romanian and
 * English run longer than Chinese), and the picture goes on below it. */
export function DefyPhone({ locale, text, common }: ProductViewProps) {
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
        <span key={part} className={LINE}>
          {part}
        </span>
      ));

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-white">
        {/* hero: the name and its tag, the line under it, then the stack of switches */}
        <div className="min-h-[3.95rem] px-[0.4rem] pt-[1.4rem] pb-[0.3rem] text-center">
          <h1 className="flex flex-wrap items-center justify-center gap-x-[0.18rem] gap-y-[0.06rem]">
            <span
              className={cn(
                "text-[0.46rem] leading-[0.66rem] font-semibold",
                GRADIENT,
              )}
            >
              {t("sec1.title")}
            </span>
            <span className="rounded-[0.04rem] border-[0.015rem] border-[#e8b988] px-[0.07rem] text-[0.17rem] leading-[0.26rem] font-normal text-[#e8b988]">
              {t("sec1.tag")}
            </span>
          </h1>
          <p className="mt-[0.21rem] text-[0.38rem] leading-[0.52rem] font-normal tracking-[0.04em] text-balance text-black">
            {t("sec1.desc")}
          </p>
        </div>
        <PhonePicture {...pic("p01", 3.95)} />
        {/* the love letter: its heading, then the name and its features left of the floating switches */}
        <PhonePicture {...pic("p02")}>
          <h2 className="absolute top-[1.1rem] inset-x-[0.5rem] text-center text-[0.44rem] leading-[0.74rem] font-semibold text-black">
            <span className="block text-balance">{t("m.letter")}</span>
            <span className={cn("inline-block text-[0.48rem]", GRADIENT)}>
              {t("m.letter2")}
            </span>
          </h2>
          <div className="absolute top-[5.08rem] left-[0.62rem] w-[3.9rem]">
            <p
              className={cn(
                "inline-block text-[0.32rem] leading-[0.44rem] font-semibold",
                GRADIENT,
              )}
            >
              {t("sec1.title")}
            </p>
            <ul className="mt-[0.3rem] text-[0.22rem] leading-[0.3rem] font-normal text-[#2b2a2e]">
              {FEATURES.map((feature) => (
                <li key={feature} className="[&+&]:mt-[0.17rem]">
                  {t(`m.feature.${feature}`)}
                </li>
              ))}
            </ul>
          </div>
        </PhonePicture>
        {/* the colours: the line under Ladies and Gentlemen, the switches, then the colour note */}
        <PhonePicture {...pic("p03", 0, 12)}>
          <h2 className="absolute top-[2.1rem] left-[0.38rem] right-[0.4rem] text-[0.38rem] leading-[0.52rem] font-semibold text-black">
            {t("sec3.title")}
          </h2>
        </PhonePicture>
        <p className="min-h-[2.18rem] px-[0.37rem] pt-[0.14rem] text-[0.2rem] leading-[0.3rem] font-normal text-[#666666]">
          {t("m.colorNote")}
        </p>
        {/* the shallow dip, and the touch */}
        <PhonePicture {...pic("p04")}>
          {/* pink on the light ground, near white across the switch's shadow (its edge runs down to the left) */}
          <div className="absolute top-[10.68rem] left-[0.6rem] right-[0.5rem] text-[0.46rem] leading-[0.79rem] font-semibold">
            <h2 className="text-[#f2a0a1]">{heading("sec4.title")}</h2>
            <p
              aria-hidden
              className="absolute inset-0 text-[#fee9e6] [clip-path:polygon(0_0,2.52rem_0,0_1.71rem)]"
            >
              {heading("sec4.title")}
            </p>
          </div>
        </PhonePicture>
        <PhonePicture {...pic("p05")}>
          <h2 className="absolute top-[1.38rem] left-[0.84rem] right-[0.5rem] text-[0.46rem] leading-[0.86rem] font-semibold text-[#fff2ef]">
            {heading("sec4.title2")}
          </h2>
        </PhonePicture>
        {/* 200 tries for the feel of a press */}
        <div className="min-h-[5.66rem] px-[0.72rem] pt-[1.03rem] pb-[0.4rem] text-black">
          <h2 className="text-[0.46rem] leading-[0.83rem] font-semibold">
            {heading("sec5.title")}
          </h2>
          <p className="mt-[0.28rem] text-[0.24rem] leading-[0.43rem] font-normal text-[#0e0e0e]">
            {t("sec5.text")}
          </p>
        </div>
        <PhonePicture {...pic("p06", 5.66)} />
        {/* the two screens: the heading and the callouts by the switch */}
        <PhonePicture {...pic("p07")}>
          <h2 className="absolute top-[0.32rem] left-[0.45rem] right-[0.3rem] text-[0.44rem] leading-[0.77rem] font-semibold text-[#8795c7]">
            {t("sec6.title")}
          </h2>
          <div className="absolute top-[6.1rem] left-[0.66rem] w-[2.5rem] text-[0.2rem] leading-[0.31rem] font-normal text-[#69779b]">
            <p>{t("m.ips")}</p>
            <p>{t("m.ipsDesc")}</p>
          </div>
          <div className="absolute top-[8.43rem] left-[0.64rem] w-[2.5rem] text-[0.2rem] leading-[0.35rem] font-normal text-[#68799a]">
            <p>{t("m.pmoled")}</p>
            <p>{t("m.pmoledDesc")}</p>
          </div>
        </PhonePicture>
        {/* the PMOLED strip: the heading, the key label on its strip and the footnote */}
        <PhonePicture {...pic("p08")}>
          <h2 className="absolute top-[1.08rem] inset-x-[0.4rem] text-center text-[0.36rem] leading-[0.62rem] font-semibold text-balance text-black">
            <span className="block text-balance">{t("m.pmoledTitle")}</span>
            <span className="block text-balance">{t("m.pmoledTitle2")}</span>
          </h2>
          <p className="absolute top-[5.62rem] left-[0.93rem] text-[0.32rem] leading-[0.36rem] font-normal text-white">
            {t("m.keyBedroom")}
          </p>
          <p
            className={cn(
              NOTE,
              "absolute top-[9.66rem] inset-x-[0.4rem] text-[#110100]",
            )}
          >
            {t("m.onlyDefy")}
          </p>
        </PhonePicture>
        {/* the app */}
        <PhonePicture {...pic("p09")}>
          <h2 className="absolute top-[0.78rem] inset-x-[0.5rem] text-center text-[0.48rem] leading-[0.66rem] font-semibold text-balance text-black">
            {t("sec7.title")}
          </h2>
          <p
            className={cn(
              NOTE,
              "absolute top-[10.66rem] inset-x-[0.4rem] text-[#ffdcc1]",
            )}
          >
            {t("m.onlyDefy")}
          </p>
        </PhonePicture>
        {/* MixCtrl 2.0: the heading and its line, the room, then the note */}
        <div className="min-h-[3.75rem] px-[0.72rem] pt-[1.1rem] pb-[0.3rem] text-black">
          <h2 className="text-[0.44rem] leading-[0.84rem] font-medium">
            {heading("sec9.title")}
          </h2>
          <p className="mt-[0.2rem] text-[0.23rem] leading-[0.32rem] font-normal text-[#0f0f0f]">
            {t("m.mixctrlDesc")}
          </p>
        </div>
        <PhonePicture {...pic("p10", 3.75, 12.85)} />
        <p
          className={cn(
            NOTE,
            "min-h-[1.04rem] px-[0.4rem] pt-[0.13rem] text-[0.24rem] text-[#a3a3a3]",
          )}
        >
          {t("m.mixctrlSoon")}
        </p>
        {/* come closer: the heading and its line, the switch, then the note */}
        <div className="min-h-[3.15rem] bg-[image:linear-gradient(#f4f4f4,#fdfdfd)] px-[0.7rem] pt-[1.08rem] pb-[0.3rem] text-black">
          <h2 className="text-[0.52rem] leading-[0.74rem] font-semibold text-balance">
            {t("sec8.title")}
          </h2>
          <p className="mt-[0.22rem] text-[0.24rem] leading-[0.43rem] font-normal text-[#0f0f0f]">
            {t("sec8.text")}
          </p>
        </div>
        <PhonePicture {...pic("p11", 3.15, 11.6)} />
        <p
          className={cn(
            NOTE,
            "min-h-[0.65rem] px-[0.4rem] pt-[0.08rem] pb-[0.3rem] text-[0.24rem] text-[#4b4b4b]",
          )}
        >
          {t("m.onlyDefy")}
        </p>
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
