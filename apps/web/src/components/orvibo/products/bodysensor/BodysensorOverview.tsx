import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

export function BodysensorOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* pd_banner */}
      <div
        id="overview"
        role="img"
        aria-label={ts("alt.banner")}
        className="h-[600px] bg-center bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/products/bodysensor/01-cec630379a.webp",
        )}
      />
      {/* pd_content */}
      <div className="bg-white">
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.features")}
          className="h-[320px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/bodysensor/02-87d5af45bc.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.rooms")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/bodysensor/03-94f24813b6.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.night")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/bodysensor/04-f26fa79597.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.delay")}
          className="h-[923px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/bodysensor/05_1-9c5250f11c.webp",
          )}
        />
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
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/bodysensor/07-442e669616.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.install")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/bodysensor/08-c4f4328c76.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.app")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/bodysensor/09-049d1c9139.webp",
          )}
        />
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
