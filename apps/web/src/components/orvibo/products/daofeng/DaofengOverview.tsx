import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductFocusCarousel } from "@/components/orvibo/product/ProductFocusCarousel";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import { localizedAssetPath } from "@/lib/orvibo/localizedAsset";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { DaofengGroupControl } from "./DaofengGroupControl";

/** The sec12 product strips, cropped to their photos. */
const STRIPS = {
  1: "/guanwang_second/front/images/new/products/daofeng/sec12_1-c9890e6150.webp",
  2: "/guanwang_second/front/images/new/products/daofeng/sec12_2-e066652791.webp",
};

export function DaofengOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);
  /** One copy of a sec12 strip; each row shows it twice for a seamless loop. */
  const strip = (row: 1 | 2, hidden = false) => (
    <div className="shrink-0 w-[21.91rem]" aria-hidden={hidden || undefined}>
      <div
        className="bg-no-repeat bg-cover h-[2.39rem]"
        style={bg(STRIPS[row])}
      />
      <ul className="mt-[0.15rem] grid grid-cols-5 text-center text-[0.16rem] leading-[0.24rem] font-normal text-white/60">
        {[1, 2, 3, 4, 5].map((n) => (
          <li key={n} className="px-[0.1rem]">
            {t(`sec12.row${row}.item${n}`)}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* daofeng */}
      <div id="overview" className="w-full bg-black overflow-clip">
        {/* daofeng__banner s__bg */}
        <div
          className="bg-no-repeat bg-cover relative h-[10rem]"
          style={bg(
            "/guanwang_second/front/images/new/products/daofeng/banner-d5b4a343ec.webp",
          )}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            <div className="bg-clip-text [-webkit-text-fill-color:transparent] text-center font-semibold bg-[image:linear-gradient(299deg,rgb(255,255,255)_0px,rgb(255,255,255)_7%,rgb(255,242,220)_15%,rgb(252,233,199)_43%,rgb(255,200,158)_71%,rgb(250,246,235)_100%)] text-[0.72rem] leading-[0.96rem]">
              {t("daofeng_banner.banner_title")}
            </div>
            <div className="mt-[0.2rem] bg-clip-text [-webkit-text-fill-color:transparent] text-center font-medium bg-[image:linear-gradient(306deg,rgb(255,255,255)_0px,rgb(255,255,255)_7%,rgb(245,250,252)_15%,rgb(252,249,199)_43%,rgb(255,218,191)_71%,rgb(235,250,242)_100%)] text-[0.28rem]">
              {t("daofeng_banner.banner_desc")}
            </div>
          </div>
        </div>
        {/* sec1 */}
        <div className="pt-[1.6rem] pb-[1.2rem] flex justify-center">
          <div className="flex">
            <ProductReveal
              className="mr-[0.28rem] rounded-[0.2rem] bg-no-repeat bg-cover w-[6.84rem] h-[7.64rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec1_1-a565bea6fc.webp",
              )}
            />
            <div className="w-[6.84rem] flex flex-wrap">
              <ProductReveal
                className="mr-[0.26rem] mb-[0.3rem] rounded-[0.2rem] bg-no-repeat bg-cover w-full h-[2.97rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/daofeng/sec1_2-b8dfd9ffe7.webp",
                )}
              />
              <ProductReveal
                className="mr-[0.26rem] mb-[0.3rem] rounded-[0.2rem] bg-no-repeat bg-cover w-[3.28rem] h-[4.37rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/daofeng/sec1_3-2f29ced209.webp",
                )}
              />
              <ProductReveal
                className="mb-[0.3rem] rounded-[0.2rem] [transition-delay:0.15s] bg-no-repeat bg-cover w-[3.3rem] h-[4.37rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/daofeng/sec1_4-762acd7999.webp",
                )}
              />
            </div>
          </div>
        </div>
        {/* sec2 */}
        <div className="relative">
          <ProductReveal
            className="bg-no-repeat bg-cover w-full h-[9.6rem]"
            style={bg(
              "/guanwang_second/front/images/new/products/daofeng/sec2-38b4d73dc5.webp",
            )}
          />
          <ProductReveal className="bg-clip-text [-webkit-text-fill-color:transparent] absolute left-[1.92rem] bottom-[2.75rem] bg-[image:linear-gradient(305deg,rgb(255,255,255)_0px,rgb(255,255,255)_7%,rgb(245,250,252)_15%,rgb(252,249,199)_43%,rgb(255,218,191)_71%,rgb(235,250,242)_100%)] text-[0.72rem] font-semibold">
            {t("sec2.info")}
          </ProductReveal>
        </div>
        {/* sec3 */}
        <div className="relative">
          <ProductReveal
            className="bg-no-repeat bg-cover w-full h-[10rem]"
            style={bg(
              "/guanwang_second/front/images/new/products/daofeng/daofeng_bao-13e5035a0f.webp",
            )}
          />
          <ProductReveal className="absolute top-[1.2rem] left-0 w-full">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold tracking-[0.01rem]">
              {t("sec3.title")}
            </div>
            <div className="mt-[0.3rem] text-center text-white text-[0.22rem] leading-[0.36rem] font-normal max-w-[13.3rem] mx-auto">
              {t("sec3.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec3 */}
        <div className="relative">
          <div>
            <MarketingVideo
              bare
              src="/orvibo/videos/daofeng_spwm.mp4"
              poster={localizedAssetPath(
                "/guanwang_second/front/images/new/products/daofeng/daofeng_spwm-6a973273ec.webp",
                locale,
              )}
              className="w-full h-full aspect-[1920/1000]"
            />
          </div>
          <ProductReveal className="absolute top-[1.2rem] left-0 w-full">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold tracking-[0.01rem]">
              {t("sec3.title2")}
            </div>
            <div className="mt-[0.3rem] text-center text-white text-[0.22rem] leading-[0.36rem] font-normal max-w-[13.3rem] mx-auto">
              {t("sec3.desc2")}
            </div>
          </ProductReveal>
        </div>
        {/* sec5 */}
        <div className="pt-[1.92rem] pb-[1.96rem]">
          <ProductReveal className="bg-clip-text [-webkit-text-fill-color:transparent] w-full text-center font-semibold text-[0.54rem] bg-[image:linear-gradient(305deg,rgb(255,255,255)_0px,rgb(255,255,255)_7%,rgb(245,250,252)_15%,rgb(252,249,199)_43%,rgb(255,218,191)_71%,rgb(235,250,242)_100%)]">
            {t("sec5.title")}
          </ProductReveal>
          <div className="mx-auto mt-[0.92rem] flex justify-center">
            <div className="mr-[0.3rem]">
              <ProductReveal
                className="mb-[0.28rem] rounded-[0.2rem] bg-no-repeat bg-cover overflow-hidden w-[5.89rem] h-[6.15rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/daofeng/sec5_1-621edd204f.webp",
                )}
              />
              <ProductReveal
                className="rounded-[0.2rem] bg-no-repeat bg-cover overflow-hidden w-[5.89rem] h-[7.75rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/daofeng/sec5_2-d46a1b1014.webp",
                )}
              />
            </div>
            <div>
              <ProductReveal
                className="mb-[0.29rem] rounded-[0.2rem] [transition-delay:0.15s] bg-no-repeat bg-cover overflow-hidden w-[5.77rem] h-[7.69rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/daofeng/sec5_3-ed8fdfb4f0.webp",
                )}
              />
              <ProductReveal
                className="rounded-[0.2rem] bg-no-repeat bg-cover overflow-hidden w-[5.77rem] h-[6.2rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/daofeng/sec5_4-720e62c30b.webp",
                )}
              />
            </div>
          </div>
        </div>
        {/* sec6 */}
        <div className="relative">
          <div className="mx-auto w-[18rem]">
            <ProductReveal
              className="bg-no-repeat bg-cover w-full h-[8.84rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec6-7dcd14a768.webp",
              )}
            />
            <div className="absolute left-[2.67rem] top-[1.72rem]">
              <ProductReveal className="[transition-delay:0.15s]">
                <div className="text-left text-white text-[0.54rem] leading-[0.76rem] font-extrabold tracking-[0.01rem]">
                  {t("sec6.title")}
                </div>
                <div className="mt-[0.3rem] text-left text-white text-[0.22rem] leading-[0.36rem] font-normal max-w-[6rem]">
                  {t("sec6.desc")}
                </div>
              </ProductReveal>
              <ProductReveal className="mt-[1rem] [transition-delay:0.15s] text-[0.18rem] leading-[0.36rem] font-normal text-white max-w-[8.4rem]">
                {t("sec6.desc2")}
              </ProductReveal>
            </div>
          </div>
        </div>
        {/* sec7 */}
        <div className="pt-[1.61rem] pb-[1.4rem]">
          <ProductReveal className="[transition-delay:0.15s]">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold tracking-[0.01rem]">
              {t("sec7.title")}
            </div>
            <div className="mt-[0.3rem] text-center text-white text-[0.22rem] leading-[0.36rem] font-normal max-w-[12.4rem] mx-auto">
              {t("sec7.desc")}
            </div>
          </ProductReveal>
          <div className="mx-auto mt-[0.76rem] w-[16rem] flex flex-wrap">
            <ProductReveal
              className="mr-[0.41rem] mb-[0.45rem] bg-no-repeat bg-cover w-[5.06rem] h-[6.4rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec7_1-5940e59436.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.41rem] mb-[0.45rem] [transition-delay:0.15s] bg-no-repeat bg-cover w-[5.06rem] h-[6.4rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec7_2-91bd92e276.webp",
              )}
            />
            <ProductReveal
              className="mb-[0.45rem] [transition-delay:0.25s] bg-no-repeat bg-cover w-[5.06rem] h-[6.4rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec7_3-a57b588ee0.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.41rem] bg-no-repeat bg-cover w-[5.06rem] h-[6.4rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec7_4-b18b76dd39.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.41rem] bg-no-repeat bg-cover w-[5.06rem] h-[6.4rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec7_6-0705159a27.webp",
              )}
            />
          </div>
        </div>
        {/* sec8 */}
        <div className="relative">
          <ProductReveal
            className="bg-no-repeat bg-cover h-[9.6rem]"
            style={bg(
              "/guanwang_second/front/images/new/products/daofeng/sec8-543eb651e9.webp",
            )}
          />
          <ProductReveal className="[transition-delay:0.15s] absolute left-0 top-[1.01rem] w-full">
            <div className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold tracking-[0.01rem]">
              {t("sec8.title")}
            </div>
            <div className="mt-[0.3rem] text-center text-white text-[0.22rem] leading-[0.36rem] font-normal max-w-[12.2rem] mx-auto">
              {t("sec8.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec9 */}
        <DaofengGroupControl
          src="/orvibo/videos/daofeng_qiandeng.mp4"
          title={ts("sec9.title")}
        />
        {/* sec10 */}
        <div className="pt-[0.89rem] pb-[1.68rem] relative">
          <div className="mx-auto w-[15.9rem] flex flex-wrap">
            <ProductReveal
              className="mr-[0.3rem] mb-[0.3rem] rounded-[0.4rem] [transition-delay:0.65s] bg-no-repeat bg-cover w-[5.1rem] h-[3rem] overflow-hidden"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec10_1-f5c6c131a5.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.3rem] mb-[0.3rem] rounded-[0.4rem] [transition-delay:0.55s] bg-no-repeat bg-cover w-[5.1rem] h-[3rem] overflow-hidden"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec10_2-68c9427843.webp",
              )}
            />
            <ProductReveal
              className="mb-[0.3rem] rounded-[0.4rem] [transition-delay:0.45s] bg-no-repeat bg-cover w-[5.1rem] h-[3rem] overflow-hidden"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec10_3-db79f357e2.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.3rem] rounded-[0.4rem] [transition-delay:0.45s] bg-no-repeat bg-cover w-[5.1rem] h-[3rem] overflow-hidden"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec10_4-d07a3d1f52.webp",
              )}
            />
            <ProductReveal
              className="mr-[0.3rem] rounded-[0.4rem] [transition-delay:0.55s] bg-no-repeat bg-cover w-[5.1rem] h-[3rem] overflow-hidden"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec10_5-03d53943db.webp",
              )}
            />
            <ProductReveal
              className="rounded-[0.4rem] [transition-delay:0.65s] bg-no-repeat bg-cover w-[5.1rem] h-[3rem] overflow-hidden"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec10_6-56e82e0c95.webp",
              )}
            />
          </div>
        </div>
        {/* sec11 */}
        <ProductFocusCarousel
          look="products"
          labels={{ prev: common.previous, next: common.next }}
          slides={[
            {
              key: "sec11_1",
              image: img(
                "/guanwang_second/front/images/new/products/daofeng/sec11_1-613e581b29.webp",
              ),
            },
            {
              key: "sec11_2",
              image: img(
                "/guanwang_second/front/images/new/products/daofeng/sec11_2-7fbed8fce8.webp",
              ),
            },
            {
              key: "sec11_3",
              image: img(
                "/guanwang_second/front/images/new/products/daofeng/sec11_3-4efbd5f49d.webp",
              ),
            },
            {
              key: "sec11_4",
              image: img(
                "/guanwang_second/front/images/new/products/daofeng/sec11_4-f60916d7ef.webp",
              ),
            },
          ]}
        />
        {/* sec12 */}
        <div className="mt-[0.46rem]">
          <div className="overflow-hidden">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:86s] motion-reduce:animate-none">
              {strip(1)}
              {strip(1, true)}
            </div>
          </div>
          <div className="mt-[0.31rem] overflow-hidden">
            <div className="flex w-max animate-mixpad-marquee [animation-duration:86s] [animation-direction:reverse] motion-reduce:animate-none">
              {strip(2)}
              {strip(2, true)}
            </div>
          </div>
          <div className="mt-[0.84rem] text-[0.16rem] leading-[0.38rem] text-center font-medium text-white opacity-[0.6]">
            {t("sec12.desc")}
          </div>
        </div>
        {/* sec13 */}
        <div className="pt-[1.65rem] pb-[1.33rem] relative">
          <ProductReveal className="text-center text-white text-[0.54rem] leading-[0.76rem] font-extrabold tracking-[0.01rem]">
            {t("sec13.title")}
          </ProductReveal>
          <div className="mx-auto mt-[0.6rem] flex w-[15rem]">
            <ProductReveal
              className="mr-[0.2rem] rounded-[0.2rem] bg-no-repeat bg-cover w-[8.91rem] h-[5.89rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec13_1-5d1f6b0fad.webp",
              )}
            />
            <div>
              <ProductReveal
                className="mb-[0.15rem] rounded-[0.2rem] bg-no-repeat bg-cover w-[5.89rem] h-[2.87rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/daofeng/sec13_2-92fb3dd621.webp",
                )}
              />
              <ProductReveal
                className="rounded-[0.2rem] [transition-delay:0.15s] bg-no-repeat bg-cover w-[5.89rem] h-[2.87rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/daofeng/sec13_3-c61549a916.webp",
                )}
              />
            </div>
          </div>
          <div className="mx-auto mt-[0.21rem] w-[15rem] h-[2.39rem] flex justify-between">
            <ProductReveal
              className="rounded-[0.2rem] bg-no-repeat bg-cover w-[3.58rem] h-full"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec13_4-54099e7969.webp",
              )}
            />
            <ProductReveal
              className="rounded-[0.2rem] [transition-delay:0.15s] bg-no-repeat bg-cover w-[3.58rem] h-full"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec13_5-4114bcdfa5.webp",
              )}
            />
            <ProductReveal
              className="rounded-[0.2rem] [transition-delay:0.25s] bg-no-repeat bg-cover w-[3.58rem] h-full"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec13_6-9bbe134d93.webp",
              )}
            />
            <ProductReveal
              className="rounded-[0.2rem] [transition-delay:0.35s] bg-no-repeat bg-cover w-[3.58rem] h-full"
              style={bg(
                "/guanwang_second/front/images/new/products/daofeng/sec13_7-b15d191bbb.webp",
              )}
            />
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
