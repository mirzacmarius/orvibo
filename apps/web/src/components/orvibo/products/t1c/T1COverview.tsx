import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

export function T1COverview({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);

  return (
    <div
      id="overview"
      className="font-orvibo text-[16px] leading-[1.6] text-[#666666]"
    >
      {/* t1c_index_sec1 */}
      <div
        className="bg-center w-full h-[970px] bg-no-repeat bg-cover"
        style={bg(
          "/guanwang_second/front/images/new/products/t1c/index_bg1-b5743b7f1a.webp",
        )}
      >
        {/* content */}
        <div className="mx-auto w-[1200px] relative">
          <h2 className="pt-[290px] font-normal text-[#d9a893] tracking-[2px] text-[44px] whitespace-nowrap">
            {t("content.content")}
          </h2>
          <OrviboWatchTrigger
            videoSrc="/8f4239b1vodgzp1251222210/482fe3105285890786771148230/GbmAMgU2tysA.mp4"
            showPlayIcon={false}
            className="relative mt-[260px] block h-[130px] w-[261px]"
          >
            <span
              className="absolute inset-0 bg-center bg-no-repeat"
              style={bg(
                "/guanwang_second/front/images/new/products/t1c/video_pic-0c577e67b7.webp",
              )}
            />
            <span
              className="absolute top-1/2 left-1/2 -mt-[20px] -ml-[20px] block h-[40px] w-[40px] bg-center bg-no-repeat"
              style={bg(
                "/guanwang_second/front/images/new/products/t1c/video_icon-b2d222fd1c.webp",
              )}
            />
            <span className="sr-only">{t("content.video")}</span>
          </OrviboWatchTrigger>
          <p className="mt-[140px] text-[14px] text-[#b0b0b0]">
            {t("content.content2")}
          </p>
        </div>
      </div>
      {/* t1c_index_sec2 */}
      <div
        className="bg-center w-full h-[957px] bg-no-repeat bg-cover"
        style={bg(
          "/guanwang_second/front/images/new/products/t1c/index_bg2-57f377c4dd.webp",
        )}
      >
        {/* tis2_content */}
        <div className="mx-auto w-[1200px]">
          <h2 className="pt-[240px] pb-[20px] text-white text-[42px] leading-[60px] font-normal max-w-[7.4rem]">
            {t("tis2_content.tis2_content")}
          </h2>
          <p className="text-white text-[18px] leading-[30px] font-normal max-w-[6.4rem] text-pretty">
            {t("tis2_content.tis2_content2")}
          </p>
        </div>
      </div>
      {/* t1c_index_sec3 */}
      <div
        className="bg-center w-full h-[1157px] bg-no-repeat bg-cover"
        style={bg(
          "/guanwang_second/front/images/new/products/t1c/index_bg3-8111ed90fe.webp",
        )}
      >
        {/* tis3_content */}
        <div className="mx-auto w-[1200px]">
          <h2 className="pt-[80px] pb-[20px] text-[42px] leading-[50px] font-normal text-white text-center px-[0.2rem] text-balance">
            {t("tis3_content.tis3_content")}
          </h2>
          <p className="text-white text-[18px] leading-[30px] font-normal text-center max-w-[10rem] mx-auto px-[0.2rem] text-balance">
            {t("tis3_content.tis3_content2")}
          </p>
        </div>
      </div>
      {/* t1c_index_sec4 */}
      <div
        className="bg-center w-full h-[1068px] bg-no-repeat bg-cover"
        style={bg(
          "/guanwang_second/front/images/new/products/t1c/index_bg4-9e42640d78.webp",
        )}
      >
        {/* tis4_content */}
        <div className="mx-auto w-[1200px] relative">
          <h2 className="pt-[380px] pb-[20px] font-normal text-[#282828] max-w-[6rem] text-[38px] leading-[54px]">
            {t("tis4_content.tis4_content")}
          </h2>
          <p className="text-[#282828] text-[18px] leading-[30px] font-normal max-w-[5.8rem] text-pretty">
            {t("tis4_content.tis4_content2")}
          </p>
          <div
            className="bg-center absolute top-[462px] left-[756px] w-[105px] h-[105px] bg-no-repeat bg-cover"
            style={bg(
              "/guanwang_second/front/images/new/products/t1c/alarm-d9f89c0000.webp",
            )}
          />
          <div
            className="bg-center animate-tap-ripple motion-reduce:animate-none absolute top-[154px] left-[448px] w-[725px] h-[725px] opacity-0 bg-no-repeat bg-cover"
            style={bg(
              "/guanwang_second/front/images/new/products/t1c/circle-fc90764108.webp",
            )}
          />
        </div>
      </div>
      {/* t1c_index_sec5 */}
      <div
        className="bg-center w-full h-[1020px] bg-no-repeat bg-cover"
        style={bg(
          "/guanwang_second/front/images/new/products/t1c/index_bg5-199eef4ed7.webp",
        )}
      >
        {/* tis5_content */}
        <div className="mx-auto w-[1200px]">
          <h2 className="pt-[80px] pb-[20px] text-[42px] leading-[50px] font-normal text-white text-center px-[0.2rem] text-balance">
            {t("tis5_content.tis5_content")}
          </h2>
          <p className="text-white text-[18px] leading-[30px] font-normal text-center max-w-[11.9rem] mx-auto px-[0.2rem] text-balance">
            {t("tis5_content.tis5_content2")}
          </p>
        </div>
      </div>
      {/* t1c_index_sec6 */}
      <div
        className="bg-center w-full h-[1068px] bg-no-repeat bg-cover"
        style={bg(
          "/guanwang_second/front/images/new/products/t1c/index_bg6-03149c5d25.webp",
        )}
      >
        {/* tis6_content */}
        <div className="mx-auto w-[1200px]">
          <h2 className="pt-[140px] pb-[20px] text-white text-[42px] leading-[60px] font-normal max-w-[7.6rem]">
            {t("tis6_content.tis6_content")}
          </h2>
          <p className="text-white text-[18px] leading-[30px] font-normal max-w-[7.6rem] text-pretty">
            {t("tis6_content.tis6_content2")}
          </p>
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
