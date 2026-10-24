import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

/**
 * The two products on the page and their spec lines, in orvibo.com's two
 * columns. Each line is one `spec.<product>.<key>` string ("Label: value").
 */
const PRODUCTS = [
  {
    id: "downlight",
    image:
      "/guanwang_second/front/images/2019/products/downlight/tongdeng-5a32838baa.webp",
    width: 225,
    left: ["model", "size", "power", "input", "powerFactor", "cri"],
    right: ["cct", "dimming", "optics", "other", "protocol"],
  },
  {
    id: "spotlight",
    image:
      "/guanwang_second/front/images/2019/products/downlight/shedeng-c9f367ecdf.webp",
    width: 227,
    left: ["model", "size", "power", "input", "powerFactor", "optics"],
    right: ["cct", "dimming", "cri", "other", "protocol"],
  },
];

const HEADING =
  "absolute left-0 text-[0.3rem] font-semibold leading-[1em] tracking-[0.02rem] text-[#111111]";

/**
 * The spec tab (orvibo.com's downlight_install page): for each product, its
 * photo and name, then its specs in two columns between grey rules. The
 * product name is centred under the photo, so longer names stay with it.
 */
export function DownlightSpec({ locale, text, common }: ProductViewProps) {
  const { t, img, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="spec">
        {PRODUCTS.map((product, index) => {
          const last = index === PRODUCTS.length - 1;
          return (
            <div key={product.id}>
              <div className="relative mx-auto h-[4.12rem] w-[12rem] min-w-[1280px]">
                <h2 className={`${HEADING} top-[1.92rem]`}>
                  {t("spec.appearance")}
                </h2>
                <Image
                  src={img(product.image)}
                  alt=""
                  width={product.width}
                  height={171}
                  unoptimized
                  className="absolute left-[3rem] top-[1.15rem] h-[1.71rem] w-[2.25rem]"
                />
                <div className="absolute left-[4.125rem] top-[3.4rem] -translate-x-1/2 whitespace-nowrap text-[0.25rem] text-[#111111]">
                  {t(`spec.${product.id}.name`)}
                </div>
              </div>
              <div
                className={`relative mx-auto w-[12rem] min-w-[1280px] border-y border-[#cfcfcf] ${last ? "h-[6.51rem]" : "h-[4.63rem]"}`}
              >
                <h2 className={`${HEADING} top-[0.93rem]`}>
                  {common.productSpecTitle}
                </h2>
                {[
                  { keys: product.left, className: "left-[2.99rem]" },
                  { keys: product.right, className: "left-[8.07rem]" },
                ].map((column) => (
                  <ul
                    key={column.className}
                    className={`absolute top-[0.92rem] ${column.className}`}
                  >
                    {column.keys.map((key) => (
                      <li
                        key={key}
                        className="mb-[0.3rem] whitespace-nowrap text-[0.2rem] leading-[1em]"
                      >
                        {t(`spec.${product.id}.${key}`)}
                      </li>
                    ))}
                  </ul>
                ))}
                {last && (
                  <p className="absolute bottom-[129px] left-0 text-[16px] text-[#111111]/60">
                    {common.productSpecNote}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-[#202020] p-[60px]">
        <p className="mx-auto max-w-[1200px] text-[14px] font-medium leading-[24px] text-white/80">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
