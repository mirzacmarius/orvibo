import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { YuntaiCompare } from "./YuntaiCompare";
import { YuntaiDevices } from "./YuntaiDevices";

/** The devices in sec11, in YuntaiDevices' order: text key, icon and product picture. */
const DEVICES = [
  [
    "camera",
    "/guanwang_second/front/images/2019/products/yuntai/icon_1-d113562c9b.webp",
    "/orvibo/products/yuntai/camera.webp",
  ],
  [
    "lock",
    "/guanwang_second/front/images/2019/products/yuntai/icon_2-8ba6d4fd8f.webp",
    "/orvibo/products/yuntai/lock.webp",
  ],
  [
    "motion",
    "/guanwang_second/front/images/2019/products/yuntai/icon_3-df61aca51a.webp",
    "/orvibo/products/yuntai/motion-sensor.webp",
  ],
  [
    "door",
    "/guanwang_second/front/images/2019/products/yuntai/icon_4-f92fc49b40.webp",
    "/orvibo/products/yuntai/door-sensor.webp",
  ],
  [
    "formaldehyde",
    "/guanwang_second/front/images/2019/products/yuntai/icon_5-1c175085e0.webp",
    "/orvibo/products/yuntai/formaldehyde-detector.webp",
  ],
  [
    "smoke",
    "/guanwang_second/front/images/2019/products/yuntai/icon_6-df8becc4f2.webp",
    "/orvibo/products/yuntai/smoke-alarm.webp",
  ],
] as const;

export function YuntaiOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="bg-white font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview">
        {/* sec1 */}
        <div
          className="relative h-[880px] min-w-[1280px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/2019/products/yuntai/sec1-59216c8639.webp",
          )}
        >
          <div className="absolute top-[3.34rem] left-[2.98rem]">
            <h1 className="flex items-center text-[0.48rem] leading-[1em] text-[#111111]">
              {t("w.title")}
              <span className="mx-[0.14rem] rounded-[0.08rem] border-[0.02rem] border-[#111111] px-[0.16rem] text-[0.33rem] tracking-[0.01rem]">
                C1
              </span>
            </h1>
            <p className="mt-[0.11rem] ml-[0.02rem] text-[0.28rem] leading-[1em] text-[#2f2f2f]">
              {t("w.subtitle")}
            </p>
            <p className="mt-[0.28rem] ml-[0.01rem] text-[0.18rem] leading-[0.3rem] tracking-[0.01rem] text-[grey]">
              {t("w.content")}
            </p>
          </div>
        </div>
        {/* sec2: drag the line to compare 720P with 1080P */}
        <div className="mx-auto h-[9.94rem] w-[16rem] overflow-hidden pt-[0.81rem] text-[#2f2f2f]">
          <h2 className="text-center text-[0.36rem] leading-[1em]">
            {t("title.title")}
          </h2>
          <p className="mx-auto mt-[0.05rem] max-w-[9.8rem] text-center text-[0.16rem]">
            {t("content.content")}
          </p>
          <YuntaiCompare
            high={bg(
              "/guanwang_second/front/images/2019/products/yuntai/1080-6ef6f047d7.webp",
            )}
            low={bg(
              "/guanwang_second/front/images/2019/products/yuntai/720-08fc741f98.webp",
            )}
            handle={bg(
              "/guanwang_second/front/images/2019/products/yuntai/move_icon-8137c0cd59.webp",
            )}
            photoLabel={ts("compare.photo")}
            sliderLabel={ts("compare.slider")}
            lowCaption={t("desc.low")}
            highCaption={t("desc.high")}
          />
        </div>
        {/* sec3 */}
        <div
          className="h-[9.5rem] min-w-[1280px] overflow-hidden bg-cover bg-center bg-no-repeat pt-[0.8rem] text-center text-[#2f2f2f]"
          style={bg(
            "/guanwang_second/front/images/2019/products/yuntai/sec3-37b1769b22.webp",
          )}
        >
          <h2 className="text-[0.36rem] leading-[1em]">{t("w.title2")}</h2>
          <p className="mx-auto mt-[0.21rem] max-w-[9rem] text-balance text-[0.16rem] leading-[0.26rem]">
            {t("w.desc")}
          </p>
        </div>
        {/* sec4 */}
        <div
          className="h-[9.53rem] min-w-[1280px] overflow-hidden bg-cover bg-center bg-no-repeat pt-[4.37rem] text-center text-white"
          style={bg(
            "/guanwang_second/front/images/2019/products/yuntai/sec4-5d84b2f921.webp",
          )}
        >
          <h2 className="text-[0.36rem] leading-[1em]">{t("w.title3")}</h2>
          <p className="mx-auto mt-[0.21rem] max-w-[10rem] text-balance text-[0.16rem] leading-[0.26rem]">
            {t("w.desc2")}
          </p>
          <p className="sr-only">{t("alt.night")}</p>
        </div>
        {/* sec5 */}
        <div
          className="h-[9.86rem] min-w-[1280px] overflow-hidden bg-cover bg-center bg-no-repeat pt-[0.8rem] text-center text-white"
          style={bg(
            "/guanwang_second/front/images/2019/products/yuntai/sec5-808cd70a02.webp",
          )}
        >
          <h2 className="text-[0.36rem] leading-[1em]">{t("w.title4")}</h2>
          <p className="mx-auto mt-[0.21rem] max-w-[10.2rem] text-[0.16rem]">
            {t("w.desc3")}
          </p>
        </div>
        {/* sec6 */}
        <div className="mx-auto h-[1.64rem] w-[16rem] overflow-hidden pt-[0.57rem]">
          <h2 className="text-center text-[0.42rem] leading-[1em] font-semibold text-[#111111]">
            {t("title.title2")}
          </h2>
        </div>
        {/* sec7 */}
        <div
          className="h-[9.88rem] min-w-[1280px] overflow-hidden bg-cover bg-center bg-no-repeat pt-[0.81rem] text-center text-[#2f2f2f]"
          style={bg(
            "/guanwang_second/front/images/2019/products/yuntai/sec7-cca8d333f4.webp",
          )}
        >
          <h2 className="text-[0.36rem] leading-[1em]">{t("w.title5")}</h2>
          <p className="mt-[0.29rem] text-[0.16rem] leading-[1em]">
            {t("w.desc4")}
          </p>
        </div>
        {/* sec8: the title may wrap, the paragraph follows it */}
        <div
          className="h-[9.93rem] min-w-[1280px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/2019/products/yuntai/sec8-2db1fcba7f.webp",
          )}
        >
          <div className="relative mx-auto w-[16rem] text-[#111111]">
            <div className="absolute top-[4.54rem] left-[9.41rem]">
              <h2 className="max-w-[6.4rem] text-balance text-[0.36rem] leading-[1.2em]">
                {t("w.title6")}
              </h2>
              <p className="mt-[0.2rem] max-w-[4.4rem] text-[0.16rem]">
                {t("w.desc5")}
              </p>
            </div>
          </div>
        </div>
        {/* sec9: as sec8 */}
        <div
          className="h-[9.88rem] min-w-[1280px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/2019/products/yuntai/sec9-4ff42927c9.webp",
          )}
        >
          <div className="relative mx-auto w-[16rem] text-[#111111]">
            <div className="absolute top-[4.29rem] left-[9.41rem]">
              <h2 className="max-w-[6.4rem] text-balance text-[0.36rem] leading-[1.2em]">
                {t("w.title7")}
              </h2>
              <p className="mt-[0.2rem] max-w-[5.7rem] text-[0.16rem]">
                {t("w.desc6")}
              </p>
            </div>
          </div>
        </div>
        {/* sec10 */}
        <div
          className="h-[9.5rem] min-w-[1280px] overflow-hidden bg-cover bg-center bg-no-repeat pt-[0.83rem] text-center text-white"
          style={bg(
            "/guanwang_second/front/images/2019/products/yuntai/sec10-e7d2e47dcc.webp",
          )}
        >
          <h2 className="text-[0.36rem] leading-[1em]">{t("w.title8")}</h2>
          <p className="mx-auto mt-[0.21rem] max-w-[10.4rem] text-balance text-[0.16rem]">
            {t("w.desc7")}
          </p>
        </div>
        {/* sec11: the devices' cards show when their icons are chosen */}
        <div
          className="min-w-[1280px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/2019/products/yuntai/sec11-0bf87b2f7a.webp",
          )}
        >
          <div className="relative mx-auto h-[10.94rem] w-[16rem] overflow-hidden pt-[0.8rem] text-center text-[#787878]">
            <h2 className="text-[0.36rem] leading-[1em]">{t("w.title9")}</h2>
            <p className="mx-auto mt-[0.21rem] max-w-[10rem] text-balance text-[0.16rem] leading-[0.26rem]">
              {t("w.desc8")}
            </p>
            <YuntaiDevices
              ring={pseudoBg(
                "after",
                "/guanwang_second/front/images/2019/products/yuntai/circle-52298c8217.webp",
              )}
              devices={DEVICES.map(([key, icon, thumb]) => ({
                key,
                name: ts(`devices.${key}.title`),
                title: t(`devices.${key}.title`),
                desc: t(`devices.${key}.desc`),
                icon: bg(icon),
                thumb: img(thumb),
              }))}
            />
          </div>
        </div>
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
