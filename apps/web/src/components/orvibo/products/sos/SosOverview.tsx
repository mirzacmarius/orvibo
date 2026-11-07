import { ProductInView } from "@/components/orvibo/product/ProductInView";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";
import { SosPlaces } from "./SosPlaces";

/** The spec list: label and value keys, in orvibo.com's order. */
const SPEC = [
  ["install.l1", "install.v1"],
  ["install.l2", "install.v2"],
  ["install.l3", "install.v3"],
  ["install.l4", "install.v4"],
  ["install.l5", "install.v5"],
  ["install.l6", "install.v6"],
  ["install.l7", "install.v7"],
  ["install.l8", "install.v8"],
  ["install.l9", "install.v9"],
  ["install.l10", "install.v10"],
  ["install.l11", "install.v11"],
] as const;

/** A phone that rises into place once its section is on screen. */
const RISE =
  "inline translate-y-[100px] align-middle opacity-0 transition-[opacity,transform] [transition-delay:600ms] [transition-duration:1000ms] [transition-timing-function:ease] group-data-[shown]:translate-y-0 group-data-[shown]:opacity-100 motion-reduce:transition-none";

export function SosOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview" className="bg-white">
        {/* se20_sec_1 */}
        <div
          className="h-[800px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/se20/bg_01-2b33eb646c.webp",
          )}
        >
          <div className="mx-auto w-[1010px] pt-[328px]">
            <h1 className="mb-[30px] text-[44px] text-[#333333]">
              {t("se20_sec_1.tit")}
            </h1>
            <p className="w-[555px] text-[18px] text-[#888888]">
              {t("se20_sec_1.cont")}
            </p>
          </div>
        </div>
        {/* se20_sec2: the panel under the pointer shows in colour, without its
            veil; the middle one has no photo (missing on orvibo.com too) */}
        <div className="relative flex h-[960px] overflow-hidden">
          <h2
            className="absolute top-[42px] left-[19.2708%] z-10 h-[74px] w-[1181px] bg-no-repeat text-center text-[30px] leading-[74px] text-white"
            style={bg(
              "/guanwang_second/front/images/products/temp/b_shadow_03-8b2699d3a5.webp",
            )}
          >
            {t("se20_sec2.shadow_bg")}
          </h2>
          <div
            className="group/panel w-[33.3%] bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0"
            style={bg(
              "/guanwang_second/front/images/products/se20/bg_2_01-cae7ce8719.webp",
            )}
          >
            <div className="h-full bg-black/30 px-[40px] pt-[450px] text-center group-hover/panel:invisible">
              <p className="text-balance text-[24px] text-white">
                {t("se20_sec2.shadow")}
              </p>
            </div>
          </div>
          <div className="group/panel w-[33.4%] bg-white grayscale hover:grayscale-0">
            <div className="h-full bg-black/30 px-[40px] pt-[450px] text-center group-hover/panel:invisible">
              <p className="text-balance text-[24px] text-white">
                {t("se20_sec2.shadow2")}
              </p>
            </div>
          </div>
          <div
            className="group/panel w-[33.3%] bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0"
            style={bg(
              "/guanwang_second/front/images/products/se20/bg_2_03-42b46c6a4c.webp",
            )}
          >
            <div className="h-full bg-black/30 px-[40px] pt-[450px] text-center group-hover/panel:invisible">
              <p className="text-balance text-[24px] text-white">
                {t("se20_sec2.shadow3")}
              </p>
            </div>
          </div>
        </div>
        {/* se20_sec_3 */}
        <div className="h-[950px] overflow-hidden bg-[#eeeeee] text-center">
          <div className="pt-[40px]">
            <Image
              src={img(
                "/guanwang_second/front/images/products/se20/pro_sos_03-a70c9766cb.webp",
              )}
              alt=""
              width={434}
              height={466}
              unoptimized
              className="inline align-middle"
            />
          </div>
          <h2 className="mt-[60px] mb-[80px] text-[36px] text-[#333333]">
            {t("se20_sec_3.se20_sec_3")}
          </h2>
          <div className="mx-auto flex w-[561px] justify-between text-[14px] leading-[19px] text-white">
            <div
              className="flex size-[127px] items-center justify-center bg-[position:0_-127px]"
              style={bg(
                "/guanwang_second/front/images/products/sf20/icons-0b697ac426.webp",
              )}
            >
              <p>{t("se20_sec_3.circle")}</p>
            </div>
            <div
              className="flex size-[127px] items-center justify-center bg-[position:0_-254px]"
              style={bg(
                "/guanwang_second/front/images/products/sf20/icons-0b697ac426.webp",
              )}
            >
              <p>{t("se20_sec_3.circle2")}</p>
            </div>
            <div
              className="flex size-[127px] items-center justify-center"
              style={bg(
                "/guanwang_second/front/images/products/sf20/icons-0b697ac426.webp",
              )}
            >
              <p>{t("se20_sec_3.circle3")}</p>
            </div>
          </div>
        </div>
        {/* se20_sec_4 */}
        <ProductInView
          className="h-[959px] overflow-hidden bg-center bg-no-repeat text-white"
          style={bg(
            "/guanwang_second/front/images/products/se20/bg__03-2fbfe99028.webp",
          )}
        >
          <div className="mx-auto w-[1146px] text-center">
            <h2 className="mb-[45px] pt-[76px] text-[36px]">
              {t("se20_sec_4.tit")}
            </h2>
            <p className="mx-auto mb-[60px] w-[900px] text-[16px]">
              {t("se20_sec_4.cont")}
            </p>
            <Image
              src={img(
                "/guanwang_second/front/images/products/se20/iphone6-f59b98b5fb.webp",
              )}
              alt={ts("alt.phone1")}
              width={306}
              height={615}
              unoptimized
              className={RISE}
            />
          </div>
        </ProductInView>
        {/* se20_sec_5 */}
        <ProductInView
          className="h-[960px] overflow-hidden bg-center bg-no-repeat text-center text-[#333333]"
          style={bg(
            "/guanwang_second/front/images/products/se20/bg_04-a90a5d79e4.webp",
          )}
        >
          <h2 className="mb-[45px] pt-[76px] text-[36px]">
            {t("se20_sec_5.tit")}
          </h2>
          <p className="mx-auto mb-[160px] w-[700px] text-[16px]">
            {t("se20_sec_5.cont")}
          </p>
          <Image
            src={img(
              "/guanwang_second/front/images/products/se20/iphone6_2-e09f662c85.webp",
            )}
            alt={ts("alt.phone2")}
            width={362}
            height={729}
            unoptimized
            className={RISE}
          />
        </ProductInView>
        {/* se20_sec6 */}
        <SosPlaces
          heading={t("se20_sec6.se20_sec6_right")}
          places={[
            {
              key: "hospital",
              label: t("se20_sec6.f_li"),
              photo: bg(
                "/guanwang_second/front/images/products/se20/bg5_01-b60deb6858.webp",
              ),
            },
            {
              key: "kindergarten",
              label: t("se20_sec6.s_li"),
              photo: bg(
                "/guanwang_second/front/images/products/se20/bg5_2-6263c52e9d.webp",
              ),
            },
            {
              key: "care-home",
              label: t("se20_sec6.t_li"),
              photo: bg(
                "/guanwang_second/front/images/products/se20/bg5_03-15864fd52b.webp",
              ),
            },
          ]}
          ringGrey={bg(
            "/guanwang_second/front/images/products/se20/icon_grey-5a1d5348dc.webp",
          )}
          ringGreen={bg(
            "/guanwang_second/front/images/products/se20/icon_green-6e7f8c53a1.webp",
          )}
          sprite={bg(
            "/guanwang_second/front/images/products/se20/icons_2-1cb89654b8.webp",
          )}
        />
        {/* install */}
        <div className="relative mx-auto w-[1200px] pt-[30px] pb-[160px]">
          <div className="flex border-b border-b-[#111111]/20 py-[90px]">
            <h2 className="w-[300px] shrink-0 text-[30px] leading-[1.6em] font-semibold text-[#111111]">
              {t("install.title")}
            </h2>
            <Image
              src={img(
                "/guanwang_second/front/images/products/se20/pro-095e8b232a.webp",
              )}
              alt={ts("alt.product")}
              width={280}
              height={280}
              unoptimized
              className="h-[225px] w-[225px]"
            />
          </div>
          <div className="flex py-[90px]">
            <h2 className="w-[300px] shrink-0 text-[30px] leading-[1.6em] font-semibold text-[#111111]">
              {t("install.title2")}
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
            {t("install.note")}
          </p>
        </div>
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
