import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function MotorDb28Overview({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* db28__container */}
      <div id="overview" className="bg-black">
        {/* db28__banner */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/db28/banner-93f9d33a8e.webp",
            )}
            alt=""
            width={1920}
            height={960}
            unoptimized
            className="align-middle relative w-full"
          />
          <div className="absolute left-[2.45rem] top-[3.43rem]">
            <div className="relative text-[0.68rem] leading-[0.96rem] font-extrabold text-black">
              {t("db28_banner.banner_title")}
            </div>
            <div className="mt-[0.26rem] relative bg-clip-text [-webkit-text-fill-color:transparent] text-[0.5rem] bg-[image:linear-gradient(315deg,rgb(0,0,0)_0px,rgb(128,79,49)_100%)]">
              {t("db28_banner.banner_desc")}
            </div>
          </div>
        </div>
        {/* sec1 */}
        <div className="relative w-full h-[9.57rem] flex justify-center items-center">
          <div className="relative">
            <div className="relative flex">
              <div className="mr-[0.18rem] relative">
                <ProductReveal className="relative overflow-hidden rounded-[0.2rem] bg-[radial-gradient(circle_at_62%_62%,#423a35_0%,#1b1b1d_62%)] w-[5.17rem] h-[3.22rem]">
                  <div className="absolute left-[0.36rem] top-[0.34rem] max-w-[2.8rem] text-balance text-[0.2rem] leading-[0.3rem] font-medium text-white/85">
                    {t("tiles.name")}
                  </div>
                  <Image
                    src={img(
                      "/guanwang_second/front/images/new/products/db28/product-888e543722.png",
                    )}
                    alt=""
                    width={800}
                    height={800}
                    unoptimized
                    className="absolute right-[-0.25rem] bottom-[-0.55rem] w-[4rem] max-w-none h-auto"
                  />
                </ProductReveal>
                <ProductReveal className="mt-[0.21rem] [transition-delay:0.15s] flex items-center gap-[0.3rem] px-[0.4rem] rounded-[0.2rem] bg-[linear-gradient(160deg,#2a2a2e_0%,#161618_100%)] w-[5.17rem] h-[1.95rem]">
                  <span className="shrink-0 text-[0.72rem] font-bold leading-none bg-[linear-gradient(180deg,#f6e3d2_0%,#a27c62_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
                    {t("tiles.quiet_value")}
                    <span className="ml-[0.06rem] text-[0.24rem]">dB</span>
                  </span>
                  <span
                    className={
                      "text-[0.2rem] leading-[0.3rem] font-medium text-white/85"
                    }
                  >
                    {t("tiles.quiet")}
                  </span>
                </ProductReveal>
              </div>
              <div className="mr-[0.18rem] relative">
                <ProductReveal
                  className="[transition-delay:0.15s] bg-no-repeat bg-cover relative w-[3.6rem] h-[3.62rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/db28/sec1_03-4895f7f41d.webp",
                  )}
                />
                <ProductReveal
                  className="mt-[0.23rem] [transition-delay:0.25s] bg-no-repeat bg-cover relative w-[3.6rem] h-[1.53rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/db28/sec1_04-f0a77d2eb4.webp",
                  )}
                />
              </div>
              <div className="relative">
                <ProductReveal
                  className="[transition-delay:0.15s] bg-no-repeat bg-cover relative w-[3.4rem] h-[1.3rem]"
                  style={bg(
                    "/guanwang_second/front/images/new/products/db28/sec1_05-fdde3d36b2.webp",
                  )}
                />
                <ProductReveal className="mt-[0.2rem] [transition-delay:0.25s] flex flex-col justify-center gap-[0.5rem] px-[0.4rem] rounded-[0.2rem] bg-[linear-gradient(160deg,#2a2a2e_0%,#161618_100%)] w-[3.4rem] h-[3.9rem]">
                  <div>
                    <div className="text-[0.66rem] font-bold leading-none bg-[linear-gradient(180deg,#f6e3d2_0%,#a27c62_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
                      10
                    </div>
                    <div className="mt-[0.14rem] text-[0.2rem] leading-[0.3rem] font-medium text-white/85">
                      {t("tiles.warranty")}
                    </div>
                  </div>
                  <div>
                    <div className="text-[0.66rem] font-bold leading-none bg-[linear-gradient(180deg,#f6e3d2_0%,#a27c62_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
                      {t("tiles.life_value")}
                      <span className="ml-[0.06rem] text-[0.24rem]">h</span>
                    </div>
                    <div className="mt-[0.14rem] text-[0.2rem] leading-[0.3rem] font-medium text-white/85">
                      {t("tiles.life")}
                    </div>
                  </div>
                </ProductReveal>
              </div>
            </div>
            <div className="relative flex">
              <ProductReveal
                className="mt-[0.18rem] mr-[0.18rem] bg-no-repeat bg-cover relative w-[3.76rem] h-[1.94rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/db28/sec1_07-c1c5379413.webp",
                )}
              />
              <ProductReveal
                className="mt-[0.18rem] mr-[0.18rem] [transition-delay:0.15s] bg-no-repeat bg-cover relative w-[4.83rem] h-[1.94rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/db28/sec1_08-b2565458db.webp",
                )}
              />
              <ProductReveal
                className="mt-[0.18rem] [transition-delay:0.25s] bg-no-repeat bg-cover relative w-[3.57rem] h-[1.94rem]"
                style={bg(
                  "/guanwang_second/front/images/new/products/db28/sec1_09-e7158e892f.webp",
                )}
              />
            </div>
          </div>
        </div>
        {/* sec2 c__img */}
        <div className="relative w-full">
          <div className="relative w-full">
            <MarketingVideo
              bare
              src="/orvibo/videos/orvibo_db28_banner.mp4"
              className="relative w-full aspect-[1920/1080]"
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/20">
              <OrviboWatchTrigger
                videoSrc="/orvibo/videos/orvibo_motor_db28.mp4"
                showPlayIcon={false}
                className="mt-[0.3rem] cursor-pointer"
              >
                <span
                  className="pr-[0.41rem] relative inline-block text-white text-[0.24rem] leading-[0.34rem] font-medium after:bg-center after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:w-[0.26rem] after:h-[0.26rem] after:bg-[image:var(--after-bg)] after:bg-cover after:bg-no-repeat"
                  style={pseudoBg(
                    "after",
                    "/guanwang_second/front/images/new/products/mixpad_elf/icon_player-7fc7fa8ef7.webp",
                  )}
                >
                  {t("sec2.video_watch")}
                </span>
              </OrviboWatchTrigger>
            </div>
          </div>
          <ProductReveal className="pt-[1.47rem] pb-[0.7rem] relative">
            <div className="text-center text-white text-[0.58rem] leading-[0.8rem] font-extrabold relative">
              {t("sec2.title")}
            </div>
            <div className="mt-[0.34rem] text-center text-white text-[0.22rem] leading-[0.4rem] font-medium relative mx-auto max-w-[12rem] text-balance">
              {t("sec2.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec3 */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/db28/sec3-1a55512e37.webp",
            )}
            alt=""
            width={1920}
            height={960}
            unoptimized
            className="align-middle relative w-full"
          />
          <div className="absolute left-0 bottom-[0.72rem] w-full text-center text-[0.16rem] font-normal text-white opacity-[0.5]">
            {t("sec3.desc")}
          </div>
        </div>
        {/* sec4 */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/db28/sec4-fe1747c507.webp",
            )}
            alt=""
            width={1920}
            height={1216}
            unoptimized
            className="align-middle relative w-full"
          />
          <ProductReveal className="absolute top-[1.2rem] left-0 w-full">
            <div className="text-center text-white text-[0.58rem] leading-[0.8rem] font-extrabold relative">
              {t("sec4.title")}
            </div>
            <div className="mt-[0.21rem] text-center text-white text-[0.22rem] leading-[0.4rem] font-medium relative max-w-[10rem] mx-auto text-balance">
              {t("sec4.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec4 */}
        <div className="relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/db28/sec5-21eaf47205.webp",
            )}
            alt=""
            width={1924}
            height={1124}
            unoptimized
            className="align-middle relative w-full"
          />
          <ProductReveal className="absolute top-[1.2rem] left-0 w-full">
            <div className="text-center text-white text-[0.58rem] leading-[0.8rem] font-extrabold relative">
              {t("sec4.title2")}
            </div>
            <div className="mt-[0.21rem] text-center text-white text-[0.22rem] leading-[0.4rem] font-medium relative mx-auto max-w-[13rem] text-balance">
              {t("sec4.desc2")}
            </div>
          </ProductReveal>
        </div>
        {/* sec6 c__img */}
        <div className="relative w-full">
          <MarketingVideo
            bare
            src="/orvibo/videos/orvibo_db28_rotate.mp4"
            className="relative w-full aspect-[1920/1080]"
          />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full">
            <ProductReveal className="relative">
              <div className="text-center text-white text-[0.58rem] leading-[0.8rem] font-extrabold relative">
                {t("sec6.title")}
              </div>
              <div className="mt-[0.21rem] text-center text-white text-[0.22rem] leading-[0.4rem] font-medium relative max-w-[10.8rem] mx-auto text-balance">
                {t("sec6.desc")}
              </div>
            </ProductReveal>
          </div>
        </div>
        {/* sec7 */}
        <div className="pt-[1.49rem] relative flex flex-col items-center">
          <ProductReveal className="relative">
            <div className="text-center text-white text-[0.58rem] leading-[0.8rem] font-extrabold relative">
              {t("sec7.title")}
            </div>
            <div className="mt-[0.21rem] text-center text-white text-[0.22rem] leading-[0.4rem] font-medium relative max-w-[11.1rem] mx-auto text-balance">
              {t("sec7.desc")}
            </div>
          </ProductReveal>
          <div className="mt-[0.61rem] rounded-[0.22rem] relative overflow-hidden">
            <MarketingVideo
              bare
              src="/orvibo/videos/orvibo_db28_100_3.mp4"
              className="relative w-[16rem] aspect-[1920/1080]"
            />
          </div>
        </div>
        {/* sec8 */}
        <div className="pt-[1.32rem] pb-[0.64rem] relative flex flex-col items-center">
          <ProductReveal className="relative">
            <div className="text-center text-white text-[0.58rem] leading-[0.8rem] font-extrabold relative">
              {t("sec8.title")}
            </div>
            <div className="mt-[0.21rem] text-center text-white text-[0.22rem] leading-[0.4rem] font-medium relative mx-auto max-w-[12rem] text-balance">
              {t("sec8.desc")}
            </div>
          </ProductReveal>
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/db28/sec8-c6267e98f1.webp",
            )}
            alt=""
            width={1600}
            height={800}
            unoptimized
            className="mt-[0.61rem] align-middle relative w-[16rem]"
          />
        </div>
        {/* sec9 */}
        <div className="relative">
          <ProductReveal className="absolute left-[1.88rem] top-[2.53rem] z-[10]">
            <div className="text-left text-white text-[0.58rem] leading-[0.8rem] font-extrabold relative">
              {t("sec9.title")}
            </div>
            <div className="mt-[0.26rem] text-left text-white text-[0.22rem] leading-[0.36rem] font-medium relative max-w-[5.4rem] text-pretty">
              {t("sec9.desc")}
            </div>
          </ProductReveal>
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/db28/sec9-0bd05099cf.webp",
            )}
            alt=""
            width={1920}
            height={957}
            unoptimized
            className="align-middle relative w-full"
          />
        </div>
        {/* sec10 */}
        <div className="pt-[0.78rem] pb-[3rem] relative flex flex-col items-center bg-white">
          <div className="relative w-[13.71rem] flex">
            <ProductReveal
              className="rounded-[0.22rem] shrink-0 bg-no-repeat bg-cover relative w-[7.3rem] h-[5.94rem] overflow-hidden"
              style={bg(
                "/guanwang_second/front/images/new/products/db28/sec10_1-4bc52a3bbb.webp",
              )}
            />
            <ProductReveal className="pt-[1.78rem] pl-[0.67rem] grow shrink-0 basis-0 [transition-delay:0.15s] relative">
              <div className="relative text-[0.4rem] leading-[0.56rem] font-extrabold text-black">
                {t("sec10.item_title")}
              </div>
              <div className="mt-[0.13rem] relative text-[0.22rem] leading-[0.36rem] font-normal text-black max-w-[5.9rem] text-pretty">
                {t("sec10.item_desc")}
              </div>
            </ProductReveal>
          </div>
          <div className="mt-[0.99rem] relative w-[13.71rem] flex">
            <ProductReveal className="pt-[1.78rem] grow shrink-0 basis-0 [transition-delay:0.15s] relative">
              <div className="relative text-[0.4rem] leading-[0.56rem] font-extrabold text-black">
                {t("sec10.item_title2")}
              </div>
              <div className="mt-[0.13rem] relative text-[0.22rem] leading-[0.36rem] font-normal text-black max-w-[5.9rem] text-pretty">
                {t("sec10.item_desc2")}
              </div>
            </ProductReveal>
            <ProductReveal
              className="rounded-[0.22rem] shrink-0 bg-no-repeat bg-cover relative w-[7.3rem] h-[5.94rem] overflow-hidden"
              style={bg(
                "/guanwang_second/front/images/new/products/db28/sec10_2-429e77179f.webp",
              )}
            />
          </div>
          <div className="mt-[0.99rem] relative w-[13.71rem] flex">
            <ProductReveal
              className="rounded-[0.22rem] shrink-0 bg-no-repeat bg-cover relative w-[7.3rem] h-[5.94rem] overflow-hidden"
              style={bg(
                "/guanwang_second/front/images/new/products/db28/sec10_3-a7b459dfdf.webp",
              )}
            />
            <ProductReveal className="pt-[1.78rem] pl-[0.67rem] grow shrink-0 basis-0 [transition-delay:0.15s] relative">
              <div className="relative text-[0.4rem] leading-[0.56rem] font-extrabold text-black">
                {t("sec10.item_title3")}
              </div>
              <div className="mt-[0.13rem] relative text-[0.22rem] leading-[0.36rem] font-normal text-black max-w-[5.9rem] text-pretty">
                {t("sec10.item_desc3")}
              </div>
            </ProductReveal>
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
