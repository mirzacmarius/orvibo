import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

export function DownlightPhone({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);

  return (
    <div
      id="overview-phone"
      className="font-orvibo text-[16px] leading-[1.6] text-[#333333]"
    >
      {/* sec1 bg */}
      <div
        className="bg-center overflow-hidden bg-cover bg-no-repeat relative h-[12.67rem]"
        style={bg(
          "/guanwang_second/front/mobile/images/products/downlight/sec1-d7c75cf8a2.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.1rem] text-center tracking-[0.02rem] text-[#111111] text-[0.56rem] leading-[1.15] font-bold text-balance px-[0.4rem]">
          {t("sec1.title")}
        </div>
        {/* subtitle */}
        <div className="mt-[0.22rem] text-center tracking-[0.02rem] text-[#111111] text-[0.288rem] leading-[1.15] text-balance">
          {t("sec1.desc")}
        </div>
      </div>
      {/* sec2 bg */}
      <div
        className="bg-center overflow-hidden bg-cover bg-no-repeat relative h-[14.56rem]"
        style={bg(
          "/guanwang_second/front/mobile/images/products/downlight/sec2-dcca071bac.webp",
        )}
      >
        {/* title */}
        <div className="mt-[0.85rem] text-center tracking-[0.02rem] text-[#111111] text-[0.384rem] font-bold text-balance">
          {t("sec2.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-center tracking-[0.02rem] text-[#111111] text-[0.208rem] opacity-[0.9] max-w-[8.8rem] mx-auto text-balance">
          {t("sec2.desc")}
        </div>
      </div>
      {/* sec3 bg */}
      <div
        className="bg-center mt-[0.21rem] overflow-hidden bg-cover bg-no-repeat relative h-[17.77rem]"
        style={bg(
          "/guanwang_second/front/mobile/images/products/downlight/sec3-d01c17a5e5.webp",
        )}
      >
        {/* title */}
        <div className="mt-[0.85rem] text-center tracking-[0.02rem] text-[#111111] text-[0.384rem] font-bold text-balance">
          {t("sec3.title")}
        </div>
      </div>
      {/* sec4 bg */}
      <div
        className="bg-center mt-[0.21rem] overflow-hidden bg-cover bg-no-repeat relative h-[14.99rem]"
        style={bg(
          "/guanwang_second/front/mobile/images/products/downlight/sec4-eb8c3e69e7.webp",
        )}
      >
        {/* title */}
        <div className="mt-[0.9rem] text-center tracking-[0.02rem] text-[0.336rem] font-bold text-[#111111] text-balance">
          {t("sec10.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-[0.208rem] text-center tracking-[0.02rem] text-[#111111] opacity-[0.8] max-w-[8.8rem] mx-auto text-balance">
          {t("sec10.desc")}
        </div>
      </div>
      {/* sec5 bg */}
      <div
        className="bg-center mt-[0.21rem] overflow-hidden bg-cover bg-no-repeat relative h-[19.09rem]"
        style={bg(
          "/guanwang_second/front/mobile/images/products/downlight/sec5-6a97c383a2.webp",
        )}
      >
        {/* title */}
        <div className="mt-[0.9rem] text-center tracking-[0.02rem] text-[0.336rem] font-bold text-[#111111] text-balance">
          {t("sec11.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] text-[0.208rem] opacity-[0.8] text-[#111111] text-center tracking-[0.02rem] max-w-[8.5rem] mx-auto text-balance">
          {t("sec11.desc")}
        </div>
      </div>
      {/* sec6 bg */}
      <div
        className="bg-center mt-[0.21rem] overflow-hidden bg-cover bg-no-repeat relative h-[12.34rem]"
        style={bg(
          "/guanwang_second/front/mobile/images/products/downlight/sec6-55edd8cd18.webp",
        )}
      >
        {/* title */}
        <div className="mt-[0.9rem] text-center tracking-[0.02rem] text-[0.336rem] text-[#111111] font-bold text-balance">
          {t("sec4.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] opacity-[0.8] text-[#111111] text-center tracking-[0.02rem] text-[0.208rem] max-w-[9.5rem] mx-auto text-balance">
          {t("sec4.desc")}
        </div>
      </div>
      {/* sec7 bg */}
      <div
        className="bg-center overflow-hidden bg-cover bg-no-repeat relative h-[14.75rem]"
        style={bg(
          "/guanwang_second/front/mobile/images/products/downlight/sec7-a1ede1daf2.webp",
        )}
      >
        {/* title */}
        <div className="mt-[0.9rem] text-center tracking-[0.02rem] text-[0.336rem] text-[#111111] font-bold text-balance">
          {t("sec5.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] opacity-[0.8] text-[#111111] text-center tracking-[0.02rem] text-[0.208rem] max-w-[8.4rem] mx-auto text-balance">
          {t("sec5.desc")}
        </div>
      </div>
      {/* sec8 bg */}
      <div
        className="bg-center overflow-hidden bg-cover bg-no-repeat relative h-[13.63rem]"
        style={bg(
          "/guanwang_second/front/mobile/images/products/downlight/sec8-279952c9c8.webp",
        )}
      >
        {/* title */}
        <div className="mt-[2.63rem] text-center tracking-[0.02rem] text-[0.336rem] text-[#111111] font-bold text-balance">
          {t("m.zigbee.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] opacity-[0.8] text-[#111111] text-center tracking-[0.02rem] text-[0.208rem] max-w-[8.7rem] mx-auto text-balance">
          {t("m.zigbee.desc")}
        </div>
      </div>
      {/* sec9 bg */}
      <div
        className="bg-center overflow-hidden bg-cover bg-no-repeat relative h-[11.7rem]"
        style={bg(
          "/guanwang_second/front/mobile/images/products/downlight/sec9-616bace2e5.webp",
        )}
      >
        {/* title */}
        <div className="mt-[0.85rem] text-center tracking-[0.02rem] text-[0.336rem] text-[#111111] font-bold text-balance">
          {t("sec7.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] opacity-[0.8] text-center tracking-[0.02rem] text-[0.208rem] text-[#111111] max-w-[8.3rem] mx-auto text-balance">
          {t("sec7.desc")}
        </div>
      </div>
      {/* sec10 bg */}
      <div
        className="bg-center overflow-hidden bg-cover bg-no-repeat relative h-[12.97rem]"
        style={bg(
          "/guanwang_second/front/mobile/images/products/downlight/sec10-f1c9d7fe71.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.6rem] text-[0.336rem] text-[#111111] tracking-[0.02rem] text-center font-bold text-balance">
          {t("sec8.title")}
        </div>
        {/* desc */}
        <div className="mt-[0.1rem] opacity-[0.8] text-center tracking-[0.02rem] text-[0.208rem] text-[#111111] max-w-[8.5rem] mx-auto text-balance">
          {t("sec8.desc")}
        </div>
      </div>
      {/* sec11 bg */}
      <div
        className="bg-center overflow-hidden bg-cover bg-no-repeat relative h-[12.54rem]"
        style={bg(
          "/guanwang_second/front/mobile/images/products/downlight/sec11-92468e2d8e.webp",
        )}
      >
        {/* title */}
        <div className="mt-[1.6rem] text-[0.336rem] text-[#111111] tracking-[0.02rem] text-center font-bold text-balance">
          {t("sec9.title")}
        </div>
      </div>
      {/* sec12 */}
      <div className="overflow-hidden bg-white">
        {/* title */}
        <div className="mt-[0.85rem] text-center tracking-[0.02rem] text-[0.368rem] text-[#111111] font-bold text-balance">
          {t("m.specTitle")}
        </div>
        {/* product tongdeng bg */}
        <div
          className="bg-center mx-auto mt-[0.8rem] overflow-hidden bg-cover bg-no-repeat relative w-[2.78rem] h-[2.11rem]"
          style={bg(
            "/guanwang_second/front/mobile/images/products/downlight/sec12_1-52400161a0.webp",
          )}
        />
        {/* name */}
        <div className="mt-[0.31rem] tracking-[0.02rem] text-[0.24rem] text-[#111111] text-center text-balance">
          {t("spec.downlight.name")}
        </div>
        {/* subtitle */}
        <div className="mx-[0.4rem] mt-[0.9rem] tracking-[0.02rem] text-[0.24rem] text-[#111111] font-bold">
          {t("m.params")}
        </div>
        {/* line */}
        <div className="mx-[0.4rem] mt-[0.16rem] h-[0.02rem] bg-[#cccccc]" />
        {/* parameter */}
        <div className="m-[0.4rem] overflow-hidden">
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.downlight.model")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.downlight.size")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.downlight.power")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.downlight.input")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.downlight.powerFactor")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.downlight.cri")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.downlight.cct")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("m.dimming")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.downlight.optics")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.downlight.other")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.downlight.protocol")}
          </div>
        </div>
        {/* line line2 */}
        <div className="mx-[0.4rem] mt-[0.35rem] h-[0.02rem] bg-[#cccccc]" />
        {/* product shedeng bg */}
        <div
          className="bg-center mx-auto mt-[0.8rem] overflow-hidden bg-cover bg-no-repeat relative w-[2.78rem] h-[2.11rem]"
          style={bg(
            "/guanwang_second/front/mobile/images/products/downlight/sec12_2-98a71a99f0.webp",
          )}
        />
        {/* name */}
        <div className="mt-[0.31rem] tracking-[0.02rem] text-[0.24rem] text-[#111111] text-center text-balance">
          {t("spec.spotlight.name")}
        </div>
        {/* subtitle */}
        <div className="mx-[0.4rem] mt-[0.9rem] tracking-[0.02rem] text-[0.24rem] text-[#111111] font-bold">
          {t("m.params")}
        </div>
        {/* line */}
        <div className="mx-[0.4rem] mt-[0.16rem] h-[0.02rem] bg-[#cccccc]" />
        {/* parameter */}
        <div className="m-[0.4rem] overflow-hidden">
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.spotlight.model")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.spotlight.size")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.spotlight.power")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.spotlight.input")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.spotlight.powerFactor")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.spotlight.cri")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.spotlight.cct")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("m.dimming")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.spotlight.optics")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.spotlight.other")}
          </div>
          <div className="pb-[0.4rem] text-[0.192rem] leading-[1.15] tracking-[0.01rem] text-[#111111]">
            {t("spec.spotlight.protocol")}
          </div>
        </div>
        {/* data_source_tips */}
        <section className="pt-[0.5rem] pr-[0.46rem] pb-[0.8rem] pl-[0.6rem] flex text-[0.192rem] leading-[1.6em] text-black/60 bg-white">
          <div className="shrink-0">{"*"}</div>
          <div className="flex-1">{t("m.labNote")}</div>
        </section>
      </div>
      {/* detail_tips */}
      <div className="px-[0.48rem] py-[0.6rem] w-full bg-[#202020]">
        <p className="text-[0.14rem] leading-[0.4rem] font-medium text-white/80 max-w-[19.5rem]">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
