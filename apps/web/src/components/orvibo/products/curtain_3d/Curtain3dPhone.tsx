import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import type { ReactNode } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. The headings and lines on white (04 to 12) are HTML blocks above the pictures' parts;
 * p03 is the poster of orvibo.com's full film, which plays on a tap. */
const PIC = "/orvibo/products/curtain_3d/phone";
const HEIGHT = {
  p01: 13.84,
  p02: 13.05,
  p03: 4.22,
  p04: 10.82,
  p05: 13.81,
  p06: 14,
  p07: 13.18,
  p08: 13.85,
  p09: 14.49,
  p10: 13.49,
  p11: 14.53,
  p12: 16.39,
} as const;
type Slice = keyof typeof HEIGHT;

/** The headings in orvibo.com's gradients, spanning the words. */
const HEAD =
  "w-fit bg-clip-text text-[0.46rem] leading-[0.66rem] font-semibold text-transparent";
const ORANGE = "bg-[image:linear-gradient(90deg,#e57966,#f8c853)]";
const DESC = "text-[0.25rem] leading-[0.42rem] font-normal text-[#111111]";
/** The feature grid's tiles (02): name, where its words stand, and their colours (name, line). */
const GRID = [
  [
    "sense",
    "top-[0.5rem] left-[0.27rem] w-[3.53rem] text-center",
    "text-[#60330d]",
    "text-[#57371a]",
  ],
  [
    "rotate",
    "top-[0.47rem] left-[3.97rem] w-[3.23rem] text-center",
    "text-white",
    "text-white",
  ],
  [
    "percent",
    "top-[2.24rem] left-[3.97rem] w-[3.23rem] text-center",
    "text-white",
    "",
  ],
  [
    "wave",
    "top-[4.08rem] left-[3.0rem] w-[4.2rem] text-center",
    "text-[#65350c]",
    "text-[#5c3411]",
  ],
  [
    "slats",
    "top-[6.47rem] left-[0.27rem] w-[3.73rem] text-center",
    "text-white",
    "text-white",
  ],
  [
    "scenes",
    "top-[6.39rem] left-[4.17rem] w-[3.03rem] text-center",
    "text-[#5f320c]",
    "text-[#5b3619]",
  ],
  [
    "seams",
    "top-[8.49rem] left-[1.0rem] w-[2.9rem] text-center",
    "text-white",
    "text-white",
  ],
  [
    "range",
    "top-[10.79rem] left-[0.55rem] w-[4rem]",
    "text-white",
    "text-white",
  ],
] as const;
/** The app's four scene pills (02): their words' left end and top. */
const MODES = [
  ["wake", "left-[4.96rem] top-[8.2rem]"],
  ["sleep", "left-[6.16rem] top-[8.2rem]"],
  ["guests", "left-[4.7rem] top-[8.86rem]"],
  ["dim", "left-[6.18rem] top-[8.86rem]"],
] as const;
/** The four scenes' names over their pictures (09; the part starts at 4.4 rem). */
const SCENES = [
  ["guests", "left-[0.47rem] top-[0.5rem]"],
  ["sleep", "left-[4.05rem] top-[0.5rem]"],
  ["wake", "left-[0.47rem] top-[5.15rem]"],
  ["dim", "left-[4.06rem] top-[5.15rem]"],
] as const;

/** The 3D curtain page on phones: orvibo.com's phone page, its pictures without their words and the words in
 * HTML. Headings and lines on white grow downwards above the pictures' parts. */
export function Curtain3dPhone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
  /** A phone picture, or the part of it from `top` to `bottom` (rem). */
  const pic = (name: Slice, top = 0, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, top, 7.5, bottom] as const,
  });
  /** A heading (no break inside a hyphenated word) in a gradient, and its lines, on white. */
  const band = (
    title: string,
    desc: string,
    gradient = ORANGE,
    tag?: ReactNode,
  ) => (
    <div className="px-[0.54rem] pt-[0.5rem] pb-[0.5rem]">
      {tag}
      <h2 className={cn(HEAD, "text-balance", gradient)}>
        {ts(title)
          .split("\n")
          .map((part) => (
            <span key={part} className="block">
              {part.replace(/(\p{L})-(\p{L})/gu, "$1‑$2")}
            </span>
          ))}
      </h2>
      <p className={cn(DESC, "mt-[0.4rem]")}>{t(desc)}</p>
    </div>
  );
  /** A chip's words over its pill (the icon stays in the picture). */
  const chip = (key: string, at: string, size = "text-[0.2rem]") => (
    <p
      className={cn(
        "absolute leading-none font-normal whitespace-nowrap text-white",
        size,
        at,
      )}
    >
      {t(`m.chip.${key}`)}
    </p>
  );
  const [note1, note2] = ts("sec7.readme").split(" [2]");

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-white">
        {/* hero: the name and line, the request and its answer */}
        <PhonePicture {...pic("p01")}>
          <div className="absolute top-[1.68rem] inset-x-[0.4rem] text-center">
            <p className="text-[0.28rem] leading-[0.5rem] font-normal tracking-[0.06em] text-[#2a1e24]">
              {t("curtain_banner.banner_desc")}
            </p>
            <h1 className="mx-auto mt-[0.12rem] w-fit bg-[image:linear-gradient(90deg,#3d2b25,#6b4c32,#9a7440)] bg-clip-text text-[0.46rem] leading-[0.66rem] font-semibold text-balance text-transparent">
              {t("curtain_banner.banner_title")}
            </h1>
          </div>
          <p className="absolute top-[4.58rem] right-[1.15rem] rounded-[0.3rem] rounded-br-[0.06rem] bg-white/55 px-[0.26rem] text-[0.26rem] leading-[0.6rem] font-normal text-[#915e20] backdrop-blur-[0.06rem]">
            {t("m.reply")}
          </p>
          <p className="absolute top-[5.88rem] left-[0.92rem] rounded-[0.3rem] rounded-bl-[0.06rem] bg-white/55 px-[0.3rem] text-[0.24rem] leading-[0.6rem] font-normal whitespace-nowrap text-[#875925] backdrop-blur-[0.06rem]">
            {t("m.ask")}
          </p>
        </PhonePicture>
        {/* the feature grid */}
        <PhonePicture {...pic("p02")}>
          {GRID.map(([key, at, name, line]) => (
            <div key={key} className={cn("absolute", at)}>
              <h3
                className={cn(
                  "text-[0.3rem] leading-[0.42rem] font-medium text-balance",
                  name,
                )}
              >
                {t(`m.grid.${key}`)}
              </h3>
              {line && (
                <p
                  className={cn(
                    "mt-[0.06rem] text-[0.23rem] leading-[0.32rem] font-normal",
                    line,
                  )}
                >
                  {t(`m.grid.${key}Desc`)}
                </p>
              )}
            </div>
          ))}
          <p className="absolute top-[5.2rem] left-[0.27rem] w-[2.6rem] text-center text-[0.21rem] leading-[0.3rem] font-normal tracking-[0.12em] text-[#ac9990]">
            {t("m.grid.quiet")}
          </p>
          {chip("sun", "top-[1.53rem] left-[2.63rem]", "text-[0.11rem]")}
          {chip("open", "top-[1.99rem] left-[2.63rem]", "text-[0.11rem]")}
          <p className="absolute top-[7.82rem] left-[5.0rem] w-[1.34rem] text-center text-[0.1rem] leading-[0.14rem] font-normal text-[#818181]">
            {t("m.appTitle")}
          </p>
          {MODES.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute text-[0.1rem] leading-[0.18rem] font-normal whitespace-nowrap text-white",
                at,
              )}
            >
              {t(`m.mode.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {/* orvibo.com's full film, behind its poster */}
        <PhonePicture {...pic("p03")}>
          <OrviboWatchTrigger
            videoSrc="/orvibo/videos/curtain_3d_all.mp4"
            playOnDark
            className="absolute inset-0 cursor-pointer justify-center text-[0.24rem] font-medium text-white"
          >
            {t("curtain_banner.video_watch")}
          </OrviboWatchTrigger>
        </PhonePicture>
        {/* the wave curtain: its three pictures and their names */}
        {band("sec1.title_3d", "sec1.desc")}
        <PhonePicture {...pic("p04", 3.7)}>
          {(
            [
              ["fabric", "top-[2.55rem] right-[0.64rem] w-[2.3rem] text-right"],
              ["waves", "top-[5.59rem] left-[0.6rem] w-[3.2rem] text-center"],
              ["drape", "top-[5.61rem] right-[0.64rem] w-[2.3rem] text-right"],
            ] as const
          ).map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute text-[0.22rem] leading-[0.3rem] font-normal text-[#733821]",
                at,
              )}
            >
              {t(`m.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {band("sec1.title_3d2", "sec1.desc2")}
        <PhonePicture {...pic("p05", 3.6)} />
        {/* light sensing, then by the percent: their chips */}
        {band("sec3.title_3d", "sec3.desc")}
        <PhonePicture {...pic("p06", 4.1)}>
          {chip("open", "top-[7.98rem] left-[4.98rem]", "text-[0.23rem]")}
        </PhonePicture>
        {band("sec4.title_3d", "sec4.desc")}
        <PhonePicture {...pic("p07", 3.95)}>
          {chip("sun", "top-[1.7rem] left-[1.44rem]", "text-[0.22rem]")}
          {chip("open", "top-[2.79rem] left-[1.41rem]", "text-[0.23rem]")}
        </PhonePicture>
        {/* the quiet motor: its heading and lines over the dark picture */}
        <PhonePicture {...pic("p08")}>
          <div className="absolute top-[1.48rem] left-[0.55rem] right-[0.6rem] text-white">
            <h2 className="text-[0.5rem] leading-[0.8rem] font-semibold text-balance">
              {t("sec5.title_3d")}
            </h2>
            <p className="mt-[0.3rem] text-[0.25rem] leading-[0.42rem] font-normal text-[#fffcfa]">
              {t("sec5.desc")}
            </p>
          </div>
        </PhonePicture>
        {/* the scenes, the slats, the joins, the range */}
        {band("sec6.title_3d", "sec6.desc")}
        <PhonePicture {...pic("p09", 4.4)}>
          {SCENES.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute w-[3rem] text-center text-[0.24rem] leading-[0.34rem] font-normal text-white",
                at,
              )}
            >
              {t(`m.mode.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {band("sec6.bg_title", "sec6.bg_desc")}
        <PhonePicture {...pic("p10", 3.55)} />
        {band(
          "sec7.title",
          "sec7.desc",
          "bg-[image:linear-gradient(90deg,#a08ec7,#eec0e2)]",
          <p className="mb-[0.3rem] w-fit bg-[image:linear-gradient(90deg,#998fb7,#c9a6cf)] bg-clip-text text-[0.25rem] leading-[0.36rem] font-normal text-transparent">
            {t("sec7.subtitle")}
          </p>,
        )}
        <PhonePicture {...pic("p11", 4.4)} />
        {band(
          "sec7.title2",
          "sec7.desc2",
          "bg-[image:linear-gradient(90deg,#4fb2dc,#6a94cc)]",
        )}
        <PhonePicture {...pic("p12", 4.1, 13.6)}>
          <p className="absolute top-[1.74rem] left-[0.93rem] w-[4rem] text-[0.26rem] leading-[0.34rem] font-normal text-[#94d4ed]">
            {t("m.signal")}
          </p>
        </PhonePicture>
        <div className="px-[0.54rem] pt-[0.4rem] pb-[0.8rem] text-[0.2rem] leading-[0.38rem] font-normal text-[#0e0e0e]">
          <p>{note1}</p>
          {note2 && <p>[2]{note2}</p>}
        </div>
      </div>
    </div>
  );
}
