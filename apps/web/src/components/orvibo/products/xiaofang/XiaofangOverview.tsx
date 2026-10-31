import { ProductInView } from "@/components/orvibo/product/ProductInView";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

const XF = "/html/images/products/xiaofang/xf_icons.webp";
/** The five panels: caption key, photo, and the caption's icon in xf_icons. */
const PANELS = [
  [
    "xf_page.xi_content",
    "/html/images/products/xiaofang/xf_two1.webp",
    "h-[40px] w-[40px] bg-[position:-74px_0]",
  ],
  [
    "xf_page.xi_content2",
    "/html/images/products/xiaofang/xf_two2.webp",
    "h-[45px] w-[40px] bg-[position:-114px_0]",
  ],
  [
    "xf_page.xi_content3",
    "/html/images/products/xiaofang/xf_two3.webp",
    "h-[40px] w-[34px] bg-[position:0_0]",
  ],
  [
    "xf_page.xi_content4",
    "/html/images/products/xiaofang/xf_two4.webp",
    "h-[40px] w-[40px] bg-[position:-34px_0]",
  ],
  [
    "xf_page.xi_content5",
    "/html/images/products/xiaofang/xf_two5.webp",
    "h-[46px] w-[40px] bg-[position:-154px_0]",
  ],
] as const;

/** The remotes diagram's labels: key and place (the Chinese labels' centres). */
const REMOTES = [
  ["fan", "top-[-4px] left-[411.5px]"],
  ["audio", "top-[299.5px] left-[112.5px]"],
  ["tv", "top-[299px] left-[708.5px]"],
  ["ac", "top-[518px] left-[28.5px]"],
  ["more", "top-[518px] left-[794px]"],
] as const;

/** The design section's five points: numeral, text key, icon in xf_icons. */
const FEATURES = [
  ["I", "xf_page.xi_txt", "w-[85px] bg-[position:-302px_0]"],
  ["II", "xf_page.xi_txt2", "w-[88px] bg-[position:-483px_0]"],
  ["III", "xf_page.xi_txt3", "w-[88px] bg-[position:-392px_0]"],
  ["IV", "xf_page.xi_txt4", "w-[88px] bg-[position:-573px_0]"],
  ["V", "xf_page.xi_txt5", "w-[85px] bg-[position:-206px_-2px]"],
] as const;

/** The setup steps: label key and picture. */
const STEPS = [
  [
    "xf_page.xn_item",
    "/guanwang_second/front/images/products/xiaofang/1-cb50336d13.webp",
  ],
  [
    "xf_page.xn_item2",
    "/guanwang_second/front/images/products/xiaofang/2-b87cb121fd.webp",
  ],
  [
    "xf_page.xn_item3",
    "/guanwang_second/front/images/products/xiaofang/3-d82013233d.webp",
  ],
] as const;

export function XiaofangOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview">
        {/* xf_first: the photo, the title with the award badges, the award band */}
        <section
          className="relative h-[1294px] overflow-hidden bg-center bg-no-repeat"
          style={bg("/orvibo/products/xiaofang/hero.webp")}
        >
          <div className="absolute bottom-[759px] left-1/2 ml-[-384px]">
            <h1 className="max-w-[520px] text-[44px] leading-[1.25] text-white">
              {t("xf_page.xf_page")}
            </h1>
            <div className="mt-[-2px] flex gap-x-[21px]">
              <Image
                src={img("/orvibo/products/xiaofang/award-if.webp")}
                alt={ts("alt.award_if")}
                width={106}
                height={55}
                unoptimized
              />
              <Image
                src={img("/orvibo/products/xiaofang/award-golden-pin.webp")}
                alt={ts("alt.award_golden_pin")}
                width={106}
                height={55}
                unoptimized
              />
            </div>
          </div>
          <div className="absolute top-[995px] left-1/2 ml-[-327px] w-[840px] text-white">
            <p className="text-[24px] leading-[34px] font-light tracking-[0.04em]">
              {t("award.golden_pin")}
            </p>
            <p className="text-[24px] leading-[34px] font-light tracking-[0.04em]">
              {t("award.if")}
            </p>
            <p className="mt-[20px] text-[15px] leading-[28px] font-normal tracking-[0.04em]">
              {t("award.text")}
            </p>
          </div>
        </section>
        {/* xf_second: the panels rise into place, then their captions fade in */}
        <ProductInView
          className="flex h-[950px] overflow-hidden bg-[#333333]"
          threshold={0.2}
        >
          {PANELS.map(([key, photo, icon]) => (
            <div
              key={key}
              className="relative h-full w-1/5 translate-y-full bg-center bg-no-repeat opacity-0 transition-[opacity,transform] [transition-delay:200ms] [transition-duration:1000ms] group-data-[shown]:translate-y-0 group-data-[shown]:opacity-100 motion-reduce:transition-none"
              style={bg(photo)}
            >
              <div className="absolute top-[390px] left-[17.7%] w-[253px] opacity-0 transition-opacity [transition-delay:1000ms] [transition-duration:1000ms] group-data-[shown]:opacity-100 motion-reduce:transition-none">
                <div className={`bg-no-repeat ${icon}`} style={bg(XF)} />
                <p className="mt-[30px] text-[18px] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.45)]">
                  {t(key)}
                </p>
              </div>
            </div>
          ))}
        </ProductInView>
        {/* xf_fourth: one remote for all */}
        <section className="h-[950px] bg-[#f7f7f7] pt-[136px] text-center text-[#333333]">
          <h2 className="text-[30px]">{t("xf_page.xf_title")}</h2>
          <p className="mx-auto mt-[20px] w-[768px] text-[18px] leading-[28px]">
            {t("xf_page.xf_txt")}
          </p>
          <div
            className="relative mx-auto mt-[68px] h-[597px] w-[821px] bg-no-repeat"
            style={bg("/orvibo/products/xiaofang/remotes.webp")}
          >
            <ul className="text-[16px] leading-[24px] text-[#878787]">
              {REMOTES.map(([key, place]) => (
                <li
                  key={key}
                  className={`absolute -translate-x-1/2 whitespace-nowrap ${place}`}
                >
                  {t(`remotes.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* xf_fifth: the AC phone rises once the section is on screen */}
        <ProductInView
          className="h-[950px] overflow-hidden bg-center bg-no-repeat"
          style={bg("/html/images/products/xiaofang/xf_bg4.webp")}
        >
          <div className="mx-auto flex w-[1190px] justify-between">
            <Image
              src={img("/html/images/products/xiaofang/xf_five_phone.webp")}
              alt={ts("alt.ac_phone")}
              width={325}
              height={651}
              unoptimized
              className="mt-[136px] ml-[30px] translate-y-full opacity-0 transition-[opacity,transform] [transition-delay:200ms] [transition-duration:1000ms] group-data-[shown]:translate-y-0 group-data-[shown]:opacity-100 motion-reduce:transition-none"
            />
            <div className="w-[500px] text-white">
              <h2 className="mt-[326px] text-[30px]">
                {t("xf_page.xf_title2")}
              </h2>
              <p className="mt-[28px] text-[18px] leading-[28px]">
                {t("xf_page.xf_txt2")}
              </p>
              <div
                className="mt-[64px] h-[60px] w-[380px] bg-[position:-429px_-593px] bg-no-repeat"
                style={bg(XF)}
              />
            </div>
          </div>
        </ProductInView>
        {/* xf_sixth */}
        <section
          className="h-[950px] bg-center bg-no-repeat"
          style={bg("/html/images/products/xiaofang/xf_bg5.webp")}
        >
          <div className="mx-auto w-[1190px] text-white">
            <div className="w-[500px]">
              <h2 className="pt-[326px] text-[30px]">
                {t("xf_page.xs_title")}
              </h2>
              <p className="mt-[28px] text-[18px] leading-[28px]">
                {t("xf_page.xs_txt")}
              </p>
              <div
                className="mt-[64px] h-[60px] w-[380px] bg-[position:-423px_-526px] bg-no-repeat"
                style={bg(XF)}
              />
            </div>
          </div>
        </section>
        {/* xf_eighth */}
        <section className="relative h-[950px] bg-white pt-[136px] text-center">
          <h2 className="text-[30px] text-[#333333]">
            {t("xf_page.xe_title")}
          </h2>
          <div
            className="mx-auto mt-[34px] h-[303px] w-[1010px] bg-[position:0_-832px] bg-no-repeat"
            style={bg(XF)}
          />
          <ol className="mx-auto flex w-[1190px] gap-x-[53px]">
            {FEATURES.map(([numeral, key, icon]) => (
              <li key={key} className="mt-[34px] w-[195px]">
                <div
                  className={`mx-auto h-[87px] bg-no-repeat ${icon}`}
                  style={bg(XF)}
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
          <p className="absolute bottom-[80px] w-full text-[14px] text-[#b0b0b0]">
            {t("xf_page.xf_page2")}
          </p>
        </section>
        {/* xf_ninth: setup in three steps */}
        <section
          className="h-[950px] bg-[#f7f7f7] bg-center bg-no-repeat pt-[194px] text-center"
          style={bg("/html/images/products/xiaofang/xf_bg7.webp")}
        >
          <h2 className="text-[30px] text-[#333333]">
            {t("xf_page.xn_title")}
          </h2>
          <ol className="mx-auto mt-[166px] flex w-[1190px] pl-[44px] text-[18px] text-[#575757]">
            {STEPS.map(([key, picture], index) => (
              <li key={key} className="flex">
                {index > 0 && (
                  <div
                    className="mx-[68px] mt-[110px] h-[10px] w-[100px] bg-[position:-664px_0] bg-no-repeat"
                    style={bg(XF)}
                  />
                )}
                <div className="w-[200px]">
                  <div
                    className="h-[210px] bg-contain bg-no-repeat"
                    style={bg(picture)}
                  />
                  <p className="mx-[-50px] mt-[20px]">{t(key)}</p>
                </div>
              </li>
            ))}
          </ol>
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
