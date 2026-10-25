import { ProductMoreToggle } from "@/components/orvibo/product/ProductMoreToggle";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** One diagram of the install guide: its picture, height and title offset. */
export interface CurtainKitGuidePart {
  /** `guide.<key>` is its title; `guide.<key>_note`, if `note`, a line under it. */
  key: string;
  image: string;
  className: string;
  note?: boolean;
}

/** A row of the load table: the track's text key, its bend radius and its loads. */
export type CurtainKitLoad = [
  track: string,
  radius: string,
  load3m: string,
  load4m: string,
];

interface CurtainKitSpecProps extends ProductViewProps {
  /** The product photo over its name: its path and box classes. */
  photo: { path: string; className: string };
  /** `spec.<key>` lines ("Label: value"), the label in black. */
  specs: string[];
  loads: CurtainKitLoad[];
  guide: CurtainKitGuidePart[];
}

/**
 * The curtain kits' spec tab (orvibo.com's chuanglian_install pages): the
 * product, its spec lines, a load table, and an install guide of six
 * diagrams that slides open under "more installation details".
 */
export function CurtainKitSpec({
  locale,
  text,
  common,
  photo,
  specs,
  loads,
  guide,
}: CurtainKitSpecProps) {
  const { t, ts, bg, img, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* sec15 */}
      <div id="spec" className="w-full bg-[#fbfbfb]">
        <div className="mx-auto w-[1188px]">
          <h2 className="pt-[110px] text-center text-[36px] font-normal text-[#2f2f2f]">
            {common.productSpecTitle}
          </h2>
          <div className="mx-auto mt-[58px] w-[520px] text-center">
            <div
              className={`mx-auto bg-center bg-no-repeat ${photo.className}`}
              style={bg(photo.path)}
            />
            <p className="mt-[50px] text-[20px] leading-[1.6] text-[#2f2f2f]">
              {t("spec_name")}
            </p>
          </div>
          <ul className="mt-[40px] ml-[422px] max-w-[560px]">
            {specs.map((key) => {
              const line = ts(`spec.${key}`);
              const at = line.indexOf(": ");
              return (
                <li
                  key={key}
                  className="mb-[18px] pl-[0.24rem] -indent-[0.24rem] text-[16px] leading-[1.6] text-[#2f2f2f]"
                >
                  {line.slice(0, at + 1)}{" "}
                  <span className="text-[grey]">{line.slice(at + 2)}</span>
                </li>
              );
            })}
          </ul>
          <div className="mx-auto mt-[52px] w-[786px] pb-[42px]">
            <p className="mb-[16px] text-[18px] leading-[1.6] text-[#2f2f2f]">
              {t("load.title")}
            </p>
            <table className="w-full table-fixed border-collapse border border-[#cccccc] text-center text-[16px] leading-[1.4] text-[#2f2f2f]">
              <thead>
                <tr className="h-[50px] bg-[#f6f6f6]">
                  <th scope="col" className="w-[280px] px-[10px] font-normal">
                    {t("load.track")}
                  </th>
                  <th scope="col" className="w-[160px] px-[10px] font-normal">
                    {t("load.radius")}
                  </th>
                  <th scope="col" className="font-normal">
                    3 m
                  </th>
                  <th scope="col" className="font-normal">
                    4 m
                  </th>
                </tr>
              </thead>
              <tbody>
                {loads.map(([track, ...cells]) => (
                  <tr key={track} className="h-[50px]">
                    <th
                      scope="row"
                      className="border border-[#cccccc] px-[10px] font-normal"
                    >
                      {t(`load.${track}`)}
                    </th>
                    {cells.map((cell, index) => (
                      <td
                        // The cells are fixed columns of a fixed row.
                        // biome-ignore lint/suspicious/noArrayIndexKey: see above.
                        key={index}
                        className="border border-[#cccccc]"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ProductMoreToggle
          label={ts("guide.link")}
          openIcon={img(
            "/guanwang_second/front/images/new/index/more_icon-86b86aa246.webp",
          )}
          closeIcon={img(
            "/guanwang_second/front/images/new/index/close_icon-ca2c7f7ea6.webp",
          )}
          className="pb-[34px]"
        >
          {/* more */}
          <div className="bg-[#fcfcfc] text-center">
            {guide.map((part) => (
              <div
                key={part.key}
                className={`mx-auto w-[1200px] bg-center bg-no-repeat ${part.className}`}
                style={bg(part.image)}
              >
                <h3 className="text-[36px] font-normal text-[#2f2f2f]">
                  {t(`guide.${part.key}`)}
                </h3>
                {part.note && (
                  <p className="mt-[14px] text-[20px] leading-[1.6] text-[#2f2f2f]">
                    {t(`guide.${part.key}_note`)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ProductMoreToggle>
      </div>
      <div className="relative h-[80px] bg-[#fbfbfb]">
        {/* data_source_tips */}
        <p className="absolute bottom-[30px] left-1/2 w-max max-w-[1188px] -translate-x-1/2 text-[16px] text-[#111111]/60">
          {common.productSpecNote}
        </p>
      </div>
      {/* product_detail_tips */}
      <div className="bg-[#202020] p-[60px]">
        <p className="mx-auto max-w-[1200px] text-[14px] leading-[24px] font-medium text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
