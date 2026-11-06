import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function SosPhone({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* free_model clear */}
      <div id="overview-phone" className="block bg-contain">
        {/* clear mt */}
        <div className="relative float-left w-[7.5rem] bg-white after:clear-both after:content-[''] after:invisible after:h-0">
          <section
            className="bg-center pt-[1rem] block bg-cover text-center w-full h-[8.28rem] bg-no-repeat text-balance"
            style={bg(
              "/guanwang_second/front/mobile/images/details/se20/bg_01-8ad608c8d3.webp",
            )}
          >
            <h1 className="mb-[0.33rem] font-medium text-[0.384rem] text-[#333333]">
              {t("se20_sec_1.tit")}
            </h1>
            <p className="mb-[4.2rem] px-[6%] text-[#888888] text-[0.192rem]">
              {t("m.hero")}
            </p>
          </section>
          <section className="block bg-contain text-[0.192rem]">
            <div
              className="bg-center w-full text-center h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/se20/bg_02-12a54a458d.webp",
              )}
            >
              <p className="mx-auto px-[0.4rem] pt-[0.9rem] text-white text-balance">
                {t("se20_sec2.shadow")}
              </p>
            </div>
            <div
              className="bg-center w-full text-center h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/se20/bg_03-c97f02c302.webp",
              )}
            >
              <p className="mx-auto px-[0.4rem] pt-[0.9rem] text-white text-balance">
                {t("se20_sec2.shadow2")}
              </p>
            </div>
            <div
              className="bg-center w-full text-center h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/se20/bg_04-90a10603dc.webp",
              )}
            >
              <p className="mx-auto px-[0.4rem] pt-[0.7rem] text-white text-balance">
                {t("se20_sec2.shadow3")}
              </p>
            </div>
          </section>
          <section
            className="bg-center block bg-cover w-full text-center h-[9.34rem] relative bg-no-repeat text-balance"
            style={bg(
              "/guanwang_second/front/mobile/images/details/se20/bg_05-c46d7f4d73.webp",
            )}
          >
            <p className="px-[5%] mb-[0.65rem] pt-[5.8rem] text-[0.24rem] text-balance">
              {t("se20_sec_3.se20_sec_3")}
            </p>
            <div className="mx-auto px-[4.21875%] w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
              <div className="mr-[1.18rem] rounded-full bg-cover bg-[#5e89f5] w-[1.5rem] h-[1.5rem] float-left">
                <p className="pt-[0.6rem] text-[0.18rem] text-white">
                  {t("se20_sec_3.circle")}
                </p>
              </div>
              <div className="mr-[1.18rem] rounded-full bg-cover bg-[#39a7cb] w-[1.5rem] h-[1.5rem] float-left">
                <p className="pt-[0.6rem] text-[0.18rem] text-white">
                  {t("se20_sec_3.circle2")}
                </p>
              </div>
              <div className="rounded-full bg-cover bg-[#47b985] w-[1.5rem] h-[1.5rem] float-left">
                <p className="pt-[0.3rem] text-[0.18rem] text-white max-w-[4rem]">
                  {t("se20_sec_3.circle3")}
                </p>
              </div>
            </div>
          </section>
          <section
            className="bg-center block bg-cover w-full text-center h-[9rem] text-white bg-no-repeat overflow-hidden text-balance"
            style={bg(
              "/guanwang_second/front/mobile/images/details/se20/bg_06-625b9d7195.webp",
            )}
          >
            <p className="px-[5%] pt-[0.4rem] text-[0.24rem] text-balance">
              {t("se20_sec_4.tit")}
            </p>
            <p className="my-[0.2rem] px-[5%] text-[0.192rem]">
              {t("se20_sec_4.cont")}
            </p>
          </section>
          <section
            className="bg-center block bg-cover w-full text-center h-[12rem] text-[#333333] bg-no-repeat overflow-hidden text-balance"
            style={bg(
              "/guanwang_second/front/mobile/images/details/se20/bg_07-d26719567e.webp",
            )}
          >
            <p className="px-[5%] pt-[0.4rem] text-[0.24rem] text-balance">
              {t("se20_sec_5.tit")}
            </p>
            <p className="my-[0.2rem] px-[5%] text-[0.192rem]">
              {t("se20_sec_5.cont")}
            </p>
          </section>
          <section
            className="bg-center block bg-cover h-[8.37rem] text-center bg-no-repeat text-balance"
            style={bg(
              "/guanwang_second/front/mobile/images/details/se20/bg_08-0025e1113f.webp",
            )}
          >
            <p className="px-[5%] pt-[4.17rem] text-[#333333] text-[0.288rem] text-balance">
              {t("se20_sec6.se20_sec6_right")}
            </p>
          </section>
          <div className="px-[0.4rem] pt-[1.1rem] pb-[0.8rem] overflow-hidden relative bg-white">
            <div className="overflow-hidden">
              <div className="text-[0.368rem] leading-[1.15] text-center font-semibold text-balance">
                {t("install.title2")}
              </div>
              <Image
                src={img(
                  "/guanwang_second/front/mobile/images/details/se20/pro-095e8b232a.webp",
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
