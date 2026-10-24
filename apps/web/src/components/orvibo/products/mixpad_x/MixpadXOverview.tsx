import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** Text cards drawn as images on orvibo.com, rebuilt so they can be translated. */
const screenSpecs = [
  "size",
  "resolution",
  "brightness",
  "angle",
  "coating",
  "lifespan",
];
const audioSpecs = ["dts", "hifi", "tws", "library"];

export function MixpadXOverview({ locale, text, common }: ProductViewProps) {
  const { t, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* mixpad_x */}
      <div id="overview" className="relative bg-black">
        {/* x__banner s__bg */}
        <div
          className="bg-center pt-[1.62rem] bg-no-repeat bg-cover flex flex-col items-center h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_x/banner-af45c7cc94.webp",
          )}
        >
          <div
            className="relative bg-center bg-no-repeat bg-cover w-[1.17rem] h-[0.99rem]"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_x/icon_award-5bf1c197a7.webp",
            )}
          >
            <span className="absolute bottom-[0.035rem] left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.15rem] font-medium leading-[0.2rem] text-white/[0.67]">
              {t("x_banner.award")}
            </span>
          </div>
          <div
            className="bg-center mt-[0.2rem] bg-no-repeat bg-cover w-[3.85rem] h-[1.07rem]"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_x/icon_x-ebf40326f2.webp",
            )}
          />
          <div className="mt-[0.04rem] text-[0.3rem] font-normal text-white">
            {t("x_banner.banner_desc")}
          </div>
        </div>
        {/* sec1 */}
        <div className="relative h-[9.49rem]">
          <MarketingVideo
            bare
            src="/8f4239b1vodgzp1251222210/fec3e337387702292186548451/D54QyFOXCVkA.mp4"
            className="w-full h-full aspect-[2048/858]"
          />
          <OrviboWatchTrigger
            videoSrc="/8f4239b1vodgzp1251222210/47caebd93701925919897718905/hpJ09X6HrB0A.mp4"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            showPlayIcon={false}
          >
            <span
              className="pr-[0.4rem] relative flex items-center h-[0.34rem] text-[0.24rem] font-medium text-white cursor-pointer after:bg-center after:content-[''] after:absolute after:top-1/2 after:right-0 after:translate-y-[-45%] after:w-[0.26rem] after:h-[0.26rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat"
              style={pseudoBg(
                "after",
                "/guanwang_second/front/images/products/mixpad_x/icon_player-7fc7fa8ef7.webp",
              )}
            >
              {t("sec1.video_text")}
            </span>
          </OrviboWatchTrigger>
        </div>
        {/* sec2 */}
        <div className="flex items-center justify-center h-[3.35rem]">
          <ProductReveal className="">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white">
              {t("sec2.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] font-normal leading-[0.3rem] text-center text-white/70">
              {t("sec2.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec3 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover relative w-full h-[10rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_x/sec3-08e6e4651b.webp",
          )}
        />
        {/* sec4 show */}
        <div className="pt-[1.6rem] relative w-full overflow-hidden">
          <ProductReveal className="absolute left-0 top-[1.2rem] z-[10] w-full text-center">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white">
              {t("sec4.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] font-medium leading-[0.36rem] text-center text-white/70">
              {t("sec4.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center bg-no-repeat bg-cover relative w-full h-[10.75rem]"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_x/sec4_bg-42c41ddd93.webp",
            )}
          >
            <div className="absolute left-1/2 top-[2rem] z-[5] -translate-x-1/2 w-[11.64rem] h-[5.66rem]">
              <MarketingVideo
                bare
                src="/8f4239b1vodgzp1251222210/fea0325e387702292186529198/SyyqAnosrIQA.mp4"
                className="w-full h-full aspect-[2060/1002]"
              />
            </div>
          </div>
        </div>
        {/* sec5 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem] relative"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_x/sec5-b9216405d5.webp",
          )}
        >
          <ProductReveal className="absolute left-[1.62rem] top-[3.14rem] w-[4.8rem]">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-left text-white">
              {t("sec5.title")}
            </div>
            <div className="mt-[0.45rem] text-[0.22rem] font-medium leading-[0.36rem] text-white/70">
              {t("sec5.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec6 */}
        <div className="pt-[1.2rem] h-[20.76rem]">
          <ProductReveal className="">
            <div
              className="bg-center mx-auto bg-no-repeat bg-cover w-[4.87rem] h-[0.46rem]"
              style={bg(
                "/guanwang_second/front/images/products/mixpad_x/sec6_logo-59de89d72c.svg",
              )}
            />
            <div className="mt-[0.2rem] text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white">
              {t("sec6.title")}
            </div>
          </ProductReveal>
          <div
            className="bg-center mt-[0.91rem] bg-no-repeat bg-cover h-[8.46rem]"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_x/sec6-cef646e325.webp",
            )}
          />
          <ul className="mx-auto mt-[0.72rem] grid w-[16rem] grid-cols-3 gap-x-[0.2rem] gap-y-[0.3rem]">
            {screenSpecs.map((spec) => (
              <li
                key={spec}
                className="flex h-[3rem] flex-col items-center justify-center rounded-[0.16rem] bg-[#14151a] px-[0.3rem] text-center"
              >
                <span className="text-[0.46rem] font-semibold leading-[0.56rem] text-white">
                  {t(`sec6.${spec}.title`)}
                </span>
                <span className="mt-[0.07rem] text-[0.28rem] leading-[0.36rem] text-white/70">
                  {t(`sec6.${spec}.desc`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* sec7 s__bg lazy */}
        <div
          className="bg-center pt-[1.2rem] bg-no-repeat bg-cover relative h-[12rem]"
          style={bg(
            "/guanwang_second/front/images/products/mixpad_x/sec7_bg-aa33f5637f.webp",
          )}
        >
          <ProductReveal className="">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white">
              {t("sec7.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] font-medium leading-[0.36rem] text-center text-white/70 max-w-[10.7rem] mx-auto">
              {t("sec7.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec8 */}
        <div className="pt-[1.2rem] relative h-[14.11rem] overflow-hidden">
          <ProductReveal className="">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white">
              {t("sec8.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] font-medium leading-[0.36rem] text-center text-white/70">
              {t("sec8.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center bg-no-repeat bg-cover absolute top-[4.19rem] left-1/2 -translate-x-1/2 w-[16.56rem] h-[8.06rem] z-[5]"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_x/sec8_box-7d0ba42612.webp",
            )}
          />
          <div className="absolute top-[4.19rem] left-1/2 -translate-x-1/2 w-[16.56rem] h-[8.06rem] z-[5]">
            <div className="absolute left-[2.6rem] top-[1.72rem] w-[13.5rem] h-[4.05rem] flex overflow-hidden">
              <div className="relative w-[5.31rem] h-full">
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] left-0 top-0"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_02-206dadabfc.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] right-0 top-0"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_03-bc3ada3e89.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] top-[1.35rem] left-0"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_04-414c875ad2.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] right-0 top-[1.35rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_01-d3846cd267.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] left-0 top-[2.7rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_05-b62904d86e.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] right-0 top-[2.7rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_06-7cdaa3119d.webp",
                  )}
                />
              </div>
              <div className="ml-[0.94rem] flex-1 relative h-full">
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] top-0 left-0"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_08-b555533f05.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] top-0 left-[2.78rem] z-[5]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_10-1e6842d177.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] top-0 left-[5.56rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_13-93449a5f17.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] left-0 top-[1.35rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_09-6abf0262b6.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] top-[1.35rem] left-[2.78rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_05-b62904d86e.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] top-[1.35rem] left-[5.56rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_15-a10d9fe21f.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] left-0 top-[2.7rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_13-93449a5f17.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] top-[2.7rem] left-[2.78rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_15-a10d9fe21f.webp",
                  )}
                />
                <div
                  className="bg-center bg-no-repeat bg-cover absolute w-[2.53rem] h-[1.1rem] top-[2.7rem] left-[5.56rem]"
                  style={bg(
                    "/guanwang_second/front/images/products/mixpad_x/sec8_13-93449a5f17.webp",
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        {/* sec9 */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/8f4239b1vodgzp1251222210/fec3f87d387702292186548952/WRju2GQrWGoA.mp4"
            className="w-full h-full aspect-[1920/1468]"
          />
          <div
            className="bg-center bg-no-repeat bg-cover absolute left-0 bottom-0 w-full h-full"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_x/sec9_shadow-e08b683f2d.webp",
            )}
          />
          <ProductReveal className="absolute top-[1.2rem] left-0 z-[5] w-full">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white">
              {t("sec9.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] font-medium leading-[0.36rem] text-center text-white/70 max-w-[10.9rem] mx-auto">
              {t("sec9.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec10 */}
        <div className="h-[14.64rem] relative">
          <MarketingVideo
            bare
            src="/8f4239b1vodgzp1251222210/fec46af4387702292186549321/qa7Qtx8xE5YA.mp4"
            className="w-full h-full aspect-[1920/1468]"
          />
          <ProductReveal className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white absolute left-0 top-[1.2rem] w-full">
            {t("sec10.title")}
          </ProductReveal>
          <ul className="absolute bottom-[0.69rem] left-1/2 flex w-[16rem] -translate-x-1/2 justify-between">
            {audioSpecs.map((spec) => (
              <li
                key={spec}
                className="flex h-[2.2rem] w-[3.8rem] items-center justify-center rounded-[0.16rem] bg-white/[0.12] px-[0.2rem] text-center text-[0.3rem] font-medium leading-[0.48rem] text-white"
              >
                {t(`sec10.${spec}`)}
              </li>
            ))}
          </ul>
        </div>
        {/* sec11 */}
        <div className="pt-[1.63rem] h-[14.3rem]">
          <ProductReveal className="">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white">
              {t("sec11.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] font-medium leading-[0.36rem] text-center text-white/70 max-w-[10.7rem] mx-auto">
              {t("sec11.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center mt-[0.91rem] bg-no-repeat bg-cover w-full h-[1.65rem]"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_x/sec11_list-b6df3a5ac2.webp",
            )}
          />
          <div
            className="bg-center mt-[0.45rem] bg-no-repeat bg-cover w-full h-[7.56rem]"
            style={bg(
              "/guanwang_second/front/images/products/mixpad_x/sec11_bg-d708266c88.webp",
            )}
          />
        </div>
        {/* sec12 */}
        <div className="pt-[1.4rem] relative h-[14.24rem]">
          <ProductReveal className="">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white">
              {t("sec12.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] font-medium leading-[0.36rem] text-center text-white/70 max-w-[13.5rem] mx-auto">
              {t("sec12.desc")}
            </div>
          </ProductReveal>
          <div className="mt-[1rem] relative w-full overflow-hidden">
            <div className="mb-[0.19rem] flex">
              <div
                className="bg-no-repeat bg-cover relative w-[8.59rem] h-[3.02rem]"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_x/sec12_1-7274d349fc.webp",
                )}
              >
                <div className="rounded-[0.2rem] absolute overflow-hidden w-[4rem] h-[3.02rem] left-[2.91rem] top-0">
                  <MarketingVideo
                    bare
                    src="/8f4239b1vodgzp1251222210/f9f54f72387702292186328018/ouce9tAFGuAA.mp4"
                    className="w-full h-full aspect-[400/302]"
                  />
                </div>
              </div>
              <div
                className="ml-[0.21rem] grow shrink-0 basis-0 bg-no-repeat bg-cover relative"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_x/sec12_2-6bae658d6f.webp",
                )}
              >
                <div className="rounded-[0.2rem] absolute overflow-hidden w-[3.16rem] h-[3.02rem] left-0 top-0">
                  <MarketingVideo
                    bare
                    src="/8f4239b1vodgzp1251222210/f9e3438e387702292186318303/7cCavFjh1wUA.mp4"
                    className="w-full h-full aspect-[316/302]"
                  />
                </div>
                <div className="rounded-[0.2rem] absolute overflow-hidden w-[2.98rem] h-[3.02rem] left-[7.33rem] top-0">
                  <MarketingVideo
                    bare
                    src="/8f4239b1vodgzp1251222210/fa054831387702292186334470/PAetTu7rqzgA.mp4"
                    className="w-full h-full aspect-[298/300]"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div
                className="mr-[0.2rem] bg-no-repeat bg-cover relative w-[7.54rem] h-[5.09rem]"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_x/sec12_3-7659bd8539.webp",
                )}
              >
                <div className="rounded-[0.2rem] absolute overflow-hidden w-[3rem] h-[2.9rem] left-[2.03rem] top-0">
                  <MarketingVideo
                    bare
                    src="/8f4239b1vodgzp1251222210/f9f4ea00387702292186327969/kEyw5FcNzlEA.mp4"
                    className="w-full h-full aspect-[300/290]"
                  />
                </div>
                <div className="rounded-[0.2rem] absolute overflow-hidden w-[2.34rem] h-[2.9rem] right-0 top-0">
                  <MarketingVideo
                    bare
                    src="/8f4239b1vodgzp1251222210/f9e34430387702292186318350/UlPqraRRG9UA.mp4"
                    className="w-full h-full aspect-[234/290]"
                  />
                </div>
              </div>
              <div
                className="grow shrink-0 basis-0 bg-no-repeat bg-cover relative h-[5.09rem]"
                style={bg(
                  "/guanwang_second/front/images/products/mixpad_x/sec12_4-679cfbaa13.webp",
                )}
              >
                <div className="rounded-[0.2rem] absolute overflow-hidden w-[3.6rem] h-[3.39rem] left-0 bottom-0">
                  <MarketingVideo
                    bare
                    src="/8f4239b1vodgzp1251222210/fa0547d7387702292186334449/5U8lTGnrL3sA.mp4"
                    className="w-full h-full aspect-[360/338]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[0.82rem] leading-[0.36rem] w-full text-center text-[0.16rem] font-normal text-white/70">
            {t("sec12.remind")}
          </div>
        </div>
        {/* sec13 */}
        <div className="py-[0.8rem] flex flex-col items-center w-full">
          <ProductReveal className="">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white">
              {t("sec13.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] font-medium leading-[0.36rem] text-center text-white/70">
              {t("sec13.desc")}
            </div>
          </ProductReveal>
          <div className="mt-[0.72rem]">
            <div className="rounded-[0.24rem] relative overflow-hidden w-[16rem]">
              <MarketingVideo
                bare
                src="/8f4239b1vodgzp1251222210/fea04b9d387702292186529773/DWW4ianbJxoA.mp4"
                className="w-full h-full aspect-[1600/832]"
              />
              <ProductReveal className="absolute bottom-[1.27rem] left-[0.77rem]">
                <div className="text-[0.46rem] font-extrabold leading-[0.64rem] text-white">
                  {t("sec13.video_title")}
                </div>
                <div className="mt-[0.1rem] text-[0.26rem] font-extrabold leading-[0.36rem] text-white">
                  {t("sec13.video_subhead")}
                </div>
                <div className="mt-[0.4rem] text-[0.2rem] font-medium leading-[0.32rem] text-white max-w-[6.5rem]">
                  {t("sec13.video_desc")}
                </div>
              </ProductReveal>
            </div>
            <div className="mt-[0.36rem] flex justify-between w-[16rem]">
              <div className="mr-[0.4rem] rounded-[0.24rem] flex-1 relative overflow-hidden h-[9.1rem] bg-black">
                <div className="rounded-[0.24rem] absolute overflow-hidden bottom-[0.28rem] left-1/2 -translate-x-1/2 w-[4.74rem] h-[4.74rem]">
                  <MarketingVideo
                    bare
                    src="/8f4239b1vodgzp1251222210/ab700c555285890813689301677/CqzqDSSijEoA.mp4"
                    className="w-full h-full aspect-[720/720]"
                  />
                </div>
                <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                <ProductReveal className="absolute top-[0.56rem] left-[0.76rem] z-[10]">
                  <div className="text-[0.46rem] font-extrabold leading-[0.64rem] text-white">
                    {t("sec13.video_title2")}
                  </div>
                  <div className="mt-[0.1rem] text-[0.26rem] font-extrabold leading-[0.36rem] text-white">
                    {t("sec13.video_subhead2")}
                  </div>
                  <div className="mt-[0.4rem] text-[0.2rem] font-medium leading-[0.32rem] text-white max-w-[6.4rem]">
                    {t("sec13.video_desc2")}
                  </div>
                </ProductReveal>
              </div>
              <div className="rounded-[0.24rem] flex-1 relative overflow-hidden h-[9.1rem] bg-black">
                <MarketingVideo
                  bare
                  src="/8f4239b1vodgzp1251222210/fc7cf898387702292186451387/grLk5U1aQtIA.mp4"
                  className="w-full h-full aspect-[780/910]"
                />
                <ProductReveal className="absolute top-[0.56rem] left-[0.76rem] z-[10]">
                  <div className="text-[0.46rem] font-extrabold leading-[0.64rem] text-white">
                    {t("sec13.video_title3")}
                  </div>
                  <div className="mt-[0.1rem] text-[0.26rem] font-extrabold leading-[0.36rem] text-white">
                    {t("sec13.video_subhead3")}
                  </div>
                  <div className="mt-[0.4rem] text-[0.2rem] font-medium leading-[0.32rem] text-white max-w-[6.2rem]">
                    {t("sec13.video_desc3")}
                  </div>
                </ProductReveal>
              </div>
            </div>
          </div>
        </div>
        {/* sec14 */}
        <div className="px-[0.8rem] pt-[0.8rem] pb-[1.8rem] flex flex-col items-center w-full">
          <ProductReveal className="">
            <div className="text-[0.54rem] font-extrabold leading-[0.76rem] text-center text-white">
              {t("sec14.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.22rem] font-medium leading-[0.36rem] text-center text-white/70">
              {t("sec14.desc")}
            </div>
          </ProductReveal>
          <div className="mt-[0.72rem]">
            <div className="rounded-[0.24rem] relative overflow-hidden w-[16rem]">
              <MarketingVideo
                bare
                src="/8f4239b1vodgzp1251222210/fec3df58387702292186548380/eYdWjbSpKakA.mp4"
                className="w-full h-full aspect-[1600/800]"
              />
              <ProductReveal className="absolute top-[0.8rem] left-[0.77rem]">
                <div className="text-[0.46rem] font-extrabold leading-[0.64rem] text-white">
                  {t("sec14.video_title")}
                </div>
                <div className="mt-[0.4rem] text-[0.2rem] font-medium leading-[0.32rem] text-white max-w-[5.1rem]">
                  {t("sec14.video_desc")}
                </div>
              </ProductReveal>
            </div>
            <div className="mt-[0.36rem] flex justify-between w-[16rem]">
              <div className="mr-[0.4rem] rounded-[0.24rem] flex-1 relative overflow-hidden h-[9.1rem] bg-black">
                <MarketingVideo
                  bare
                  src="/8f4239b1vodgzp1251222210/fea04ad8387702292186529714/Uhtmkz608qMA.mp4"
                  className="w-full h-full aspect-[780/910]"
                />
                <ProductReveal className="absolute bottom-[0.8rem] left-[0.76rem]">
                  <div className="text-[0.46rem] font-extrabold leading-[0.64rem] text-white">
                    {t("sec14.video_title2")}
                  </div>
                  <div className="mt-[0.4rem] text-[0.2rem] font-medium leading-[0.32rem] text-white max-w-[5.1rem]">
                    {t("sec14.video_desc2")}
                  </div>
                </ProductReveal>
              </div>
              <div className="rounded-[0.24rem] flex-1 relative overflow-hidden h-[9.1rem] bg-black">
                <MarketingVideo
                  bare
                  src="/8f4239b1vodgzp1251222210/fec46fbd387702292186549465/Eqm5Vx4YwzIA.mp4"
                  className="w-full h-full aspect-[780/910]"
                />
                <ProductReveal className="absolute bottom-[0.8rem] left-[0.76rem]">
                  <div className="text-[0.46rem] font-extrabold leading-[0.64rem] text-white">
                    {t("sec14.video_title3")}
                  </div>
                  <div className="mt-[0.4rem] text-[0.2rem] font-medium leading-[0.32rem] text-white max-w-[4rem]">
                    {t("sec14.video_desc3")}
                  </div>
                </ProductReveal>
              </div>
            </div>
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
