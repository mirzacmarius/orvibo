import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

export function DownlightOverview({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* banner lazy sec1 */}
      <div
        id="overview"
        className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[8.02rem]"
        style={bg(
          "/guanwang_second/front/images/2019/products/downlight/sec1-100da04dd7.webp",
        )}
      >
        {/* title */}
        <div className="ml-[-6.67rem] text-center text-[#111111] text-[0.54rem] font-semibold left-1/2 tracking-[0.02rem] absolute top-[3.13rem] leading-[1em] opacity-[0.9]">
          {t("sec1.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] ml-[-6.67rem] text-center text-[#111111] text-[0.3rem] tracking-[0.02rem] left-1/2 absolute top-[2.52rem] leading-[1em]">
          {t("sec1.desc")}
        </div>
      </div>
      {/* banner lazy sec2 */}
      <div
        className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[14.8rem]"
        style={bg(
          "/guanwang_second/front/images/2019/products/downlight/sec2-327536099a.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.23rem] tracking-[0.02rem] text-center text-[#111111] text-[0.48rem] font-semibold">
          {t("sec2.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-center text-[#111111] text-[0.24rem] tracking-[0.01rem] max-w-[15.8rem] mx-auto">
          {t("sec2.desc")}
        </div>
      </div>
      {/* banner lazy sec3 */}
      <div
        className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[25.88rem]"
        style={bg(
          "/guanwang_second/front/images/2019/products/downlight/sec3-8c946a2150.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.26rem] tracking-[0.02rem] text-center text-[#111111] text-[0.48rem] font-semibold">
          {t("sec3.title")}
        </div>
      </div>
      {/* banner lazy sec10 */}
      <div
        className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[13.94rem]"
        style={bg(
          "/guanwang_second/front/images/2019/products/downlight/sec10-1af87de76e.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.26rem] tracking-[0.02rem] text-center text-[#111111] text-[0.48rem] font-semibold">
          {t("sec10.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-center text-[#111111] text-[0.24rem] tracking-[0.01rem] max-w-[14.2rem] mx-auto">
          {t("sec10.desc")}
        </div>
      </div>
      {/* banner lazy sec11 */}
      <div
        className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[10.89rem]"
        style={bg(
          "/guanwang_second/front/images/2019/products/downlight/sec11-539dd5569d.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.26rem] tracking-[0.02rem] text-center text-[#111111] text-[0.48rem] font-semibold">
          {t("sec11.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-center text-[#111111] text-[0.24rem] tracking-[0.01rem] max-w-[13.6rem] mx-auto">
          {t("sec11.desc")}
        </div>
      </div>
      {/* banner lazy sec4 */}
      <div
        className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[11.92rem]"
        style={bg(
          "/guanwang_second/front/images/2019/products/downlight/sec4-88c563e769.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.26rem] tracking-[0.02rem] text-center text-[#111111] text-[0.48rem] font-semibold">
          {t("sec4.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-center text-[#111111] text-[0.24rem] tracking-[0.01rem] max-w-[12.5rem] mx-auto">
          {t("sec4.desc")}
        </div>
      </div>
      {/* banner lazy sec5 */}
      <div
        className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[18.27rem]"
        style={bg(
          "/guanwang_second/front/images/2019/products/downlight/sec5-9c1b6dbe45.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.26rem] tracking-[0.02rem] text-center text-[#111111] text-[0.48rem] font-semibold">
          {t("sec5.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-center text-[#111111] text-[0.24rem] tracking-[0.01rem] max-w-[14.8rem] mx-auto">
          {t("sec5.desc")}
        </div>
      </div>
      {/* banner lazy sec6 */}
      <div
        className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[15.1rem]"
        style={bg(
          "/guanwang_second/front/images/2019/products/downlight/sec6-0bd5f54b27.webp",
        )}
      >
        {/* title */}
        <div className="mt-[2.65rem] tracking-[0.02rem] text-center text-[#111111] text-[0.54rem] font-semibold">
          {t("sec6.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-center text-[#111111] text-[0.24rem] tracking-[0.01rem] max-w-[10.7rem] mx-auto">
          {t("sec6.desc")}
        </div>
      </div>
      {/* banner lazy sec7 */}
      <div
        className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[14.33rem]"
        style={bg(
          "/guanwang_second/front/images/2019/products/downlight/sec7-f964f6bde1.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.26rem] tracking-[0.02rem] text-center text-[#111111] text-[0.48rem] font-semibold">
          {t("sec7.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-center text-[#111111] text-[0.24rem] tracking-[0.01rem]">
          {t("sec7.desc")}
        </div>
      </div>
      {/* banner lazy sec8 */}
      <div
        className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[13.71rem]"
        style={bg(
          "/guanwang_second/front/images/2019/products/downlight/sec8-e559f600a7.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.1rem] tracking-[0.02rem] text-center text-white text-[0.48rem] font-semibold">
          {t("sec8.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-center text-white text-[0.24rem] tracking-[0.01rem] max-w-[14.9rem] mx-auto">
          {t("sec8.desc")}
        </div>
      </div>
      {/* banner lazy sec9 */}
      <div
        className="bg-center mx-auto min-w-[1280px] overflow-hidden relative bg-cover bg-no-repeat h-[9.78rem]"
        style={bg(
          "/guanwang_second/front/images/2019/products/downlight/sec9-0d5134efc1.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.26rem] tracking-[0.02rem] text-center text-[#111111] text-[0.54rem] font-semibold">
          {t("sec9.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-center text-[#111111] text-[0.24rem] tracking-[0.01rem]">
          {t("sec9.desc")}
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
