import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

export function T1CSpec({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);

  return (
    <div
      id="spec"
      className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]"
    >
      {/* install_sec1 */}
      <div className="h-[900px] bg-[#eff0f4] text-center w-full relative">
        <h2 className="mb-[24px] pt-[102px] text-[42px] text-[#2f2f2f] font-normal px-[0.2rem] text-balance">
          {t("install_sec1.install_sec1")}
        </h2>
        <p className="text-[18px] text-[#2f2f2f] max-w-[11.6rem] mx-auto px-[0.2rem] text-balance">
          {t("install_sec1.install_sec12")}
        </p>
        {/* pic */}
        <div
          className="bg-center mx-auto mt-[90px] w-[1200px] h-[360px] bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/new/products/t1c/install_pic1-6728e45334.webp",
          )}
        />
        <p className="text-[14px] text-[#b0b0b0] text-center absolute w-full bottom-[80px]">
          {t("install_sec1.install_sec13")}
        </p>
      </div>
      {/* install_sec2 */}
      <div className="h-[550px] bg-[#f8fafc] text-center">
        <h2 className="pt-[124px] text-[42px] text-[#2f2f2f] font-normal px-[0.2rem] text-balance">
          {t("install_sec2.install_sec2")}
        </h2>
        <h3 className="mt-[18px] text-[30px] text-[#2f2f2f] font-normal">
          {t("install_sec2.install_sec22")}
        </h3>
        <p className="mt-[10px] text-[18px] text-[#b2b2b2]">
          {t("install_sec2.install_sec23")}
        </p>
        {/* content clear */}
        <div className="mx-auto mt-[86px] w-[1200px] after:invisible after:clear-both after:content-[''] after:h-0">
          <div className="float-left flex w-[33.3333%] text-left">
            <em
              className="bg-[position:-140px_0] ml-[70px] block w-[70px] h-[68px] shrink-0 bg-no-repeat"
              style={bg(
                "/guanwang_second/front/images/new/products/t1c/install_icons-67b41150ba.webp",
              )}
            />
            <div className="ml-[16px] pr-[0.2rem]">
              <p className="text-[24px] text-[#2f2f2f]">{t("content.txt1")}</p>
              <p className="mt-[6px] text-[18px] text-[#2f2f2f]">
                {t("content.txt2")}
              </p>
            </div>
          </div>
          <div className="float-left flex w-[33.3333%] text-left">
            <em
              className="bg-[position:-70px_0] ml-[70px] block w-[70px] h-[68px] shrink-0 bg-no-repeat"
              style={bg(
                "/guanwang_second/front/images/new/products/t1c/install_icons-67b41150ba.webp",
              )}
            />
            <div className="ml-[16px] pr-[0.2rem]">
              <p className="text-[24px] text-[#2f2f2f]">{t("content.txt12")}</p>
              <p className="mt-[6px] text-[18px] text-[#2f2f2f]">
                {t("content.txt22")}
              </p>
            </div>
          </div>
          <div className="float-left flex w-[33.3333%] text-left">
            <em
              className="ml-[70px] block w-[70px] h-[68px] shrink-0 bg-no-repeat"
              style={bg(
                "/guanwang_second/front/images/new/products/t1c/install_icons-67b41150ba.webp",
              )}
            />
            <div className="ml-[16px] pr-[0.2rem]">
              <p className="text-[24px] text-[#2f2f2f]">{t("content.txt13")}</p>
              <p className="mt-[6px] text-[18px] text-[#2f2f2f]">
                {t("content.txt23")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* install_sec3 */}
      <div className="relative bg-white pb-[1rem]">
        {/* data_source_tips */}
        <div className="absolute bottom-[0.4rem] left-1/2 w-[1200px] -translate-x-1/2 text-[16px] text-[#111111]/60">
          {t("data_source_tips.data_source_tips")}
        </div>
        <h2 className="mb-[46px] pt-[76px] text-[42px] text-[#2f2f2f] text-center font-normal">
          {t("install_sec3.install_sec3")}
        </h2>
        {/* pic */}
        <div
          className="bg-center mx-auto w-[1200px] h-[513px] bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/new/products/t1c/install_pic2-1b4b6529d8.webp",
          )}
        />
        {/* content */}
        <div className="mx-auto my-[84px] flex w-[1200px] justify-between gap-x-[0.6rem]">
          <dl className="grid h-fit grid-cols-[auto_3.9rem] gap-x-[0.14rem] text-[16px] leading-[32px] text-[#2f2f2f]">
            <dt>{t("content.clear")}</dt>
            <dd className="mb-[5px]">{"T1C"}</dd>
            <dt>{t("content.clear2")}</dt>
            <dd className="mb-[5px]">{"336mm*66mm*70mm"}</dd>
            <dt>{t("content.clear3")}</dt>
            <dd className="mb-[5px]">{t("content.clear4")}</dd>
            <dt>{t("content.clear5")}</dt>
            <dd className="mb-[5px]">{t("content.clear6")}</dd>
            <dt>{t("content.clear7")}</dt>
            <dd className="mb-[5px]">{t("content.clear8")}</dd>
            <dt>{t("content.clear9")}</dt>
            <dd className="mb-[5px]">{t("content.clear10")}</dd>
            <dt>{t("content.clear11")}</dt>
            <dd className="mb-[5px]">{t("content.clear12")}</dd>
            <dt>{t("content.clear13")}</dt>
            <dd className="mb-[5px]">{t("content.clear14")}</dd>
            <dt>{t("content.clear15")}</dt>
            <dd className="mb-[5px]">{t("content.clear16")}</dd>
          </dl>
          <dl className="grid h-fit grid-cols-[auto_4.1rem] gap-x-[0.14rem] text-[16px] leading-[32px] text-[#2f2f2f]">
            <dt>{t("content.clear17")}</dt>
            <dd className="mb-[5px]">{t("content.clear18")}</dd>
            <dt>{t("content.clear19")}</dt>
            <dd className="mb-[5px]">{t("content.clear20")}</dd>
            <dt>{t("content.clear21")}</dt>
            <dd className="mb-[5px]">{t("content.clear22")}</dd>
            <dt>{t("content.clear23")}</dt>
            <dd className="mb-[5px]">{t("content.clear24")}</dd>
            <dt>{t("content.clear25")}</dt>
            <dd className="mb-[5px]">{t("content.clear26")}</dd>
            <dt>{t("content.clear27")}</dt>
            <dd className="mb-[5px]">{t("content.clear28")}</dd>
            <dt>{t("content.clear29")}</dt>
            <dd className="mb-[5px]">{"0~90%RH/-20℃~50℃"}</dd>
            <dt>{t("content.clear30")}</dt>
            <dd className="mb-[5px]">{t("content.clear31")}</dd>
          </dl>
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
