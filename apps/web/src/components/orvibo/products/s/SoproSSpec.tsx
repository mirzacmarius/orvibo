import { ProductSpecScroller } from "@/components/orvibo/product/ProductSpecScroller";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";
import { Fragment } from "react";

/** A cell: a figure (the same in every language) or a `spec.*` text key. */
type Cell = ({ value: string } | { key: string }) & { span?: number };

/** One grid: a column per product, then a row per spec. */
type Part = {
  products: { image: string; name: string }[];
  rows: { label: string; cells: Cell[] }[];
};

type Table = {
  title: string;
  /** Too many products to show at once: the columns scroll sideways. */
  scroll?: boolean;
  parts: Part[];
};

const NONE: Cell = { value: "—" };
const SPAN: Record<number, string> = {
  1: "",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  7: "col-span-7",
};
/** The label column, then one equal column per product. */
const GRID: Record<number, string> = {
  1: "grid-cols-[1.8rem_repeat(1,minmax(0,1fr))]",
  4: "grid-cols-[1.8rem_repeat(4,minmax(0,1fr))]",
  5: "grid-cols-[1.8rem_repeat(5,minmax(0,1fr))]",
  7: "grid-cols-[1.8rem_repeat(7,minmax(0,1fr))]",
};
/** A scrolling table: about seven product columns in view. */
const SCROLL_GRID = "grid-cols-[1.8rem_repeat(27,2.02rem)]";

const figures = (...values: string[]): Cell[] =>
  values.map((value) => ({ value }));

const TABLES: Table[] = [
  {
    title: "spec.downS.title",
    parts: [
      {
        products: [
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_01-4f5534e7d3.webp",
            name: "spec.name.DS20Z07A",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_02-4f5534e7d3.webp",
            name: "spec.name.DS20Z07B",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_03-4f5534e7d3.webp",
            name: "spec.name.DS20Z12A",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_04-4f5534e7d3.webp",
            name: "spec.name.DS20Z12B",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_05-2407f29d3d.webp",
            name: "spec.name.DT50Z07A",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_06-2cb761fd13.webp",
            name: "spec.name.DT40Z07A",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_07-3c47a9b777.webp",
            name: "spec.name.DT40Z07B",
          },
        ],
        rows: [
          {
            label: "spec.row.model",
            cells: figures(
              "DS20Z07A",
              "DS20Z07B",
              "DS20Z12A",
              "DS20Z12B",
              "DT50Z07A",
              "DT40Z07A",
              "DT40Z07B",
            ),
          },
          {
            label: "spec.row.cutout",
            cells: figures(
              "55 mm",
              "55 mm",
              "75 mm",
              "75 mm",
              "75 mm",
              "75–85 mm",
              "75–85 mm",
            ),
          },
          {
            label: "spec.row.size",
            cells: figures(
              "Ø55 × 83 mm",
              "Ø55 × 83 mm",
              "Ø75 × 112 mm",
              "Ø75 × 112 mm",
              "85 × 74 mm",
              "96 × 46 mm",
              "96 × 46 mm",
            ),
          },
          {
            label: "spec.row.optics",
            cells: [
              { key: "spec.v.adjustable" },
              { key: "spec.v.adjustable" },
              { key: "spec.v.adjustable" },
              { key: "spec.v.adjustable" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
            ],
          },
          {
            label: "spec.row.colors",
            cells: [NONE, NONE, NONE, NONE, { key: "spec.v.cups" }, NONE, NONE],
          },
          {
            label: "spec.row.cri",
            cells: figures(
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
            ),
          },
          {
            label: "spec.row.ugr",
            cells: [
              ...figures(
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 13",
                "UGR < 19",
              ),
              NONE,
            ],
          },
          {
            label: "spec.row.angle",
            cells: figures("24°", "36°", "24°", "36°", "24°", "24°", "105°"),
          },
          {
            label: "spec.row.power",
            cells: figures("7 W", "7 W", "12 W", "12 W", "7 W", "7 W", "7 W"),
          },
          {
            label: "spec.row.flux",
            cells: figures(
              "350 lm",
              "350 lm",
              "600 lm",
              "600 lm",
              "420 lm",
              "350 lm",
              "350 lm",
            ),
          },
          { label: "spec.row.cct", cells: [{ value: "2700–6000 K", span: 7 }] },
          {
            label: "spec.row.dimming",
            cells: [{ key: "spec.v.pwm", span: 7 }],
          },
          { label: "spec.row.depth", cells: [{ value: "0.01%", span: 7 }] },
          {
            label: "spec.row.frequency",
            cells: [{ value: "3.84 kHz", span: 7 }],
          },
          {
            label: "spec.row.material",
            cells: [{ key: "spec.v.alu", span: 7 }],
          },
        ],
      },
    ],
  },
  {
    title: "spec.track.title",
    parts: [
      {
        products: [
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_10-9c9bcb5adb.webp",
            name: "spec.name.DG10Z12B",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_11-bdc51833c1.webp",
            name: "spec.name.DD10Z06B",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_12-2741761beb.webp",
            name: "spec.name.DD10Z05A",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_13-6fd4f02ebc.webp",
            name: "spec.name.DD10Z15A",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_14-7a04a0572a.webp",
            name: "spec.name.DCZ08123",
          },
        ],
        rows: [
          {
            label: "spec.row.model",
            cells: figures(
              "DG10Z12B",
              "DD10Z06B",
              "DD10Z05A",
              "DD10Z15A",
              "DCZ08123",
            ),
          },
          { label: "spec.row.cutout", cells: [NONE, NONE, NONE, NONE, NONE] },
          {
            label: "spec.row.size",
            cells: [
              ...figures("222 × 22.5 × 110 mm"),
              { key: "spec.v.halfMoonSize" },
              { key: "spec.v.torchSize" },
              { key: "spec.v.torch3Size" },
              ...figures("207.5 × 22 × 25 mm"),
            ],
          },
          { label: "spec.row.optics", cells: [{ value: "—", span: 5 }] },
          { label: "spec.row.colors", cells: [{ value: "—", span: 5 }] },
          { label: "spec.row.cri", cells: [{ value: "Ra 90", span: 5 }] },
          { label: "spec.row.ugr", cells: [{ value: "—", span: 5 }] },
          {
            label: "spec.row.angle",
            cells: [...figures("24°"), NONE, ...figures("14°", "14°", "110°")],
          },
          {
            label: "spec.row.power",
            cells: figures("12 W", "6 W", "5 W", "3 × 5 W", "8 W"),
          },
          {
            label: "spec.row.flux",
            cells: figures("600 lm", "450 lm", "25 lm", "3 × 25 lm", "400 lm"),
          },
          { label: "spec.row.cct", cells: [{ value: "2700–6000 K", span: 5 }] },
          {
            label: "spec.row.dimming",
            cells: [{ key: "spec.v.pwm", span: 5 }],
          },
          { label: "spec.row.depth", cells: [{ value: "0.01%", span: 5 }] },
          {
            label: "spec.row.frequency",
            cells: [{ value: "20 kHz", span: 5 }],
          },
          {
            label: "spec.row.material",
            cells: [{ key: "spec.v.aluPc", span: 5 }],
          },
        ],
      },
      {
        products: [
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_15-a77ccc92d6.webp",
            name: "spec.name.DG10GB",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_16-503f791038.webp",
            name: "spec.name.DG10FA",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_17-026fce7f44.webp",
            name: "spec.name.DG10FB",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_18-48e1878f92.webp",
            name: "spec.name.DG10SA",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_19-ff6c4c711d.webp",
            name: "spec.name.DG10SB",
          },
        ],
        rows: [
          {
            label: "spec.row.model",
            cells: figures("DG10GB", "DG10FA", "DG10FB", "DG10SA", "DG10SB"),
          },
          { label: "spec.row.cutout", cells: [NONE, NONE, NONE, NONE, NONE] },
          {
            label: "spec.row.size",
            cells: figures(
              "410 × 22 × 25 mm",
              "207.5 × 22 × 25 mm",
              "410 × 22 × 25 mm",
              "38 × 146 mm",
              "60 × 156 mm",
            ),
          },
          { label: "spec.row.optics", cells: [{ value: "—", span: 5 }] },
          { label: "spec.row.colors", cells: [{ value: "—", span: 5 }] },
          { label: "spec.row.cri", cells: [{ value: "Ra > 93", span: 5 }] },
          { label: "spec.row.ugr", cells: [{ value: "—", span: 5 }] },
          {
            label: "spec.row.angle",
            cells: figures("110°", "70°", "70°", "24°", "24°"),
          },
          {
            label: "spec.row.power",
            cells: figures("15 W", "8 W", "15 W", "8 W", "15 W"),
          },
          {
            label: "spec.row.flux",
            cells: figures("810 lm", "580 lm", "1120 lm", "350 lm", "850 lm"),
          },
          { label: "spec.row.cct", cells: [{ value: "2700–6000 K", span: 5 }] },
          {
            label: "spec.row.dimming",
            cells: [{ key: "spec.v.pwm", span: 5 }],
          },
          { label: "spec.row.depth", cells: [{ value: "0.01%", span: 5 }] },
          {
            label: "spec.row.frequency",
            cells: [{ value: "20 kHz", span: 5 }],
          },
          {
            label: "spec.row.material",
            cells: [{ key: "spec.v.aluPc", span: 5 }],
          },
        ],
      },
    ],
  },
  {
    title: "spec.strip.title",
    parts: [
      {
        products: [
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/prd_20-57c9245e47.webp",
            name: "spec.name.LS20N",
          },
        ],
        rows: [
          { label: "spec.row.model", cells: figures("LS20N") },
          { label: "spec.row.cutout", cells: [NONE] },
          { label: "spec.row.size", cells: [{ key: "spec.v.stripSize" }] },
          { label: "spec.row.optics", cells: [{ key: "spec.v.leds" }] },
          { label: "spec.row.colors", cells: [NONE] },
          { label: "spec.row.cri", cells: figures("Ra 80") },
          { label: "spec.row.ugr", cells: [NONE] },
          { label: "spec.row.angle", cells: [NONE] },
          { label: "spec.row.power", cells: figures("6 W/m") },
          { label: "spec.row.flux", cells: figures("550 lm/m") },
          { label: "spec.row.cct", cells: figures("2700–6500 K") },
          { label: "spec.row.dimming", cells: [{ key: "spec.v.pwm" }] },
          { label: "spec.row.depth", cells: figures("0.01%") },
          { label: "spec.row.frequency", cells: figures("20 kHz") },
          { label: "spec.row.material", cells: [NONE] },
        ],
      },
    ],
  },
  {
    title: "spec.linear.title",
    parts: [
      {
        products: [
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/tx_01-61309b7c44.webp",
            name: "spec.name.DFZ10044",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/tx_02-cf7bb622fb.webp",
            name: "spec.name.DFZ20046",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/tx_03-8d0a82da72.webp",
            name: "spec.name.DFZ10045",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/tx_04-0df00a3a04.webp",
            name: "spec.name.DFZ20047",
          },
        ],
        rows: [
          {
            label: "spec.row.model",
            cells: figures("DFZ10044", "DFZ20046", "DFZ10045", "DFZ20047"),
          },
          { label: "spec.row.use", cells: [{ key: "spec.v.rooms", span: 4 }] },
          {
            label: "spec.row.cutout",
            cells: figures(
              "L143 × W35 mm",
              "L275 × W35 mm",
              "L143 × W35 mm",
              "L275 × W35 mm",
            ),
          },
          {
            label: "spec.row.size",
            cells: figures(
              "L148.6 × W45 × H43 mm",
              "L281.5 × W45 × H43 mm",
              "L148.6 × W45 × H43 mm",
              "L281.5 × W45 × H43 mm",
            ),
          },
          {
            label: "spec.row.optics",
            cells: [
              { key: "spec.v.down", span: 2 },
              { key: "spec.v.asym", span: 2 },
            ],
          },
          {
            label: "spec.row.trim",
            cells: [
              { key: "spec.v.black", span: 2 },
              { key: "spec.v.white", span: 2 },
            ],
          },
          { label: "spec.row.cri", cells: [{ value: "Ra 90", span: 4 }] },
          { label: "spec.row.ugr", cells: [{ value: "UGR < 9", span: 4 }] },
          {
            label: "spec.row.angle",
            cells: [
              { value: "32°", span: 2 },
              { value: "—", span: 2 },
            ],
          },
          {
            label: "spec.row.power",
            cells: figures("10 W", "20 W", "10 W", "20 W"),
          },
          {
            label: "spec.row.flux",
            cells: figures("500 lm", "1000 lm", "500 lm", "1000 lm"),
          },
          { label: "spec.row.cct", cells: [{ value: "2700–6000 K", span: 4 }] },
          {
            label: "spec.row.dimming",
            cells: [{ key: "spec.v.pwm", span: 4 }],
          },
          { label: "spec.row.depth", cells: [{ value: "0.1%", span: 4 }] },
          {
            label: "spec.row.frequency",
            cells: [{ value: "3.84 kHz", span: 4 }],
          },
          {
            label: "spec.row.material",
            cells: [{ key: "spec.v.aluPc", span: 4 }],
          },
        ],
      },
    ],
  },
  {
    title: "spec.s10.title",
    scroll: true,
    parts: [
      {
        products: [
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_01-d3a6ed7abf.webp",
            name: "spec.name.DTN06057",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_02-d3a6ed7abf.webp",
            name: "spec.name.DTN06058",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_03-ab1060007a.webp",
            name: "spec.name.DTZ09048",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_04-46942ac6fe.webp",
            name: "spec.name.DSZ07061",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_05-46942ac6fe.webp",
            name: "spec.name.DSZ07057",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_06-46942ac6fe.webp",
            name: "spec.name.DSZ07058",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_07-46942ac6fe.webp",
            name: "spec.name.DSZ07062",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_08-46942ac6fe.webp",
            name: "spec.name.DSZ07059",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_09-46942ac6fe.webp",
            name: "spec.name.DSZ07060",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_10-8b04f4e053.webp",
            name: "spec.name.DSZ07053",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_11-8b04f4e053.webp",
            name: "spec.name.DSZ07049",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_12-8b04f4e053.webp",
            name: "spec.name.DSZ07050",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_13-0dbaaccf93.webp",
            name: "spec.name.DSZ07054",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_14-0dbaaccf93.webp",
            name: "spec.name.DSZ07051",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_15-0dbaaccf93.webp",
            name: "spec.name.DSZ07052",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_16-e8a4d9e983.webp",
            name: "spec.name.DSZ07067",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_17-e8a4d9e983.webp",
            name: "spec.name.DSZ07069",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_18-e8a4d9e983.webp",
            name: "spec.name.DSZ07071",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_19-e8a4d9e983.webp",
            name: "spec.name.DSZ07068",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_20-e8a4d9e983.webp",
            name: "spec.name.DSZ07070",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_21-ac79b4a683.webp",
            name: "spec.name.DSZ07072",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_22-ac79b4a683.webp",
            name: "spec.name.DSZ07065",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_23-e8a4d9e983.webp",
            name: "spec.name.DSZ07063",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_24-e8a4d9e983.webp",
            name: "spec.name.DSZ07064",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_25-e8a4d9e983.webp",
            name: "spec.name.DSZ07066",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_26-e8a4d9e983.webp",
            name: "spec.name.DSZ07055",
          },
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/td_27-bf9080f627.webp",
            name: "spec.name.DSZ07056",
          },
        ],
        rows: [
          {
            label: "spec.row.model",
            cells: figures(
              "DTN06057",
              "DTN06058",
              "DTZ09048",
              "DSZ07061",
              "DSZ07057",
              "DSZ07058",
              "DSZ07062",
              "DSZ07059",
              "DSZ07060",
              "DSZ07053",
              "DSZ07049",
              "DSZ07050",
              "DSZ07054",
              "DSZ07051",
              "DSZ07052",
              "DSZ07067",
              "DSZ07069",
              "DSZ07071",
              "DSZ07068",
              "DSZ07070",
              "DSZ07072",
              "DSZ07065",
              "DSZ07063",
              "DSZ07064",
              "DSZ07066",
              "DSZ07055",
              "DSZ07056",
            ),
          },
          {
            label: "spec.row.use",
            cells: [
              { key: "spec.v.halls" },
              { key: "spec.v.halls" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
              { key: "spec.v.rooms" },
            ],
          },
          {
            label: "spec.row.cutout",
            cells: figures(
              "Ø75 mm",
              "Ø75 mm",
              "Ø75 mm",
              "Ø55 mm",
              "Ø55 mm",
              "Ø55 mm",
              "Ø75 mm",
              "Ø75 mm",
              "Ø75 mm",
              "55 × 55 mm",
              "55 × 55 mm",
              "55 × 55 mm",
              "75 × 75 mm",
              "75 × 75 mm",
              "75 × 75 mm",
              "Ø55 mm",
              "Ø55 mm",
              "Ø55 mm",
              "Ø75 mm",
              "Ø75 mm",
              "Ø75 mm",
              "55 × 55 mm",
              "55 × 55 mm",
              "55 × 55 mm",
              "75 × 75 mm",
              "75 × 75 mm",
              "75 × 75 mm",
            ),
          },
          {
            label: "spec.row.size",
            cells: figures(
              "Ø80 × 43.5 mm",
              "Ø80 × 43.5 mm",
              "Ø84.5 × H64 mm",
              "Ø67 × H77 mm",
              "Ø67 × H77 mm",
              "Ø67 × H77 mm",
              "Ø85 × H103 mm",
              "Ø85 × H103 mm",
              "Ø85 × H103 mm",
              "L67 × W67 × H81 mm",
              "L67 × W67 × H81 mm",
              "L67 × W67 × H81 mm",
              "L85 × W85 × H106 mm",
              "L85 × W85 × H106 mm",
              "L85 × W85 × H106 mm",
              "Ø78 × H77 mm",
              "Ø78 × H77 mm",
              "Ø78 × H77 mm",
              "Ø100 × H103 mm",
              "Ø100 × H103 mm",
              "Ø100 × H103 mm",
              "L78 × W78 × H81 mm",
              "L78 × W78 × H81 mm",
              "L78 × W78 × H81 mm",
              "L100 × W100 × H106 mm",
              "L100 × W100 × H106 mm",
              "L100 × W100 × H106 mm",
            ),
          },
          {
            label: "spec.row.optics",
            cells: [
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
              { key: "spec.v.down" },
            ],
          },
          {
            label: "spec.row.trim",
            cells: [
              NONE,
              NONE,
              { key: "spec.v.white" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
              { key: "spec.v.blackWhite" },
            ],
          },
          {
            label: "spec.row.cri",
            cells: figures(
              "Ra > 90",
              "Ra > 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
              "Ra 90",
            ),
          },
          {
            label: "spec.row.ugr",
            cells: [
              NONE,
              NONE,
              NONE,
              ...figures(
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
                "UGR < 9",
              ),
            ],
          },
          {
            label: "spec.row.angle",
            cells: [
              ...figures("85°", "85°"),
              NONE,
              ...figures(
                "15°",
                "24°",
                "36°",
                "15°",
                "24°",
                "36°",
                "15°",
                "24°",
                "36°",
                "15°",
                "24°",
                "36°",
                "15°",
                "24°",
                "36°",
                "15°",
                "24°",
                "36°",
                "15°",
                "24°",
                "36°",
                "15°",
                "24°",
                "36°",
              ),
            ],
          },
          {
            label: "spec.row.power",
            cells: figures(
              "6 W",
              "6 W",
              "9 W",
              "7 W",
              "7 W",
              "7 W",
              "12 W",
              "12 W",
              "12 W",
              "7 W",
              "7 W",
              "7 W",
              "12 W",
              "12 W",
              "12 W",
              "7 W",
              "7 W",
              "7 W",
              "12 W",
              "12 W",
              "12 W",
              "7 W",
              "7 W",
              "7 W",
              "12 W",
              "12 W",
              "12 W",
            ),
          },
          {
            label: "spec.row.flux",
            cells: [
              NONE,
              NONE,
              ...figures(
                "450 lm",
                "350 lm",
                "350 lm",
                "350 lm",
                "600 lm",
                "600 lm",
                "≥ 600 lm",
                "≥ 350 lm",
                "≥ 350 lm",
                "≥ 350 lm",
                "≥ 600 lm",
                "≥ 600 lm",
                "≥ 600 lm",
                "≥ 350 lm",
                "≥ 350 lm",
                "≥ 350 lm",
                "≥ 600 lm",
                "≥ 600 lm",
                "≥ 600 lm",
                "≥ 350 lm",
                "≥ 350 lm",
                "≥ 350 lm",
                "≥ 600 lm",
                "≥ 600 lm",
                "≥ 600 lm",
              ),
            ],
          },
          {
            label: "spec.row.cct",
            cells: figures(
              "3000 K",
              "4000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
              "2700–6000 K",
            ),
          },
          {
            label: "spec.row.dimming",
            cells: [
              { key: "spec.v.fixed" },
              { key: "spec.v.fixed" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
              { key: "spec.v.pwm" },
            ],
          },
          {
            label: "spec.row.depth",
            cells: [
              NONE,
              NONE,
              ...figures(
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
                "0.1%",
              ),
            ],
          },
          {
            label: "spec.row.frequency",
            cells: [
              NONE,
              NONE,
              ...figures(
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
                "3.84 kHz",
              ),
            ],
          },
          {
            label: "spec.row.material",
            cells: [
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
              { key: "spec.v.aluPc" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "spec.cob.title",
    parts: [
      {
        products: [
          {
            image:
              "/guanwang_second/front/mobile/images/new/product/s/cob_01-fd33807900.webp",
            name: "spec.name.DLZ67073",
          },
        ],
        rows: [
          { label: "spec.row.model", cells: figures("DLZ67073") },
          { label: "spec.row.use", cells: [{ key: "spec.v.accent" }] },
          { label: "spec.row.cutout", cells: [NONE] },
          { label: "spec.row.size", cells: figures("L5000 × W10 × T1.7 mm") },
          { label: "spec.row.optics", cells: [{ key: "spec.v.flood" }] },
          { label: "spec.row.trim", cells: [NONE] },
          { label: "spec.row.cri", cells: figures("Ra > 90") },
          { label: "spec.row.ugr", cells: [NONE] },
          { label: "spec.row.angle", cells: [NONE] },
          { label: "spec.row.power", cells: figures("6.5 W/m") },
          { label: "spec.row.flux", cells: figures("500 lm/m") },
          { label: "spec.row.cct", cells: figures("2700–6500 K") },
          { label: "spec.row.dimming", cells: [NONE] },
          { label: "spec.row.depth", cells: [NONE] },
          { label: "spec.row.frequency", cells: [NONE] },
          { label: "spec.row.material", cells: [NONE] },
        ],
      },
    ],
  },
];

const BORDER = "border-b border-l border-[#dcdcdc]";
const LABEL = `${BORDER} flex items-center bg-white py-[0.1rem] pr-[0.1rem] pl-[0.2rem] leading-[0.22rem]`;
const CELL = `${BORDER} flex min-h-[0.48rem] items-center justify-center px-[0.06rem] py-[0.1rem] text-center text-[0.16rem] leading-[0.22rem] text-[#111111]`;

/**
 * The spec tab (orvibo.com's s_install page): a table per product family,
 * a photo and a name per column, then the figures; a value shared by
 * several products spans their columns, as on orvibo.com. Its two pages of
 * track lights are two grids here, and its 27 downlights and spotlights
 * scroll sideways with the labels pinned.
 */
export function SoproSSpec({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, lines } = productPageHelpers(locale, text);
  /** Romanian writes decimals with a comma. */
  const figure = (value: string) =>
    locale === "ro" ? value.replace(/(\d)\.(\d)/g, "$1,$2") : value;

  const grid = (table: Table, part: Part) => {
    const scroll = table.scroll === true;
    const label = scroll ? `${LABEL} sticky left-0 z-[1]` : LABEL;
    /** Scrolling stops on a column's left edge, just clear of the labels. */
    const snap = scroll ? " snap-start scroll-ml-[1.8rem]" : "";
    return (
      <div
        className={`grid border-r border-[#dcdcdc] ${scroll ? SCROLL_GRID : GRID[part.products.length]}`}
      >
        <div className={label}>{t("spec.row.image")}</div>
        {part.products.map((product) => (
          <div key={product.name} className={`${CELL} h-[1.52rem]${snap}`}>
            <Image
              src={img(product.image)}
              alt={ts(product.name)}
              width={250}
              height={250}
              unoptimized
              className="w-[1.01rem]"
            />
          </div>
        ))}
        <div className={label}>{t("spec.row.name")}</div>
        {part.products.map((product) => (
          <div key={product.name} className={CELL}>
            {t(product.name)}
          </div>
        ))}
        {part.rows.map((row) => {
          let column = 0;
          return (
            <Fragment key={row.label}>
              <div className={label}>{t(row.label)}</div>
              {row.cells.map((cell) => {
                const span = cell.span ?? 1;
                const key = `${row.label}-${column}`;
                column += span;
                return (
                  <div key={key} className={`${CELL} ${SPAN[span]}`}>
                    {"key" in cell ? t(cell.key) : figure(cell.value)}
                  </div>
                );
              })}
            </Fragment>
          );
        })}
      </div>
    );
  };

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
            {table.scroll ? (
              <ProductSpecScroller
                labels={{ prev: common.previous, next: common.next }}
              >
                {grid(table, table.parts[0] as Part)}
              </ProductSpecScroller>
            ) : (
              table.parts.map((part, index) => (
                <div
                  key={part.products[0]?.name}
                  className={index > 0 ? "mt-[0.3rem]" : undefined}
                >
                  {grid(table, part)}
                </div>
              ))
            )}
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
