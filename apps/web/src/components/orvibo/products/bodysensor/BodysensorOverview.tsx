import { TextImage } from "@/components/orvibo/product/TextImage";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { DESKTOP_WORDS } from "./pictureWords";

export function BodysensorOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* pd_banner */}
      <div
        id="overview"
        role="img"
        aria-label={ts("alt.banner")}
        className="h-[600px] relative isolate"
      >
        <TextImage
          picture={DESKTOP_WORDS.pic01}
          locale={locale}
          text={text}
          fit={{ size: "natural" }}
          className="absolute inset-0 -z-10"
        />
      </div>
      {/* pd_content */}
      <div className="bg-white">
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.features")}
          className="h-[320px] relative isolate"
        >
          <TextImage
            picture={DESKTOP_WORDS.pic02}
            locale={locale}
            text={text}
            fit={{ size: "natural" }}
            className="absolute inset-0 -z-10"
          />
        </div>
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.rooms")}
          className="h-[920px] relative isolate"
        >
          <TextImage
            picture={DESKTOP_WORDS.pic03}
            locale={locale}
            text={text}
            fit={{ size: "natural" }}
            className="absolute inset-0 -z-10"
          />
        </div>
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.night")}
          className="h-[920px] relative isolate"
        >
          <TextImage
            picture={DESKTOP_WORDS.pic04}
            locale={locale}
            text={text}
            fit={{ size: "natural" }}
            className="absolute inset-0 -z-10"
          />
        </div>
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.delay")}
          className="h-[923px] relative isolate"
        >
          <TextImage
            picture={DESKTOP_WORDS.pic05_1}
            locale={locale}
            text={text}
            fit={{ size: "natural" }}
            className="absolute inset-0 -z-10"
          />
        </div>
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.away")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/bodysensor/06-ea0ac8006a.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.mount")}
          className="h-[920px] relative isolate"
        >
          <TextImage
            picture={DESKTOP_WORDS.pic07}
            locale={locale}
            text={text}
            fit={{ size: "natural" }}
            className="absolute inset-0 -z-10"
          />
        </div>
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.install")}
          className="h-[920px] relative isolate"
        >
          <TextImage
            picture={DESKTOP_WORDS.pic08}
            locale={locale}
            text={text}
            fit={{ size: "natural" }}
            className="absolute inset-0 -z-10"
          />
        </div>
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.app")}
          className="h-[920px] relative isolate"
        >
          <TextImage
            picture={DESKTOP_WORDS.pic09}
            locale={locale}
            text={text}
            fit={{ size: "natural" }}
            className="absolute inset-0 -z-10"
          />
        </div>
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.screens")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/bodysensor/10-eb5ef493e7.webp",
          )}
        />
      </div>
      {/* pd_buy */}
      <div className="bg-[#12cd3e]">
        <p className="mx-auto h-[120px] w-[1150px] text-[30px] leading-[120px] text-white">
          {t("pdbuy_center.pdbc_buyLeft")}
        </p>
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
