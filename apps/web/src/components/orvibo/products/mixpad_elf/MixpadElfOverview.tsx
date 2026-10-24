import { cn } from "@v1/ui/utils";
import Image from "next/image";
import type { ReactNode } from "react";
import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import {
  productPageHelpers,
  withLineBreaks,
} from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { ElfBannerIntro } from "./ElfBannerIntro";

const ASSETS = "/orvibo/products/mixpad_elf";
const AVATARS = "/orvibo/products/mixpad_7";

/** A speech bubble on the sec1 voice card; one corner stays square, toward the speaker. */
const cardBubble =
  "absolute flex h-[0.51rem] items-center whitespace-nowrap rounded-[0.25rem] px-[0.24rem] text-[0.16rem] text-[#6b6b6b]";

const voiceWhite =
  "bg-[linear-gradient(90deg,#fcfdff,#ecf4ff)] font-medium text-[#222] shadow-[0_0.12rem_0.3rem_rgba(0,0,0,0.06)]";

interface Voice {
  /** Text key `sec5.voice.<key>`. */
  key: string;
  /** Position, height, padding and type size, measured from orvibo.com's strip. */
  className: string;
  /** A family member's bubble: avatar, name (`sec5.who.<who>`) and colours. */
  who?: { key: string; avatar: string; tone: string };
}

/** The speech bubbles of the sec5 strip, left to right as on orvibo.com. */
const voices: Voice[] = [
  {
    key: "window",
    className: `${voiceWhite} left-[0.55rem] top-[2.17rem] h-[0.7rem] px-[0.38rem] text-[0.18rem] opacity-[0.45]`,
  },
  {
    key: "acTemp",
    className: `${voiceWhite} left-[1.29rem] top-[3.33rem] h-[0.81rem] px-[0.24rem] text-[0.18rem]`,
  },
  {
    key: "alarm",
    className: `${voiceWhite} left-[2.19rem] top-[0.48rem] h-[0.7rem] px-[0.38rem] text-[0.18rem]`,
  },
  {
    key: "studyLight",
    className: "left-[3.55rem] top-[1.83rem] h-[0.93rem] text-[0.18rem]",
    who: {
      key: "grandpa",
      avatar: "voice-grandpa",
      tone: "bg-[linear-gradient(90deg,#40bebb,#25ada1)] shadow-[0_0.18rem_0.36rem_rgba(37,173,161,0.35)]",
    },
  },
  {
    key: "lightsWindow",
    className: "left-[4.77rem] top-[4.8rem] h-[0.79rem] text-[0.165rem]",
    who: {
      key: "daughter",
      avatar: "voice-daughter",
      tone: "bg-[linear-gradient(90deg,#fedfb4,#fed192)] shadow-[0_0.18rem_0.36rem_rgba(254,209,146,0.35)]",
    },
  },
  {
    key: "date",
    className: `${voiceWhite} left-[5.95rem] top-[6.1rem] h-[0.7rem] px-[0.43rem] text-[0.18rem]`,
  },
  {
    key: "nap",
    className: `${voiceWhite} left-[7.68rem] top-[3.6rem] h-[0.7rem] px-[0.27rem] text-[0.18rem]`,
  },
  {
    key: "weather",
    className: `${voiceWhite} left-[9.88rem] top-[0.28rem] h-[0.81rem] px-[0.44rem] text-[0.2rem]`,
  },
  {
    key: "lightsAc",
    className: `${voiceWhite} left-[10.92rem] top-[2.92rem] h-[0.7rem] px-[0.27rem] text-[0.18rem] opacity-[0.45]`,
  },
  {
    key: "allLights",
    className: "left-[12.17rem] top-[4.09rem] h-[0.84rem] text-[0.17rem]",
    who: {
      key: "mom",
      avatar: "voice-mom",
      tone: "bg-[linear-gradient(90deg,#ff7c47,#fe6338)] shadow-[0_0.18rem_0.36rem_rgba(254,99,56,0.3)]",
    },
  },
  {
    key: "car",
    className: "z-[1] left-[12.9rem] top-[1.8rem] h-[0.87rem] text-[0.176rem]",
    who: {
      key: "dad",
      avatar: "voice-dad",
      tone: "bg-[linear-gradient(90deg,#8e69ff,#7a61ff)] shadow-[0_0.18rem_0.36rem_rgba(122,97,255,0.35)]",
    },
  },
  {
    key: "music",
    className: `${voiceWhite} left-[13.33rem] top-[5.46rem] h-[0.82rem] px-[0.43rem] text-[0.2rem]`,
  },
  {
    key: "rack",
    className: `${voiceWhite} left-[15.19rem] top-[1.06rem] h-[0.8rem] px-[0.38rem] text-[0.2rem]`,
  },
  {
    key: "cleaning",
    className: `${voiceWhite} left-[16.37rem] top-[3.39rem] h-[0.69rem] px-[0.27rem] text-[0.18rem]`,
  },
];

/** One copy of the sec5 voice strip; the marquee shows it twice for a seamless loop. */
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
    <ul
      aria-hidden={hidden || undefined}
      className="relative h-[7.57rem] w-[20.46rem] shrink-0"
    >
      {voices.map(({ key, className, who }) => (
        <li
          key={key}
          className={cn(
            "absolute flex items-center whitespace-nowrap rounded-full",
            who &&
              "gap-[0.24rem] py-[0.07rem] pr-[0.48rem] pl-[0.07rem] text-white",
            who?.tone,
            className,
          )}
        >
          {who ? (
            <>
              <span className="flex aspect-square h-full shrink-0 items-center justify-center rounded-full bg-black/[0.12]">
                <Image
                  src={img(`${AVATARS}/${who.avatar}.webp`)}
                  alt=""
                  width={60}
                  height={60}
                  unoptimized
                  className="size-3/4 rounded-full object-cover"
                />
              </span>
              <span className="flex flex-col leading-[1.7]">
                <span className="text-[0.94em] opacity-90">
                  {t(`sec5.who.${who.key}`)}
                </span>
                <span className="font-semibold">{t(`sec5.voice.${key}`)}</span>
              </span>
            </>
          ) : (
            t(`sec5.voice.${key}`)
          )}
        </li>
      ))}
    </ul>
  );
}

/** A heading with one {word} set in the sec7 gradient. */
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

export function MixpadElfOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* elf */}
      <div id="overview" className="bg-[#f5f9fb]">
        {/* elf__banner s__bg */}
        <div className="bg-center bg-no-repeat bg-cover flex justify-center relative w-full h-[9.6rem] bg-white overflow-hidden">
          <ElfBannerIntro src="/8f4239b1vodgzp1251222210/79488f58387702292181358908/lpralLvHB30A.mp4">
            <div className="absolute top-[5.49rem] left-[3.72rem] z-[10] w-max">
              <div className="flex items-end gap-x-[0.12rem] font-extrabold text-black">
                <span className="text-[0.38rem]">
                  {t("elf_banner.title_big")}
                </span>
                <span className="pb-[0.04rem] text-[0.25rem]">
                  {t("elf_banner.title_small")}
                </span>
              </div>
              <div className="mt-[0.02rem] flex gap-x-[0.24rem] text-[0.36rem] font-semibold tracking-[0.03rem]">
                <span className="bg-[image:linear-gradient(316deg,rgb(59,132,192)_0px,rgb(128,123,212)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
                  {t("elf_banner.slogan_1")}
                </span>
                <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(316deg,rgb(255,159,229)_0px,rgb(160,121,221)_100%)]">
                  {t("elf_banner.slogan_2")}
                </span>
              </div>
            </div>
            <div
              className="bg-center animate-[spin_20s_ease-in-out_infinite] motion-reduce:animate-none bg-no-repeat bg-cover absolute top-[0.8rem] left-[9.4rem] w-[7.8rem] h-[7.8rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/banner-367e6f175d.webp",
              )}
            />
          </ElfBannerIntro>
        </div>
        {/* sec12 s__bg lazy */}
        <div className="h-[2.81rem] bg-white pt-[0.91rem]">
          <p className="mx-auto w-[10.8rem] text-[0.18rem] leading-[0.28rem] text-[#707070]">
            {t("sec12.note")}
          </p>
        </div>
        {/* sec1 */}
        <div className="pt-[1.64rem] pb-[1.5rem] bg-[#f5f9fb]">
          <div className="mx-auto flex flex-wrap w-[14.04rem]">
            <ProductReveal
              className="relative flex h-[3.85rem] bg-cover justify-center items-center w-[5.63rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/sec1_1-c62e2ddffa.webp",
              )}
            >
              <div className="text-white">
                <div className="text-[0.28rem] font-extrabold leading-[0.4rem]">
                  {t("sec1.item_title")}
                </div>
                <div className="mt-[0.04rem] text-[0.2rem] font-normal leading-[0.28rem]">
                  {t("sec1.item_desc")}
                </div>
              </div>
            </ProductReveal>
            <ProductReveal
              className="ml-[0.3rem] pl-[0.37rem] relative flex h-[3.85rem] bg-cover w-[8.11rem] items-center"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/sec1_2-b34f60a71e.webp",
              )}
            >
              <div>
                <div className="text-[0.28rem] font-extrabold leading-[0.4rem] text-[#002c53]">
                  {t("sec1.item_title2")}
                </div>
                <div className="mt-[0.04rem] text-[0.2rem] font-normal leading-[0.28rem] text-[#004453]">
                  {t("sec1.item_desc2")}
                </div>
              </div>
            </ProductReveal>
            <ProductReveal
              className="mt-[0.3rem] pt-[0.31rem] relative flex h-[3.85rem] bg-cover w-[5.63rem] justify-center"
              style={bg(`${ASSETS}/voice-card.webp`)}
            >
              <div>
                <div className="text-[0.28rem] font-extrabold leading-[0.4rem] text-black">
                  {t("sec1.item_title3")}
                </div>
              </div>
              <p
                className={cn(
                  cardBubble,
                  "left-[2.47rem] top-[2.22rem] rounded-br-none bg-[#fffedb]",
                )}
              >
                {t("sec1.bubble_curtains")}
              </p>
              <p
                className={cn(
                  cardBubble,
                  "left-[0.535rem] top-[2.605rem] rounded-bl-none bg-[#ffbfc2]/50",
                )}
              >
                {t("sec1.bubble_weather")}
              </p>
              <p
                className={cn(
                  cardBubble,
                  "right-[0.61rem] top-[3.04rem] rounded-bl-none bg-[#daf3ff]",
                )}
              >
                {t("sec1.bubble_bedroom")}
              </p>
            </ProductReveal>
            <ProductReveal
              className="mt-[0.3rem] ml-[0.3rem] pt-[0.27rem] pl-[0.31rem] relative flex h-[3.85rem] bg-cover w-[3.97rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/sec1_4-a33e59233d.webp",
              )}
            >
              <div>
                <div className="text-[0.28rem] font-extrabold leading-[0.4rem] text-[#725126]">
                  {t("sec1.item_title4")}
                </div>
                <div className="mt-[0.04rem] text-[0.2rem] font-normal leading-[0.28rem] text-[#725126]">
                  {t("sec1.item_desc3")}
                </div>
              </div>
            </ProductReveal>
            <ProductReveal
              className="mt-[0.3rem] ml-[0.3rem] pt-[0.27rem] pl-[0.31rem] relative flex h-[3.85rem] bg-cover w-[3.84rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/sec1_5-233f6fbab2.webp",
              )}
            >
              <div className="text-[#434343]">
                <div className="text-[0.28rem] font-extrabold leading-[0.4rem]">
                  {t("sec1.item_title5")}
                </div>
                <div className="mt-[0.04rem] text-[0.2rem] font-normal leading-[0.28rem]">
                  {t("sec1.item_desc4")}
                </div>
              </div>
            </ProductReveal>
          </div>
        </div>
        {/* sec2 video-box */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/8f4239b1vodgzp1251222210/7b9c0f58387702292181455865/sURTSrzIl2EA.mp4"
            className="w-full h-full aspect-[1920/960]"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/20">
            <OrviboWatchTrigger
              videoSrc="/8f4239b1vodgzp1251222210/b8d530503701925922089686932/KF4YduA6lP8A.mp4"
              className="mt-[0.3rem]"
              showPlayIcon={false}
            >
              <span
                className="pr-[0.41rem] relative inline-block text-white text-[0.24rem] font-medium leading-[0.34rem] cursor-pointer after:bg-center after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:w-[0.26rem] after:h-[0.26rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat"
                style={pseudoBg(
                  "after",
                  "/guanwang_second/front/images/new/products/mixpad_elf/icon_player-7fc7fa8ef7.webp",
                )}
              >
                {t("sec2.video_watch")}
              </span>
            </OrviboWatchTrigger>
          </div>
        </div>
        {/* sec3 */}
        <div className="pt-[1.27rem] pb-[2.14rem] flex-col flex items-center">
          <ProductReveal className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-[#111111]">
            {t("sec3.title")}
          </ProductReveal>
          <div className="mt-[1.23rem] flex">
            <div>
              <ProductReveal
                className="bg-center pt-[0.49rem] pl-[0.49rem] bg-no-repeat bg-cover w-[5.89rem] h-[6.15rem] text-[#07386b]"
                style={bg(
                  "/guanwang_second/front/images/new/products/mixpad_elf/sec3_1-deda6584f5.webp",
                )}
              >
                <div className="text-[0.42rem] font-extrabold leading-[0.56rem]">
                  {t("sec3.item_title")}
                </div>
                <div className="mt-[0.08rem] leading-[0.26rem] font-normal text-[0.17rem] max-w-[4rem]">
                  {t("sec3.item_desc")}
                </div>
              </ProductReveal>
              <ProductReveal
                className="bg-center mt-[0.3rem] pt-[0.49rem] pl-[0.49rem] bg-no-repeat bg-cover w-[5.89rem] h-[7.75rem] text-white"
                style={bg(
                  "/guanwang_second/front/images/new/products/mixpad_elf/sec3_3-8dcf74248a.webp",
                )}
              >
                <div className="text-[0.42rem] font-extrabold leading-[0.56rem]">
                  {t("sec3.item_title2")}
                </div>
                <div className="mt-[0.08rem] leading-[0.26rem] font-normal text-[0.17rem] max-w-[4rem]">
                  {t("sec3.item_desc2")}
                </div>
              </ProductReveal>
            </div>
            <div className="ml-[0.3rem]">
              <ProductReveal
                className="bg-center pt-[0.49rem] pl-[0.49rem] bg-no-repeat bg-cover w-[5.77rem] h-[7.7rem] text-[#5a4505]"
                style={bg(
                  "/guanwang_second/front/images/new/products/mixpad_elf/sec3_2-7a3ccbc8e8.webp",
                )}
              >
                <div className="text-[0.42rem] font-extrabold leading-[0.56rem]">
                  {t("sec3.item_title3")}
                </div>
                <div className="mt-[0.08rem] leading-[0.26rem] font-normal text-[0.17rem] max-w-[4rem]">
                  {t("sec3.item_desc3")}
                </div>
              </ProductReveal>
              <ProductReveal
                className="bg-center mt-[0.3rem] pt-[0.49rem] pl-[0.49rem] bg-no-repeat bg-cover w-[5.77rem] h-[6.2rem] text-[#5a4505]"
                style={bg(
                  "/guanwang_second/front/images/new/products/mixpad_elf/sec3_4-c106b7178a.webp",
                )}
              >
                <div className="text-[0.42rem] font-extrabold leading-[0.56rem]">
                  {t("sec3.item_title4")}
                </div>
                <div className="mt-[0.08rem] leading-[0.26rem] font-normal text-[0.17rem] max-w-[4rem]">
                  {t("sec3.item_desc4")}
                </div>
              </ProductReveal>
            </div>
          </div>
        </div>
        {/* sec4 */}
        <div className="pt-[1.07rem] pb-[1.03rem] bg-white">
          <ProductReveal className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-[#111111]">
            {t("sec4.title")}
          </ProductReveal>
          <div
            className="bg-center mx-auto mt-[0.8rem] mb-[0.6rem] bg-no-repeat bg-cover w-[16rem] h-[8.01rem]"
            style={bg(
              "/guanwang_second/front/images/new/products/mixpad_elf/sec4-c657298c1e.webp",
            )}
          />
          <div className="leading-[0.26rem] font-normal text-center text-[0.18rem] text-black">
            {t("sec4.remind")}
          </div>
        </div>
        {/* sec5 */}
        <div className="relative w-full h-[10.89rem] bg-[#eaedef] overflow-hidden">
          <div className="absolute top-[1.1rem] left-0 w-full z-[20]">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-[#111111]">
              {t("sec5.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] font-normal leading-[0.36rem] text-center text-black/70">
              {t("sec5.desc")}
            </div>
          </div>
          <div
            className="bg-center absolute top-[4.42rem] left-[7rem] z-[10] w-[5.95rem] h-[6.42rem] bg-cover bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/new/products/mixpad_elf/sec5_prd-453eb3645c.webp",
            )}
          >
            <div className="absolute top-[0.86rem] left-[0.12rem] w-[2.28rem] h-[2.28rem]">
              <MarketingVideo
                bare
                src="/8f4239b1vodgzp1251222210/ab700c555285890813689301677/CqzqDSSijEoA.mp4"
                className="w-full h-full aspect-[720/720]"
              />
            </div>
          </div>
          <div className="absolute w-[3.7rem] h-[3.7rem] top-[4.5rem] left-[7.02rem]">
            <div
              className="bg-center animate-bubble-ripple motion-reduce:animate-none bg-no-repeat bg-cover absolute top-0 left-0 w-[3.7rem] h-[3.7rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/sec5_bubble-0f87eb37ed.webp",
              )}
            />
            <div
              className="bg-center animate-bubble-ripple-wide motion-reduce:animate-none bg-no-repeat bg-cover absolute w-[5.32rem] h-[5.32rem] top-[-0.81rem] left-[-0.81rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/sec5_bubble1-0937f3c2f5.webp",
              )}
            />
            <div
              className="bg-center animate-bubble-ripple-wide motion-reduce:animate-none bg-no-repeat bg-cover absolute w-[6.8rem] h-[6.8rem] top-[-1.55rem] left-[-1.55rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/sec5_bubble2-f6b1ae4b31.webp",
              )}
            />
          </div>
          <div className="absolute top-[3.14rem] left-0 z-[5] w-full">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:37.7s] motion-reduce:animate-none">
              <VoiceStrip t={t} img={img} />
              <VoiceStrip t={t} img={img} hidden />
            </div>
          </div>
        </div>
        {/* sec6 */}
        <div className="pt-[1.35rem] pb-[1.5rem] flex-col bg-white flex items-center">
          <ProductReveal className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-[#111111]">
            {t("sec6.title")}
          </ProductReveal>
          <div className="mt-[1.64rem] relative w-[15.12rem]">
            <ProductReveal
              className="bg-center bg-no-repeat bg-cover w-[5.95rem] h-[8.78rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/sec6_1-568eadad1c.webp",
              )}
            />
            <ProductReveal
              className="bg-center bg-no-repeat bg-cover absolute top-[1.26rem] right-0 w-[8.62rem] h-[5.6rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/sec6_2-a4bbb47a1f.webp",
              )}
            />
            <ProductReveal
              className="bg-center mt-[2.94rem] bg-no-repeat bg-cover w-[8.62rem] h-[5.4rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/sec6_3-223014e9b7.webp",
              )}
            />
            <ProductReveal
              className="bg-center bg-no-repeat bg-cover absolute bottom-[1.16rem] right-0 w-[5.95rem] h-[8.08rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/mixpad_elf/sec6_4-d89d46655a.webp",
              )}
            />
          </div>
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/mixpad_elf/sec6_5-fdaf076235.webp",
            )}
            alt=""
            width={1920}
            height={920}
            unoptimized
            className="mt-[1.22rem] rounded-[0.2rem] align-middle w-[15.12rem]"
          />
        </div>
        {/* sec7 */}
        <div className="pt-[1.2rem] pb-[1.14rem]">
          <ProductReveal className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-[#111111]">
            <Highlight text={ts("sec7.title")} />
          </ProductReveal>
          <div className="mt-[0.3rem] text-[0.22rem] font-normal leading-[0.36rem] text-center text-black/70">
            {t("sec7.desc")}
          </div>
          <MarketingVideo
            bare
            src="/8f4239b1vodgzp1251222210/7b9bfe14387702292181455447/aiGManFYNAkA.mp4"
            className="mt-[0.84rem] w-full h-full aspect-[1920/764]"
          />
          <div className="mt-[0.8rem] text-center text-[0.22rem] font-normal leading-[0.3rem] text-black">
            {t("sec7.remind")}
          </div>
        </div>
        {/* sec9 video-box */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/8f4239b1vodgzp1251222210/7b89edb4387702292181445619/QdgPUHAkWp4A.mp4"
            className="w-full h-full aspect-[1920/960]"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/20 flex-col">
            <div className="mb-[0.3rem] text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white">
              {t("sec9.title")}
            </div>
            <OrviboWatchTrigger
              videoSrc="/8f4239b1vodgzp1251222210/bb073d163701925922089768883/2JYaKN2KrgIA.mp4"
              className="mt-[0.3rem]"
              showPlayIcon={false}
            >
              <span
                className="pr-[0.41rem] relative inline-block text-white text-[0.24rem] font-medium leading-[0.34rem] cursor-pointer after:bg-center after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:w-[0.26rem] after:h-[0.26rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat"
                style={pseudoBg(
                  "after",
                  "/guanwang_second/front/images/new/products/mixpad_elf/icon_player-7fc7fa8ef7.webp",
                )}
              >
                {t("sec9.video_watch")}
              </span>
            </OrviboWatchTrigger>
          </div>
        </div>
        {/* sec10 */}
        <div className="pt-[1.43rem]">
          <ProductReveal className="">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-[#111111]">
              {t("sec10.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] font-normal leading-[0.36rem] text-center text-black/70 max-w-[9.8rem] mx-auto">
              {t("sec10.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center mt-[0.46rem] bg-no-repeat bg-cover h-[7.37rem]"
            style={bg(
              "/guanwang_second/front/images/new/products/mixpad_elf/sec10-55a9dc58bd.webp",
            )}
          />
        </div>
      </div>
      {/* product_detail_tips */}
      <div className="p-[60px] bg-[#202020]">
        <p className="mx-auto max-w-[1200px] text-[14px] font-medium text-white/80 leading-[24px]">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
