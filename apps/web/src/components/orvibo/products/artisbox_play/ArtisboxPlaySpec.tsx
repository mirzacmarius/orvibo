import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";
import { Fragment } from "react";

/** The parameters: label key, value key, in orvibo.com's order. */
const ROWS = [
  ["install_container.params_item", "install_container.params_item12"],
  ["install_container.params_item2", "spec.size"],
  ["install_container.params_item3", "install_container.params_item13"],
  ["install_container.params_item4", "install_container.params_item14"],
  ["install_container.params_item5", "install_container.params_item15"],
  ["install_container.params_item6", "spec.mixpad_range"],
  ["install_container.params_item7", "spec.pair_range"],
  ["install_container.params_item8", "install_container.params_item16"],
  ["install_container.params_item9", "spec.input"],
  ["install_container.params_item10", "install_container.params_item17"],
  ["install_container.params_item11", "install_container.params_item18"],
] as const;

const HEADING =
  "w-[3rem] shrink-0 text-[0.3rem] font-semibold tracking-[0.02rem] text-[#111111]";

export function ArtisboxPlaySpec({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* artisbox__install */}
      <div id="spec" className="mx-auto w-[12rem] min-w-[1280px]">
        <div className="flex h-[4.12rem] items-center border-b border-b-[#cfcfcf]">
          <h2 className={HEADING}>{t("install_container.appearance_title")}</h2>
          <Image
            src={img(
              "/guanwang_second/front/images/products/artisbox_play/product-0a99af25fd.webp",
            )}
            alt={ts("alt.product")}
            width={300}
            height={300}
            unoptimized
            className="h-[2.25rem] w-[2.25rem] object-contain"
          />
        </div>
        <div className="flex min-h-[4.63rem] py-[0.92rem]">
          <h2 className={HEADING}>{t("install_container.params_title")}</h2>
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
