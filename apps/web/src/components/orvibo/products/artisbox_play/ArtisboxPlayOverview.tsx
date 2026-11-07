import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { TextImage } from "@/components/orvibo/product/TextImage";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import Image from "next/image";
import { DESKTOP_WORDS } from "./pictureWords";

/** The six features under the hero, three to a row. */
const FEATURES = [
  {
    icon: "/guanwang_second/front/images/products/artisbox_play/sec1_1-4317f3be49.webp",
    text: "sec0.item_text",
  },
  {
    icon: "/guanwang_second/front/images/products/artisbox_play/sec1_2-4913ca8652.webp",
    text: "sec0.item_text2",
  },
  {
    icon: "/guanwang_second/front/images/products/artisbox_play/sec1_3-71f7d1f55f.webp",
    text: "sec0.item_text3",
  },
  {
    icon: "/guanwang_second/front/images/products/artisbox_play/sec1_4-434e43d1e7.webp",
    text: "sec0.item_text4",
  },
  {
    icon: "/guanwang_second/front/images/products/artisbox_play/sec1_5-fb687a4bf9.webp",
    text: "sec0.item_text5",
  },
  {
    icon: "/guanwang_second/front/images/products/artisbox_play/sec1_6-d49f7dd641.webp",
    text: "sec0.item_text6",
  },
] as const;

/** The second and third column (and card) come in a little later. */
const DELAYS = [
  "",
  "[transition-delay:0.15s]",
  "[transition-delay:0.25s]",
] as const;

/** The three drivers under the three-way speakers film. */
const DRIVERS = [
  { name: "sec3.item_title", power: "sec3.item_value" },
  { name: "sec3.item_title2", power: "sec3.item_value2" },
  { name: "sec3.item_title3", power: "sec3.item_value2" },
] as const;

/** The four colour cards, two rows of a wide and a narrow photo. */
const COLORS = [
  [
    {
      photo:
        "/guanwang_second/front/images/products/artisbox_play/sec4_01-e0363e20e9.webp",
      name: "sec5.info_title",
      desc: "sec5.info_desc",
      card: "w-[8.25rem]",
      height: "h-[6.22rem]",
      color: "text-[#5d0a01] before:bg-[#5d0a01]",
    },
    {
      photo:
        "/guanwang_second/front/images/products/artisbox_play/sec4_02-d984f77205.webp",
      name: "sec5.info_title2",
      desc: "sec5.info_desc2",
      card: "ml-[1.2rem] w-[4.95rem]",
      height: "h-[6.22rem]",
      color: "text-[#5b4e40] before:bg-[#5b4e40]",
    },
  ],
  [
    {
      photo:
        "/guanwang_second/front/images/products/artisbox_play/sec4_03-2b0646facb.webp",
      name: "sec5.info_title3",
      desc: "sec5.info_desc3",
      card: "w-[4.97rem]",
      height: "h-[6.27rem]",
      color: "text-[#263a52] before:bg-[#263a52]",
    },
    {
      photo:
        "/guanwang_second/front/images/products/artisbox_play/sec4_04-d6fc551b52.webp",
      name: "sec5.info_title4",
      desc: "sec5.info_desc4",
      card: "ml-[1.18rem] w-[8.27rem]",
      height: "h-[6.27rem]",
      color: "text-[#aa5c38] before:bg-[#aa5c38]",
    },
  ],
] as const;

/** The three listening scenes: photo left or right of the words. */
const SCENES = [
  {
    photo:
      "/guanwang_second/front/images/products/artisbox_play/sec7_1-8328919b18.webp",
    size: "h-[4.73rem] w-[8.04rem]",
    room: "sec9.info_name",
    mode: "sec9.title2",
    desc: "sec9.desc2",
    alt: null,
    photoFirst: true,
  },
  {
    photo:
      "/guanwang_second/front/images/products/artisbox_play/sec7_2-417c1a6f39.webp",
    size: "h-[4.91rem] w-[8.15rem]",
    room: "sec9.info_name2",
    mode: "sec9.title3",
    desc: "sec9.desc3",
    alt: null,
    photoFirst: false,
  },
  {
    photo:
      "/guanwang_second/front/images/products/artisbox_play/sec7_3-a3c3669ccc.webp",
    size: "h-[4.89rem] w-[8.18rem]",
    room: "sec9.info_name3",
    mode: "sec9.title4",
    desc: "sec9.desc4",
    alt: "alt.party",
    photoFirst: true,
  },
] as const;

const TITLE = "text-[0.48rem] leading-[0.76rem] font-extrabold";
const TEXT = "text-[0.2rem] leading-[0.32rem] font-medium";
const PHOTO = "bg-cover bg-no-repeat";

export function ArtisboxPlayOverview({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview">
        {/* artisbox__banner: the title and the hand-written motto are pictures (translated) */}
        <section
          className={cn("relative h-[8.58rem] w-full", PHOTO)}
          style={bg(
            "/guanwang_second/front/images/products/artisbox_play/banner-d830e80826.webp",
          )}
        >
          <div className="absolute top-[1.68rem] left-[3.28rem]">
            <h1
              className={cn("h-[1.58rem] w-[5.45rem]", PHOTO)}
              style={bg(
                "/guanwang_second/front/images/products/artisbox_play/bg_logo-c358e96256.webp",
              )}
            >
              <span className="sr-only">{t("hero.title")}</span>
            </h1>
            <p
              className={cn("mt-[0.28rem] h-[0.78rem] w-[6.24rem]", PHOTO)}
              style={bg(
                "/guanwang_second/front/images/products/artisbox_play/bg_motto-219c247c21.webp",
              )}
            >
              <span className="sr-only">{t("hero.motto")}</span>
            </p>
            <div
              role="img"
              aria-label={ts("alt.award_if")}
              className={cn("mt-[0.22rem] h-[0.45rem] w-[0.87rem]", PHOTO)}
              style={bg(
                "/guanwang_second/front/images/products/artisbox_play/banner_logo-6a4bdd8d3e.webp",
              )}
            />
          </div>
        </section>
        {/* sec0: six features; the columns keep orvibo.com's centres, 3.9rem wide for the longer words */}
        <section className="flex h-[5.93rem] items-center justify-center bg-[#f8f8f8]">
          <ul className="grid w-[12.82rem] grid-cols-3 gap-x-[0.56rem] gap-y-[0.9rem]">
            {FEATURES.map((feature, i) => (
              <li key={feature.text}>
                <ProductReveal
                  className={cn("flex flex-col items-center", DELAYS[i % 3])}
                >
                  <div
                    className={cn("h-[0.9rem] w-[0.9rem]", PHOTO)}
                    style={bg(feature.icon)}
                  />
                  <p className="mt-[0.1rem] text-center text-[0.24rem] leading-[0.4rem] font-extrabold text-black">
                    {t(feature.text)}
                  </p>
                </ProductReveal>
              </li>
            ))}
          </ul>
        </section>
        {/* sec2: the cabinet */}
        <section className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/products/artisbox_play/sec2-7d9edda2ba.webp",
            )}
            alt=""
            width={1920}
            height={1014}
            unoptimized
            className="w-full align-middle"
          />
          <ProductReveal className="absolute top-[2.7rem] left-[2.57rem] text-white [transition-delay:0.25s]">
            <h2 className={TITLE}>{t("sec2.title")}</h2>
            <ProductReveal className={cn("mt-[0.13rem] max-w-[6.2rem]", TEXT)}>
              <p>{t("sec2.desc")}</p>
            </ProductReveal>
          </ProductReveal>
        </section>
        {/* sec3: three-way speakers, over a film */}
        <section className="relative bg-black">
          <MarketingVideo
            bare
            src="/8f4239b1vodgzp1251222210/94392a935285890818162959620/fmbaMVmrb0IA.mp4"
            className="block aspect-[1920/960] w-full"
          />
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-center text-white">
            <ProductReveal className="">
              <h2 className={TITLE}>{t("sec3.title")}</h2>
              <p
                className={cn(
                  "mx-auto mt-[0.2rem] max-w-[10rem] text-balance",
                  TEXT,
                )}
              >
                {t("sec3.desc")}
              </p>
            </ProductReveal>
            <ProductReveal className="mt-[0.96rem] [transition-delay:0.15s]">
              <dl className="flex justify-center gap-x-[1.03rem]">
                {DRIVERS.map((driver) => (
                  <div key={driver.name} className="flex flex-col items-center">
                    <dt className="text-[0.3rem] font-extrabold">
                      {t(driver.name)}
                    </dt>
                    <dd className="mt-[0.1rem] text-[0.2rem] font-medium">
                      {t(driver.power)}
                    </dd>
                  </div>
                ))}
              </dl>
            </ProductReveal>
          </div>
        </section>
        {/* sec4: the drivers' magnets and the DSP */}
        <section className="flex justify-center bg-[#f8f8f8] pt-[1.51rem] pb-[1.39rem] text-black">
          <div className="relative h-[14.98rem] w-[14.4rem]">
            <div className="flex">
              <ProductReveal
                className={cn("h-[8.45rem] w-[6.56rem] shrink-0", PHOTO)}
                style={bg(
                  "/guanwang_second/front/images/products/artisbox_play/sec3_01-5105d6b1d8.webp",
                )}
              />
              <ProductReveal className="mt-[1.76rem] ml-[2.06rem] [transition-delay:0.25s]">
                <h2 className={TITLE}>{t("sec4.title")}</h2>
                <p className={cn("mt-[0.2rem] max-w-[5.9rem]", TEXT)}>
                  {t("sec4.desc")}
                </p>
                <p className="mt-[0.48rem] max-w-[5.9rem] text-[0.12rem] font-medium text-[#222222]">
                  {t("sec4.item_desc")}
                </p>
              </ProductReveal>
            </div>
            <div className="absolute bottom-0 left-0 flex w-full justify-between">
              <ProductReveal className="mt-[4.55rem] [transition-delay:0.25s]">
                <h2 className={TITLE}>{t("sec4.title2")}</h2>
                <p className={cn("mt-[0.2rem] max-w-[6rem]", TEXT)}>
                  {t("sec4.desc2")}
                </p>
              </ProductReveal>
              <ProductReveal
                className={cn("h-[8.45rem] w-[6.56rem] shrink-0", PHOTO)}
                style={bg(
                  "/guanwang_second/front/images/products/artisbox_play/sec3_02-e6660fbe3b.webp",
                )}
              />
            </div>
          </div>
        </section>
        {/* sec5: four colours */}
        <section className="flex w-full flex-col items-center bg-white pt-[1.37rem] pb-[1.3rem]">
          <ProductReveal className="text-center text-black">
            <h2 className={TITLE}>{t("sec5.title")}</h2>
            <p className={cn("mt-[0.13rem]", TEXT)}>{t("sec5.desc")}</p>
          </ProductReveal>
          <ProductReveal
            className={cn("mt-[0.56rem] h-[8.11rem] w-[14.42rem]", PHOTO)}
            style={bg(
              "/guanwang_second/front/images/products/artisbox_play/sec4-9a8518935d.webp",
            )}
          />
          {COLORS.map((row, r) => (
            <div
              key={row[0].name}
              className={cn("flex", r === 0 ? "mt-[1.13rem]" : "mt-[0.99rem]")}
            >
              {row.map((card, i) => (
                <ProductReveal
                  key={card.name}
                  className={cn(card.card, DELAYS[i])}
                >
                  <div
                    className={cn("w-full", card.height, PHOTO)}
                    style={bg(card.photo)}
                  />
                  <h3
                    className={cn(
                      "relative mt-[0.2rem] h-[0.28rem] pl-[0.27rem] text-[0.2rem] font-extrabold before:absolute before:top-1/2 before:left-0 before:h-[0.16rem] before:w-[0.16rem] before:-translate-y-1/2 before:rounded-full before:content-['']",
                      card.color,
                    )}
                  >
                    {t(card.name)}
                  </h3>
                  <p className="mt-[0.1rem] max-w-[4.9rem] text-[0.16rem] leading-[0.24rem] font-medium text-[#111111]">
                    {t(card.desc)}
                  </p>
                </ProductReveal>
              ))}
            </div>
          ))}
        </section>
        {/* sec6: the design, and its designer's words */}
        <section className="flex w-full justify-center bg-[#f8f8f8] pt-[1.39rem] pb-[1.45rem] text-[#ad9a87]">
          <div className="relative h-[13.95rem] w-[14.4rem]">
            <div className="flex">
              <ProductReveal
                className={cn("h-[9.13rem] w-[7.06rem] shrink-0", PHOTO)}
                style={bg(
                  "/guanwang_second/front/images/products/artisbox_play/sec4_05-3fd07e396d.webp",
                )}
              />
              <ProductReveal className="mt-[0.64rem] ml-[0.96rem] [transition-delay:0.25s]">
                <h2 className={TITLE}>{t("sec6.title")}</h2>
                <p className="mt-[0.16rem] text-[0.25rem] leading-[0.38rem] font-extrabold">
                  {t("sec6.item_subtitle")}
                </p>
                <p className={cn("mt-[0.61rem] max-w-[6.5rem]", TEXT)}>
                  {t("sec6.desc")}
                </p>
              </ProductReveal>
            </div>
            <div className="absolute bottom-0 left-0 flex w-full justify-between">
              <ProductReveal className="[transition-delay:0.25s]">
                <figure className="mt-[4.66rem] max-w-[7.2rem] text-[0.25rem] leading-[0.33rem] font-normal">
                  <blockquote>{t("sec6.item2_desc")}</blockquote>
                  <figcaption className="mt-[0.36rem] text-right">
                    {t("sec6.item2_remind")}
                  </figcaption>
                </figure>
              </ProductReveal>
              <ProductReveal
                className={cn("h-[8.45rem] w-[6.56rem] shrink-0", PHOTO)}
                style={bg(
                  "/guanwang_second/front/images/products/artisbox_play/sec4_06-cd8b0abb8a.webp",
                )}
              />
            </div>
          </div>
        </section>
        {/* sec7: details; the four photos' labels are in the pictures (translated) */}
        <section className="flex w-full flex-col items-center bg-[#f8f8f8] pb-[0.85rem] text-[#402e16]">
          <ProductReveal className="text-center">
            <h2 className={TITLE}>{t("sec7.title")}</h2>
            <p className={cn("mt-[0.16rem]", TEXT)}>{t("sec7.desc")}</p>
          </ProductReveal>
          <div className="mt-[0.44rem] flex">
            <ProductReveal className="h-[7.94rem] w-[5.19rem]">
              <div
                role="img"
                aria-label={ts("alt.frame")}
                className="size-full relative isolate"
              >
                <TextImage
                  picture={DESKTOP_WORDS.sec5_01}
                  locale={locale}
                  text={text}
                  fit={{ size: "cover", x: 0, y: 0 }}
                  className="absolute inset-0 -z-10"
                />
              </div>
            </ProductReveal>
            <div className="ml-[0.28rem] flex w-[8.79rem] flex-wrap">
              <ProductReveal className="mr-[0.3rem] h-[3.8rem] w-[4.25rem] [transition-delay:0.15s]">
                <div
                  role="img"
                  aria-label={ts("alt.fabric")}
                  className="size-full relative isolate"
                >
                  <TextImage
                    picture={DESKTOP_WORDS.sec5_02}
                    locale={locale}
                    text={text}
                    fit={{ size: "cover", x: 0, y: 0 }}
                    className="absolute inset-0 -z-10"
                  />
                </div>
              </ProductReveal>
              <ProductReveal className="h-[3.8rem] w-[4.24rem] [transition-delay:0.25s]">
                <div
                  role="img"
                  aria-label={ts("alt.logo")}
                  className="size-full relative isolate"
                >
                  <TextImage
                    picture={DESKTOP_WORDS.sec5_03}
                    locale={locale}
                    text={text}
                    fit={{ size: "cover", x: 0, y: 0 }}
                    className="absolute inset-0 -z-10"
                  />
                </div>
              </ProductReveal>
              <ProductReveal className="mt-[0.27rem] h-[3.87rem] w-[8.79rem] [transition-delay:0.25s]">
                <div
                  role="img"
                  aria-label={ts("alt.brushed")}
                  className="size-full relative isolate"
                >
                  <TextImage
                    picture={DESKTOP_WORDS.sec5_04}
                    locale={locale}
                    text={text}
                    fit={{ size: "cover", x: 0, y: 0 }}
                    className="absolute inset-0 -z-10"
                  />
                </div>
              </ProductReveal>
            </div>
          </div>
        </section>
        {/* sec8: 48 mm deep */}
        <section className="relative w-full">
          <Image
            src={img(
              "/guanwang_second/front/images/products/artisbox_play/sec6-f79918f810.webp",
            )}
            alt=""
            width={1920}
            height={1000}
            unoptimized
            className="w-full align-middle"
          />
          <ProductReveal className="absolute top-[3rem] left-[2.44rem] text-[#402e16]">
            <h2 className={TITLE}>{t("sec8.title")}</h2>
            <p className={cn("mt-[0.13rem] max-w-[6.2rem]", TEXT)}>
              {t("sec8.desc")}
            </p>
          </ProductReveal>
        </section>
        {/* sec9: a scene for every room */}
        <section className="flex w-full flex-col items-center pt-[0.97rem] pb-[0.84rem] text-[#111111]">
          <ProductReveal className="mb-[0.64rem] text-center text-black">
            <h2 className={TITLE}>{t("sec9.title")}</h2>
            <p className={cn("mt-[0.13rem]", TEXT)}>{t("sec9.desc")}</p>
          </ProductReveal>
          <ul className="w-[14.42rem]">
            {SCENES.map((scene, i) => (
              <li
                key={scene.mode}
                className={cn(
                  "flex",
                  !scene.photoFirst && "flex-row-reverse",
                  i < SCENES.length - 1 && "mb-[1.2rem]",
                )}
              >
                <ProductReveal className={cn("shrink-0", scene.size)}>
                  <div
                    role={scene.alt ? "img" : undefined}
                    aria-label={scene.alt ? ts(scene.alt) : undefined}
                    className={cn("size-full", PHOTO)}
                    style={bg(scene.photo)}
                  />
                </ProductReveal>
                <ProductReveal
                  className={cn(
                    "flex-1 pt-[1.04rem] [transition-delay:0.25s]",
                    scene.photoFirst ? "pl-[1.74rem]" : "pl-[0.88rem]",
                  )}
                >
                  <span className="relative pb-[0.12rem] text-[0.3rem] leading-[0.36rem] font-extrabold after:absolute after:bottom-0 after:left-0 after:h-[0.03rem] after:w-full after:rounded-[0.02rem] after:bg-[image:linear-gradient(90deg,rgb(254,228,204)_0px,rgb(242,121,65)_100%)] after:content-['']">
                    {t(scene.room)}
                  </span>
                  <h3 className={cn("mt-[0.57rem]", TITLE)}>{t(scene.mode)}</h3>
                  <p className={cn("mt-[0.13rem]", TEXT)}>{t(scene.desc)}</p>
                </ProductReveal>
              </li>
            ))}
          </ul>
        </section>
        {/* sec10: Bluetooth range, over a film */}
        <section className="relative bg-black">
          <MarketingVideo
            bare
            src="/8f4239b1vodgzp1251222210/fdcf650f387702292179702332/iVlOEjM2vewA.mp4"
            className="block aspect-[1920/1000] w-full"
          />
          <ProductReveal className="absolute top-[1.04rem] left-0 w-full text-center text-white">
            <h2 className={TITLE}>{t("sec10.title")}</h2>
            <p className={cn("mt-[0.13rem]", TEXT)}>{t("sec10.desc")}</p>
          </ProductReveal>
        </section>
        {/* sec11: two speakers in stereo, over a film */}
        <section className="relative bg-black">
          <MarketingVideo
            bare
            src="/orvibo/videos/artisbox_play_hifi_move.mp4"
            className="block aspect-[1920/1508] w-full"
          />
          <ProductReveal className="absolute top-[1.34rem] left-0 w-full text-center text-white">
            <h2 className={TITLE}>{t("sec11.title")}</h2>
            <p
              className={cn(
                "mx-auto mt-[0.13rem] max-w-[10.4rem] text-balance",
                TEXT,
              )}
            >
              {t("sec11.desc")}
            </p>
          </ProductReveal>
        </section>
        {/* sec12: the floor stand */}
        <section className="flex w-full flex-col items-center bg-white pt-[1.33rem] pb-[1.47rem] text-[#634d38]">
          <div className="text-center">
            <h2 className={TITLE}>{t("sec12.title")}</h2>
            <p className={cn("mt-[0.13rem]", TEXT)}>{t("sec12.desc")}</p>
          </div>
          <Image
            src={img(
              "/guanwang_second/front/images/products/artisbox_play/sec10-dc25f435fe.webp",
            )}
            alt={ts("alt.floor_stand")}
            width={1442}
            height={798}
            unoptimized
            className="mt-[0.59rem] w-[14.42rem] align-middle"
          />
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
