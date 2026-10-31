import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

const SPEC = [
  ["spec.l1", "spec.v1"],
  ["spec.l2", "spec.v2"],
  ["spec.l3", "spec.v3"],
  ["spec.l4", "spec.v4"],
  ["spec.l5", "spec.v5"],
  ["spec.l6", "spec.v6"],
  ["spec.l7", "spec.v7"],
  ["spec.l8", "spec.v8"],
  ["spec.l9", "spec.v9"],
  ["spec.l10", "spec.v10"],
] as const;

export function MiniHostOverview({ locale, text, common }: ProductViewProps) {
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
          "/guanwang_second/front/images/new/products/miniHost/mini_01-72cc3c57cc.webp",
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
            "/guanwang_second/front/images/new/products/miniHost/mini_02-c2c93fa72c.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.scenes")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/new/products/miniHost/mini_03-e2162c8b8a.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.door")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/new/products/miniHost/mini_04-1f612edaea.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.window")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/new/products/miniHost/mini_05-ea0c59df0d.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.away")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/new/products/miniHost/mini_06-8efc69760f.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.devices")}
          className="h-[921px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/new/products/miniHost/mini_07-1eb44b5214.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.install")}
          className="h-[919px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/new/products/miniHost/mini_08-b290e1d2d3.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.app")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/new/products/miniHost/mini_09-def7530945.webp",
          )}
        />
        {/* pd_img */}
        <div
          role="img"
          aria-label={ts("alt.screens")}
          className="h-[920px] bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/new/products/miniHost/mini_10-593ff57379.webp",
          )}
        />
        {/* pd_img */}
        <div
          className="relative h-[920px] bg-center bg-no-repeat font-normal text-white"
          style={bg(
            "/guanwang_second/front/images/new/products/miniHost/mini_11-541907308d.webp",
          )}
        >
          <h2 className="absolute top-[236.5px] left-1/2 ml-[115px] text-[44px] leading-[56px]">
            {t("spec.title")}
          </h2>
          <dl className="absolute top-[355.5px] left-1/2 ml-[115px] whitespace-nowrap text-[17px] leading-[30px]">
            {SPEC.map(([label, value]) => (
              <div key={label} className="flex gap-x-[0.3em]">
                <dt>{t(label)}</dt>
                <dd>{t(value)}</dd>
              </div>
            ))}
          </dl>
          <p className="absolute right-[40px] bottom-[200px] left-1/2 ml-[115px] text-[16px] text-white/60">
            {t("pd_img.data_source_tips_white")}
          </p>
        </div>
        {/* pd_img: set as text */}
        <section className="h-[399px] bg-[#f0f0f0] pt-[154.5px] text-center font-normal">
          <h2 className="text-[44px] leading-[56px] text-black">
            {t("upgrade.title")}
          </h2>
          <p className="mx-auto mt-[21.5px] max-w-[760px] text-[17px] leading-[30px] text-[#626262]">
            {t("upgrade.text")}
          </p>
        </section>
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
