import { TextImage } from "@/components/orvibo/product/TextImage";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { DESKTOP_WORDS } from "./pictureWords";

export function S30cOverview({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview" className="font-normal">
        {/* s30c_sec1 */}
        <section
          className="h-[9.6rem] bg-cover bg-center bg-no-repeat pt-[0.9rem] text-center text-[#111111]"
          style={bg(
            "/guanwang_second/front/images/new/products/s30c/s30c_sec1-58689390fb.webp",
          )}
        >
          <h1 className="text-[0.36rem] leading-[1.6]">
            {t("s30c_sec1.s30c_sec1")}
          </h1>
          <p className="text-[0.6rem] leading-[1.6] font-black">
            {t("s30c_sec1.s30c_sec12")}
          </p>
          <p className="mt-[0.2rem] text-[0.2rem] leading-[1.6] text-[#7c7c7c]">
            {t("s30c_sec1.s30c_sec13")}
          </p>
        </section>
        {/* s30c_sec2: voice control, two scenes with a speech bubble each */}
        <section className="bg-[#f5f5f5] pt-[0.84rem] text-[#111111]">
          <h2 className="text-center text-[0.42rem] leading-[1.6]">
            {t("s30c_sec2.s30c_sec2")}
          </h2>
          <p className="mx-auto mt-[0.18rem] max-w-[9.6rem] text-center text-[0.18rem] leading-[1.6]">
            {t("s30c_sec2.s30c_sec22")}
          </p>
          <div
            className="mx-auto mt-[0.3rem] h-[0.5rem] w-[2.76rem] bg-cover bg-center bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/new/products/s30c/icon-871640f4df.webp",
            )}
          />
          <div className="mx-auto mt-[0.6rem] w-[16rem] pb-[0.96rem]">
            <div
              className="h-[8rem] bg-cover bg-center bg-no-repeat px-[2rem] pt-[1.08rem]"
              style={bg(
                "/guanwang_second/front/images/new/products/s30c/s30c_sec2_1-c964874d88.webp",
              )}
            >
              <h3 className="text-[0.36rem] leading-[1.6]">
                {t("s30c_sec2.ss2c_item")}
              </h3>
              <p className="mt-[0.18rem] max-w-[8.4rem] text-[0.18rem] leading-[1.6]">
                {t("s30c_sec2.ss2c_item2")}
              </p>
              <div
                className="mt-[0.3rem] mb-[0.36rem] h-[0.48rem] w-[2.9rem] bg-contain bg-center bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/new/products/s30c/s30c_sec2_icon1-1b919dc95d.webp",
                )}
              />
              <p
                className="w-fit h-[0.66rem] whitespace-nowrap text-[0.24rem] leading-[0.66rem] text-[#363636] border-l-[0.2rem] border-r-[0.2rem] [border-image-slice:0_20_0_20_fill] min-w-[4.38rem] px-[0.04rem]"
                style={{
                  borderImageSource: `url(${img("/guanwang_second/front/images/new/products/s30c/s30c_sec2_icon3-cd1d4c5f8e.webp")})`,
                }}
              >
                {t("s30c_sec2.ss2c_item3")}
              </p>
            </div>
            <div
              className="mt-[0.96rem] h-[8rem] bg-cover bg-center bg-no-repeat px-[2rem] pt-[1.08rem] text-right text-white"
              style={bg(
                "/guanwang_second/front/images/new/products/s30c/s30c_sec2_2-1b01dfaf77.webp",
              )}
            >
              <h3 className="text-[0.36rem] leading-[1.6]">
                {t("s30c_sec2.ss2c_item4")}
              </h3>
              <p className="mt-[0.18rem] ml-auto max-w-[7.8rem] text-[0.18rem] leading-[1.6]">
                {t("s30c_sec2.ss2c_item5")}
              </p>
              <div
                className="mt-[0.3rem] mb-[0.36rem] ml-[8.8rem] h-[0.56rem] w-[3rem] bg-contain bg-center bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/new/products/s30c/s30c_sec2_icon2-7e058b4f8c.webp",
                )}
              />
              <p
                className="w-fit h-[0.66rem] whitespace-nowrap text-[0.24rem] leading-[0.66rem] text-[#363636] border-l-[0.2rem] border-r-[0.2rem] [border-image-slice:0_20_0_20_fill] ml-auto min-w-[2.9rem] pl-[0.184rem] pr-[0.2rem] text-left"
                style={{
                  borderImageSource: `url(${img("/guanwang_second/front/images/new/products/s30c/s30c_sec2_icon4-34b41a5038.webp")})`,
                }}
              >
                {t("s30c_sec2.ss2c_item6")}
              </p>
            </div>
          </div>
        </section>
        {/* s30c_sec3 */}
        <section
          className="h-[9.58rem] bg-cover bg-center bg-no-repeat pt-[1.05rem] text-center text-white"
          style={bg(
            "/guanwang_second/front/images/new/products/s30c/s30c_sec3-69e72caf97.webp",
          )}
        >
          <h2 className="text-[0.42rem] leading-[1.6] font-black">
            {t("s30c_sec3.s30c_sec3")}
          </h2>
          <p className="mx-auto mt-[0.18rem] max-w-[8.6rem] text-balance text-[0.18rem] leading-[1.6]">
            {t("s30c_sec3.s30c_sec32")}
          </p>
          <p className="sr-only">{t("alt.app")}</p>
        </section>
        {/* s30c_sec4: four uses for a timer */}
        <section className="bg-white pt-[0.96rem] pb-[1.2rem]">
          <ul className="mx-auto grid w-[14.92rem] grid-cols-2 gap-[0.3rem] p-[0.15rem]">
            <li className="h-[4rem] pt-[0.403rem] text-[#111111] relative isolate">
              <TextImage
                picture={DESKTOP_WORDS.s30c_sec4_1}
                locale={locale}
                text={text}
                fit={{ size: "cover" }}
                className="absolute inset-0 -z-10"
              />
              <h3 className="pl-[0.24rem] text-[0.24rem] leading-[1.6] font-black">
                {t("s30c_sec4.clear")}
              </h3>
              <p className="mt-[0.14rem] pl-[0.252rem] text-[0.14rem] leading-[1.6] max-w-[3.85rem]">
                {t("s30c_sec4.clear2")}
              </p>
              <p className="sr-only">{t("alt.heater")}</p>
            </li>
            <li
              className="h-[4rem] pt-[0.403rem] bg-cover bg-center bg-no-repeat text-[#111111]"
              style={bg(
                "/guanwang_second/front/images/new/products/s30c/s30c_sec4_2-c17684afaa.webp",
              )}
            >
              <h3 className="pl-[0.24rem] text-[0.24rem] leading-[1.6] font-black">
                {t("s30c_sec4.clear3")}
              </h3>
              <p className="mt-[0.14rem] pl-[0.252rem] text-[0.14rem] leading-[1.6] max-w-[6.45rem]">
                {t("s30c_sec4.clear4")}
              </p>
            </li>
            <li className="h-[4rem] bg-gradient-to-br from-[#3a3f47] to-[#15181d] pt-[0.403rem] text-white">
              <h3 className="pl-[0.24rem] text-[0.24rem] leading-[1.6] font-black">
                {t("s30c_sec4.clear5")}
              </h3>
              <p className="mt-[0.14rem] pl-[0.252rem] text-[0.14rem] leading-[1.6] max-w-[5.45rem]">
                {t("s30c_sec4.clear6")}
              </p>
            </li>
            <li
              className="h-[4rem] pt-[0.403rem] bg-cover bg-center bg-no-repeat text-white"
              style={bg(
                "/guanwang_second/front/images/new/products/s30c/s30c_sec4_4-11efbafc25.webp",
              )}
            >
              <h3 className="pl-[0.24rem] text-[0.24rem] leading-[1.6] font-black">
                {t("s30c_sec4.clear7")}
              </h3>
              <p className="mt-[0.14rem] pl-[0.252rem] text-[0.14rem] leading-[1.6] max-w-[6.45rem]">
                {t("s30c_sec4.clear8")}
              </p>
            </li>
          </ul>
        </section>
        {/* s30c_sec5 */}
        <section
          className="h-[9rem] bg-cover bg-center bg-no-repeat pt-[3.78rem] pl-[10.08rem] text-white"
          style={bg(
            "/guanwang_second/front/images/new/products/s30c/s30c_sec5-2c0449f466.webp",
          )}
        >
          <h2 className="max-w-[7rem] text-balance text-[0.42rem] leading-[1.6]">
            {t("s30c_sec5.s30c_sec5")}
          </h2>
          <p className="mt-[0.18rem] max-w-[7.6rem] text-[0.18rem] leading-[1.6]">
            {t("s30c_sec5.s30c_sec52")}
          </p>
        </section>
        {/* s30c_sec6 */}
        <section className="h-[9rem] pt-[0.714rem] text-center text-[#111111] relative isolate">
          <TextImage
            picture={DESKTOP_WORDS.s30c_sec6}
            locale={locale}
            text={text}
            fit={{ size: "cover" }}
            className="absolute inset-0 -z-10"
          />
          <h2 className="text-[0.42rem] leading-[1.6]">
            {t("s30c_sec6.s30c_sec6")}
          </h2>
          <p className="mx-auto mt-[0.09rem] max-w-[10rem] text-balance text-[0.18rem] leading-[1.6]">
            {t("s30c_sec6.s30c_sec62")}
          </p>
          <p className="sr-only">{t("alt.parts")}</p>
        </section>
        {/* s30c_sec7 */}
        <section
          className="h-[7.98rem] bg-cover bg-center bg-no-repeat pt-[0.714rem] text-center"
          style={bg(
            "/guanwang_second/front/images/new/products/s30c/s30c_sec7-e8f434a35b.webp",
          )}
        >
          <h2 className="text-[0.42rem] leading-[1.6] text-[#111111]">
            {t("s30c_sec7.s30c_sec7")}
          </h2>
          <p className="mt-[0.09rem] text-[0.18rem] leading-[1.6] text-[#888888]">
            {t("s30c_sec7.s30c_sec72")}
          </p>
        </section>
        {/* s30c_sec8: setup in three steps */}
        <section
          className="relative h-[7rem] bg-cover bg-center bg-no-repeat pt-[0.714rem]"
          style={bg(
            "/guanwang_second/front/images/new/products/s30c/s30c_sec8-fdcf0d3aa0.webp",
          )}
        >
          <h2 className="text-center text-[0.42rem] leading-[1.6] text-[#111111]">
            {t("s30c_sec8.s30c_sec8")}
          </h2>
          <ol className="mx-auto mt-[3.8rem] flex w-[12rem] text-center text-[0.16rem] leading-[1.6] font-medium text-[#888888]">
            <li className="w-[30%]">{t("s30c_sec8.ss8_content")}</li>
            <li className="w-[39%]">{t("s30c_sec8.ss8_content2")}</li>
            <li className="w-[30%]">{t("s30c_sec8.ss8_content3")}</li>
          </ol>
          <p className="absolute bottom-[30px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-medium text-[#111111]/60">
            {t("s30c_sec8.data_source_tips")}
          </p>
        </section>
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
