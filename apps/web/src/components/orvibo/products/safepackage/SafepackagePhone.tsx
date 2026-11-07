import { TextImage } from "@/components/orvibo/product/TextImage";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";
import Link from "next/link";
import { PHONE_WORDS } from "./pictureWords";

export function SafepackagePhone({
  locale,
  text,
  common,
  base,
}: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* free_model clear */}
      <div id="overview-phone" className="block">
        {/* safety_sec1 */}
        <section
          className="pt-[1rem] block text-white text-center w-full h-[7rem] bg-cover relative bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/safety/safety_bg_01-6a14241230.webp",
          )}
        >
          <h1 className="px-[5%] mb-[0.5rem] pt-[0.8rem] font-semibold text-[0.384rem] text-balance">
            {t("suit_page.sf_title")}
          </h1>
          <div className="mx-auto w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <div className="float-left w-[33.3333%]">
              <div
                className="bg-center mx-auto mb-[0.2rem] w-[0.74rem] h-[0.74rem] bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/safety/images/icon_03-8be263571d.webp",
                )}
              />
              <p className="text-[0.2rem]">{t("suit_page.sc_item")}</p>
            </div>
            <div className="float-left w-[33.3333%]">
              <div
                className="bg-center mx-auto mb-[0.2rem] w-[0.74rem] h-[0.74rem] bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/safety/images/icon_04-355a261c71.webp",
                )}
              />
              <p className="text-[0.2rem]">{t("suit_page.sc_item2")}</p>
            </div>
            <div className="float-left w-[33.3333%]">
              <div
                className="bg-center mx-auto mb-[0.2rem] w-[0.74rem] h-[0.74rem] bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/safety/images/icon_05-d6d40c65a5.webp",
                )}
              />
              <p className="text-[0.2rem]">{t("suit_page.sc_item3")}</p>
            </div>
          </div>
        </section>
        {/* safety_sec2 */}
        <section
          className="px-[5%] pt-[2.8rem] block text-white text-center w-full h-[8.99rem] bg-cover bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/safety/safety_bg_02-688891278e.webp",
          )}
        >
          <em />
          <p className="text-[0.208rem]">{t("suit_page.ss_txt")}</p>
        </section>
        {/* safety_sec3 */}
        <section
          className="bg-bottom block text-center w-full h-[8.99rem] bg-cover bg-no-repeat bg-[#f1f3f2] text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/safety/safety_bg_03-7059df0e3f.webp",
          )}
        >
          <h2 className="px-[5%] mb-[0.2rem] pt-[0.7rem] font-medium text-[0.304rem] text-[#333333] text-balance">
            {t("suit_page.st_title")}
          </h2>
          <h3 className="mt-[0.2rem] mb-[0.8rem] font-medium text-[0.224rem] text-[#888888]">
            {t("m.subtitle")}
          </h3>
          <div className="mx-auto w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <div className="float-left w-[33.3333%]">
              <div
                className="bg-center mx-auto mb-[0.2rem] w-[1.3rem] h-[1.3rem] bg-contain bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/safety/images/icon_phone-68bcba1206.webp",
                )}
              />
              <p className="text-[#333333] text-[0.224rem]">
                {t("suit_page.st_icon")}
              </p>
            </div>
            <div className="float-left w-[33.3333%]">
              <div
                className="bg-center mx-auto mb-[0.2rem] w-[1.3rem] h-[1.3rem] bg-contain bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/safety/images/icon_signal-09f36363d5.webp",
                )}
              />
              <p className="text-[#333333] text-[0.224rem]">
                {t("suit_page.st_icon2")}
              </p>
            </div>
            <div className="float-left w-[33.3333%]">
              <div
                className="bg-center mx-auto mb-[0.2rem] w-[1.3rem] h-[1.3rem] bg-contain bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/safety/images/icon_lock-d01547a236.webp",
                )}
              />
              <p className="text-[#333333] text-[0.224rem]">
                {t("suit_page.st_icon3")}
              </p>
            </div>
          </div>
        </section>
        {/* safety_sec4 */}
        <section
          className="bg-bottom block w-full text-center h-[9rem] bg-cover bg-no-repeat bg-[#f1f3f2] text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/safety/safety_bg_04-14b4d7935c.webp",
          )}
        >
          <h2 className="px-[5%] mb-[0.5rem] pt-[0.5rem] font-medium text-[0.288rem] text-white text-balance">
            {t("suit_page.sf_title2")}
          </h2>
          <p className="px-[5%] text-white text-[0.192rem]">
            {t("suit_page.sf_txt")}
          </p>
        </section>
        {/* safety_sec5 */}
        <section
          className="bg-bottom block w-full text-center h-[9rem] bg-cover bg-no-repeat bg-[#f1f3f2] text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/safety/safety_bg_05-cb7258ef96.webp",
          )}
        >
          <h2 className="px-[5%] mb-[0.5rem] pt-[0.5rem] font-medium text-[0.288rem] text-white text-balance">
            {t("suit_page.sf_title3")}
          </h2>
          <p className="px-[5%] text-white text-[0.208rem]">
            {t("suit_page.sf_txt2")}
          </p>
        </section>
        {/* safety_sec6 */}
        <section
          className="mt-[-0.5rem] border-t border-t-[#959595] block w-full text-center h-[11.34rem] bg-cover relative bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/safety/safety_bg_06-5e1b09635f.webp",
          )}
        >
          <h2 className="px-[5%] mb-[0.4rem] pt-[0.5rem] font-medium text-[0.288rem] text-white text-balance">
            {t("m.camera.title")}
          </h2>
          <p className="px-[5%] text-white text-[0.192rem]">
            {t("m.camera.desc")}
          </p>
          <div className="absolute bottom-[0.88rem] left-[2.45rem] w-[2.5rem] h-[7.06rem]">
            <TextImage
              picture={PHONE_WORDS.safety_step}
              locale={locale}
              text={text}
              fit={{ size: "fill" }}
              className="block align-middle w-[2.5rem] h-[7.06rem] max-w-full"
            />
            <span className="absolute left-[0.84rem] top-[0.31rem] -translate-y-1/2 whitespace-nowrap text-left text-[0.22rem] text-white">
              {t("m.steps.1")}
            </span>
            <span className="absolute left-[0.84rem] top-[1.96rem] -translate-y-1/2 whitespace-nowrap text-left text-[0.22rem] text-white">
              {t("m.steps.2")}
            </span>
            <span className="absolute left-[0.84rem] top-[3.52rem] -translate-y-1/2 whitespace-nowrap text-left text-[0.22rem] text-white">
              {t("m.steps.3")}
            </span>
            <span className="absolute left-[0.84rem] top-[5.09rem] -translate-y-1/2 whitespace-nowrap text-left text-[0.22rem] text-white">
              {t("m.steps.4")}
            </span>
            <span className="absolute left-[0.84rem] top-[6.76rem] -translate-y-1/2 whitespace-nowrap text-left text-[0.22rem] text-white">
              {t("m.steps.5")}
            </span>
          </div>
        </section>
        {/* safety_sec7 */}
        <section
          className="mt-[-0.5rem] pt-[0.5rem] block w-full text-center h-[8.97rem] bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/safety/safety_bg_07-36efe6f2b2.webp",
          )}
        >
          <h2 className="px-[5%] mb-[0.5rem] pt-[0.5rem] font-medium text-[0.288rem] text-white text-balance">
            {t("suit_page.ss_title")}
          </h2>
          <p className="px-[5%] text-white text-[0.208rem]">
            {t("suit_page.ss_txt2")}
          </p>
        </section>
        {/* safety_sec8 */}
        <section className="py-[0.5rem] block w-full text-center bg-[#f7f7f7] text-balance">
          <h2 className="px-[5%] mb-[1rem] font-medium text-[0.32rem] text-balance">
            {t("suit_page.se_title")}
          </h2>
          <div className="mx-auto px-[2%] w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <div className="text-center float-left w-[33.3333%] text-balance">
              <div
                className="bg-center mb-[0.2rem] bg-contain bg-no-repeat w-full h-[1.3rem]"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/safety/images/product_01-3c43475728.webp",
                )}
              />
              <h3 className="mb-[0.2rem] font-medium text-[0.224rem]">
                {t("suit_page.si_title")}
              </h3>
              <p className="mb-[0.2rem] px-[11%] text-[0.208rem] text-[#888888]">
                {t("suit_page.si_txt")}
              </p>
            </div>
            <div className="text-center float-left w-[33.3333%] text-balance">
              <div
                className="bg-center mb-[0.2rem] bg-contain bg-no-repeat w-full h-[1.3rem]"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/safety/images/product_02-cf206a6ca8.webp",
                )}
              />
              <h3 className="mb-[0.2rem] font-medium text-[0.224rem]">
                {t("suit_page.si_title2")}
              </h3>
              <p className="mb-[0.2rem] px-[11%] text-[0.208rem] text-[#888888]">
                {t("suit_page.si_txt2")}
              </p>
            </div>
            <div className="text-center float-left w-[33.3333%] text-balance">
              <div
                className="bg-center mb-[0.2rem] bg-contain bg-no-repeat w-full h-[1.3rem]"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/safety/images/product_03-c6f7c7bd95.webp",
                )}
              />
              <h3 className="mb-[0.2rem] font-medium text-[0.224rem]">
                {t("suit_page.si_title3")}
              </h3>
              <p className="mb-[0.2rem] px-[11%] text-[0.208rem] text-[#888888]">
                {t("suit_page.si_txt3")}
              </p>
            </div>
          </div>
          <div className="mx-auto w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <div className="text-center w-[50%] float-left text-balance">
              <div
                className="bg-center mb-[0.2rem] bg-contain bg-no-repeat w-full h-[1.3rem]"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/safety/images/product_04-4023292492.webp",
                )}
              />
              <h3 className="mb-[0.2rem] font-medium text-[0.224rem]">
                {t("suit_page.si_title4")}
              </h3>
              <p className="mb-[0.2rem] px-[11%] text-[0.208rem] text-[#888888]">
                {t("suit_page.si_txt4")}
              </p>
            </div>
            <div className="text-center w-[50%] float-left text-balance">
              <div
                className="bg-center mb-[0.2rem] bg-contain bg-no-repeat w-full h-[1.3rem]"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/safety/images/product_05-b9fb12cb76.webp",
                )}
              />
              <h3 className="mb-[0.2rem] font-medium text-[0.224rem]">
                {t("suit_page.si_title5")}
              </h3>
              <p className="mb-[0.2rem] px-[11%] text-[0.208rem] text-[#888888]">
                {t("suit_page.si_txt5")}
              </p>
            </div>
          </div>
        </section>
        {/* safety_sec9 */}
        <section className="block">
          <details className="group bg-white text-center text-balance">
            <summary className="block h-[1.35rem] cursor-pointer list-none text-[0.288rem] leading-[1.35rem] font-medium text-[#333333] [&::-webkit-details-marker]:hidden">
              {t("suit_page.sn_title")}
            </summary>
            <ul className="flex pb-[0.5rem]">
              <li key="miniHost" className="w-1/3 px-[0.1rem]">
                <Link href={`${base}/product/miniHost`} className="block">
                  <Image
                    src={img(
                      "/guanwang_second/front/mobile/images/details/safety/images/product_mini-b4b576a4fa.webp",
                    )}
                    alt=""
                    width={220}
                    height={220}
                    unoptimized
                    className="mx-auto w-[1.8rem] h-auto"
                  />
                  <p className="mt-[0.15rem] text-[0.176rem] text-[#333333] text-balance">
                    {t("suit_page.sn_item")}
                  </p>
                </Link>
              </li>
              <li key="doorsensor" className="w-1/3 px-[0.1rem]">
                <Link href={`${base}/product/doorsensor`} className="block">
                  <Image
                    src={img(
                      "/guanwang_second/front/mobile/images/details/safety/images/product_07-1d6abb7432.webp",
                    )}
                    alt=""
                    width={220}
                    height={220}
                    unoptimized
                    className="mx-auto w-[1.8rem] h-auto"
                  />
                  <p className="mt-[0.15rem] text-[0.176rem] text-[#333333] text-balance">
                    {t("suit_page.sn_item2")}
                  </p>
                </Link>
              </li>
              <li key="bodysensor" className="w-1/3 px-[0.1rem]">
                <Link href={`${base}/product/bodysensor`} className="block">
                  <Image
                    src={img(
                      "/guanwang_second/front/mobile/images/details/safety/images/product_08-fe71949bf2.webp",
                    )}
                    alt=""
                    width={220}
                    height={220}
                    unoptimized
                    className="mx-auto w-[1.8rem] h-auto"
                  />
                  <p className="mt-[0.15rem] text-[0.176rem] text-[#333333] text-balance">
                    {t("suit_page.sn_item3")}
                  </p>
                </Link>
              </li>
            </ul>
          </details>
        </section>
      </div>
      {/* data_source_tips */}
      <div className="px-[0.46rem] pt-[0.2rem] pb-[0.8rem] flex text-[0.192rem] leading-[1.6em] text-black/60 bg-white">
        {/* star */}
        <div className="shrink-0">{"*"}</div>
        {/* content */}
        <div className="flex-1">{t("m.labNote")}</div>
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
