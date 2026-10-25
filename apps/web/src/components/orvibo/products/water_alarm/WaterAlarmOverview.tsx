import { BalancedLines } from "@/components/orvibo/product/BalancedLines";
import { ProductInView } from "@/components/orvibo/product/ProductInView";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

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
  ["install.l12", "install.v12"],
] as const;

/** A bubble or phone that rises into place once its section is on screen (add a delay). */
const RISE =
  "translate-y-[100px] opacity-0 transition-[opacity,transform] [transition-duration:1000ms] [transition-timing-function:ease] group-data-[shown]:translate-y-0 group-data-[shown]:opacity-100 motion-reduce:transition-none";

/** A round feature icon that turns in once its section is on screen. */
const TURN =
  "-rotate-[350deg] opacity-0 transition-[opacity,transform] [transition-delay:600ms] [transition-duration:2000ms] [transition-timing-function:ease-out] group-data-[shown]:rotate-0 group-data-[shown]:opacity-100 motion-reduce:transition-none";

export function WaterAlarmOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview" className="bg-white">
        {/* im_sec_1 */}
        <div
          className="h-[800px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/water/bg_01-2a90b1ca2a.webp",
          )}
        >
          <h1 className="pt-[178px] text-center text-[42px] text-[#333333]">
            {t("im_sec_1.im_sec_1")}
          </h1>
        </div>
        {/* im_sec2: the panel under the pointer shows in colour, without its veil */}
        <div className="relative flex h-[960px] overflow-hidden">
          <h2
            className="absolute top-[42px] left-[19.2708%] z-10 h-[74px] w-[1181px] bg-no-repeat text-center text-[30px] leading-[74px] text-white"
            style={bg(
              "/guanwang_second/front/images/products/temp/b_shadow_03-8b2699d3a5.webp",
            )}
          >
            {t("im_sec2.shadow_bg")}
          </h2>
          <div
            className="group/panel w-1/4 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0"
            style={bg(
              "/guanwang_second/front/images/products/water/bg_02-6c437be287.webp",
            )}
          >
            <div className="h-full bg-black/30 px-[40px] pt-[450px] text-center group-hover/panel:invisible">
              <p className="text-[24px] text-white">
                <BalancedLines text={ts("im_sec2.shadow")} />
              </p>
            </div>
          </div>
          <div
            className="group/panel w-1/4 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0"
            style={bg(
              "/guanwang_second/front/images/products/water/bg_03-2e9489d0f0.webp",
            )}
          >
            <div className="h-full bg-black/30 px-[40px] pt-[450px] text-center group-hover/panel:invisible">
              <p className="text-[24px] text-white">
                <BalancedLines text={ts("im_sec2.shadow2")} />
              </p>
            </div>
          </div>
          <div
            className="group/panel w-1/4 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0"
            style={bg(
              "/guanwang_second/front/images/products/water/bg_05-d74a3d0dbe.webp",
            )}
          >
            <div className="h-full bg-black/30 px-[40px] pt-[450px] text-center group-hover/panel:invisible">
              <p className="text-[24px] text-white">
                <BalancedLines text={ts("im_sec2.shadow3")} />
              </p>
            </div>
          </div>
          <div
            className="group/panel w-1/4 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0"
            style={bg(
              "/guanwang_second/front/images/products/water/bg_04-4a18dbd581.webp",
            )}
          >
            <div className="h-full bg-black/30 px-[40px] pt-[450px] text-center group-hover/panel:invisible">
              <p className="text-[24px] text-white">
                <BalancedLines text={ts("im_sec2.shadow4")} />
              </p>
            </div>
          </div>
        </div>
        {/* im_sec3: the bubbles keep their right ends by the phone and grow
            to the left; the text beside them sits higher to stay clear */}
        <ProductInView
          className="h-[722px] bg-white bg-right bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/water/bg_06_03-deb0a9dca6.webp",
          )}
        >
          <div className="relative mx-auto w-[1180px]">
            <h2 className="mb-[60px] pt-[170px] text-[36px] text-[#333333]">
              {t("im_sec3.f_p")}
            </h2>
            <p className="max-w-[680px] text-[16px] text-[#494949]">
              {t("im_sec3.s_p")}
            </p>
            <p
              className={`absolute top-[420px] right-[400px] h-[127px] whitespace-nowrap border-r-[70px] border-l-[74px] text-[26px] leading-[124px] text-white [border-image-slice:0_70_0_74_fill] ${RISE} [transition-delay:600ms]`}
              style={{
                borderImageSource: `url(${img("/guanwang_second/front/images/products/water/popg_03-cfc15f9a86.webp")})`,
              }}
            >
              {t("im_sec3.pop")}
            </p>
            <p
              className={`absolute top-[560px] right-[380px] h-[121px] whitespace-nowrap border-r-[57px] border-l-[74px] text-[26px] leading-[117px] text-white [border-image-slice:0_57_0_74_fill] ${RISE} [transition-delay:1400ms]`}
              style={{
                borderImageSource: `url(${img("/guanwang_second/front/images/products/water/popb_07-cff0fbd28a.webp")})`,
              }}
            >
              {t("im_sec3.pop2")}
            </p>
          </div>
        </ProductInView>
        {/* im_sec_5: the phone stays where orvibo.com's three-line paragraph put it */}
        <ProductInView
          className="relative h-[960px] overflow-hidden bg-center bg-no-repeat text-center text-white"
          style={bg(
            "/guanwang_second/front/images/products/water/bg_08-4f33127de9.webp",
          )}
        >
          <h2 className="mx-auto mb-[45px] max-w-[860px] text-balance pt-[76px] text-[36px]">
            {t("im_sec_5.tit")}
          </h2>
          <p className="mx-auto w-[688px] text-[16px]">{t("im_sec_5.cont")}</p>
          <Image
            src={img(
              "/guanwang_second/front/images/products/water/iphone6_2-bef81215cf.webp",
            )}
            alt={ts("alt.phone")}
            width={306}
            height={615}
            unoptimized
            className={`absolute top-[495px] left-1/2 -translate-x-1/2 ${RISE} [transition-delay:600ms]`}
          />
        </ProductInView>
        {/* im_sec_6 */}
        <ProductInView className="pt-[120px] pb-[100px]">
          <h2 className="mb-[150px] text-center text-[36px] text-[#333333]">
            {t("im_sec_6.im_sec_6")}
          </h2>
          <ul className="mx-auto flex w-[880px] gap-x-[60px]">
            <li className="w-[270px]">
              <div
                className={`mx-auto mb-[15px] size-[146px] rounded-full bg-[position:0_-292px] ${TURN}`}
                style={bg(
                  "/guanwang_second/front/images/products/temp/icons_01-0d21e0242b.webp",
                )}
              />
              <p className="text-balance text-center text-[18px] text-[#333333]">
                {t("im_sec_6.clearfix")}
              </p>
            </li>
            <li className="w-[240px]">
              <div
                className={`mx-auto mb-[15px] size-[146px] rounded-full bg-[position:0_-438px] ${TURN}`}
                style={bg(
                  "/guanwang_second/front/images/products/temp/icons_01-0d21e0242b.webp",
                )}
              />
              <p className="text-balance text-center text-[18px] text-[#333333]">
                {t("im_sec_6.clearfix2")}
              </p>
            </li>
            <li className="w-[240px]">
              <div
                className={`mx-auto mb-[15px] size-[146px] rounded-full bg-[position:0_0] ${TURN}`}
                style={bg(
                  "/guanwang_second/front/images/products/temp/icons_01-0d21e0242b.webp",
                )}
              />
              <p className="text-balance text-center text-[18px] text-[#333333]">
                {t("im_sec_6.clearfix3")}
              </p>
            </li>
          </ul>
        </ProductInView>
        {/* install */}
        <div className="relative mx-auto w-[1200px] pt-[30px] pb-[160px]">
          <div className="flex border-b border-b-[#111111]/20 py-[90px]">
            <h2 className="w-[300px] shrink-0 text-[30px] leading-[1.6em] font-semibold text-[#111111]">
              {t("install.title")}
            </h2>
            <Image
              src={img(
                "/guanwang_second/front/images/products/water/pro-2f59f59255.webp",
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
