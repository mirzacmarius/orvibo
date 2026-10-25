import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

export function BodysensorSpec({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* pd_content */}
      <div
        id="spec"
        className="relative h-[920px] bg-center bg-no-repeat text-white"
        style={bg(
          "/guanwang_second/front/images/products/bodysensor/11-878a49c393.webp",
        )}
      >
        <h2 className="absolute top-[236.5px] left-1/2 ml-[115px] text-[44px] leading-[56px]">
          {t("spec.title")}
        </h2>
        <dl className="absolute top-[355.5px] left-1/2 ml-[115px] whitespace-nowrap text-[17px] leading-[30px]">
          <div className="flex gap-x-[0.3em]">
            <dt>{t("spec.l1")}</dt>
            <dd>{t("spec.v1")}</dd>
          </div>
          <div className="flex gap-x-[0.3em]">
            <dt>{t("spec.l2")}</dt>
            <dd>{t("spec.v2")}</dd>
          </div>
          <div className="flex gap-x-[0.3em]">
            <dt>{t("spec.l3")}</dt>
            <dd>{t("spec.v3")}</dd>
          </div>
          <div className="flex gap-x-[0.3em]">
            <dt>{t("spec.l4")}</dt>
            <dd>{t("spec.v4")}</dd>
          </div>
          <div className="flex gap-x-[0.3em]">
            <dt>{t("spec.l5")}</dt>
            <dd>{t("spec.v5")}</dd>
          </div>
          <div className="flex gap-x-[0.3em]">
            <dt>{t("spec.l6")}</dt>
            <dd>{t("spec.v6")}</dd>
          </div>
          <div className="flex gap-x-[0.3em]">
            <dt>{t("spec.l7")}</dt>
            <dd>{t("spec.v7")}</dd>
          </div>
          <div className="flex gap-x-[0.3em]">
            <dt>{t("spec.l8")}</dt>
            <dd>{t("spec.v8")}</dd>
          </div>
          <div className="flex gap-x-[0.3em]">
            <dt>{t("spec.l9")}</dt>
            <dd>{t("spec.v9")}</dd>
          </div>
        </dl>
        <p className="absolute right-[40px] bottom-[240px] left-1/2 ml-[115px] text-[16px] text-white/60">
          {t("pd_img.data_source_tips_white")}
        </p>
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
