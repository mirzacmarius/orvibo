import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";
import { Fragment } from "react";

/** The parameters: label key, value key, in orvibo.com's order. */
const ROWS = [
  ["install_params.params_item", "install_params.params_item21"],
  ["install_params.params_item2", "install_params.params_item22"],
  ["install_params.params_item3", "install_params.params_item23"],
  ["install_params.params_item4", "install_params.params_item24"],
  ["install_params.params_item5", "spec.station_capacity"],
  ["install_params.params_item6", "install_params.params_item25"],
  ["install_params.params_item7", "install_params.params_item26"],
  ["install_params.params_item8", "install_params.params_item27"],
  ["install_params.params_item9", "spec.area"],
  ["install_params.params_item10", "install_params.params_item28"],
  ["install_params.params_item11", "install_params.params_item29"],
  ["install_params.params_item12", "spec.suction"],
  ["install_params.params_item13", "install_params.params_item30"],
  ["install_params.params_item14", "spec.weight"],
  ["install_params.params_item15", "spec.station_weight"],
  ["install_params.params_item16", "install_params.params_item31"],
  ["install_params.params_item17", "spec.power"],
  ["install_params.params_item18", "spec.voltage"],
  ["install_params.params_item19", "spec.size"],
  ["install_params.params_item20", "spec.station_size"],
] as const;

const HEADING =
  "w-[3rem] shrink-0 text-[0.3rem] font-semibold tracking-[0.02rem] text-[#111111]";

export function RobotR2Spec({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* install__container */}
      <div id="spec" className="mx-auto w-[12rem] min-w-[1280px]">
        <div className="flex h-[4.12rem] items-center border-b border-b-[#cfcfcf]">
          <h2 className={HEADING}>
            {t("install_appearance.appearance_title")}
          </h2>
          <figure className="flex flex-col items-center">
            <Image
              src={img(
                "/guanwang_second/front/images/products/robot_r2/product-92305e1a8b.webp",
              )}
              alt={ts("alt.product")}
              width={800}
              height={800}
              unoptimized
              className="h-[2.25rem] w-[2.25rem] object-contain"
            />
            <figcaption className="mt-[0.2rem] text-[0.25rem] text-[#111111]">
              {t("install_appearance.appearance_desc2")}
            </figcaption>
          </figure>
        </div>
        <div className="flex min-h-[4.63rem] py-[0.92rem]">
          <h2 className={HEADING}>{t("install_params.params_title")}</h2>
          <dl className="grid grid-cols-[auto_1fr] content-start gap-x-[0.08rem] gap-y-[0.26rem] pt-[0.08rem] text-[0.2rem] leading-[1.2em]">
            {ROWS.map(([label, value]) => (
              <Fragment key={label}>
                <dt className="text-right">{t(label)}</dt>
                <dd>{t(value)}</dd>
              </Fragment>
            ))}
          </dl>
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
