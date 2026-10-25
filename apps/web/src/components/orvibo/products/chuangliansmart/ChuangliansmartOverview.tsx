import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function ChuangliansmartOverview({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* chuangliansmart */}
      <div id="overview" className="bg-white">
        {/* banner */}
        <div
          className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat w-full h-[9.54rem] text-[#111111] tracking-[0.01rem] text-center pl-[0.4rem]"
          style={bg(
            "/guanwang_second/front/images/products/chuangliansmart/banner-87f193621f.webp",
          )}
        >
          <div className="relative mt-[1.82rem] leading-[0.32rem]">
            <span className="inline-block rounded-[0.19rem] border-[2px] border-[#111111] px-[0.21rem] text-[0.23rem] font-extrabold leading-[0.32rem] text-[#111111]">
              {t("banner.bannerTitle2")}
            </span>
          </div>
          <div className="relative mt-[-0.02rem] text-[0.62rem] font-extrabold leading-[1.6] text-[#111111]">
            {t("banner.bannerTitle")}
          </div>
          <Image
            src={img(
              "/guanwang_second/front/images/products/chuangliansmart/banner_text-4d74747657.webp",
            )}
            alt=""
            width={546}
            height={199}
            unoptimized
            className="mt-[-0.37rem] ml-[-0.5rem] align-middle inline-block w-[5.46rem] h-[1.99rem]"
          />
          <div className="absolute left-1/2 top-[5.5rem] ml-[0.17rem] flex -translate-x-1/2 gap-[0.17rem]">
            <span className="flex h-[0.62rem] items-center whitespace-nowrap rounded-[0.1rem] px-[0.22rem] text-[0.18rem] font-normal tracking-normal text-[#1a1a1a] shadow-[0_0.04rem_0.12rem_rgba(40,50,60,0.06)] bg-gradient-to-r from-[#f7f2f0] to-[#eee2dd]">
              {t("banner.pill")}
            </span>
            <span className="flex h-[0.62rem] items-center whitespace-nowrap rounded-[0.1rem] px-[0.22rem] text-[0.18rem] font-normal tracking-normal text-[#1a1a1a] shadow-[0_0.04rem_0.12rem_rgba(40,50,60,0.06)] bg-gradient-to-r from-[#f5f0e7] to-[#efdcc0]">
              {t("banner.pill2")}
            </span>
            <span className="flex h-[0.62rem] items-center whitespace-nowrap rounded-[0.1rem] px-[0.22rem] text-[0.18rem] font-normal tracking-normal text-[#1a1a1a] shadow-[0_0.04rem_0.12rem_rgba(40,50,60,0.06)] bg-gradient-to-r from-[#eaf6fb] to-[#d2ebf5]">
              {t("banner.pill3")}
            </span>
          </div>
        </div>
        {/* sec1 */}
        <div className="pt-[1.1rem] h-[8.97rem]">
          <h2 className="text-[0.48rem] leading-[0.77rem] font-extrabold text-[#111111] text-center">
            {t("sec1.title")}
          </h2>
          <div className="bg-center mx-auto mt-[0.8rem] w-[16rem] bg-no-repeat bg-cover flex justify-between">
            <div className="w-[5.1rem] text-center text-[#111111]">
              <div className="bg-center bg-no-repeat bg-cover w-[5.1rem] h-[3.4rem]">
                <Image
                  src={img(
                    "/guanwang_second/front/images/products/chuangliansmart/sec1_1-047c8f3dad.webp",
                  )}
                  alt=""
                  width={510}
                  height={340}
                  unoptimized
                  className="inline align-middle w-full h-full"
                />
              </div>
              <h3 className="mt-[0.4rem] mb-[0.21rem] text-[0.24rem] leading-[0.33rem] font-extrabold">
                {t("sec1.card")}
              </h3>
              <p className="text-[0.16rem] leading-[0.26rem] font-normal text-pretty">
                {t("sec1.card2")}
              </p>
            </div>
            <div className="w-[5.1rem] text-center text-[#111111]">
              <div className="bg-center bg-no-repeat bg-cover w-[5.1rem] h-[3.4rem]">
                <Image
                  src={img(
                    "/guanwang_second/front/images/products/chuangliansmart/sec1_2-a5725b2073.webp",
                  )}
                  alt=""
                  width={510}
                  height={340}
                  unoptimized
                  className="inline align-middle w-full h-full"
                />
              </div>
              <h3 className="mt-[0.4rem] mb-[0.21rem] text-[0.24rem] leading-[0.33rem] font-extrabold">
                {t("sec1.card3")}
              </h3>
              <p className="text-[0.16rem] leading-[0.26rem] font-normal text-pretty">
                {t("sec1.card4")}
              </p>
            </div>
            <div className="w-[5.1rem] text-center text-[#111111]">
              <div className="bg-center bg-no-repeat bg-cover w-[5.1rem] h-[3.4rem]">
                <Image
                  src={img(
                    "/guanwang_second/front/images/products/chuangliansmart/sec1_3-3ca16dbe8c.webp",
                  )}
                  alt=""
                  width={510}
                  height={340}
                  unoptimized
                  className="inline align-middle w-full h-full"
                />
              </div>
              <h3 className="mt-[0.4rem] mb-[0.21rem] text-[0.24rem] leading-[0.33rem] font-extrabold">
                {t("sec1.card5")}
              </h3>
              <p className="text-[0.16rem] leading-[0.26rem] font-normal text-pretty">
                {t("sec1.card6")}
              </p>
            </div>
          </div>
        </div>
        {/* sec2 sec lazy */}
        <div
          className="bg-center pt-[1.1rem] bg-no-repeat bg-cover h-[9.24rem] overflow-hidden"
          style={bg(
            "/guanwang_second/front/images/products/chuangliansmart/sec2-760679d363.webp",
          )}
        >
          <h2 className="mb-[0.26rem] text-[0.48rem] leading-[0.77rem] font-extrabold text-[#111111] text-center">
            {t("sec2.title")}
          </h2>
          <p className="text-[0.24rem] leading-[0.38rem] font-medium text-[#111111] text-center">
            {t("sec2.desc")}
          </p>
          <p className="mx-auto mt-[5.55rem] text-[0.2rem] leading-[0.33rem] font-medium text-[#111111] text-center w-[12rem]">
            {t("sec2.info")}
          </p>
        </div>
        {/* sec3 */}
        <div>
          <h2 className="pt-[0.74rem] pb-[0.73rem] text-[0.48rem] leading-[0.77rem] font-extrabold text-[#111111] text-center">
            {t("sec3.title")}
          </h2>
          <div className="bg-[#f3f3f3] flex">
            <div className="w-[9.6rem]">
              <div className="pt-[1.51rem] pl-[1.8rem]">
                <h3 className="mb-[0.2rem] text-[0.36rem] leading-[0.5rem] font-extrabold text-[#111111]">
                  {t("sec3.content")}
                </h3>
                <p className="mb-[0.4rem] text-[0.18rem] font-normal text-[#111111] max-w-[6.1rem] text-pretty">
                  {t("sec3.content2")}
                </p>
                <ProductReveal className="mb-[0.2rem] rounded-[0.27rem] h-[0.6rem] leading-[0.6rem] bg-[#f9f9f9] shadow-[rgba(0,0,0,0.07)_0px_6px_12px] text-center w-max px-[0.26rem]">
                  <Image
                    src={img(
                      "/guanwang_second/front/images/products/chuangliansmart/sec3_green-17ce5245be.webp",
                    )}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="inline align-middle w-[0.32rem] h-[0.32rem]"
                  />
                  <span className="ml-[0.11rem] text-[0.18rem] text-[#111111] font-normal">
                    {t("sec3.time1")}
                  </span>
                </ProductReveal>
                <ProductReveal className="mb-[0.2rem] rounded-[0.27rem] [transition-delay:0.3s] h-[0.6rem] leading-[0.6rem] bg-[#f9f9f9] shadow-[rgba(0,0,0,0.07)_0px_6px_12px] text-center w-max px-[0.26rem]">
                  <Image
                    src={img(
                      "/guanwang_second/front/images/products/chuangliansmart/sec3_gray-2bb4e49633.webp",
                    )}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="inline align-middle w-[0.32rem] h-[0.32rem]"
                  />
                  <span className="ml-[0.11rem] text-[0.18rem] text-[#111111] font-normal">
                    {t("sec3.time2")}
                  </span>
                </ProductReveal>
                <ProductReveal className="mb-[0.2rem] rounded-[0.27rem] [transition-delay:0.6s] h-[0.6rem] leading-[0.6rem] bg-[#f9f9f9] shadow-[rgba(0,0,0,0.07)_0px_6px_12px] text-center w-max px-[0.26rem]">
                  <Image
                    src={img(
                      "/guanwang_second/front/images/products/chuangliansmart/sec3_green-17ce5245be.webp",
                    )}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="inline align-middle w-[0.32rem] h-[0.32rem]"
                  />
                  <span className="ml-[0.11rem] text-[0.18rem] text-[#111111] font-normal">
                    {t("sec3.time3")}
                  </span>
                </ProductReveal>
              </div>
            </div>
            <div className="bg-center bg-no-repeat bg-cover w-[9.6rem] h-[7.2rem]">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/chuangliansmart/sec3_1-00afbc00fc.webp",
                )}
                alt=""
                width={960}
                height={720}
                unoptimized
                className="align-middle w-full h-full"
              />
            </div>
          </div>
          <div className="bg-[#f3f3f3] flex relative">
            <div
              className="bg-center bg-no-repeat bg-cover w-[9.6rem] h-[7.2rem]"
              style={bg(
                "/guanwang_second/front/images/products/chuangliansmart/sec3_2-a7a82ea733.webp",
              )}
            >
              <div className="rounded-full absolute w-[12px] h-[12px] bg-[#ffbe4a] top-[1.99rem] left-[5rem]">
                <div className="relative w-full h-full block">
                  <i className="border-[20px] border-[#f6c100] rounded-full animate-warn-pulse motion-reduce:hidden w-[60px] h-[60px] left-[-24px] top-[-24px] absolute z-[2] opacity-0" />
                  <i className="border-[20px] border-[#ffbe4a] rounded-full animate-warn-pulse [animation-duration:2s] motion-reduce:hidden w-[60px] h-[60px] left-[-24px] top-[-24px] absolute z-[1]" />
                </div>
              </div>
              <div className="rounded-full absolute w-[12px] h-[12px] bg-[#ffbe4a] top-[1.99rem] left-[5.96rem]">
                <div className="relative w-full h-full block">
                  <i className="border-[20px] border-[#f6c100] rounded-full animate-warn-pulse motion-reduce:hidden w-[60px] h-[60px] left-[-24px] top-[-24px] absolute z-[2] opacity-0" />
                  <i className="border-[20px] border-[#ffbe4a] rounded-full animate-warn-pulse [animation-duration:2s] motion-reduce:hidden w-[60px] h-[60px] left-[-24px] top-[-24px] absolute z-[1]" />
                </div>
              </div>
              <Image
                src={img(
                  "/guanwang_second/front/images/products/chuangliansmart/sec3_arrow_left-40b6524783.webp",
                )}
                alt=""
                width={69}
                height={20}
                unoptimized
                className="animate-nudge-left motion-reduce:animate-none align-middle w-[0.69rem] h-[0.2rem] inline-block absolute top-[3.25rem] left-[4.48rem]"
              />
              <Image
                src={img(
                  "/guanwang_second/front/images/products/chuangliansmart/sec3_arrow_right-9293ea3c83.webp",
                )}
                alt=""
                width={69}
                height={20}
                unoptimized
                className="animate-nudge-right motion-reduce:animate-none align-middle w-[0.69rem] h-[0.2rem] inline-block absolute top-[3.25rem] left-[5.98rem]"
              />
            </div>
            <div className="w-[9.6rem]">
              <div className="pt-[2.16rem] pl-[1.64rem]">
                <h3 className="mb-[0.2rem] text-[0.36rem] leading-[0.5rem] font-extrabold text-[#111111]">
                  {t("sec3.content3")}
                </h3>
                <p className="mb-[0.4rem] text-[0.18rem] font-normal text-[#111111] max-w-[6.1rem] text-pretty">
                  {t("sec3.content4")}
                </p>
                <ProductReveal className="mb-[0.2rem] rounded-[0.27rem] h-[0.6rem] leading-[0.6rem] bg-[#f9f9f9] shadow-[rgba(0,0,0,0.07)_0px_6px_12px] text-center w-max px-[0.26rem]">
                  <Image
                    src={img(
                      "/guanwang_second/front/images/products/chuangliansmart/sec3_yellow_moon-9fc881a488.webp",
                    )}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="inline align-middle w-[0.32rem] h-[0.32rem]"
                  />
                  <span className="ml-[0.11rem] text-[0.18rem] text-[#111111] font-normal">
                    {t("sec3.tips")}
                  </span>
                </ProductReveal>
                <ProductReveal className="mb-[0.2rem] rounded-[0.27rem] [transition-delay:0.3s] h-[0.6rem] leading-[0.6rem] bg-[#f9f9f9] shadow-[rgba(0,0,0,0.07)_0px_6px_12px] text-center w-max px-[0.26rem]">
                  <Image
                    src={img(
                      "/guanwang_second/front/images/products/chuangliansmart/sec3_green-17ce5245be.webp",
                    )}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="inline align-middle w-[0.32rem] h-[0.32rem]"
                  />
                  <span className="ml-[0.11rem] text-[0.18rem] text-[#111111] font-normal">
                    {t("sec3.tips2")}
                  </span>
                </ProductReveal>
              </div>
            </div>
          </div>
          <div className="bg-[#f3f3f3] flex">
            <div className="w-[9.6rem]">
              <div className="pt-[2.09rem] pl-[1.8rem]">
                <h3 className="mb-[0.2rem] text-[0.36rem] leading-[0.5rem] font-extrabold text-[#111111]">
                  {t("sec3.content5")}
                </h3>
                <p className="mb-[0.4rem] text-[0.18rem] font-normal text-[#111111] max-w-[6.1rem] text-pretty">
                  {t("sec3.content6")}
                </p>
                <ProductReveal className="mb-[0.2rem] rounded-[0.27rem] h-[0.6rem] leading-[0.6rem] bg-[#f9f9f9] shadow-[rgba(0,0,0,0.07)_0px_6px_12px] text-center w-max px-[0.26rem]">
                  <Image
                    src={img(
                      "/guanwang_second/front/images/products/chuangliansmart/sec3_green-17ce5245be.webp",
                    )}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="inline align-middle w-[0.32rem] h-[0.32rem]"
                  />
                  <span className="ml-[0.11rem] text-[0.18rem] text-[#111111] font-normal">
                    {t("sec3.tips3")}
                  </span>
                </ProductReveal>
                <ProductReveal className="mb-[0.2rem] rounded-[0.27rem] [transition-delay:0.3s] h-[0.6rem] leading-[0.6rem] bg-[#f9f9f9] shadow-[rgba(0,0,0,0.07)_0px_6px_12px] text-center w-max px-[0.26rem]">
                  <Image
                    src={img(
                      "/guanwang_second/front/images/products/chuangliansmart/sec3_green_moon-bcb7e4fc89.webp",
                    )}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="inline align-middle w-[0.32rem] h-[0.32rem]"
                  />
                  <span className="ml-[0.11rem] text-[0.18rem] text-[#111111] font-normal">
                    {t("sec3.tips4")}
                  </span>
                </ProductReveal>
              </div>
            </div>
            <div className="bg-center bg-no-repeat bg-cover w-[9.6rem] h-[7.2rem]">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/chuangliansmart/sec3_3-74c07784e2.webp",
                )}
                alt=""
                width={960}
                height={720}
                unoptimized
                className="align-middle w-full h-full"
              />
            </div>
          </div>
        </div>
        {/* sec4 sec lazy */}
        <div
          className="bg-center pt-[1.1rem] bg-no-repeat bg-cover h-[10rem] overflow-hidden"
          style={bg(
            "/guanwang_second/front/images/products/chuangliansmart/sec4-2403b9c94f.webp",
          )}
        >
          <h2 className="mb-[0.3rem] text-[0.48rem] leading-[0.77rem] font-extrabold text-[#111111] text-center">
            {t("sec4.title")}
          </h2>
          <p className="text-[0.24rem] leading-[0.38rem] font-medium text-[#111111] text-center max-w-[10.1rem] mx-auto text-balance">
            {t("sec4.desc")}
          </p>
        </div>
        {/* sec5 sec lazy */}
        <div
          className="bg-center pt-[1.13rem] bg-no-repeat bg-cover h-[10rem] overflow-hidden relative"
          style={bg(
            "/guanwang_second/front/images/products/chuangliansmart/sec5-9c62d9a71b.webp",
          )}
        >
          <h2 className="mb-[0.3rem] text-[0.48rem] leading-[0.77rem] font-extrabold text-[#111111] text-center">
            {t("sec5.title")}
          </h2>
          <p className="text-[0.24rem] leading-[0.38rem] font-medium text-[#111111] text-center mx-auto max-w-[10rem] text-balance">
            {t("sec5.desc")}
          </p>
          <Image
            src={img(
              "/guanwang_second/front/images/products/chuangliansmart/sec5_arrow-61d5e6aadb.webp",
            )}
            alt=""
            width={87}
            height={26}
            unoptimized
            className="animate-nudge-left motion-reduce:animate-none align-middle inline-block w-[0.87rem] h-[0.26rem] absolute top-[4.53rem] left-[6rem]"
          />
          <Image
            src={img(
              "/guanwang_second/front/images/products/chuangliansmart/sec5_arrow-61d5e6aadb.webp",
            )}
            alt=""
            width={87}
            height={26}
            unoptimized
            className="animate-nudge-left motion-reduce:animate-none align-middle inline-block w-[0.87rem] h-[0.26rem] absolute top-[5.26rem] left-[5.71rem]"
          />
          <Image
            src={img(
              "/guanwang_second/front/images/products/chuangliansmart/sec5_arrow-61d5e6aadb.webp",
            )}
            alt=""
            width={87}
            height={26}
            unoptimized
            className="animate-nudge-left motion-reduce:animate-none align-middle inline-block w-[0.87rem] h-[0.26rem] absolute top-[5.99rem] left-[6rem]"
          />
        </div>
        {/* sec6 sec lazy */}
        <div
          className="bg-center pt-[1.13rem] bg-no-repeat bg-cover h-[10.4rem] overflow-hidden"
          style={bg(
            "/guanwang_second/front/images/products/chuangliansmart/sec6-bd3d093177.webp",
          )}
        >
          <h2 className="mb-[0.3rem] text-[0.48rem] leading-[0.77rem] font-extrabold text-[#111111] text-center">
            {t("sec6.title")}
          </h2>
          <p className="text-[0.24rem] leading-[0.38rem] font-medium text-[#111111] text-center max-w-[9.5rem] mx-auto text-balance">
            {t("sec6.desc")}
          </p>
        </div>
        {/* sec7 sec lazy */}
        <div
          className="bg-center pt-[1.13rem] bg-no-repeat bg-cover h-[18.22rem] overflow-hidden"
          style={bg(
            "/guanwang_second/front/images/products/chuangliansmart/sec7-cb04a86f94.webp",
          )}
        >
          <h2 className="mb-[0.3rem] text-[0.48rem] leading-[0.77rem] font-extrabold text-[#111111] text-center">
            {t("sec7.title")}
          </h2>
          <p className="text-[0.24rem] leading-[0.38rem] font-medium text-[#111111] text-center">
            {t("sec7.desc")}
          </p>
        </div>
        {/* sec8 sec lazy */}
        <div
          className="bg-center pt-[1.18rem] bg-no-repeat bg-cover h-[17rem] overflow-hidden"
          style={bg(
            "/guanwang_second/front/images/products/chuangliansmart/sec8-3f24a808d0.webp",
          )}
        >
          <h2 className="mb-[0.3rem] text-[0.48rem] leading-[0.77rem] font-extrabold text-[#111111] text-center">
            {t("sec8.title")}
          </h2>
          <p className="text-[0.24rem] leading-[0.38rem] font-medium text-[#111111] text-center max-w-[9.8rem] mx-auto text-balance">
            {t("sec8.desc")}
          </p>
          <div className="mt-[48px] text-center">
            <Image
              src={img(
                "/guanwang_second/front/images/products/chuangliansmart/sec8_logo-d17f00af8a.webp",
              )}
              alt=""
              width={500}
              height={100}
              unoptimized
              className="inline align-middle"
            />
          </div>
          <div className="mx-auto mt-[8.48rem] pt-[0.57rem] pb-[0.61rem] w-[12rem] flex bg-[#e2e2e1]">
            <div className="border-r border-r-[#707070]/60 w-[50%] text-center">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/chuangliansmart/sec8_1-5a77580b3a.webp",
                )}
                alt=""
                width={61}
                height={61}
                unoptimized
                className="inline align-middle w-[0.64rem] h-[0.61rem]"
              />
              <h2 className="mt-[0.25rem] mb-[0.1rem] text-[0.24rem] leading-[0.33rem] font-extrabold">
                {t("sec8.content")}
              </h2>
              <p className="text-[0.2rem] leading-[0.28rem] font-medium">
                {t("sec8.content2")}
              </p>
            </div>
            <div className="w-[50%] text-center">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/chuangliansmart/sec8_2-93a3040167.webp",
                )}
                alt=""
                width={55}
                height={69}
                unoptimized
                className="inline align-middle w-[0.55rem] h-[0.69rem]"
              />
              <h2 className="mt-[0.21rem] mb-[0.1rem] text-[0.24rem] leading-[0.33rem] font-extrabold">
                {t("sec8.content3")}
              </h2>
              <p className="text-[0.2rem] leading-[0.28rem] font-medium">
                {t("sec8.content4")}
              </p>
            </div>
          </div>
        </div>
        {/* sec9 */}
        <div className="pt-[1.1rem] h-[19.28rem] overflow-hidden bg-[#f2f2f2]">
          <h2 className="text-[0.48rem] leading-[0.77rem] font-extrabold text-[#111111] text-center">
            {t("sec9.title")}
          </h2>
          <div className="bg-center mx-auto mt-[1rem] w-[16rem] bg-no-repeat bg-cover">
            <div
              className="bg-center mb-[0.25rem] pt-[1.44rem] pl-[1.3rem] bg-no-repeat bg-cover h-[4.53rem] relative text-[#111111]"
              style={bg(
                "/guanwang_second/front/images/products/chuangliansmart/sec9_1-9e8386dff3.webp",
              )}
            >
              <h3 className="mb-[0.17rem] text-[0.36rem] leading-[0.5rem] font-extrabold">
                {t("sec9.bg")}
              </h3>
              <p className="text-[0.2rem] font-normal max-w-[5.4rem] text-pretty">
                {t("sec9.bg2")}
              </p>
            </div>
            <div
              className="bg-center mb-[0.25rem] pt-[1.41rem] pl-[9.32rem] bg-no-repeat bg-cover h-[4.53rem] relative text-[#111111]"
              style={bg(
                "/guanwang_second/front/images/products/chuangliansmart/sec9_2-891ca4cdbf.webp",
              )}
            >
              <h3 className="mb-[0.17rem] text-[0.36rem] leading-[0.5rem] font-extrabold">
                {t("sec9.bg3")}
              </h3>
              <p className="text-[0.2rem] font-normal max-w-[5.4rem] text-pretty">
                {t("sec9.bg4")}
              </p>
            </div>
            <div
              className="bg-center mb-[0.25rem] pt-[1.42rem] pl-[1.31rem] bg-no-repeat bg-cover h-[4.53rem] relative text-[#111111]"
              style={bg(
                "/guanwang_second/front/images/products/chuangliansmart/sec9_3-ef800e3248.webp",
              )}
            >
              <h3 className="mb-[0.17rem] text-[0.36rem] leading-[0.5rem] font-extrabold">
                {t("sec9.bg5")}
              </h3>
              <p className="text-[0.2rem] font-normal max-w-[5.4rem] text-pretty">
                {t("sec9.bg6")}
              </p>
            </div>
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
