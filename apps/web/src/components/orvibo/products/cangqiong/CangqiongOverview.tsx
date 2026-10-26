import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

export function CangqiongOverview({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* cangqiong */}
      <div id="overview" className="bg-black">
        {/* sec s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[11.77rem]"
          style={bg(
            "/guanwang_second/front/images/products/cangqiong/sec1-3af089900a.webp",
          )}
        />
        {/* sec1 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[56.44rem]"
          style={bg(
            "/guanwang_second/front/images/products/cangqiong/sec1-d658d47718.webp",
          )}
        >
          <ProductReveal className="pt-[1.15rem] pl-[4.04rem]">
            <div className="text-[0.88rem] leading-[1.02rem] font-semibold text-left text-white [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(270deg,rgb(254,231,144)_0px,rgb(238,149,50)_100%)] bg-clip-text">
              {t("sec1.title")}
            </div>
            <div className="mt-[0.74rem] text-[0.3rem] leading-[0.48rem] font-medium text-left text-[#bcbcbc]">
              {t("sec1.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center mt-[0.2rem] ml-[4.04rem] bg-no-repeat bg-cover w-[5.35rem] h-[0.48rem]"
            style={bg(
              "/guanwang_second/front/images/products/cangqiong/pic1-74045b2aa7.webp",
            )}
          />
          <div
            className="bg-center mx-auto mt-[1.01rem] bg-no-repeat bg-cover w-[16rem] h-[9.33rem]"
            style={bg(
              "/guanwang_second/front/images/products/cangqiong/pic-948aed1ffd.webp",
            )}
          />
          <ProductReveal className="mt-[4.4rem] ml-[1.54rem] [-webkit-text-fill-color:transparent] text-left text-[1.14rem] leading-[1.4rem] font-semibold bg-[image:linear-gradient(306deg,rgb(255,255,255)_0px,rgb(161,217,242)_100%)] bg-clip-text">
            {t("sec2.title")}
          </ProductReveal>
          <div className="mt-[11.84rem] flex items-center justify-center">
            <ProductReveal
              className="bg-center bg-no-repeat bg-cover w-[10rem] h-[4.98rem]"
              style={bg(
                "/guanwang_second/front/images/products/cangqiong/block2-9e2a54e568.webp",
              )}
            />
          </div>
        </div>
        {/* sec__video_container s__bg d__sec sec2 */}
        <div className="bg-center flex bg-no-repeat bg-cover relative flex-col items-center">
          <MarketingVideo
            bare
            src="/orvibo/videos/cangqiong2.mp4"
            className="w-full aspect-[2160/1080]"
          />
          <ProductReveal className="absolute top-[1.08rem] left-[3.26rem]">
            <div className="text-[0.6rem] leading-[0.68rem] font-semibold text-left text-white [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(10deg,rgb(215,160,254)_0px,rgb(118,131,217)_100%)] bg-clip-text">
              {t("sec3.title")}
            </div>
            <div className="mt-[0.45rem] text-[0.24rem] leading-[0.39rem] font-medium text-left text-white max-w-[7.1rem]">
              {t("sec3.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec3 */}
        <div className="bg-black">
          <ProductReveal className="mt-[3.52rem] mb-[2.12rem] ml-[5.68rem] bg-clip-text text-[0.88rem] leading-[1.02rem] font-semibold [-webkit-text-fill-color:transparent] text-left bg-[image:linear-gradient(327deg,rgb(246,121,102)_0px,rgb(254,244,214)_100%)]">
            {t("sec4.title")}
          </ProductReveal>
          <div className="flex items-center justify-center">
            <ProductReveal
              className="bg-center mr-[1.04rem] bg-no-repeat bg-cover w-[5.52rem] h-[8.3rem]"
              style={bg(
                "/guanwang_second/front/images/products/cangqiong/pic5-e59c46c76e.webp",
              )}
            />
            <ProductReveal
              className="bg-center bg-no-repeat bg-cover w-[9.42rem] h-[6.06rem]"
              style={bg(
                "/guanwang_second/front/images/products/cangqiong/pic4-a385658fda.webp",
              )}
            />
          </div>
          <div className="flex items-center justify-center">
            <ProductReveal
              className="bg-center mr-[1.04rem] bg-no-repeat bg-cover w-[9.27rem] h-[5.98rem]"
              style={bg(
                "/guanwang_second/front/images/products/cangqiong/pic3-10e9a0b7af.webp",
              )}
            />
            <ProductReveal
              className="bg-center mt-[0.18rem] bg-no-repeat bg-cover w-[5.48rem] h-[8.23rem]"
              style={bg(
                "/guanwang_second/front/images/products/cangqiong/pic6-51339fc468.webp",
              )}
            />
          </div>
          <ProductReveal
            className="bg-center mt-[1.64rem] ml-[3.99rem] bg-no-repeat bg-cover h-[6.07rem] w-[11.17rem]"
            style={bg(
              "/guanwang_second/front/images/products/cangqiong/pic2-a6daa55e7e.webp",
            )}
          />
          <ProductReveal className="mt-[4.09rem] mb-[0.21rem] ml-[3.1rem] bg-clip-text text-[0.88rem] leading-[1.02rem] font-semibold [-webkit-text-fill-color:transparent] text-left bg-[image:linear-gradient(0deg,rgb(102,139,236)_0px,rgb(255,244,214)_100%)]">
            {t("sec5.title")}
          </ProductReveal>
        </div>
        {/* sec__video_container s__bg */}
        <div className="bg-center bg-no-repeat bg-cover relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/cangqiong3.mp4"
            className="w-full aspect-[2160/1080]"
          />
        </div>
        {/* sec__title1 fadeInUp show */}
        <ProductReveal className="mt-[1.06rem] mb-[0.9rem] ml-[3.16rem] bg-clip-text text-[0.88rem] leading-[1.02rem] font-semibold [-webkit-text-fill-color:transparent] text-left bg-[image:linear-gradient(2deg,rgb(154,216,242)_0px,rgb(64,143,226)_100%)]">
          {t("sec6.title")}
        </ProductReveal>
        {/* sec__video_container s__bg */}
        <div className="bg-center bg-no-repeat bg-cover relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/cangqiong5.mp4"
            className="w-full aspect-[1840/1080]"
          />
        </div>
        {/* sec__title2 fadeInUp show */}
        <ProductReveal className="mt-[0.9rem] mb-[0.64rem] ml-[4.25rem] bg-clip-text text-[0.88rem] leading-[1.02rem] font-semibold [-webkit-text-fill-color:transparent] text-left bg-[image:linear-gradient(270deg,rgb(156,73,251)_0px,rgb(63,186,254)_100%)]">
          {t("sec7.title")}
        </ProductReveal>
        {/* sec4 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[14.82rem]"
          style={bg(
            "/guanwang_second/front/images/products/cangqiong/sec2-910622eedb.webp",
          )}
        />
        {/* sec__video_container s__bg d__sec sec5 */}
        <div className="bg-center flex bg-no-repeat bg-cover relative flex-col items-center">
          <MarketingVideo
            bare
            src="/orvibo/videos/cangqiong4.mp4"
            className="w-full aspect-[2164/1080]"
          />
          <ProductReveal className="absolute top-[1.2rem] left-[3.92rem]">
            <div className="mt-[0.3rem] ml-[-0.2rem] text-[0.4rem] leading-[0.48rem] font-bold text-left text-white">
              {t("sec8.desc")}
            </div>
            <div className="mt-[0.33rem] text-[0.64rem] leading-[0.74rem] font-semibold text-left text-white bg-[image:linear-gradient(321deg,rgb(117,247,209)_0px,rgb(92,151,221)_47%,rgb(36,203,225)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec8.title")}
            </div>
          </ProductReveal>
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
