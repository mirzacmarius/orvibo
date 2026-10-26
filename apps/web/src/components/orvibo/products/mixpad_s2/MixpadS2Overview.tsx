import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { ProductScrollFrames } from "@/components/orvibo/product/ProductScrollFrames";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function MixpadS2Overview({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* s2Page */}
      <div id="overview" className="bg-black">
        {/* banner */}
        <div
          className="bg-center mx-auto pt-[2.36rem] pl-[2.59rem] min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[9.7rem]"
          style={bg(
            "/guanwang_second/front/images/products/s2/banner-6497e9f8d5.webp",
          )}
        >
          <div className="mb-[0.17rem] font-extrabold text-[#ebd2b3] text-[0.56rem] leading-[0.72rem]">
            {t("banner.title")}
          </div>
          <div className="mb-[0.56rem] text-[#ebd2b3] text-[0.36rem] flex items-center">
            <span className="inline-block leading-[0.5rem]">
              {t("banner.desc")}
            </span>
          </div>
          <div className="mb-[0.73rem] ml-[0.09rem] flex">
            <div>
              <Image
                src={img(
                  "/guanwang_second/front/images/products/s2/banner_img-71a1ede58c.webp",
                )}
                alt=""
                width={28}
                height={157}
                unoptimized
                className="align-middle w-[0.28rem] h-[1.57rem]"
              />
            </div>
            <ul className="ml-[0.15rem]">
              <li className="mb-[0.18rem] text-[0.2rem] leading-[0.27rem] text-[#ebd2b3]/70 whitespace-nowrap">
                {t("banner.info")}
              </li>
              <li className="mb-[0.18rem] text-[0.2rem] leading-[0.27rem] text-[#ebd2b3]/70 whitespace-nowrap">
                {t("banner.info2")}
              </li>
              <li className="mb-[0.18rem] text-[0.2rem] leading-[0.27rem] text-[#ebd2b3]/70 whitespace-nowrap">
                {t("banner.info3")}
              </li>
              <li className="text-[0.2rem] leading-[0.27rem] text-[#ebd2b3]/70 whitespace-nowrap">
                {t("banner.info4")}
              </li>
            </ul>
          </div>
          <div className="text-[0.2rem] leading-[0.28rem] font-medium text-[#ebd2b3] max-w-[6.2rem] text-pretty">
            {t("banner.subDesc")}
          </div>
        </div>
        {/* sec1 up show */}
        <div
          className="bg-center h-[10.8rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec1-87b89c4913.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1.28rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
              {t("sec1.title")}
            </div>
          </ProductReveal>
        </div>
        {/* sec2_1 up show */}
        <div
          className="bg-center h-[10.8rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec2_1-60a2b58c04.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1.28rem] pb-[0.3rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
              {t("sec2_1.title")}
            </div>
            <div className="text-[0.2rem] leading-[0.32rem] font-medium text-white text-center px-[0.2rem] text-balance">
              {t("sec2_1.subDesc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec2 */}
        <div
          className="bg-center h-[9.6rem] bg-no-repeat bg-cover relative"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec2-0d04b1d80e.webp",
          )}
        >
          <div className="ml-[2.84rem] absolute top-[4.95rem] left-1/2">
            <ProductReveal className="">
              <div className="mb-[0.3rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] max-w-[6rem] text-balance">
                {t("sec2.title")}
              </div>
              <div className="text-[0.2rem] leading-[0.32rem] font-medium text-white max-w-[5.6rem] text-pretty">
                {t("sec2.subDesc")}
              </div>
            </ProductReveal>
          </div>
        </div>
        {/* sec3 */}
        <div
          className="bg-center pt-[2.85rem] pl-[2.19rem] h-[10.8rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec3-179b33b2a9.webp",
          )}
        >
          <div>
            <ProductReveal className="">
              <div className="mb-[0.3rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.77rem]">
                {t("sec3.title")}
              </div>
              <div className="text-[0.2rem] leading-[0.32rem] font-medium text-white max-w-[6.8rem] text-pretty">
                {t("sec3.subDesc")}
              </div>
            </ProductReveal>
          </div>
        </div>
        {/* sec4 up show */}
        <div
          className="bg-center h-[10.8rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec4-b08bc868e1.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1.1rem] pb-[0.3rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
              {t("sec4.title")}
            </div>
            <div className="text-[0.2rem] leading-[0.32rem] font-medium text-white text-center max-w-[11rem] mx-auto text-balance">
              {t("sec4.subDesc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec5 up show */}
        <div
          className="bg-center h-[11.43rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec5-487d3eb6ab.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1.1rem] pb-[0.3rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
              {t("sec5.title")}
            </div>
            <div className="text-[0.2rem] leading-[0.32rem] font-medium text-white text-center max-w-[10.7rem] mx-auto text-balance">
              {t("sec5.subDesc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec6 up show */}
        <div
          className="bg-center h-[12rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec6-ccebe0a8f6.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1.04rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
              {t("sec6.title")}
            </div>
          </ProductReveal>
        </div>
        {/* sec7 up show */}
        <div
          className="bg-center h-[13rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec7-40d03e3a95.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[0.96rem] pb-[0.3rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
              {t("sec7.title")}
            </div>
            <div className="text-[0.2rem] leading-[0.32rem] font-medium text-white text-center max-w-[13.3rem] mx-auto text-balance">
              {t("sec7.subDesc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec8 up show */}
        <div
          className="bg-center pt-[1.49rem] pl-[2.32rem] h-[9rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec8-49c19d0be1.webp",
          )}
        >
          <ProductReveal className="">
            <div className="mb-[0.26rem] ml-[0.01rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.77rem]">
              {t("sec8.title")}
            </div>
            <div className="text-[0.2rem] leading-[0.32rem] font-medium text-white max-w-[5.9rem] text-pretty">
              {t("sec8.subDesc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec9 up show */}
        <div
          className="bg-center h-[10rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec9-8e75bb737a.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1.1rem] pb-[0.3rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
              {t("sec9.title")}
            </div>
            <div className="mb-[0.31rem] text-[0.2rem] leading-[0.31rem] font-medium text-white text-center max-w-[14.2rem] mx-auto text-balance">
              {t("sec9.subDesc")}
            </div>
          </ProductReveal>
          <ul className="flex flex-wrap justify-center gap-x-[0.24rem] gap-y-[0.08rem] px-[0.2rem] text-[0.16rem] leading-[0.22rem] text-white">
            <li>{t("sec9.info1")}</li>
            <li aria-hidden className="text-white/50">
              |
            </li>
            <li>{t("sec9.info2")}</li>
            <li aria-hidden className="text-white/50">
              |
            </li>
            <li>{t("sec9.info3")}</li>
            <li aria-hidden className="text-white/50">
              |
            </li>
            <li>{t("sec9.info4")}</li>
          </ul>
        </div>
        {/* sec10 up show */}
        <div
          className="bg-center h-[9.6rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec10-d9246d07a8.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
              {t("sec10.title")}
            </div>
          </ProductReveal>
        </div>
        {/* sec11_1 up show */}
        <div
          className="bg-center h-[12rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/sec11-246f4ea9f8.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1.1rem] pb-[0.3rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
              {t("sec11_1.title")}
            </div>
            <div className="text-[0.2rem] leading-[0.28rem] font-medium text-white text-center px-[0.2rem] text-balance">
              {t("sec11_1.subDesc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec11 */}
        <ProductScrollFrames
          className="z-[2] h-[20rem] bg-black"
          frameClassName="top-[calc(50vh-4.8rem)] h-[9.6rem]"
          frames={[
            {
              key: "lights",
              content: (
                <Image
                  src={img(
                    "/guanwang_second/front/images/products/s2/sec12_1-60fbdef267.webp",
                  )}
                  alt=""
                  width={1920}
                  height={960}
                  unoptimized
                  className="size-full object-cover"
                />
              ),
            },
            {
              key: "curtains",
              content: (
                <Image
                  src={img(
                    "/guanwang_second/front/images/products/s2/sec12_2-20c26f59c4.webp",
                  )}
                  alt=""
                  width={1920}
                  height={960}
                  unoptimized
                  className="size-full object-cover"
                />
              ),
            },
          ]}
        >
          <div className="absolute inset-x-0 top-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.35)_65%,transparent_100%)] pb-[0.8rem]">
            <ProductReveal className="">
              <div className="px-[0.2rem] pt-[1rem] pb-[0.3rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] text-center text-balance">
                {t("sec11.title")}
              </div>
              <div className="text-[0.2rem] leading-[0.32rem] font-medium text-white text-center max-w-[10.4rem] mx-auto px-[0.2rem] text-balance">
                {t("sec11.subDesc")}
              </div>
            </ProductReveal>
          </div>
        </ProductScrollFrames>
        {/* sec13 */}
        <div className="bg-[#0f0f0f] pb-[1rem]">
          <div className="pt-[1.1rem] pb-[0.87rem] font-extrabold text-[#ebd2b3] text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
            {t("sec13.title")}
          </div>
          <ul className="mx-auto mb-[0.7rem] grid w-[14rem] grid-cols-4 gap-x-[0.3rem] gap-y-[0.7rem] border-b border-dashed border-b-[#707070] px-[0.6rem] pb-[0.7rem]">
            <li className="text-center">
              <p className="whitespace-nowrap">
                <span className="bg-[linear-gradient(180deg,#ead3a9_0%,#c3a576_100%)] bg-clip-text text-transparent text-[0.36rem] leading-[0.4rem]">
                  {t("sec13.cycles300")}
                </span>
                <span className="ml-[0.06rem] text-[0.18rem] text-white">
                  {t("sec13.cycles")}
                </span>
              </p>
              <p className="mt-[0.24rem] text-[0.24rem] leading-[0.33rem] text-balance">
                {t("sec13.subtitle")}
              </p>
            </li>
            <li className="text-center">
              <p className="whitespace-nowrap">
                <span className="bg-[linear-gradient(180deg,#ead3a9_0%,#c3a576_100%)] bg-clip-text text-transparent text-[0.36rem] leading-[0.4rem]">
                  {t("sec13.cycles300")}
                </span>
                <span className="ml-[0.06rem] text-[0.18rem] text-white">
                  {t("sec13.cycles")}
                </span>
              </p>
              <p className="mt-[0.24rem] text-[0.24rem] leading-[0.33rem] text-balance">
                {t("sec13.subtitle2")}
              </p>
            </li>
            <li className="text-center">
              <p className="whitespace-nowrap">
                <span className="bg-[linear-gradient(180deg,#ead3a9_0%,#c3a576_100%)] bg-clip-text text-transparent text-[0.36rem] leading-[0.4rem]">
                  {"6000"}
                </span>
                <span className="ml-[0.06rem] text-[0.18rem] text-white">
                  {"N"}
                </span>
              </p>
              <p className="mt-[0.24rem] text-[0.24rem] leading-[0.33rem] text-balance">
                {t("sec13.subtitle3")}
              </p>
            </li>
            <li className="text-center">
              <p className="whitespace-nowrap">
                <span className="bg-[linear-gradient(180deg,#ead3a9_0%,#c3a576_100%)] bg-clip-text text-transparent text-[0.36rem] leading-[0.4rem]">
                  {t("sec13.cycles300")}
                </span>
                <span className="ml-[0.06rem] text-[0.18rem] text-white">
                  {t("sec13.cycles")}
                </span>
              </p>
              <p className="mt-[0.24rem] text-[0.24rem] leading-[0.33rem] text-balance">
                {t("sec13.subtitle4")}
              </p>
            </li>
            <li className="text-center">
              <p className="whitespace-nowrap">
                <span className="bg-[linear-gradient(180deg,#ead3a9_0%,#c3a576_100%)] bg-clip-text text-transparent text-[0.36rem] leading-[0.4rem]">
                  {"−40"}
                </span>
                <span className="ml-[0.06rem] text-[0.18rem] text-white">
                  {"°C"}
                </span>
                <span className="mx-[0.06rem] text-[0.18rem] text-white">
                  {"~"}
                </span>
                <span className="bg-[linear-gradient(180deg,#ead3a9_0%,#c3a576_100%)] bg-clip-text text-transparent text-[0.36rem] leading-[0.4rem]">
                  {"75"}
                </span>
                <span className="ml-[0.06rem] text-[0.18rem] text-white">
                  {"°C"}
                </span>
              </p>
              <p className="mt-[0.24rem] text-[0.24rem] leading-[0.33rem] text-balance">
                {t("sec13.subtitle5")}
              </p>
            </li>
            <li className="text-center">
              <p className="whitespace-nowrap">
                <span className="bg-[linear-gradient(180deg,#ead3a9_0%,#c3a576_100%)] bg-clip-text text-transparent text-[0.36rem] leading-[0.4rem]">
                  {"48"}
                </span>
                <span className="ml-[0.06rem] text-[0.18rem] text-white">
                  {t("sec13.hours")}
                </span>
              </p>
              <p className="mt-[0.24rem] text-[0.24rem] leading-[0.33rem] text-balance">
                {t("sec13.subtitle6")}
              </p>
            </li>
            <li className="text-center">
              <p className="whitespace-nowrap">
                <span className="bg-[linear-gradient(180deg,#ead3a9_0%,#c3a576_100%)] bg-clip-text text-transparent text-[0.36rem] leading-[0.4rem]">
                  {t("sec13.cycles200")}
                </span>
                <span className="ml-[0.06rem] text-[0.18rem] text-white">
                  {t("sec13.cycles")}
                </span>
              </p>
              <p className="mt-[0.24rem] text-[0.24rem] leading-[0.33rem] text-balance">
                {t("sec13.subtitle7")}
              </p>
            </li>
            <li className="text-center">
              <p className="whitespace-nowrap">
                <span className="bg-[linear-gradient(180deg,#ead3a9_0%,#c3a576_100%)] bg-clip-text text-transparent text-[0.36rem] leading-[0.4rem]">
                  {"120"}
                </span>
                <span className="ml-[0.06rem] text-[0.18rem] text-white">
                  {t("sec13.hours")}
                </span>
              </p>
              <p className="mt-[0.24rem] text-[0.24rem] leading-[0.33rem] text-balance">
                {t("sec13.subtitle8")}
              </p>
            </li>
          </ul>
          <div className="text-center text-[0.16rem] leading-[0.34rem] text-white/55 max-w-[8.9rem] mx-auto px-[0.2rem] text-balance">
            {t("sec13.info")}
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
