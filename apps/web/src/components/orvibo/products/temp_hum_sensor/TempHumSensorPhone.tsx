import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function TempHumSensorPhone({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* free_model clear */}
      <div id="overview-phone" className="block">
        {/* clear mt */}
        <div className="relative float-left w-[7.5rem] bg-white after:clear-both after:content-[''] after:invisible after:h-0">
          <section
            className="bg-center pt-[0.4rem] block relative w-full h-[8.19rem] text-center bg-cover bg-no-repeat text-balance"
            style={bg(
              "/guanwang_second/front/mobile/images/details/st20/bg_01-23a89181a4.webp",
            )}
          >
            <h1 className="px-[5%] mb-[0.12rem] font-medium text-[0.384rem] leading-[1.2] text-[#333333] text-balance">
              {t("temp_sec_1.tit")}
            </h1>
            <p className="mx-auto px-[0.4rem] text-[0.19rem] leading-[1.45] text-[#888888] text-balance">
              {t("temp_sec_1.fp_content")}
              <br />
              {t("temp_sec_1.fp_content2")}
            </p>
          </section>
          <section className="block text-[0.192rem]">
            <div
              className="bg-center w-full h-[2.3rem] bg-cover text-center bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/st20/bg_02-8018ded538.webp",
              )}
            >
              <p className="mx-auto px-[0.4rem] pt-[1.04rem] text-white text-balance">
                {t("temp_sec2.shadow")}
              </p>
            </div>
            <div
              className="bg-center w-full h-[2.3rem] bg-cover text-center bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/st20/bg_03-4a36e1b3ab.webp",
              )}
            >
              <p className="pt-[1.04rem] text-white max-w-[4rem]">
                {t("temp_sec2.shadow2")}
              </p>
            </div>
            <div
              className="bg-center w-full h-[2.3rem] bg-cover text-center bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/st20/bg_04-ae119f2dd4.webp",
              )}
            >
              <p className="mx-auto px-[0.4rem] pt-[1.04rem] text-white text-balance">
                {t("temp_sec2.shadow3")}
              </p>
            </div>
            <div
              className="bg-center w-full h-[2.3rem] bg-cover text-center bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/st20/bg_05-ef62fa765f.webp",
              )}
            >
              <p className="mx-auto px-[0.4rem] pt-[1.04rem] text-white text-balance">
                {t("temp_sec2.shadow4")}
              </p>
            </div>
          </section>
          <section
            className="block w-full h-[10.16rem] bg-cover bg-no-repeat"
            style={bg(
              "/guanwang_second/front/mobile/images/details/st20/bg_06-e749791383.webp",
            )}
          >
            <p className="mb-[6.7rem] pt-[0.8rem] text-[#333333] text-center text-[0.288rem] text-balance">
              {t("temp_sec3.temp_sec3")}
            </p>
            <div className="mx-auto px-[10%] w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
              <div className="w-[33.3333%] float-left">
                <div
                  className="bg-center mx-auto mb-[0.1rem] w-[0.61rem] h-[0.82rem] bg-cover bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/mobile/images/details/st20/icon_01-6706fb31b4.webp",
                  )}
                />
                <p className="text-[0.192rem] text-center max-w-[1.7rem] mx-auto text-balance">
                  {t("temp_sec3.clearfix")}
                </p>
              </div>
              <div className="w-[33.3333%] float-left">
                <div
                  className="bg-center mx-auto mb-[0.1rem] w-[0.84rem] h-[0.82rem] bg-cover bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/mobile/images/details/st20/icon_02-c5998fe18b.webp",
                  )}
                />
                <p className="text-[0.192rem] text-center text-balance">
                  {t("temp_sec3.clearfix2")}
                </p>
              </div>
              <div className="w-[33.3333%] float-left">
                <div
                  className="bg-center mx-auto mb-[0.1rem] w-[0.77rem] h-[0.82rem] bg-cover bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/mobile/images/details/st20/icon_03-1f32dc6b6c.webp",
                  )}
                />
                <p className="text-[0.192rem] text-center max-w-[2.1rem] mx-auto text-balance">
                  {t("temp_sec3.clearfix3")}
                </p>
              </div>
            </div>
          </section>
          <section
            className="bg-center block h-[9rem] text-white w-full bg-cover bg-no-repeat"
            style={bg(
              "/guanwang_second/front/mobile/images/details/st20/bg_07-d9c36093ee.webp",
            )}
          >
            <h2 className="px-[5%] mb-[0.4rem] pt-[0.5rem] font-medium text-[0.288rem] text-center text-balance">
              {t("temp_sec4.tit")}
            </h2>
            <p className="px-[2%] pt-[0.1rem] text-[0.192rem] text-center text-balance">
              {t("temp_sec4.cont")}
            </p>
          </section>
          <section
            className="bg-center block h-[9rem] text-white w-full bg-cover bg-no-repeat"
            style={bg(
              "/guanwang_second/front/mobile/images/details/st20/bg_08-81665602bb.webp",
            )}
          >
            <h2 className="px-[5%] mb-[0.4rem] pt-[0.5rem] font-medium text-[0.288rem] text-center text-balance">
              {t("temp_sec5.tit")}
            </h2>
            <p className="px-[2%] pt-[0.1rem] text-[0.192rem] text-center text-balance">
              {t("temp_sec5.cont")}
            </p>
          </section>
          <section
            className="bg-center block relative bg-cover w-full h-[11rem] text-center bg-no-repeat text-balance"
            style={bg(
              "/guanwang_second/front/mobile/images/details/st20/bg_09-c1af28e8c3.webp",
            )}
          >
            <p className="px-[5%] mb-[0.5rem] pt-[0.7rem] text-[#333333] text-[0.288rem] text-balance">
              {t("temp_sec6.tit")}
            </p>
            <p className="px-[5%] text-[#ccb697] text-[0.192rem]">
              {t("temp_sec6.s_p")}
            </p>
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/st20/cir_pro-3d8bb01df2.webp",
              )}
              alt=""
              width={182}
              height={182}
              unoptimized
              className="align-middle left-[24.2188%] w-[30%] absolute top-[8rem]"
            />
          </section>
          <section
            className="bg-center block relative bg-cover w-full h-[11.01rem] text-center bg-no-repeat text-balance"
            style={bg(
              "/guanwang_second/front/mobile/images/details/st20/bg_10-f716ce7212.webp",
            )}
          >
            <p className="px-[5%] mb-[0.5rem] pt-[0.7rem] text-[#333333] text-[0.288rem] text-balance">
              {t("temp_sec6.tit")}
            </p>
            <p className="px-[5%] text-[#52b7ed] text-[0.192rem]">
              {t("temp_sec6.s_p2")}
            </p>
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/st20/cir_pro-3d8bb01df2.webp",
              )}
              alt=""
              width={182}
              height={182}
              unoptimized
              className="align-middle right-[1.1rem] w-[30%] absolute top-[4.8rem]"
            />
          </section>
          <section className="pt-[0.7rem] pb-[1.2rem] border-b border-b-[#ebebeb] block text-center bg-[#fdfdfd] text-balance">
            <p className="mb-[0.2rem]">{t("temp_sec7.temp_sec7")}</p>
            <div className="mx-auto mb-[0.25rem] px-[5%] w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
              <div className="w-[50%] float-left">
                <div
                  className="bg-center mx-auto w-[1.46rem] h-[1.46rem] bg-contain bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/mobile/images/details/st20/icon_04-f6295b46ec.webp",
                  )}
                />
                <p className="mt-[0.1rem] text-[#333333] text-[0.176rem] max-w-[4rem]">
                  {t("temp_sec7.clearfix")}
                </p>
              </div>
              <div className="w-[50%] float-left">
                <div
                  className="bg-center mx-auto w-[1.46rem] h-[1.46rem] bg-contain bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/mobile/images/details/st20/icon_05-cc2a2bb24e.webp",
                  )}
                />
                <p className="mt-[0.1rem] text-[#333333] text-[0.176rem]">
                  {t("temp_sec7.clearfix2")}
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
                <p className="mt-[0.1rem] text-[#333333] text-[0.176rem]">
                  {t("temp_sec7.clearfix3")}
                </p>
              </div>
              <div className="w-[50%] float-left">
                <div
                  className="bg-center mx-auto w-[1.46rem] h-[1.46rem] bg-contain bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/mobile/images/details/st20/icon_07-55ba9f56c5.webp",
                  )}
                />
                <p className="mt-[0.1rem] text-[#333333] text-[0.176rem]">
                  {t("temp_sec7.clearfix4")}
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
                  "/guanwang_second/front/mobile/images/details/st20/pro-e2b2184d16.webp",
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => (
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
