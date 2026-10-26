import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductFocusCarousel } from "@/components/orvibo/product/ProductFocusCarousel";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { ProductSceneTabs } from "@/components/orvibo/product/ProductSceneTabs";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { orviboRoutes } from "@/lib/orvibo/routes";
import Link from "next/link";

/** The sec11 chip looks: CN's light pills, and coloured ones with a face. */
const CHIP = {
  light:
    "px-[0.5rem] font-medium text-[#111111] bg-[image:linear-gradient(90deg,#f9fcff_0%,#eef6ff_100%)] shadow-[0_0.1rem_0.3rem_rgba(166,184,191,0.28)]",
  peach:
    "pl-[0.13rem] pr-[0.5rem] font-medium text-[#111111] bg-[image:linear-gradient(90deg,#fee3bc_0%,#fecf90_100%)] shadow-[0_0.14rem_0.4rem_rgba(110,62,10,0.7)]",
  orange:
    "pl-[0.13rem] pr-[0.5rem] font-semibold text-white bg-[image:linear-gradient(90deg,#ff814a_0%,#fe6238_100%)] shadow-[0_0.14rem_0.4rem_rgba(90,14,0,0.8)]",
  teal: "pl-[0.13rem] pr-[0.5rem] font-semibold text-white bg-[image:linear-gradient(90deg,#3fbdba_0%,#24aca0_100%)] shadow-[0_0.14rem_0.4rem_rgba(0,60,55,0.8)]",
  purple:
    "pl-[0.13rem] pr-[0.5rem] font-semibold text-white bg-[image:linear-gradient(90deg,#8860e8_0%,#7b61ff_100%)] shadow-[0_0.14rem_0.4rem_rgba(40,20,110,0.8)]",
};

type Chip = { chip: string; look: keyof typeof CHIP; avatar?: string };

/** The voice commands in CN's rows (sec11.chip1-13; the spotlight one twice). */
const CHIP_ROWS: Chip[][] = [
  [
    { chip: "chip1", look: "light" },
    { chip: "chip2", look: "light" },
    {
      chip: "chip3",
      look: "peach",
      avatar: "/guanwang_second/front/images/product/s/sec11_face1.webp",
    },
    { chip: "chip4", look: "light" },
  ],
  [
    { chip: "chip5", look: "light" },
    {
      chip: "chip6",
      look: "orange",
      avatar: "/guanwang_second/front/images/product/s/sec11_face2.webp",
    },
    { chip: "chip7", look: "light" },
    {
      chip: "chip8",
      look: "teal",
      avatar: "/guanwang_second/front/images/product/s/sec11_face3.webp",
    },
    { chip: "chip9", look: "light" },
  ],
  [
    { chip: "chip10", look: "light" },
    { chip: "chip11", look: "light" },
    {
      chip: "chip12",
      look: "purple",
      avatar: "/guanwang_second/front/images/product/s/sec11_face4.webp",
    },
    { chip: "chip13", look: "light" },
    { chip: "chip7", look: "light" },
  ],
];

/** The sec4 product strips, cropped to their photos. */
const STRIPS = {
  1: "/guanwang_second/front/images/product/s/sec4_4_1-bf79f5bb31.webp",
  2: "/guanwang_second/front/images/product/s/sec4_4_2-fa7ff872a9.webp",
  3: "/guanwang_second/front/images/product/s/sec4_4_3-b115376466.webp",
};

export function SoproSOverview({
  locale,
  base,
  text,
  common,
}: ProductViewProps) {
  const { t, ts, img, bg, pseudoBg, lines } = productPageHelpers(locale, text);
  /** CN's sales-lead buttons lead to the custom solutions page here. */
  const plan = orviboRoutes(base).service("customization");
  /** One copy of the sec11 voice commands: three rows of chips, the rows spread to one width. */
  const chips = (hidden = false) => (
    <div
      className="shrink-0 flex flex-col gap-[0.53rem] py-[0.02rem] pr-[0.57rem] pb-[0.64rem]"
      aria-hidden={hidden || undefined}
    >
      {CHIP_ROWS.map((row) => (
        <ul key={row[0]?.chip} className="flex justify-between gap-[0.57rem]">
          {row.map((item) => (
            <li
              key={item.chip}
              className={`flex items-center h-[0.88rem] rounded-full whitespace-nowrap text-[0.24rem] ${CHIP[item.look]}`}
            >
              {item.avatar && (
                <span
                  className="mr-[0.32rem] shrink-0 rounded-full bg-no-repeat bg-cover size-[0.6rem] ring-[0.09rem] ring-black/10"
                  style={bg(item.avatar)}
                />
              )}
              {t(`sec11.${item.chip}`)}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
  /** One copy of a sec4 strip; each row shows it twice for a seamless loop. */
  const strip = (row: 1 | 2 | 3, hidden = false) => (
    <div className="shrink-0 w-[21.91rem]" aria-hidden={hidden || undefined}>
      <div
        className="bg-no-repeat bg-cover h-[2.39rem]"
        style={bg(STRIPS[row])}
      />
      <ul className="mt-[0.13rem] grid grid-cols-5 text-center text-[0.18rem] leading-[0.26rem] font-normal text-white/60">
        {[1, 2, 3, 4, 5].map((n) => (
          <li key={n} className="px-[0.2rem]">
            {t(`sec4.row${row}.item${n}`)}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* sPage */}
      <div id="overview" className="bg-black overflow-hidden">
        {/* s__banner */}
        <div className="bg-black overflow-hidden relative w-full">
          <MarketingVideo
            bare
            src="/orvibo/videos/s_banner.mp4"
            className="w-full aspect-[1920/900]"
          />
          <div className="pb-[0.96rem] absolute left-0 top-0 z-[10] flex flex-col justify-center items-center w-full h-full bg-black/20 text-white">
            <div className="text-[0.32rem] leading-[0.48rem] font-normal tracking-[0.06rem]">
              {t("s_banner.video_desc")}
            </div>
            <div className="mt-[0.07rem] text-[0.54rem] leading-[0.76rem] font-extrabold tracking-[0.1rem]">
              {t("s_banner.video_title")}
            </div>
            <div className="mt-[0.8rem] flex flex-col items-center">
              <Link
                href={plan}
                className="rounded-[0.04rem] relative min-w-[1.99rem] px-[0.2rem] whitespace-nowrap opacity-[0.7] hover:opacity-100 text-center text-[0.16rem] leading-[0.4rem] font-normal text-white before:border before:border-white before:rounded-[0.04rem] before:absolute before:top-0 before:h-full before:content-[''] before:left-0 before:w-full before:z-[1] after:rounded-[0.04rem] after:absolute after:top-0 after:h-full after:content-[''] after:left-0 after:w-0 after:bg-[#007ff7] after:z-[5] after:transition-all after:duration-300 hover:after:w-full"
              >
                <span className="relative z-[10]">
                  {t("s_banner.btn_text")}
                </span>
              </Link>
              <OrviboWatchTrigger
                videoSrc="/8f4239b1vodgzp1251222210/3a80b318387702293679134921/0lwcQ5V5mQEA.mp4"
                showPlayIcon={false}
                className="mt-[0.23rem] cursor-pointer"
              >
                <span
                  className="pr-[0.26rem] relative inline-block text-[0.16rem] leading-[0.22rem] font-medium after:bg-center after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:w-[0.16rem] after:h-[0.16rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat"
                  style={pseudoBg(
                    "after",
                    "/guanwang_second/front/images/house_solution/icon_video-9cdc1f24f3.webp",
                  )}
                >
                  {t("s_banner.video_watch")}
                </span>
              </OrviboWatchTrigger>
            </div>
          </div>
        </div>
        {/* sec2 d__sec */}
        <div className="pt-[1.8rem] pb-[1.86rem] relative flex flex-col items-center">
          <div>
            <div className="mb-[0.3rem] flex">
              <ProductReveal
                className="mr-[0.28rem] bg-no-repeat bg-cover w-[6.84rem] h-[7.64rem]"
                style={bg(
                  "/guanwang_second/front/images/product/s/sec2_1-e22f5cd04f.webp",
                )}
              />
              <div>
                <ProductReveal
                  className="bg-no-repeat bg-cover w-[6.84rem] h-[2.97rem]"
                  style={bg(
                    "/guanwang_second/front/images/product/s/sec2_2-6ca31786f6.webp",
                  )}
                />
                <div className="mt-[0.3rem] flex">
                  <ProductReveal
                    className="mr-[0.28rem] bg-no-repeat bg-cover w-[3.28rem] h-[4.37rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/s/sec2_3-79f83af709.webp",
                    )}
                  />
                  <ProductReveal
                    className="[transition-delay:0.2s] bg-no-repeat bg-cover w-[3.28rem] h-[4.37rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/s/sec2_4-8525b62dc9.webp",
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex h-[3.91rem]">
              <ProductReveal
                className="mr-[0.28rem] bg-no-repeat bg-cover w-[3.28rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/s/sec2_6-d2c3677e61.webp",
                )}
              />
              <ProductReveal
                className="mr-[0.28rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[3.28rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/s/sec2_5-ac59cb5bc5.webp",
                )}
              />
              <ProductReveal
                className="[transition-delay:0.4s] bg-no-repeat bg-cover w-[6.84rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/s/sec2_7-dafea6225c.webp",
                )}
              />
            </div>
          </div>
        </div>
        {/* sec3 s__bg lazy */}
        <div
          className="bg-no-repeat bg-cover relative h-[10.8rem]"
          style={bg(
            "/guanwang_second/front/images/product/s/sec3-6ec8bb075a.webp",
          )}
        >
          <ProductReveal className="absolute left-[1.6rem] top-[1.92rem]">
            <div className="text-left font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[0.76rem] leading-[0.92rem] bg-[image:linear-gradient(305deg,rgb(255,255,255)_0px,rgb(255,255,255)_7%,rgb(245,250,252)_15%,rgb(252,249,199)_43%,rgb(255,218,191)_71%,rgb(235,250,242)_100%)]">
              {t("sec3.title")}
            </div>
            <div className="mt-[0.3rem] flex justify-between gap-[0.4rem] w-full text-left text-[0.34rem] leading-[0.52rem] tracking-[0.04rem] text-white">
              {ts("sec3.desc")
                .split("\n")
                .map((half) => (
                  <span key={half}>{half}</span>
                ))}
            </div>
          </ProductReveal>
        </div>
        {/* sec4 */}
        <div className="pt-[1.25rem] relative overflow-hidden">
          <ProductReveal className="mb-[0.8rem] text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
            {t("sec4.title")}
          </ProductReveal>
          <div className="mb-[0.31rem] overflow-hidden">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:86s] motion-reduce:animate-none">
              {strip(1)}
              {strip(1, true)}
            </div>
          </div>
          <div className="mb-[0.31rem] overflow-hidden">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:86s] [animation-direction:reverse] motion-reduce:animate-none">
              {strip(2)}
              {strip(2, true)}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:86s] motion-reduce:animate-none">
              {strip(3)}
              {strip(3, true)}
            </div>
          </div>
        </div>
        {/* sec5 */}
        <div className="pt-[2.69rem] pb-[1.36rem]">
          <ProductReveal className="">
            <div className="animate-gradient-drift [--drift:-6rem] [animation-duration:4s] motion-reduce:animate-none text-balance text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[1.1rem] leading-[1.22rem] bg-[image:linear-gradient(302deg,rgb(255,213,128)_0px,rgb(255,240,134)_18%,rgb(252,255,220)_39%,rgb(144,251,241)_59%,rgb(144,251,241)_82%,rgb(255,187,128)_100%)]">
              {t("sec5.title")}
            </div>
            <div className="mt-[1.76rem]">
              <div className="animate-gradient-drift [--drift:-6rem] [animation-duration:4s] motion-reduce:animate-none text-balance text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[0.48rem] leading-[0.64rem] bg-[image:linear-gradient(302deg,rgb(255,213,128)_0px,rgb(255,240,134)_18%,rgb(252,255,220)_39%,rgb(144,251,241)_59%,rgb(144,251,241)_82%,rgb(255,187,128)_100%)]">
                {t("sec5.info_title")}
              </div>
              <div className="mt-[0.8rem] text-center text-balance text-[0.28rem] leading-[0.48rem] font-normal text-white opacity-[0.7] max-w-[13.8rem] mx-auto">
                {t("sec5.info_desc")}
              </div>
            </div>
          </ProductReveal>
          <div className="mx-auto mt-[1rem] flex flex-wrap w-[16rem]">
            <ProductReveal
              className="mr-[0.41rem] mb-[0.45rem] relative rounded-[0.2rem] overflow-hidden bg-no-repeat bg-cover w-[5.06rem] h-[6.4rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec5_1-d80d70e70c.webp",
              )}
            >
              <div className="absolute inset-x-0 top-[4.2rem] bottom-0 flex items-center justify-center px-[0.3rem] pb-[0.28rem] bg-[#151515] text-center text-[0.22rem] leading-[0.36rem] font-medium text-white">
                {t("sec5.card1")}
              </div>
            </ProductReveal>
            <ProductReveal
              className="mr-[0.41rem] mb-[0.45rem] [transition-delay:0.2s] relative rounded-[0.2rem] overflow-hidden bg-no-repeat bg-cover w-[5.06rem] h-[6.4rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec5_2-0c933d7a0e.webp",
              )}
            >
              <div className="absolute inset-x-0 top-[4.2rem] bottom-0 flex items-center justify-center px-[0.3rem] pb-[0.28rem] bg-[#151515] text-center text-[0.22rem] leading-[0.36rem] font-medium text-white">
                {t("sec5.card2")}
              </div>
            </ProductReveal>
            <ProductReveal
              className="mb-[0.45rem] [transition-delay:0.4s] relative rounded-[0.2rem] overflow-hidden bg-no-repeat bg-cover w-[5.06rem] h-[6.4rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec5_3-60b795f2f4.webp",
              )}
            >
              <div className="absolute inset-x-0 top-[4.2rem] bottom-0 flex items-center justify-center px-[0.3rem] pb-[0.28rem] bg-[#151515] text-center text-[0.22rem] leading-[0.36rem] font-medium text-white">
                {t("sec5.card3")}
              </div>
            </ProductReveal>
            <ProductReveal
              className="mr-[0.41rem] relative rounded-[0.2rem] overflow-hidden bg-no-repeat bg-cover w-[5.06rem] h-[6.4rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec5_4-b4db8f63a4.webp",
              )}
            >
              <div className="absolute inset-x-0 top-[4.2rem] bottom-0 flex items-center justify-center px-[0.3rem] pb-[0.28rem] bg-[#151515] text-center text-[0.22rem] leading-[0.36rem] font-medium text-white">
                {t("sec5.card4")}
              </div>
            </ProductReveal>
            <ProductReveal
              className="mr-[0.41rem] [transition-delay:0.2s] relative rounded-[0.2rem] overflow-hidden bg-no-repeat bg-cover w-[5.06rem] h-[6.4rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec5_5-93a890e592.webp",
              )}
            >
              <div className="absolute inset-x-0 top-[4.2rem] bottom-0 flex items-center justify-center px-[0.3rem] pb-[0.28rem] bg-[#151515] text-center text-[0.22rem] leading-[0.36rem] font-medium text-white">
                {t("sec5.card5")}
              </div>
            </ProductReveal>
            <ProductReveal
              className="[transition-delay:0.4s] relative rounded-[0.2rem] overflow-hidden bg-no-repeat bg-cover w-[5.06rem] h-[6.4rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec5_6-aa4d5ef309.webp",
              )}
            >
              <div className="absolute inset-x-0 top-[4.2rem] bottom-0 flex items-center justify-center px-[0.3rem] pb-[0.28rem] bg-[#151515] text-center text-[0.22rem] leading-[0.36rem] font-medium text-white">
                {t("sec5.card6")}
              </div>
            </ProductReveal>
          </div>
        </div>
        {/* sec6 */}
        <div className="pt-[1.2rem]">
          <ProductReveal className="">
            <div className="pb-[2.8rem] animate-gradient-drift [--drift:-5.2rem] [animation-duration:5s] motion-reduce:animate-none text-balance text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[1.1rem] leading-[1.22rem] bg-[image:linear-gradient(310deg,rgb(255,224,123)_0px,rgb(254,242,196)_18%,rgb(247,127,127)_39%,rgb(253,229,157)_59%,rgb(253,225,145)_80%,rgb(255,248,213)_100%)]">
              {t("sec6.title")}
            </div>
          </ProductReveal>
          <div className="relative w-full">
            <MarketingVideo
              bare
              src="/orvibo/videos/s_cct.mp4"
              className="w-full aspect-[1920/1000]"
            />
            <ProductReveal className="absolute left-0 top-[1.2rem] z-[5] w-full">
              <div className="text-center text-white text-[0.48rem] leading-[0.76rem] font-extrabold">
                {t("sec6.title2")}
              </div>
              <div className="mt-[0.3rem] mx-auto max-w-[12.4rem] text-center text-balance text-[0.22rem] leading-[0.36rem] font-normal text-white">
                {t("sec6.video_desc")}
              </div>
            </ProductReveal>
          </div>
        </div>
        {/* sec7 */}
        <div className="pt-[0.2rem]">
          <div className="relative w-full">
            <ProductReveal className="absolute left-0 top-[1.2rem] z-[5] w-full">
              <div className="text-center text-white text-[0.48rem] leading-[0.76rem] font-extrabold">
                {t("sec7.title")}
              </div>
              <div className="mt-[0.3rem] mx-auto max-w-[12.4rem] text-center text-balance text-[0.22rem] leading-[0.36rem] font-normal text-white">
                {t("sec7.video_desc")}
              </div>
            </ProductReveal>
            <ProductSceneTabs
              className="z-[1] w-full"
              slides={[
                { key: "living", label: t("sec7.swiper_pagination_item") },
                { key: "dining", label: t("sec7.swiper_pagination_item2") },
                { key: "bedroom", label: t("sec7.swiper_pagination_item3") },
              ].map((scene) => ({
                ...scene,
                content: (
                  <MarketingVideo
                    bare
                    src={`/orvibo/videos/s_${scene.key}.mp4`}
                    className="w-full aspect-[1920/1000]"
                  />
                ),
              }))}
            />
          </div>
          <div className="px-[0.6rem] w-full">
            <MarketingVideo
              bare
              src="/orvibo/videos/s_fast_response.mp4"
              className="mt-[0.4rem] w-full aspect-[1800/744]"
            />
            <MarketingVideo
              bare
              src="/orvibo/videos/s_wide_cct.mp4"
              className="mt-[0.4rem] w-full aspect-[1800/744]"
            />
          </div>
        </div>
        {/* sec10 d__sec */}
        <div className="pt-[2.93rem] pb-[2.48rem] relative flex flex-col items-center">
          <ProductReveal className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
            {t("sec10.title")}
          </ProductReveal>
          <div className="mt-[1.6rem] flex">
            <div className="mr-[0.3rem] w-[5.89rem]">
              <ProductReveal
                className="pt-[0.57rem] pl-[0.48rem] bg-no-repeat bg-cover w-full h-[6.15rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec6_1-45d4aec7ed.webp",
                )}
              >
                <div className="w-full text-left text-[0.3rem] leading-[0.42rem] font-extrabold text-white">
                  {t("sec10.item_info")}
                </div>
              </ProductReveal>
              <ProductReveal
                className="mt-[0.28rem] pt-[1.17rem] bg-no-repeat bg-cover w-full h-[7.75rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec6_3-08744aed2d.webp",
                )}
              >
                <div className="w-full text-center text-[0.3rem] leading-[0.42rem] font-extrabold text-white">
                  {t("sec10.item_info2")}
                </div>
              </ProductReveal>
            </div>
            <div className="w-[5.77rem]">
              <ProductReveal
                className="pt-[0.57rem] bg-no-repeat bg-cover w-full h-[7.69rem]"
                style={bg(
                  "/guanwang_second/front/images/product/s/sec10_3-8e32a8607b.webp",
                )}
              >
                <div className="w-full text-center text-[0.3rem] leading-[0.42rem] font-extrabold text-white">
                  {t("sec10.item_info3")}
                </div>
              </ProductReveal>
              <ProductReveal
                className="mt-[0.29rem] pt-[0.42rem] bg-no-repeat bg-cover w-full h-[6.2rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec6_4-2ee7b8bc3a.webp",
                )}
              >
                <div className="w-full text-center text-[0.3rem] leading-[0.42rem] font-extrabold text-white">
                  {t("sec10.item_info4")}
                </div>
              </ProductReveal>
            </div>
          </div>
        </div>
        {/* sec11 d__sec */}
        <div className="pb-[0.6rem] relative flex flex-col items-center overflow-hidden">
          <ProductReveal className="">
            <div className="animate-gradient-drift [--drift:20rem] [animation-duration:4s] motion-reduce:animate-none text-balance text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[1.1rem] leading-[1.22rem] bg-[image:linear-gradient(312deg,rgb(103,207,255)_0px,rgb(139,153,255)_17%,rgb(139,158,255)_38%,rgb(147,185,255)_58%,rgb(113,221,255)_79%,rgb(167,166,254)_100%)]">
              {t("sec11.title")}
            </div>
            <div className="mt-[0.8rem] animate-gradient-drift [--drift:20rem] [animation-duration:4s] motion-reduce:animate-none text-balance text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[0.32rem] leading-[0.48rem] bg-[image:linear-gradient(312deg,rgb(103,207,255)_0px,rgb(139,153,255)_17%,rgb(139,158,255)_38%,rgb(147,185,255)_58%,rgb(113,221,255)_79%,rgb(167,166,254)_100%)]">
              {t("sec11.subtitle")}
            </div>
            <div className="mt-[0.84rem] text-center text-[0.28rem] leading-[0.48rem] font-medium text-white max-w-[9.9rem] mx-auto">
              {t("sec11.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-no-repeat bg-cover w-[3.2rem] h-[3.2rem]"
            style={bg(
              "/guanwang_second/front/images/product/s/sec11-f49b31b381.gif",
            )}
          />
          <div className="w-full overflow-hidden">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:96s] motion-reduce:animate-none">
              {chips()}
              {chips(true)}
            </div>
          </div>
          <div className="px-[0.6rem] relative w-full">
            <div className="rounded-[0.15rem] w-full overflow-hidden">
              <MarketingVideo
                bare
                src="/orvibo/videos/s_butler_wide.mp4"
                className="w-full aspect-[1800/800]"
              />
            </div>
            <div className="mt-[0.4rem] flex justify-between">
              <div className="mr-[0.32rem] rounded-[0.15rem] w-[12rem] overflow-hidden">
                <MarketingVideo
                  bare
                  src="/orvibo/videos/s_butler_panel.mp4"
                  className="w-full aspect-[1200/800]"
                />
              </div>
              <div className="rounded-[0.15rem] w-[5.6rem] overflow-hidden">
                <MarketingVideo
                  bare
                  src="/orvibo/videos/s_butler_panel_right.mp4"
                  className="w-full aspect-[560/800]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* sec13 */}
        <div className="pt-[4.2rem] pb-[1.73rem]">
          <ProductReveal className="">
            <div className="animate-gradient-drift [--drift:8rem] [animation-duration:5s] motion-reduce:animate-none text-balance text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[1.1rem] bg-[image:linear-gradient(295deg,rgb(255,173,126)_0px,rgb(255,241,216)_18%,rgb(255,255,255)_33%,rgb(255,212,164)_53%,rgb(252,55,30)_79%,rgb(255,180,137)_100%)]">
              {t("sec13.title")}
            </div>
          </ProductReveal>
          <ProductReveal className="mt-[2.08rem]">
            <div className="animate-gradient-drift [--drift:8rem] [animation-duration:5s] motion-reduce:animate-none text-balance text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[0.96rem] bg-[image:linear-gradient(295deg,rgb(255,173,126)_0px,rgb(255,241,216)_18%,rgb(255,255,255)_33%,rgb(255,212,164)_53%,rgb(252,55,30)_79%,rgb(255,180,137)_100%)]">
              {t("sec13.subtitle")}
            </div>
            <div className="mt-[0.63rem] text-center text-[0.28rem] leading-[0.48rem] font-normal text-white opacity-[0.7] max-w-[16.1rem] mx-auto">
              {t("sec13.desc")}
            </div>
          </ProductReveal>
          <ProductFocusCarousel
            look="sensor"
            className="mt-[0.81rem] pb-[0.6rem]"
            slides={[
              {
                key: "sensor",
                image: img(
                  "/guanwang_second/front/images/product/s/sec13_1-a06407767e.webp",
                ),
                title: t("sec13.slide_info"),
              },
              {
                key: "still",
                image: img(
                  "/guanwang_second/front/images/product/s/sec13_2-29ecc08128.webp",
                ),
                title: t("sec13.slide_info2"),
              },
              {
                key: "passing",
                image: img(
                  "/guanwang_second/front/images/product/s/sec13_3-ef72b3e026.webp",
                ),
                title: t("sec13.slide_info3"),
              },
              {
                key: "night",
                image: img(
                  "/guanwang_second/front/images/product/s/sec13_4-3a9e28d8c3.webp",
                ),
                title: t("sec13.slide_info4"),
              },
            ]}
          />
        </div>
        {/* sec14 d__sec */}
        <div className="pb-[0.9rem] relative flex flex-col items-center">
          <ProductReveal className="relative flex flex-col items-center">
            <div className="animate-gradient-drift [--drift:-6.8rem] [animation-duration:4.5s] motion-reduce:animate-none text-balance text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[0.96rem] bg-[image:linear-gradient(288deg,rgb(255,207,136)_0px,rgb(225,249,183)_10%,rgb(246,245,230)_31%,rgb(255,255,255)_47%,rgb(255,245,212)_59%,rgb(254,200,204)_76%,rgb(249,202,151)_91%,rgb(245,209,110)_100%)]">
              {t("sec14.title")}
            </div>
            <div className="mt-[0.3rem] animate-gradient-drift [--drift:-6.8rem] [animation-duration:4.5s] motion-reduce:animate-none text-balance text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[0.32rem] leading-[0.48rem] bg-[image:linear-gradient(286deg,rgb(255,207,136)_0px,rgb(229,248,192)_14%,rgb(249,235,205)_31%,rgb(255,255,255)_51%,rgb(254,242,225)_69%,rgb(253,200,194)_84%,rgb(245,204,110)_100%)]">
              {t("sec14.subtitle")}
            </div>
            <div className="mt-[0.5rem] text-center text-white text-[0.28rem] leading-[0.48rem] font-medium max-w-[18rem] mx-auto">
              {t("sec14.desc")}
            </div>
          </ProductReveal>
          <div className="mt-[1.36rem] rounded-[0.2rem] w-[18rem] overflow-hidden">
            <MarketingVideo
              bare
              src="/orvibo/videos/s_autolighting.mp4"
              className="w-full aspect-[1800/1000]"
            />
          </div>
        </div>
        {/* sec15 d__sec */}
        <div className="pt-[1.8rem] pb-[1.6rem] relative flex flex-col items-center overflow-hidden">
          <ProductReveal className="">
            <div className="animate-gradient-drift [--drift:-5.2rem] [animation-duration:5s] motion-reduce:animate-none text-balance text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[0.96rem] leading-[1.22rem] bg-[image:linear-gradient(281deg,rgb(171,213,255)_0px,rgb(229,238,255)_19%,rgb(255,244,214)_38%,rgb(253,240,235)_60%,rgb(174,252,255)_80%,rgb(194,209,255)_100%)]">
              {t("sec15.title")}
            </div>
          </ProductReveal>
          <div className="mt-[1.59rem] relative w-full h-[9.8rem]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 z-[5] flex">
              <div className="mr-[0.2rem] relative">
                <div className="mb-[0.2rem] bg-no-repeat bg-cover relative flex w-[2.74rem] h-[4.76rem]">
                  <MarketingVideo
                    bare
                    src="/orvibo/videos/sec15_1.mp4"
                    className="w-full aspect-[272/474]"
                  />
                </div>
                <div
                  className="bg-no-repeat bg-cover relative flex w-[2.74rem] h-[2.95rem]"
                  style={bg(
                    "/guanwang_second/front/images/product/s/sec15_2-8c2172da6c.webp",
                  )}
                />
              </div>
              <div className="mr-[0.2rem] relative">
                <div
                  className="mb-[0.2rem] bg-no-repeat bg-cover relative flex w-[6.21rem] h-[2.37rem]"
                  style={bg(
                    "/guanwang_second/front/images/product/s/sec15_3-d777adc44a.webp",
                  )}
                />
                <div className="mb-[0.2rem] relative flex">
                  <div
                    className="mr-[0.2rem] bg-no-repeat bg-cover relative w-[2.68rem] h-[3.2rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/s/sec15_4-7a89fad40b.webp",
                    )}
                  >
                    <MarketingVideo
                      bare
                      src="/orvibo/videos/sec15_4.mp4"
                      className="w-full aspect-[268/320]"
                    />
                  </div>
                  <div
                    className="mr-[0.2rem] bg-no-repeat bg-cover relative w-[1.13rem] h-[3.2rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/s/sec15_5-d8de8c5d92.webp",
                    )}
                  />
                  <div className="relative">
                    <div
                      className="mb-[0.2rem] bg-no-repeat bg-cover relative flex w-[1.99rem] h-[0.95rem]"
                      style={bg(
                        "/guanwang_second/front/images/product/s/sec15_6-ed5b45894a.webp",
                      )}
                    />
                    <div
                      className="bg-no-repeat bg-cover relative flex w-[1.99rem] h-[2.08rem]"
                      style={bg(
                        "/guanwang_second/front/images/product/s/sec15_7-3977c36921.webp",
                      )}
                    >
                      <MarketingVideo
                        bare
                        src="/orvibo/videos/sec15_7.mp4"
                        className="w-full aspect-[198/208]"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="bg-no-repeat bg-cover relative flex w-[6.21rem] h-[1.9rem]"
                  style={bg(
                    "/guanwang_second/front/images/product/s/sec15_8-b783d90f91.webp",
                  )}
                />
              </div>
              <div className="mr-[0.2rem] relative">
                <div
                  className="mb-[0.2rem] bg-no-repeat bg-cover relative flex w-[2.73rem] h-[2.98rem]"
                  style={bg(
                    "/guanwang_second/front/images/product/s/sec15_9-0ffa5fb8ab.webp",
                  )}
                >
                  <MarketingVideo
                    bare
                    src="/orvibo/videos/sec15_9.mp4"
                    className="w-full aspect-[272/298]"
                  />
                </div>
                <div
                  className="mb-[0.2rem] bg-no-repeat bg-cover relative flex w-[2.73rem] h-[2.8rem]"
                  style={bg(
                    "/guanwang_second/front/images/product/s/sec15_12-192fbdc931.webp",
                  )}
                />
                <div
                  className="bg-no-repeat bg-cover relative flex w-[2.73rem] h-[1.72rem]"
                  style={bg(
                    "/guanwang_second/front/images/product/s/sec15_15-2a52e06804.webp",
                  )}
                >
                  <MarketingVideo
                    bare
                    src="/orvibo/videos/sec15_15.mp4"
                    className="w-full aspect-[272/172]"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="mb-[0.2rem] relative flex">
                  <div
                    className="mr-[0.2rem] bg-no-repeat bg-cover relative w-[1.13rem] h-[2.98rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/s/sec15_10-54146ebf27.webp",
                    )}
                  />
                  <div
                    className="bg-no-repeat bg-cover relative w-[4.38rem] h-[2.98rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/s/sec15_11-8e308209d7.webp",
                    )}
                  />
                </div>
                <div className="mb-[0.2rem] relative flex">
                  <div
                    className="mr-[0.2rem] bg-no-repeat bg-cover relative w-[2.79rem] h-[2.8rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/s/sec15_13-0c43c07e73.webp",
                    )}
                  >
                    <MarketingVideo
                      bare
                      src="/orvibo/videos/sec15_13.mp4"
                      className="w-full aspect-[278/280]"
                    />
                  </div>
                  <div
                    className="bg-no-repeat bg-cover relative w-[2.72rem] h-[2.8rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/s/sec15_14-b761299c01.webp",
                    )}
                  />
                </div>
                <div className="relative flex">
                  <div className="mr-[0.2rem] relative">
                    <div
                      className="mb-[0.2rem] bg-no-repeat bg-cover relative flex w-[1.91rem] h-[0.76rem]"
                      style={bg(
                        "/guanwang_second/front/images/product/s/sec15_16-cfae3b40d8.webp",
                      )}
                    />
                    <div
                      className="bg-no-repeat bg-cover relative flex w-[1.91rem] h-[0.76rem]"
                      style={bg(
                        "/guanwang_second/front/images/product/s/sec15_17-4e3c9c4749.webp",
                      )}
                    />
                  </div>
                  <div
                    className="bg-no-repeat bg-cover relative w-[3.6rem] h-[1.72rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/s/sec15_18-683e3a291f.webp",
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <MarketingVideo
              bare
              src="/orvibo/videos/sec15_bg.mp4"
              className="w-full aspect-[1920/1100]"
            />
          </div>
        </div>
        {/* sec16 */}
        <div className="relative h-[19.91rem]">
          <div
            className="bg-no-repeat bg-cover h-[12rem]"
            style={bg(
              "/guanwang_second/front/images/product/s/sec16-316d641bbc.webp",
            )}
          />
          <ProductReveal className="absolute left-[1.65rem] top-[3.45rem]">
            <div className="text-[0.4rem] leading-[0.56rem] font-normal text-white tracking-[0.02rem]">
              {t("sec16.desc")}
            </div>
            <div className="mt-[0.4rem] text-left font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[0.96rem] leading-[1.22rem] bg-[image:linear-gradient(283deg,rgb(255,255,255)_0px,rgb(255,216,138)_49%,rgb(235,193,106)_81%,rgb(255,213,162)_100%)]">
              {t("sec16.title")}
            </div>
          </ProductReveal>
          <div className="absolute left-1/2 bottom-[2.06rem] -translate-x-1/2 flex flex-wrap w-[15.9rem]">
            <ProductReveal
              className="mr-[0.3rem] mb-[0.3rem] bg-no-repeat bg-cover w-[5.1rem] h-[3rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec16_1-1f881d8a54.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.3rem] mb-[0.3rem] bg-no-repeat bg-cover w-[5.1rem] h-[3rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec16_2-8a4e213116.webp",
              )}
            />
            <ProductReveal
              className="mb-[0.3rem] bg-no-repeat bg-cover w-[5.1rem] h-[3rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec16_3-dc2d53a961.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.3rem] bg-no-repeat bg-cover w-[5.1rem] h-[3rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec16_4-185f309cf0.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.3rem] bg-no-repeat bg-cover w-[5.1rem] h-[3rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec16_5-3aa6a0c46c.webp",
              )}
            />
            <ProductReveal
              className="bg-no-repeat bg-cover w-[5.1rem] h-[3rem]"
              style={bg(
                "/guanwang_second/front/images/product/s/sec16_6-946699a86a.webp",
              )}
            />
          </div>
        </div>
        {/* sec17 d__sec lazy s__bg */}
        <div
          className="pt-[1.68rem] relative flex flex-col items-center bg-no-repeat bg-cover h-[9rem]"
          style={bg(
            "/guanwang_second/front/images/product/s/sec17-354dd54616.webp",
          )}
        >
          <ProductReveal className="">
            <div className="text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[0.9rem] bg-[image:linear-gradient(279deg,rgb(255,237,207)_0px,rgb(179,148,107)_55%,rgb(219,184,142)_100%)]">
              {t("sec17.title")}
            </div>
            <div className="mt-[0.3rem] text-center font-semibold bg-clip-text [-webkit-text-fill-color:transparent] text-[0.32rem] leading-[0.48rem] bg-[image:linear-gradient(271deg,rgb(255,237,207)_0px,rgb(219,184,142)_100%)]">
              {t("sec17.desc")}
            </div>
          </ProductReveal>
          <ProductReveal className="mt-[2.74rem] flex flex-col items-center">
            <Link
              href={plan}
              className="block rounded-[0.14rem] min-w-[3.06rem] px-[0.3rem] h-[0.78rem] bg-[image:linear-gradient(176deg,rgb(255,222,183)_0px,rgb(207,159,100)_100%)] overflow-hidden text-center text-[0.23rem] leading-[0.78rem] font-normal text-[#1d1000]"
            >
              {t("sec17.btn")}
            </Link>
            <div className="mt-[0.25rem] text-[0.24rem] font-normal text-white tracking-[0.02rem]">
              {t("sec17.remind")}
            </div>
          </ProductReveal>
        </div>
      </div>
      {/* product_detail_tips */}
      <div className="p-[60px] bg-[#202020]">
        <p className="mx-auto max-w-[1200px] text-[14px] leading-[24px] font-medium text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
