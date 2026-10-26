import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

export function GaosiOverview({ locale, text, common }: ProductViewProps) {
  const { t, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* gaosi */}
      <div id="overview" className="relative bg-black">
        {/* sec1 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[10.83rem]"
          style={bg(
            "/guanwang_second/front/images/products/gaosi/sec1-59fa128677.webp",
          )}
        >
          <div className="pt-[3.42rem] pl-[2.26rem]">
            <div className="w-fit text-center text-white">
              <p className="flex items-center justify-center whitespace-nowrap text-[0.4rem] leading-[0.48rem]">
                {t("sec1.name")}
                <span className="ml-[0.16rem] rounded-[0.1rem] border-2 border-white px-[0.1rem] text-[0.3rem] leading-[0.42rem]">
                  G1
                </span>
              </p>
              <p className="mt-[0.2rem] text-[0.26rem] leading-[0.32rem] tracking-[0.02rem]">
                {t("sec1.subtitle")}
              </p>
              <p className="mt-[0.56rem] bg-[linear-gradient(124deg,#69615d_12%,#f3f3f2_50%,#69615d_90%)] bg-clip-text text-[0.54rem] font-semibold leading-[0.7rem] [-webkit-text-fill-color:transparent]">
                {t("sec1.slogan")}
              </p>
            </div>
            <OrviboWatchTrigger
              videoSrc="/orvibo/videos/gaosi1.mp4"
              className="mx-auto mt-[1.13rem] pl-[1.8rem] relative"
              showPlayIcon={false}
            >
              <span
                className="relative flex items-center h-[0.24rem] text-[0.24rem] text-white cursor-pointer after:bg-center after:ml-[0.12rem] after:block after:content-[''] after:w-[0.24rem] after:h-[0.24rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat"
                style={pseudoBg(
                  "after",
                  "/guanwang_second/front/images/products/mixpad_x/icon_player-7fc7fa8ef7.webp",
                )}
              >
                {t("sec1.video_text")}
              </span>
            </OrviboWatchTrigger>
          </div>
        </div>
        {/* sec2 */}
        <div>
          <ProductReveal className="pt-[1.67rem] pb-[1.9rem]">
            <div className="mb-[0.14rem] flex items-center justify-center">
              <div
                className="bg-center bg-no-repeat bg-cover w-[9.58rem] h-[2.58rem]"
                style={bg(
                  "/guanwang_second/front/images/products/gaosi/img-5-154a1f69c4.webp",
                )}
              />
            </div>
            <div className="mb-[0.14rem] flex items-center justify-center">
              <div
                className="bg-center mr-[0.14rem] bg-no-repeat bg-cover w-[4.74rem] h-[2.24rem]"
                style={bg(
                  "/guanwang_second/front/images/products/gaosi/img-44b6bb9495.webp",
                )}
              />
              <div
                className="bg-center bg-no-repeat bg-cover w-[4.74rem] h-[2.24rem]"
                style={bg(
                  "/guanwang_second/front/images/products/gaosi/img-10-1-197344c17f.webp",
                )}
              />
            </div>
            <div className="mb-[0.14rem] flex items-center justify-center">
              <div
                className="bg-center mr-[0.14rem] bg-no-repeat bg-cover w-[4.7rem] h-[2.3rem]"
                style={bg(
                  "/guanwang_second/front/images/products/gaosi/img-40757d9b2a.webp",
                )}
              />
              <div
                className="bg-center bg-no-repeat bg-cover w-[4.7rem] h-[2.3rem]"
                style={bg(
                  "/guanwang_second/front/images/products/gaosi/img-4-7f4d9b79fe.webp",
                )}
              />
            </div>
          </ProductReveal>
        </div>
        {/* sec3 */}
        <div>
          <ProductReveal className="">
            <ProductReveal className="mb-[0.45rem] text-[0.6rem] font-bold leading-[0.9rem] text-center text-white relative">
              {t("sec3.title")}
            </ProductReveal>
            <ProductReveal className="mt-[0.3rem] text-[0.3rem] font-medium leading-[0.48rem] text-center text-white">
              {t("sec3.desc")}
            </ProductReveal>
          </ProductReveal>
          <div
            className="bg-center mx-auto mt-[0.59rem] mb-[0.3rem] bg-no-repeat bg-cover w-[7.46rem] h-[8.55rem]"
            style={bg(
              "/guanwang_second/front/images/products/gaosi/img-1-6ba1ff6c0c.webp",
            )}
          />
        </div>
        {/* sec4 s__bg lazy */}
        <div
          className="bg-center mx-auto bg-no-repeat bg-cover w-[14.64rem] h-[14.64rem]"
          style={bg(
            "/guanwang_second/front/images/products/gaosi/img-3-6d4bf3eb93.webp",
          )}
        >
          <ProductReveal className="">
            <ProductReveal className="pt-[1.16rem] text-[0.6rem] font-bold leading-[0.9rem] text-center text-white relative">
              {t("sec4.title")}
            </ProductReveal>
            <ProductReveal className="mt-[0.28rem] mb-[8.4rem] text-[0.3rem] font-medium leading-[0.48rem] text-center text-white">
              {t("sec4.desc")}
            </ProductReveal>
            <ProductReveal className="text-[0.6rem] font-bold leading-[0.9rem] text-center text-white relative">
              {t("sec4.title2")}
            </ProductReveal>
          </ProductReveal>
        </div>
        {/* sec5 */}
        <div className="mx-auto my-[0.38rem] w-[13.78rem]">
          <ProductReveal
            className="bg-center mb-[0.4rem] bg-no-repeat bg-cover w-full h-[7.6rem]"
            style={bg(
              "/guanwang_second/front/images/products/gaosi/img-de45a5bf76.webp",
            )}
          />
          <ProductReveal
            className="bg-center bg-no-repeat bg-cover w-full h-[3.81rem]"
            style={bg(
              "/guanwang_second/front/images/products/gaosi/img-11-fa2c1c00b9.webp",
            )}
          />
        </div>
        {/* sec6 */}
        <div className="mt-[1.9rem]">
          <ProductReveal className="text-[0.6rem] font-bold leading-[0.9rem] text-center text-white relative">
            {t("sec6.title")}
            <span className="relative top-[0.1rem] ml-[0.04rem] mr-[0.14rem] align-top text-[0.24rem] leading-[0.28rem] text-white bg-[image:linear-gradient(-62deg,rgb(255,255,255)_0px,rgb(238,238,238)_51.5137%,rgb(255,255,255)_100%)] opacity-[0.8] bg-clip-text [-webkit-text-fill-color:transparent]">
              {"[1]"}
            </span>
            {t("sec6.title2")}
          </ProductReveal>
          <ProductReveal className="text-[0.6rem] font-bold leading-[0.9rem] text-center text-white relative">
            {t("sec6.title3")}
            <span className="relative top-[0.1rem] ml-[0.04rem] mr-[0.14rem] align-top text-[0.24rem] leading-[0.28rem] text-white bg-[image:linear-gradient(-62deg,rgb(255,255,255)_0px,rgb(238,238,238)_51.5137%,rgb(255,255,255)_100%)] opacity-[0.8] bg-clip-text [-webkit-text-fill-color:transparent]">
              {"[4]"}
            </span>
            <br />
            {t("sec6.title4")}
          </ProductReveal>
          <ProductReveal className="mt-[0.8rem] mb-[0.66rem] flex items-center justify-center">
            <ProductReveal
              className="bg-center bg-no-repeat bg-cover w-[9.4rem] h-[6.8rem]"
              style={bg(
                "/guanwang_second/front/images/products/gaosi/img-34-e0557ad89f.webp",
              )}
            />
            <div className="pl-[0.8rem] text-[0.24rem] text-white leading-[0.3rem] w-[5.23rem]">
              <p>{t("sec6.item_content")}</p>
              <p className="mt-[0.18rem] font-bold text-[0.3rem] text-white leading-[0.48rem]">
                {t("sec6.item_content2")}
              </p>
            </div>
          </ProductReveal>
          <div className="mb-[0.66rem] flex items-center justify-center">
            <div className="pl-[1.3rem] text-[0.24rem] text-white leading-[0.3rem] w-[5.73rem]">
              <p>{t("sec6.item_content3")}</p>
              <p className="mt-[0.18rem] font-bold text-[0.3rem] text-white leading-[0.48rem]">
                {t("sec6.item_content4")}
              </p>
            </div>
            <ProductReveal
              className="bg-center bg-no-repeat bg-cover w-[9.4rem] h-[6.8rem]"
              style={bg(
                "/guanwang_second/front/images/products/gaosi/img-33-d3e348d5b7.webp",
              )}
            />
          </div>
        </div>
        {/* sec7 */}
        <div className="mt-[2rem] relative">
          <ProductReveal className="text-[0.6rem] font-bold leading-[0.9rem] text-center text-white relative">
            {t("sec7.title")}
            <br />
            {t("sec7.title2")}
            <span className="text-white text-[0.24rem] leading-[0.28rem] bg-[image:linear-gradient(-62deg,rgb(255,255,255)_0px,rgb(238,238,238)_51.5137%,rgb(255,255,255)_100%)] opacity-[0.8] bg-clip-text [-webkit-text-fill-color:transparent] absolute top-[1rem]">
              {"[5]"}
            </span>
          </ProductReveal>
          <div
            className="bg-center bg-no-repeat bg-cover absolute right-0 top-[3.8rem] w-[16.71rem] h-[9.91rem]"
            style={bg(
              "/guanwang_second/front/images/products/gaosi/img-1-67648d7b24.webp",
            )}
          />
          <ProductReveal
            className="bg-center mx-auto mt-[8.86rem] bg-no-repeat bg-cover w-[9.95rem] h-[6rem]"
            style={bg(
              "/guanwang_second/front/images/products/gaosi/img-14-70bc7edf3f.webp",
            )}
          />
        </div>
        {/* sec8 */}
        <div className="mt-[2.4rem] relative">
          <ProductReveal className="text-[0.6rem] font-bold leading-[0.9rem] text-center text-white relative">
            {t("sec8.title")}
          </ProductReveal>
          <div
            className="bg-center bg-no-repeat bg-cover absolute left-[2.18rem] top-[4.3rem] w-[15.37rem] h-[10.59rem]"
            style={bg(
              "/guanwang_second/front/images/products/gaosi/img-16-894fc359e8.webp",
            )}
          />
          <ProductReveal
            className="bg-center mx-auto mt-[12.1rem] mb-[0.32rem] bg-no-repeat bg-cover w-[11.42rem] h-[6.36rem]"
            style={bg(
              "/guanwang_second/front/images/products/gaosi/img-40-cbbb074791.webp",
            )}
          />
          <ProductReveal
            className="bg-center mx-auto mb-[0.32rem] bg-no-repeat bg-cover w-[11.42rem] h-[6.36rem]"
            style={bg(
              "/guanwang_second/front/images/products/gaosi/img-21-843a59381c.webp",
            )}
          />
        </div>
        {/* sec9 */}
        <div className="mt-[2.3rem]">
          <ProductReveal className="mb-[0.54rem] text-[0.6rem] font-bold leading-[0.9rem] text-center text-white relative">
            {t("sec9.title")}
            <span className="text-white text-[0.24rem] leading-[0.28rem] bg-[image:linear-gradient(-62deg,rgb(255,255,255)_0px,rgb(238,238,238)_51.5137%,rgb(255,255,255)_100%)] opacity-[0.8] bg-clip-text [-webkit-text-fill-color:transparent] absolute top-[0.1rem]">
              {"[6]"}
            </span>
            <br />
            {t("sec9.title2")}
          </ProductReveal>
          <ProductReveal className="mt-[0.3rem] mb-[0.86rem] text-[0.3rem] font-medium leading-[0.48rem] text-center text-white">
            {t("sec9.desc")}
          </ProductReveal>
          <div className="flex items-center justify-center">
            <ProductReveal
              className="bg-center mr-[0.2rem] mb-[0.2rem] bg-no-repeat bg-cover w-[3.8rem] h-[5.06rem]"
              style={bg(
                "/guanwang_second/front/images/products/gaosi/1-e8d63d0642.webp",
              )}
            />
            <ProductReveal
              className="bg-center mr-[0.2rem] mb-[0.2rem] [transition-delay:0.1s] bg-no-repeat bg-cover w-[3.8rem] h-[5.06rem]"
              style={bg(
                "/guanwang_second/front/images/products/gaosi/2-96b2506e53.webp",
              )}
            />
            <ProductReveal
              className="bg-center mb-[0.2rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[3.8rem] h-[5.06rem]"
              style={bg(
                "/guanwang_second/front/images/products/gaosi/3-0dfde586db.webp",
              )}
            />
          </div>
          <div className="flex items-center justify-center">
            <ProductReveal
              className="bg-center mr-[0.2rem] mb-[0.2rem] [transition-delay:0.1s] bg-no-repeat bg-cover w-[6.9rem] h-[3.16rem]"
              style={bg(
                "/guanwang_second/front/images/products/gaosi/4-48e1f95476.webp",
              )}
            />
            <ProductReveal
              className="bg-center mb-[0.2rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[4.7rem] h-[3.16rem]"
              style={bg(
                "/guanwang_second/front/images/products/gaosi/5-82629674f0.webp",
              )}
            />
          </div>
        </div>
        {/* sec10 */}
        <div className="mt-[2.2rem]">
          <ProductReveal className="text-[0.6rem] font-bold leading-[0.9rem] text-center text-white relative">
            {t("sec10.title")}
          </ProductReveal>
          <ProductReveal
            className="bg-center mx-auto mt-[1.05rem] bg-no-repeat bg-cover w-[13.82rem] h-[6.82rem]"
            style={bg(
              "/guanwang_second/front/images/products/gaosi/01-c435a121f7.webp",
            )}
          />
          <div className="flex items-center justify-center">
            <ProductReveal
              className="bg-center mt-[0.25rem] mr-[0.25rem] mb-[2.4rem] bg-no-repeat bg-cover w-[6.78rem] h-[4.42rem]"
              style={bg(
                "/guanwang_second/front/images/products/gaosi/02-664cd316e5.webp",
              )}
            />
            <ProductReveal
              className="bg-center mt-[0.25rem] mb-[2.4rem] bg-no-repeat bg-cover w-[6.78rem] h-[4.42rem]"
              style={bg(
                "/guanwang_second/front/images/products/gaosi/03-91c4672c6a.webp",
              )}
            />
          </div>
          <ProductReveal className="">
            <div className="text-[0.6rem] font-bold leading-[0.9rem] text-center text-white relative">
              {t("sec10.title2")}
            </div>
            <div className="mt-[0.32rem] text-[0.3rem] font-medium leading-[0.48rem] text-center text-white">
              {t("sec10.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec11 lazy s__bg */}
        <div
          className="bg-center mt-[0.92rem] bg-no-repeat bg-cover w-full h-[10.8rem]"
          style={bg(
            "/guanwang_second/front/images/products/gaosi/img-b05afde678.webp",
          )}
        />
        {/* sec12 */}
        <div className="mt-[2.34rem] pb-[2.2rem]">
          <ProductReveal className="mb-[0.92rem] text-[0.6rem] font-bold leading-[0.9rem] text-center text-white relative">
            {t("sec12.title")}
          </ProductReveal>
          <ProductReveal
            className="bg-center mx-auto bg-no-repeat bg-cover w-[13.8rem] h-[3.9rem]"
            style={bg(
              "/guanwang_second/front/images/products/gaosi/10-655642537e.webp",
            )}
          />
          <div className="mx-auto mt-[0.2rem] pl-[0.1rem] w-[13.8rem] text-[0.14rem] text-white leading-[0.36rem]">
            {t("sec12.sec12_text")}
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
