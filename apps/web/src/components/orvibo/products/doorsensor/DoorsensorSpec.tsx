import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

const XF = "/html/images/products/xiaofang/xf_icons.webp";

export function DoorsensorSpec({ locale, text, common }: ProductViewProps) {
  const { t, ts, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* ds_page ds_ten */}
      <section
        id="spec"
        className="relative h-[950px] bg-white"
        style={pseudoBg("after", XF)}
      >
        <div className="mx-auto w-[1190px] pt-[136px] text-center">
          <h2 className="text-[30px] text-[#333333]">
            {t("ds_page.dt_spec_title")}
          </h2>
          <div
            className="h-[9px] w-[1150px] bg-[position:-22px_-493px] bg-no-repeat"
            style={bg(XF)}
          />
          <div className="relative pt-[24px]">
            <h3 className="absolute top-[24px] left-[86px] text-[18px] text-[#333333]">
              {t("ds_page.dt_content_title")}
            </h3>
            <div
              role="img"
              aria-label={ts("ds_page.dt_item2")}
              className="mx-auto h-[180px] w-[139px] bg-[position:-417px_0] bg-no-repeat"
              style={bg("/html/images/products/suite/door_icons.webp")}
            />
            <p className="mt-[10px] text-[16px] text-[#666666]">{"CT10"}</p>
          </div>
          <div
            className="h-[9px] w-[1150px] bg-[position:-22px_-493px] bg-no-repeat"
            style={bg(XF)}
          />
          <dl className="grid grid-cols-2 text-left text-[18px] leading-[48px] text-[#333333]">
            <div className="relative pb-[9px] after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pl-[92px]">
              <dt className="inline">{t("ds_page.dt_item")} </dt>
              <dd className="inline text-[#888888]">{t("ds_page.dt_item2")}</dd>
            </div>
            <div className="pb-[9px] pl-[148px]">
              <dt className="inline">{t("ds_page.dt_item3")} </dt>
              <dd className="inline text-[#888888]">
                {t("ds_page.dt_item3v")}
              </dd>
            </div>
            <div className="relative pb-[9px] after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pl-[92px]">
              <dt className="inline">{t("ds_page.dt_item4")} </dt>
              <dd className="inline text-[#888888]">{t("ds_page.dt_item5")}</dd>
            </div>
            <div className="pb-[9px] pl-[148px]">
              <dt className="inline">{t("ds_page.dt_item6")} </dt>
              <dd className="inline text-[#888888]">{t("ds_page.dt_item7")}</dd>
            </div>
            <div className="relative pb-[9px] after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pl-[92px]">
              <dt className="inline">{t("ds_page.dt_item8")} </dt>
              <dd className="inline text-[#888888]">{t("ds_page.dt_item9")}</dd>
            </div>
            <div className="pb-[9px] pl-[148px]">
              <dt className="inline">{t("ds_page.dt_item10")} </dt>
              <dd className="inline text-[#888888]">
                {t("ds_page.dt_item10v")}
              </dd>
            </div>
            <div className="relative pb-[9px] after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pl-[92px]">
              <dt className="inline">{t("ds_page.dt_item11")} </dt>
              <dd className="inline text-[#888888]">
                {t("ds_page.dt_item12")}
              </dd>
            </div>
            <div className="pb-[9px] pl-[148px]">
              <dt className="inline">{t("ds_page.dt_item13")} </dt>
              <dd className="inline text-[#888888]">
                {t("ds_page.dt_item14")}
              </dd>
            </div>
            <div className="relative pb-[9px] after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pl-[92px]">
              <dt className="inline">{t("ds_page.dt_item15")} </dt>
              <dd className="inline text-[#888888]">
                {t("ds_page.dt_item16")}
              </dd>
            </div>
            <div className="pb-[9px] pl-[148px]">
              <dt className="inline">{t("ds_page.dt_item17")} </dt>
              <dd className="inline text-[#888888]">
                {t("ds_page.dt_item18")}
              </dd>
            </div>
            <div className="relative pb-[9px] after:absolute after:bottom-0 after:left-0 after:h-[9px] after:w-[1150px] after:bg-[image:var(--after-bg)] after:bg-[position:-22px_-493px] after:bg-no-repeat after:content-[''] pl-[92px]">
              <dt className="inline">{t("ds_page.dt_item19")} </dt>
              <dd className="inline text-[#888888]">
                {t("ds_page.dt_item20")}
              </dd>
            </div>
            <div className="pb-[9px] pl-[148px]">
              <dt className="inline">{t("ds_page.dt_item21")} </dt>
              <dd className="inline text-[#888888]">
                {t("ds_page.dt_item21v")}
              </dd>
            </div>
          </dl>
        </div>
        <p className="absolute bottom-[100px] left-1/2 ml-[-496px] text-[16px] text-[#111111]/60">
          {t("ds_page.data_source_tips")}
        </p>
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
