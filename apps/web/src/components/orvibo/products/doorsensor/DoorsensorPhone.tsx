import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

const LINE =
  "/guanwang_second/front/mobile/images/details/coco/line-59fc505db8.webp";

export function DoorsensorPhone({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* free_model clear */}
      <div id="overview-phone" className="block w-full">
        {/* door_sec1 */}
        <section
          className="pt-[1rem] block w-full text-center h-[8.19rem] bg-cover relative text-white bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/door/images/bg_01-741a079307.webp",
          )}
        >
          <h1 className="mb-[0.5rem] pt-[0.8rem] pl-[0.2rem] font-medium text-[0.384rem]">
            {t("ds_page.dt_item2")}
          </h1>
        </section>
        {/* door_sec2 */}
        <section className="block w-full">
          <ul>
            <li
              className="text-center w-full h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/door/images/bg_02-ab44278ec9.webp",
              )}
            >
              <p className="pt-[1rem] text-white text-[0.208rem]">
                {t("ds_page.animate")}
              </p>
            </li>
            <li
              className="text-center w-full h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/door/images/bg_03-e551847b3d.webp",
              )}
            >
              <p className="pt-[1rem] text-white text-[0.208rem]">
                {t("ds_page.animate2")}
              </p>
            </li>
            <li
              className="text-center w-full h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/door/images/bg_04-e187ac3b63.webp",
              )}
            >
              <p className="pt-[1rem] text-white text-[0.208rem]">
                {t("ds_page.animate3")}
              </p>
            </li>
            <li
              className="text-center w-full h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/door/images/bg_05-17f67350d2.webp",
              )}
            >
              <p className="pt-[1rem] text-white text-[0.208rem]">
                {t("ds_page.animate4")}
              </p>
            </li>
            <li
              className="text-center w-full h-[2.3rem] bg-cover bg-no-repeat text-balance"
              style={bg(
                "/guanwang_second/front/mobile/images/details/door/images/bg_06-e98ff76090.webp",
              )}
            >
              <p className="pt-[1rem] text-white text-[0.208rem]">
                {t("ds_page.animate5")}
              </p>
            </li>
          </ul>
        </section>
        {/* door_sec3 */}
        <section
          className="pt-[0.5rem] block w-full text-center h-[8.5rem] bg-cover bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/door/images/bg_07-6e0f649ea4.webp",
          )}
        >
          <h2 className="mb-[0.5rem] px-[5%] font-medium text-[0.224rem] text-center text-balance">
            {t("ds_page.dt_title")}
          </h2>
          <p className="px-[5%] text-[0.176rem] text-[#888888]">
            {t("ds_page.dt_txt")}
          </p>
        </section>
        {/* door_sec4 */}
        <section
          className="pt-[0.5rem] block w-full text-center h-[8.99rem] text-white bg-cover bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/door/images/bg_08-9e28694727.webp",
          )}
        >
          <h2 className="mb-[0.5rem] px-[5%] font-medium text-[0.32rem] text-balance">
            {t("ds_page.df_title")}
          </h2>
          <p className="px-[5%] text-[0.192rem] text-left">
            {t("ds_page.df_txt")}
          </p>
        </section>
        {/* door_sec5 */}
        <section
          className="pt-[0.5rem] block w-full text-white h-[8.99rem] bg-cover text-center bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/door/images/bg_09-bed3bc4e70.webp",
          )}
        >
          <h2 className="mb-[0.5rem] px-[5%] font-medium text-[0.24rem] text-center text-balance">
            {t("ds_page.df_title2")}
          </h2>
          <p className="px-[5%] text-[0.184rem] text-left">
            {t("ds_page.df_txt2")}
          </p>
        </section>
        {/* door_sec6 */}
        <section
          className="pt-[0.5rem] block w-full text-white h-[8.98rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/details/door/images/bg_10-d97d59d4f8.webp",
          )}
        >
          <h2 className="mb-[0.5rem] px-[5%] font-medium text-[0.24rem] text-center text-balance">
            {t("m.burglar.title")}
          </h2>
          <p className="px-[5%] text-[0.192rem] text-left">
            {t("m.burglar.desc")}
          </p>
        </section>
        {/* door_sec7 */}
        <section
          className="pt-[0.5rem] block w-full text-white h-[9rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/details/door/images/bg_11-181ddb86bd.webp",
          )}
        >
          <h2 className="mb-[0.5rem] px-[5%] font-medium text-[0.24rem] text-center text-balance">
            {t("m.fridge.title")}
          </h2>
          <p className="px-[5%] text-[0.192rem] text-left">
            {t("m.fridge.desc")}
          </p>
        </section>
        {/* door_sec8 */}
        <section className="py-[0.7rem] block w-full text-center text-balance">
          <h2 className="mb-[0.5rem] px-[5%] font-medium text-[0.32rem] text-balance">
            {t("ds_page.de_title")}
          </h2>
          <div className="mx-auto mb-[0.25rem] w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <div className="w-[50%] float-left">
              <span
                className="bg-[position:0_-98px] mx-auto mb-[0.2rem] h-[54px] w-[54px] block bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/door/images/door_icons-a5b5e43e4f.webp",
                )}
              />
              <p className="text-[#888888] text-[0.224rem] leading-[0.3rem]">
                {t("ds_page.di_txt")}
              </p>
            </div>
            <div className="w-[50%] float-left">
              <span
                className="bg-[position:0_-152px] mx-auto mb-[0.2rem] h-[56px] w-[55px] block bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/door/images/door_icons-a5b5e43e4f.webp",
                )}
              />
              <p className="text-[#888888] text-[0.224rem] leading-[0.3rem] max-w-[4rem]">
                {t("ds_page.di_txt2")}
              </p>
            </div>
          </div>
          <div className="mx-auto mb-[0.25rem] w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <div className="w-[50%] float-left">
              <span
                className="mx-auto mb-[0.2rem] h-[48px] w-[47px] block bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/door/images/door_icons-a5b5e43e4f.webp",
                )}
              />
              <p className="text-[#888888] text-[0.224rem] leading-[0.3rem] max-w-[4rem]">
                {t("ds_page.di_txt3")}
              </p>
            </div>
            <div className="w-[50%] float-left">
              <span
                className="bg-[position:0_-208px] mx-auto mb-[0.26rem] h-[44px] w-[67px] block bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/door/images/door_icons-a5b5e43e4f.webp",
                )}
              />
              <p className="text-[#888888] text-[0.224rem] leading-[0.3rem] max-w-[4.3rem]">
                {t("ds_page.di_txt4")}
              </p>
            </div>
          </div>
          <div className="mx-auto mb-[0.25rem] w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <div className="w-[50%] float-left">
              <span
                className="bg-[position:0_-48px] mx-auto mb-[0.2rem] h-[50px] w-[50px] block bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/door/images/door_icons-a5b5e43e4f.webp",
                )}
              />
              <p className="text-[#888888] text-[0.224rem] leading-[0.3rem]">
                {t("ds_page.di_txt5")}
              </p>
            </div>
          </div>
        </section>
        {/* door_sec9 */}
        <section className="pt-[1rem] pb-[0.4rem] block w-full bg-white">
          <h2 className="mb-[0.5rem] px-[5%] font-medium text-[0.32rem] text-center text-balance">
            {t("ds_page.dt_spec_title")}
          </h2>
          <div className="text-center text-balance">
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/door/images/product_03-bd11ad7df9.webp",
              )}
              alt=""
              width={128}
              height={173}
              unoptimized
              className="inline align-middle"
            />
          </div>
          <h3 className="mt-[2em] mb-[0.8rem] font-medium text-[100%] text-[#888888] text-center text-balance">
            {t("m.spec.product")}
          </h3>
          {[
            ["dt_item", "dt_item2"],
            ["dt_item4", "dt_item5"],
            ["dt_item8", "dt_item9"],
            ["dt_item11", "dt_item12"],
            ["dt_item15", "dt_item16"],
            ["dt_item3", "dt_item3v"],
            ["dt_item6", "dt_item7"],
            ["dt_item10", "dt_item10v"],
            ["dt_item13", "dt_item14"],
            ["dt_item17", "dt_item18"],
          ].map(([label, value]) => (
            <p
              key={label}
              className="bg-top mx-[5%] pt-[0.1rem] pl-[2%] bg-contain w-[90%] text-left text-[0.208rem] text-[#888888] bg-no-repeat"
              style={bg(LINE)}
            >
              <span className="mb-[5px] mr-[0.1rem] inline-block font-bold text-[0.224rem] text-[#333333]">
                {t(`ds_page.${label}`)}
              </span>
              {t(`ds_page.${value}`)}
            </p>
          ))}
        </section>
      </div>
      {/* data_source_tips */}
      <div className="px-[0.46rem] pt-[0.2rem] pb-[0.8rem] flex w-full text-[0.192rem] leading-[1.6em] text-black/60 bg-white">
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
