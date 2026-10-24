import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

export function DefyOverview({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* defy */}
      <div id="overview" className="bg-white">
        {/* sec1 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[14.9rem]"
          style={bg(
            "/guanwang_second/front/images/products/defy/sec1-df07e56ec4.webp",
          )}
        >
          <ProductReveal className="pt-[1.22rem]">
            <div className="text-[1rem] font-semibold leading-[1.2rem] text-center text-white bg-[image:linear-gradient(0deg,rgb(143,130,233)_0px,rgb(244,128,118)_48%,rgb(255,205,90)_100%)] [-webkit-text-fill-color:transparent] relative bg-clip-text">
              <span className="relative">
                {t("sec1.title")}
                <span className="absolute left-full top-[0.14rem] ml-[0.2rem] whitespace-nowrap rounded-[0.06rem] border-2 border-[#feb26e] px-[0.09rem] text-[0.2rem] font-normal leading-[0.31rem] [-webkit-text-fill-color:#feb26e]">
                  {t("sec1.tag")}
                </span>
              </span>
            </div>
            <div className="mt-[0.2rem] text-[0.4rem] font-normal leading-[0.56rem] text-center text-black tracking-[0.02rem]">
              {t("sec1.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec2 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[7.1rem]"
          style={bg(
            "/guanwang_second/front/images/products/defy/sec7-a9217d31d3.webp",
          )}
        >
          <div className="mx-auto mt-[-0.16rem]">
            <div className="flex justify-center h-[6.92rem]">
              <ProductReveal
                className="bg-center bg-no-repeat bg-cover w-[5.87rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/defy/pic1-14e511204a.webp",
                )}
              />
              <div className="mt-[0.5rem]">
                <ProductReveal
                  className="bg-center bg-no-repeat bg-cover w-[4.44rem] h-[3.08rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/defy/pic2-b6dccad37b.webp",
                  )}
                />
                <div className="mt-[0.13rem] flex h-[3.21rem]">
                  <ProductReveal
                    className="bg-center mr-[0.13rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[2.17rem] h-full"
                    style={bg(
                      "/guanwang_second/front/images/products/defy/pic3-bc461d8742.webp",
                    )}
                  />
                  <ProductReveal
                    className="bg-center [transition-delay:0.4s] bg-no-repeat bg-cover w-[2.17rem] h-full"
                    style={bg(
                      "/guanwang_second/front/images/products/defy/pic4-31afd0cbfb.webp",
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sec3 video-box */}
        <div className="relative">
          <ProductReveal className="text-[0.6rem] font-semibold leading-[0.62rem] text-center text-white bg-[image:linear-gradient(0deg,rgb(143,130,233)_0px,rgb(244,128,118)_48%,rgb(255,205,90)_100%)] [-webkit-text-fill-color:transparent] absolute w-full top-[1.26rem] bg-clip-text">
            {t("sec3.title")}
          </ProductReveal>
          <MarketingVideo
            bare
            src="/orvibo/videos/defy1.mp4"
            className="w-full h-full aspect-[1836/1080]"
          />
        </div>
        {/* sec4 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem] relative"
          style={bg(
            "/guanwang_second/front/images/products/defy/sec2-6abc74519d.webp",
          )}
        >
          <ProductReveal className="text-[0.48rem] font-bold leading-[0.72rem] text-left text-[#ffa56f] absolute top-[7.38rem] left-[3.47rem]">
            {t("sec4.title")}
          </ProductReveal>
          <ProductReveal className="text-[0.48rem] font-bold leading-[0.72rem] text-left text-[#818d77] absolute top-[1.29rem] left-[10.55rem]">
            {t("sec4.title2")}
          </ProductReveal>
        </div>
        {/* sec5 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/defy/sec3-b3971e45e2.webp",
          )}
        >
          <ProductReveal className="pt-[2.2rem] pl-[3.56rem] text-left">
            <div className="text-[0.6rem] font-bold leading-[0.8rem] text-left text-black">
              {t("sec5.title")}
            </div>
            <div className="text-[0.24rem] font-medium text-black leading-[0.42rem] max-w-[6.6rem]">
              {t("sec5.text")}
            </div>
          </ProductReveal>
        </div>
        {/* sec6 */}
        <div className="h-[9.6rem] relative">
          <ProductReveal className="pt-[1.06rem] text-[0.6rem] font-semibold leading-[0.62rem] text-center text-white relative z-[9] bg-[image:linear-gradient(0deg,rgb(160,182,231)_0px,rgb(229,157,85)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
            {t("sec6.title")}
          </ProductReveal>
          <div
            className="bg-center bg-no-repeat bg-cover absolute top-[1.31rem] left-[4.55rem] w-[6.24rem] h-[8.29rem]"
            style={bg(
              "/guanwang_second/front/images/products/defy/pic5-fe64e93497.webp",
            )}
          />
          <ProductReveal
            className="bg-center [transition-delay:0.2s] bg-no-repeat bg-cover absolute top-[3.99rem] left-[4.11rem] w-[11.51rem] h-[3.96rem]"
            style={bg(
              "/guanwang_second/front/images/products/defy/pic6-cde8dd663c.webp",
            )}
          />
        </div>
        {/* sec7 */}
        <div>
          <ProductReveal className="pt-[1.39rem] text-[0.6rem] font-semibold leading-[0.62rem] text-center text-white bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(0deg,rgb(252,103,76)_0px,rgb(241,142,41)_100%)]">
            {t("sec7.title")}
          </ProductReveal>
          <ProductReveal
            className="bg-center mx-auto mt-[0.55rem] bg-no-repeat bg-cover w-[16.01rem] h-[8.74rem]"
            style={bg(
              "/guanwang_second/front/images/products/defy/sec5-60c9d8861b.webp",
            )}
          />
        </div>
        {/* sec8 */}
        <div>
          <ProductReveal className="pt-[2rem]">
            <div className="text-[0.6rem] font-semibold leading-[0.62rem] text-center text-white bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(270deg,rgb(82,78,79)_0px,rgb(152,151,152)_100%)]">
              {t("sec8.title")}
            </div>
            <div className="mt-[0.28rem] text-[0.24rem] font-medium text-black text-center">
              {t("sec8.text")}
            </div>
          </ProductReveal>
          <ProductReveal
            className="bg-center mx-auto mt-[0.56rem] bg-no-repeat bg-cover w-[16rem] h-[9rem]"
            style={bg(
              "/guanwang_second/front/images/products/defy/sec6-1307368a9a.webp",
            )}
          />
        </div>
        {/* sec9 video-box */}
        <div className="mt-[0.85rem] relative">
          <ProductReveal className="text-[0.6rem] font-semibold leading-[0.62rem] text-center text-white absolute w-full top-[1.15rem] bg-[image:linear-gradient(297deg,rgb(255,171,97)_0px,rgb(128,145,188)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
            {t("sec9.title")}
          </ProductReveal>
          <MarketingVideo
            bare
            src="/orvibo/videos/defy2.mp4"
            className="w-full h-full aspect-[1610/1080]"
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
