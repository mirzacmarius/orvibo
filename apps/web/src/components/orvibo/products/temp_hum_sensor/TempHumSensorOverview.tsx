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
] as const;

/** A phone or app screen that rises into place once its section is on screen. */
const RISE =
  "translate-y-[100px] opacity-0 transition-[opacity,transform] [transition-delay:600ms] [transition-duration:1000ms] [transition-timing-function:ease] group-data-[shown]:translate-y-0 group-data-[shown]:opacity-100 motion-reduce:transition-none";

/** A round feature icon that turns in once its section is on screen. */
const TURN =
  "-rotate-[350deg] opacity-0 transition-[opacity,transform] [transition-delay:600ms] [transition-duration:2000ms] [transition-timing-function:ease-out] group-data-[shown]:rotate-0 group-data-[shown]:opacity-100 motion-reduce:transition-none";

export function TempHumSensorOverview({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview" className="bg-white">
        {/* temp_sec_1 */}
        <div
          className="relative h-[800px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/temp/bg_01-dcee45720f.webp",
          )}
        >
          <div className="absolute top-[330px] left-[19.2708%] w-[600px]">
            <h1 className="mb-[20px] text-[44px] text-[#333333]">
              {t("temp_sec_1.tit")}
            </h1>
            <p className="text-[18px] text-[#888888]">
              {t("temp_sec_1.fp_content")}
            </p>
            <p className="mt-[28.8px] text-[18px] text-[#888888]">
              {t("temp_sec_1.fp_content2")}
            </p>
          </div>
        </div>
        {/* temp_sec2: the panel under the pointer shows in colour, without its
            veil; the first one has no photo (missing on orvibo.com too) */}
        <div className="relative flex h-[960px] overflow-hidden">
          <h2
            className="absolute top-[42px] left-[19.2708%] z-10 h-[74px] w-[1181px] bg-no-repeat text-center text-[30px] leading-[74px] text-white"
            style={bg(
              "/guanwang_second/front/images/products/temp/b_shadow_03-8b2699d3a5.webp",
            )}
          >
            {t("temp_sec2.bg_shadow")}
          </h2>
          <div className="group/panel w-1/4 bg-white grayscale hover:grayscale-0">
            <div className="h-full bg-black/30 px-[40px] pt-[450px] text-center group-hover/panel:invisible">
              <p className="text-[24px] text-white">
                <BalancedLines text={ts("temp_sec2.shadow")} />
              </p>
            </div>
          </div>
          <div
            className="group/panel w-1/4 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0"
            style={bg(
              "/guanwang_second/front/images/products/temp/bg_02_03-3440115ed4.webp",
            )}
          >
            <div className="h-full bg-black/30 px-[40px] pt-[450px] text-center group-hover/panel:invisible">
              <p className="text-[24px] text-white">
                <BalancedLines text={ts("temp_sec2.shadow2")} />
              </p>
            </div>
          </div>
          <div
            className="group/panel w-1/4 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0"
            style={bg(
              "/guanwang_second/front/images/products/temp/bg_02_04-b58e9543e6.webp",
            )}
          >
            <div className="h-full bg-black/30 px-[40px] pt-[450px] text-center group-hover/panel:invisible">
              <p className="text-[24px] text-white">
                <BalancedLines text={ts("temp_sec2.shadow3")} />
              </p>
            </div>
          </div>
          <div
            className="group/panel w-1/4 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0"
            style={bg(
              "/guanwang_second/front/images/products/temp/bg_02_05-a638717ed7.webp",
            )}
          >
            <div className="h-full bg-black/30 px-[40px] pt-[450px] text-center group-hover/panel:invisible">
              <p className="text-[24px] text-white">
                <BalancedLines text={ts("temp_sec2.shadow4")} />
              </p>
            </div>
          </div>
        </div>
        {/* temp_sec3 */}
        <div
          className="min-h-[831px] bg-no-repeat pt-[120px] pb-[30px] text-center"
          style={bg(
            "/guanwang_second/front/images/products/temp/bg_07-4614c17434.webp",
          )}
        >
          <h2 className="mb-[60px] text-[30px] text-[#333333]">
            {t("temp_sec3.temp_sec3")}
          </h2>
          <Image
            src={img(
              "/guanwang_second/front/images/products/temp/product_img-9b9d67a486.webp",
            )}
            alt=""
            width={427}
            height={458}
            unoptimized
            className="inline align-middle"
          />
          <ul className="mx-auto grid w-[687px] grid-cols-3 leading-[22px] text-[#333333]">
            <li className="px-[15px]">
              <div
                className="mx-auto mb-[20px] h-[82px] w-[61px]  bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/products/temp/icons-02da78392f.webp",
                )}
              />
              <p className="text-balance">{t("temp_sec3.clearfix")}</p>
            </li>
            <li className="px-[15px]">
              <div
                className="mx-auto mb-[27px] h-[75px] w-[77px] bg-[position:0_-82px] bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/products/temp/icons-02da78392f.webp",
                )}
              />
              <p className="text-balance">{t("temp_sec3.clearfix2")}</p>
            </li>
            <li className="px-[15px]">
              <div
                className="mx-auto mb-[20px] h-[82px] w-[84px] bg-[position:0_-157px] bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/products/temp/icons-02da78392f.webp",
                )}
              />
              <p className="text-balance">{t("temp_sec3.clearfix3")}</p>
            </li>
          </ul>
        </div>
        {/* temp_sec4 */}
        <ProductInView
          className="h-[959px] overflow-hidden bg-cover bg-center bg-no-repeat text-center text-white"
          style={bg(
            "/guanwang_second/front/images/products/temp/bg_03-9a58dabb92.webp",
          )}
        >
          <h2 className="mx-auto mb-[40px] max-w-[860px] text-balance pt-[75px] text-[36px]">
            {t("temp_sec4.tit")}
          </h2>
          <p className="mx-auto max-w-[720px] text-[16px]">
            {t("temp_sec4.cont")}
          </p>
          <Image
            src={img(
              "/guanwang_second/front/images/products/temp/iphone_1-b86a290ef1.webp",
            )}
            alt={ts("alt.phone1")}
            width={306}
            height={615}
            unoptimized
            className={`mt-[26px] ml-[58.3333%] block ${RISE}`}
          />
        </ProductInView>
        {/* temp_sec5 */}
        <ProductInView
          className="relative h-[959px] overflow-hidden bg-center bg-no-repeat text-center text-white"
          style={bg(
            "/guanwang_second/front/images/products/temp/bg_04-f096072e1b.webp",
          )}
        >
          <h2 className="mx-auto mb-[40px] max-w-[860px] text-balance pt-[75px] text-[36px]">
            {t("temp_sec5.tit")}
          </h2>
          <p className="mx-auto max-w-[720px] text-[16px]">
            {t("temp_sec5.cont")}
          </p>
          <Image
            src={img(
              "/guanwang_second/front/images/products/temp/iphone_2-98670f8e10.webp",
            )}
            alt={ts("alt.phone2")}
            width={362}
            height={729}
            unoptimized
            className={`absolute top-[369px] left-[40.625%] ${RISE}`}
          />
        </ProductInView>
        {/* temp_sec6: the sensors on the TV and in the wardrobe stay where
            orvibo.com's two-line paragraphs put them */}
        <ProductInView
          className="h-[960px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/temp/bg_06-aec4abf3b7.webp",
          )}
        >
          <h2 className="mb-[55px] pt-[75px] text-center text-[36px] text-[#333333]">
            {t("temp_sec6.tit")}
          </h2>
          <div className="flex">
            <div className="relative w-1/2">
              <p className="mx-auto w-[556px] text-pretty pl-[14.21875%] text-[16px] text-[#c3a984]">
                {t("temp_sec6.s_p")}
              </p>
              <Image
                src={img(
                  "/guanwang_second/front/images/products/temp/temp_img-4dfa44bbd5.webp",
                )}
                alt={ts("alt.screen1")}
                width={345}
                height={565}
                unoptimized
                className={`absolute top-[108px] right-[-10px] ${RISE}`}
              />
              <Image
                src={img(
                  "/guanwang_second/front/images/products/temp/product_small-a85dc41eac.webp",
                )}
                alt=""
                width={59}
                height={59}
                unoptimized
                className="absolute top-[453px] left-[40%] ml-[49px]"
              />
            </div>
            <div className="relative w-1/2 text-right">
              <p className="mx-auto w-[556px] text-pretty pr-[14.21875%] text-[16px] text-[#60bcee]">
                {t("temp_sec6.s_p2")}
              </p>
              <Image
                src={img(
                  "/guanwang_second/front/images/products/temp/temp_img2-d076743638.webp",
                )}
                alt={ts("alt.screen2")}
                width={346}
                height={565}
                unoptimized
                className={`absolute top-[108px] left-[-10px] ${RISE}`}
              />
              <Image
                src={img(
                  "/guanwang_second/front/images/products/temp/product_small-a85dc41eac.webp",
                )}
                alt=""
                width={59}
                height={59}
                unoptimized
                className="absolute top-[193px] right-[25%] mr-[74px]"
              />
            </div>
          </div>
        </ProductInView>
        {/* temp_sec7 */}
        <ProductInView className="bg-[#fdfdfd] pt-[120px] pb-[240px]">
          <h2 className="mb-[175px] text-center text-[36px] text-[#333333]">
            {t("temp_sec7.temp_sec7")}
          </h2>
          <ul className="mx-auto my-[20px] flex w-[1280px] justify-between">
            <li className="w-[270px]">
              <div
                className={`mx-auto mb-[15px] size-[146px] rounded-full bg-[position:0_-292px] ${TURN}`}
                style={bg(
                  "/guanwang_second/front/images/products/temp/icons_01-0d21e0242b.webp",
                )}
              />
              <p className="text-balance text-center text-[18px]">
                {t("temp_sec7.clearfix")}
              </p>
            </li>
            <li className="w-[270px]">
              <div
                className={`mx-auto mb-[15px] size-[146px] rounded-full bg-[position:0_-438px] ${TURN}`}
                style={bg(
                  "/guanwang_second/front/images/products/temp/icons_01-0d21e0242b.webp",
                )}
              />
              <p className="text-balance text-center text-[18px]">
                {t("temp_sec7.clearfix2")}
              </p>
            </li>
            <li className="w-[270px]">
              <div
                className={`mx-auto mb-[15px] size-[146px] rounded-full bg-[position:0_0] ${TURN}`}
                style={bg(
                  "/guanwang_second/front/images/products/temp/icons_01-0d21e0242b.webp",
                )}
              />
              <p className="text-balance text-center text-[18px]">
                {t("temp_sec7.clearfix3")}
              </p>
            </li>
            <li className="w-[270px]">
              <div
                className={`mx-auto mb-[15px] size-[146px] rounded-full bg-[position:0_-146px] ${TURN}`}
                style={bg(
                  "/guanwang_second/front/images/products/temp/icons_01-0d21e0242b.webp",
                )}
              />
              <p className="text-balance text-center text-[18px]">
                {t("temp_sec7.clearfix4")}
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
                "/guanwang_second/front/images/products/temp/pro-e2b2184d16.webp",
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
