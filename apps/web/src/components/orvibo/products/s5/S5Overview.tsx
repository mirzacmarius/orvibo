import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductFocusCarousel } from "@/components/orvibo/product/ProductFocusCarousel";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function S5Overview({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, pseudoBg, lines } = productPageHelpers(locale, text);
  const scene = (n: number, image: string, icon: string) => ({
    key: `scene${n}`,
    image: img(image),
    overlay: (
      <span className="absolute left-[0.69rem] bottom-[0.27rem] flex items-start">
        <Image
          src={img(icon)}
          alt=""
          width={129}
          height={127}
          unoptimized
          className="shrink-0 w-[1.29rem] h-[1.27rem]"
        />
        <span className="ml-[0.2rem] block pt-[0.115rem]">
          <span className="block text-[0.3rem] leading-[0.42rem] font-medium text-white/80">
            {t(`sec7.scene${n}.title`)}
          </span>
          <span className="mt-[0.125rem] block text-[0.24rem] leading-[0.34rem] font-normal text-white/50 max-w-[11.5rem]">
            {t(`sec7.scene${n}.desc`)}
          </span>
        </span>
      </span>
    ),
  });

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* s5 */}
      <div id="overview" className="bg-black">
        {/* sec1 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[15.75rem]"
          style={bg(
            "/guanwang_second/front/images/products/s5/sec1-dee2bc9447.webp",
          )}
        >
          <ProductReveal className="pt-[1.79rem]">
            <div className="text-[0.94rem] leading-[0.76rem] font-bold text-center text-[#9d8766] flex items-center justify-center">
              {t("sec1.title")}
              <span className="ml-[0.26rem] pl-[0.03rem] rounded-[0.2rem] inline-block w-[1.44rem] h-[0.82rem] bg-[image:linear-gradient(87deg,rgba(193,148,96,0.57),rgba(255,217,170,0.57))] text-[0.82rem] leading-[0.82rem] font-semibold text-black">
                {"S5"}
              </span>
            </div>
            <div className="mt-[0.44rem] text-[0.4rem] leading-[0.48rem] font-bold text-center text-white bg-[image:linear-gradient(246deg,rgb(255,235,210)_0px,rgb(108,81,46)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] tracking-[0.03rem]">
              {t("sec1.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec2 video-box */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/s5_4.mp4"
            className="w-full h-full aspect-[1920/750]"
          />
        </div>
        {/* sec3 video-box */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/s5_6.mp4"
            className="w-full h-full aspect-[1920/1080]"
          />
          <OrviboWatchTrigger
            videoSrc="/orvibo/videos/s5_1.mp4"
            showPlayIcon={false}
            className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/20 cursor-pointer"
          >
            <span
              className="pr-[0.26rem] text-white relative inline-block text-[0.24rem] leading-[0.34rem] font-medium after:bg-center after:top-1/2 after:right-0 after:-translate-y-1/2 after:content-[''] after:absolute after:w-[0.24rem] after:h-[0.24rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat"
              style={pseudoBg(
                "after",
                "/guanwang_second/front/images/house_solution/icon_video-9cdc1f24f3.webp",
              )}
            >
              {t("sec3.video_watch")}
            </span>
          </OrviboWatchTrigger>
        </div>
        {/* sec4 video-box */}
        <div className="relative">
          <ProductReveal className="text-[0.6rem] leading-[0.8rem] font-bold text-center text-[#f9deb0] [-webkit-text-fill-color:transparent] absolute w-full bg-[image:linear-gradient(64deg,rgb(147,171,241)_0px,rgb(255,255,255)_45.7275%,rgb(255,188,87)_100%)] bg-clip-text top-[0.94rem]">
            {t("sec4.title")}
          </ProductReveal>
          <MarketingVideo
            bare
            src="/orvibo/videos/s5_3.mp4"
            className="w-full h-full aspect-[1920/1080]"
          />
        </div>
        {/* sec5 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.61rem]"
          style={bg(
            "/guanwang_second/front/images/products/s5/sec3-4d0397d89c.webp",
          )}
        >
          <ProductReveal className="pt-[1.3rem] text-[0.6rem] leading-[0.8rem] font-bold text-center text-[#f9deb0] [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(75deg,rgb(102,199,255)_0px,rgb(255,255,255)_42.4805%,rgb(255,172,54)_100%)] bg-clip-text">
            {t("sec5.title")}
          </ProductReveal>
        </div>
        {/* sec6 */}
        <div className="pt-[1.3rem] pb-[1.14rem]">
          <div className="mx-auto w-[10.18rem]">
            <div className="mb-[0.24rem] flex justify-center">
              <ProductReveal
                className="bg-center bg-no-repeat bg-cover w-[10.18rem] h-[3.1rem]"
                style={bg(
                  "/guanwang_second/front/images/products/s5/pic1-246b6d32f1.webp",
                )}
              />
            </div>
            <div className="mb-[0.24rem] flex justify-center h-[3.61rem]">
              <ProductReveal
                className="bg-center mr-[0.24rem] bg-no-repeat bg-cover w-[6.26rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/s5/pic2-79ca86567e.webp",
                )}
              />
              <ProductReveal
                className="bg-center [transition-delay:0.2s] bg-no-repeat bg-cover w-[3.69rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/s5/pic3-d32007d46d.webp",
                )}
              />
            </div>
            <ProductReveal className="mt-[1.89rem] mb-[1.1rem] text-[0.6rem] leading-[0.8rem] font-bold [-webkit-text-fill-color:transparent] text-center text-[#d9bf93] bg-[image:linear-gradient(84deg,rgb(145,192,255)_0px,rgb(255,255,255)_40%,rgb(255,137,57)_100%)] bg-clip-text">
              {t("sec6.sec6_title")}
            </ProductReveal>
            <div className="mb-[0.24rem] flex justify-center h-[5.33rem]">
              <ProductReveal
                className="bg-center mr-[0.24rem] bg-no-repeat bg-cover w-[7.23rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/s5/pic4-d1fc4b7ec3.webp",
                )}
              />
              <ProductReveal
                className="bg-center [transition-delay:0.2s] bg-no-repeat bg-cover w-[2.7rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/s5/pic5-86c160e340.webp",
                )}
              />
            </div>
            <div className="mb-[0.24rem] flex justify-center h-[4.02rem]">
              <ProductReveal
                className="bg-center mr-[0.24rem] bg-no-repeat bg-cover w-[5.04rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/s5/pic6-6f024a8727.webp",
                )}
              />
              <ProductReveal
                className="bg-center [transition-delay:0.2s] bg-no-repeat bg-cover w-[4.89rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/s5/pic7-511176a497.webp",
                )}
              />
            </div>
            <div className="text-[0.24rem] leading-[0.56rem] font-normal text-white opacity-[0.5]">
              {t("sec6.sec6_tips")}
            </div>
          </div>
        </div>
        {/* sec7 */}
        <div>
          <ProductReveal className="">
            <div className="text-[0.6rem] leading-[0.9rem] font-bold text-center text-black [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(87deg,rgb(255,125,81)_0px,rgb(255,255,255)_45.9961%,rgb(145,167,169)_100%)] bg-clip-text">
              {t("sec7.title")}
            </div>
          </ProductReveal>
          <ProductFocusCarousel
            look="scenes"
            className="mt-[1.05rem] pb-[2.56rem]"
            slides={[
              scene(
                1,
                "/guanwang_second/front/images/products/s5/slider1-3efd6ab391.webp",
                "/guanwang_second/front/images/products/s5/slider_icon1-b4731820ec.webp",
              ),
              scene(
                2,
                "/guanwang_second/front/images/products/s5/slider2-d325e73268.webp",
                "/guanwang_second/front/images/products/s5/slider_icon2-60c163433f.webp",
              ),
              scene(
                3,
                "/guanwang_second/front/images/products/s5/slider3-ec9d2bf71f.webp",
                "/guanwang_second/front/images/products/s5/slider_icon3-b639e79c9f.webp",
              ),
            ]}
          />
        </div>
        {/* sec8 */}
        <div>
          <ProductReveal className="text-[0.6rem] leading-[0.8rem] font-bold text-center text-black [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(131deg,rgb(255,255,255)_0px,rgb(52,52,52)_99.3652%)] bg-clip-text">
            {t("sec8.title")}
          </ProductReveal>
          <div
            className="bg-center mx-auto bg-no-repeat bg-cover w-[11.66rem] h-[10.8rem]"
            style={bg(
              "/guanwang_second/front/images/products/s5/sec4-9f747998d3.gif",
            )}
          />
          <ProductReveal className="mt-[-0.4rem] text-[0.3rem] leading-[0.55rem] text-white text-center font-normal">
            <p className="mb-[0.08rem] font-bold">{t("sec8.info")}</p>
            <span>{"0° 5° 10° 15° 20° 25°"}</span>
          </ProductReveal>
        </div>
        {/* sec9 */}
        <div>
          <ProductReveal className="mt-[2.34rem] text-[0.6rem] leading-[0.8rem] font-bold text-center text-[#d9bf93] [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(131deg,rgb(255,255,255)_0px,rgb(52,52,52)_99.3652%)] bg-clip-text">
            {t("sec9.title")}
          </ProductReveal>
          <div
            className="bg-center bg-no-repeat bg-cover w-full h-[9.55rem]"
            style={bg(
              "/guanwang_second/front/images/products/s5/sec6-88d1b82b45.webp",
            )}
          />
        </div>
        {/* sec10 */}
        <div>
          <ProductReveal className="mt-[1.3rem] text-[0.6rem] leading-[0.8rem] font-bold text-center text-[#d9bf93] [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(270deg,rgb(255,177,89)_0px,rgb(255,255,255)_100%)] bg-clip-text">
            {t("sec10.title")}
          </ProductReveal>
          <ProductReveal
            className="bg-center mx-auto my-[0.78rem] bg-no-repeat bg-cover w-[7.14rem] h-[0.63rem]"
            style={bg(
              "/guanwang_second/front/images/products/s5/text1-4465d8f872.webp",
            )}
          />
          <ProductReveal className="[transition-delay:0.2s] flex items-center justify-center">
            <div
              className="bg-center mr-[0.95rem] bg-no-repeat bg-cover w-[5.15rem] h-[7.9rem] relative"
              style={bg(
                "/guanwang_second/front/images/products/s5/pic9-0a60bc930b.webp",
              )}
            >
              <div className="absolute left-[0.41rem] bottom-[0.53rem] text-[0.24rem] font-medium text-[#f9deb0]">
                <p>{t("sec10.info")}</p>
                <span className="pt-[0.16rem] text-[0.3rem]">
                  {t("sec10.info2")}
                </span>
              </div>
            </div>
            <div
              className="bg-center bg-no-repeat bg-cover w-[5.15rem] h-[7.9rem] relative"
              style={bg(
                "/guanwang_second/front/images/products/s5/pic8-7b0428c789.webp",
              )}
            >
              <div className="absolute left-[0.41rem] bottom-[0.53rem] text-[0.24rem] font-medium text-[#f9deb0]">
                <p>{t("sec10.info3")}</p>
                <span className="pt-[0.16rem] text-[0.3rem]">
                  {t("sec10.info4")}
                </span>
              </div>
            </div>
          </ProductReveal>
        </div>
        {/* sec11 */}
        <div>
          <ProductReveal className="mt-[2.28rem] text-[0.6rem] leading-[0.8rem] font-bold text-center text-[#d9bf93] [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(133deg,rgb(255,255,255)_0px,rgb(255,147,104)_100%)] bg-clip-text">
            {t("sec11.title")}
          </ProductReveal>
          <div
            className="bg-center bg-no-repeat bg-cover w-full h-[10.6rem]"
            style={bg(
              "/guanwang_second/front/images/products/s5/sec5-05c8b15ebd.webp",
            )}
          />
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
