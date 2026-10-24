import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductInView } from "@/components/orvibo/product/ProductInView";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";
import { SwitchColors } from "./SwitchColors";

export function MixpadSwitchOverview({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* mixpadSwitchPage */}
      <div id="overview">
        {/* banner */}
        <div
          className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[10.8rem] w-full tracking-[0.01rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_switch/banner-1a2bffdaf0.webp",
          )}
        >
          <div className="absolute top-[2.7rem] left-[11.2rem]">
            <Image
              src={img(
                "/guanwang_second/front/images/products/mixpad_switch/banner_logo-4933e94378.webp",
              )}
              alt=""
              width={222}
              height={150}
              unoptimized
              className="align-middle w-[2.22rem] h-[1.5rem]"
            />
            <div className="mt-[0.55rem] text-[0.6rem] font-extrabold text-white">
              {t("banner.banner_title")}
            </div>
            <div className="mt-[0.16rem] text-[0.22rem] font-medium leading-[0.32rem] text-white tracking-[0.012rem]">
              {t("banner.subtitle")}
            </div>
            <div className="mt-[0.6rem] text-[0.3rem] leading-[0.42rem] text-white">
              {t("banner.banner_desc")}
            </div>
          </div>
        </div>
        {/* sec1 */}
        <div className="mx-auto pt-[2.42rem] h-[6.37rem] w-[11.22rem] flex justify-between">
          <div className="text-center">
            <Image
              src={img(
                "/guanwang_second/front/images/products/mixpad_switch/sec1_1-2b5c2c26ca.webp",
              )}
              alt=""
              width={69}
              height={69}
              unoptimized
              className="align-middle w-[0.69rem] h-[0.69rem]"
            />
            <p className="mt-[0.3rem] text-[0.2rem] text-[#111111] max-w-[4rem]">
              {t("sec1.sec1")}
            </p>
          </div>
          <div className="mt-[0.03rem] text-center">
            <Image
              src={img(
                "/guanwang_second/front/images/products/mixpad_switch/sec1_2-4ec665530e.webp",
              )}
              alt=""
              width={69}
              height={65}
              unoptimized
              className="align-middle w-[0.69rem] h-[0.65rem]"
            />
            <p className="mt-[0.31rem] text-[0.2rem] text-[#111111] max-w-[4rem]">
              {t("sec1.sec12")}
            </p>
          </div>
          <div className="mt-[0.01rem] text-center">
            <Image
              src={img(
                "/guanwang_second/front/images/products/mixpad_switch/sec1_3-d2d79be704.webp",
              )}
              alt=""
              width={66}
              height={70}
              unoptimized
              className="align-middle w-[0.66rem] h-[0.7rem]"
            />
            <p className="mt-[0.3rem] text-[0.2rem] text-[#111111] max-w-[4rem]">
              {t("sec1.sec13")}
            </p>
          </div>
          <div className="mt-[0.22rem] text-center">
            <Image
              src={img(
                "/guanwang_second/front/images/products/mixpad_switch/sec1_4-5fb30626aa.webp",
              )}
              alt=""
              width={121}
              height={25}
              unoptimized
              className="align-middle w-[1.21rem] h-[0.25rem]"
            />
            <p className="mt-[0.52rem] text-[0.2rem] text-[#111111] max-w-[4rem]">
              {t("sec1.sec14")}
            </p>
          </div>
        </div>
        {/* sec2 */}
        <div
          className="bg-center pt-[1.85rem] pl-[2.68rem] h-[10.8rem] overflow-hidden bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_switch/sec2-f6a6712fde.webp",
          )}
        >
          <div className="bg-center bg-no-repeat bg-cover">
            <ProductReveal className="">
              <h2 className="text-[0.48rem] leading-[0.67rem] font-extrabold text-white text-left">
                {t("sec2.title")}
              </h2>
              <p className="mt-[0.31rem] text-[0.2rem] font-medium text-white text-left leading-[0.32rem] max-w-[6.2rem]">
                {t("sec2.desc")}
              </p>
            </ProductReveal>
            <div className="mt-[1.13rem]">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/mixpad_switch/sec2_logo-fb4fb7c374.webp",
                )}
                alt=""
                width={128}
                height={86}
                unoptimized
                className="align-middle"
              />
            </div>
            <div className="mt-[0.53rem]">
              <p className="w-[4.84rem] bg-[radial-gradient(ellipse_60%_120%_at_45%_0%,#b4b4b4,#ffffff)] bg-clip-text text-[0.2rem] leading-[0.31rem] text-transparent">
                {t("sec2.quote")}
              </p>
              <p className="mt-[0.12rem] text-[0.2rem] leading-[0.31rem] text-white/40">
                {t("sec2.award")}
              </p>
            </div>
          </div>
        </div>
        {/* sec3 */}
        <SwitchColors
          images={[
            img(
              "/guanwang_second/front/images/products/mixpad_switch/sec3_0-ee327ac93d.webp",
            ),
            img(
              "/guanwang_second/front/images/products/mixpad_switch/sec3_1-86eb969e93.webp",
            ),
            img(
              "/guanwang_second/front/images/products/mixpad_switch/sec3_2-a1f4278aef.webp",
            ),
          ]}
          labels={[t("sec3.item"), t("sec3.item2"), t("sec3.item3")]}
        >
          <h2 className="text-[0.48rem] leading-[0.67rem] font-extrabold text-[#111111] text-center">
            {t("sec3.title")}
          </h2>
          <p className="mt-[0.3rem] text-[0.2rem] font-medium text-[#111111] text-center leading-[0.32rem] max-w-[11rem] mx-auto">
            {t("sec3.desc")}
          </p>
        </SwitchColors>
        {/* sec4 sec show */}
        <div className="bg-black bg-center pt-[1.07rem] pl-[2.3rem] bg-no-repeat bg-cover h-[9.6rem] relative overflow-hidden">
          <MarketingVideo
            bare
            src="/8f4239b1vodgzp1251222210/b8a197f3387702292185822129/lhajWAwgNDMA.mp4"
            className="absolute h-[9.6rem] w-[19.2rem] top-0 left-1/2 -translate-x-1/2 aspect-[1920/960]"
          />
          <ProductReveal className="absolute">
            <h2 className="text-[0.48rem] leading-[0.67rem] font-extrabold text-white text-left">
              {t("sec4.title")}
            </h2>
            <p className="mt-[0.3rem] text-[0.2rem] font-medium text-white text-left leading-[0.32rem] max-w-[8.7rem]">
              {t("sec4.desc")}
            </p>
          </ProductReveal>
        </div>
        {/* sec5-1 sec show */}
        <div className="bg-center bg-no-repeat bg-cover h-[3.51rem]">
          <ProductReveal className="">
            <h2 className="pt-[1.01rem] pb-[0.3rem] text-[0.48rem] leading-[0.67rem] font-extrabold text-[#111111] text-center">
              {t("sec5_1.title")}
            </h2>
            <p className="text-[0.2rem] font-medium text-[#111111] text-center leading-[0.32rem] max-w-[14.6rem] mx-auto">
              {t("sec5_1.desc")}
            </p>
          </ProductReveal>
        </div>
        {/* sec5 */}
        <ProductInView
          threshold={0.2}
          className="h-[9.6rem] relative overflow-hidden bg-black"
        >
          <Image
            src={img(
              "/guanwang_second/front/images/products/mixpad_switch/sec5_1-a767705051.webp",
            )}
            alt=""
            width={1920}
            height={960}
            unoptimized
            className="align-middle absolute top-0 left-0 w-full h-full opacity-0 transition-opacity [transition-duration:3s] ease-in group-data-[shown]:opacity-100 motion-reduce:transition-none"
          />
          <Image
            src={img(
              "/guanwang_second/front/images/products/mixpad_switch/sec5_2-02f32cefdd.webp",
            )}
            alt=""
            width={1920}
            height={960}
            unoptimized
            className="align-middle absolute top-0 left-0 w-full h-full transition-opacity [transition-duration:3s] ease-in group-data-[shown]:opacity-0 motion-reduce:transition-none"
          />
          <div className="rounded-full animate-tap-ripple motion-reduce:animate-none w-[3.65rem] h-[3.65rem] relative bg-white/5 top-[3.7rem] left-[12.97rem]">
            <div className="rounded-full w-[2.75rem] h-[2.75rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/[0.04]" />
            <div className="rounded-full w-[1.27rem] h-[1.27rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/[0.07]" />
            <div className="rounded-full w-[0.24rem] h-[0.24rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/[0.59]" />
            <div className="rounded-full w-[0.12rem] h-[0.12rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/[0.59]" />
            <div className="rounded-full w-[0.08rem] h-[0.08rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/[0.59]" />
          </div>
        </ProductInView>
        {/* sec5-2 */}
        <div className="h-[9.6rem] overflow-hidden relative">
          <div>
            <MarketingVideo
              bare
              loop={false}
              src="/8f4239b1vodgzp1251222210/b8dbd5be387702292185859814/5MFZrqTdxi4A.mp4"
              className="absolute h-[9.6rem] w-[19.2rem] top-0 left-1/2 -translate-x-1/2 aspect-[1920/960]"
            />
          </div>
          <div className="rounded-full animate-tap-ripple motion-reduce:animate-none w-[3.65rem] h-[3.65rem] relative bg-[#d5c03a]/[0.04] top-[2.96rem] left-[2rem]">
            <div className="rounded-full w-[2.75rem] h-[2.75rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d5c03a]/[0.06]" />
            <div className="rounded-full w-[1.27rem] h-[1.27rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d5c03a]/10 opacity-[0.1]" />
            <div className="rounded-full w-[0.24rem] h-[0.24rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d5c03a]/[0.29]" />
            <div className="rounded-full w-[0.12rem] h-[0.12rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d5c03a]/[0.29]" />
            <div className="rounded-full w-[0.08rem] h-[0.08rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#dec20b]/[0.71]" />
          </div>
        </div>
        {/* sec6-1 sec show */}
        <div className="bg-center bg-no-repeat bg-cover h-[2.36rem] bg-white">
          <ProductReveal className="pt-[0.83rem] text-[0.52rem] leading-[0.73rem] font-extrabold text-[#111111] text-center">
            {t("sec6_1.title")}
          </ProductReveal>
        </div>
        {/* sec6 */}
        <div className="relative h-[19.51rem] bg-white">
          <div className="mx-auto w-[16rem]">
            <div className="flex">
              <div className="pt-[1.92rem] pl-[2.4rem] w-[8rem] h-[6rem] bg-[#f6f6f6]">
                <ProductReveal className="text-[0.52rem] leading-[0.73rem] font-extrabold text-[#111111] text-left">
                  {t("sec6.title")}
                </ProductReveal>
                <ProductReveal className="mt-[0.34rem] text-[0.24rem] font-medium text-[#111111] text-left leading-[0.38rem]">
                  {t("sec6.desc")}
                </ProductReveal>
              </div>
              <div className="w-[8rem] h-[6rem]">
                <Image
                  src={img(
                    "/guanwang_second/front/images/products/mixpad_switch/sec6_1-9453ebf6fd.webp",
                  )}
                  alt=""
                  width={800}
                  height={600}
                  unoptimized
                  className="align-middle w-full h-full"
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-[8rem] h-[6rem]">
                <Image
                  src={img(
                    "/guanwang_second/front/images/products/mixpad_switch/sec6_2-a7029b9ea7.webp",
                  )}
                  alt=""
                  width={800}
                  height={600}
                  unoptimized
                  className="align-middle w-full h-full"
                />
              </div>
              <div className="pt-[2.09rem] pl-[2.01rem] w-[8rem] h-[6rem] bg-[#f6f6f6]">
                <ProductReveal className="text-[0.52rem] leading-[0.73rem] font-extrabold text-[#111111] text-left">
                  {t("sec6.title2")}
                </ProductReveal>
                <ProductReveal className="mt-[0.3rem] text-[0.24rem] font-medium text-[#111111] text-left leading-[0.38rem]">
                  {t("sec6.desc2")}
                </ProductReveal>
              </div>
            </div>
            <div className="flex">
              <div className="pt-[2.15rem] pl-[1.93rem] w-[8rem] h-[6rem] bg-[#f6f6f6]">
                <ProductReveal className="text-[0.52rem] leading-[0.73rem] font-extrabold text-[#111111] text-left">
                  {t("sec6.title3")}
                </ProductReveal>
                <ProductReveal className="mt-[0.3rem] text-[0.24rem] font-medium text-[#111111] text-left leading-[0.38rem] max-w-[5.3rem]">
                  {t("sec6.desc3")}
                </ProductReveal>
              </div>
              <div className="w-[8rem] h-[6rem]">
                <Image
                  src={img(
                    "/guanwang_second/front/images/products/mixpad_switch/sec6_3-48d32032f6.webp",
                  )}
                  alt=""
                  width={800}
                  height={600}
                  unoptimized
                  className="align-middle w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* sec7-1 sec show */}
        <div className="bg-center bg-no-repeat bg-cover h-[4.09rem] bg-[#f9f9f9]">
          <ProductReveal className="">
            <h2 className="pt-[1.28rem] pb-[0.3rem] text-[0.48rem] leading-[0.67rem] font-extrabold text-[#111111] text-center">
              {t("sec7_1.title")}
            </h2>
            <p className="pb-[1.2rem] text-[0.2rem] font-medium text-[#111111] text-center leading-[0.32rem] max-w-[14.6rem] mx-auto">
              {t("sec7_1.desc")}
            </p>
          </ProductReveal>
        </div>
        {/* sec7 */}
        <div className="h-[20.74rem] bg-[#f9f9f9] relative">
          <div className="bg-center mx-auto bg-no-repeat bg-cover w-[16.53rem] relative">
            <ProductReveal className="inline-block relative float-left">
              <div className="right-[-1rem] top-0 absolute text-[0.2rem] text-[#111111] leading-[0.26rem]">
                <b className="font-bold mr-[0.08rem] border-t-[0.055rem] border-t-transparent border-r-[0.11rem] border-r-[#111111] border-b-[0.055rem] border-b-transparent border-l-[0.11rem] border-l-transparent w-0 h-0 inline-block" />
                <span>{t("sec7.sec7_1")}</span>
              </div>
              <Image
                src={img(
                  "/guanwang_second/front/images/products/mixpad_switch/sec7_1-81778a3b40.webp",
                )}
                alt=""
                width={650}
                height={960}
                unoptimized
                className="align-middle w-[6.5rem] h-[9.6rem]"
              />
            </ProductReveal>
            <ProductReveal className="mt-[1.74rem] ml-[0.6rem] [transition-delay:0.4s] inline-block relative float-left">
              <div className="left-0 bottom-[-0.56rem] absolute text-[0.2rem] text-[#111111] leading-[0.26rem]">
                <b className="font-bold mr-[0.08rem] border-t-[0.11rem] border-t-transparent border-r-[0.055rem] border-r-transparent border-b-[0.11rem] border-b-[#111111] border-l-[0.055rem] border-l-transparent w-0 h-0 inline-block" />
                <span>{t("sec7.sec7_2")}</span>
              </div>
              <Image
                src={img(
                  "/guanwang_second/front/images/products/mixpad_switch/sec7_2-3f12abdf60.webp",
                )}
                alt=""
                width={943}
                height={612}
                unoptimized
                className="align-middle w-[9.43rem] h-[6.12rem]"
              />
            </ProductReveal>
          </div>
          <div className="mx-auto w-[16.53rem] relative">
            <ProductReveal className="mt-[1.59rem] ml-[3.53rem] inline-block float-left relative">
              <div className="left-0 bottom-[-0.56rem] absolute text-[0.2rem] text-[#111111] leading-[0.26rem]">
                <b className="font-bold mr-[0.08rem] border-t-[0.11rem] border-t-transparent border-r-[0.055rem] border-r-transparent border-b-[0.11rem] border-b-[#111111] border-l-[0.055rem] border-l-transparent w-0 h-0 inline-block" />
                <span>{t("sec7.sec7_3")}</span>
              </div>
              <Image
                src={img(
                  "/guanwang_second/front/images/products/mixpad_switch/sec7_3-1471fdabc8.webp",
                )}
                alt=""
                width={650}
                height={800}
                unoptimized
                className="align-middle w-[6.5rem] h-[8rem]"
              />
            </ProductReveal>
            <ProductReveal className="mt-[-5.1rem] [transition-delay:0.4s] inline-block float-left relative">
              <div className="left-0 top-[-0.56rem] absolute text-[0.2rem] text-[#111111] leading-[0.26rem]">
                <b className="font-bold mr-[0.08rem] border-t-[0.11rem] border-t-[#111111] border-r-[0.055rem] border-r-transparent border-b-[0.11rem] border-b-transparent border-l-[0.055rem] border-l-transparent w-0 h-0 inline-block align-[-0.08rem]" />
                <span>{t("sec7.sec7_4")}</span>
              </div>
              <Image
                src={img(
                  "/guanwang_second/front/images/products/mixpad_switch/sec7_4-09edd34032.webp",
                )}
                alt=""
                width={943}
                height={590}
                unoptimized
                className="align-middle w-[9.43rem] h-[5.9rem]"
              />
            </ProductReveal>
          </div>
          <div className="absolute bottom-[0.86rem] left-1/2 w-max max-w-[15rem] -translate-x-1/2 text-center text-[0.18rem] leading-[0.37rem] text-[#111111]">
            {t("sec7.after")}
          </div>
        </div>
        {/* sec8 sec show */}
        <ProductInView
          threshold={0.6}
          className="bg-center bg-no-repeat bg-cover h-[9.6rem] bg-white"
        >
          <ProductReveal className="">
            <h2 className="pt-[1.1rem] pb-[0.3rem] text-[0.48rem] leading-[0.67rem] font-extrabold text-[#111111] text-center">
              {t("sec8.title")}
            </h2>
            <p className="text-[0.2rem] font-medium text-[#111111] text-center leading-[0.32rem] max-w-[14.1rem] mx-auto">
              {t("sec8.desc")}
            </p>
          </ProductReveal>
          <div className="mx-auto mt-[1.45rem] relative">
            <div
              className="bg-center absolute top-0 left-1/2 -translate-x-1/2 w-[13.4rem] h-[1.14rem] bg-no-repeat bg-cover z-[1] [transition:top_1s_ease-in-out,opacity_0s_1s] group-data-[shown]:top-[2rem] group-data-[shown]:opacity-0 motion-reduce:transition-none"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_switch/sec8_1-6f7a2de589.webp",
              )}
            />
            <div
              className="bg-center absolute top-[2.33rem] left-1/2 -translate-x-1/2 w-[13.77rem] h-[1.33rem] bg-no-repeat bg-cover [transition:opacity_0s_1s] group-data-[shown]:opacity-0 motion-reduce:transition-none"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_switch/sec8_2-7417f7efaf.webp",
              )}
            />
            <div
              className="bg-center absolute top-[2.33rem] left-1/2 -translate-x-1/2 w-[13.77rem] h-[1.33rem] bg-no-repeat bg-cover z-[8] opacity-0 [transition:top_1s_ease-in-out_1s,opacity_0s_1s] group-data-[shown]:top-[1.73rem] group-data-[shown]:opacity-100 motion-reduce:transition-none"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_switch/sec8_3-0f348a9813.webp",
              )}
            />
          </div>
        </ProductInView>
        {/* sec9 */}
        <div
          className="bg-center pt-[5.07rem] h-[10.8rem] bg-no-repeat bg-black bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_switch/sec9-d39ea2e430.webp",
          )}
        >
          <div className="bg-center bg-no-repeat bg-cover">
            <ProductReveal className="text-[0.48rem] leading-[0.67rem] font-extrabold text-white text-center">
              {t("sec9.title")}
            </ProductReveal>
          </div>
        </div>
        {/* sec10 */}
        <div className="h-[13.64rem] bg-black relative">
          <div className="bg-center bg-no-repeat bg-cover">
            <ProductReveal className="">
              <h2 className="pt-[1.28rem] pb-[0.37rem] text-[0.48rem] leading-[0.67rem] font-extrabold text-white text-center">
                {t("sec10.title")}
              </h2>
              <p className="pb-[0.92rem] text-[0.2rem] font-medium text-white text-center leading-[0.32rem] max-w-[15.2rem] mx-auto">
                {t("sec10.desc")}
              </p>
            </ProductReveal>
          </div>
          <ProductInView className="bg-center mx-auto bg-no-repeat bg-cover relative w-[13.47rem] h-[5.2rem]">
            <div className="relative z-[0]">
              <div
                className="bg-center absolute top-0 w-[1.31rem] h-[5.2rem] bg-no-repeat bg-cover left-[10.4rem] z-[7] [transition:left_2.5s_ease-in-out,opacity_2.5s_ease-in] group-data-[shown]:left-0 motion-reduce:transition-none"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_switch/sec10_4-27c9da4c05.webp",
                )}
              />
              <div
                className="bg-center absolute top-[3.52rem] w-[1.05rem] h-[1.15rem] bg-no-repeat bg-cover left-[10.4rem] z-[6] [transition:left_2.5s_ease-in-out,opacity_2.5s_ease-in] group-data-[shown]:left-[1.79rem] motion-reduce:transition-none"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_switch/sec10_5-13642351d0.webp",
                )}
              />
              <div
                className="bg-center absolute top-0 left-[10.4rem] w-[1.6rem] [transition:left_2.5s_ease-in-out,opacity_2.5s_ease-in] group-data-[shown]:left-[3.09rem] motion-reduce:transition-none h-[5.2rem] bg-no-repeat bg-cover z-[5]"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_switch/sec10_6-9de7366f50.webp",
                )}
              />
              <div
                className="bg-center absolute top-[3.35rem] left-[9.8rem] w-[1.55rem] [transition:left_2.5s_ease-in-out,opacity_2.5s_ease-in] group-data-[shown]:left-[5.17rem] group-data-[shown]:opacity-100 motion-reduce:transition-none h-[1.17rem] bg-no-repeat bg-cover opacity-0 z-[4]"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_switch/sec10_1-fa98ca26d6.webp",
                )}
              />
              <div
                className="bg-center absolute top-[0.78rem] left-[9.96rem] w-[1.42rem] [transition:left_2.5s_ease-in-out,opacity_2.5s_ease-in] group-data-[shown]:left-[6.69rem] group-data-[shown]:opacity-100 motion-reduce:transition-none h-[3.82rem] bg-no-repeat bg-cover opacity-0 z-[3]"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_switch/sec10_2-24f5c15fe4.webp",
                )}
              />
              <div
                className="bg-center absolute top-[0.93rem] left-[9.96rem] w-[1.93rem] [transition:left_2.5s_ease-in-out,opacity_2.5s_ease-in] group-data-[shown]:left-[8.28rem] group-data-[shown]:opacity-100 motion-reduce:transition-none h-[3.69rem] bg-no-repeat bg-cover opacity-0 z-[2]"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_switch/sec10_3-bbb3de2b31.webp",
                )}
              />
              <div
                className="bg-center absolute top-[0.35rem] left-[10.4rem] w-[3.07rem] h-[4.82rem] bg-no-repeat bg-cover z-[1]"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_switch/sec10_7-9779bd818e.webp",
                )}
              />
            </div>
            <ProductReveal className="[transition-delay:2.5s]">
              <div className="w-[0.01rem] bg-[#b5b5b5] z-[333] relative opacity-[0.45] h-[1.65rem] left-[3.62rem] bottom-[-4.66rem]">
                <p className="absolute text-white text-[0.18rem] bottom-[-0.57rem] -translate-x-1/2 text-center w-[2rem]">
                  {t("sec10.line1")}
                </p>
              </div>
              <div className="w-[0.01rem] bg-[#b5b5b5] z-[3] relative opacity-[0.45] h-[1.84rem] left-[7.3rem] bottom-[-2.84rem]">
                <p className="absolute text-white text-[0.18rem] bottom-[-0.57rem] -translate-x-1/2 text-center w-[2rem]">
                  {t("sec10.line2")}
                </p>
              </div>
              <div className="w-[0.01rem] bg-[#b5b5b5] z-[333] relative opacity-[0.45] h-[1.94rem] left-[9.11rem] bottom-[-0.89rem]">
                <p className="absolute text-white text-[0.18rem] bottom-[-0.57rem] -translate-x-1/2 text-center w-[2rem]">
                  {t("sec10.line3")}
                </p>
              </div>
              <div className="w-[0.01rem] bg-[#b5b5b5] z-[333] relative opacity-[0.45] h-[1.63rem] left-[11.19rem] bottom-[0.75rem]">
                <p className="absolute text-white text-[0.18rem] bottom-[-0.57rem] -translate-x-1/2 text-center w-[2rem]">
                  {t("sec10.line4")}
                </p>
              </div>
            </ProductReveal>
          </ProductInView>
          <div className="absolute bottom-[1.58rem] left-1/2 -translate-x-1/2 text-center text-white opacity-[0.31] text-[0.16rem] max-w-[9.5rem] mx-auto">
            {t("sec10.after")}
          </div>
        </div>
        {/* sec11 */}
        <div
          className="bg-center h-[10.79rem] bg-no-repeat bg-black bg-cover relative"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_switch/sec11-74fd740a50.webp",
          )}
        >
          <div className="bg-center bg-no-repeat bg-cover">
            <ProductReveal className="">
              <h2 className="pt-[2.81rem] pb-[0.3rem] text-[0.48rem] leading-[0.77rem] font-extrabold text-white text-center">
                {t("sec11.title")}
              </h2>
              <p className="text-[0.2rem] font-medium text-white text-center leading-[0.32rem] max-w-[12.5rem] mx-auto">
                {t("sec11.desc")}
              </p>
            </ProductReveal>
          </div>
          <div className="bg-center mx-auto mt-[1.16rem] bg-no-repeat bg-cover flex w-[10.62rem] justify-between">
            <ProductReveal className="[transition-delay:0.2s] text-center">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/mixpad_switch/sec11_1-2d98852cf6.webp",
                )}
                alt=""
                width={58}
                height={58}
                unoptimized
                className="align-middle w-[0.58rem] h-[0.58rem]"
              />
              <p className="mt-[0.26rem] text-[0.18rem] font-medium text-white">
                {t("sec11.delay_1")}
              </p>
            </ProductReveal>
            <ProductReveal className="[transition-delay:0.4s] text-center">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/mixpad_switch/sec11_2-f7f3d08ace.webp",
                )}
                alt=""
                width={49}
                height={53}
                unoptimized
                className="align-middle w-[0.49rem] h-[0.53rem]"
              />
              <p className="mt-[0.28rem] text-[0.18rem] font-medium text-white">
                {t("sec11.delay_2")}
              </p>
            </ProductReveal>
            <ProductReveal className="[transition-delay:0.6s] text-center">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/mixpad_switch/sec11_3-c9d4887656.webp",
                )}
                alt=""
                width={30}
                height={50}
                unoptimized
                className="align-middle w-[0.3rem] h-[0.5rem]"
              />
              <p className="mt-[0.31rem] text-[0.18rem] font-medium text-white">
                {t("sec11.delay_3")}
              </p>
            </ProductReveal>
            <ProductReveal className="[transition-delay:0.8s] text-center">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/mixpad_switch/sec11_4-71b2624ffe.webp",
                )}
                alt=""
                width={43}
                height={52}
                unoptimized
                className="align-middle w-[0.43rem] h-[0.52rem]"
              />
              <p className="mt-[0.29rem] text-[0.18rem] font-medium text-white">
                {t("sec11.delay_4")}
              </p>
            </ProductReveal>
            <ProductReveal className="[transition-delay:1s] text-center">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/mixpad_switch/sec11_5-82a8115fd7.webp",
                )}
                alt=""
                width={46}
                height={36}
                unoptimized
                className="mt-[0.08rem] align-middle w-[0.46rem] h-[0.36rem]"
              />
              <p className="mt-[0.37rem] text-[0.18rem] font-medium text-white">
                {t("sec11.delay_5")}
              </p>
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
