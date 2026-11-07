import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function WaterAlarmPhone({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* free_model clear */}
      <div id="overview-phone" className="block">
        {/* clear mt */}
        <div className="relative float-left w-[7.5rem] bg-white after:clear-both after:content-[''] after:invisible after:h-0">
          <section
            className="bg-center pt-[1.7rem] block text-center w-full h-[8.19rem] bg-cover bg-no-repeat text-balance"
            style={bg(
              "/guanwang_second/front/mobile/images/details/sw20/bg_01-826463e082.webp",
            )}
          >
            <h1 className="mb-[0.57rem] font-medium text-[0.384rem] text-[#333333]">
              {t("im_sec_1.im_sec_1")}
            </h1>
          </section>
          <section className="block text-[0.192rem]">
            <div
              className="bg-center w-full text-center h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/sw20/bg_02-62af811ddd.webp",
              )}
            >
              <p className="mx-auto px-[0.4rem] pt-[1.04rem] text-white text-balance">
                {t("im_sec2.shadow")}
              </p>
            </div>
            <div
              className="bg-center w-full text-center h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/sw20/bg_03-c60b5e1532.webp",
              )}
            >
              <p className="mx-auto px-[0.4rem] pt-[1.04rem] text-white text-balance">
                {t("im_sec2.shadow2")}
              </p>
            </div>
            <div
              className="bg-center w-full text-center h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/sw20/bg_04-577bc8e430.webp",
              )}
            >
              <p className="mx-auto px-[0.4rem] pt-[1.04rem] text-white text-balance">
                {t("im_sec2.shadow3")}
              </p>
            </div>
            <div
              className="bg-center w-full text-center h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/sw20/bg_05-d514ead4b9.webp",
              )}
            >
              <p className="mx-auto px-[0.4rem] pt-[1.04rem] text-white text-balance">
                {t("im_sec2.shadow4")}
              </p>
            </div>
          </section>
          <section
            className="bg-center block w-full text-center h-[10.16rem] bg-cover relative bg-no-repeat text-balance"
            style={bg(
              "/guanwang_second/front/mobile/images/details/sw20/bg_06-583a896391.webp",
            )}
          >
            <p className="mb-[0.5rem] pt-[0.5rem] text-[0.24rem] text-[#333333]">
              {t("im_sec3.f_p")}
            </p>
            <p className="px-[5%] text-[0.192rem] text-[#888888]">
              {t("im_sec3.s_p")}
            </p>
            <p
              className="absolute top-[6.9rem] left-[1rem] h-[1.45rem] whitespace-nowrap border-l-[0.845rem] border-r-[0.8rem] text-[0.208rem] leading-[1.416rem] text-white [border-image-slice:0_70_0_74_fill]"
              style={{
                borderImageSource: `url(${img("/guanwang_second/front/images/products/water/popg_03-cfc15f9a86.webp")})`,
              }}
            >
              {t("im_sec3.pop")}
            </p>
            <p
              className="absolute top-[8.3rem] left-[0.2rem] h-[1.405rem] whitespace-nowrap border-l-[0.86rem] border-r-[0.66rem] text-[0.208rem] leading-[1.36rem] text-white [border-image-slice:0_57_0_74_fill]"
              style={{
                borderImageSource: `url(${img("/guanwang_second/front/images/products/water/popb_07-cff0fbd28a.webp")})`,
              }}
            >
              {t("im_sec3.pop2")}
            </p>
          </section>
          <section
            className="bg-center block w-full text-center h-[9rem] bg-cover bg-no-repeat overflow-hidden text-balance"
            style={bg(
              "/guanwang_second/front/mobile/images/details/sw20/bg_08-e5b3ced162.webp",
            )}
          >
            <p className="pt-[0.9rem] text-white text-[0.288rem]">
              {t("im_sec_5.tit")}
            </p>
            <p className="mt-[0.5rem] mb-[0.2rem] px-[5%] text-white text-[0.192rem]">
              {t("im_sec_5.cont")}
            </p>
            <Image
              src={img(
                "/guanwang_second/front/images/products/water/iphone6_2-bef81215cf.webp",
              )}
              alt=""
              width={306}
              height={615}
              unoptimized
              className="inline align-middle w-[47.8125%]"
            />
          </section>
          <section className="pt-[0.7rem] pb-[1.2rem] border-b border-b-[#ebebeb] block text-center bg-[#fdfdfd] text-balance">
            <p className="mb-[0.5rem]">{t("im_sec_6.im_sec_6")}</p>
            <div className="mx-auto mb-[0.25rem] px-[5%] w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
              <div className="w-[50%] float-left">
                <div
                  className="bg-center mx-auto w-[1.46rem] h-[1.46rem] bg-contain bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/mobile/images/details/st20/icon_04-f6295b46ec.webp",
                  )}
                />
                <p className="mt-[0.3rem] text-[#333333] text-[0.176rem] max-w-[4rem]">
                  {t("im_sec_6.clearfix")}
                </p>
              </div>
              <div className="w-[50%] float-left">
                <div
                  className="bg-center mx-auto w-[1.46rem] h-[1.46rem] bg-contain bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/mobile/images/details/st20/icon_05-cc2a2bb24e.webp",
                  )}
                />
                <p className="mt-[0.3rem] text-[#333333] text-[0.176rem]">
                  {t("im_sec_6.clearfix2")}
                </p>
              </div>
            </div>
            <div className="mx-auto mb-[0.25rem] px-[5%] w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
              <div className="w-[50%] float-left">
                <div
                  className="bg-center mx-auto w-[1.46rem] h-[1.46rem] bg-contain bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/mobile/images/details/st20/icon_06-287d0a42e5.webp",
                  )}
                />
                <p className="mt-[0.3rem] text-[#333333] text-[0.176rem]">
                  {t("im_sec_6.clearfix3")}
                </p>
              </div>
            </div>
          </section>
          <div className="px-[0.4rem] pt-[1.1rem] pb-[0.8rem] overflow-hidden relative bg-white">
            <div className="overflow-hidden">
              <div className="text-[0.368rem] leading-[1.15] text-center font-semibold text-balance">
                {t("install.title2")}
              </div>
              <Image
                src={img(
                  "/guanwang_second/front/mobile/images/details/sw20/pro-2f59f59255.webp",
                )}
                alt=""
                width={280}
                height={280}
                unoptimized
                className="mx-auto mt-[0.7rem] mb-[1.2rem] align-middle w-[2.8rem] h-[2.8rem]"
              />
            </div>
            <div className="overflow-hidden">
              <div className="border-b border-b-[#cccccc] font-semibold text-[0.24rem] leading-[1.15] h-[0.8rem]">
                {t("m.params")}
              </div>
              <ul className="pt-[0.44rem] pb-[0.5rem]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                  <li key={n} className="text-[0.192rem] leading-[2em]">
                    {t(`install.l${n}`)} {t(`install.v${n}`)}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[0.192rem] text-[#111111]/60">
              {t("install.note")}
            </p>
          </div>
        </div>
      </div>
      {/* detail_tips */}
      <div className="px-[0.48rem] py-[0.6rem] w-full bg-[#202020]">
        <p className="text-[0.14rem] leading-[0.4rem] font-medium text-white/80 max-w-[19.5rem]">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
