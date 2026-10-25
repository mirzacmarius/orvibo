import { ProductInView } from "@/components/orvibo/product/ProductInView";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Link from "next/link";

const ICONS = "/html/images/products/suite/suite_icons.webp";
const PRODUCTS = "/html/images/products/suite/suite_products.webp";

const KIT = [
  ["suit_page.sc_item", "bg-[position:-120px_0]"],
  ["suit_page.sc_item2", "bg-[position:-60px_0]"],
  ["suit_page.sc_item3", "bg-[position:0_0]"],
] as const;

const FEATURES = [
  ["suit_page.st_icon", "bg-[position:-400px_0]"],
  ["suit_page.st_icon2", "bg-[position:-530px_0]"],
  ["suit_page.st_icon3", "bg-[position:-270px_0]"],
] as const;

const PHONES = [
  {
    title: "suit_page.sf_title2",
    text: "suit_page.sf_txt",
    background: "/html/images/products/suite/bg3.webp",
    phone: "/html/images/products/suite/phone1.webp",
    alt: "alt.phone1",
    size: "h-[498px] w-[322px]",
  },
  {
    title: "suit_page.sf_title3",
    text: "suit_page.sf_txt2",
    background: "/html/images/products/suite/bg4.webp",
    phone: "/html/images/products/suite/phone2.webp",
    alt: "alt.phone2",
    size: "h-[492px] w-[325px]",
  },
] as const;

const MORE = [
  [
    [
      "suit_page.si_title",
      "suit_page.si_txt",
      "w-[155px] bg-[position:-258px_0]",
    ],
    ["suit_page.si_title2", "suit_page.si_txt2", "w-[117px] bg-[position:0_0]"],
    [
      "suit_page.si_title3",
      "suit_page.si_txt3",
      "w-[141px] bg-[position:-117px_0]",
    ],
  ],
  [
    [
      "suit_page.si_title4",
      "suit_page.si_txt4",
      "w-[174px] bg-[position:-413px_0]",
    ],
    [
      "suit_page.si_title5",
      "suit_page.si_txt5",
      "w-[186px] bg-[position:-587px_0]",
    ],
  ],
] as const;

const DETAILS = [
  ["miniHost", "suit_page.sn_item", "w-[274px] bg-[position:0_-167px]"],
  ["doorsensor", "suit_page.sn_item2", "w-[313px] bg-[position:-579px_-172px]"],
  ["bodysensor", "suit_page.sn_item3", "w-[275px] bg-[position:-293px_-173px]"],
] as const;

export function SafepackageOverview({
  locale,
  text,
  base,
  common,
}: ProductViewProps) {
  const { t, ts, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* free_model */}
      <div id="overview" className="relative">
        {/* suit_page suit_first */}
        <section
          className="h-[897px] bg-center bg-no-repeat pt-[158px] text-center"
          style={bg("/html/images/products/suite/bg7.webp")}
        >
          <h1 className="mb-[56px] text-[30px] text-white">
            {t("suit_page.sf_title")}
          </h1>
          <ul className="mx-auto flex w-[750px]">
            {KIT.map(([key, icon]) => (
              <li key={key} className="w-1/3">
                <div
                  className={`mx-auto h-[60px] w-[60px] bg-no-repeat ${icon}`}
                  style={bg(ICONS)}
                />
                <p className="mt-[16px] text-[18px] text-white">{t(key)}</p>
              </li>
            ))}
          </ul>
        </section>
        {/* suit_page suit_second */}
        <section
          className="h-[950px] bg-center bg-no-repeat pt-[332px] text-center"
          style={bg("/html/images/products/suite/bg1.webp")}
        >
          <div
            className="mx-auto h-[90px] w-[90px] bg-[position:-180px_0] bg-no-repeat"
            style={bg(ICONS)}
          />
          <p className="mx-auto mt-[44px] w-[750px] text-[24px] leading-[44px] text-white">
            {t("suit_page.ss_txt")}
          </p>
        </section>
        {/* suit_page suit_third */}
        <section
          className="h-[950px] bg-center bg-no-repeat text-center text-[#333333]"
          style={bg("/html/images/products/suite/bg2.webp")}
        >
          <div className="mx-auto w-[1190px]">
            <h2 className="pt-[176px] text-[30px]">
              {t("suit_page.st_title")}
            </h2>
            <p className="mt-[26px] text-[18px]">{t("suit_page.st_txt")}</p>
            <ul className="mt-[148px] flex">
              {FEATURES.map(([key, icon]) => (
                <li key={key} className="w-1/3">
                  <div
                    className={`mx-auto h-[130px] w-[130px] bg-no-repeat ${icon}`}
                    style={bg(ICONS)}
                  />
                  <p className="mt-[28px] text-[18px]">{t(key)}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* suit_page suit_fourth, suit_fifth: the phone rises into place */}
        {PHONES.map(({ title, text: copy, background, phone, alt, size }) => (
          <ProductInView
            key={title}
            className="relative h-[950px] overflow-hidden bg-center bg-no-repeat text-center text-white"
            style={bg(background)}
            threshold={0.5}
          >
            <div className="mx-auto w-[1190px]">
              <h2 className="pt-[166px] text-[30px]">{t(title)}</h2>
              <p className="mx-auto mt-[20px] w-[80%] text-[18px] leading-[28px]">
                {t(copy)}
              </p>
            </div>
            <div
              role="img"
              aria-label={ts(alt)}
              className={`absolute bottom-0 left-1/2 ml-[-161px] translate-y-full bg-center bg-no-repeat opacity-0 transition-[opacity,transform] ease-out [transition-delay:200ms] [transition-duration:1000ms] group-data-[shown]:translate-y-0 group-data-[shown]:opacity-100 motion-reduce:transition-none ${size}`}
              style={bg(phone)}
            />
          </ProductInView>
        ))}
        {/* suit_page suit_seventh */}
        <section
          className="h-[950px] bg-center bg-no-repeat text-center text-white"
          style={bg("/html/images/products/suite/bg6.webp")}
        >
          <div className="mx-auto w-[1190px]">
            <h2 className="pt-[166px] text-[30px]">
              {t("suit_page.ss_title")}
            </h2>
            <p className="mx-auto mt-[20px] w-[80%] text-[18px] leading-[28px]">
              {t("suit_page.ss_txt2")}
            </p>
            <div
              className="mx-auto mt-[96px] h-[342px] w-[342px] bg-[position:0_-140px] bg-no-repeat"
              style={bg(ICONS)}
            />
          </div>
        </section>
        {/* suit_page suit_eighth */}
        <section className="h-[950px] bg-[#f7f7f7] text-center">
          <h2 className="pt-[115px] text-[30px] text-[#231815]">
            {t("suit_page.se_title")}
          </h2>
          {MORE.map((row, i) => (
            <ul
              key={row[0][0]}
              className={`mx-auto mt-[98px] flex ${i === 0 ? "w-[960px]" : "w-[620px]"}`}
            >
              {row.map(([title, copy, picture]) => (
                <li key={title} className="flex-1">
                  <div
                    className={`mx-auto h-[160px] bg-no-repeat ${picture}`}
                    style={bg(PRODUCTS)}
                  />
                  <p className="text-[18px] text-[#231815]">{t(title)}</p>
                  <p className="text-[14px] leading-[28px] text-[#888888]">
                    {t(copy)}
                  </p>
                </li>
              ))}
            </ul>
          ))}
        </section>
        {/* suit_page suit_ninth */}
        <section className="relative h-[950px] bg-white text-center">
          <h2 className="pt-[115px] text-[30px] text-[#231815]">
            {t("suit_page.sn_title")}
          </h2>
          <ul className="mx-auto mt-[180px] flex w-[1190px]">
            {DETAILS.map(([slug, key, picture]) => (
              <li key={slug} className="w-1/3">
                <Link href={`${base}/product/${slug}`} className="block">
                  <div
                    className={`mx-auto h-[289px] bg-no-repeat ${picture}`}
                    style={bg(PRODUCTS)}
                  />
                  <p className="mt-[46px] text-[18px] text-[#333333]">
                    {t(key)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="absolute bottom-[160px] left-1/2 -translate-x-1/2 text-[16px] text-[#111111]/60">
            {t("suit_page.data_source_tips")}
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
