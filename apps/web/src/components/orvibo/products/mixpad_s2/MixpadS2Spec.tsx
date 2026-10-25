import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function MixpadS2Spec({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* s2Page */}
      <div id="spec" className="bg-white">
        {/* param1 */}
        <div
          className="bg-center h-[9.49rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/param_sec1-0c3ed9b43e.webp",
          )}
        >
          <div className="pt-[1.1rem] pb-[0.31rem] font-extrabold text-black text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
            {t("param1.title")}
          </div>
          <div className="text-[0.2rem] leading-[0.32rem] font-medium text-[#2f2f2f] text-center max-w-[13rem] mx-auto px-[0.2rem] text-balance">
            {t("param1.subDesc")}
          </div>
        </div>
        {/* param2 */}
        <div
          className="bg-center h-[5.5rem] bg-no-repeat bg-cover"
          style={bg(
            "/guanwang_second/front/images/products/s2/param_sec2-f4e5eadfbb.webp",
          )}
        >
          <div className="pt-[1.1rem] font-extrabold text-black text-[0.48rem] leading-[0.67rem] text-center px-[0.2rem] text-balance">
            {t("param2.title")}
          </div>
        </div>
        {/* param3 */}
        <div>
          <div className="pt-[0.74rem] pb-[0.79rem] font-extrabold text-black text-[0.42rem] leading-[0.59rem] text-center">
            {t("param3.title")}
          </div>
          <div className="mx-auto flex w-[8.62rem] justify-between">
            <Image
              src={img(
                "/guanwang_second/front/images/products/s2/param1-686e0bee30.webp",
              )}
              alt=""
              width={355}
              height={507}
              unoptimized
              className="align-middle inline-block w-[3.55rem] h-[5.07rem]"
            />
            <Image
              src={img(
                "/guanwang_second/front/images/products/s2/param2-cbe4e0f3c6.webp",
              )}
              alt=""
              width={359}
              height={507}
              unoptimized
              className="align-middle inline-block w-[3.59rem] h-[5.07rem]"
            />
          </div>
          <div className="mt-[0.71rem] flex justify-center gap-x-[2.34rem]">
            <dl className="grid h-fit grid-cols-[auto_3.15rem] gap-x-[0.14rem] text-[16px] leading-[0.36rem] text-[#2f2f2f]">
              <dt>{t("param3.left")}</dt>
              <dd>{"S2"}</dd>
              <dt>{t("param3.left2")}</dt>
              <dd>{t("param3.left3")}</dd>
              <dt>{t("param3.left4")}</dt>
              <dd>{t("param3.left5")}</dd>
              <dt>{t("param3.left6")}</dt>
              <dd>{t("param3.left7")}</dd>
              <dt>{t("param3.left8")}</dt>
              <dd>{t("param3.left9")}</dd>
              <dt>{t("param3.left10")}</dt>
              <dd>{t("param3.left11")}</dd>
              <dt>{t("param3.left12")}</dt>
              <dd>{t("param3.left13")}</dd>
            </dl>
            <dl className="grid h-fit grid-cols-[auto_4.32rem] gap-x-[0.14rem] text-[16px] leading-[0.36rem] text-[#2f2f2f]">
              <dt>{t("param3.right")}</dt>
              <dd>{t("param3.right2")}</dd>
              <dt>{t("param3.right3")}</dt>
              <dd>{t("param3.right4")}</dd>
              <dt>{t("param3.right5")}</dt>
              <dd>{t("param3.right6")}</dd>
              <dt>{t("param3.right7")}</dt>
              <dd>{t("param3.temp")}</dd>
              <dt>{t("param3.right8")}</dt>
              <dd>{t("param3.humidity")}</dd>
              <dt>{t("param3.right9")}</dt>
              <dd>{t("param3.right10")}</dd>
              <dt>{t("param3.right11")}</dt>
              <dd>{t("param3.right12")}</dd>
              <dt>{t("param3.right13")}</dt>
              <dd>{t("param3.right14")}</dd>
            </dl>
          </div>
        </div>
        {/* tips */}
        <div className="pt-[0.81rem] pb-[1rem] text-[0.16rem] leading-[0.22rem] text-[#111111] text-center px-[0.2rem] text-balance">
          {t("tips.tips")}
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
