import { PhonePicture } from "@/components/orvibo/product/PhonePicture";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import type { ReactNode } from "react";

/** orvibo.com's phone pictures for this page (750 px wide) without their words, p01 to p15, and each one's height in
 * hundreds of its pixels: the phone view's rem is a hundredth of the picture's width, so a word drawn at (x, y) px
 * goes at (x / 100, y / 100) rem. Pictures with a screen are translated per language (`img()`); voice1 to voice3 are
 * the faces on the voice commands. */
const PIC = "/orvibo/products/mixpad_m2/phone";
const HEIGHT = {
  p01: 11.9,
  p02: 11.81,
  p03: 21.67,
  p04: 13.87,
  p05: 12.6,
  p06: 15.61,
  p07: 13.71,
  p08: 12.38,
  p09: 12.44,
  p10: 12.94,
  p11: 13,
  p12: 19.05,
  p13: 12.94,
  p14: 11.56,
  p15: 9.36,
} as const;
type Slice = keyof typeof HEIGHT;

/** The outlined tag over a section, its heading, its lines and its footnotes. */
const TAG =
  "inline-flex h-[0.52rem] items-center whitespace-nowrap rounded-full border-[0.02rem] px-[0.24rem] text-[0.22rem] leading-none font-normal";
const H2 = "text-[0.44rem] leading-[0.68rem] font-semibold text-[#f4f0f8]";
const DESC = "text-[0.26rem] leading-[0.43rem] font-normal text-[#e5e5e5]";
const NOTE = "text-[0.2rem] leading-[0.38rem] font-normal text-[#d6d6d6]";
/** A tile's words over the five tiles under the hero. */
const TILE = "absolute text-center text-balance";
/** The three badges under the panel: their words in the middle of each. */
const BADGES = [
  { key: "lights", at: "left-[0.42rem]" },
  { key: "infrared", at: "left-[2.68rem]" },
  { key: "load", at: "left-[4.94rem]" },
] as const;
/** A voice command: a dark pill, or one with a face in a colour. */
const PILL =
  "flex h-[0.54rem] items-center whitespace-nowrap rounded-full px-[0.3rem] text-[0.2rem] leading-none font-normal";
const FACE = "gap-[0.14rem] pl-[0.05rem]";
/** The rows of voice commands, as on orvibo.com: each row's command with a face at `at`, with one before and one
 * after it; the first and last rows fade into the dark. */
const VOICES = [
  {
    top: "top-[0.05rem]",
    at: "left-[1.25rem]",
    faint: true,
    face: 1,
    main: "sec5.voice.heater",
    tone: "bg-[image:linear-gradient(90deg,#0f4f63,#0e2a4a)] text-[#eaf5ff]",
    before: { key: "sec5.voice.rack", tone: "bg-[#2a1d22] text-[#efefef]" },
    after: { key: "sec5.voice.curtains", tone: "bg-[#232323] text-[#efefef]" },
  },
  {
    top: "top-[0.58rem]",
    at: "left-[2.13rem]",
    face: 1,
    main: "sec5.voice.heater",
    tone: "bg-[image:linear-gradient(90deg,#0f4f63,#13406a_60%,#0e2a4a)] text-[#eaf5ff]",
    before: {
      key: "sec5.voice.fan",
      tone: "bg-[image:linear-gradient(90deg,#3a1f28,#251b1f)] text-[#efefef]",
    },
    after: { key: "sec5.voice.curtains", tone: "bg-[#262626] text-[#efefef]" },
  },
  {
    top: "top-[1.31rem]",
    at: "left-[2.95rem]",
    face: 2,
    main: "sec5.voice.bedroomLight",
    tone: "bg-[image:linear-gradient(90deg,#6a2a5c,#2d1530)] text-[#faeff9]",
    before: { key: "sec5.voice.water", tone: "bg-[#262626] text-[#e6e6e6]" },
    after: { key: "sec5.voice.light", tone: "bg-[#1c1c1c] text-[#8a8a8a]" },
  },
  {
    top: "top-[2.02rem]",
    at: "left-[0.88rem]",
    face: 3,
    main: "m.voiceClean",
    tone: "bg-[image:linear-gradient(90deg,#5a2a8a,#1d2050)] text-[#f6eefa]",
    before: { key: "sec5.voice.movieNap", tone: "bg-[#0d2b28] text-[#e7f1f2]" },
    after: { key: "m.voiceAc", tone: "bg-[#262626] text-[#e6e6e6]" },
  },
  {
    top: "top-[2.7rem]",
    at: "left-[1.65rem]",
    faint: true,
    face: 1,
    main: "sec5.voice.heater",
    tone: "bg-[image:linear-gradient(90deg,#0f4f63,#0e2a4a)] text-[#eaf5ff]",
    before: { key: "sec5.voice.fan", tone: "bg-[#2a1d22] text-[#efefef]" },
    after: { key: "sec5.voice.ac", tone: "bg-[#232323] text-[#efefef]" },
  },
] as const;
/** A chat bubble over a picture: its top-left corner is square, and it grows to the right. */
const BUBBLE =
  "absolute flex items-center whitespace-nowrap rounded-full rounded-bl-none leading-none font-normal";
const CYAN = "bg-[image:linear-gradient(90deg,#3fe0d8,#3a8fe0)] text-[#00474f]";
const BEIGE =
  "bg-[image:linear-gradient(90deg,#c29b77,#e8d0bb)] text-[#261304]";
/** A heading drawn in a gradient, as on orvibo.com's pictures. */
const CLIP = "bg-clip-text [-webkit-text-fill-color:transparent]";

/** The MixPad 4 page on phones: orvibo.com's phone page, its pictures without their words and the words in HTML
 * where it draws them. Each section's tag, heading and lines stand on black, in a block that grows with the words
 * (Romanian and English run longer than Chinese), and its picture goes on below it. */
export function MixpadM2Phone({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, lines } = productPageHelpers(locale, text);
  /** A phone picture, or the part of it from `top` to `bottom` (in hundreds of its pixels). */
  const pic = (name: Slice, top = 0, bottom: number = HEIGHT[name]) => ({
    src: img(`${PIC}/${name}.webp`),
    size: [7.5, HEIGHT[name]] as const,
    part: [0, top, 7.5, bottom] as const,
  });
  /** A heading whose lines (`\n`) stay lines, each balanced when it wraps. */
  const heading = (key: string) =>
    ts(key)
      .split("\n")
      .map((part) => (
        <span key={part} className="block text-pretty">
          {part}
        </span>
      ));
  /** A section's lines as one paragraph: the desktop's line breaks are for its wider columns. */
  const flat = (key: string) => ts(key).replaceAll("\n", " ");
  /** A section's words on black: its tag, heading and lines, at least as tall as orvibo.com's (`className`). */
  const band = (
    className: string,
    title: string,
    desc: string,
    tag?: string,
    extra?: ReactNode,
  ) => (
    <div className={cn("px-[0.55rem] pb-[0.4rem]", className)}>
      {tag && (
        <p className={cn(TAG, "mb-[0.26rem] border-[#c5daed] text-[#c5daed]")}>
          {t(tag)}
        </p>
      )}
      <h2 className={H2}>{heading(title)}</h2>
      <p className={cn(DESC, "mt-[0.3rem]")}>{flat(desc)}</p>
      {extra}
    </div>
  );
  /** A voice command with its face, or a plain one. */
  const voice = (key: string, tone: string, face?: number) => (
    <p className={cn(PILL, face !== undefined && FACE, tone)}>
      {face !== undefined && (
        <img
          src={img(`${PIC}/voice${face}.webp`)}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-[0.44rem] rounded-full"
        />
      )}
      {t(key)}
    </p>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview-phone" className="bg-black">
        {/* hero: the name over the panel */}
        <PhonePicture {...pic("p01")}>
          <h1
            className={cn(
              "absolute top-[2.14rem] inset-x-[0.4rem] text-center text-[0.44rem] leading-[0.6rem] font-medium text-balance bg-[image:linear-gradient(90deg,#9775f8,#ad78f8)]",
              CLIP,
            )}
          >
            {ts("m2_banner.banner_title").replaceAll("\n", " ")}
          </h1>
          <p className="absolute top-[3.42rem] inset-x-[0.4rem] text-center text-[0.36rem] leading-[0.5rem] font-normal text-white text-balance">
            {t("m2_banner.banner_desc")}
          </p>
        </PhonePicture>
        {/* the five tiles */}
        <PhonePicture {...pic("p02")}>
          <div className={cn(TILE, "top-[1.33rem] left-[0.48rem] w-[3.3rem]")}>
            <p className="text-[0.26rem] leading-[0.36rem] font-semibold text-[#eff9fd]">
              {t("m.tile.lights")}
            </p>
            <p className="mt-[0.04rem] text-[0.19rem] leading-[0.26rem] font-normal text-[#eff9fd]">
              {t("m.tile.lightsDesc")}
            </p>
          </div>
          <div className={cn(TILE, "top-[1.33rem] left-[4.26rem] w-[2.74rem]")}>
            <p className="text-[0.26rem] leading-[0.36rem] font-semibold text-[#fcffff]">
              {t("m.tile.touch")}
            </p>
            <p className="mt-[0.04rem] text-[0.19rem] leading-[0.26rem] font-normal text-[#fcffff]">
              {t("m.tile.touchDesc")}
            </p>
          </div>
          <div className="absolute top-[5.77rem] left-[0.95rem] w-[2.6rem]">
            <p className="text-[0.26rem] leading-[0.36rem] font-semibold text-[#f4f5fc]">
              {t("m.tile.ir")}
            </p>
            <p className="mt-[0.02rem] text-[0.2rem] leading-[0.28rem] font-normal text-[#b0b7d7]">
              {t("m.tile.irDesc")}
            </p>
          </div>
          <div className={cn(TILE, "top-[8.45rem] left-[0.48rem] w-[2.84rem]")}>
            <p className="text-[0.26rem] leading-[0.36rem] font-semibold text-[#e9fcf1]">
              {t("m.tile.load")}
            </p>
            <p className="mt-[0.04rem] text-[0.19rem] leading-[0.26rem] font-normal text-[#e9fcf1]">
              {t("m.tile.loadDesc")}
            </p>
          </div>
          <div className={cn(TILE, "top-[8.45rem] left-[3.86rem] w-[3.14rem]")}>
            <p className="text-[0.26rem] leading-[0.36rem] font-semibold text-[#f6bbaa]">
              {t("m.tile.music")}
            </p>
            <p className="mt-[0.04rem] text-[0.19rem] leading-[0.26rem] font-normal text-[#dbaa9b]">
              {t("m.tile.musicDesc")}
            </p>
          </div>
        </PhonePicture>
        {/* fully upgraded: the heading, the panel's screens and the three badges, then their footnotes */}
        {band("min-h-[6.73rem] pt-[1.28rem]", "sec2.title", "sec2.desc")}
        <PhonePicture {...pic("p03", 6.73, 18.9)}>
          {BADGES.map((badge) => (
            <p
              key={badge.key}
              className={cn(
                "absolute top-[10.94rem] flex h-[1.1rem] w-[2.14rem] items-center justify-center px-[0.08rem] text-center text-[0.18rem] leading-[0.25rem] font-medium text-white",
                badge.at,
              )}
            >
              <span>{t(`sec2.${badge.key}`)}</span>
            </p>
          ))}
        </PhonePicture>
        <p className={cn(NOTE, "px-[0.53rem] pb-[0.5rem]")}>
          {t("sec2.notes")}
        </p>
        {/* four circuits */}
        {band(
          "min-h-[5.15rem] pt-[0.81rem]",
          "sec3.title",
          "sec3.desc",
          "m.tag.relay",
        )}
        <PhonePicture {...pic("p04", 5.15)} />
        {/* infrared: the two figures, the appliances and the footnote */}
        {band(
          "min-h-[6.74rem] pt-[0.81rem]",
          "sec4.title",
          "sec4.desc",
          "m.tag.ir",
          <dl className="mt-[0.42rem] ml-[0.16rem] grid grid-cols-[minmax(1.64rem,max-content)_max-content] gap-x-[0.5rem]">
            {(
              [
                ["m.ir", "sec4.item_desc"],
                ["sec4.item_title", "sec4.item_desc2"],
              ] as const
            ).map(([figure, label]) => (
              <div key={figure}>
                <dt className="text-[0.32rem] leading-[0.4rem] font-medium text-[#f5cc6e]">
                  {t(figure)}
                </dt>
                <dd className="text-[0.2rem] leading-[0.28rem] font-normal text-[#b9b9b9]">
                  {t(label)}
                </dd>
              </div>
            ))}
          </dl>,
        )}
        <PhonePicture {...pic("p05", 6.74, 11.1)} />
        <p className={cn(NOTE, "px-[0.53rem] pt-[0.2rem] pb-[0.6rem]")}>
          {t("sec4.desc2")}
        </p>
        {/* voice: the commands in rows, then the room with what is said in it */}
        {band(
          "min-h-[4.4rem] pt-[0.46rem]",
          "sec5.title",
          "sec5.desc",
          "m.tag.voice",
        )}
        <div className="relative h-[3.4rem] overflow-hidden">
          {VOICES.map((row) => (
            <div
              key={row.top}
              className={cn(
                "absolute",
                row.top,
                row.at,
                "faint" in row && "opacity-25",
              )}
            >
              {voice(row.main, row.tone, row.face)}
              <div className="absolute top-0 right-full mr-[0.32rem]">
                {voice(row.before.key, row.before.tone)}
              </div>
              <div className="absolute top-0 left-full ml-[0.32rem]">
                {voice(row.after.key, row.after.tone)}
              </div>
            </div>
          ))}
        </div>
        <PhonePicture {...pic("p06", 7.8)}>
          <p
            className={cn(
              BUBBLE,
              CYAN,
              "top-[1.72rem] left-[3.87rem] h-[0.32rem] px-[0.14rem] text-[0.19rem]",
            )}
          >
            {t("sec9.bubble_reply")}
          </p>
          <p className="absolute top-[3.52rem] left-[3.52rem] text-[0.3rem] leading-[0.38rem] font-semibold text-[#e0ffff] [text-shadow:0_0_0.08rem_#2fd8e8]">
            {t("m.range")}
          </p>
          <p
            className={cn(
              BUBBLE,
              CYAN,
              "top-[4.74rem] left-[2.07rem] h-[0.32rem] px-[0.14rem] text-[0.19rem]",
            )}
          >
            {t("sec5.voice.light")}
          </p>
        </PhonePicture>
        {/* the screen: its words over the teal ground */}
        <PhonePicture {...pic("p07")}>
          <div className="absolute top-[0.95rem] left-[0.5rem] right-[0.5rem]">
            <p
              className={cn(TAG, "h-[0.54rem] border-[#dcf4fb] text-[#dcf4fb]")}
            >
              {t("m.tag.ips")}
            </p>
            <h2 className={cn(H2, "mt-[0.32rem] text-[#eaf9fe]")}>
              {heading("sec6.title")}
            </h2>
            <p className={cn(DESC, "mt-[0.26rem] text-[#f2fbff]")}>
              {flat("sec6.desc")}
            </p>
          </div>
        </PhonePicture>
        {/* the app */}
        {band(
          "min-h-[5.24rem] pt-[0.62rem]",
          "sec7.title",
          "sec7.desc",
          "m.tag.app",
        )}
        <PhonePicture {...pic("p08", 5.24)} />
        {/* the music library: its words over the covers */}
        <PhonePicture {...pic("p09")}>
          <div className="absolute top-[0.73rem] left-[0.54rem] right-[0.5rem]">
            <p className={cn(TAG, "border-[#ebedf3] text-[#ebedf3]")}>
              {t("m.tag.music")}
            </p>
            <h2 className={cn(H2, "mt-[0.26rem]")}>{heading("sec8.title")}</h2>
            <p className={cn(DESC, "mt-[0.3rem]")}>{t("m.musicDesc")}</p>
          </div>
        </PhonePicture>
        {/* intercom between panels, then at the door */}
        {band("min-h-[3.56rem] pt-[0.58rem]", "sec9.title", "sec9.desc")}
        <PhonePicture {...pic("p10", 3.56)}>
          <p
            className={cn(
              BUBBLE,
              BEIGE,
              "top-[0.58rem] left-[1.65rem] h-[0.33rem] px-[0.16rem] text-[0.19rem]",
            )}
          >
            {t("sec9.bubble_dinner")}
          </p>
          <p
            className={cn(
              BUBBLE,
              BEIGE,
              "top-[5.6rem] left-[3.52rem] h-[0.34rem] px-[0.14rem] text-[0.19rem]",
            )}
          >
            {t("sec9.bubble_reply")}
          </p>
        </PhonePicture>
        {band("min-h-[3.55rem] pt-[0.52rem]", "sec9.title2", "sec9.desc2")}
        <PhonePicture {...pic("p11", 3.55)}>
          <p
            className={cn(
              BUBBLE,
              BEIGE,
              "top-[0.62rem] left-[1.3rem] h-[0.53rem] px-[0.3rem] text-[0.26rem]",
            )}
          >
            {t("sec10.bubble_delivery")}
          </p>
          <p
            className={cn(
              BUBBLE,
              BEIGE,
              "top-[4.81rem] left-[1.3rem] h-[0.53rem] px-[0.24rem] text-[0.24rem]",
            )}
          >
            {t("sec10.bubble_door")}
          </p>
          <p
            className={cn(
              BUBBLE,
              BEIGE,
              "top-[5.52rem] left-[4.59rem] h-[0.54rem] px-[0.26rem] text-[0.26rem]",
            )}
          >
            {t("sec10.bubble_reply")}
          </p>
        </PhonePicture>
        {/* the load: the three tiles' words, then the footnotes */}
        {band(
          "min-h-[5.04rem] pt-[0.62rem]",
          "sec11.title",
          "sec11.desc",
          "m.tag.load",
        )}
        <PhonePicture {...pic("p12", 5.04, 16.45)}>
          <div className="absolute top-[0.47rem] left-[0.76rem] right-[0.6rem] text-[#fcffff]">
            <p className="text-[0.3rem] leading-[0.42rem] font-semibold">
              {t("m.loadTotal")}
            </p>
            <p className="mt-[0.08rem] text-[0.22rem] leading-[0.3rem] font-normal">
              {t("m.loadTotalDesc")}
            </p>
          </div>
          {(
            [
              ["fuse", "left-[0.49rem]"],
              ["fire", "left-[3.9rem]"],
            ] as const
          ).map(([tile, at]) => (
            <div
              key={tile}
              className={cn(
                "absolute top-[4.2rem] w-[3.1rem] text-center text-white text-balance",
                at,
              )}
            >
              <p className="text-[0.26rem] leading-[0.36rem] font-semibold">
                {t(`m.${tile}`)}
              </p>
              <p className="mt-[0.06rem] text-[0.19rem] leading-[0.26rem] font-normal">
                {t(`m.${tile}Desc`)}
              </p>
            </div>
          ))}
          <p className="absolute top-[9.14rem] left-[0.91rem] text-[0.36rem] leading-[0.5rem] font-semibold text-[#fbfffc]">
            {t("m.relay")}
          </p>
          <p className="absolute top-[10.31rem] left-[0.92rem] text-[0.22rem] leading-[0.3rem] font-normal text-[#fbfffc]">
            {t("m.relayDesc")}
          </p>
        </PhonePicture>
        <p
          className={cn(
            NOTE,
            "px-[0.57rem] pt-[0.5rem] pb-[0.6rem] text-[0.19rem] leading-[0.32rem] text-[#bfbfbf]",
          )}
        >
          {t("sec11.desc2")}
        </p>
        {/* the gateway, then Matter and its brands */}
        {band(
          "min-h-[5.43rem] pt-[0.58rem]",
          "sec12.title",
          "sec12.desc",
          "m.tag.gateway",
        )}
        <PhonePicture {...pic("p13", 5.43)} />
        {band(
          "min-h-[3.82rem] pt-[0.65rem]",
          "sec12.title2",
          "sec12.desc2",
          "m.tag.gateway",
        )}
        <PhonePicture {...pic("p14", 3.82, 10.6)} />
        <p
          className={cn(
            NOTE,
            "px-[0.57rem] pt-[0.2rem] pb-[0.5rem] text-[0.18rem]",
          )}
        >
          {t("sec12.desc3")}
        </p>
        {/* the back box, in two steps */}
        {band(
          "min-h-[3.9rem] pt-[0.57rem]",
          "sec13.title",
          "sec13.desc",
          "m.tag.box",
        )}
        <PhonePicture {...pic("p15", 3.9)}>
          {(
            [
              ["m.step1", "left-[3.17rem]"],
              ["m.step2", "left-[4.98rem]"],
            ] as const
          ).map(([step, at]) => (
            <p
              key={step}
              className={cn(
                "absolute top-[3.71rem] -translate-x-1/2 whitespace-nowrap text-[0.24rem] leading-[0.36rem] font-normal text-[#b5b5b5]",
                at,
              )}
            >
              {t(step)}
            </p>
          ))}
        </PhonePicture>
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
