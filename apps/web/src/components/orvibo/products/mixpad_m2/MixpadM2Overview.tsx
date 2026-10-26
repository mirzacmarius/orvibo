import { cn } from "@v1/ui/utils";
import Image from "next/image";
import type { ReactNode } from "react";
import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** Pills under the sec2 headline (text keys `sec2.<key>`). */
const upgrades = ["lights", "infrared", "load"];

const VOICE_AVATARS = "/orvibo/products";

interface VoicePill {
  /** Text key `sec5.voice.<key>`. */
  key: string;
  /** Fill, text colour and, for the shorter pills, height. */
  tone: string;
  /** Vertical offset inside its row, as on orvibo.com. */
  offset?: string;
  avatar?: string;
}

/** The two rows of voice commands in the sec5 marquee (measured from orvibo.com's strip). */
const voiceRows: VoicePill[][] = [
  [
    {
      key: "rack",
      tone: "h-[0.78rem] bg-[#1f2021] text-[#a4a4a4]",
      offset: "mt-[0.17rem]",
    },
    {
      key: "heater",
      tone: "bg-[linear-gradient(90deg,#087d97,#101c33)] text-white",
      offset: "mt-[0.3rem]",
      avatar: `${VOICE_AVATARS}/mixpad_7/voice-grandpa.webp`,
    },
    { key: "curtains", tone: "bg-[#373737] text-[#e3e3e3]" },
    {
      key: "bedroomLight",
      tone: "bg-[linear-gradient(90deg,#852c77,#371931)] text-white",
      offset: "mt-[0.25rem]",
      avatar: `${VOICE_AVATARS}/mixpad_7/voice-daughter.webp`,
    },
    { key: "movieNap", tone: "bg-[#505050] text-[#e6e6e6]" },
  ],
  [
    {
      key: "fan",
      tone: "bg-[linear-gradient(90deg,#0d4f4c,#061e13)] text-white",
      avatar: `${VOICE_AVATARS}/mixpad_7/voice-mom.webp`,
    },
    {
      key: "water",
      tone: "bg-[#17191c] text-[#9c9c9c]",
      offset: "mt-[0.13rem]",
    },
    {
      key: "movieNap",
      tone: "bg-[linear-gradient(90deg,#450f7c,#381a3e)] text-white",
      avatar: `${VOICE_AVATARS}/mixpad_7/voice-dad.webp`,
    },
    {
      key: "light",
      tone: "h-[0.8rem] bg-[#1d1d1d] text-[#bfbfbf]",
      offset: "mt-[0.08rem]",
    },
    {
      key: "ac",
      tone: "bg-[linear-gradient(90deg,#b07925,#221808)] text-white",
      avatar: `${VOICE_AVATARS}/mixpad_m2/voice-grandma.webp`,
    },
  ],
];

/** One copy of the voice-command strip; the marquee shows it twice for a seamless loop. */
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
      className="flex shrink-0 flex-col pr-[0.4rem]"
    >
      {voiceRows.map((row, index) => (
        <ul
          key={row[0]?.key}
          className={cn(
            "flex items-start justify-between gap-[0.4rem]",
            index === 0 ? "pl-[1.06rem]" : "mt-[0.18rem]",
          )}
        >
          {row.map((pill) => (
            <li
              key={pill.key}
              className={cn(
                "flex h-[0.88rem] shrink-0 items-center whitespace-nowrap rounded-full text-[0.2rem] font-medium",
                pill.avatar
                  ? "gap-[0.36rem] pr-[0.5rem] pl-[0.07rem]"
                  : "px-[0.45rem]",
                pill.tone,
                pill.offset,
              )}
            >
              {pill.avatar && (
                <span className="flex size-[0.75rem] shrink-0 items-center justify-center rounded-full bg-black/[0.12]">
                  <Image
                    src={img(pill.avatar)}
                    alt=""
                    width={60}
                    height={60}
                    unoptimized
                    className="size-[0.6rem] rounded-full object-cover"
                  />
                </span>
              )}
              {t(`sec5.voice.${pill.key}`)}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

/** A speech bubble over an intercom photo; the square corner points at the speaker. */
function SpeechBubble({
  className,
  reverse,
  children,
}: {
  className: string;
  /** Light end on the left (the bubble faces the other way). */
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "absolute flex h-[0.5rem] items-center whitespace-nowrap rounded-[0.25rem] px-[0.28rem] text-[0.2rem] font-medium text-white",
        reverse
          ? "bg-[linear-gradient(270deg,rgba(148,116,60,0.6),rgba(241,221,159,0.58))]"
          : "bg-[linear-gradient(90deg,rgba(148,116,60,0.6),rgba(241,221,159,0.58))]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function MixpadM2Overview({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* m2__container */}
      <div id="overview" className="bg-black">
        {/* m2__banner */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/products/mixpad_m2/banner-9316ca99ba.webp",
            )}
            alt=""
            width={1920}
            height={960}
            unoptimized
            className="align-middle w-full"
          />
          <div className="absolute top-[2.8rem] left-[2.96rem]">
            <div className="bg-clip-text [-webkit-text-fill-color:transparent] text-[0.72rem] font-semibold leading-[0.88rem] bg-[image:linear-gradient(136deg,rgb(95,111,251)_0px,rgb(161,106,230)_100%)]">
              {t("m2_banner.banner_title")}
            </div>
            <div className="mt-[0.32rem] text-[0.35rem] font-medium text-white">
              {t("m2_banner.banner_desc")}
            </div>
          </div>
        </div>
        {/* sec1 */}
        <div className="py-[1.36rem] w-full flex justify-center">
          <div className="w-[12.18rem] flex flex-wrap">
            <ProductReveal
              className="mr-[0.23rem] bg-no-repeat bg-cover h-[3.86rem] w-[3.42rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec1_1-91f9405791.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.23rem] [transition-delay:0.15s] bg-no-repeat bg-cover h-[3.86rem] w-[3.7rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec1_2-755abac415.webp",
              )}
            />
            <ProductReveal
              className="[transition-delay:0.25s] bg-no-repeat bg-cover h-[3.86rem] w-[4.6rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec1_3-eb35c499e4.webp",
              )}
            />
            <ProductReveal
              className="mt-[0.23rem] mr-[0.23rem] [transition-delay:0.15s] bg-no-repeat bg-cover h-[3.92rem] w-[8.25rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec1_4-d70d6e78ef.webp",
              )}
            />
            <ProductReveal
              className="mt-[0.23rem] [transition-delay:0.25s] bg-no-repeat bg-cover h-[3.92rem] w-[3.7rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec1_5-ab2f281d4f.webp",
              )}
            />
          </div>
        </div>
        {/* sec2 */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/products/mixpad_m2/sec2_bg-820187427a.webp",
            )}
            alt=""
            width={1920}
            height={1400}
            unoptimized
            className="align-middle w-full"
          />
          <ProductReveal className="[transition-delay:0.15s] absolute top-[2.72rem] left-[10.52rem]">
            <div className="text-left text-black text-[0.54rem] font-extrabold leading-[0.8rem] bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(171,213,255)_0px,rgb(173,226,251)_23%,rgb(255,226,226)_47%,rgb(170,190,255)_72%,rgb(193,235,253)_100%)]">
              {t("sec2.title")}
            </div>
            <div className="mt-[0.24rem] text-left text-[#e9f2ff] text-[0.22rem] font-medium leading-[0.4rem] max-w-[7.8rem]">
              {t("sec2.desc")}
            </div>
          </ProductReveal>
          <div className="absolute bottom-[1.19rem] left-1/2 -translate-x-1/2 w-[10.99rem] h-[2.26rem]">
            <Image
              src={img(
                "/guanwang_second/front/images/products/mixpad_m2/sec2_1-9f0c7b571c-notext.webp",
              )}
              alt=""
              width={1099}
              height={226}
              unoptimized
              className="align-middle w-full"
            />
            <ul className="absolute left-0 top-0 grid w-full grid-cols-3 gap-x-[0.62rem]">
              {upgrades.map((key) => (
                <li
                  key={key}
                  className="flex h-[1.3rem] items-center justify-center px-[0.16rem] text-center text-[0.22rem] font-semibold leading-[0.3rem] text-white"
                >
                  {t(`sec2.${key}`)}
                </li>
              ))}
            </ul>
            <div className="absolute left-1/2 top-[1.74rem] w-[13rem] -translate-x-1/2 text-center text-[0.14rem] leading-[0.28rem] text-white/75">
              {t("sec2.notes")}
            </div>
          </div>
        </div>
        {/* sec3 */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/products/mixpad_m2/sec3-7dd4d6e39a.webp",
            )}
            alt=""
            width={1920}
            height={960}
            unoptimized
            className="align-middle w-full"
          />
          <ProductReveal className="absolute left-[2.94rem] top-[1.61rem]">
            <div className="text-left text-[#fff5d2] text-[0.54rem] font-semibold leading-[0.8rem]">
              {t("sec3.title")}
            </div>
            <div className="mt-[0.12rem] text-left text-[#fff5d2] text-[0.22rem] font-medium leading-[0.4rem] max-w-[9rem]">
              {t("sec3.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec4 */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/products/mixpad_m2/sec4-8c71c7d080.webp",
            )}
            alt=""
            width={1920}
            height={1080}
            unoptimized
            className="align-middle w-full"
          />
          <div className="absolute left-0 top-[0.99rem] w-full">
            <ProductReveal className="">
              <div className="text-center text-black text-[0.54rem] font-extrabold leading-[0.8rem] bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(171,213,255)_0px,rgb(173,226,251)_23%,rgb(255,226,226)_47%,rgb(170,190,255)_72%,rgb(193,235,253)_100%)]">
                {t("sec4.title")}
              </div>
              <div className="mt-[0.3rem] text-center text-[#e9f2ff] text-[0.22rem] font-medium leading-[0.4rem]">
                {t("sec4.desc")}
              </div>
            </ProductReveal>
            <div className="mt-[0.42rem] w-full flex justify-center">
              <ProductReveal className="mr-[1.62rem] [transition-delay:0.15s] flex flex-col items-center">
                <div className="bg-clip-text [-webkit-text-fill-color:transparent] text-[0.24rem] font-extrabold leading-[0.32rem] bg-[image:linear-gradient(332deg,rgb(255,236,105)_0px,rgb(254,117,48)_100%)]">
                  {"9600+"}
                </div>
                <div className="mt-[0.08rem] text-[0.22rem] font-light text-[#e9f2ff]">
                  {t("sec4.item_desc")}
                </div>
              </ProductReveal>
              <ProductReveal className="[transition-delay:0.25s] flex flex-col items-center">
                <div className="bg-clip-text [-webkit-text-fill-color:transparent] text-[0.24rem] font-extrabold leading-[0.32rem] bg-[image:linear-gradient(332deg,rgb(255,236,105)_0px,rgb(254,117,48)_100%)]">
                  {t("sec4.item_title")}
                </div>
                <div className="mt-[0.08rem] text-[0.22rem] font-light text-[#e9f2ff]">
                  {t("sec4.item_desc2")}
                </div>
              </ProductReveal>
            </div>
          </div>
          <div className="absolute left-0 bottom-[0.72rem] w-full text-center text-[0.15rem] font-light text-white">
            {t("sec4.desc2")}
          </div>
        </div>
        {/* sec5 */}
        <div className="pt-[0.8rem] pb-[0.96rem] w-full relative overflow-hidden">
          <ProductReveal className="">
            <div className="text-center text-black text-[0.54rem] font-extrabold leading-[0.8rem] bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(171,213,255)_0px,rgb(173,226,251)_23%,rgb(255,226,226)_47%,rgb(170,190,255)_72%,rgb(193,235,253)_100%)]">
              {t("sec5.title")}
            </div>
            <div className="mt-[0.2rem] text-center text-[#e9f2ff] text-[0.22rem] font-medium leading-[0.4rem]">
              {t("sec5.desc")}
            </div>
          </ProductReveal>
          <div className="mt-[0.9rem] w-full overflow-hidden">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:44s] motion-reduce:animate-none">
              <VoiceStrip t={t} img={img} />
              <VoiceStrip t={t} img={img} hidden />
            </div>
          </div>
          <div className="mx-auto mt-[0.87rem] rounded-[0.25rem] w-[13.28rem] overflow-hidden">
            <MarketingVideo
              bare
              src="/orvibo/videos/mixpad_m2_lighting.mp4"
              className="w-full aspect-[1920/898]"
            />
          </div>
        </div>
        {/* sec6 */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/products/mixpad_m2/sec6-31151f66fd.webp",
            )}
            alt=""
            width={1920}
            height={960}
            unoptimized
            className="align-middle w-full"
          />
          <ProductReveal className="absolute left-0 top-[0.56rem] w-full">
            <div className="text-center text-black text-[0.54rem] font-extrabold leading-[0.8rem] bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(171,213,255)_0px,rgb(173,226,251)_23%,rgb(255,226,226)_47%,rgb(170,190,255)_72%,rgb(193,235,253)_100%)]">
              {t("sec6.title")}
            </div>
            <div className="mt-[0.2rem] text-center text-[#e9f2ff] text-[0.22rem] font-medium leading-[0.4rem]">
              {t("sec6.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec7 */}
        <div className="pt-[1.18rem] pb-[1.15rem] w-full flex justify-center">
          <div className="w-[13.32rem] relative">
            <Image
              src={img(
                "/guanwang_second/front/images/products/mixpad_m2/sec7-4b8d6ad5a7.webp",
              )}
              alt=""
              width={1332}
              height={727}
              unoptimized
              className="align-middle w-full"
            />
            <ProductReveal className="absolute left-[1.14rem] top-[1.92rem]">
              <div className="text-left text-black text-[0.54rem] font-extrabold leading-[0.8rem] bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(171,213,255)_0px,rgb(173,226,251)_23%,rgb(255,226,226)_47%,rgb(170,190,255)_72%,rgb(193,235,253)_100%)]">
                {t("sec7.title")}
              </div>
              <div className="mt-[0.2rem] text-left text-[#e9f2ff] text-[0.22rem] font-medium leading-[0.4rem] max-w-[5.8rem]">
                {t("sec7.desc")}
              </div>
            </ProductReveal>
          </div>
        </div>
        {/* sec8 */}
        <div className="relative">
          <ProductReveal className="absolute left-0 top-0 w-full">
            <div className="text-center text-black text-[0.54rem] font-extrabold leading-[0.8rem] bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(171,213,255)_0px,rgb(173,226,251)_23%,rgb(255,226,226)_47%,rgb(170,190,255)_72%,rgb(193,235,253)_100%)]">
              {t("sec8.title")}
            </div>
            <div className="mt-[0.2rem] text-center text-[#e9f2ff] text-[0.22rem] font-medium leading-[0.4rem]">
              {t("sec8.desc")}
            </div>
          </ProductReveal>
          <MarketingVideo
            bare
            src="/orvibo/videos/mixpad_m2_multi.mp4"
            className="w-full aspect-[1920/960]"
          />
          <div className="absolute left-[2.43rem] h-[50px] bottom-[0.25rem] whitespace-nowrap font-normal text-[18px] text-[#787878] leading-[40px]">
            {t("sec8.tips")}
          </div>
        </div>
        {/* sec9 */}
        <div className="pt-[1.31rem] flex flex-col items-center">
          <ProductReveal className="">
            <div className="text-center text-black text-[0.54rem] font-extrabold leading-[0.8rem] bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(171,213,255)_0px,rgb(173,226,251)_23%,rgb(255,226,226)_47%,rgb(170,190,255)_72%,rgb(193,235,253)_100%)]">
              {t("sec9.title")}
            </div>
            <div className="mt-[0.2rem] text-center text-[#e9f2ff] text-[0.22rem] font-medium leading-[0.4rem]">
              {t("sec9.desc")}
            </div>
          </ProductReveal>
          <div className="mt-[0.99rem] flex">
            <ProductReveal
              className="relative mr-[0.41rem] bg-no-repeat bg-cover w-[6.48rem] h-[5.36rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec9_1-b8b05f9ab1-notext.webp",
              )}
            >
              <SpeechBubble className="right-[2.69rem] top-[0.65rem] rounded-tr-none">
                {t("sec9.bubble_dinner")}
              </SpeechBubble>
            </ProductReveal>
            <ProductReveal
              className="relative [transition-delay:0.15s] bg-no-repeat bg-cover w-[6.49rem] h-[5.36rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec9_2-8ae3a53de6-notext.webp",
              )}
            >
              <SpeechBubble className="right-[4.32rem] top-[3.31rem] rounded-tr-none">
                {t("sec9.bubble_reply")}
              </SpeechBubble>
            </ProductReveal>
          </div>
        </div>
        {/* sec9 */}
        <div className="pt-[2rem] flex flex-col items-center">
          <ProductReveal className="">
            <div className="text-center text-black text-[0.54rem] font-extrabold leading-[0.8rem] bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(171,213,255)_0px,rgb(173,226,251)_23%,rgb(255,226,226)_47%,rgb(170,190,255)_72%,rgb(193,235,253)_100%)]">
              {t("sec9.title2")}
            </div>
            <div className="mt-[0.2rem] text-center text-[#e9f2ff] text-[0.22rem] font-medium leading-[0.4rem]">
              {t("sec9.desc2")}
            </div>
          </ProductReveal>
          <div className="mt-[0.99rem] flex">
            <ProductReveal
              className="relative mr-[0.36rem] bg-no-repeat bg-cover w-[7.56rem] h-[5.56rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec10_1-742f324ed0-notext.webp",
              )}
            >
              <SpeechBubble
                className="left-[2.18rem] top-[1.3rem] rounded-tl-none"
                reverse
              >
                {t("sec10.bubble_delivery")}
              </SpeechBubble>
            </ProductReveal>
            <ProductReveal
              className="relative [transition-delay:0.15s] bg-no-repeat bg-cover w-[5.41rem] h-[5.56rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec10_2-7367277175-notext.webp",
              )}
            >
              <SpeechBubble className="right-[4.06rem] top-[1.44rem] rounded-br-none">
                {t("sec10.bubble_reply")}
              </SpeechBubble>
              <SpeechBubble className="right-[0.79rem] top-[3.33rem] rounded-tr-none">
                {t("sec10.bubble_door")}
              </SpeechBubble>
            </ProductReveal>
          </div>
        </div>
        {/* sec11 */}
        <div className="pt-[1.9rem] pb-[0.72rem] flex flex-col items-center">
          <ProductReveal className="">
            <div className="text-center text-black text-[0.54rem] font-extrabold leading-[0.8rem] bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(171,213,255)_0px,rgb(173,226,251)_23%,rgb(255,226,226)_47%,rgb(170,190,255)_72%,rgb(193,235,253)_100%)]">
              {t("sec11.title")}
            </div>
            <div className="mt-[0.2rem] text-center text-[#e9f2ff] text-[0.22rem] font-medium leading-[0.4rem] max-w-[11.5rem] mx-auto">
              {t("sec11.desc")}
            </div>
          </ProductReveal>
          <div className="mt-[0.52rem] w-[13.3rem] flex flex-wrap">
            <ProductReveal
              className="mr-[0.27rem] bg-no-repeat bg-cover w-[9.01rem] h-[3.51rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec11_1-800c8536ab.webp",
              )}
            />
            <ProductReveal
              className="[transition-delay:0.15s] bg-no-repeat bg-cover w-[4.01rem] h-[3.51rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec11_2-d6d78cbb2d.webp",
              )}
            />
            <ProductReveal
              className="mt-[0.27rem] mr-[0.27rem] bg-no-repeat bg-cover w-[4.01rem] h-[3.51rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec11_3-8cd2d1a83a.webp",
              )}
            />
            <ProductReveal
              className="mt-[0.27rem] [transition-delay:0.15s] bg-no-repeat bg-cover w-[9.01rem] h-[3.51rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec11_4-5352ca5728.webp",
              )}
            />
          </div>
          <ProductReveal className="mt-[0.62rem] mx-auto max-w-[14.5rem] text-center text-[0.15rem] font-light text-white leading-[0.28rem]">
            {t("sec11.desc2")}
          </ProductReveal>
        </div>
        {/* sec12 s__bg lazy */}
        <div
          className="bg-no-repeat bg-cover relative w-full h-[20.4rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_m2/sec12-7067d6deb0.webp",
          )}
        >
          <div className="absolute left-0 top-[1.1rem] w-full flex flex-col items-center">
            <ProductReveal className="">
              <div className="text-center text-black text-[0.54rem] font-extrabold leading-[0.8rem] bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(171,213,255)_0px,rgb(173,226,251)_23%,rgb(255,226,226)_47%,rgb(170,190,255)_72%,rgb(193,235,253)_100%)]">
                {t("sec12.title")}
              </div>
              <div className="mt-[0.2rem] text-center text-[#e9f2ff] text-[0.22rem] font-medium leading-[0.4rem]">
                {t("sec12.desc")}
              </div>
            </ProductReveal>
            <ProductReveal
              className="mx-auto mt-[0.31rem] [transition-delay:0.25s] bg-no-repeat bg-cover w-[3.74rem] h-[0.87rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_m2/sec12_list-98b7a0c474.webp",
              )}
            />
          </div>
          <ProductReveal className="absolute left-0 bottom-[6.75rem] w-full">
            <div className="text-center text-black text-[0.54rem] font-extrabold leading-[0.8rem] bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(171,213,255)_0px,rgb(173,226,251)_23%,rgb(255,226,226)_47%,rgb(170,190,255)_72%,rgb(193,235,253)_100%)]">
              {t("sec12.title2")}
            </div>
            <div className="mt-[0.2rem] text-center text-[#e9f2ff] text-[0.22rem] font-medium leading-[0.4rem]">
              {t("sec12.desc2")}
            </div>
          </ProductReveal>
          <div className="text-center text-[0.15rem] font-light text-white absolute left-0 bottom-[0.65rem] w-full">
            {t("sec12.desc3")}
          </div>
        </div>
        {/* sec13 */}
        <div className="pt-[1.28rem] pb-[1.19rem] flex justify-center">
          <div className="relative w-[13.33rem]">
            <Image
              src={img(
                "/guanwang_second/front/images/products/mixpad_m2/sec13-036f5d3fbc.webp",
              )}
              alt=""
              width={1333}
              height={694}
              unoptimized
              className="align-middle w-full"
            />
            <ProductReveal className="absolute top-[2.56rem] left-[0.89rem]">
              <div className="text-[0.54rem] text-black font-semibold leading-[0.76rem]">
                {t("sec13.title")}
              </div>
              <div className="mt-[0.2rem] text-[0.22rem] font-normal text-black max-w-[4.8rem]">
                {t("sec13.desc")}
              </div>
            </ProductReveal>
          </div>
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
