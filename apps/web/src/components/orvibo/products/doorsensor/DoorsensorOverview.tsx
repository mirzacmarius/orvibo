import { ProductInView } from "@/components/orvibo/product/ProductInView";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Link from "next/link";

const PICS = "/html/images/products/suite/door_pics.webp";
const ICONS = "/html/images/products/suite/door_icons.webp";

const SCENES = [
  ["ds_page.animate", "/html/images/products/suite/door_two_pic1.webp"],
  ["ds_page.animate2", "/html/images/products/suite/door_two_pic2.webp"],
  ["ds_page.animate3", "/html/images/products/suite/door_two_pic3.webp"],
  ["ds_page.animate4", "/html/images/products/suite/door_two_pic4.webp"],
  ["ds_page.animate5", "/html/images/products/suite/door_two_pic5.webp"],
] as const;

const FEATURES = [
  ["I", "ds_page.di_txt", "w-[38px] bg-[position:0_0]"],
  ["II", "ds_page.di_txt2", "w-[40px] bg-[position:-78px_0]"],
  ["III", "ds_page.di_txt3", "w-[43px] bg-[position:-118px_0]"],
  ["IV", "ds_page.di_txt4", "w-[76px] bg-[position:-341px_0]"],
  ["V", "ds_page.di_txt5", "w-[40px] bg-[position:-38px_0]"],
] as const;

const KIT = [
  ["ds_page.dn_icon", "bg-[position:-281px_0]"],
  ["ds_page.dn_icon2", "bg-[position:-161px_0]"],
  ["ds_page.dn_icon3", "bg-[position:-221px_0]"],
] as const;

export function DoorsensorOverview({
  locale,
  text,
  base,
  common,
}: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* free_model */}
      <div id="overview" className="relative">
        {/* ds_page ds_first */}
        <section
          className="h-[950px] bg-center bg-no-repeat text-center"
          style={bg("/html/images/products/suite/door_bg1.webp")}
        >
          <h1 className="pt-[368px] text-[44px] text-white">
            {t("ds_page.ds_page")}
          </h1>
        </section>
        {/* ds_page ds_second: the scenes rise into place, then their captions fade in */}
        <ProductInView
          className="flex h-[950px] overflow-hidden bg-[#333333]"
          threshold={0.2}
        >
          {SCENES.map(([key, image]) => (
            <div
              key={key}
              className="relative h-full w-1/5 translate-y-full bg-center bg-no-repeat opacity-0 transition-[opacity,transform] [transition-delay:200ms] [transition-duration:1000ms] group-data-[shown]:translate-y-0 group-data-[shown]:opacity-100 motion-reduce:transition-none"
              style={bg(image)}
            >
              <p className="absolute top-1/2 left-[20%] mt-[-30px] w-[60%] text-center text-[18px] text-white opacity-0 transition-opacity [transition-delay:1000ms] [transition-duration:1000ms] group-data-[shown]:opacity-100 motion-reduce:transition-none">
                {t(key)}
              </p>
            </div>
          ))}
        </ProductInView>
        {/* ds_page ds_third */}
        <section
          className="h-[950px] bg-center bg-no-repeat text-center text-[#333333]"
          style={bg("/html/images/products/suite/door_bg2.webp")}
        >
          <div className="mx-auto w-[1190px]">
            <h2 className="pt-[166px] text-[30px]">{t("ds_page.dt_title")}</h2>
            <p className="mx-auto mt-[20px] w-[80%] text-[18px] leading-[28px]">
              {t("ds_page.dt_txt")}
            </p>
            <div
              className="mx-auto mt-[96px] h-[325px] w-[321px] bg-no-repeat"
              style={bg(PICS)}
            />
          </div>
        </section>
        {/* ds_page ds_fourth */}
        <section
          className="h-[950px] bg-center bg-no-repeat text-center text-white"
          style={bg("/html/images/products/suite/door_bg3.webp")}
        >
          <div className="mx-auto w-[1190px]">
            <h2 className="pt-[166px] text-[30px]">{t("ds_page.df_title")}</h2>
            <p className="mx-auto mt-[20px] w-[80%] text-[18px] leading-[28px]">
              {t("ds_page.df_txt")}
            </p>
            <div
              className="mx-auto mt-[192px] h-[60px] w-[382px] bg-[position:-328px_0] bg-no-repeat"
              style={bg(PICS)}
            />
            <ol className="mx-auto mt-[18px] flex w-[488px] text-[18px]">
              <li className="w-1/3">{t("ds_page.df_tips")}</li>
              <li className="w-1/3">{t("ds_page.df_tips2")}</li>
              <li className="w-1/3">{t("ds_page.df_tips3")}</li>
            </ol>
          </div>
        </section>
        {/* ds_page ds_fifth */}
        <section
          className="h-[950px] bg-center bg-no-repeat text-center text-white"
          style={bg("/html/images/products/suite/door_bg4.webp")}
        >
          <div className="mx-auto w-[1190px]">
            <h2 className="pt-[166px] text-[30px]">{t("ds_page.df_title2")}</h2>
            <p className="mx-auto mt-[20px] w-[80%] text-[18px] leading-[28px]">
              {t("ds_page.df_txt2")}
            </p>
            <div
              className="mx-auto mt-[192px] h-[60px] w-[382px] bg-[position:-736px_0] bg-no-repeat"
              style={bg(PICS)}
            />
            <ol className="mx-auto mt-[18px] flex w-[488px] text-[18px]">
              <li className="w-1/3">{t("ds_page.df_tips4")}</li>
              <li className="w-1/3">{t("ds_page.df_tips5")}</li>
              <li className="w-1/3">{t("ds_page.df_tips6")}</li>
            </ol>
          </div>
        </section>
        {/* ds_page ds_seventh */}
        <section
          className="h-[950px] bg-center bg-no-repeat text-center text-white"
          style={bg("/html/images/products/suite/door_bg6.webp")}
        >
          <div className="mx-auto w-[1190px]">
            <h2 className="pt-[166px] text-[30px]">{t("ds_page.ds_title")}</h2>
            <p className="mx-auto mt-[20px] w-[80%] text-[18px] leading-[28px]">
              {t("ds_page.ds_txt")}
            </p>
            <div
              className="mx-auto mt-[92px] h-[301px] w-[450px] bg-[position:-342px_-74px] bg-no-repeat"
              style={bg(PICS)}
            />
          </div>
        </section>
        {/* ds_page ds_eighth */}
        <section className="h-[950px] bg-white text-center">
          <div className="mx-auto w-[1190px]">
            <h2 className="pt-[136px] text-[30px] text-[#333333]">
              {t("ds_page.de_title")}
            </h2>
            <div
              className="mx-auto mt-[34px] h-[307px] w-[1010px] bg-[position:0_-453px] bg-no-repeat"
              style={bg(PICS)}
            />
            <ol className="flex gap-x-[53px]">
              {FEATURES.map(([numeral, key, icon]) => (
                <li key={key} className="mt-[34px] w-[195px]">
                  <div
                    className={`mx-auto mt-[50px] h-[41px] bg-no-repeat ${icon}`}
                    style={bg(ICONS)}
                  />
                  <p className="mt-[24px] text-[18px] leading-[24px] text-[#333333]">
                    {numeral}
                  </p>
                  <p className="mx-auto w-[90%] text-[14px] leading-[24px] text-[#888888]">
                    {t(key)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        {/* ds_page ds_ninth */}
        <section className="h-[950px] bg-[#f7f7f7] text-center">
          <div className="relative mx-auto w-[1190px]">
            <h2 className="pt-[136px] text-[30px] text-[#333333]">
              {t("ds_page.dn_title")}
            </h2>
            <ul className="mx-auto mt-[110px] flex w-[750px]">
              {KIT.map(([key, icon]) => (
                <li key={key} className="w-1/3">
                  <div
                    className={`mx-auto h-[60px] w-[60px] bg-no-repeat ${icon}`}
                    style={bg(ICONS)}
                  />
                  <p className="mt-[20px] text-[18px] text-[#888888]">
                    {t(key)}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href={`${base}/product/safepackage`}
              className="absolute top-[598px] left-1/2 ml-[-104px] block h-[52px] w-[208px] rounded-[50px] border border-[#12cd3e] bg-[#12cd3e] text-[18px] leading-[50px]"
            >
              <span className="text-white">{t("ds_page.dn_container")}</span>
            </Link>
          </div>
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
