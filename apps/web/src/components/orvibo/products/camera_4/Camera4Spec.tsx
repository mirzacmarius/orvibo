import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** The spec list: label and value keys, in orvibo.com's order. */
const SPEC = [
  ["block.l1", "block.v1"],
  ["block.l2", "block.v2"],
  ["block.l3", "block.v3"],
  ["block.l4", "block.v4"],
  ["block.l5", "block.v5"],
  ["block.l6", "block.v6"],
  ["block.l7", "block.v7"],
  ["block.l8", "block.v8"],
  ["block.l9", "block.v9"],
  ["block.l10", "block.v10"],
  ["block.l11", "block.v11"],
  ["block.l12", "block.v12"],
] as const;

export function Camera4Spec({ locale, text, common }: ProductViewProps) {
  const { t, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div
        id="spec"
        className="relative mx-auto w-[1200px] border-b border-b-[#111111]/20 pt-[30px] pb-[160px]"
      >
        <div className="flex py-[90px]">
          <h2 className="w-[300px] shrink-0 text-[30px] leading-[1.6em] font-semibold text-[#111111]">
            {t("block.title")}
          </h2>
          <dl className="my-[-10px] flex-1 text-[16px] leading-[32px] text-[#111111]">
            {SPEC.map(([label, value]) => (
              <div key={label} className="flex gap-x-[0.3em]">
                <dt>{t(label)}</dt>
                <dd>{t(value)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="absolute right-0 bottom-[120px] left-[300px] text-[14px] leading-[40px] text-[#111111]/60">
          {t("block.note")}
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
