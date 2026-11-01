import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import type { ReactNode } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, and each one's height in hundreds
 * of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px goes at
 * (x / 100, y / 100) rem. Each section's tag, heading and lines stand in a block whose ground is the top of its
 * picture (down to `cut`), stretched as the words need, above the rest of the picture; p02 is the poster of
 * orvibo.com's full film, which plays on a tap. */
const PIC = "/orvibo/products/motor_db28/phone";
const HEIGHT = {
  p01: 15.06,
  p02: 4.21,
  p03: 13.79,
  p04: 17.85,
  p05: 13.99,
  p06: 13.96,
  p07: 16.76,
  p08: 16.97,
  p09: 15.92,
  p10: 16.47,
  p11: 13.38,
  p12: 16.94,
  p13: 14.54,
} as const;
type Slice = keyof typeof HEIGHT;

/** The feature grid's tiles (03): where each one's lines stand. */
const GRID = [
  ["quiet", "top-[2.8rem] left-[0.73rem] w-[3.9rem]"],
  ["carbon", "top-[2.82rem] left-[5.24rem] w-[1.9rem]"],
  ["torque", "top-[5.88rem] left-[0.73rem] w-[2.3rem]"],
  ["percent", "top-[5.94rem] left-[5.02rem] w-[2.18rem] text-center"],
  ["bearings", "top-[8.18rem] left-[2.57rem] w-[2.25rem]"],
  ["belt", "top-[8.68rem] left-[5.02rem] w-[2.18rem] text-center"],
  ["shaft", "top-[12.08rem] left-[0.3rem] w-[2.16rem] text-center"],
  ["track", "top-[12.08rem] left-[2.64rem] w-[2.18rem] text-center"],
  ["finish", "top-[12.08rem] left-[5.02rem] w-[2.18rem] text-center"],
] as const;
/** The figures under the shaft (12; the part starts at 6 rem): their middle. */
const STATS = [
  ["teeth", "left-[0.35rem]"],
  ["zinc", "left-[2.5rem]"],
  ["years", "left-[4.8rem]"],
] as const;

/** The DB28 curtain motor page on phones: orvibo.com's phone page, its pictures without their words and the words
 * in HTML. */
export function MotorDb28Phone({ locale, text }: ProductViewProps) {
  const { t, ts, img } = productPageHelpers(locale, text);
  /** A phone picture, or the part of it from `top` (rem) down. */
  const pic = (name: Slice, top = 0) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, top, 7.5, HEIGHT[name]] as const,
  });
  /** Lines (`\n`) as blocks. */
  const lines = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => (
        <span key={part} className="block">
          {part}
        </span>
      ));
  /** A section's words over the top of its picture (down to `cut`, stretched to fit them), then the rest. */
  const section = (
    name: Slice,
    cut: number,
    words: ReactNode,
    overlay?: ReactNode,
    className = "pt-[1.28rem]",
  ) => (
    <>
      <div
        className={cn("bg-top bg-no-repeat px-[0.6rem] pb-[0.5rem]", className)}
        style={{
          minHeight: `${cut}rem`,
          backgroundImage: `url(${img(`${PIC}/${name}.webp`)})`,
          backgroundSize: `100% ${(HEIGHT[name] / cut) * 100}%`,
        }}
      >
        {words}
      </div>
      <PhonePicture {...pic(name, cut)}>{overlay}</PhonePicture>
    </>
  );
  /** A section's tag, heading and lines. */
  const head = (tag: string, title: string, desc: string) => (
    <>
      <p className="text-[0.3rem] leading-[0.42rem] font-normal text-[#cdc6c3]">
        {t(tag)}
      </p>
      <h2 className="mt-[0.36rem] text-[0.54rem] leading-[0.8rem] font-semibold text-balance text-white">
        {ts(title)
          .split("\n")
          .map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
      </h2>
      <p className="mt-[0.42rem] text-[0.26rem] leading-[0.42rem] font-normal text-[#eceef2]">
        {t(desc)}
      </p>
    </>
  );
  /** A chip's words over its pill (the icon stays in the picture). */
  const chip = (key: string, at: string) => (
    <p
      className={cn(
        "absolute text-[0.24rem] leading-none font-normal whitespace-nowrap text-white",
        at,
      )}
    >
      {t(`m.chip.${key}`)}
    </p>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the name and its line */}
        <PhonePicture {...pic("p01")}>
          <div className="absolute top-[1.36rem] inset-x-[0.4rem] text-center">
            <h1 className="text-[0.5rem] leading-[0.66rem] font-semibold text-white">
              {lines("db28_banner.banner_title")}
            </h1>
            <p className="mt-[0.14rem] text-[0.3rem] leading-[0.44rem] font-normal text-[#d7cec7]">
              {ts("db28_banner.banner_desc").replace("\n", " ")}
            </p>
          </div>
        </PhonePicture>
        {/* orvibo.com's full film, behind its poster */}
        <PhonePicture {...pic("p02")}>
          <OrviboWatchTrigger
            videoSrc="/orvibo/videos/orvibo_motor_db28.mp4"
            playOnDark
            className="absolute inset-0 cursor-pointer justify-center text-[0.24rem] font-medium text-white"
          >
            {t("sec2.video_watch")}
          </OrviboWatchTrigger>
        </PhonePicture>
        {/* the feature grid */}
        <PhonePicture {...pic("p03")}>
          {GRID.map(([key, at]) => (
            <p
              key={key}
              className={cn(
                "absolute text-[0.21rem] leading-[0.32rem] font-normal text-[#f0f1f5]",
                at,
              )}
            >
              {lines(`m.grid.${key}`)}
            </p>
          ))}
        </PhonePicture>
        {/* quiet as a baby's breathing: the tag and the lines, the two levels, the test note */}
        {section(
          "p04",
          4.15,
          <div className="text-center">
            <p className="text-[0.3rem] leading-[0.42rem] font-normal text-[#d9cfcb]">
              {t("m.tag.quiet")}
            </p>
            <p className="mt-[0.66rem] text-[0.42rem] leading-[0.74rem] font-medium text-balance text-white">
              {t("sec2.desc")}
            </p>
          </div>,
          <>
            <p className="absolute top-[9.6rem] left-[1.17rem] text-[0.3rem] leading-[0.4rem] font-normal text-white">
              {t("m.motor")}
            </p>
            <p className="absolute top-[9.64rem] right-[1.12rem] text-[0.24rem] leading-[0.34rem] font-normal text-[#c8c9cf]">
              {t("m.baby")}
            </p>
            <p className="absolute top-[11.92rem] inset-x-[0.6rem] text-[0.19rem] leading-[0.36rem] font-normal text-[#d8dae5]">
              {t("sec3.desc")}
            </p>
          </>,
          "pt-[0.9rem]",
        )}
        {section("p05", 5.38, head("m.tag.quiet", "sec4.title", "sec4.desc"))}
        {section("p06", 5.75, head("m.tag.belt", "sec4.title2", "sec4.desc2"))}
        {/* no carbon: "carbon" beside the 0, in silver */}
        {section(
          "p07",
          5.45,
          head("m.tag.brushless", "sec6.title", "sec6.desc"),
          <p className="absolute top-[7.1rem] left-[4.06rem] bg-[image:linear-gradient(180deg,#f6f6f6,#cfcfcf_55%,rgba(190,190,190,0.45))] bg-clip-text text-[1rem] leading-[1.2rem] font-semibold text-transparent">
            {t("m.carbon")}
          </p>,
        )}
        {section(
          "p08",
          5.85,
          head("m.tag.control", "sec7.title", "sec7.desc"),
          <>
            {chip("sun", "top-[6.67rem] left-[1.57rem]")}
            {chip("open", "top-[7.77rem] left-[1.56rem]")}
          </>,
        )}
        {section("p09", 4.15, head("m.tag.finish", "sec9.title", "sec9.desc"))}
        {section(
          "p10",
          5.45,
          head("m.tag.torque", "m.heavy", "sec8.desc"),
          <>
            <p className="absolute top-[2.1rem] left-[0.78rem] text-[0.25rem] leading-[0.32rem] font-normal text-[#b2a59d]">
              {t("m.maxLoad")}
            </p>
            <p className="absolute top-[3.49rem] left-[0.75rem] text-[0.25rem] leading-[0.32rem] font-normal text-[#c2b4a8]">
              {t("m.ratedTorque")}
            </p>
          </>,
        )}
        {section(
          "p11",
          5.45,
          head("m.tag.track", "sec10.item_title", "sec10.item_desc"),
          <>
            <p className="absolute top-[6.12rem] left-[1.06rem] w-[2.5rem] text-center text-[0.24rem] leading-[0.32rem] font-normal text-white">
              {t("m.vertical")}
            </p>
            <p className="absolute top-[6.1rem] left-[4.37rem] w-[2.2rem] text-center text-[0.24rem] leading-[0.32rem] font-normal text-[#979797]">
              {t("m.classic")}
            </p>
          </>,
        )}
        {section(
          "p12",
          6,
          head("m.tag.shaft", "sec10.item_title2", "sec10.item_desc2"),
          STATS.map(([key, x]) => (
            <div
              key={key}
              className={cn("absolute top-[8.74rem] w-[2.2rem] text-center", x)}
            >
              <p className="bg-[image:linear-gradient(180deg,#e3d5cb,#b7a093)] bg-clip-text text-[0.36rem] leading-[0.5rem] font-semibold text-transparent">
                {t(`m.stat.${key}`)}
              </p>
              <p className="mt-[0.1rem] text-[0.22rem] leading-[0.3rem] font-normal text-[#c8c8c8]">
                {t(`m.stat.${key}Desc`)}
              </p>
            </div>
          )),
          "pt-[0.68rem]",
        )}
        {section(
          "p13",
          5.4,
          head("m.tag.warranty", "sec10.item_title3", "sec10.item_desc3"),
          <>
            <p className="absolute top-[1.66rem] left-[2.78rem] w-[2rem] text-center text-[0.22rem] leading-[0.3rem] font-normal text-[#6a665d]">
              {t("m.vip")}
            </p>
            <p className="absolute top-[6.04rem] left-[2.06rem] w-[3.4rem] text-center bg-[image:linear-gradient(180deg,#d4b98a,#8c7448)] bg-clip-text text-[0.38rem] leading-[0.56rem] font-semibold text-transparent">
              {t("m.warranty")}
            </p>
          </>,
          "pt-[1.04rem]",
        )}
      </div>
    </div>
  );
}
