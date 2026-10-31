import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import Image from "next/image";

/**
 * The groups after the picture: the title key and the row numbers (label
 * parameter.l<n>, value parameter.v<n>), orvibo.com's left and right lists
 * paired row by row.
 */
const GROUPS = [
  { title: "parameter.title2", rows: [1, 7, 2, 8, 3, 9, 4, 10, 5, 11, 6, 12] },
  { title: "parameter.title3", rows: [13, 15, 14] },
  { title: "parameter.title4", rows: [16, 19, 17, 20, 18] },
  { title: "parameter.title5", rows: [21, 23, 22] },
  { title: "parameter.title6", rows: [24, 27, 25, 28, 26] },
  { title: "parameter.title7", rows: [29, 31, 30] },
] as const;

/** orvibo.com's long H.264 row runs into the right list: it takes both columns. */
const WIDE_ROW = 14;

export function YuntaiSpec({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="spec" className="relative">
        <div className="relative mx-auto h-[3.97rem] w-[12rem] border-b border-b-[#111111]/20">
          <h2 className="absolute left-0 text-[0.3rem] leading-[1em] font-semibold text-[#111111] top-[1.77rem]">
            {t("parameter.title")}
          </h2>
          <Image
            src={img(
              "/guanwang_second/front/images/2019/products/yuntai/yuntai-507bd9201e.webp",
            )}
            alt={ts("alt.product")}
            width={117}
            height={164}
            unoptimized
            className="absolute top-[1.25rem] left-[2.99rem] h-[1.64rem] w-[1.17rem]"
          />
        </div>
        {GROUPS.map((group, index) => (
          <div
            key={group.title}
            className={cn(
              "relative mx-auto w-[12rem] pl-[3rem] pt-[0.86rem]",
              index === GROUPS.length - 1
                ? "pb-[2.34rem]"
                : "border-b border-b-[#111111]/20 pb-[0.98rem]",
            )}
          >
            <h2 className="absolute left-0 text-[0.3rem] leading-[1em] font-semibold text-[#111111] top-[0.92rem]">
              {t(group.title)}
            </h2>
            <dl className="grid grid-cols-[4.9rem_3.92rem] gap-x-[0.18rem] gap-y-[0.18rem] text-[0.2rem] leading-[0.3rem] text-[#111111]">
              {group.rows.map((n) => (
                <div
                  key={n}
                  className={cn(
                    "flex gap-x-[0.3em]",
                    n === WIDE_ROW && "col-span-2",
                  )}
                >
                  <dt className="shrink-0">{t(`parameter.l${n}`)}</dt>
                  <dd>{t(`parameter.v${n}`)}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
        <p className="absolute bottom-[1.18rem] left-1/2 -translate-x-1/2 whitespace-nowrap text-[16px] text-[#111111]/60">
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
