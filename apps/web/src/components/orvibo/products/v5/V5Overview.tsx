import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductFocusCarousel } from "@/components/orvibo/product/ProductFocusCarousel";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { ProductSlideshow } from "@/components/orvibo/product/ProductSlideshow";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function V5Overview({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* v5 */}
      <div id="overview" className="bg-black">
        {/* sec1 */}
        <div>
          <Image
            src={img(
              "/guanwang_second/front/images/product/v5/sec1-250e0bb5e1.webp",
            )}
            alt=""
            width={1920}
            height={1077}
            unoptimized
            className="align-middle w-full h-[10.77rem]"
          />
        </div>
        {/* sec2 */}
        <div>
          <div className="mx-auto w-[10.25rem]">
            <div className="mb-[0.24rem] flex justify-center">
              <ProductReveal className="mt-[1.5rem] mb-[0.8rem] bg-[linear-gradient(90deg,#735b42_0%,#c5b9a3_22%,#cbc2b1_35%,#cbc2b1_62%,#b09b7b_76%,#6d5640_92%,#574634_100%)] bg-clip-text px-[0.2rem] text-center text-[0.72rem] leading-[0.99rem] font-bold text-balance [-webkit-text-fill-color:transparent]">
                {t("sec2.title")}
              </ProductReveal>
            </div>
            <div className="mb-[0.24rem] flex justify-center h-[2.78rem]">
              <ProductReveal
                className="bg-center mr-[0.21rem] bg-no-repeat bg-cover w-[4.93rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec2_2-6b1831a6a0.webp",
                )}
              />
              <ProductReveal
                className="bg-center mr-[0.21rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[2.47rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec2_3-0168a0f045.webp",
                )}
              />
              <ProductReveal
                className="bg-center [transition-delay:0.2s] bg-no-repeat bg-cover w-[2.39rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec2_4-91dd145d21.webp",
                )}
              />
            </div>
            <div className="mb-[0.24rem] flex justify-center h-[2.43rem]">
              <ProductReveal
                className="bg-center mr-[0.21rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[2.37rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec2_5-ec9a7bb669.webp",
                )}
              />
              <ProductReveal
                className="bg-center mr-[0.21rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[2.36rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec2_6-19aa8826ce.webp",
                )}
              />
              <ProductReveal
                className="bg-center mr-[0.21rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[2.46rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec2_7-5e9bb40716.webp",
                )}
              />
              <ProductReveal
                className="bg-center [transition-delay:0.2s] bg-no-repeat bg-cover w-[2.43rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec2_8-63f7e8a23f.webp",
                )}
              />
            </div>
            <div className="mb-[0.24rem] flex justify-center h-[2.1rem]">
              <ProductReveal
                className="bg-center bg-no-repeat bg-cover w-[10.25rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec2_9-6ef3a9bc7a.webp",
                )}
              />
            </div>
            <div className="mt-[0.33rem] text-[0.12rem] leading-[0.2rem] text-white/30">
              <p className="mb-[0.06rem]">{t("sec2.note")}</p>
              <p>{t("sec2.note2")}</p>
              <p>{t("sec2.note3")}</p>
              <p>{t("sec2.note4")}</p>
              <p>{t("sec2.note5")}</p>
              <p>{t("sec2.note6")}</p>
              <p>{t("sec2.note7")}</p>
            </div>
          </div>
        </div>
        {/* sec3_1 video-box */}
        <div className="mt-[0.98rem] relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/v5_4.mp4"
            className="w-full h-full aspect-[1920/1080]"
          />
          <OrviboWatchTrigger
            videoSrc="/orvibo/videos/v5_2.mp4"
            showPlayIcon={false}
            className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/20 cursor-pointer"
          >
            <span
              className="pr-[0.26rem] text-[0.24rem] leading-[0.34rem] text-white font-medium relative inline-block after:bg-center after:top-1/2 after:-translate-y-1/2 after:w-[0.24rem] after:h-[0.24rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat after:content-[''] after:absolute after:right-0"
              style={pseudoBg(
                "after",
                "/guanwang_second/front/images/house_solution/icon_video-9cdc1f24f3.webp",
              )}
            >
              {t("sec3_1.video_watch")}
            </span>
          </OrviboWatchTrigger>
        </div>
        {/* sec3 */}
        <div>
          <div className="mx-auto w-[13.6rem]">
            <ProductReveal className="mt-[1.86rem] mb-[0.93rem] text-center text-[0.6rem] font-bold text-[#fae4bf] bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] px-[0.2rem] text-balance">
              {t("sec3.sec3_title")}
            </ProductReveal>
            <div className="h-[6.53rem]">
              <div
                className="bg-center bg-no-repeat bg-cover relative w-[13.6rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec3_1-2fb014e503.webp",
                )}
              >
                <ProductReveal className="absolute inset-x-0 bottom-[0.35rem] [transition-delay:0.2s]">
                  <ul className="mx-auto grid w-[7rem] grid-cols-4 text-center">
                    <li>
                      <p className="text-[0.24rem] leading-[0.28rem] font-medium text-[#e0c8a1]">
                        {t("sec3.stat1_value")}
                      </p>
                      <p className="mt-[0.06rem] text-[0.18rem] leading-[0.22rem] text-[#a1a1a6]/50 text-balance">
                        {t("sec3.stat1")}
                      </p>
                    </li>
                    <li>
                      <p className="text-[0.24rem] leading-[0.28rem] font-medium text-[#e0c8a1]">
                        {t("sec3.stat2_value")}
                      </p>
                      <p className="mt-[0.06rem] text-[0.18rem] leading-[0.22rem] text-[#a1a1a6]/50 text-balance">
                        {t("sec3.stat2")}
                      </p>
                    </li>
                    <li>
                      <p className="text-[0.24rem] leading-[0.28rem] font-medium text-[#e0c8a1]">
                        {t("sec3.stat3_value")}
                      </p>
                      <p className="mt-[0.06rem] text-[0.18rem] leading-[0.22rem] text-[#a1a1a6]/50 text-balance">
                        {t("sec3.stat3")}
                      </p>
                    </li>
                    <li>
                      <p className="text-[0.24rem] leading-[0.28rem] font-medium text-[#e0c8a1]">
                        {t("sec3.stat4_value")}
                      </p>
                      <p className="mt-[0.06rem] text-[0.18rem] leading-[0.22rem] text-[#a1a1a6]/50 text-balance">
                        {t("sec3.stat4")}
                      </p>
                    </li>
                  </ul>
                </ProductReveal>
              </div>
            </div>
          </div>
        </div>
        {/* sec4 */}
        <div className="pt-[1.49rem]">
          <div className="mx-auto w-[12.01rem]">
            <ProductReveal className="ml-[1.88rem] text-[0.48rem] leading-[0.74rem] font-bold text-[#a1a1a6] max-w-[10rem] text-balance">
              {t("sec4.sec4_title")}
              <span className="text-white">{t("sec4.sec4_title2")}</span>
              {t("sec4.sec4_title3")}
              <br />
              {t("sec4.sec4_title4")}
            </ProductReveal>
            <ProductReveal className="mt-[0.28rem] mb-[0.75rem] ml-[1.88rem] text-[0.28rem] leading-[0.49rem] font-normal text-[#a1a1a6] max-w-[10.1rem] text-pretty">
              {t("sec4.sec4_content")}
            </ProductReveal>
            <div className="mb-[0.51rem] flex justify-center h-[4.82rem]">
              <ProductReveal
                className="bg-center mr-[0.11rem] bg-no-repeat bg-cover w-[3.93rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec4_1-7fa18c65fc.webp",
                )}
              />
              <ProductReveal
                className="bg-center mr-[0.11rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[3.93rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec4_2-729bc4a859.webp",
                )}
              />
              <ProductReveal
                className="bg-center [transition-delay:0.2s] bg-no-repeat bg-cover w-[3.93rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec4_3-899ca6be1c.webp",
                )}
              />
            </div>
            <div className="mb-[0.51rem] flex justify-center min-h-[1.4rem]">
              <div className="bg-center mr-[0.11rem] bg-no-repeat bg-cover w-[3.93rem] h-full">
                <div className="mb-[0.12rem] text-[0.24rem] font-bold text-white opacity-[0.66] pr-[0.2rem] text-balance">
                  {t("sec4.row_item_tite")}
                </div>
                <div className="text-[0.2rem] leading-[0.37rem] font-normal text-[#a1a1a6] max-w-[3.7rem] text-pretty">
                  {t("sec4.row_item_content")}
                </div>
              </div>
              <div className="bg-center mr-[0.11rem] bg-no-repeat bg-cover w-[3.93rem] h-full">
                <div className="mb-[0.12rem] text-[0.24rem] font-bold text-white opacity-[0.66] pr-[0.2rem] text-balance">
                  {t("sec4.row_item_tite2")}
                </div>
                <div className="text-[0.2rem] leading-[0.37rem] font-normal text-[#a1a1a6] max-w-[3.7rem] text-pretty">
                  {t("sec4.row_item_content2")}
                </div>
              </div>
              <div className="bg-center bg-no-repeat bg-cover w-[3.93rem] h-full">
                <div className="mb-[0.12rem] text-[0.24rem] font-bold text-white opacity-[0.66] pr-[0.2rem] text-balance">
                  {t("sec4.row_item_tite3")}
                </div>
                <div className="text-[0.2rem] leading-[0.37rem] font-normal text-[#a1a1a6] max-w-[3.7rem] text-pretty">
                  {t("sec4.row_item_content3")}
                </div>
              </div>
            </div>
            <div className="mt-[0.58rem] text-[0.12rem] font-normal text-white opacity-[0.5]">
              {t("sec4.sec4_tips")}
            </div>
          </div>
        </div>
        {/* sec5 */}
        <div>
          <div className="mx-auto w-[14.98rem]">
            <ProductReveal className="pt-[1.53rem] pb-[1.18rem] text-[0.6rem] bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text text-center font-bold text-white [-webkit-text-fill-color:transparent] px-[0.2rem] text-balance">
              {t("sec5.sec5_title")}
            </ProductReveal>
          </div>
          <ProductFocusCarousel
            look="lock"
            slides={[
              {
                key: "camera",
                image: img(
                  "/guanwang_second/front/images/product/v5/sec5_1-09cf27061e.webp",
                ),
              },
              {
                key: "cloud",
                image: img(
                  "/guanwang_second/front/images/product/v5/sec5_2-f7095527fc.webp",
                ),
              },
            ]}
          />
        </div>
        {/* sec6 */}
        <div>
          <div className="mx-auto w-[14.98rem]">
            <ProductReveal className="pt-[1.62rem] pb-[0.4rem] text-[0.6rem] bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text text-center font-bold text-white [-webkit-text-fill-color:transparent] px-[0.2rem] text-balance">
              {t("sec6.sec6_title1")}
            </ProductReveal>
            <ProductReveal className="mb-[0.66rem] bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] text-center text-[0.3rem] leading-[0.48rem] font-normal text-white mx-auto max-w-[11rem] text-balance">
              {t("sec6.sec6_title2")}
            </ProductReveal>
            <div className="flex justify-center h-[6.15rem]">
              <ProductReveal
                className="bg-center mr-[0.2rem] bg-no-repeat bg-cover w-[8.84rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec6_1-9e1856b8fb.webp",
                )}
              />
              <ProductReveal
                className="bg-center [transition-delay:0.2s] bg-no-repeat bg-cover w-[5.94rem] h-full"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec6_2-1ecf7326e8.webp",
                )}
              />
            </div>
          </div>
        </div>
        {/* sec7 s__bg lazy */}
        <div
          className="bg-center mt-[1.52rem] bg-no-repeat bg-cover w-full h-[10.8rem]"
          style={bg(
            "/guanwang_second/front/images/product/v5/sec7_1-a53185c239.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1.06rem] pb-[0.2rem] text-[0.6rem] leading-[0.76rem] font-bold text-center text-black bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] px-[0.2rem] text-balance">
              {t("sec7.title")}
            </div>
            <div className="text-[0.3rem] leading-[0.48rem] font-normal text-center text-white bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] mx-auto max-w-[10.4rem] px-[0.2rem] text-balance">
              {t("sec7.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec8 */}
        <ProductSlideshow
          className="mx-auto mt-[1.14rem] h-[8.15rem] w-[14.98rem]"
          autoplay={false}
          pagination="swatches"
          paginationClassName="bottom-[10px]"
          slides={[
            {
              key: "obsidian",
              content: (
                <div
                  className="h-[7.46rem] w-full bg-cover bg-center bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/product/v5/sec8_1-ef85b94fe0.webp",
                  )}
                />
              ),
              swatch: {
                label: t("sec8.swiper_pagination_item"),
                text: "text-[#939b9f]",
                dot: "text-[#434343]",
              },
            },
            {
              key: "calfskin",
              content: (
                <div
                  className="h-[7.46rem] w-full bg-cover bg-center bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/product/v5/sec8_2-4f3f495732.webp",
                  )}
                />
              ),
              swatch: {
                label: t("sec8.swiper_pagination_item2"),
                text: "text-[#6b5442]",
                dot: "text-[#6b5442]",
              },
            },
            {
              key: "marble",
              content: (
                <div
                  className="h-[7.46rem] w-full bg-cover bg-center bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/product/v5/sec8_4-4da6ccd56e.webp",
                  )}
                />
              ),
              swatch: {
                label: t("sec8.swiper_pagination_item3"),
                text: "text-[#3c3c3c]",
                dot: "text-[#323332]",
              },
            },
            {
              key: "walnut",
              content: (
                <div
                  className="h-[7.46rem] w-full bg-cover bg-center bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/product/v5/sec8_3-595071051a.webp",
                  )}
                />
              ),
              swatch: {
                label: t("sec8.swiper_pagination_item4"),
                text: "text-[#7c6b53]",
                dot: "text-[#7c6b53]",
              },
            },
          ]}
        />
        {/* sec9_video video-box */}
        <div className="mt-[2.05rem] relative w-full h-[10.83rem]">
          <ProductReveal className="text-[0.6rem] leading-[0.76rem] font-bold text-center text-white bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] absolute left-0 right-0 bottom-1/2 flex justify-center items-center px-[0.2rem] text-balance">
            {t("sec9_video.title")}
          </ProductReveal>
          <MarketingVideo
            bare
            src="/orvibo/videos/v5_3.mp4"
            className="w-full h-full aspect-[960/540]"
          />
        </div>
        {/* sec9 */}
        <div>
          <div className="mx-auto w-[14.38rem]">
            <ProductReveal className="pt-[1.98rem] pb-[0.2rem] bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text text-white [-webkit-text-fill-color:transparent] font-bold text-center text-[0.6rem] px-[0.2rem] text-balance">
              {t("sec9.sec9_title1")}
            </ProductReveal>
            <ProductReveal className="mb-[0.66rem] text-white [-webkit-text-fill-color:transparent] font-bold text-center text-[0.3rem] leading-[0.48rem] bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text mx-auto max-w-[11.4rem] text-balance">
              {t("sec9.sec9_title2")}
            </ProductReveal>
            <div>
              <div
                className="bg-center bg-no-repeat bg-cover w-[14.38rem] h-[4.56rem]"
                style={bg(
                  "/guanwang_second/front/images/product/v5/sec9_1-2462f2df36.webp",
                )}
              />
              <ProductReveal className="mt-[0.79rem] ml-[2.05rem] w-[10.23rem]">
                <ul className="grid w-[12.3rem] grid-cols-3">
                  <li className="pr-[0.3rem]">
                    <p className="text-[0.26rem] leading-[0.3rem] font-medium text-[#e3cca7]">
                      {t("sec9.battery1_value")}
                    </p>
                    <p className="mt-[0.1rem] text-[0.2rem] leading-[0.26rem] text-[#c9c9c9] text-pretty">
                      {t("sec9.battery1")}
                    </p>
                  </li>
                  <li className="pr-[0.3rem]">
                    <p className="text-[0.26rem] leading-[0.3rem] font-medium text-[#e3cca7]">
                      {t("sec9.battery2_value")}
                    </p>
                    <p className="mt-[0.1rem] text-[0.2rem] leading-[0.26rem] text-[#c9c9c9] text-pretty">
                      {t("sec9.battery2")}
                    </p>
                  </li>
                  <li className="pr-[0.3rem]">
                    <p className="text-[0.26rem] leading-[0.3rem] font-medium text-[#e3cca7]">
                      {t("sec9.battery3_value")}
                    </p>
                    <p className="mt-[0.1rem] text-[0.2rem] leading-[0.26rem] text-[#c9c9c9] text-pretty">
                      {t("sec9.battery3")}
                    </p>
                  </li>
                </ul>
                <p className="mt-[0.3rem] text-[0.12rem] leading-[0.25rem] text-white/20">
                  {t("sec9.battery_note")}
                </p>
                <p className="text-[0.12rem] leading-[0.25rem] text-white/20">
                  {t("sec9.battery_note2")}
                </p>
              </ProductReveal>
            </div>
          </div>
          <div>
            <div className="mx-auto w-[14.12rem]">
              <ProductReveal className="pt-[1.65rem] pb-[1rem] text-white [-webkit-text-fill-color:transparent] font-bold text-[0.6rem] bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text text-center px-[0.2rem] text-balance">
                {t("sec9.sec10_title")}
              </ProductReveal>
            </div>
            <ProductFocusCarousel
              look="lock"
              slides={[
                {
                  key: "home",
                  image: img(
                    "/guanwang_second/front/images/product/v5/sec10_1-215bad8df9.webp",
                  ),
                },
                {
                  key: "away",
                  image: img(
                    "/guanwang_second/front/images/product/v5/sec10_2-515f326c64.webp",
                  ),
                },
              ]}
            />
          </div>
          <div>
            <div className="mx-auto w-[13.99rem]">
              <ProductReveal className="mt-[1.29rem] mb-[1.01rem] text-[0.6rem] bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text text-center font-bold text-[#fae4bf] [-webkit-text-fill-color:transparent] px-[0.2rem] text-balance">
                {t("sec9.sec11_title")}
              </ProductReveal>
              <div className="h-[5.68rem]">
                <div
                  className="bg-center rounded-[0.25rem] bg-no-repeat bg-cover w-[13.99rem] h-full"
                  style={bg(
                    "/guanwang_second/front/images/product/v5/sec11_1-6a3daf5103.webp",
                  )}
                />
              </div>
            </div>
            <div className="pt-[1.81rem]">
              <div className="mx-auto w-[13.73rem]">
                <div className="flex justify-center flex-wrap">
                  <ProductReveal
                    className="bg-center mb-[1.08rem] bg-no-repeat bg-cover w-[6.86rem] h-[6.51rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/v5/sec12_1-2c5c6eace7.webp",
                    )}
                  />
                  <ProductReveal className="bg-center mb-[1.08rem] pt-[1.05rem] pl-[0.88rem] bg-no-repeat bg-cover w-[6.86rem] h-[6.51rem]">
                    <div className="bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] text-[0.34rem] font-bold text-[#d9bf93] text-balance">
                      {t("sec9.sec12_item_title")}
                    </div>
                    <div className="mt-[0.2rem] text-[0.23rem] leading-[0.38rem] font-medium text-[#c9c9c9] max-w-[5.2rem] text-pretty">
                      {t("sec9.sec12_item_content")}
                    </div>
                  </ProductReveal>
                  <ProductReveal className="bg-center mb-[1.08rem] pt-[2.35rem] pl-[2.01rem] bg-no-repeat bg-cover w-[6.86rem] h-[6.51rem]">
                    <div className="bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] text-[0.34rem] font-bold text-[#d9bf93] text-balance">
                      {t("sec9.sec12_item_title2")}
                    </div>
                    <div className="mt-[0.2rem] text-[0.23rem] leading-[0.38rem] font-medium text-[#c9c9c9] max-w-[4.6rem] text-pretty">
                      {t("sec9.sec12_item_content2")}
                    </div>
                  </ProductReveal>
                  <ProductReveal
                    className="bg-center mb-[1.08rem] bg-no-repeat bg-cover w-[6.86rem] h-[6.51rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/v5/sec12_2-62c0c3a64e.webp",
                    )}
                  />
                  <ProductReveal
                    className="bg-center mb-[1.08rem] bg-no-repeat bg-cover w-[6.86rem] h-[6.51rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/v5/sec12_3-d99bfb48e1.webp",
                    )}
                  />
                  <ProductReveal className="bg-center mb-[1.08rem] pt-[2.62rem] pl-[0.88rem] bg-no-repeat bg-cover w-[6.86rem] h-[6.51rem]">
                    <div className="bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] text-[0.34rem] font-bold text-[#d9bf93] text-balance">
                      {t("sec9.sec12_item_title3")}
                    </div>
                    <div className="mt-[0.2rem] text-[0.23rem] leading-[0.38rem] font-medium text-[#c9c9c9] max-w-[5.2rem] text-pretty">
                      {t("sec9.sec12_item_content3")}
                    </div>
                  </ProductReveal>
                </div>
              </div>
            </div>
            <div>
              <div className="mx-auto w-[14.29rem]">
                <ProductReveal className="mt-[1.57rem] mb-[1.13rem] text-center text-[0.6rem] font-bold text-[#d9bf93] px-[0.2rem] text-balance">
                  {t("sec9.sec13_title")}
                </ProductReveal>
                <div className="mb-[0.24rem] h-[4.83rem]">
                  <div
                    className="bg-center bg-no-repeat bg-cover w-[14.29rem] h-full"
                    style={bg(
                      "/guanwang_second/front/images/product/v5/sec13_1-741936b828.webp",
                    )}
                  />
                </div>
                <div className="mt-[0.29rem] text-[0.12rem] leading-[0.19rem] font-medium text-[#c9c9c9] opacity-[0.2] max-w-[12.6rem] text-pretty">
                  {t("sec9.sec13_tips")}
                </div>
              </div>
            </div>
            <div className="pt-[1.64rem]">
              <div className="mx-auto w-[14.27rem]">
                <div className="flex justify-center">
                  <ProductReveal
                    className="bg-center mr-[0.69rem] bg-no-repeat bg-cover w-[6.79rem] h-[6.66rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/v5/sec14_1-40269653cb.webp",
                    )}
                  />
                  <ProductReveal
                    className="bg-center bg-no-repeat bg-cover w-[6.79rem] h-[5.86rem]"
                    style={bg(
                      "/guanwang_second/front/images/product/v5/sec14_2-948b041246.webp",
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="pb-[1.5rem]">
              <div className="mx-auto w-[14.59rem]">
                <ProductReveal className="mt-[1.26rem] mb-[0.64rem] bg-[image:linear-gradient(46deg,rgb(175,141,93)_0px,rgb(255,244,222)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] text-center text-[0.6rem] font-bold text-[#010101] px-[0.2rem] text-balance">
                  {t("sec9.sec15_title")}
                </ProductReveal>
                <div className="relative h-[1.28rem]">
                  <div
                    className="h-[0.86rem] w-[14.59rem] bg-[length:14.59rem_1.28rem] bg-top bg-no-repeat"
                    style={bg(
                      "/guanwang_second/front/images/product/v5/sec15_1-29667c7b7b.webp",
                    )}
                  />
                  <ul>
                    <li className="absolute top-[0.94rem] left-[0.555rem] w-[2rem] -translate-x-1/2 bg-[linear-gradient(180deg,#b5a898_0%,#8e7c62_100%)] bg-clip-text text-center text-[0.2rem] leading-[0.25rem] font-bold text-balance [-webkit-text-fill-color:transparent]">
                      {t("sec9.sec15_alarm1")}
                    </li>
                    <li className="absolute top-[0.94rem] left-[2.75rem] w-[2rem] -translate-x-1/2 bg-[linear-gradient(180deg,#b5a898_0%,#8e7c62_100%)] bg-clip-text text-center text-[0.2rem] leading-[0.25rem] font-bold text-balance [-webkit-text-fill-color:transparent]">
                      {t("sec9.sec15_alarm2")}
                    </li>
                    <li className="absolute top-[0.94rem] left-[4.955rem] w-[2rem] -translate-x-1/2 bg-[linear-gradient(180deg,#b5a898_0%,#8e7c62_100%)] bg-clip-text text-center text-[0.2rem] leading-[0.25rem] font-bold text-balance [-webkit-text-fill-color:transparent]">
                      {t("sec9.sec15_alarm3")}
                    </li>
                    <li className="absolute top-[0.94rem] left-[7.155rem] w-[2rem] -translate-x-1/2 bg-[linear-gradient(180deg,#b5a898_0%,#8e7c62_100%)] bg-clip-text text-center text-[0.2rem] leading-[0.25rem] font-bold text-balance [-webkit-text-fill-color:transparent]">
                      {t("sec9.sec15_alarm4")}
                    </li>
                    <li className="absolute top-[0.94rem] left-[9.355rem] w-[2rem] -translate-x-1/2 bg-[linear-gradient(180deg,#b5a898_0%,#8e7c62_100%)] bg-clip-text text-center text-[0.2rem] leading-[0.25rem] font-bold text-balance [-webkit-text-fill-color:transparent]">
                      {t("sec9.sec15_alarm5")}
                    </li>
                    <li className="absolute top-[0.94rem] left-[11.71rem] w-[2rem] -translate-x-1/2 bg-[linear-gradient(180deg,#b5a898_0%,#8e7c62_100%)] bg-clip-text text-center text-[0.2rem] leading-[0.25rem] font-bold text-balance [-webkit-text-fill-color:transparent]">
                      {t("sec9.sec15_alarm6")}
                    </li>
                    <li className="absolute top-[0.94rem] left-[14.045rem] w-[2rem] -translate-x-1/2 bg-[linear-gradient(180deg,#b5a898_0%,#8e7c62_100%)] bg-clip-text text-center text-[0.2rem] leading-[0.25rem] font-bold text-balance [-webkit-text-fill-color:transparent]">
                      {t("sec9.sec15_alarm7")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product_detail_tips */}
      <div className="p-[60px] bg-black">
        <p className="mx-auto max-w-[1200px] text-[14px] leading-[24px] font-medium text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
