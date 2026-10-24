import type { ReactNode } from "react";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import { withLineBreaks } from "./productPageHelpers";

interface ProductSpecSheetProps {
  common: Dictionary["common"];
  /** One line per spec, in display order. */
  items: { key: string; text: ReactNode }[];
}

/**
 * The specifications tab most orvibo.com product pages share (`.install`):
 * a heading column, one line per spec, the lab-data note, then the disclaimer
 * band.
 */
export function ProductSpecSheet({ common, items }: ProductSpecSheetProps) {
  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div
        id="spec"
        className="relative mx-auto w-[1200px] border-b border-b-[#111111]/20 pt-[30px] pb-[160px]"
      >
        <div className="flex overflow-hidden py-[90px]">
          <h2 className="w-[300px] shrink-0 text-[30px] font-semibold leading-[1.6em] text-[#111111]">
            {common.productSpecTitle}
          </h2>
          <ul className="my-[-10px] flex-1">
            {items.map((item) => (
              <li
                key={item.key}
                className="text-[16px] leading-[32px] text-[#111111]"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <p className="absolute bottom-[120px] left-[300px] text-[14px] leading-[40px] text-[#111111]/60">
          {common.productSpecNote}
        </p>
      </div>
      <div className="bg-[#202020] p-[60px]">
        <p className="mx-auto max-w-[1200px] text-[14px] font-medium leading-[24px] text-white/80">
          {withLineBreaks(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
