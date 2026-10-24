import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import type { ReactNode } from "react";

/**
 * Column widths and gaps that line each column up with its product in the
 * background photo: the battery panel, the one-, two- and three-gang switches
 * and the socket. The last column runs on past the socket so its longer
 * values stay on one line.
 */
const COLUMNS = [
  "mr-[0.5rem] w-[2.53rem]",
  "mr-[0.5rem] w-[2.37rem]",
  "mr-[0.56rem] w-[2.37rem]",
  "mr-[0.59rem] w-[2.37rem]",
  "w-[2.4rem]",
];

const MODELS = ["T40S6Z", "T40W1Z", "T40W2Z", "T40W3Z", "T40K1"];
const NONE = "—";

/** Keeps a name's "(variant)" together, so a line never breaks inside it. */
function keepVariant(name: string): ReactNode {
  const at = name.indexOf(" (");
  if (at < 0) return name;
  return (
    <>
      {name.slice(0, at)}{" "}
      <span className="whitespace-nowrap">{name.slice(at + 1)}</span>
    </>
  );
}

/**
 * The MixSwitch spec tab: one column per product under its photo, as on
 * orvibo.com. The photo keeps its size and the flat grey continues below it,
 * so longer rows never shift the columns off their products.
 */
export function MixpadSwitchSpec({ locale, text, common }: ProductViewProps) {
  const { t, ts, lines, bg } = productPageHelpers(locale, text);
  const five = (value: ReactNode) => Array.from({ length: 5 }, () => value);
  const mains = ts("spec.voltage.mains");
  const gang = ts("spec.load.gang");

  const rows: { key: string; label: ReactNode; cells: ReactNode[] }[] = [
    {
      key: "spec.name",
      label: t("spec.name"),
      cells: ["remote", "one", "two", "three", "socket"].map((id) =>
        keepVariant(ts(`spec.name.${id}`)),
      ),
    },
    {
      key: "spec.model",
      label: t("spec.model"),
      cells: MODELS.map((model) =>
        lines(
          `${model} ${ts("spec.gray")}\n${model}G ${ts("spec.gold")}\n${model}W ${ts("spec.white")}`,
        ),
      ),
    },
    {
      key: "spec.size",
      label: t("spec.size"),
      cells: [
        "86 × 86 × 10 mm",
        "86 × 86 × 40 mm",
        "86 × 86 × 40 mm",
        "86 × 86 × 40 mm",
        "86 × 86 × 35 mm",
      ],
    },
    {
      key: "spec.power",
      label: t("spec.power"),
      cells: [t("spec.power.battery"), ...five(t("spec.power.wired")).slice(1)],
    },
    {
      key: "spec.voltage",
      label: t("spec.voltage"),
      cells: [
        ts("spec.voltage.battery"),
        mains,
        mains,
        mains,
        ts("spec.voltage.socket"),
      ],
    },
    {
      key: "spec.load",
      label: t("spec.load"),
      cells: [NONE, gang, gang, gang, "2200 W"],
    },
    {
      key: "spec.protocol",
      label: t("spec.protocol"),
      cells: [...five("Zigbee").slice(1), NONE],
    },
    {
      key: "spec.temperature",
      label: t("spec.temperature"),
      cells: five(ts("spec.temperature.range")),
    },
    {
      key: "spec.humidity",
      label: t("spec.humidity"),
      cells: five("≤ 85% RH"),
    },
    {
      key: "spec.range",
      label: t("spec.range"),
      cells: [...five("80 m").slice(1), NONE],
    },
  ];

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div
        id="spec"
        className="min-h-[13rem] bg-[#898b8b] bg-[length:19.2rem_13rem] bg-top bg-no-repeat pt-[0.99rem] pb-[1.2rem]"
        style={bg(
          "/guanwang_second/front/images/products/mixpad_switch/params-612ace2cea.webp",
        )}
      >
        <h2 className="text-center text-[0.48rem] font-extrabold leading-[0.67rem] text-[#111111]">
          {common.productSpecTitle}
        </h2>
        <div className="relative left-1/2 ml-[-8.62rem] mt-[4.23rem] w-[16.46rem] text-[0.16rem] leading-[0.3rem] text-[#111111]">
          {rows.map((row) => (
            <div key={row.key} className="flex py-[0.05rem]">
              <div className="mr-[0.4rem] w-[1.9rem] shrink-0 font-extrabold">
                {row.label}
              </div>
              {row.cells.map((cell, i) => (
                <div
                  key={`${row.key}-${MODELS[i]}`}
                  className={`shrink-0 ${COLUMNS[i]}`}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-[0.7rem] text-center font-medium leading-[0.22rem] text-[#111111]">
          {common.productSpecNote}
        </p>
      </div>
      <div className="bg-[#202020] p-[60px]">
        <p className="mx-auto max-w-[1200px] text-[14px] font-medium leading-[24px] text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
