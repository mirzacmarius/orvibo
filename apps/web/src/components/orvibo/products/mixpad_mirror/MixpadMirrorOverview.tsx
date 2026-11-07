import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { TextImage } from "@/components/orvibo/product/TextImage";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import Image from "next/image";
import type { ReactNode } from "react";
import { DESKTOP_WORDS } from "./pictureWords";

const AVATARS = "/orvibo/products/mixpad_7";

interface Voice {
  /** Text key `sec5.voice.<key>`. */
  key: string;
  /** Drop inside its row, height and type size, measured from orvibo.com's strip. */
  className: string;
  /** A family member's bubble: avatar, name (`sec5.who.<who>`) and colours. */
  who?: { key: string; avatar: string; tone: string };
}

const voiceWhite =
  "bg-[linear-gradient(90deg,#fafcff,#ecf4ff)] px-[0.4rem] font-medium text-[#222] shadow-[0_0.12rem_0.3rem_rgba(0,0,0,0.06)]";

/** The voice command strip (a picture on orvibo.com): two rows, left to right as there. */
const VOICE_ROWS: Voice[][] = [
  [
    {
      key: "curtains",
      className: `${voiceWhite} mt-[0.06rem] h-[0.87rem] text-[0.2rem]`,
    },
    {
      key: "music",
      className: `${voiceWhite} mt-[0.06rem] h-[0.87rem] text-[0.2rem]`,
    },
    {
      key: "lightsTimer",
      className: "mt-[0.02rem] h-[0.97rem] text-[0.19rem]",
      who: {
        key: "grandpa",
        avatar: "voice-grandpa",
        tone: "bg-[linear-gradient(90deg,#40aead,#23ab9f)] shadow-[0_0.18rem_0.36rem_rgba(37,173,161,0.35)]",
      },
    },
    {
      key: "lights",
      className: "h-[0.9rem] text-[0.19rem]",
      who: {
        key: "dad",
        avatar: "voice-dad",
        tone: "bg-[linear-gradient(90deg,#8461e5,#7860ff)] shadow-[0_0.18rem_0.36rem_rgba(122,97,255,0.35)]",
      },
    },
    {
      key: "weather",
      className: `${voiceWhite} mt-[0.32rem] h-[0.87rem] text-[0.2rem]`,
    },
  ],
  [
    { key: "shower", className: `${voiceWhite} h-[0.87rem] text-[0.2rem]` },
    {
      key: "makeup",
      className: "mt-[0.02rem] h-[0.82rem] text-[0.17rem]",
      who: {
        key: "daughter",
        avatar: "voice-daughter",
        tone: "bg-[linear-gradient(90deg,#fedbab,#f6cd91)] shadow-[0_0.18rem_0.36rem_rgba(254,209,146,0.35)]",
      },
    },
    {
      key: "bath",
      className: `${voiceWhite} mt-[0.27rem] h-[0.75rem] text-[0.18rem]`,
    },
    {
      key: "lightsOff",
      className: "mt-[0.27rem] h-[0.87rem] text-[0.18rem]",
      who: {
        key: "mom",
        avatar: "voice-mom",
        tone: "bg-[linear-gradient(90deg,#ff844c,#fd6238)] shadow-[0_0.18rem_0.36rem_rgba(254,99,56,0.3)]",
      },
    },
    {
      key: "cleaning",
      className: `${voiceWhite} mt-[0.35rem] h-[0.78rem] text-[0.18rem]`,
    },
  ],
];

/** One copy of the voice strip; the marquee shows it twice for a seamless loop. */
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
      className="flex shrink-0 flex-col pt-[0.72rem] pr-[0.6rem]"
    >
      {VOICE_ROWS.map((row, index) => (
        <ul
          key={row[0]?.key}
          className={cn(
            "flex items-start gap-x-[0.6rem]",
            index === 0 ? "pl-[0.77rem]" : "mt-[0.09rem] pl-[0.55rem]",
          )}
        >
          {row.map(({ key, className, who }) => (
            <li
              key={key}
              className={cn(
                "flex shrink-0 items-center whitespace-nowrap rounded-full",
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
                    <span className="font-semibold">
                      {t(`sec5.voice.${key}`)}
                    </span>
                  </span>
                </>
              ) : (
                t(`sec5.voice.${key}`)
              )}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

/** The three colour temperature cards; their words are in the pictures. */
const CARDS = [
  {
    photo: DESKTOP_WORDS.sec3_1,
    alt: "alt.warm",
  },
  {
    photo: DESKTOP_WORDS.sec3_2,
    alt: "alt.natural",
  },
  {
    photo: DESKTOP_WORDS.sec3_3,
    alt: "alt.cool",
  },
] as const;

/** The films in the two assistant panels, placed as on orvibo.com. */
const PANEL_FILMS = [
  [
    {
      src: "/orvibo/videos/mirror_owner.mp4",
      box: "top-[1.61rem] left-0 w-[4.6rem]",
      aspect: "aspect-[460/320]",
    },
    {
      src: "/orvibo/videos/mirror_light.mp4",
      box: "top-0 left-[1.69rem] w-[2.91rem]",
      aspect: "aspect-[290/140]",
    },
    {
      src: "/orvibo/videos/mirror_music.mp4",
      box: "bottom-0 left-0 w-[4.6rem]",
      aspect: "aspect-[458/336]",
    },
    {
      src: "/orvibo/videos/mirror_chuanglian2.mp4",
      box: "right-0 bottom-0 w-[3.14rem]",
      aspect: "aspect-[720/784]",
    },
  ],
  [
    {
      src: "/orvibo/videos/mirror_clock.mp4",
      box: "top-0 left-0 w-[3.56rem]",
      aspect: "aspect-[356/308]",
    },
    {
      src: "/orvibo/videos/mirror_temperature.mp4",
      box: "top-[4.65rem] right-0 w-[3.95rem]",
      aspect: "aspect-[388/114]",
    },
  ],
] as const;

/** The three rows under the assistant: photo and words, alternating sides. */
const ROWS = [
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_mirror/sec7_1-282cf976f9.webp",
    alt: "alt.music",
    title: "sec7.row_title",
    desc: "sec7.row_desc",
    remind: null,
    tone: "bg-[#f7e9e0] text-[#6b3c2b]",
    width: "max-w-[5.9rem]",
    photoFirst: true,
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_mirror/sec7_2-deaf352453.webp",
    alt: null,
    title: "sec7.row_title2",
    desc: "sec7.row_desc2",
    remind: "sec7.row_remind",
    tone: "bg-[#f3dbc6] text-[#ab6834]",
    width: "max-w-[5.9rem]",
    photoFirst: false,
  },
  {
    photo:
      "/guanwang_second/front/images/products/mixpad_mirror/sec7_3-29b848909b.webp",
    alt: null,
    title: "sec7.row_title3",
    desc: "sec7.row_desc3",
    remind: null,
    tone: "bg-[#e6f2ff] text-[#173656]",
    width: "max-w-[7rem]",
    photoFirst: true,
  },
] as const;

/** The second and third card come in a little later. */
const DELAYS = [
  "",
  "[transition-delay:0.15s]",
  "[transition-delay:0.25s]",
] as const;

const HERO_TITLE =
  "bg-[image:linear-gradient(103deg,rgb(116,99,91)_0px,rgb(82,67,60)_7%,rgb(42,26,19)_19%,rgb(171,107,76)_55%,rgb(235,155,116)_87%,rgb(255,249,245)_100%)] bg-clip-text text-[0.68rem] leading-[0.78rem] font-extrabold [-webkit-text-fill-color:transparent]";
const TITLE =
  "mx-auto max-w-[14rem] text-balance text-[0.54rem] leading-[0.76rem] font-extrabold text-black";
const DESC =
  "mx-auto mt-[0.3rem] max-w-[13rem] text-balance text-[0.26rem] leading-[0.36rem] font-medium text-black/70";
const NOTE =
  "mx-auto mt-[0.6rem] max-w-[14rem] text-center text-[0.18rem] leading-[0.36rem] font-normal text-black";
const PHOTO = "bg-cover bg-center bg-no-repeat";

export function MixpadMirrorOverview({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { t, ts, img, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview">
        {/* mirror__header: the speech bubbles are in the picture (translated) */}
        <section className="relative h-[9.56rem] w-full isolate">
          <TextImage
            picture={DESKTOP_WORDS.banner}
            locale={locale}
            text={text}
            fit={{ size: "cover" }}
            className="absolute inset-0 -z-10"
          />
          <div className="absolute top-[3.38rem] left-[2.29rem]">
            <h1>
              <span className="flex items-start">
                <span className={HERO_TITLE}>
                  {t("mirror_header.header_title")}
                </span>
                <span
                  role="img"
                  aria-label={ts("alt.model")}
                  className={cn(
                    "mt-[0.21rem] ml-[0.2rem] h-[0.35rem] w-[0.6rem] shrink-0",
                    PHOTO,
                  )}
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_mirror/banner-2d2eb816d2.svg",
                  )}
                />
              </span>
              {/* the gradient is stretched so the line ends in brown, as orvibo.com's shorter Chinese line does */}
              <span
                className={cn("block w-fit bg-[length:156%_100%]", HERO_TITLE)}
              >
                {t("mirror_header.header_title2")}
              </span>
            </h1>
            <p className="mt-[0.43rem] text-[0.29rem] leading-[0.45rem] font-medium tracking-[0.05rem] text-black/80">
              {t("mirror_header.header_desc")}
            </p>
          </div>
        </section>
        {/* sec1: orvibo.com's collage has three more photos, never published (missing on its server) */}
        <section className="flex justify-center bg-[#fffaf5]/65 pt-[1.7rem] pb-[1.81rem]">
          <div className="w-[8.1rem]">
            <ProductReveal className="h-[3.48rem] w-full">
              <div
                role="img"
                aria-label={ts("alt.sensor")}
                className="size-full relative isolate"
              >
                <TextImage
                  picture={DESKTOP_WORDS.sec1_03}
                  locale={locale}
                  text={text}
                  fit={{ size: "cover" }}
                  className="absolute inset-0 -z-10"
                />
              </div>
            </ProductReveal>
            <div className="mt-[0.3rem] flex">
              <ProductReveal className="h-[3.86rem] w-[3.84rem]">
                <div
                  role="img"
                  aria-label={ts("alt.lighting")}
                  className="size-full relative isolate"
                >
                  <TextImage
                    picture={DESKTOP_WORDS.sec1_04}
                    locale={locale}
                    text={text}
                    fit={{ size: "cover" }}
                    className="absolute inset-0 -z-10"
                  />
                </div>
              </ProductReveal>
              <ProductReveal className="ml-[0.3rem] h-[3.86rem] w-[3.96rem] [transition-delay:0.15s]">
                <div
                  role="img"
                  aria-label={ts("alt.defog")}
                  className="size-full relative isolate"
                >
                  <TextImage
                    picture={DESKTOP_WORDS.sec1_05}
                    locale={locale}
                    text={text}
                    fit={{ size: "cover" }}
                    className="absolute inset-0 -z-10"
                  />
                </div>
              </ProductReveal>
            </div>
          </div>
        </section>
        {/* sec2: the film, with a link to the full one */}
        <section className="relative bg-black">
          <MarketingVideo
            bare
            src="/orvibo/videos/mixpad_mirror_banner.mp4"
            className="block aspect-[1920/900] w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <OrviboWatchTrigger
              videoSrc="/orvibo/videos/mixpad_mirror.mp4"
              className="mt-[0.3rem]"
              showPlayIcon={false}
            >
              <span
                className="relative inline-block cursor-pointer pr-[0.41rem] text-[0.24rem] leading-[0.34rem] font-medium text-white after:absolute after:top-1/2 after:right-0 after:h-[0.26rem] after:w-[0.26rem] after:-translate-y-1/2 after:bg-[image:var(--after-bg)] after:bg-cover after:bg-center after:bg-no-repeat after:content-['']"
                style={pseudoBg(
                  "after",
                  "/guanwang_second/front/images/new/products/mixpad_elf/icon_player-7fc7fa8ef7.webp",
                )}
              >
                {t("sec2.video_watch")}
              </span>
            </OrviboWatchTrigger>
          </div>
        </section>
        {/* sec3: makeup light; the cards' words are in the pictures */}
        <section className="flex flex-col items-center bg-[#f6f6f6] pt-[1.2rem] pb-[1.25rem] text-center">
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec3.title")}</h2>
            <p className={DESC}>{t("sec3.desc")}</p>
          </ProductReveal>
          <div className="mt-[0.6rem] flex gap-x-[0.4rem]">
            {CARDS.map((card, i) => (
              <ProductReveal
                key={card.alt}
                className={cn("h-[8.16rem] w-[5.06rem]", DELAYS[i])}
              >
                <div
                  role="img"
                  aria-label={ts(card.alt)}
                  className="relative isolate size-full"
                >
                  <TextImage
                    picture={card.photo}
                    locale={locale}
                    text={text}
                    fit={{ size: "cover" }}
                    className="absolute inset-0 -z-10"
                  />
                </div>
              </ProductReveal>
            ))}
          </div>
          <p className={NOTE}>{t("sec3.desc2")}</p>
        </section>
        {/* sec4: defogging */}
        <section className="flex flex-col items-center pt-[1.2rem] pb-[1rem] text-center">
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec4.title")}</h2>
            <p className={DESC}>{t("sec4.desc")}</p>
          </ProductReveal>
          <ProductReveal className="mt-[0.8rem] h-[8.36rem] w-[14.4rem] [transition-delay:0.25s]">
            <div
              role="img"
              aria-label={ts("alt.sec4")}
              className={cn("size-full", PHOTO)}
              style={bg(
                "/guanwang_second/front/images/products/mixpad_mirror/sec4-7bbe88a6b1.webp",
              )}
            />
          </ProductReveal>
          <p className={NOTE}>{t("sec4.desc2")}</p>
        </section>
        {/* sec5: voice; the command strip is a marquee of pills */}
        <section className="flex flex-col items-center bg-[#f6f6f6] pt-[1.2rem] pb-[1.1rem] text-center">
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec5.title")}</h2>
            <p className={DESC}>{t("sec5.desc")}</p>
          </ProductReveal>
          <div className="mt-[0.72rem] h-[4.26rem] w-full overflow-hidden text-left">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:50s] motion-reduce:animate-none">
              <VoiceStrip t={t} img={img} />
              <VoiceStrip t={t} img={img} hidden />
            </div>
          </div>
          <ProductReveal className="h-[9.6rem] w-[16rem] [transition-delay:0.25s]">
            <div
              role="img"
              aria-label={ts("alt.sec5")}
              className={cn("size-full", PHOTO)}
              style={bg(
                "/guanwang_second/front/images/products/mixpad_mirror/sec5_2-4bcaff9cb7.webp",
              )}
            />
          </ProductReveal>
          <p className={NOTE}>{t("sec5.desc2")}</p>
        </section>
        {/* sec6: the assistant's cards; small films fill the gaps between them */}
        <section className="flex flex-col items-center pt-[1.2rem] pb-[1.07rem] text-center">
          <div>
            <h2 className={TITLE}>{t("sec6.title")}</h2>
            <p className={DESC}>{t("sec6.desc")}</p>
          </div>
          <div className="mt-[0.6rem] flex h-[8.5rem] gap-x-[0.24rem]">
            {(
              [
                {
                  photo:
                    "/guanwang_second/front/images/products/mixpad_mirror/sec6_1-9555a65b95.webp",
                  alt: "alt.sec6_1",
                  width: "w-[8.02rem]",
                },
                {
                  photo:
                    "/guanwang_second/front/images/products/mixpad_mirror/sec6_2-571e4e3f1c.webp",
                  alt: "alt.sec6_2",
                  width: "w-[7.68rem]",
                },
              ] as const
            ).map((panel, i) => (
              <div
                key={panel.alt}
                role="img"
                aria-label={ts(panel.alt)}
                className={cn("relative h-full", panel.width, PHOTO)}
                style={bg(panel.photo)}
              >
                {PANEL_FILMS[i]?.map((film) => (
                  <div
                    key={film.src}
                    className={cn(
                      "absolute overflow-hidden rounded-[0.2rem]",
                      film.box,
                    )}
                  >
                    <MarketingVideo
                      bare
                      src={film.src}
                      className={cn("block w-full", film.aspect)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className={NOTE}>{t("sec6.mirror_desc")}</p>
        </section>
        {/* sec7: music, the motion sensor and the coated glass */}
        <section className="w-full">
          {ROWS.map((row) => (
            <div
              key={row.title}
              className={cn(
                "flex h-[9rem] w-full",
                row.tone,
                !row.photoFirst && "flex-row-reverse",
              )}
            >
              {row.alt ? (
                <div
                  role="img"
                  aria-label={ts(row.alt)}
                  className={cn("h-full flex-1", PHOTO)}
                  style={bg(row.photo)}
                />
              ) : (
                <div
                  className={cn("h-full flex-1", PHOTO)}
                  style={bg(row.photo)}
                />
              )}
              <ProductReveal className="flex flex-1 flex-col items-center justify-center">
                <div>
                  <h2 className="text-[0.54rem] leading-[0.76rem] font-extrabold tracking-[0.01rem]">
                    {t(row.title)}
                  </h2>
                  <p
                    className={cn(
                      "mt-[0.3rem] text-[0.26rem] leading-[0.36rem] font-normal",
                      row.width,
                    )}
                  >
                    {t(row.desc)}
                  </p>
                  {row.remind && (
                    <p className="mt-[1.02rem] max-w-[5.6rem] text-[0.18rem] leading-[0.36rem] font-normal">
                      {t(row.remind)}
                    </p>
                  )}
                </div>
              </ProductReveal>
            </div>
          ))}
        </section>
        {/* sec8: moisture-proof */}
        <section className="flex flex-col items-center pt-[1.2rem] text-center">
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec8.title")}</h2>
            <p className={cn(DESC, "mb-[0.4rem]")}>{t("sec8.desc")}</p>
          </ProductReveal>
          <MarketingVideo
            bare
            src="/orvibo/videos/mixpad_mirror_moisture.mp4"
            className="block aspect-[1920/1200] w-full"
          />
        </section>
        {/* sec9: the connected bathroom; the words stay on the pink wall, left of the doorway */}
        <section
          className={cn("relative h-[10.72rem] w-full", PHOTO)}
          style={bg(
            "/guanwang_second/front/images/products/mixpad_mirror/sec9-d61d17664d.webp",
          )}
        >
          <ProductReveal className="absolute top-[2.96rem] left-[1.47rem] max-w-[5.5rem]">
            <h2 className="text-[0.54rem] leading-[0.76rem] font-extrabold text-white">
              {t("sec9.title")}
            </h2>
            <p className="mt-[0.3rem] text-[0.26rem] leading-[0.36rem] font-medium text-white/70">
              {t("sec9.desc")}
            </p>
          </ProductReveal>
          <p className="absolute bottom-[1.05rem] left-[1.47rem] max-w-[5.5rem] text-[0.18rem] leading-[0.27rem] font-normal text-white/60">
            {t("sec9.remind")}
          </p>
        </section>
        {/* sec10: design */}
        <section className="flex flex-col items-center pt-[1.2rem] pb-[2.11rem] text-center">
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec10.title")}</h2>
            <p className={DESC}>{t("sec10.desc")}</p>
          </ProductReveal>
          <div className="mt-[0.84rem] w-[16rem]">
            <ProductReveal
              className={cn("h-[8.4rem] w-full rounded-[0.2rem]", PHOTO)}
              style={bg(
                "/guanwang_second/front/images/products/mixpad_mirror/sec10_1-97e06393fd.webp",
              )}
            />
            <div className="mt-[0.8rem] flex items-start justify-between">
              <ProductReveal
                className={cn(
                  "h-[8.31rem] w-[7.53rem] rounded-[0.2rem]",
                  PHOTO,
                )}
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_mirror/sec10_2-888b252a78.webp",
                )}
              />
              <ProductReveal
                className={cn(
                  "h-[9.74rem] w-[7.53rem] rounded-[0.2rem] [transition-delay:0.15s]",
                  PHOTO,
                )}
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_mirror/sec10_3-084ae33eb5.webp",
                )}
              />
            </div>
          </div>
        </section>
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
