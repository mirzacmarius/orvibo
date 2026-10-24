import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { ProductSlideshow } from "@/components/orvibo/product/ProductSlideshow";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** sec6: one photo per finish; each photo carries the finish's name. */
const FINISH_PHOTOS = [
  "/guanwang_second/front/images/products/bach/sec6_1-7fbe28547d.webp",
  "/guanwang_second/front/images/products/bach/sec6_2-c187432e3e.webp",
  "/guanwang_second/front/images/products/bach/sec6_3-9210ceb17c.webp",
  "/guanwang_second/front/images/products/bach/sec6_4-531cf576be.webp",
];

/**
 * sec9: the 14 colours under the panels, as text key and x of the line that
 * points at the panel (rem); then the three processes, as the span of the
 * line that groups their colours (rem, a dot at each end) and its text key.
 */
const COLORS: [string, number][] = [
  ["snow_silver", 0.18],
  ["luxembourg_gold", 1.175],
  ["champagne_gold", 2.17],
  ["rose_gold", 3.17],
  ["hawaii_blue", 4.165],
  ["sumatra_gray", 5.16],
  ["mica_black", 6.2],
  ["midnight_purple", 7.18],
  ["ferrari_red", 8.175],
  ["amsterdam_orange", 9.17],
  ["emerald_green", 10.17],
  ["jade_black", 11.165],
  ["ivory_white", 12.16],
  ["gold_24k", 13.2],
];
const PROCESSES: [string, number, number][] = [
  ["anodized", 0.17, 10.16],
  ["electrophoretic", 11.2, 12.16],
  ["electroplated", 13.19, 13.19],
];

export function BachOverview({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* bach__container */}
      <div id="overview" className="bg-black">
        {/* bach__banner s__bg */}
        <div
          className="bg-no-repeat bg-cover relative h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/bach/banner-3aad97121c.webp",
          )}
        >
          <div className="absolute left-[2.74rem] top-[2.65rem] font-light">
            <div
              role="img"
              aria-label="MixSwitch Bach"
              className="h-[0.81rem] w-[5.82rem] bg-cover bg-no-repeat"
              style={bg("/orvibo/products/bach/banner-wordmark.webp")}
            />
            <div className="mt-[0.25rem] text-[0.52rem] leading-[0.6rem] text-[#e7c69d]">
              {t("banner.name")}
            </div>
            <div className="mt-[0.51rem] max-w-[7.1rem] text-[0.28rem] leading-[0.32rem] text-[#f3d2ab]">
              {t("banner.slogan")}
            </div>
          </div>
        </div>
        {/* sec1 */}
        <div className="pt-[1.97rem] pb-[2.12rem]">
          <div className="mx-auto w-[14rem]">
            <div className="flex">
              <ProductReveal
                className="bg-no-repeat bg-cover w-[5.91rem] h-[5.51rem]"
                style={bg(
                  "/guanwang_second/front/images/products/bach/sec1_1-e6fb8eed7d.webp",
                )}
              />
              <div className="ml-[0.13rem]">
                <div className="flex">
                  <ProductReveal
                    className="mr-[0.14rem] [transition-delay:0.15s] bg-no-repeat bg-cover w-[3.33rem] h-[1.94rem]"
                    style={bg(
                      "/guanwang_second/front/images/products/bach/sec1_2-ef0db8e60c.webp",
                    )}
                  />
                  <ProductReveal
                    className="[transition-delay:0.25s] bg-no-repeat bg-cover w-[3.49rem] h-[1.94rem]"
                    style={bg(
                      "/guanwang_second/front/images/products/bach/sec1_3-866d0d2499.webp",
                    )}
                  />
                </div>
                <div className="mt-[0.15rem] flex">
                  <ProductReveal
                    className="bg-no-repeat bg-cover w-[3.88rem] h-[3.42rem]"
                    style={bg(
                      "/guanwang_second/front/images/products/bach/sec1_4-e72307b8ec.webp",
                    )}
                  />
                  <div className="ml-[0.14rem]">
                    <ProductReveal
                      className="[transition-delay:0.15s] bg-no-repeat bg-cover w-[2.94rem] h-[1.65rem]"
                      style={bg(
                        "/guanwang_second/front/images/products/bach/sec1_5-c2f1309f13.webp",
                      )}
                    />
                    <ProductReveal
                      className="mt-[0.12rem] [transition-delay:0.25s] bg-no-repeat bg-cover w-[2.94rem] h-[1.65rem]"
                      style={bg(
                        "/guanwang_second/front/images/products/bach/sec1_6-a705562882.webp",
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sec2 lazy s__bg */}
        <div
          className="bg-no-repeat bg-cover relative h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/bach/sec2-936d920666.webp",
          )}
        >
          <ProductReveal className="absolute top-[3.81rem] left-[9.03rem]">
            <div className="bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(rgb(243,210,171)_0px,rgb(155,116,68)_100%)] leading-[0.64rem] text-[0.55rem] font-semibold">
              {t("sec2.bach_title")}
            </div>
            <div className="mt-[0.19rem] max-w-[8.6rem] text-[0.24rem] font-light text-[#f3d2ab]">
              {t("sec2.bach_desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec3 */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/orvibo_bach_pc_3.mp4"
            className="w-full aspect-[2160/1080]"
          />
          <ProductReveal className="absolute left-[3.1rem] top-[1.65rem]">
            <div className="bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(rgb(243,210,171)_0px,rgb(155,116,68)_100%)] leading-[0.64rem] text-[0.55rem] font-semibold">
              {t("sec3.bach_title")}
            </div>
            <div className="mt-[0.19rem] text-[0.24rem] font-light text-[#f3d2ab]">
              {t("sec3.bach_desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec4 */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/orvibo_bach_pc_4.mp4"
            className="w-full aspect-[1920/1262]"
          />
          <ProductReveal className="absolute left-[3.1rem] top-[1.65rem]">
            <div className="bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(rgb(243,210,171)_0px,rgb(155,116,68)_100%)] leading-[0.64rem] text-[0.55rem] font-semibold">
              {t("sec4.bach_title")}
            </div>
            <div className="mt-[0.19rem] text-[0.24rem] font-light text-[#f3d2ab]">
              {t("sec4.bach_desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec5 */}
        <div className="pt-[1.08rem] pb-[1.23rem] relative">
          <ProductReveal className="bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(rgb(243,210,171)_0px,rgb(155,116,68)_100%)] leading-[0.64rem] text-[0.55rem] font-semibold text-center">
            {t("sec5.bach_title")}
          </ProductReveal>
          <div className="mx-auto mt-[0.73rem] mb-[0.54rem] w-[13rem] flex">
            <ProductReveal
              className="mr-[0.17rem] bg-no-repeat bg-cover w-[3.12rem] h-[4.08rem]"
              style={bg(
                "/guanwang_second/front/images/products/bach/sec5_1-5cc2a72f45.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.17rem] [transition-delay:0.15s] bg-no-repeat bg-cover w-[3.12rem] h-[4.08rem]"
              style={bg(
                "/guanwang_second/front/images/products/bach/sec5_2-28eeec35b1.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.17rem] [transition-delay:0.25s] bg-no-repeat bg-cover w-[3.12rem] h-[4.08rem]"
              style={bg(
                "/guanwang_second/front/images/products/bach/sec5_3-a6a2fe1ed0.webp",
              )}
            />
            <ProductReveal
              className="[transition-delay:0.35s] bg-no-repeat bg-cover w-[3.12rem] h-[4.08rem]"
              style={bg(
                "/guanwang_second/front/images/products/bach/sec5_4-46d6d95ce1.webp",
              )}
            />
          </div>
          <div className="mx-auto w-[13rem] text-[0.16rem] font-medium text-[#616161] leading-[0.3rem]">
            {t("sec5.desc")}
          </div>
        </div>
        {/* sec6 */}
        <div className="pt-[1.82rem] pb-[0.74rem] flex flex-col items-center">
          <ProductReveal className="flex flex-col items-center">
            <div className="bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(rgb(243,210,171)_0px,rgb(155,116,68)_100%)] leading-[0.64rem] text-[0.55rem] font-semibold">
              {t("sec6.bach_title")}
            </div>
            <div className="mt-[0.19rem] text-[0.24rem] font-light text-[#f3d2ab]">
              {t("sec6.bach_desc")}
            </div>
          </ProductReveal>
          <ProductSlideshow
            className="mx-auto mt-[0.99rem] h-[8.41rem] w-[16rem]"
            slides={FINISH_PHOTOS.map((path) => ({
              key: path,
              content: (
                <div
                  className="h-[7.99rem] w-full bg-cover bg-no-repeat"
                  style={bg(path)}
                />
              ),
            }))}
          />
        </div>
        {/* sec7 */}
        <div className="pt-[0.69rem] pb-[2.03rem] flex justify-center">
          <div className="flex">
            <ProductReveal
              className="mr-[0.51rem] bg-no-repeat bg-cover w-[5rem] h-[6.67rem]"
              style={bg(
                "/guanwang_second/front/images/products/bach/sec7_1-fe69a3f187.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.51rem] [transition-delay:0.15s] bg-no-repeat bg-cover w-[5rem] h-[6.67rem]"
              style={bg(
                "/guanwang_second/front/images/products/bach/sec7_2-bef167dea9.webp",
              )}
            />
            <ProductReveal
              className="[transition-delay:0.25s] bg-no-repeat bg-cover w-[5rem] h-[6.67rem]"
              style={bg(
                "/guanwang_second/front/images/products/bach/sec7_3-27de13483b.webp",
              )}
            />
          </div>
        </div>
        {/* sec8 */}
        <div className="py-[1.8rem] flex flex-col items-center">
          <ProductReveal className="w-[13.85rem]">
            <div className="bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(rgb(243,210,171)_0px,rgb(155,116,68)_100%)] leading-[0.64rem] text-[0.55rem] font-semibold">
              {t("sec8.bach_title")}
            </div>
          </ProductReveal>
          <ProductReveal
            className="mt-[0.88rem] bg-no-repeat bg-cover w-[13.85rem] h-[4.57rem]"
            style={bg(
              "/guanwang_second/front/images/products/bach/sec8-aaf05c02ef.webp",
            )}
          />
        </div>
        {/* sec9 */}
        <div className="pt-[1.3rem] pb-[1.82rem] flex flex-col items-center">
          <ProductReveal className="">
            <div className="bg-clip-text [-webkit-text-fill-color:transparent] bg-[image:linear-gradient(rgb(243,210,171)_0px,rgb(155,116,68)_100%)] leading-[0.64rem] text-[0.55rem] font-semibold">
              {t("sec9.bach_title")}
            </div>
          </ProductReveal>
          <ProductReveal
            className="mt-[0.9rem] bg-no-repeat bg-cover w-[15.57rem] h-[3.04rem]"
            style={bg(
              "/guanwang_second/front/images/products/bach/sec9_bg-8c1a3ad0a8.webp",
            )}
          />
          <ProductReveal className="relative mt-[0.34rem] h-[1.67rem] w-[13.66rem] text-white">
            {COLORS.map(([key, x]) => (
              <span
                key={`line-${key}`}
                className="absolute top-0 h-[0.78rem] w-px bg-white/50"
                style={{ left: `${x}rem` }}
              />
            ))}
            {COLORS.map(([key, x]) => (
              <span
                key={key}
                className="absolute top-[0.83rem] w-[0.96rem] -translate-x-1/2 text-center text-[0.13rem] leading-[0.17rem]"
                style={{ left: `${x}rem` }}
              >
                {t(`sec9.${key}`)}
              </span>
            ))}
            {PROCESSES.map(([key, from, to]) => (
              <span
                key={key}
                className="absolute top-[1.21rem] h-[0.05rem]"
                style={{
                  left: `${from - 0.025}rem`,
                  width: `${to - from + 0.05}rem`,
                }}
              >
                <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white" />
                <span className="absolute left-0 top-0 size-[0.05rem] rounded-full bg-white" />
                <span className="absolute right-0 top-0 size-[0.05rem] rounded-full bg-white" />
                <span className="absolute left-1/2 top-[0.16rem] -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-white px-[0.13rem] text-[0.16rem] leading-[0.26rem]">
                  {t(`sec9.${key}`)}
                </span>
              </span>
            ))}
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
