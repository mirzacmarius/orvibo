import Image from "next/image";
import type { ReactNode } from "react";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

const ASSETS = "/orvibo/products/mixpad_s_flagship";

/** The two laurel badges under the banner title (text keys `banner.<key>` and `banner.<key>_stat`). */
const bannerAwards = ["award1", "award2"];

/** The award wall (text keys `sec1.award<n>` and `sec1.award<n>_note`), in orvibo.com's order. */
const AWARDS = [1, 2, 3, 4, 5, 6, 7, 8];

/** A badge's last line, e.g. "{96} patents": the number in braces is set large and gold. */
function Stat({ text }: { text: string }): ReactNode {
  const match = /^(.*)\{(.+)\}(.*)$/.exec(text);
  if (!match) return text;
  const [, before, figure, after] = match;
  return (
    <>
      {before}
      <span className="mx-[0.03rem] align-[-0.02rem] text-[0.22rem] font-light leading-[0.24rem] text-[#cac2a9]">
        {figure}
      </span>
      {after}
    </>
  );
}

export function MixpadSFlagshipOverview({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* mixpadSflagshipPage */}
      <div id="overview">
        {/* banner */}
        <div
          className="bg-center mx-auto pt-[3.52rem] pl-[2.67rem] min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat w-full h-[9.57rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_s_flagship/banner-3cd85d8550.webp",
          )}
        >
          <div className="text-[0.58rem] text-white font-extrabold leading-[0.8rem]">
            {t("banner.bannerTitle")}
          </div>
          <div className="mt-[0.12rem] text-[0.3rem] text-white leading-[0.42rem]">
            {t("banner.bannerDesc")}
            <span className="ml-[0.1rem] inline-flex h-[0.3rem] items-center rounded-full bg-[linear-gradient(90deg,#cdc4ad,#958b6f)] px-[0.13rem] align-middle text-[0.17rem] font-semibold leading-none text-[#141310]">
              {t("banner.badge")}
            </span>
          </div>
          <ul className="mt-[1.37rem] flex gap-[0.23rem]">
            {bannerAwards.map((key) => (
              <li key={key} className="flex h-[0.7rem] items-center">
                <Image
                  src={img(`${ASSETS}/laurel-grey-left.webp`)}
                  alt=""
                  width={32}
                  height={70}
                  unoptimized
                  className="h-[0.7rem] w-[0.32rem] shrink-0"
                />
                <div className="whitespace-nowrap px-[0.06rem] text-center text-[0.13rem] leading-[0.18rem] text-white/80">
                  {t(`banner.${key}`)}
                  <br />
                  <Stat text={ts(`banner.${key}_stat`)} />
                </div>
                <Image
                  src={img(`${ASSETS}/laurel-grey-right.webp`)}
                  alt=""
                  width={33}
                  height={70}
                  unoptimized
                  className="h-[0.7rem] w-[0.33rem] shrink-0"
                />
              </li>
            ))}
          </ul>
        </div>
        {/* sec1 */}
        <div
          className="bg-center h-[5.78rem] bg-no-repeat bg-cover pt-[1.59rem]"
          style={bg(`${ASSETS}/awards-bg.webp`)}
        >
          <ul className="mx-auto grid w-[17.41rem] grid-cols-4 gap-y-[0.54rem]">
            {AWARDS.map((n) => (
              <li
                key={n}
                className="flex h-[0.96rem] items-center justify-center"
              >
                <Image
                  src={img(`${ASSETS}/laurel-gold-left.webp`)}
                  alt=""
                  width={44}
                  height={96}
                  unoptimized
                  className="h-[0.96rem] w-[0.44rem] shrink-0"
                />
                <div className="min-w-[2.13rem] max-w-[3.3rem] bg-[linear-gradient(90deg,#efece2,#b4a782)] bg-clip-text px-[0.08rem] text-center text-[0.15rem] font-semibold leading-[0.23rem] text-transparent">
                  {t(`sec1.award${n}`)}
                  <br />
                  {t(`sec1.award${n}_note`)}
                </div>
                <Image
                  src={img(`${ASSETS}/laurel-gold-right.webp`)}
                  alt=""
                  width={45}
                  height={96}
                  unoptimized
                  className="h-[0.96rem] w-[0.45rem] shrink-0"
                />
              </li>
            ))}
          </ul>
        </div>
        {/* sec3 sec lazy */}
        <div
          className="relative bg-center bg-no-repeat bg-cover h-[14rem]"
          style={bg(`${ASSETS}/jury-bg.webp`)}
        >
          <div className="absolute inset-x-0 top-[2.3rem] text-center">
            <p className="text-[0.24rem] leading-[0.32rem] tracking-[0.055em] text-[#d9d9d9]">
              {t("sec3.quote")}
            </p>
            <p className="mt-[0.43rem] text-[0.16rem] leading-[0.24rem] tracking-[0.1em] text-[#818181]">
              {t("sec3.source")}
            </p>
          </div>
        </div>
        {/* sec4 sec lazy up show */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_s_flagship/sec4-82d38936b3.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1rem] pb-[0.3rem] text-[0.48rem] font-extrabold text-white leading-[0.67rem] text-center">
              {t("sec4.title")}
            </div>
            <div className="text-white text-[0.2rem] leading-[0.3rem] text-center opacity-[0.7]">
              {t("sec4.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec5 sec lazy */}
        <div
          className="bg-center pt-[4.29rem] pl-[2.48rem] bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_s_flagship/sec5-83c9a8d8a4.webp",
          )}
        >
          <div>
            <ProductReveal className="">
              <div className="mb-[0.3rem] text-[0.48rem] font-extrabold text-white leading-[0.67rem] text-left">
                {t("sec5.title")}
              </div>
              <div className="text-white text-[0.2rem] leading-[0.3rem] text-left opacity-[0.7] max-w-[6.2rem]">
                {t("sec5.desc")}
              </div>
            </ProductReveal>
          </div>
        </div>
        {/* sec6 sec lazy */}
        <div
          className="bg-center pt-[2.92rem] pl-[2.48rem] bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_s_flagship/sec6-9fe66f55ed.webp",
          )}
        >
          <div>
            <ProductReveal className="">
              <div className="mb-[0.22rem] text-[0.48rem] font-extrabold text-white leading-[0.67rem] text-left">
                {t("sec6.title")}
              </div>
              <div className="text-white text-[0.2rem] leading-[0.3rem] text-left opacity-[0.7] max-w-[4.3rem]">
                {t("sec6.desc")}
              </div>
            </ProductReveal>
          </div>
          <div className="mt-[1.14rem] w-[2.77rem] h-[0.36rem]">
            <Image
              src={img(
                "/guanwang_second/front/images/products/mixpad_s_flagship/sec6_1-a00e23338c.webp",
              )}
              alt=""
              width={277}
              height={36}
              unoptimized
              className="align-middle w-full h-full"
            />
          </div>
        </div>
        {/* sec7 sec lazy */}
        <div
          className="bg-center pt-[1.4rem] pl-[2.48rem] bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_s_flagship/sec7-f287064ef6.webp",
          )}
        >
          <div>
            <ProductReveal className="">
              <div className="mb-[0.3rem] text-[0.48rem] font-extrabold text-white leading-[0.67rem] text-left">
                {t("sec7.title")}
              </div>
              <div className="text-white text-[0.2rem] leading-[0.3rem] text-left opacity-[0.7] max-w-[6.8rem]">
                {t("sec7.desc")}
              </div>
            </ProductReveal>
          </div>
        </div>
        {/* sec8 sec lazy */}
        <div
          className="bg-center pt-[1.4rem] pl-[2.48rem] bg-no-repeat bg-cover h-[9.6rem] relative"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_s_flagship/sec8-f3b2996b6e.webp",
          )}
        >
          <div className="ml-[-3.05rem] absolute top-[1rem] left-1/2">
            <ProductReveal className="">
              <div className="text-[0.48rem] font-extrabold text-white leading-[0.67rem] text-left">
                {t("sec8.title")}
              </div>
              <div className="mt-[0.3rem] text-white text-[0.2rem] leading-[0.3rem] text-left opacity-[0.7] max-w-[3.5rem]">
                {t("sec8.desc")}
              </div>
            </ProductReveal>
          </div>
          <p className="absolute left-1/2 top-[5.55rem] ml-[-3.05rem] w-[3.22rem] text-[0.14rem] leading-[0.2rem] text-[#7e7e7f]">
            {t("sec8.caption")}
          </p>
        </div>
        {/* sec9 sec lazy up show */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[10rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_s_flagship/sec9-cb633b2851.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1rem] pb-[0.3rem] text-[0.48rem] font-extrabold text-white leading-[0.67rem] text-center">
              {t("sec9.title")}
            </div>
            <div className="text-white text-[0.2rem] leading-[0.3rem] text-center opacity-[0.7] max-w-[9.3rem] mx-auto">
              {t("sec9.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec10 */}
        <div className="bg-white pb-[0.94rem]">
          <div>
            <ProductReveal className="">
              <div className="pt-[1.23rem] pb-[0.3rem] text-[0.48rem] font-extrabold text-[#111111] leading-[0.67rem] text-center">
                {t("sec10.title")}
              </div>
              <div className="pb-[0.6rem] text-[#111111] text-[0.2rem] leading-[0.3rem] text-center opacity-[0.7] max-w-[13.3rem] mx-auto">
                {t("sec10.desc")}
              </div>
            </ProductReveal>
          </div>
          <div
            className="bg-center mx-auto mb-[0.5rem] w-[16rem] bg-no-repeat bg-cover h-[5.76rem]"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_s_flagship/sec10_1-9ffea60e2a.webp",
            )}
          />
          <div
            className="bg-center mx-auto mb-[0.5rem] w-[16rem] bg-no-repeat bg-cover h-[5.76rem]"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_s_flagship/sec10_2-28342a0802.webp",
            )}
          />
          <div
            className="bg-center mx-auto mb-[0.5rem] w-[16rem] bg-no-repeat bg-cover h-[5.76rem]"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_s_flagship/sec10_3-d866922082.webp",
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
