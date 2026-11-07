import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

const XF = "/html/images/products/xiaofang/xf_icons.webp";

export function XiaofangSpec({ locale, text, common }: ProductViewProps) {
  const { t, ts, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* xf_page xf_ten */}
      <section
        id="spec"
        className="min-h-[950px] bg-white pb-[120px]"
        style={pseudoBg("after", XF)}
      >
        <div className="mx-auto w-[1190px] pt-[136px] text-center">
          <h2 className="text-[30px] text-[#333333]">
            {t("xf_page.xt_title")}
          </h2>
          <div
            className="h-[9px] w-[1150px] bg-[position:-22px_-493px] bg-no-repeat"
            style={bg(XF)}
          />
          <div className="relative pt-[24px]">
            <h3 className="absolute top-[24px] left-[86px] text-[18px] text-[#333333]">
              {t("xf_page.xt_content_title")}
            </h3>
            <div
              role="img"
              aria-label={ts("alt.product")}
              className="mx-auto h-[180px] w-[236px] bg-[position:-627px_-287px] bg-no-repeat"
              style={bg(XF)}
            />
            <p className="mt-[10px] text-[16px] text-[#666666]">{"CT10W"}</p>
          </div>
          <div
            className="h-[9px] w-[1150px] bg-[position:-22px_-493px] bg-no-repeat"
            style={bg(XF)}
          />
          <dl className="grid grid-cols-2 text-left text-[18px] leading-[48px] text-[#333333]">
            <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pb-[9px] pl-[92px]">
              <dt className="inline">{t("xf_page.xt_item")} </dt>
              <dd className="inline text-[#888888]">{t("xf_page.xt_item2")}</dd>
            </div>
            <div className="pb-[9px] pl-[148px]">
              <dt className="inline">{t("xf_page.xt_item3")} </dt>
              <dd className="inline text-[#888888]">{"CT10W"}</dd>
            </div>
            <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pb-[9px] pl-[92px]">
              <dt className="inline">{t("xf_page.xt_item4")} </dt>
              <dd className="inline text-[#888888]">{t("spec.size")}</dd>
            </div>
            <div className="pb-[9px] pl-[148px]">
              <dt className="inline">{t("xf_page.xt_item5")} </dt>
              <dd className="inline text-[#888888]">{t("xf_page.xt_item6")}</dd>
            </div>
            <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pb-[9px] pl-[92px]">
              <dt className="inline">{t("xf_page.xt_item7")} </dt>
              <dd className="inline text-[#888888]">{t("spec.weight")}</dd>
            </div>
            <div className="pb-[9px] pl-[148px]">
              <dt className="inline">{t("xf_page.xt_item8")} </dt>
              <dd className="inline text-[#888888]">{"GB 4943.1-2011"}</dd>
            </div>
            <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pb-[9px] pl-[92px]">
              <dt className="inline">{t("xf_page.xt_item9")} </dt>
              <dd className="inline text-[#888888]">
                {t("xf_page.xt_item10")}
              </dd>
            </div>
            <div className="pb-[9px] pl-[148px]">
              <dt className="inline">{t("xf_page.xt_item11")} </dt>
              <dd className="inline text-[#888888]">{t("spec.temp")}</dd>
            </div>
            <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pb-[9px] pl-[92px]">
              <dt className="inline">{t("xf_page.xt_item12")} </dt>
              <dd className="inline text-[#888888]">{t("spec.power")}</dd>
            </div>
            <div className="pb-[9px] pl-[148px]">
              <dt className="inline">{t("xf_page.xt_item13")} </dt>
              <dd className="inline text-[#888888]">
                {t("xf_page.xt_item14")}
              </dd>
            </div>
          </dl>
          <p className="relative after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pt-[9px] pr-[40px] pb-[18px] pl-[92px] text-left text-[18px] leading-[30px] text-[#333333]">
            {t("xf_page.xt_table")}
          </p>
          <p className="mt-[21px] pl-[97px] text-left text-[16px] text-[#111111]/60">
            {t("xf_page.data_source_tips")}
          </p>
        </div>
      </section>
      {/* product_detail_tips */}
      <div className="p-[60px] bg-[#202020]">
        <p className="mx-auto max-w-[1200px] text-[14px] leading-[24px] font-medium text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
