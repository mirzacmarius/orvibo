import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

export function LightOverview({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* light */}
      <div id="overview" className="bg-black">
        {/* sec1 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/light/sec1-5e39d03ad3.webp",
          )}
        >
          <ProductReveal className="pt-[2.6rem] pl-[3.15rem]">
            <div className="text-[0.72rem] leading-[0.72rem]">
              <span className="font-semibold text-white bg-[image:linear-gradient(308deg,rgb(255,244,207)_0px,rgb(255,206,107)_81%,rgb(255,248,206)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
                {t("sec1.title")}
              </span>
              <span className="ml-[0.2rem] inline-block rounded-[0.06rem] px-[0.1rem] align-top text-[0.16rem] leading-[0.33rem] font-extrabold whitespace-nowrap text-[#774d32] h-[0.33rem] bg-[image:linear-gradient(139deg,rgb(255,244,207)_0px,rgb(255,206,107)_81%,rgb(255,248,206)_100%)]">
                {t("sec1.desc")}
              </span>
            </div>
            <div
              className="bg-center mt-[0.26rem] bg-no-repeat bg-cover w-[4.89rem] h-[0.76rem]"
              style={bg(
                "/guanwang_second/front/images/products/light/pic1-10f0c5952c.webp",
              )}
            />
          </ProductReveal>
        </div>
        {/* sec2 s__bg lazy */}
        <div
          className="bg-center mx-auto my-[1.2rem] bg-no-repeat bg-cover w-[16rem] h-[9rem]"
          style={bg(
            "/guanwang_second/front/images/products/light/sec2-62c4104c6b.webp",
          )}
        >
          <ProductReveal className="pt-[1.65rem] pl-[7.79rem] text-[0.54rem] leading-[0.6rem] font-semibold text-left text-white bg-[image:linear-gradient(315deg,rgb(196,108,43)_0px,rgb(207,163,110)_81%,rgb(136,76,2)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
            {t("sec2.title")}
          </ProductReveal>
        </div>
        {/* sec3 */}
        <div>
          <ProductReveal className="mb-[0.72rem] text-[0.54rem] leading-[0.6rem] font-semibold text-center text-white bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(298deg,rgb(255,253,193)_0px,rgb(255,253,193)_0px,rgb(229,123,40)_100%)]">
            {t("sec3.title")}
          </ProductReveal>
          <div className="mx-auto">
            <div className="mb-[0.3rem] flex justify-center">
              <ProductReveal
                className="bg-center mr-[0.28rem] bg-no-repeat bg-cover w-[6.84rem] h-[7.64rem]"
                style={bg(
                  "/guanwang_second/front/images/products/light/pic2-41f7660ede.webp",
                )}
              />
              <div>
                <ProductReveal
                  className="bg-center bg-no-repeat bg-cover w-[6.84rem] h-[2.97rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/light/pic3-fd2bc631b9.webp",
                  )}
                />
                <div className="mt-[0.3rem] flex">
                  <ProductReveal
                    className="bg-center mr-[0.28rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[3.28rem] h-[4.37rem]"
                    style={bg(
                      "/guanwang_second/front/images/products/light/pic4-77de0275ec.webp",
                    )}
                  />
                  <ProductReveal
                    className="bg-center [transition-delay:0.4s] bg-no-repeat bg-cover w-[3.28rem] h-[4.37rem]"
                    style={bg(
                      "/guanwang_second/front/images/products/light/pic5-0667ef2238.webp",
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center h-[2.97rem]">
              <ProductReveal
                className="bg-center mr-[0.28rem] bg-no-repeat bg-cover w-[6.84rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/light/pic6-75cbed5db2.webp",
                )}
              />
              <ProductReveal
                className="bg-center [transition-delay:0.2s] bg-no-repeat bg-cover w-[6.84rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/light/pic7-b09c425785.webp",
                )}
              />
            </div>
          </div>
        </div>
        {/* sec4 */}
        <div>
          <ProductReveal className="mt-[1.85rem] mb-[0.94rem] text-[0.54rem] leading-[0.6rem] font-semibold text-center text-white bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(309deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)]">
            {t("sec4.title")}
          </ProductReveal>
          <div className="mb-[2.11rem] flex justify-center">
            <ProductReveal className="mr-[0.28rem] w-[4.46rem]">
              <div className="w-[4.46rem] h-[5.79rem]">
                <MarketingVideo
                  bare
                  src="/orvibo/videos/light2.mp4"
                  className="rounded-[0.3rem] w-full h-full aspect-[446/578]"
                />
              </div>
              <p className="mt-[0.24rem] text-[0.24rem] font-extrabold text-white text-center">
                {t("sec4.row_item")}
              </p>
            </ProductReveal>
            <ProductReveal className="mr-[0.28rem] w-[4.46rem]">
              <div className="w-[4.46rem] h-[5.79rem]">
                <MarketingVideo
                  bare
                  src="/orvibo/videos/light1.mp4"
                  className="rounded-[0.3rem] w-full h-full aspect-[446/578]"
                />
              </div>
              <p className="mt-[0.24rem] text-[0.24rem] font-extrabold text-white text-center">
                {t("sec4.row_item2")}
              </p>
            </ProductReveal>
            <ProductReveal className="mr-[0.28rem] w-[4.46rem]">
              <div className="w-[4.46rem] h-[5.79rem]">
                <MarketingVideo
                  bare
                  src="/orvibo/videos/light3.mp4"
                  className="rounded-[0.3rem] w-full h-full aspect-[446/578]"
                />
              </div>
              <p className="mt-[0.24rem] text-[0.24rem] font-extrabold text-white text-center">
                {t("sec4.row_item3")}
              </p>
            </ProductReveal>
          </div>
        </div>
        {/* sec5 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/light/sec3-da0c295b15.webp",
          )}
        >
          <ProductReveal className="pt-[2.26rem] pl-[10.69rem]">
            <div className="mb-[0.32rem] text-[0.26rem] leading-[0.3rem] font-semibold text-left text-white bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(296deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)]">
              {t("sec5.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.64rem] leading-[0.7rem] font-semibold text-left text-white bg-[image:linear-gradient(296deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec5.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec6 video-box */}
        <div className="relative h-[10.8rem]">
          <MarketingVideo
            bare
            src="/orvibo/videos/light4.mp4"
            className="w-full h-full aspect-[1920/1080]"
          />
          <ProductReveal className="absolute left-[11.27rem] top-[3.66rem]">
            <div className="mb-[0.5rem] text-[0.54rem] leading-[0.6rem] font-semibold text-left text-white [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(304deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text">
              {t("sec6.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] leading-[0.48rem] font-medium text-left text-white bg-[image:linear-gradient(304deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] max-w-[6rem]">
              {t("sec6.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec7 */}
        <div className="mt-[1.32rem]">
          <ProductReveal className="text-center">
            <div className="mb-[0.42rem] text-[0.54rem] leading-[0.6rem] font-semibold text-center text-white [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(296deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text">
              {t("sec7.title")}
            </div>
            <div className="mt-[0.3rem] mb-[0.84rem] text-[0.22rem] leading-[0.26rem] font-medium text-center text-white bg-[image:linear-gradient(296deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] max-w-[8.6rem] mx-auto">
              {t("sec7.desc")}
            </div>
          </ProductReveal>
          <div className="mx-auto my-[0.84rem] relative w-[13.96rem] h-[7.8525rem]">
            <MarketingVideo
              bare
              src="/orvibo/videos/light6.mp4"
              className="rounded-[0.3rem] w-full h-full aspect-[1920/1080]"
            />
          </div>
        </div>
        {/* sec8 s__bg lazy */}
        <div
          className="bg-center mt-[2rem] bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/light/sec4-30f4157a1c.webp",
          )}
        >
          <ProductReveal className="pt-[1.9rem] pl-[7.84rem]">
            <div className="mb-[0.32rem] text-[0.26rem] leading-[0.3rem] font-extrabold text-left text-white bg-[image:linear-gradient(280deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec8.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.64rem] leading-[0.7rem] font-semibold text-left text-white bg-[image:linear-gradient(280deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec8.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec9 */}
        <div className="h-[16.96rem]">
          <div
            className="bg-center pt-[3.3rem] bg-no-repeat bg-cover h-[11.9rem] text-center"
            style={bg(
              "/guanwang_second/front/images/products/light/sec5-dccfd735fd.webp",
            )}
          >
            <ProductReveal className="mb-[0.5rem] text-[0.54rem] leading-[0.6rem] font-semibold text-center text-white bg-[image:linear-gradient(296deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec9.title")}
            </ProductReveal>
            <ProductReveal className="mt-[0.3rem] mb-[1.17rem] text-[0.22rem] leading-[0.48rem] font-medium text-center text-white bg-[image:linear-gradient(311deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] max-w-[5.4rem] mx-auto">
              {t("sec9.desc")}
            </ProductReveal>
          </div>
          <div className="mt-[-3.34rem] flex justify-center">
            <ProductReveal
              className="bg-center mr-[0.28rem] bg-no-repeat bg-cover w-[4.48rem] h-[7.03rem]"
              style={bg(
                "/guanwang_second/front/images/products/light/pic8-1233a1bec6.webp",
              )}
            />
            <ProductReveal
              className="bg-center mr-[0.28rem] bg-no-repeat bg-cover w-[4.48rem] h-[7.03rem]"
              style={bg(
                "/guanwang_second/front/images/products/light/pic9-3f79c8c731.webp",
              )}
            />
            <ProductReveal
              className="bg-center bg-no-repeat bg-cover w-[4.48rem] h-[7.03rem]"
              style={bg(
                "/guanwang_second/front/images/products/light/pic10-bad05fae19.webp",
              )}
            />
          </div>
        </div>
        {/* sec10 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.56rem]"
          style={bg(
            "/guanwang_second/front/images/products/light/sec6-6861411417.webp",
          )}
        >
          <ProductReveal className="pt-[3.37rem] pl-[3.67rem]">
            <div className="mb-[0.32rem] text-[0.26rem] leading-[0.3rem] font-semibold text-left text-white bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(283deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)]">
              {t("sec10.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.64rem] leading-[0.7rem] font-semibold text-left text-white bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(283deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)]">
              {t("sec10.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec11 */}
        <div className="h-[16.96rem]">
          <div
            className="bg-center pt-[3.35rem] bg-no-repeat bg-cover h-[10.35rem] text-center"
            style={bg(
              "/guanwang_second/front/images/products/light/sec7-44e9cc8eeb.webp",
            )}
          >
            <ProductReveal className="mb-[0.5rem] text-[0.54rem] leading-[0.6rem] font-semibold text-center text-white bg-[image:linear-gradient(316deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec11.title")}
            </ProductReveal>
            <ProductReveal className="mt-[0.3rem] text-[0.22rem] leading-[0.48rem] font-medium text-center text-white bg-[image:linear-gradient(306deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] max-w-[6rem] mx-auto">
              {t("sec11.desc")}
            </ProductReveal>
          </div>
          <div className="mx-auto mt-[-2.71rem] relative w-[13.96rem] h-[7.9855rem]">
            <MarketingVideo
              bare
              src="/orvibo/videos/light5.mp4"
              className="rounded-[0.3rem] w-full h-full aspect-[1888/1080]"
            />
          </div>
        </div>
        {/* sec12 */}
        <div>
          <ProductReveal className="mb-[1.68rem] text-[0.54rem] leading-[0.6rem] font-semibold text-center text-white bg-[image:linear-gradient(303deg,rgb(255,253,193)_0px,rgb(229,123,40)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
            {t("sec12.title")}
          </ProductReveal>
          <div className="mx-auto pb-[1.96rem]">
            <div className="mb-[0.19rem] flex justify-center">
              <ProductReveal
                className="bg-center mr-[0.19rem] bg-no-repeat bg-cover w-[8.29rem] h-[5.48rem]"
                style={bg(
                  "/guanwang_second/front/images/products/light/pic11-46be277573.webp",
                )}
              />
              <div>
                <ProductReveal
                  className="bg-center bg-no-repeat bg-cover w-[5.48rem] h-[2.67rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/light/pic12-4f082b4096.webp",
                  )}
                />
                <div className="mt-[0.15rem] flex">
                  <ProductReveal
                    className="bg-center [transition-delay:0.2s] bg-no-repeat bg-cover w-[5.48rem] h-[2.67rem]"
                    style={bg(
                      "/guanwang_second/front/images/products/light/pic13-566ebe47c2.webp",
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center h-[2.67rem]">
              <ProductReveal
                className="bg-center mr-[0.19rem] bg-no-repeat bg-cover w-[4.51rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/light/pic14-fc2232f20e.webp",
                )}
              />
              <ProductReveal
                className="bg-center mr-[0.19rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[4.51rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/light/pic15-59c302f290.webp",
                )}
              />
              <ProductReveal
                className="bg-center [transition-delay:0.4s] bg-no-repeat bg-cover w-[4.51rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/light/pic16-fa2c26b063.webp",
                )}
              />
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
