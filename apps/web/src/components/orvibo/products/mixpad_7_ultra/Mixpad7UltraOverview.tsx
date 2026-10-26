import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductFocusCarousel } from "@/components/orvibo/product/ProductFocusCarousel";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** Speaker finishes in the sec6 carousel (text keys `sec6.<key>.title|desc`). */
const finishes = [
  {
    key: "walnut",
    image:
      "/guanwang_second/front/images/products/mixpad_7_ultra/swiper1-fcf22fe347.webp",
  },
  {
    key: "fabric",
    image:
      "/guanwang_second/front/images/products/mixpad_7_ultra/swiper2-b938db572e.webp",
  },
  {
    key: "aluminum",
    image:
      "/guanwang_second/front/images/products/mixpad_7_ultra/swiper3-f78a309bda.webp",
  },
];

/** Screen specs on the sec7 card, two by two as on CN (text keys `sec7.<key>.value|label`). */
const screenSpecs = [
  { key: "size", position: "left-[2.63rem] top-[1.1rem]" },
  { key: "angle", position: "left-[8.68rem] top-[1.1rem]" },
  { key: "resolution", position: "left-[2.63rem] top-[3.48rem]" },
  { key: "coating", position: "left-[8.68rem] top-[3.48rem]" },
];

export function Mixpad7UltraOverview({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { t, img, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* mixpad7 */}
      <div id="overview" className="bg-black">
        {/* sec1 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[11.4rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_7_ultra/sec1-08805ee53e.webp",
          )}
        >
          <ProductReveal className="pt-[4.09rem]">
            <div
              className="bg-center mx-auto bg-no-repeat bg-cover w-[4.41rem] h-[0.81rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_7_ultra/logo-601c2f1d81.webp",
              )}
            />
            <div className="mt-[0.21rem] text-[0.36rem] font-extrabold leading-[0.5rem] text-center text-white bg-[image:linear-gradient(270deg,rgb(255,255,255)_0px,grey_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec1.title")}
            </div>
            <div className="mt-[0.46rem] text-[0.48rem] font-medium leading-[0.67rem] text-center text-white bg-[image:linear-gradient(133deg,rgb(249,225,197)_0px,rgb(230,228,223)_22%,rgb(255,255,255)_46%,rgb(195,190,178)_73%,rgb(255,255,137)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec1.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec2 */}
        <div className="h-[7.28rem]">
          <ProductReveal className="pt-[0.75rem] text-[0.8rem] font-semibold leading-[1.2rem] text-center text-white bg-[image:linear-gradient(10deg,rgb(215,160,254)_0px,rgb(118,131,217)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
            {t("sec2.title")}
          </ProductReveal>
        </div>
        {/* sec3 video-box */}
        <div className="relative h-[9.6rem]">
          <MarketingVideo
            bare
            src="/orvibo/videos/MixPad-7Ultra1.mp4"
            className="w-full h-full aspect-[1920/1080]"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/20">
            <OrviboWatchTrigger
              videoSrc="/orvibo/videos/MixPad-7Ultra.mp4"
              showPlayIcon={false}
            >
              <span
                className="pr-[0.26rem] relative inline-block text-[0.24rem] font-medium leading-[0.34rem] text-white cursor-pointer after:bg-center after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:w-[0.24rem] after:h-[0.24rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat"
                style={pseudoBg(
                  "after",
                  "/guanwang_second/front/images/house_solution/icon_video-9cdc1f24f3.webp",
                )}
              >
                {t("sec3.video_watch")}
              </span>
            </OrviboWatchTrigger>
          </div>
        </div>
        {/* sec4 */}
        <div className="pt-[0.6rem] pb-[1.14rem]">
          <div className="mx-auto">
            <div className="mb-[0.3rem] flex justify-center">
              <ProductReveal
                className="bg-center mr-[0.28rem] bg-no-repeat bg-cover w-[6.84rem] h-[7.64rem]"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_7_ultra/pic1-05ba200c99.webp",
                )}
              />
              <div>
                <ProductReveal
                  className="bg-center bg-no-repeat bg-cover w-[6.84rem] h-[2.97rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_7_ultra/pic2-882f6563ca.webp",
                  )}
                />
                <div className="mt-[0.3rem] flex">
                  <ProductReveal
                    className="bg-center mr-[0.28rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[3.28rem] h-[4.37rem]"
                    style={bg(
                      "/guanwang_second/front/images/products/mixpad_7_ultra/pic3-6cf0e42862.webp",
                    )}
                  />
                  <div>
                    <ProductReveal
                      className="bg-center mr-[0.28rem] mb-[0.3rem] [transition-delay:0.4s] bg-no-repeat bg-cover w-[3.28rem] h-[2.02rem]"
                      style={bg(
                        "/guanwang_second/front/images/products/mixpad_7_ultra/pic4-b413acfe9a.webp",
                      )}
                    />
                    <ProductReveal
                      className="bg-center [transition-delay:0.6s] bg-no-repeat bg-cover w-[3.28rem] h-[2.02rem]"
                      style={bg(
                        "/guanwang_second/front/images/products/mixpad_7_ultra/pic5-e3087224b4.webp",
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-[3.91rem]">
              <ProductReveal
                className="bg-center mr-[0.28rem] bg-no-repeat bg-cover w-[3.28rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_7_ultra/pic6-71548fc4c1.webp",
                )}
              />
              <ProductReveal
                className="bg-center mr-[0.28rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[3.28rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_7_ultra/pic7-98f22fea5f.webp",
                )}
              />
              <ProductReveal
                className="bg-center [transition-delay:0.4s] bg-no-repeat bg-cover w-[6.84rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_7_ultra/pic8-78f6af3e91.webp",
                )}
              />
            </div>
          </div>
        </div>
        {/* sec5 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.88rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_7_ultra/sec2-e7cddc3f72.webp",
          )}
        >
          <ProductReveal className="pt-[1.58rem]">
            <div className="text-[0.72rem] font-extrabold leading-[0.9rem] text-center text-white bg-[image:linear-gradient(298deg,rgb(217,205,188)_0px,rgb(255,255,255)_46%,rgb(148,178,156)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec5.title")}
            </div>
          </ProductReveal>
        </div>
        {/* sec6 */}
        <div className="pt-[1.02rem] pb-[3.55rem]">
          <ProductReveal className="">
            <div className="text-[0.72rem] font-extrabold leading-[0.9rem] text-center text-white bg-[image:linear-gradient(289deg,rgb(255,255,255)_0px,grey_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec6.title")}
            </div>
          </ProductReveal>
          <ProductFocusCarousel
            className="z-[1] mx-auto mt-[0.96rem]"
            slides={finishes.map((finish) => ({
              key: finish.key,
              image: img(finish.image),
              title: t(`sec6.${finish.key}.title`),
              desc: t(`sec6.${finish.key}.desc`),
            }))}
          />
        </div>
        {/* sec7 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_7_ultra/sec3-24908eca4f.webp",
          )}
        >
          <ProductReveal className="mt-[-0.7rem] text-center">
            <div className="text-[0.72rem] font-extrabold leading-[0.9rem] text-center text-white bg-[image:linear-gradient(286deg,rgb(212,232,255)_0px,rgb(255,255,255)_46%,rgb(92,154,249)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec7.title")}
            </div>
            <div
              className="relative bg-center mx-auto mt-[7.8rem] bg-no-repeat bg-cover w-[14.36rem] h-[5.94rem] text-left"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_7_ultra/pic9-63dc36f309-notext.webp",
              )}
            >
              {screenSpecs.map((spec) => (
                <div key={spec.key} className={`absolute ${spec.position}`}>
                  <div className="inline-block bg-[image:linear-gradient(105deg,#fff_40%,#9aaecb_100%)] bg-clip-text text-[0.66rem] font-semibold leading-[0.66rem] [-webkit-text-fill-color:transparent]">
                    {t(`sec7.${spec.key}.value`)}
                  </div>
                  <div className="mt-[0.36rem] text-[0.24rem] leading-[0.34rem] text-white/[0.63]">
                    {t(`sec7.${spec.key}.label`)}
                  </div>
                </div>
              ))}
            </div>
          </ProductReveal>
        </div>
        {/* sec8 */}
        <div className="h-[19.93rem]">
          <ProductReveal className="pt-[6.59rem]">
            <div className="text-[0.72rem] font-extrabold leading-[0.9rem] text-center text-white bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(276deg,rgb(255,255,255)_0px,grey_100%)]">
              {t("sec8.title")}
            </div>
            <div className="mt-[0.63rem] text-[0.36rem] font-medium leading-[0.48rem] text-center text-white bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(278deg,rgb(255,255,255)_0px,grey_100%)]">
              {t("sec8.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center mx-auto my-[0.88rem] bg-no-repeat bg-cover h-[8.2rem] w-[18rem]"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_7_ultra/05-473e8c368a.webp",
            )}
          />
        </div>
        {/* sec9 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_7_ultra/sec4-3d25cb3bc5.webp",
          )}
        >
          <ProductReveal className="pt-[0.54rem]">
            <div className="text-[0.72rem] font-extrabold leading-[0.9rem] text-center text-white bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(319deg,rgb(255,255,255)_0px,rgb(255,255,255)_47%,rgb(151,124,219)_100%)]">
              {t("sec9.title")}
            </div>
            <div className="mt-[0.47rem] text-[0.36rem] font-medium leading-[0.48rem] text-center text-white bg-[image:linear-gradient(293deg,rgb(255,255,255)_0px,rgb(255,255,255)_47%,rgb(157,132,221)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec9.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec10 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[12.36rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_7_ultra/sec5-352c05a6b8.webp",
          )}
        >
          <ProductReveal className="pt-[1.36rem]">
            <div className="text-[0.72rem] font-extrabold leading-[0.9rem] text-center text-white bg-[image:linear-gradient(275deg,rgb(255,255,255)_0px,rgb(155,175,202)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec10.title")}
            </div>
            <div className="mt-[0.4rem] text-[0.36rem] font-medium leading-[0.48rem] text-center text-white bg-[image:linear-gradient(270deg,rgb(255,255,255)_0px,rgb(155,175,202)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec10.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec11 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[14rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_7_ultra/sec6-97facc8d5c.webp",
          )}
        >
          <ProductReveal className="pt-[1.2rem]">
            <div className="text-[0.72rem] font-extrabold leading-[0.9rem] text-center text-white bg-[image:linear-gradient(292deg,rgb(255,255,255)_0px,rgb(147,224,173)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec11.title")}
            </div>
            <div className="mt-[0.4rem] text-[0.36rem] font-medium leading-[0.48rem] text-center text-white bg-[image:linear-gradient(275deg,rgb(255,255,255)_0px,rgb(147,224,173)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec11.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec12 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[12.51rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_7_ultra/sec7-bb0db6a44a.webp",
          )}
        >
          <ProductReveal className="pt-[0.81rem]">
            <div className="text-[0.72rem] font-extrabold leading-[0.9rem] text-center text-white bg-[image:linear-gradient(301deg,rgb(160,254,247)_0px,rgb(255,255,255)_46%,rgb(92,154,249)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec12.title")}
            </div>
            <div className="mt-[0.4rem] text-[0.36rem] font-medium leading-[0.48rem] text-center text-white bg-[image:linear-gradient(273deg,rgb(160,254,247)_0px,rgb(255,255,255)_46%,rgb(92,154,249)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec12.desc")}
            </div>
          </ProductReveal>
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
