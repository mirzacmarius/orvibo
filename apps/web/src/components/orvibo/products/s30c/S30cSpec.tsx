import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** The spec rows in orvibo.com's order (label parameter.l<n>, value parameter.v<n>). */
const ROWS = [1, 2, 3, 4, 5, 6, 7] as const;

export function S30cSpec({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div
        id="spec"
        className="relative h-[5.62rem] bg-cover bg-center bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/s30c/s30c_sec9-fc07d3dd61.webp",
        )}
      >
        <div className="mx-auto flex w-[12rem] pt-[1.4rem]">
          <h2 className="w-[3.6rem] shrink-0 text-[0.3rem] leading-[1.6] font-black text-[#111111]">
            {t("parameter.title")}
          </h2>
          <dl className="mt-[0.1rem] max-w-[4.4rem] text-[0.16rem] leading-[1.6] font-normal text-[#111111]">
            {ROWS.map((n) => (
              <div key={n} className="mb-[0.16rem] flex gap-x-[0.3em]">
                <dt className="shrink-0">{t(`parameter.l${n}`)}</dt>
                <dd>{t(`parameter.v${n}`)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="sr-only">{t("alt.size")}</p>
        <p className="absolute bottom-[30px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-medium text-[#111111]/60">
          {t("data_source_tips.data_source_tips")}
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
