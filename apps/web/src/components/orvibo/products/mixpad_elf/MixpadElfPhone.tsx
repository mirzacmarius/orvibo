import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { PhoneSwiper } from "@/components/orvibo/product/PhoneSwiper";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { TextImage } from "@/components/orvibo/product/TextImage";
import {
  productPageHelpers,
  withLineBreaks,
} from "@/components/orvibo/product/productPageHelpers";
import { localizedAssetPath } from "@/lib/orvibo/localizedAsset";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import Image from "next/image";
import type { ReactNode } from "react";
import { PHONE_WORDS } from "./pictureWords";

const FILMS = "/orvibo/products/mixpad_elf/phone";
const AVATARS = "/orvibo/products/mixpad_7";

/** A desktop line on one line: its breaks are the desktop layout's. */
const flat = (line: string) => line.replace(/\s*\n\s*/g, " ");

const bubble =
  "flex h-[0.76rem] shrink-0 items-center whitespace-nowrap rounded-full";
const whiteBubble =
  "bg-[linear-gradient(90deg,#f8fbff,#edf4ff)] px-[0.3rem] text-[0.2rem] font-medium text-[#222] shadow-[0_0.1rem_0.28rem_rgba(150,170,180,0.3)]";
/** The family's bubbles: avatar and words on the member's colours (the desktop strip's). */
const TONES = {
  grandpa:
    "bg-[linear-gradient(90deg,#40bebb,#25ada1)] shadow-[0_0.18rem_0.36rem_rgba(37,173,161,0.35)]",
  daughter:
    "bg-[linear-gradient(90deg,#fedfb4,#fed192)] shadow-[0_0.18rem_0.36rem_rgba(254,209,146,0.35)]",
  mom: "bg-[linear-gradient(90deg,#ff7c47,#fe6338)] shadow-[0_0.18rem_0.36rem_rgba(254,99,56,0.3)]",
  dad: "bg-[linear-gradient(90deg,#8e69ff,#7a61ff)] shadow-[0_0.18rem_0.36rem_rgba(122,97,255,0.35)]",
};

interface Voice {
  /** Text key: the desktop strip's sec5.voice.*, or the phone strip's own m.voice.*. */
  key: string;
  who?: keyof typeof TONES;
  /** Faded bubbles, smaller words. */
  className?: string;
}

/** orvibo.com's phone strip (a picture there), row by row and left to right. */
const VOICE_ROWS: { top: string; voices: Voice[] }[] = [
  {
    top: "top-[0.6rem]",
    voices: [
      { key: "sec5.voice.music", className: "opacity-[0.45]" },
      { key: "sec5.voice.rack" },
      { key: "m.voice.robot", who: "daughter" },
      { key: "sec5.voice.weather" },
    ],
  },
  {
    top: "top-[1.7rem]",
    voices: [
      { key: "m.voice.cleaning2" },
      { key: "sec5.voice.allLights", who: "mom" },
      { key: "sec5.voice.window", className: "opacity-[0.65]" },
      { key: "m.voice.fan", who: "grandpa" },
      { key: "m.voice.ok", className: "text-[0.18rem]" },
    ],
  },
  {
    top: "top-[2.92rem]",
    voices: [
      { key: "m.voice.acTemp2", className: "text-[0.18rem]" },
      { key: "m.voice.bedroom", who: "dad" },
      { key: "sec5.voice.cleaning" },
      { key: "sec5.voice.date", className: "opacity-[0.45]" },
    ],
  },
];

/** One copy of the voice strip; the marquee shows it twice for a seamless loop. Each row spreads its bubbles evenly
 * (as much space before the first as after the last), so the loop's joins look like the gaps between bubbles. */
function VoiceStrip({
  t,
  img,
  hidden,
}: {
  t: (key: string) => ReactNode;
  img: (path: string) => string;
  hidden?: boolean;
}) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="relative h-[4.52rem] w-[21rem] shrink-0"
    >
      {VOICE_ROWS.map(({ top, voices }) => (
        <ul
          key={top}
          className={cn("absolute inset-x-0 flex justify-around", top)}
        >
          {voices.map(({ key, who, className }) => (
            <li
              key={key}
              className={cn(
                bubble,
                who
                  ? cn(
                      "gap-[0.2rem] py-[0.07rem] pr-[0.36rem] pl-[0.07rem] text-[0.2rem] font-semibold text-white",
                      TONES[who],
                    )
                  : whiteBubble,
                className,
              )}
            >
              {who && (
                <span className="flex aspect-square h-full shrink-0 items-center justify-center rounded-full bg-black/[0.12]">
                  <Image
                    src={img(`${AVATARS}/voice-${who}.webp`)}
                    alt=""
                    width={60}
                    height={60}
                    unoptimized
                    className="size-3/4 rounded-full object-cover"
                  />
                </span>
              )}
              {t(key)}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

/** A heading with one {word} set in the colour section's gradient. */
function Highlight({ text }: { text: string }) {
  const match = /^([\s\S]*)\{([^}]+)\}([\s\S]*)$/.exec(text);
  if (!match) return withLineBreaks(text);
  const [, before, word, after] = match;
  return (
    <>
      {withLineBreaks(before ?? "")}
      <span className="bg-[image:linear-gradient(316deg,rgb(38,172,255)_0px,rgb(209,118,255)_100%)] bg-clip-text px-[0.02rem] [-webkit-text-fill-color:transparent]">
        {word}
      </span>
      {withLineBreaks(after ?? "")}
    </>
  );
}

/** The MixPad Elf page on phones: orvibo.com's phone page (/mobile/cn/product/mixpad_elf.html), its words in
 * Romanian and English, its pictures' words redrawn, its voice strip and renaming note in HTML, and its big GIFs as
 * films. */
export function MixpadElfPhone({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, pseudoBg, lines } = productPageHelpers(locale, text);
  /** One of the films cut from orvibo.com's GIFs, over its first frame; muted and looped while on screen. */
  const film = (name: string, poster: string) => (
    <MarketingVideo
      bare
      src={`${FILMS}/${name}.mp4`}
      poster={localizedAssetPath(poster, locale)}
      className="absolute inset-0 size-full object-cover"
    />
  );

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* mixpad_elf */}
      <div id="overview-phone" className="bg-[#f5f9f8]">
        {/* banner */}
        <div className="pt-[0.8rem] pb-[0.53rem] flex flex-col items-center w-full bg-white overflow-hidden">
          <div
            className="bg-center animate-[spin_20s_ease-in-out_infinite] motion-reduce:animate-none bg-no-repeat bg-cover w-[6.54rem] h-[6.54rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_elf/banner_logo-3b7a7604b0.webp",
            )}
          />
          <div
            className="bg-center mt-[0.64rem] bg-no-repeat bg-cover relative w-[6.18rem] h-[4.49rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_elf/banner_bg-2c858006ff.webp",
            )}
          >
            <div className="absolute top-[2.88rem] right-[0.24rem] w-max">
              <div className="flex items-end gap-x-[0.12rem] font-extrabold text-black">
                <span className="text-[0.32rem]">
                  {t("elf_banner.title_big")}
                </span>
                <span className="pb-[0.04rem] text-[0.192rem]">
                  {t("elf_banner.title_small")}
                </span>
              </div>
              <div className="mt-[0.02rem] flex gap-x-[0.2rem] text-[0.26rem] font-semibold tracking-[0.03rem]">
                <span className="bg-[image:linear-gradient(316deg,rgb(59,132,192)_0px,rgb(128,123,212)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
                  {t("elf_banner.slogan_1")}
                </span>
                <span className="bg-[image:linear-gradient(316deg,rgb(255,159,229)_0px,rgb(160,121,221)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
                  {t("elf_banner.slogan_2")}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* sec13 */}
        <div className="min-h-[2.42rem] bg-white pt-[0.74rem] pb-[0.6rem]">
          <p className="mx-auto w-[5.96rem] text-[0.2rem] leading-[0.3rem] text-[#707070]">
            {t("sec12.note")}
          </p>
        </div>
        {/* sec1 */}
        <div className="pt-[1rem] pb-[0.63rem]">
          <div className="mx-auto w-[7.2rem] h-[10.81rem] relative isolate">
            <TextImage
              picture={PHONE_WORDS.sec1}
              locale={locale}
              text={text}
              fit={{ size: "cover" }}
              className="absolute inset-0 -z-10"
            />
          </div>
        </div>
        {/* sec2 s__bg reload__gif reload__gif_reloading */}
        <div
          className="bg-center bg-no-repeat bg-cover relative flex justify-center items-center h-[8.7rem]"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec2-16baf9ac65.webp",
          )}
        >
          {film(
            "sec2",
            "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec2-16baf9ac65.webp",
          )}
          <OrviboWatchTrigger
            videoSrc="/8f4239b1vodgzp1251222210/b8d530503701925922089686932/KF4YduA6lP8A.mp4"
            className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            showPlayIcon={false}
          >
            <span
              className="pr-[0.58rem] text-white relative block whitespace-nowrap text-[0.256rem] leading-[0.44rem] font-medium after:bg-center after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[0.34rem] after:h-[0.34rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat"
              style={pseudoBg(
                "after",
                "/guanwang_second/front/mobile/images/new/product/mixpad_elf/icon_player-3d73f8e632.webp",
              )}
            >
              {t("sec2.video_watch")}
            </span>
          </OrviboWatchTrigger>
        </div>
        {/* sec3 */}
        <div className="pt-[1.2rem] pb-[1.26rem]">
          <ProductReveal className="text-[0.384rem] leading-[0.76rem] font-extrabold text-center text-black text-balance px-[5%]">
            {t("sec3.title")}
          </ProductReveal>
          <div className="mx-auto mt-[0.78rem] w-[6.65rem] h-[9.33rem] relative isolate">
            <TextImage
              picture={PHONE_WORDS.sec3}
              locale={locale}
              text={text}
              fit={{ size: "cover" }}
              className="absolute inset-0 -z-10"
            />
          </div>
        </div>
        {/* sec4 s__bg lazy */}
        <div className="pt-[1.2rem] relative h-[16rem] isolate">
          <TextImage
            picture={PHONE_WORDS.sec4}
            locale={locale}
            text={text}
            fit={{ size: "cover" }}
            className="absolute inset-0 -z-10"
          />
          <ProductReveal className="text-[0.384rem] leading-[0.76rem] font-extrabold text-center text-black text-balance px-[5%]">
            {t("sec4.title")}
          </ProductReveal>
          <div className="text-[0.176rem] leading-[0.3rem] text-black absolute left-0 bottom-[0.78rem] w-full text-center font-normal text-balance">
            {t("sec4.remind")}
          </div>
        </div>
        {/* sec5 */}
        <div className="relative h-[15.6rem] bg-[#eaedef] overflow-hidden">
          <ProductReveal className="absolute left-0 top-[1.2rem] w-full z-[4]">
            <div className="text-[0.384rem] leading-[0.76rem] font-extrabold text-center text-black text-balance px-[5%]">
              {t("sec5.title")}
            </div>
            <div className="px-[5%] mt-[0.3rem] text-[0.224rem] leading-[0.48rem] font-medium text-center text-black max-w-[7.9rem] mx-auto text-balance">
              {t("sec5.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center bg-no-repeat bg-cover absolute bottom-0 left-0 w-full h-[11.07rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec5-70965cd75e.gif",
            )}
          />
          <div className="absolute top-[5.53rem] left-0 z-[2] w-full">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:26s] motion-reduce:animate-none">
              <VoiceStrip t={t} img={img} />
              <VoiceStrip t={t} img={img} hidden />
            </div>
          </div>
        </div>
        {/* sec6 */}
        <div className="pt-[1.2rem] pb-[0.88rem] pl-[0.3rem] bg-white">
          <ProductReveal className="text-[0.384rem] leading-[0.76rem] font-extrabold text-center text-black text-balance px-[5%]">
            {t("sec6.title")}
          </ProductReveal>
          <PhoneSwiper
            className="mt-[0.8rem] h-[8.27rem]"
            slideClassName="!w-[6.35rem] pr-[0.3rem]"
            tone="dark"
            paginationClassName="bottom-0 left-0"
            slides={[
              {
                key: "1",
                content: (
                  <div
                    className="h-[7.61rem] overflow-hidden rounded-[0.2rem] bg-cover bg-center bg-no-repeat"
                    style={bg(
                      "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec6_1-18100e1cbd.webp",
                    )}
                  />
                ),
              },
              {
                key: "2",
                content: (
                  <div
                    className="h-[7.61rem] overflow-hidden rounded-[0.2rem] bg-cover bg-center bg-no-repeat"
                    style={bg(
                      "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec6_2-90ad1c8666.webp",
                    )}
                  />
                ),
              },
              {
                key: "3",
                content: (
                  <div
                    className="h-[7.61rem] overflow-hidden rounded-[0.2rem] bg-cover bg-center bg-no-repeat"
                    style={bg(
                      "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec6_3-8be1f1f96b.webp",
                    )}
                  />
                ),
              },
              {
                key: "4",
                content: (
                  <div
                    className="h-[7.61rem] overflow-hidden rounded-[0.2rem] bg-cover bg-center bg-no-repeat"
                    style={bg(
                      "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec6_4-e81746533f.webp",
                    )}
                  />
                ),
              },
            ]}
          />
        </div>
        {/* sec7 */}
        <div className="pt-[1.04rem] pb-[0.8rem]">
          <ProductReveal className="">
            <div className="text-[0.384rem] leading-[0.76rem] font-extrabold text-center text-black text-balance px-[5%]">
              <Highlight text={ts("sec7.title")} />
            </div>
            <div className="px-[5%] mt-[0.3rem] text-[0.224rem] leading-[0.48rem] font-medium text-center text-black max-w-[7.9rem] mx-auto text-balance">
              {t("sec7.desc")}
            </div>
          </ProductReveal>
          <div
            className="relative bg-center mt-[0.87rem] bg-no-repeat bg-cover h-[10.01rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec7-556afe7e14.webp",
            )}
          >
            {film(
              "sec7",
              "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec7-556afe7e14.webp",
            )}
          </div>
          <div className="mt-[0.64rem] text-[0.176rem] leading-[0.3rem] text-black w-full text-center font-medium opacity-[0.6] text-balance">
            {t("sec7.remind")}
          </div>
        </div>
        {/* sec9 */}
        <div className="pt-[0.74rem] bg-white">
          <ProductReveal className="">
            <div className="text-[0.384rem] leading-[0.76rem] font-extrabold text-center text-black text-balance px-[5%]">
              {t("m.timer.title")}
            </div>
            <div className="px-[5%] mt-[0.3rem] text-[0.224rem] leading-[0.48rem] font-medium text-center text-black max-w-[7.9rem] mx-auto text-balance">
              {t("m.timer.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center mt-[1.43rem] bg-no-repeat bg-cover relative h-[11.07rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec10-ee460bbdd1.webp",
            )}
          >
            {film(
              "sec9",
              "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec10-ee460bbdd1.webp",
            )}
            <div className="absolute left-0 top-0 z-[2] w-full h-full bg-black/20">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[4] flex flex-col justify-center items-center w-full px-[5%]">
                <div className="text-[0.384rem] leading-[0.76rem] font-extrabold text-center text-white text-balance">
                  {t("sec9.title")}
                </div>
                <OrviboWatchTrigger
                  videoSrc="/8f4239b1vodgzp1251222210/bb073d163701925922089768883/2JYaKN2KrgIA.mp4"
                  className="mt-[0.5rem] cursor-pointer"
                  showPlayIcon={false}
                >
                  <span
                    className="pr-[0.58rem] text-white relative block whitespace-nowrap text-[0.256rem] leading-[0.44rem] font-medium after:bg-center after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[0.34rem] after:h-[0.34rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat"
                    style={pseudoBg(
                      "after",
                      "/guanwang_second/front/mobile/images/new/product/mixpad_elf/icon_player-3d73f8e632.webp",
                    )}
                  >
                    {t("sec9.video_watch")}
                  </span>
                </OrviboWatchTrigger>
              </div>
            </div>
          </div>
        </div>
        {/* sec10 s__bg lazy */}
        <div
          className="bg-center pt-[1.2rem] bg-no-repeat bg-cover h-[15.32rem]"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_elf/sec11-2a82bfdf24.webp",
          )}
        >
          <ProductReveal className="">
            <div className="text-[0.384rem] leading-[0.76rem] font-extrabold text-center text-black text-balance px-[5%]">
              {t("sec10.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.224rem] leading-[0.48rem] font-medium text-center text-black max-w-[6.7rem] mx-auto text-balance">
              {flat(ts("sec10.desc"))}
            </div>
          </ProductReveal>
        </div>
      </div>
      {/* detail_tips */}
      <div className="px-[0.48rem] py-[0.6rem] w-full bg-[#202020]">
        <p className="text-[0.14rem] leading-[0.4rem] font-medium text-white/80 max-w-[19.5rem]">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
