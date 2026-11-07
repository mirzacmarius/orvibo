import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { TextImage } from "@/components/orvibo/product/TextImage";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import Image from "next/image";
import { DESKTOP_WORDS } from "./pictureWords";

const ICONS = "/orvibo/products/robot_r2";

/** The hero's five features (a picture on orvibo.com), each with its icon. */
const FEATURES = [
  "hero.feature1",
  "hero.feature2",
  "hero.feature3",
  "hero.feature4",
  "hero.feature5",
] as const;

/** The two battery notes under the floor maps (a picture on orvibo.com). */
const BATTERY = [
  {
    icon: `${ICONS}/battery-low.webp`,
    title: "sec9.recharge",
    desc: "sec9.recharge_desc",
  },
  {
    icon: `${ICONS}/battery-full.webp`,
    title: "sec9.resume",
    desc: "sec9.resume_desc",
  },
] as const;

/** The four cleaning plan cards under the bedroom photo; their words are in the pictures. */
const PLANS = [
  {
    photo: DESKTOP_WORDS.sec10_1,
    alt: "alt.sec10_1",
  },
  {
    photo: DESKTOP_WORDS.sec10_2,
    alt: "alt.sec10_2",
  },
  {
    photo: DESKTOP_WORDS.sec10_3,
    alt: "alt.sec10_3",
  },
  {
    photo: DESKTOP_WORDS.sec10_4,
    alt: "alt.sec10_4",
  },
] as const;

/** The three detail photos at the end, with their words in the pictures. */
const DETAILS = [
  {
    photo: DESKTOP_WORDS.sec14_1,
    alt: "alt.sec14_1",
  },
  {
    photo: DESKTOP_WORDS.sec14_2,
    alt: "alt.sec14_2",
  },
  {
    photo: DESKTOP_WORDS.sec14_3,
    alt: "alt.sec14_3",
  },
] as const;

const TITLE = "text-balance text-[0.48rem] leading-[0.72rem] font-extrabold";
const TEXT = "mt-[0.16rem] text-[0.2rem] leading-[0.32rem] font-medium";
const PHOTO = "bg-cover bg-center bg-no-repeat";

export function RobotR2Overview({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-black font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview">
        {/* r2__banner: the features under the title are a picture on orvibo.com */}
        <section
          className={cn("relative h-[9.47rem]", PHOTO)}
          style={bg(
            "/guanwang_second/front/images/products/robot_r2/banner-8b73fdff58.webp",
          )}
        >
          <div className="absolute top-[1.91rem] left-[2.51rem] text-black">
            <h1 className="text-[0.63rem] font-extrabold">
              {t("r2_banner.banner_title")}
            </h1>
            <p className="mt-[0.22rem] flex items-start gap-x-[0.1rem]">
              <span className="text-[0.36rem] font-medium text-[#070707]">
                {t("r2_banner.desc_text")}
              </span>
              <span className="mt-[0.1rem] h-[0.2rem] w-[0.4rem] rounded-[0.1rem] border border-black text-center text-[0.13rem] leading-[0.18rem] font-bold">
                {"R2"}
              </span>
            </p>
          </div>
          <ul className="absolute top-[5.64rem] left-[2.51rem] flex flex-col gap-y-[0.135rem] text-[0.18rem] text-black/[0.62]">
            {FEATURES.map((feature, i) => (
              <li
                key={feature}
                className="flex h-[0.32rem] items-center gap-x-[0.15rem]"
              >
                <span
                  className={cn("h-[0.32rem] w-[0.2rem] shrink-0", PHOTO)}
                  style={bg(`${ICONS}/feature-${i + 1}.webp`)}
                />
                {t(feature)}
              </li>
            ))}
          </ul>
        </section>
        {/* sec1: self-emptying; the words stay left of the dock */}
        <section
          className={cn("relative h-[9.6rem]", PHOTO)}
          style={bg(
            "/guanwang_second/front/images/products/robot_r2/sec1-e7f9036db0.webp",
          )}
        >
          <ProductReveal className="absolute top-[2.79rem] left-[1.94rem] max-w-[5rem] text-white">
            <h2 className={TITLE}>{t("sec1.title")}</h2>
            <p className={TEXT}>{t("sec1.desc")}</p>
          </ProductReveal>
        </section>
        {/* sec2: the dock's short air duct */}
        <section className="flex flex-col items-center bg-black pt-[1.2rem] pb-[0.96rem] text-center text-white">
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec2.title")}</h2>
            <p className={cn("mx-auto max-w-[11.2rem] text-balance", TEXT)}>
              {t("sec2.desc")}
            </p>
          </ProductReveal>
          <div className="mt-[0.28rem] w-[14.26rem]">
            <Image
              src={img(
                "/guanwang_second/front/images/products/robot_r2/sec2_1-bc124dbafc.webp",
              )}
              alt=""
              width={1422}
              height={806}
              unoptimized
              className="mt-[0.3rem] block w-full"
            />
            <Image
              src={img(
                "/guanwang_second/front/images/products/robot_r2/sec2_2-c1ce251a30.webp",
              )}
              alt={ts("alt.sec2_2")}
              width={1426}
              height={616}
              unoptimized
              className="mt-[0.3rem] block w-full"
            />
          </div>
        </section>
        {/* sec3: the LED display, compared with a phone app; the words are in the photo */}
        <section
          className={cn(
            "h-[13.29rem] bg-black pt-[1.2rem] text-center text-white",
            PHOTO,
          )}
          style={bg(
            "/guanwang_second/front/images/products/robot_r2/sec3-8116456f7e.webp",
          )}
        >
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec3.title")}</h2>
          </ProductReveal>
          <p className="sr-only">{t("alt.sec3")}</p>
        </section>
        {/* sec4: the 3 L dust bag */}
        <section className="relative h-[9.6rem] isolate">
          <TextImage
            picture={DESKTOP_WORDS.sec4}
            locale={locale}
            text={text}
            fit={{ size: "cover" }}
            className="absolute inset-0 -z-10"
          />
          <ProductReveal className="absolute top-[2.17rem] left-[2.48rem] text-black">
            <h2 className={TITLE}>{t("sec4.title")}</h2>
            <p className={cn("max-w-[6.6rem]", TEXT)}>{t("sec4.desc")}</p>
          </ProductReveal>
          <p className="sr-only">{t("alt.sec4")}</p>
        </section>
        {/* sec5: sweep, vacuum, mop; the three words are in the photo */}
        <section className="h-[9.6rem] pt-[1.2rem] text-center text-white relative isolate">
          <TextImage
            picture={DESKTOP_WORDS.sec5}
            locale={locale}
            text={text}
            fit={{ size: "cover" }}
            className="absolute inset-0 -z-10"
          />
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec5.title")}</h2>
          </ProductReveal>
          <p className="sr-only">{t("alt.sec5")}</p>
        </section>
        {/* sec6: 3000 Pa suction */}
        <section className="relative h-[14rem] isolate">
          <TextImage
            picture={DESKTOP_WORDS.sec6}
            locale={locale}
            text={text}
            fit={{ size: "cover" }}
            className="absolute inset-0 -z-10"
          />
          <ProductReveal className="absolute top-[1.24rem] left-[2.44rem] text-white">
            <h2 className={TITLE}>{t("sec6.title")}</h2>
            <p className={cn("max-w-[9rem]", TEXT)}>{t("sec6.desc")}</p>
          </ProductReveal>
          <p className="sr-only">{t("alt.sec6")}</p>
        </section>
        {/* sec7: LDAR laser navigation, three generations along the bottom of the photo */}
        <section className="relative h-[11.12rem] pt-[1.2rem] text-center text-white isolate">
          <TextImage
            picture={DESKTOP_WORDS.sec7}
            locale={locale}
            text={text}
            fit={{ size: "cover" }}
            className="absolute inset-0 -z-10"
          />
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec7.title")}</h2>
            <p className={cn("mx-auto max-w-[11.8rem] text-balance", TEXT)}>
              {t("sec7.desc")}
            </p>
          </ProductReveal>
          <p className="sr-only">{t("alt.sec7")}</p>
        </section>
        {/* sec8: 3D obstacle avoidance */}
        <section
          className={cn("relative h-[9.61rem]", PHOTO)}
          style={bg(
            "/guanwang_second/front/images/products/robot_r2/sec8-abf7638cfa.webp",
          )}
        >
          <ProductReveal className="absolute top-[2.19rem] left-[1.7rem] text-white">
            <h2 className={TITLE}>{t("sec8.title")}</h2>
            <p className={cn("max-w-[6.9rem]", TEXT)}>{t("sec8.desc")}</p>
          </ProductReveal>
        </section>
        {/* sec9: the floor maps; the battery notes are HTML (a picture on orvibo.com) */}
        <section className="relative h-[9.65rem] bg-black">
          <div
            role="img"
            aria-label={ts("alt.sec9")}
            className="absolute top-0 right-[0.78rem] h-[9.65rem] w-[10.21rem] isolate"
          >
            <TextImage
              picture={DESKTOP_WORDS.sec9}
              locale={locale}
              text={text}
              fit={{ size: "cover" }}
              className="absolute inset-0 -z-10"
            />
          </div>
          <ProductReveal className="absolute top-[2.46rem] left-[1.67rem] text-white">
            <h2 className={TITLE}>{t("sec9.title")}</h2>
            <p className={cn("max-w-[7.3rem]", TEXT)}>{t("sec9.desc")}</p>
            <ul className="mt-[0.9rem] flex flex-col gap-y-[0.3rem] text-[0.22rem] leading-[0.35rem] font-medium">
              {BATTERY.map((note) => (
                <li
                  key={note.title}
                  className="flex items-center gap-x-[0.13rem]"
                >
                  <span
                    className={cn("h-[0.71rem] w-[0.4rem] shrink-0", PHOTO)}
                    style={bg(note.icon)}
                  />
                  <span>
                    <span className="block">{t(note.title)}</span>
                    <span className="block">{t(note.desc)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </ProductReveal>
        </section>
        {/* sec10: cleaning plans by voice */}
        <section className="flex flex-col items-center bg-black pt-[0.9rem] pb-[0.26rem] text-center text-white">
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec10.title")}</h2>
          </ProductReveal>
          <Image
            src={img(
              "/guanwang_second/front/images/products/robot_r2/sec10-31452f1a0f.webp",
            )}
            alt={ts("alt.sec10")}
            width={1417}
            height={834}
            unoptimized
            className="mt-[0.58rem] block w-[14.17rem]"
          />
          <ul className="mt-[0.26rem] flex w-[14.17rem] justify-between">
            {PLANS.map((plan) => (
              <li key={plan.alt}>
                <div
                  role="img"
                  aria-label={ts(plan.alt)}
                  className="relative isolate h-[3.48rem] w-[3.34rem]"
                >
                  <TextImage
                    picture={plan.photo}
                    locale={locale}
                    text={text}
                    fit={{ size: "cover" }}
                    className="absolute inset-0 -z-10"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
        {/* sec11: voice control from the sofa or the bed */}
        <section className="flex flex-col items-center bg-black pt-[1.2rem] pb-[1.07rem] text-center text-white">
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec11.title")}</h2>
            <p className={cn("mx-auto max-w-[8.1rem] text-balance", TEXT)}>
              {t("sec11.desc")}
            </p>
          </ProductReveal>
          <Image
            src={img(
              "/guanwang_second/front/images/products/robot_r2/sec11-b1af03473c.webp",
            )}
            alt=""
            width={1420}
            height={890}
            unoptimized
            className="mt-[0.52rem] block w-[14.2rem]"
          />
        </section>
        {/* sec12: the constant-pressure water tank */}
        <section className="flex flex-col items-center bg-white py-[1.07rem] text-center text-black">
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec12.title")}</h2>
            <p className={TEXT}>{t("sec12.desc")}</p>
          </ProductReveal>
          <TextImage
            picture={DESKTOP_WORDS.sec12}
            locale={locale}
            text={text}
            alt={ts("alt.sec12")}
            className="mt-[0.52rem] block w-[14.2rem] max-w-full"
          />
        </section>
        {/* sec13: voice replies, then the details */}
        <section className="flex flex-col items-center bg-black pt-[1.19rem] pb-[1.22rem] text-center text-white">
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec13.title")}</h2>
          </ProductReveal>
          <Image
            src={img(
              "/guanwang_second/front/images/products/robot_r2/sec13-b15e0f290e.webp",
            )}
            alt={ts("alt.sec13")}
            width={1422}
            height={831}
            unoptimized
            className="mt-[0.58rem] mb-[1.58rem] block w-[14.22rem]"
          />
          <ProductReveal className="">
            <h2 className={TITLE}>{t("sec13.title2")}</h2>
          </ProductReveal>
          <ul className="mt-[0.58rem] flex w-[14.22rem] justify-between">
            {DETAILS.map((detail) => (
              <li key={detail.alt}>
                <TextImage
                  picture={detail.photo}
                  locale={locale}
                  text={text}
                  alt={ts(detail.alt)}
                  className="block w-[4.48rem] max-w-full"
                />
              </li>
            ))}
          </ul>
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
