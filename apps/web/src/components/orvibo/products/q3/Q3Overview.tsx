import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function Q3Overview({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* q3 */}
      <div id="overview" className="bg-black">
        {/* sec1 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[10.3rem]"
          style={bg(
            "/guanwang_second/front/images/products/q3/sec1-465a976401.webp",
          )}
        />
        {/* sec2 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[21.26rem]"
          style={bg(
            "/guanwang_second/front/images/products/q3/sec2-f747d93a77.webp",
          )}
        >
          <ProductReveal className="pt-[1.91rem] [-webkit-text-fill-color:transparent] text-center text-[0.65rem] leading-[0.78rem] bg-[image:linear-gradient(135deg,rgb(63,45,22)_0px,rgb(146,113,66)_100%)] bg-clip-text">
            {t("sec2.title")}
          </ProductReveal>
          <ProductReveal className="mt-[14.53rem] pl-[4.07rem] text-[0.33rem] leading-[0.95rem] font-bold text-[#deab6f]">
            <p>{t("sec2.info")}</p>
            <span className="mt-[0.27rem] mb-[0.34rem] block text-[0.21rem] leading-[0.33rem] max-w-[13.8rem]">
              {t("sec2.info2")}
            </span>
            <Image
              src={img(
                "/guanwang_second/front/images/products/q3/block1-614ed439ec.webp",
              )}
              alt=""
              width={581}
              height={54}
              unoptimized
              className="align-middle w-[5.81rem] h-[0.54rem]"
            />
          </ProductReveal>
        </div>
        {/* sec3 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/q3/sec9-67a382e118.webp",
          )}
        >
          <ProductReveal className="pt-[1.93rem] [-webkit-text-fill-color:transparent] text-center text-[0.65rem] leading-[0.7rem] bg-[image:linear-gradient(119deg,rgb(158,123,88)_0px,rgb(231,194,149)_100%)] bg-clip-text">
            {t("sec3.title")}
          </ProductReveal>
          <div className="mt-[0.97rem] flex w-full items-center justify-center">
            <ProductReveal
              className="bg-center mr-[0.27rem] bg-no-repeat bg-cover w-[3.06rem] h-[3.67rem]"
              style={bg(
                "/guanwang_second/front/images/products/q3/pic1-a45c24776d.webp",
              )}
            />
            <ProductReveal
              className="bg-center mr-[0.27rem] [transition-delay:0.1s] bg-no-repeat bg-cover w-[3.06rem] h-[3.67rem]"
              style={bg(
                "/guanwang_second/front/images/products/q3/pic2-67d0b32ed0.webp",
              )}
            />
            <ProductReveal
              className="bg-center mr-[0.27rem] [transition-delay:0.2s] bg-no-repeat bg-cover w-[3.06rem] h-[3.67rem]"
              style={bg(
                "/guanwang_second/front/images/products/q3/pic3-52a918263c.webp",
              )}
            />
            <ProductReveal
              className="bg-center [transition-delay:0.3s] bg-no-repeat bg-cover w-[3.06rem] h-[3.67rem]"
              style={bg(
                "/guanwang_second/front/images/products/q3/pic4-2aded269a3.webp",
              )}
            />
          </div>
        </div>
        {/* video-box */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/q3_4.mp4"
            className="w-full h-full aspect-[4096/2048]"
          />
        </div>
        {/* video-box */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/q3_1.mp4"
            className="w-full h-full aspect-[1920/960]"
          />
        </div>
        {/* sec4 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/q3/sec10-6d17c9f4d4.webp",
          )}
        >
          <div className="pt-[1.7rem] flex w-full items-center justify-center">
            <ProductReveal className="mr-[0.88rem] w-[5.42rem]">
              <h4 className="font-bold [-webkit-text-fill-color:transparent] text-[0.6rem] leading-[0.6rem] bg-[image:linear-gradient(90deg,rgb(190,134,63)_0px,rgb(241,178,98)_72%,rgb(228,156,68)_100%)] bg-clip-text">
                {t("sec4.left")}
              </h4>
              <p className="mt-[0.5rem] mb-[0.15rem] text-[0.3rem] leading-[0.42rem] font-bold text-[#dbae78]">
                {t("sec4.left2")}
              </p>
              <span className="mb-[0.27rem] font-normal text-[#dbae78] block text-[0.21rem]">
                {t("sec4.left3")}
              </span>
              <Image
                src={img(
                  "/guanwang_second/front/images/products/q3/block2-3fd0050e02.webp",
                )}
                alt=""
                width={403}
                height={163}
                unoptimized
                className="align-middle w-[4.03rem] h-[1.63rem]"
              />
              <div className="mt-[1.05rem] font-normal text-[#dbae78] text-[0.13rem] leading-[0.22rem] max-w-[5.8rem]">
                {t("sec4.tips")}
              </div>
            </ProductReveal>
            <Image
              src={img(
                "/guanwang_second/front/images/products/q3/pic5-427998a2a4.webp",
              )}
              alt=""
              width={607}
              height={598}
              unoptimized
              className="[transition-delay:0.1s] align-middle w-[6.07rem] h-[5.98rem]"
            />
          </div>
        </div>
        {/* sec5 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[8.88rem]"
          style={bg(
            "/guanwang_second/front/images/products/q3/sec3-1b9e01f639.webp",
          )}
        >
          <ProductReveal className="pt-[1.84rem] pl-[3.52rem]">
            <h4 className="font-bold [-webkit-text-fill-color:transparent] text-[0.6rem] leading-[0.6rem] bg-[image:linear-gradient(102deg,rgb(134,101,64)_0px,rgb(193,156,113)_49%,rgb(149,115,76)_100%)] bg-clip-text">
              {t("sec5.left")}
            </h4>
            <p className="mt-[0.45rem] mb-[0.15rem] text-[0.3rem] leading-[0.42rem] font-bold text-[#9c7a51]">
              {t("sec5.left2")}
            </p>
            <span className="mb-[0.47rem] text-[#9c7a51] block text-[0.21rem] font-normal max-w-[6.9rem]">
              {t("sec5.left3")}
            </span>
            <Image
              src={img(
                "/guanwang_second/front/images/products/q3/block3-c5730293d2.webp",
              )}
              alt=""
              width={639}
              height={268}
              unoptimized
              className="ml-[-0.2rem] align-middle w-[6.39rem] h-[2.68rem]"
            />
            <div className="mt-[0.79rem] text-[#9c7a51] text-[0.13rem] leading-[0.22rem] font-normal">
              {t("sec5.tips")}
            </div>
          </ProductReveal>
        </div>
        {/* sec6 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[11.98rem]"
          style={bg(
            "/guanwang_second/front/images/products/q3/sec4-1474fc5f55.webp",
          )}
        >
          <ProductReveal className="pt-[1.28rem] text-center">
            <h4 className="font-bold [-webkit-text-fill-color:transparent] text-[0.6rem] leading-[0.6rem] bg-[image:linear-gradient(120deg,rgb(240,201,148)_0px,rgb(255,255,255)_13%,rgb(255,242,206)_62%,rgb(207,163,98)_100%)] bg-clip-text">
              {t("sec6.info")}
            </h4>
            <p className="mt-[0.26rem] mb-[0.12rem] text-[0.3rem] leading-[0.42rem] font-bold text-[#ffe7c7]">
              {t("sec6.info2")}
            </p>
            <span className="block text-[0.21rem] font-normal text-[#ffe7c7]">
              {t("sec6.info3")}
            </span>
            <Image
              src={img(
                "/guanwang_second/front/images/products/q3/block4-0daa371d50.webp",
              )}
              alt=""
              width={553}
              height={204}
              unoptimized
              className="inline mt-[5.69rem] align-middle w-[5.53rem] h-[2.04rem]"
            />
            <div className="mt-[0.36rem] text-[0.13rem] leading-[0.22rem] font-normal text-[#ffe7c7]">
              {t("sec6.tips")}
            </div>
          </ProductReveal>
        </div>
        {/* sec7 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.57rem]"
          style={bg(
            "/guanwang_second/front/images/products/q3/sec5-ab428b2a0d.webp",
          )}
        >
          <ProductReveal className="pt-[2.3rem] pl-[3.5rem]">
            <h4 className="font-bold text-[0.6rem] leading-[0.6rem] bg-[image:linear-gradient(107deg,rgb(240,201,148)_0px,rgb(255,255,255)_13%,rgb(255,242,206)_62%,rgb(207,163,98)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]">
              {t("sec7.left")}
            </h4>
            <p className="mt-[0.7rem] mb-[0.15rem] text-[0.3rem] leading-[0.42rem] font-bold text-[#fbf3de]">
              {t("sec7.left2")}
            </p>
            <span className="mb-[2.09rem] block text-[0.21rem] font-normal text-[#fbf3de] max-w-[5.5rem]">
              {t("sec7.left3")}
            </span>
            <div className="text-[0.13rem] leading-[0.22rem] font-normal text-[#ffe8c8]">
              {t("sec7.tips")}
            </div>
          </ProductReveal>
        </div>
        {/* sec8 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/q3/sec6-61c876b04d.webp",
          )}
        >
          <ProductReveal className="pt-[2.44rem] pl-[3.5rem]">
            <h4 className="font-bold bg-[image:linear-gradient(90deg,rgb(240,201,148)_0px,rgb(255,255,255)_13%,rgb(255,242,206)_62%,rgb(207,163,98)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] text-[0.6rem] leading-[0.6rem]">
              {t("sec8.left")}
            </h4>
            <p className="mt-[0.7rem] mb-[0.15rem] text-[0.3rem] leading-[0.42rem] font-bold text-[#fbf3de]">
              {t("sec8.left2")}
            </p>
            <span className="block font-normal text-[0.21rem] text-[#fbf3de] max-w-[5.9rem]">
              {t("sec8.left3")}
            </span>
          </ProductReveal>
        </div>
        {/* sec9 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.6rem]"
          style={bg(
            "/guanwang_second/front/images/products/q3/sec7-1c39147b99.webp",
          )}
        >
          <ProductReveal className="pt-[0.96rem] text-center">
            <h4 className="font-bold bg-[image:linear-gradient(90deg,rgb(240,201,148)_0px,rgb(255,255,255)_13%,rgb(255,242,206)_62%,rgb(207,163,98)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] text-[0.6rem] leading-[0.6rem] [filter:drop-shadow(0_0_0.05rem_rgba(40,25,10,0.6))]">
              {t("sec9.info")}
            </h4>
            <span className="mt-[0.43rem] block font-normal text-[0.21rem] text-[#ffe7c7] [text-shadow:0_0_0.04rem_rgba(40,25,10,0.7)]">
              {t("sec9.info2")}
            </span>
          </ProductReveal>
        </div>
        {/* video-box */}
        <div className="relative">
          <MarketingVideo
            bare
            src="/orvibo/videos/q3_3.mp4"
            className="w-full h-full aspect-[1758/1080]"
          />
        </div>
        {/* sec10 */}
        <div className="h-[8.1rem]">
          <ProductReveal className="pt-[1.35rem] bg-[image:linear-gradient(90deg,rgb(255,212,151)_0px,rgb(193,131,64)_100%)] bg-clip-text text-[0.6rem] leading-[0.6rem] [-webkit-text-fill-color:transparent] text-center">
            {t("sec10.title")}
          </ProductReveal>
          <div className="mt-[0.65rem] flex w-full items-center justify-center">
            <ProductReveal
              className="bg-center mr-[0.28rem] bg-no-repeat bg-cover w-[5.15rem] h-[4.7rem]"
              style={bg(
                "/guanwang_second/front/images/products/q3/pic6-49a6ad7420.webp",
              )}
            />
            <ProductReveal
              className="bg-center mr-[0.28rem] [transition-delay:0.1s] bg-no-repeat bg-cover w-[5.15rem] h-[4.7rem]"
              style={bg(
                "/guanwang_second/front/images/products/q3/pic7-002e3cfef0.webp",
              )}
            />
            <ProductReveal
              className="bg-center [transition-delay:0.2s] bg-no-repeat bg-cover w-[5.15rem] h-[4.7rem]"
              style={bg(
                "/guanwang_second/front/images/products/q3/pic8-e5296ea250.webp",
              )}
            />
          </div>
        </div>
        {/* sec11 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[9.52rem]"
          style={bg(
            "/guanwang_second/front/images/products/q3/sec8-e8862aea81.webp",
          )}
        >
          <ProductReveal className="pt-[0.7rem] text-center">
            <h4 className="font-bold bg-[image:linear-gradient(90deg,rgb(255,212,151)_0px,rgb(193,131,64)_100%)] bg-clip-text text-[0.6rem] leading-[0.6rem] [-webkit-text-fill-color:transparent]">
              {t("sec11.info")}
            </h4>
          </ProductReveal>
        </div>
        {/* sec12 */}
        <div className="h-[9.6rem]">
          <ProductReveal className="pt-[1.07rem] text-[0.6rem] leading-[0.6rem] [-webkit-text-fill-color:transparent] text-center bg-[image:linear-gradient(90deg,rgb(255,212,151)_0px,rgb(193,131,64)_100%)] bg-clip-text">
            {t("sec12.title")}
          </ProductReveal>
          <div className="mt-[0.7rem] flex w-full items-center justify-center">
            <ProductReveal
              className="bg-center mr-[0.3rem] bg-no-repeat bg-cover w-[6.36rem] h-[5.51rem]"
              style={bg(
                "/guanwang_second/front/images/products/q3/pic9-6df0a70ca3.webp",
              )}
            />
            <ProductReveal
              className="bg-center [transition-delay:0.1s] bg-no-repeat bg-cover w-[6.36rem] h-[5.51rem]"
              style={bg(
                "/guanwang_second/front/images/products/q3/pic10-1c50c95e1e.webp",
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
