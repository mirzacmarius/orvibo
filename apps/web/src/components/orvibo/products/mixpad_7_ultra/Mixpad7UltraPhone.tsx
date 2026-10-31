import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, p01 to p13, and each one's height in
 * hundreds of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px
 * goes at (x / 100, y / 100) rem. p09, p10 and p11 show screens, translated per language (`img()`). */
const PIC = "/orvibo/products/mixpad_7_ultra/phone";
const HEIGHT = {
  p01: 13.89,
  p03: 17.32,
  p04: 8.46,
  p05: 14.63,
  p06: 11.96,
  p07: 8.61,
  p08: 9.8,
  p09: 11.2,
  p10: 12.62,
  p11: 13.2,
  p12: 14.45,
  p13: 13.93,
} as const;
type Slice = keyof typeof HEIGHT;

/** The outlined pill under each panel's name, in the panel's colour. */
const PILL =
  "absolute left-1/2 flex h-[0.46rem] -translate-x-1/2 items-center whitespace-nowrap rounded-[0.06rem] border px-[0.16rem] text-[0.24rem] leading-[0.3rem] font-normal";
/** Words centred over a tile, and a tile's title. */
const TILE = "absolute text-center text-white font-medium";
const TILE_TITLE = "text-[0.22rem] leading-[0.28rem]";
/** The voice tile's commands, round the orb (left or right edge as on orvibo.com). */
const VOICES = [
  {
    key: "m.voiceSpot",
    at: "top-[1.52rem] left-[0.45rem] text-[0.12rem] text-[#1a425c]",
  },
  {
    key: "m.voiceSleep",
    at: "top-[1.52rem] right-[4.19rem] text-[0.12rem] text-[#194660]",
  },
  {
    key: "m.voiceStory",
    at: "top-[2.1rem] left-[0.46rem] text-[0.12rem] text-[#1f5676]",
  },
  {
    key: "m.voiceAc",
    at: "top-[2.08rem] right-[3.95rem] text-[0.15rem] text-[#2091bb]",
  },
  {
    key: "m.voiceLights",
    at: "top-[2.55rem] left-[0.95rem] text-[0.15rem] text-[#1faad6]",
  },
  {
    key: "m.voiceMusic",
    at: "top-[2.59rem] left-[2.61rem] text-[0.12rem] text-[#175673]",
  },
] as const;
/** The three panels' cards: each one's name and lines, and where they start on its picture. */
const CARDS = [
  {
    pic: "p06",
    top: 3.45,
    key: "walnut",
    at: "top-[5rem]",
    title: "text-[#e7dbc7]",
    desc: "text-[#dec8a8]",
  },
  {
    pic: "p07",
    top: 0,
    key: "fabric",
    at: "top-[5.35rem]",
    title: "text-[#bac0b1]",
    desc: "text-[#afb4a6]",
  },
  {
    pic: "p08",
    top: 0,
    key: "aluminum",
    at: "top-[4.94rem]",
    title: "text-[#f9f9f9]",
    desc: "text-[#eeeeee]",
  },
] as const;
/** The screen's four figures, two to a row as on orvibo.com (text keys `sec7.<key>.value|label`). */
const SCREEN_SPECS = ["size", "resolution", "angle", "coating"] as const;
/** The specification list, in orvibo.com's order. */
const SPECS = [
  "brand",
  "model",
  "category",
  "cpu",
  "memory",
  "os",
  "lcd",
  "touch",
  "mic",
  "network",
  "load",
  "input",
  "loadType",
  "environment",
  "voice",
  "light",
  "tof",
  "speaker",
  "ir",
  "size",
] as const;
/** A heading drawn in a gradient, as on orvibo.com's pictures. */
const CLIP = "bg-clip-text [-webkit-text-fill-color:transparent]";

/** The MixPad 10 page on phones: orvibo.com's phone page, its pictures without their words and the words in HTML
 * where it draws them. Where a picture's words stand on a flat ground, that ground is a block that grows with the
 * words (Romanian and English run longer than Chinese) and the picture goes on below it. */
export function Mixpad7UltraPhone({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, lines } = productPageHelpers(locale, text);
  /** A phone picture, or the part of it from `top` to `bottom` (in hundreds of its pixels). */
  const pic = (name: Slice, top = 0, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, top, 7.5, bottom] as const,
  });
  const intro = ts("sec2.title").split("\n");

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the three panels round the logo, and the two lines under it */}
        <PhonePicture {...pic("p01")}>
          <h1 className="absolute top-[6.8rem] inset-x-0 text-center text-[0.3rem] leading-[0.4rem] font-normal text-[#dbdbdb]">
            {t("sec1.title")}
          </h1>
          <p
            className={cn(
              "absolute top-[7.42rem] inset-x-[0.5rem] text-center text-[0.36rem] leading-[0.48rem] font-medium text-balance bg-[image:linear-gradient(90deg,#d6cdbb_0%,#c9c0a7_50%,#b5a888_100%)]",
              CLIP,
            )}
          >
            {t("sec1.desc")}
          </p>
        </PhonePicture>
        {/* the four claims and "this is Ultra" */}
        <div className="bg-white pt-[1.22rem] pr-[0.5rem] pb-[1.3rem] pl-[0.88rem] text-black">
          {intro.slice(0, -1).map((claim) => (
            <p
              key={claim}
              className="mb-[0.3rem] text-[0.3rem] leading-[0.46rem] font-medium"
            >
              {claim}
            </p>
          ))}
          <p className="mt-[0.62rem] text-[0.36rem] leading-[0.48rem] font-medium">
            {intro.at(-1)}
          </p>
        </div>
        {/* the three finishes, each panel's name in its pill */}
        <PhonePicture {...pic("p03")}>
          <span
            className={cn(
              PILL,
              "top-[7.58rem] border-[#a68969] text-[#b3987a]",
            )}
          >
            {t("m.walnut")}
          </span>
          <span
            className={cn(
              PILL,
              "top-[15.71rem] border-[#ebebec] text-[#ebebec]",
            )}
          >
            {t("m.aluminum")}
          </span>
        </PhonePicture>
        <PhonePicture {...pic("p04")}>
          <span
            className={cn(
              PILL,
              "top-[6.52rem] border-[#6e892c] text-[#7f9c35]",
            )}
          >
            {t("m.fabric")}
          </span>
        </PhonePicture>
        {/* the eight tiles */}
        <PhonePicture {...pic("p05")}>
          <div className={cn(TILE, "top-[0.82rem] left-[0.42rem] w-[3.26rem]")}>
            <p className={cn(TILE_TITLE, "px-[0.1rem] text-balance")}>
              {t("m.tileScreen")}
            </p>
          </div>
          <p
            className={cn(
              TILE,
              "top-[2.72rem] left-[1.06rem] w-[0.95rem] text-[0.13rem] leading-[0.16rem] font-normal text-[#d4ecf7]",
            )}
          >
            {t("m.tileCoating")}
          </p>
          <p
            className={cn(
              TILE,
              "top-[2.72rem] left-[2.07rem] w-[0.95rem] text-[0.13rem] leading-[0.16rem] font-normal text-[#dbf2fa]",
            )}
          >
            {t("m.tileAngle")}
          </p>
          <p
            className={cn(
              TILE,
              "top-[3.16rem] left-[3.82rem] w-[3.26rem] text-[0.22rem] leading-[0.3rem] font-normal text-[#b5bfc5]",
            )}
          >
            {t("sec1.title")}
          </p>
          <p
            className={cn(
              TILE,
              "top-[3.26rem] left-[0.42rem] w-[1.83rem] text-[0.16rem] leading-[0.22rem]",
            )}
          >
            {t("m.tileHub")}
          </p>
          <p
            className={cn(
              TILE,
              "top-[3.26rem] left-[2.4rem] w-[1.28rem] text-[0.16rem] leading-[0.22rem]",
            )}
          >
            {t("m.tileAlbum")}
          </p>
          <p
            className={cn(
              TILE,
              TILE_TITLE,
              "top-[6.55rem] left-[0.42rem] w-[6.66rem]",
            )}
          >
            {t("m.tileColors")}
          </p>
          <div className={cn(TILE, "top-[9.6rem] left-[0.42rem] w-[3.26rem]")}>
            <p className={TILE_TITLE}>{t("m.tileLights")}</p>
            <p className={cn(TILE_TITLE, "mt-[0.08rem]")}>
              {t("m.tileLightsMax")}
            </p>
          </div>
          <div
            className={cn(TILE, "top-[10.14rem] left-[3.82rem] w-[3.26rem]")}
          >
            <p className="text-[0.2rem] leading-[0.3rem]">{t("m.tileSound")}</p>
            <p className="mt-[0.04rem] text-[0.2rem] leading-[0.3rem]">
              {t("m.tileSoundTuning")}
            </p>
          </div>
          <p
            className={cn(
              TILE,
              TILE_TITLE,
              "top-[10.86rem] left-[0.42rem] w-[3.26rem] text-[#f6fdfe]",
            )}
          >
            {t("m.tileVoice")}
          </p>
          <div className="absolute top-[9.98rem] inset-x-0">
            {VOICES.map((voice) => (
              <p
                key={voice.key}
                className={cn(
                  "absolute leading-[1.2] font-normal whitespace-nowrap",
                  voice.at,
                )}
              >
                {t(voice.key)}
              </p>
            ))}
          </div>
        </PhonePicture>
        {/* the panels on the wall: the heading on white, then the three cards */}
        <div className="min-h-[3.45rem] bg-white px-[0.5rem] pt-[1.06rem] pb-[0.3rem] text-center">
          <h2 className="text-[0.34rem] leading-[0.5rem] font-semibold text-black">
            {ts("sec6.title")
              .split("\n")
              .map((part) => (
                <span key={part} className="block text-balance">
                  {part}
                </span>
              ))}
          </h2>
        </div>
        {CARDS.map((card) => (
          <PhonePicture key={card.key} {...pic(card.pic, card.top)}>
            <div
              className={cn(
                "absolute left-[0.98rem] w-[5.54rem] text-center",
                card.at,
              )}
            >
              <p
                className={cn(
                  "text-[0.3rem] leading-[0.4rem] font-normal",
                  card.title,
                )}
              >
                {t(`sec6.${card.key}.title`)}
              </p>
              <p
                className={cn(
                  "mt-[0.18rem] text-[0.2rem] leading-[0.36rem] font-normal text-balance",
                  card.desc,
                )}
              >
                {t(
                  card.key === "fabric"
                    ? "m.fabricDesc"
                    : `sec6.${card.key}.desc`,
                )}
              </p>
            </div>
          </PhonePicture>
        ))}
        {/* performance: the heading and the two figures on black, then the panel among the appliances */}
        <div className="min-h-[6.4rem] px-[0.4rem] pt-[1.68rem] pb-[0.4rem] text-center">
          <h2
            className={cn(
              "text-[0.5rem] leading-[0.8rem] font-semibold text-balance bg-[image:linear-gradient(90deg,#ffffff_35%,#e8d6b4_100%)]",
              CLIP,
            )}
          >
            {t("m.powerTitle")}
          </h2>
          <p
            className={cn(
              "mt-[0.28rem] text-[0.44rem] leading-[0.64rem] font-semibold text-balance bg-[image:linear-gradient(90deg,#ffffff_35%,#e8d6b4_100%)]",
              CLIP,
            )}
          >
            {t("m.powerSubtitle")}
          </p>
          <ul className="mx-auto mt-[0.62rem] grid w-[5.52rem] grid-cols-2 gap-x-[0.2rem]">
            {(["Lights", "Ir"] as const).map((figure) => (
              <li key={figure}>
                <p className="text-[0.36rem] leading-[0.5rem] font-normal text-white">
                  {t(`m.power${figure}`)}
                </p>
                <p className="mt-[0.1rem] text-[0.2rem] leading-[0.28rem] font-normal text-[#bdbdbd]">
                  {t(`m.power${figure}Label`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <PhonePicture {...pic("p09", 6.4)} />
        {/* the screen: its heading and four figures on white, then the home screen */}
        <div className="min-h-[7.2rem] bg-white px-[0.71rem] pt-[1.3rem] pb-[0.5rem] text-black">
          <h2 className="text-[0.5rem] leading-[0.82rem] font-semibold">
            {t("m.screenTitle")}
          </h2>
          <dl className="mt-[0.56rem] grid grid-cols-[2.5rem_1fr] gap-x-[0.12rem] gap-y-[0.3rem]">
            {SCREEN_SPECS.map((spec) => (
              <div key={spec}>
                <dt className="text-[0.38rem] leading-[0.5rem] font-normal">
                  {t(`sec7.${spec}.value`)}
                </dt>
                <dd className="mt-[0.04rem] text-[0.18rem] leading-[0.24rem] font-normal text-[#191919]">
                  {t(`sec7.${spec}.label`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <PhonePicture {...pic("p10", 7.2)}>
          <p className="absolute top-[4.9rem] inset-x-0 text-center text-[0.2rem] leading-[0.28rem] font-normal text-[#929292]">
            {t("m.screenNote")}
          </p>
        </PhonePicture>
        {/* the microphones */}
        <div className="min-h-[4.2rem] px-[0.68rem] pt-[1.56rem] pb-[0.4rem]">
          <h2
            className={cn(
              "text-[0.42rem] leading-[0.6rem] font-semibold text-balance bg-[image:linear-gradient(90deg,#3d9cf5_0%,#9cdaf6_70%,#c6ecfb_100%)]",
              CLIP,
            )}
          >
            {t("sec9.title")}
          </h2>
          <p className="mt-[0.4rem] text-[0.22rem] leading-[0.3rem] font-normal text-[#f3f3f3]">
            {t("sec9.desc")}
          </p>
        </div>
        <PhonePicture {...pic("p11", 4.2)} />
        {/* the sound */}
        <div className="min-h-[4.4rem] px-[0.69rem] pt-[1.08rem] pb-[0.4rem]">
          <h2 className="text-[0.4rem] leading-[0.56rem] font-semibold">
            {ts("sec11.title")
              .split("\n")
              .map((part) => (
                <span
                  key={part}
                  className={cn(
                    "block text-balance bg-[image:linear-gradient(90deg,#a3b0a1_0%,#e3f2df_100%)] [&+&]:mt-[0.3rem]",
                    CLIP,
                  )}
                >
                  {part}
                </span>
              ))}
          </h2>
          <p className="mt-[0.4rem] text-[0.2rem] leading-[0.44rem] font-normal text-[#c6c6c6]">
            {t("m.sound")}
          </p>
        </div>
        <PhonePicture {...pic("p12", 4.4)} />
        {/* the gateway */}
        <div className="min-h-[5.4rem] bg-white px-[0.7rem] pt-[1.42rem] pb-[0.5rem] text-black">
          <h2 className="text-[0.56rem] leading-[0.72rem] font-bold">
            {ts("m.gatewayTitle")
              .split("\n")
              .map((part) => (
                <span key={part} className="block [&+&]:mt-[0.26rem]">
                  {part}
                </span>
              ))}
          </h2>
          <p className="mt-[0.36rem] text-[0.24rem] leading-[0.5rem] font-normal text-[#111111]">
            {t("m.gatewayDesc")}
          </p>
        </div>
        <PhonePicture {...pic("p13", 5.4)} />
        {/* the specifications */}
        <ul className="px-[0.88rem] pt-[1.24rem] pb-[1.2rem]">
          {SPECS.map((spec) => (
            <li
              key={spec}
              className="mb-[0.16rem] text-[0.22rem] leading-[0.3rem] font-normal text-white"
            >
              {t(`m.spec.${spec}`)}
            </li>
          ))}
        </ul>
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
