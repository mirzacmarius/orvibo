import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/**
 * The kit's three products and their spec lines, in orvibo.com's three
 * columns. Each line is one `spec.<product>.<key>` string ("Label: value").
 */
const COLUMNS = [
  {
    id: "switch",
    width: "w-[4.2rem]",
    keys: [
      "name",
      "cpu",
      "screen",
      "touch",
      "mic",
      "body",
      "power",
      "scenes",
      "network",
    ],
  },
  {
    id: "motor",
    width: "w-[3.7rem]",
    keys: [
      "name",
      "model",
      "size",
      "power",
      "input",
      "current",
      "torque",
      "speed",
      "temp",
      "wifi",
      "warranty",
    ],
  },
  {
    id: "track",
    width: "w-[3.4rem]",
    keys: ["name", "model", "length", "load", "wall", "width"],
  },
];

/**
 * The spec tab (orvibo.com's chuangliansmart_install page): the switch, motor
 * and track side by side, each label in bold. A line too long for its column
 * wraps with a hanging indent, so each spec still starts at the margin.
 */
export function ChuangliansmartSpec({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { ts, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="spec" className="pb-[1.4rem]">
        <h2 className="pt-[0.99rem] pb-[0.7rem] text-center text-[0.48rem] font-extrabold leading-[0.77rem] text-[#111111]">
          {common.productSpecTitle}
        </h2>
        <div className="mx-auto flex w-[12rem] justify-between pb-[0.9rem]">
          {COLUMNS.map((column) => (
            <ul
              key={column.id}
              className={`${column.width} text-[0.16rem] leading-[0.32rem] text-[#111111]`}
            >
              {column.keys.map((key) => {
                const line = ts(`spec.${column.id}.${key}`);
                const at = line.indexOf(": ");
                return (
                  <li key={key} className="pl-[0.24rem] -indent-[0.24rem]">
                    <span className="font-extrabold">
                      {line.slice(0, at + 1)}
                    </span>{" "}
                    {line.slice(at + 2)}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
        <p className="mx-auto w-[12rem] text-[16px] leading-[22px] text-[#111111]/60">
          {common.productSpecNote}
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
