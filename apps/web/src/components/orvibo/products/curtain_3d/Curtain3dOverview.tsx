import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function Curtain3dOverview({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* curtain_3d */}
      <div id="overview" className="bg-white">
        {/* curtain__banner */}
        <div className="relative w-full">
          <MarketingVideo
            bare
            src="/orvibo/videos/curtain_3d_banner_3.mp4"
            poster="/guanwang_second/front/images/new/products/curtain_3d/curtain_3d_banner-61325dfd84.webp"
            className="w-full h-full aspect-[3840/2160]"
          />
          <div className="absolute left-0 top-0 w-full h-full bg-black/10" />
          <div className="absolute left-0 top-[3.79rem] w-full">
            <div className="text-center text-[0.32rem] leading-[0.32rem] font-medium text-white tracking-[0.02rem]">
              {t("curtain_banner.banner_desc")}
            </div>
            <div className="mt-[0.6rem] font-semibold text-white text-center text-[0.54rem] leading-[0.54rem] tracking-[0.02rem]">
              {t("curtain_banner.banner_title")}
            </div>
          </div>
          <OrviboWatchTrigger
            videoSrc="/orvibo/videos/curtain_3d_all.mp4"
            showPlayIcon={false}
            className="absolute left-1/2 bottom-[1.87rem] -translate-x-1/2 z-[10] cursor-pointer"
          >
            <span
              className="pr-[0.36rem] relative inline-block font-semibold text-white text-center text-[0.22rem] leading-[0.22rem] after:bg-center after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:w-[0.22rem] after:h-[0.22rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat"
              style={pseudoBg(
                "after",
                "/guanwang_second/front/images/house_solution/icon_video-9cdc1f24f3.webp",
              )}
            >
              {t("curtain_banner.video_watch")}
            </span>
          </OrviboWatchTrigger>
        </div>
        {/* sec1 */}
        <div className="pt-[0.8rem] flex flex-col items-center bg-white">
          <div>
            <div className="mb-[0.3rem] flex">
              <ProductReveal className="relative overflow-hidden rounded-[0.2rem] bg-[linear-gradient(135deg,#f8ebe2_0%,#efdccd_100%)] w-[3.64rem] h-[5.1rem]">
                <div className="pt-[0.4rem] px-[0.3rem] text-center text-balance text-[0.2rem] leading-[0.3rem] font-medium text-[#333333]">
                  {t("curtain_banner.banner_desc")}
                </div>
                <Image
                  src={img(
                    "/guanwang_second/front/images/new/products/curtain_3d/product-bb5952f1a2.png",
                  )}
                  alt=""
                  width={800}
                  height={800}
                  unoptimized
                  className="absolute left-1/2 bottom-[0.15rem] -translate-x-1/2 w-[3.5rem] max-w-none h-auto drop-shadow-[0_0.08rem_0.16rem_rgba(120,80,50,0.18)]"
                />
              </ProductReveal>
              <div className="ml-[0.28rem] w-[11.26rem] flex flex-wrap">
                <ProductReveal className="mr-[0.3rem] flex items-center gap-[0.36rem] px-[0.5rem] rounded-[0.2rem] bg-[linear-gradient(135deg,#f8ebe2_0%,#efdccd_100%)] w-[5.48rem] h-[2.4rem]">
                  <span className="text-[0.9rem] font-bold leading-none bg-[linear-gradient(183deg,rgb(248,121,74)_0px,rgb(240,169,56)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
                    170°
                  </span>
                  <span
                    className={
                      "text-[0.2rem] leading-[0.3rem] font-medium text-[#333333]"
                    }
                  >
                    {t("tiles.rotate")}
                  </span>
                </ProductReveal>
                <ProductReveal
                  className="[transition-delay:0.15s] bg-no-repeat bg-cover w-[5.48rem] h-[2.4rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/curtain_3d/sec1_03-e983c7fd61.webp",
                  )}
                />
                <ProductReveal
                  className="mt-[0.3rem] mr-[0.3rem] [transition-delay:0.25s] bg-no-repeat bg-cover w-[5.48rem] h-[2.4rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/curtain_3d/sec1_04-8e3fef229d.webp",
                  )}
                />
                <ProductReveal
                  className="mt-[0.3rem] [transition-delay:0.35s] bg-no-repeat bg-cover w-[5.48rem] h-[2.4rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/curtain_3d/sec1_05-bf923f471d.webp",
                  )}
                />
              </div>
            </div>
            <div className="flex">
              <ProductReveal className="flex flex-col justify-center gap-[0.22rem] px-[0.4rem] rounded-[0.2rem] bg-[linear-gradient(135deg,#f8ebe2_0%,#efdccd_100%)] w-[3.64rem] h-[2.5rem]">
                <span className="text-[0.9rem] font-bold leading-none bg-[linear-gradient(183deg,rgb(248,121,74)_0px,rgb(240,169,56)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
                  5°
                </span>
                <span
                  className={
                    "text-[0.2rem] leading-[0.3rem] font-medium text-[#333333]"
                  }
                >
                  {t("tiles.step")}
                </span>
              </ProductReveal>
              <div className="ml-[0.28rem] w-[11.26rem] flex flex-wrap">
                <ProductReveal
                  className="mr-[0.3rem] [transition-delay:0.15s] bg-no-repeat bg-cover w-[3.55rem] h-[2.5rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/curtain_3d/sec1_07-78e297bad0.webp",
                  )}
                />
                <ProductReveal
                  className="mr-[0.31rem] [transition-delay:0.25s] bg-no-repeat bg-cover w-[3.55rem] h-[2.5rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/curtain_3d/sec1_08-d599007ddc.webp",
                  )}
                />
                <ProductReveal
                  className="[transition-delay:0.35s] bg-no-repeat bg-cover w-[3.55rem] h-[2.5rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/curtain_3d/sec1_09-dd46cd0ab6.webp",
                  )}
                />
              </div>
            </div>
          </div>
          <ProductReveal className="mt-[1.2rem]">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(183deg,rgb(248,121,74)_0px,rgb(240,169,56)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec1.title_3d")}
            </div>
            <div className="mt-[0.3rem] text-center text-[#666666] text-[0.2rem] leading-[0.36rem] font-normal mx-auto max-w-[11rem] text-balance">
              {t("sec1.desc")}
            </div>
          </ProductReveal>
          <div className="mt-[0.82rem] flex">
            <ProductReveal
              className="mr-[0.4rem] bg-no-repeat bg-cover w-[4.8rem] h-[4.48rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/curtain_3d/sec2_1-b5c140642d.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.4rem] [transition-delay:0.15s] bg-no-repeat bg-cover w-[4.8rem] h-[4.48rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/curtain_3d/sec2_2-18c9d36ebb.webp",
              )}
            />
            <ProductReveal
              className="[transition-delay:0.25s] bg-no-repeat bg-cover w-[4.8rem] h-[4.48rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/curtain_3d/sec2_3-e366444abc.webp",
              )}
            />
          </div>
          <ProductReveal className="mt-[1.2rem]">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(3deg,rgb(240,169,56)_0px,rgb(248,121,74)_46%,rgb(248,121,74)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec1.title_3d2")}
            </div>
            <div className="mt-[0.3rem] text-center text-[#666666] text-[0.2rem] leading-[0.36rem] font-normal mx-auto max-w-[11rem] text-balance">
              {t("sec1.desc2")}
            </div>
          </ProductReveal>
        </div>
        {/* sec2 */}
        <div className="mt-[0.8rem] flex justify-center">
          <div className="rounded-[0.25rem] w-[16rem] overflow-hidden">
            <MarketingVideo
              bare
              src="/orvibo/videos/curtain_3d_170_2.mp4"
              className="w-full h-full aspect-[1920/1080]"
            />
          </div>
        </div>
        {/* sec3 */}
        <div className="pt-[1.2rem]">
          <ProductReveal className="">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(358deg,rgb(240,169,56)_0px,rgb(248,121,74)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec3.title_3d")}
            </div>
            <div className="mt-[0.3rem] text-center text-[#666666] text-[0.2rem] leading-[0.36rem] font-normal mx-auto max-w-[9rem] text-balance">
              {t("sec3.desc")}
            </div>
          </ProductReveal>
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_3d/banner-54aae81a62.webp",
            )}
            alt=""
            width={1920}
            height={982}
            unoptimized
            className="mt-[0.75rem] align-middle w-full"
          />
        </div>
        {/* sec4 */}
        <div className="pt-[1.2rem] flex flex-col items-center">
          <ProductReveal className="">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(183deg,rgb(248,121,74)_0px,rgb(240,169,56)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec4.title_3d")}
            </div>
            <div className="mt-[0.3rem] text-center text-[#666666] text-[0.2rem] leading-[0.36rem] font-normal max-w-[9.5rem] mx-auto text-balance">
              {t("sec4.desc")}
            </div>
          </ProductReveal>
          <div className="mt-[0.76rem] rounded-[0.25rem] w-[16rem] overflow-hidden">
            <MarketingVideo
              bare
              src="/orvibo/videos/curtain_3d_15_2.mp4"
              className="w-full h-full aspect-[1600/768]"
            />
          </div>
        </div>
        {/* sec5 */}
        <div className="mt-[0.8rem] relative">
          <ProductReveal className="absolute left-0 top-[0.93rem] w-full z-[10]">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(11deg,rgb(240,169,56)_0px,rgb(248,121,74)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec5.title_3d")}
            </div>
            <div className="mt-[0.24rem] text-center text-white text-[0.2rem] leading-[0.36rem] font-normal">
              {t("sec5.desc")}
            </div>
          </ProductReveal>
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_3d/sec5-ec109b015b.webp",
            )}
            alt=""
            width={1920}
            height={920}
            unoptimized
            className="align-middle w-full"
          />
        </div>
        {/* sec6 */}
        <div className="pt-[1.2rem]">
          <div>
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(184deg,rgb(248,126,73)_0px,rgb(240,167,56)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec6.title_3d")}
            </div>
            <div className="mt-[0.3rem] text-center text-[#666666] text-[0.2rem] leading-[0.36rem] font-normal mx-auto max-w-[11rem] text-balance">
              {t("sec6.desc")}
            </div>
          </div>
          <MarketingVideo
            bare
            src="/orvibo/videos/curtain_3d_mode_2.mp4"
            className="mt-[0.76rem] w-full h-full aspect-[1920/960]"
          />
          <div className="w-full relative">
            <Image
              src={img(
                "/guanwang_second/front/images/new/products/curtain_3d/sec7-00b5871d1c.webp",
              )}
              alt=""
              width={1920}
              height={830}
              unoptimized
              className="align-middle w-full"
            />
            <ProductReveal className="absolute left-0 bottom-[2.64rem] w-full">
              <div className="w-full text-center text-[0.54rem] leading-[0.74rem] font-bold text-[#7d301b]">
                {t("sec6.bg_title")}
              </div>
              <div className="mt-[0.3rem] w-full text-center text-[0.26rem] leading-[0.36rem] font-normal text-[#7d301b]">
                {t("sec6.bg_desc")}
              </div>
            </ProductReveal>
          </div>
        </div>
        {/* sec7 */}
        <div className="pt-[0.84rem] pb-[0.99rem] flex flex-col items-center">
          <div className="flex items-center">
            <ProductReveal className="">
              <div className="text-[0.3rem] leading-[0.42rem] font-bold text-[#333333]">
                {t("sec7.subtitle")}
              </div>
              <div className="mt-[0.14rem] text-[0.48rem] leading-[0.68rem] font-bold text-black">
                {t("sec7.title")}
              </div>
              <div className="mt-[0.3rem] text-[0.2rem] leading-[0.36rem] font-normal text-[#666666] max-w-[5.4rem] text-pretty">
                {t("sec7.desc")}
              </div>
            </ProductReveal>
            <ProductReveal
              className="ml-[1.85rem] bg-no-repeat bg-cover w-[9.65rem] h-[6.79rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/curtain_3d/sec10-eb6fb5215a.webp",
              )}
            />
          </div>
          <div className="mt-[1.81rem] flex flex-col">
            <div className="flex items-center">
              <ProductReveal
                className="mr-[1.41rem] rounded-[0.25rem] bg-no-repeat bg-cover w-[8.8rem] h-[6.79rem] overflow-hidden"
                style={bg(
                  "/guanwang_second/front/images/new/products/curtain_3d/sec9-0d04725d6f.webp",
                )}
              />
              <ProductReveal className="">
                <div className="mt-[0.14rem] text-[0.48rem] leading-[0.68rem] font-bold text-black">
                  {t("sec7.title2")}
                </div>
                <div className="mt-[0.3rem] text-[0.2rem] leading-[0.36rem] font-normal text-[#666666] max-w-[6.2rem] text-pretty">
                  {t("sec7.desc2")}
                </div>
              </ProductReveal>
            </div>
            <ProductReveal className="mt-[0.65rem] text-[0.14rem] font-normal text-[#999999] w-0 min-w-full">
              {t("sec7.readme")}
            </ProductReveal>
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
