import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductFocusCarousel } from "@/components/orvibo/product/ProductFocusCarousel";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import { localizedAssetPath } from "@/lib/orvibo/localizedAsset";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function CurtainMotorOverview({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* curtain__motor */}
      <div id="overview" className="bg-white">
        {/* motor__banner */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_motor/banner_01-db234dbb96.webp",
            )}
            alt=""
            width={1920}
            height={959}
            unoptimized
            className="align-middle w-full"
          />
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_motor/banner_02-3bdc1b212e.webp",
            )}
            alt=""
            width={1920}
            height={857}
            unoptimized
            className="align-middle w-full"
          />
          <div className="absolute left-1/2 top-[1.98rem] w-max -translate-x-1/2">
            <div className="flex items-center">
              <div className="text-center text-[0.58rem] font-extrabold text-black">
                {t("motor_banner.banner_title")}
              </div>
              <div className="ml-[0.18rem] rounded-[0.42rem] w-[1.78rem] h-[0.56rem] bg-black flex justify-center items-center text-[0.3rem] font-extrabold text-white">
                {t("motor_banner.title_desc")}
              </div>
            </div>
            <div className="mt-[0.3rem] text-center text-[0.28rem] leading-[0.4rem] font-normal text-black">
              {t("motor_banner.banner_desc")}
            </div>
          </div>
        </div>
        {/* sec1 */}
        <div className="relative w-full bg-[#fdf6fe]">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_motor/sec_01-943b00de38.webp",
            )}
            alt=""
            width={1920}
            height={1133}
            unoptimized
            className="align-middle w-full"
          />
          <ProductReveal className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(315deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] absolute left-0 top-[1.28rem] w-full">
            {t("sec1.motor_title")}
          </ProductReveal>
        </div>
        {/* sec2 */}
        <div className="pt-[1.43rem] pb-[0.76rem] flex flex-col items-center w-full bg-white">
          <ProductReveal className="">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(306deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec2.motor_title")}
            </div>
            <div className="mt-[0.3rem] text-center text-[0.22rem] leading-[0.36rem] font-normal text-black mx-auto max-w-[12rem] text-balance">
              {t("sec2.motor_desc")}
            </div>
          </ProductReveal>
          <div className="mt-[0.7rem] pb-[0.76rem] w-[16rem]">
            <Image
              src={img(
                "/guanwang_second/front/images/new/products/curtain_motor/sec_02-83e4915233.webp",
              )}
              alt=""
              width={1600}
              height={800}
              unoptimized
              className="mb-[0.6rem] align-middle w-full"
            />
            <Image
              src={img(
                "/guanwang_second/front/images/new/products/curtain_motor/sec_03-33838964ad.webp",
              )}
              alt=""
              width={1600}
              height={800}
              unoptimized
              className="align-middle w-full"
            />
          </div>
        </div>
        {/* sec3 */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_motor/sec_04-6e8266cc1d.webp",
            )}
            alt=""
            width={1920}
            height={960}
            unoptimized
            className="align-middle w-full"
          />
          <ProductReveal className="absolute left-[2.08rem] top-[1.82rem]">
            <div className="text-left text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(270deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec3.motor_title")}
            </div>
            <div className="mt-[0.88rem] text-left text-[0.22rem] leading-[0.36rem] font-normal text-white max-w-[6.6rem] text-pretty">
              {t("sec3.motor_desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec4 */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_motor/sec_05-58bd0c72f7.webp",
            )}
            alt=""
            width={1920}
            height={1100}
            unoptimized
            className="align-middle w-full"
          />
          <ProductReveal className="absolute left-0 top-[1.61rem] w-full">
            <div className="text-white text-center text-[0.48rem] leading-[0.52rem] font-bold [text-shadow:0_0.02rem_0.12rem_rgba(40,60,80,0.35)]">
              {t("sec4.title")}
            </div>
            <div className="mt-[0.3rem] text-center text-[0.22rem] leading-[0.36rem] font-normal text-white mx-auto max-w-[8.4rem] text-balance [text-shadow:0_0.02rem_0.12rem_rgba(40,60,80,0.35)]">
              {t("sec4.motor_desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec5 */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/curtain_motor_shensuolian.mp4"
            poster="/guanwang_second/front/images/new/products/curtain_motor/sec_06-3c112ed3a9.webp"
            className="w-full h-full aspect-[1920/960]"
          />
          <ProductReveal className="absolute left-0 top-[1.16rem] w-full">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(315deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec5.motor_title")}
            </div>
            <div className="mt-[0.3rem] text-center text-[0.22rem] leading-[0.36rem] font-normal text-black mx-auto max-w-[10rem] text-balance">
              {t("sec5.motor_desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec6 */}
        <div className="pt-[1.35rem] pb-[1.87rem] flex flex-col items-center relative w-full bg-white">
          <ProductReveal className="">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(315deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec6.motor_title")}
            </div>
          </ProductReveal>
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_motor/sec_07-86acb076ae.webp",
            )}
            alt=""
            width={1428}
            height={768}
            unoptimized
            className="mt-[1.32rem] align-middle w-[14.28rem]"
          />
        </div>
        {/* sec7 */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_motor/sec_08-41827534b3.webp",
            )}
            alt=""
            width={1920}
            height={1146}
            unoptimized
            className="align-middle w-full"
          />
          <ProductReveal className="absolute left-0 top-[1.45rem] w-full z-[10]">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(315deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec7.motor_title")}
            </div>
            <div className="mt-[0.3rem] text-center text-[0.22rem] leading-[0.36rem] font-normal text-white mx-auto max-w-[10rem] text-balance">
              {t("sec7.motor_desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec8 */}
        <div className="pt-[1.5rem] pb-[0.9rem] bg-white">
          <ProductReveal className="">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(315deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec8.motor_title")}
            </div>
            <div className="mt-[0.3rem] text-center text-[0.22rem] leading-[0.36rem] font-normal text-black mx-auto max-w-[12rem] text-balance">
              {t("sec8.motor_desc")}
            </div>
          </ProductReveal>
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_motor/sec_09-c391774f01.webp",
            )}
            alt=""
            width={1920}
            height={592}
            unoptimized
            className="mt-[0.88rem] align-middle w-full"
          />
          <div className="mt-[0.41rem] text-[0.22rem] leading-[0.36rem] font-normal text-center text-black">
            {t("sec8.desc")}
          </div>
        </div>
        {/* sec9 */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_motor/sec_10-55fa096f0b.webp",
            )}
            alt=""
            width={1920}
            height={1172}
            unoptimized
            className="align-middle w-full"
          />
          <ProductReveal className="absolute left-0 top-[1.23rem] w-full z-[10]">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(315deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec9.motor_title")}
            </div>
            <div className="mt-[0.3rem] text-center text-[0.22rem] leading-[0.36rem] font-normal text-black mx-auto max-w-[12rem] text-balance">
              {t("sec9.motor_desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec10 */}
        <div className="relative">
          <ProductReveal className="absolute left-0 top-[1.42rem] w-full z-[10]">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(315deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec10.motor_title")}
            </div>
            <div className="mt-[0.3rem] text-center text-[0.22rem] leading-[0.36rem] font-normal text-black mx-auto max-w-[12rem] text-balance">
              {t("sec10.motor_desc")}
            </div>
          </ProductReveal>
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/curtain_motor/sec_11-ba4d6a72b7.webp",
            )}
            alt=""
            width={1921}
            height={1051}
            unoptimized
            className="align-middle w-full"
          />
        </div>
        {/* sec11 */}
        <div className="pt-[1.12rem] pb-[1.33rem] flex flex-col items-center w-full bg-white">
          <ProductReveal className="">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(315deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec11.motor_title")}
            </div>
            <div className="mt-[0.3rem] text-center text-[0.22rem] leading-[0.36rem] font-normal text-black mx-auto max-w-[11rem] text-balance">
              {t("sec11.motor_desc")}
            </div>
          </ProductReveal>
          <div className="mt-[0.52rem] rounded-[0.2rem] w-[16rem] overflow-hidden">
            <MarketingVideo
              bare
              src="/orvibo/videos/curtain_motor_15.mp4"
              poster={localizedAssetPath(
                "/guanwang_second/front/images/new/products/curtain_motor/sec12.webp",
                locale,
              )}
              className="w-full h-full aspect-[1600/768]"
            />
          </div>
        </div>
        {/* sec12 */}
        <div className="w-full overflow-hidden">
          <ProductReveal className="">
            <div className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(315deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec12.motor_title")}
            </div>
            <div className="mt-[0.3rem] text-center text-[0.22rem] leading-[0.36rem] font-normal text-black mx-auto max-w-[12rem] text-balance">
              {t("sec12.motor_desc")}
            </div>
          </ProductReveal>
          <ProductFocusCarousel
            look="films"
            className="mt-[0.88rem]"
            slides={[
              {
                key: "home",
                image: img(
                  "/guanwang_second/front/images/new/products/curtain_motor/sec13_3.webp",
                ),
                video: "/orvibo/videos/curtain_motor_home.mp4",
                title: t("sec12.slide_title"),
              },
              {
                key: "movie",
                image: img(
                  "/guanwang_second/front/images/new/products/curtain_motor/sec13_2-dbabf8f539.webp",
                ),
                video: "/orvibo/videos/curtain_motor_move.mp4",
                title: t("sec12.slide_title2"),
              },
              {
                key: "sleep",
                image: img(
                  "/guanwang_second/front/images/new/products/curtain_motor/sec13_1-c62a8a04f0.webp",
                ),
                video: "/orvibo/videos/curtain_motor_sleep.mp4",
                title: t("sec12.slide_title3"),
              },
            ]}
          />
        </div>
        {/* sec13 */}
        <div className="pt-[1.2rem] pb-[1.06rem] flex flex-col items-center w-full bg-white">
          <ProductReveal className="text-center text-[0.48rem] leading-[0.52rem] font-bold bg-[image:linear-gradient(315deg,rgb(34,158,253)_0px,rgb(106,223,209)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
            {t("sec13.motor_title")}
          </ProductReveal>
          <div className="mt-[0.6rem] flex">
            <ProductReveal
              className="mr-[0.26rem] w-[4.89rem] h-[7.9rem] overflow-hidden bg-cover"
              style={bg(
                "/guanwang_second/front/images/new/products/curtain_motor/sec14_1-ab792c80cf.webp",
              )}
            />
            <div>
              <ProductReveal
                className="mb-[0.26rem] [transition-delay:0.15s] w-[6.65rem] h-[3.82rem] bg-cover overflow-hidden"
                style={bg(
                  "/guanwang_second/front/images/new/products/curtain_motor/sec14_2-32bcdb2231.webp",
                )}
              />
              <ProductReveal
                className="w-[6.65rem] h-[3.82rem] bg-cover overflow-hidden"
                style={bg(
                  "/guanwang_second/front/images/new/products/curtain_motor/sec14_3-d2dda4bd35.webp",
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
