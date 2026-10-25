import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";
import { Fragment } from "react";

/** A cell: a figure (the same in every language) or a `spec.*` text key. */
type Cell = ({ value: string } | { key: string }) & { span?: number };

type Table = {
  title: string;
  /** The label column, then one equal column per product. */
  grid: string;
  /** The product photos' width. */
  photo: string;
  products: { image: string; name: string }[];
  rows: { label: string; cells: Cell[] }[];
};

const DIR = "/guanwang_second/front/images/new/products/q";
const NONE: Cell = { value: "—" };
const SPAN: Record<number, string> = {
  1: "",
  2: "col-span-2",
  6: "col-span-6",
  7: "col-span-7",
};

const figures = (...values: string[]): Cell[] =>
  values.map((value) => ({ value }));

const TABLES: Table[] = [
  {
    title: "spec.track.title",
    grid: "grid-cols-[1.8rem_repeat(7,minmax(0,1fr))]",
    photo: "w-[1.01rem]",
    products: [
      { image: `${DIR}/prd_01-a23b8d811e.webp`, name: "spec.track.flood8" },
      { image: `${DIR}/prd_02-d12052f526.webp`, name: "spec.track.flood15" },
      { image: `${DIR}/prd_03-4d558d8e4f.webp`, name: "spec.track.grille8" },
      { image: `${DIR}/prd_04-bc8e78df88.webp`, name: "spec.track.grille15" },
      { image: `${DIR}/prd_05-16e7393ec3.webp`, name: "spec.track.fold12" },
      { image: `${DIR}/prd_06-0730a39796.webp`, name: "spec.track.spot8" },
      { image: `${DIR}/prd_07-53689b8b54.webp`, name: "spec.track.module" },
    ],
    rows: [
      {
        label: "spec.row.size",
        cells: figures(
          "L300 × W22 × H45 mm",
          "L600 × W22 × H45 mm",
          "L220 × W22 × H45 mm",
          "L440 × W22 × H45 mm",
          "L218 × W105 × H21 mm",
          "Ø45 × 100 mm",
          "L132 × W22 × H45 mm",
        ),
      },
      { label: "spec.row.cri", cells: [{ value: "Ra ≥ 90", span: 6 }, NONE] },
      {
        label: "spec.row.power",
        cells: [...figures("8 W", "15 W", "8 W", "15 W", "12 W", "8 W"), NONE],
      },
      { label: "spec.row.cct", cells: [{ key: "spec.cct", span: 6 }, NONE] },
      {
        label: "spec.row.flux",
        cells: [
          ...figures(
            "≥ 480 lm",
            "≥ 900 lm",
            "≥ 520 lm",
            "≥ 975 lm",
            "≥ 780 lm",
            "≥ 440 lm",
          ),
          NONE,
        ],
      },
      {
        label: "spec.row.mount",
        cells: [{ key: "spec.track.mount", span: 7 }],
      },
      {
        label: "spec.row.control",
        cells: [{ key: "spec.track.control", span: 7 }],
      },
    ],
  },
  {
    title: "spec.recessed.title",
    grid: "grid-cols-[1.8rem_repeat(2,minmax(0,1fr))]",
    photo: "w-[1.2rem]",
    products: [
      { image: `${DIR}/prd_08-871c04cc94.webp`, name: "spec.recessed.spot" },
      { image: `${DIR}/prd_09-f96458ed33.webp`, name: "spec.recessed.down" },
    ],
    rows: [
      {
        label: "spec.row.size",
        cells: figures("75 × 75 × 95 mm", "Ø84 × 70 mm"),
      },
      { label: "spec.row.cri", cells: [{ value: "Ra ≥ 90", span: 2 }] },
      { label: "spec.row.power", cells: [{ value: "9 W", span: 2 }] },
      { label: "spec.row.cct", cells: [{ key: "spec.cct", span: 2 }] },
      {
        label: "spec.row.flux",
        cells: figures(
          "≥ 630 lm / ≥ 680 lm / ≥ 720 lm",
          "≥ 580 lm / ≥ 630 lm / ≥ 670 lm",
        ),
      },
      {
        label: "spec.row.mount",
        cells: [{ key: "spec.recessed.mount", span: 2 }],
      },
      {
        label: "spec.row.control",
        cells: [{ key: "spec.recessed.control", span: 2 }],
      },
    ],
  },
];

const BORDER = "border-b border-l border-[#dcdcdc]";
const LABEL = `${BORDER} flex items-center py-[0.1rem] pr-[0.1rem] pl-[0.2rem] leading-[0.22rem]`;
const CELL = `${BORDER} flex min-h-[0.48rem] items-center justify-center px-[0.06rem] py-[0.1rem] text-center text-[0.16rem] leading-[0.22rem] text-[#111111]`;

/**
 * The spec tab (orvibo.com's q_install page): one table per product family,
 * a photo and a name per column, then the figures; a value shared by several
 * products spans their columns, as on orvibo.com. The label column is wider
 * than CN's and rows grow when a name or a note takes two lines.
 */
export function SoproQSpec({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="spec" className="mx-auto w-[16rem] min-w-[1280px] pb-[1rem]">
        <h2 className="pt-[0.99rem] pb-[0.8rem] text-center text-[0.48rem] font-extrabold leading-[0.66rem] text-[#111111]">
          {t("spec.title")}
        </h2>
        {TABLES.map((table) => (
          <section key={table.title} className="mt-[0.8rem]">
            <h3 className="flex h-[0.8rem] items-center justify-center bg-[#dcdcdc] text-[0.24rem] text-[#111111]">
              {t(table.title)}
            </h3>
            <div className={`grid border-r border-[#dcdcdc] ${table.grid}`}>
              <div className={LABEL}>{t("spec.row.image")}</div>
              {table.products.map((product) => (
                <div key={product.name} className={`${CELL} h-[1.52rem]`}>
                  <Image
                    src={img(product.image)}
                    alt={ts(product.name)}
                    width={250}
                    height={250}
                    unoptimized
                    className={table.photo}
                  />
                </div>
              ))}
              <div className={LABEL}>{t("spec.row.name")}</div>
              {table.products.map((product) => (
                <div key={product.name} className={CELL}>
                  {t(product.name)}
                </div>
              ))}
              {table.rows.map((row) => {
                let column = 0;
                return (
                  <Fragment key={row.label}>
                    <div className={LABEL}>{t(row.label)}</div>
                    {row.cells.map((cell) => {
                      const span = cell.span ?? 1;
                      const key = `${row.label}-${column}`;
                      column += span;
                      return (
                        <div key={key} className={`${CELL} ${SPAN[span]}`}>
                          {"key" in cell ? t(cell.key) : cell.value}
                        </div>
                      );
                    })}
                  </Fragment>
                );
              })}
            </div>
          </section>
        ))}
        <p className="mt-[0.8rem] text-center text-[0.16rem] leading-[0.22rem] text-[#111111]">
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
