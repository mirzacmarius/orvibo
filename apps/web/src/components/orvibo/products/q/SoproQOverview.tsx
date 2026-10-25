import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** The sec7 product strips, cropped to their photos. */
const STRIPS = {
  1: "/guanwang_second/front/images/new/products/q/sec7_1-1794c22d1b.webp",
  2: "/guanwang_second/front/images/new/products/q/sec7_2-7a25200c76.webp",
  3: "/guanwang_second/front/images/new/products/q/sec7_3-a9c367324c.webp",
};

export function SoproQOverview({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);
  /** One copy of a sec7 strip; each row shows it twice for a seamless loop. */
  const strip = (row: 1 | 2 | 3, hidden = false) => (
    <div className="shrink-0 w-[24.24rem]" aria-hidden={hidden || undefined}>
      <div
        className="bg-no-repeat bg-cover h-[2.2rem]"
        style={bg(STRIPS[row])}
      />
      <ul className="mt-[0.13rem] grid grid-cols-6 text-center text-[0.16rem] leading-[0.24rem] font-normal text-[#999999]">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <li key={n} className="px-[0.1rem]">
            {t(`sec7.row${row}.item${n}`)}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* q__wrapper */}
      <div id="overview" className="w-full bg-black overflow-hidden">
        {/* q__banner s__bg */}
        <div
          className="bg-no-repeat bg-cover relative h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/new/products/q/banner-dbe14a5ac9.webp",
          )}
        >
          <div className="absolute left-[2.02rem] top-[2.38rem] bottom-[1.99rem] flex flex-col">
            <div className="flex items-end">
              <span className="text-[0.56rem] leading-[0.7rem] font-semibold bg-[image:linear-gradient(162deg,rgb(255,237,207)_0px,rgb(207,163,110)_81%,rgb(225,195,158)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
                {t("q_banner.banner_title")}
              </span>
              <span className="mb-[0.24rem] ml-[0.18rem] rounded-[0.2rem] min-w-[0.82rem] px-[0.12rem] h-[0.36rem] whitespace-nowrap bg-[image:linear-gradient(158deg,rgb(255,222,183)_0px,rgb(211,170,120)_100%)] text-center text-[0.18rem] leading-[0.36rem] font-semibold text-black">
                {t("q_banner.icon_remind")}
              </span>
            </div>
            <div className="mt-[0.32rem] text-[0.32rem] leading-[0.44rem] font-normal text-[#ffdeb7]">
              {t("q_banner.banner_desc")}
            </div>
            <div className="mt-auto flex items-center">
              <div className="relative text-center text-[0.21rem] leading-[0.37rem] font-normal text-[#ffdeb7]">
                <div
                  className="bg-no-repeat bg-cover absolute left-1/2 top-[-0.77rem] -translate-x-1/2 w-[0.63rem] h-[0.63rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/q/icon_1-3d0f8868b9.webp",
                  )}
                />
                <span className="max-w-[4rem]">
                  {t("q_banner.banner_item")}
                </span>
              </div>
              <div className="mx-[0.4rem] border-r border-r-[#707070] w-0 h-[0.58rem] opacity-[0.8]" />
              <div className="relative text-center text-[0.21rem] leading-[0.37rem] font-normal text-[#ffdeb7]">
                <div
                  className="bg-no-repeat bg-cover absolute left-1/2 top-[-0.77rem] -translate-x-1/2 w-[0.63rem] h-[0.63rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/q/icon_2-1a4106f000.webp",
                  )}
                />
                <span className="max-w-[4rem]">
                  {t("q_banner.banner_item2")}
                </span>
              </div>
              <div className="mx-[0.4rem] border-r border-r-[#707070] w-0 h-[0.58rem] opacity-[0.8]" />
              <div className="relative text-center text-[0.21rem] leading-[0.37rem] font-normal text-[#ffdeb7]">
                <div
                  className="bg-no-repeat bg-cover absolute left-1/2 top-[-0.77rem] -translate-x-1/2 w-[0.63rem] h-[0.63rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/q/icon_3-110dfa37b3.webp",
                  )}
                />
                <span className="max-w-[4rem]">
                  {t("q_banner.banner_item3")}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* sec1 d__sec */}
        <div className="pt-[1.2rem] relative flex flex-col items-center">
          <ProductReveal className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
            {t("sec1.title")}
          </ProductReveal>
          <div className="mt-[0.9rem] flex">
            <div className="mr-[0.28rem] w-[6.84rem]">
              <ProductReveal
                className="pt-[0.84rem] pl-[0.5rem] bg-no-repeat bg-cover relative h-[7.64rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec1_1-c95aee0142.webp",
                )}
              >
                <div className="w-full text-[0.36rem] font-extrabold text-white">
                  {t("sec1.item_info")}
                </div>
              </ProductReveal>
              <ProductReveal
                className="mt-[0.3rem] pl-[0.5rem] bg-no-repeat bg-cover relative flex items-center h-[2.97rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec1_5-f479cf60e7.webp",
                )}
              >
                <div className="w-full text-[0.36rem] font-extrabold text-white">
                  <p>{t("sec1.item_info2")}</p>
                  <p className="mt-[0.09rem] w-full text-[0.2rem] font-normal">
                    {t("sec1.item_desc")}
                  </p>
                </div>
              </ProductReveal>
            </div>
            <div className="w-[6.84rem]">
              <ProductReveal
                className="pl-[0.85rem] bg-no-repeat bg-cover relative flex items-center h-[2.97rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec1_2-49c7dfa07d.webp",
                )}
              >
                <div className="w-full text-[0.36rem] font-extrabold text-white">
                  <p>{t("sec1.item_info3")}</p>
                  <p className="mt-[0.09rem] w-full text-[0.2rem] font-normal">
                    {t("sec1.item_desc2")}
                  </p>
                </div>
              </ProductReveal>
              <div className="mt-[0.3rem] relative flex h-[4.37rem]">
                <ProductReveal
                  className="mr-[0.26rem] pt-[0.24rem] bg-no-repeat bg-cover w-[3.29rem] h-full"
                  style={bg(
                    "/guanwang_second/front/images/new/products/q/sec1_3-c7ce2bf909.webp",
                  )}
                >
                  <div className="w-full text-[0.36rem] font-extrabold text-white text-center">
                    <p>{t("sec1.item_info4")}</p>
                    <p className="mt-[0.09rem] w-full text-[0.2rem] font-normal">
                      {t("sec1.item_desc3")}
                    </p>
                  </div>
                </ProductReveal>
                <ProductReveal
                  className="pt-[0.55rem] bg-no-repeat bg-cover w-[3.29rem] h-full"
                  style={bg(
                    "/guanwang_second/front/images/new/products/q/sec1_4-6513c33084.webp",
                  )}
                >
                  <div className="w-full text-[0.36rem] font-extrabold text-white text-center">
                    <p className="mt-[0.09rem] w-full text-[0.2rem] font-normal">
                      {t("sec1.item_desc4")}
                    </p>
                  </div>
                </ProductReveal>
              </div>
              <ProductReveal
                className="mt-[0.3rem] pt-[0.36rem] pl-[0.4rem] bg-no-repeat bg-cover relative h-[2.97rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec1_6-c5964f40d0.webp",
                )}
              >
                <div className="w-full text-[0.36rem] font-extrabold text-white">
                  <p>{t("sec1.item_info5")}</p>
                  <p className="mt-[0.09rem] w-full text-[0.2rem] font-normal">
                    {t("sec1.item_desc5")}
                  </p>
                </div>
              </ProductReveal>
            </div>
          </div>
        </div>
        {/* sec2 */}
        <div className="pb-[3rem] relative w-full overflow-hidden">
          <MarketingVideo
            bare
            src="/8f4239b1vodgzp1251222210/26412afb387702294095085746/L06VUBNvH1oA.mp4"
            className="w-full aspect-[1920/1000]"
          />
          <ProductReveal className="absolute left-0 bottom-[2.2rem] w-full text-center">
            <div className="text-[1rem] leading-[1.25rem] font-extrabold text-white">
              {t("sec2.title")}
            </div>
            <div className="mt-[0.2rem] text-[1rem] leading-[1.3rem] font-extrabold bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(157deg,rgb(255,254,252)_0px,rgb(255,231,201)_42%,rgb(207,159,100)_100%)]">
              {t("sec2.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec3 video__container */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/8f4239b1vodgzp1251222210/eddaf9f8387702294094929710/c9DCgzRmV6kA.mp4"
            className="w-full aspect-[1920/1000]"
          />
          <ProductReveal className="absolute top-[1.2rem] left-0 w-full">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
              {t("sec3.title")}
            </div>
            <div className="text-center text-white text-[0.2rem] leading-[0.4rem] font-medium">
              {t("sec3.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec4 video__container */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/q_no_glare.mp4"
            className="w-full aspect-[1920/960]"
          />
          <ProductReveal className="absolute top-[1.2rem] left-0 w-full">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
              {t("sec4.title")}
            </div>
            <div className="text-center text-white text-[0.2rem] leading-[0.4rem] font-medium">
              {t("sec4.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec5 video__container */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/q_soft_spots.mp4"
            className="w-full aspect-[1920/960]"
          />
          <ProductReveal className="absolute top-[1.2rem] left-0 w-full">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
              {t("sec5.title")}
            </div>
            <div className="text-center text-white text-[0.2rem] leading-[0.4rem] font-medium">
              {t("sec5.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec6 d__sec */}
        <div className="pt-[1.2rem] pb-[0.85rem] relative flex flex-col items-center">
          <ProductReveal className="">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
              {t("sec6.title")}
            </div>
          </ProductReveal>
          <div className="mt-[0.8rem] flex">
            <div className="mr-[0.3rem] w-[5.89rem]">
              <ProductReveal
                className="pt-[0.57rem] pl-[0.48rem] bg-no-repeat bg-cover w-full h-[6.15rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec6_1-45d4aec7ed.webp",
                )}
              >
                <div className="w-full text-left text-[0.3rem] leading-[0.42rem] font-extrabold text-white">
                  {t("sec6.item_info")}
                </div>
              </ProductReveal>
              <ProductReveal
                className="mt-[0.28rem] pt-[1.17rem] bg-no-repeat bg-cover w-full h-[7.75rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec6_3-08744aed2d.webp",
                )}
              >
                <div className="w-full text-center text-[0.3rem] leading-[0.42rem] font-extrabold text-white">
                  {t("sec6.item_info2")}
                </div>
              </ProductReveal>
            </div>
            <div className="w-[5.77rem]">
              <ProductReveal
                className="pt-[0.57rem] bg-no-repeat bg-cover w-full h-[7.69rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec6_2-16405e6401.webp",
                )}
              >
                <div className="w-full text-center text-[0.3rem] leading-[0.42rem] font-extrabold text-white">
                  {t("sec6.item_info3")}
                </div>
              </ProductReveal>
              <ProductReveal
                className="mt-[0.29rem] pt-[0.42rem] bg-no-repeat bg-cover w-full h-[6.2rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec6_4-2ee7b8bc3a.webp",
                )}
              >
                <div className="w-full text-center text-[0.3rem] leading-[0.42rem] font-extrabold text-white">
                  {t("sec6.item_info4")}
                </div>
              </ProductReveal>
            </div>
          </div>
        </div>
        {/* sec7 */}
        <div className="pt-[1.2rem]">
          <ProductReveal className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
            {t("sec7.title")}
          </ProductReveal>
          <div className="mt-[0.46rem] py-[0.11rem] overflow-hidden">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:86s] motion-reduce:animate-none">
              {strip(1)}
              {strip(1, true)}
            </div>
          </div>
          <div className="mt-[0.46rem] py-[0.11rem] overflow-hidden">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:86s] [animation-direction:reverse] motion-reduce:animate-none">
              {strip(2)}
              {strip(2, true)}
            </div>
          </div>
          <div className="mt-[0.46rem] py-[0.11rem] overflow-hidden">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:86s] motion-reduce:animate-none">
              {strip(3)}
              {strip(3, true)}
            </div>
          </div>
          <div className="mt-[1.1rem] w-full text-center text-[0.16rem] leading-[0.38rem] font-medium text-white opacity-[0.6]">
            {t("sec7.redmind")}
          </div>
        </div>
        {/* sec8 d__sec */}
        <div className="pt-[0.82rem] relative flex flex-col items-center">
          <ProductReveal className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
            {t("sec8.title")}
          </ProductReveal>
          <div className="mt-[0.74rem] rounded-[0.2rem] w-[16rem] overflow-hidden">
            <MarketingVideo
              bare
              src="/8f4239b1vodgzp1251222210/1cd1b85f387702294101231116/ZyDAemuer74A.mp4"
              className="w-full aspect-[1600/840]"
            />
          </div>
        </div>
        {/* sec9 d__sec */}
        <div className="pt-[1.2rem] pb-[1.77rem] relative flex flex-col items-center">
          <ProductReveal className="">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
              {t("sec9.title")}
            </div>
            <div className="text-center text-white text-[0.2rem] leading-[0.4rem] font-medium">
              {t("sec9.desc")}
            </div>
          </ProductReveal>
          <div
            className="mt-[0.6rem] bg-no-repeat bg-cover w-[16rem] h-[6.98rem]"
            style={bg(
              "/guanwang_second/front/images/new/products/q/sec10-45d32a4e14.webp",
            )}
          />
        </div>
        {/* sec10 d__sec */}
        <div className="relative flex flex-col items-center h-[15.02rem] overflow-hidden">
          <ProductReveal className="absolute left-0 top-[1.2rem] z-[3] w-full">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
              {t("sec10.title")}
            </div>
            <div className="text-center text-white text-[0.2rem] leading-[0.4rem] font-medium">
              {t("sec10.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-no-repeat bg-cover absolute left-1/2 top-[3.62rem] -translate-x-1/2 z-[1] w-[11.64rem] h-[2.71rem]"
            style={bg(
              "/guanwang_second/front/images/new/products/q/sec10_digits.svg",
            )}
          >
            <span className="absolute left-[11.05rem] top-0 whitespace-nowrap text-[0.5rem] leading-none font-medium bg-[image:linear-gradient(180deg,#ffffff_0%,#fdc389_61%,#edd290_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec10.unit")}
            </span>
          </div>
          <div
            className="bg-no-repeat bg-cover absolute left-1/2 bottom-[-1.06rem] -translate-x-1/2 z-[5] w-[16rem] h-[13.08rem]"
            style={bg(
              "/guanwang_second/front/images/new/products/q/sec10_bg-cabfeb54d5.webp",
            )}
          />
        </div>
        {/* sec11 d__sec */}
        <div className="pt-[1.09rem] pb-[1.1rem] relative flex flex-col items-center">
          <ProductReveal className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
            {t("sec11.title")}
          </ProductReveal>
          <div className="mt-[0.8rem] flex">
            <div className="mr-[0.5rem] w-[6.7rem]">
              <div
                className="bg-no-repeat bg-cover w-full h-[8.1rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec12_2-7684bdc92d.webp",
                )}
              />
              <div className="mt-[0.67rem] text-center text-white">
                <div className="text-[0.26rem] leading-[0.38rem] font-extrabold">
                  {t("sec11.item_title")}
                </div>
                <div className="mt-[0.16rem] text-[0.24rem] leading-[0.34rem] font-normal">
                  {t("sec11.item_desc")}
                </div>
              </div>
            </div>
            <div className="w-[6.7rem]">
              <div
                className="bg-no-repeat bg-cover w-full h-[8.1rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec12_1-51b7e65b49.webp",
                )}
              />
              <div className="mt-[0.67rem] text-center text-white">
                <div className="text-[0.26rem] leading-[0.38rem] font-extrabold">
                  {t("sec11.item_title2")}
                </div>
                <div className="mt-[0.16rem] text-[0.24rem] leading-[0.34rem] font-normal">
                  {t("sec11.item_desc2")}
                </div>
              </div>
            </div>
          </div>
          <ProductReveal className="mt-[1.26rem]">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
              {t("sec11.title2")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] leading-[0.3rem] font-normal text-center text-white">
              {t("sec11.desc")}
            </div>
          </ProductReveal>
          <div
            className="mt-[0.52rem] bg-no-repeat bg-cover w-[13.9rem] h-[7rem]"
            style={bg(
              "/guanwang_second/front/images/new/products/q/sec13-2dfc5e2c58.webp",
            )}
          />
          <div className="mt-[1.05rem] text-[0.22rem] leading-[0.3rem] font-normal text-white opacity-[0.7]">
            {t("sec11.remind")}
          </div>
        </div>
        {/* sec12 video__container */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/q_mobile_1.mp4"
            className="w-full aspect-[1920/1212]"
          />
          <ProductReveal className="absolute top-[1.2rem] left-0 w-full">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
              {t("sec12.title")}
            </div>
            <div className="text-center text-white text-[0.2rem] leading-[0.4rem] font-medium max-w-[11rem] mx-auto">
              {t("sec12.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec13 d__sec */}
        <div className="pt-[2.1rem] relative flex flex-col items-center">
          <ProductReveal className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold">
            {t("sec13.title")}
          </ProductReveal>
          <div className="mt-[0.8rem] flex">
            <div className="mr-[0.36rem] rounded-[0.2rem] flex flex-col w-[4.5rem] min-h-[6.2rem] overflow-hidden">
              <div
                className="bg-no-repeat bg-cover w-full h-[3.73rem] shrink-0"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec15_1-64bcc9ac3c.webp",
                )}
              />
              <div className="flex-1 flex flex-col items-center py-[0.34rem] w-full bg-[#151515] text-white">
                <div className="text-center text-[0.3rem] leading-[0.42rem] font-extrabold">
                  {t("sec13.item_title")}
                </div>
                <div className="mt-[0.2rem] text-center text-[0.2rem] leading-[0.36rem] font-normal opacity-[0.6] max-w-[4rem] mx-auto">
                  {t("sec13.item_desc")}
                </div>
              </div>
            </div>
            <div className="mr-[0.36rem] rounded-[0.2rem] flex flex-col w-[4.5rem] min-h-[6.2rem] overflow-hidden">
              <div
                className="bg-no-repeat bg-cover w-full h-[3.73rem] shrink-0"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec15_2-87fdf0f411.webp",
                )}
              />
              <div className="flex-1 flex flex-col items-center py-[0.34rem] w-full bg-[#151515] text-white">
                <div className="text-center text-[0.3rem] leading-[0.42rem] font-extrabold">
                  {t("sec13.item_title2")}
                </div>
                <div className="mt-[0.2rem] text-center text-[0.2rem] leading-[0.36rem] font-normal opacity-[0.6] max-w-[4rem] mx-auto">
                  {t("sec13.item_desc2")}
                </div>
              </div>
            </div>
            <div className="rounded-[0.2rem] flex flex-col w-[4.5rem] min-h-[6.2rem] overflow-hidden">
              <div
                className="bg-no-repeat bg-cover w-full h-[3.73rem] shrink-0"
                style={bg(
                  "/guanwang_second/front/images/new/products/q/sec15_3-df94dbcde4.webp",
                )}
              />
              <div className="flex-1 flex flex-col items-center py-[0.34rem] w-full bg-[#151515] text-white">
                <div className="text-center text-[0.3rem] leading-[0.42rem] font-extrabold">
                  {t("sec13.item_title3")}
                </div>
                <div className="mt-[0.2rem] text-center text-[0.2rem] leading-[0.36rem] font-normal opacity-[0.6] max-w-[4rem] mx-auto">
                  {t("sec13.item_desc3")}
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-[1.2rem] bg-no-repeat bg-cover flex flex-col items-center justify-center w-[14.22rem] h-[4.84rem] text-white"
            style={bg(
              "/guanwang_second/front/images/new/products/q/sec16-33daddef47.webp",
            )}
          >
            <div
              className="bg-no-repeat bg-cover w-[2.64rem] h-[0.64rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/q/footer_logo-2703d90387.svg",
              )}
            />
            <div className="mt-[0.4rem] text-[0.54rem] leading-[0.76rem] font-extrabold">
              {t("sec13.banner_title")}
            </div>
            <div className="mt-[0.3rem] max-w-[11rem] text-center text-balance text-[0.22rem] leading-[0.36rem] font-normal opacity-[0.7]">
              {t("sec13.banner_desc")}
            </div>
          </div>
        </div>
        {/* page__footer */}
        <div className="pt-[1.02rem] pb-[1.51rem] flex justify-center w-full bg-[#151515] text-[0.16rem] leading-[0.24rem] font-medium text-white opacity-[0.46]">
          <div className="w-[14.56rem]">
            <p>{t("page_footer.footer_info")}</p>
            <p className="mt-[0.24rem]">{t("page_footer.footer_info3")}</p>
          </div>
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
