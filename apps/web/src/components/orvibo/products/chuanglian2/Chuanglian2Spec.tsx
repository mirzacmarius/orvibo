import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import { CurtainKitSpec } from "@/components/orvibo/products/chuanglian/CurtainKitSpec";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { CHUANGLIAN_WORDS, DESKTOP_WORDS } from "./pictureWords";

/**
 * The ultra-quiet (Zigbee) curtain's spec tab (orvibo.com's
 * chuanglian2_install page). Its install guide is the Chocolate kit's, as on
 * orvibo.com (whose copies of the first, fifth and sixth diagrams are
 * missing), except for the mounting diagram, which is this motor's own.
 */
export function Chuanglian2Spec(props: ProductViewProps) {
  const { t } = productPageHelpers(props.locale, props.text);

  return (
    <CurtainKitSpec
      {...props}
      photo={{
        path: "/guanwang_second/front/images/new/products/chuanglian/2/pro-2bb549d6c0.webp",
        className: "h-[65px] w-[265px]",
      }}
      specs={[
        "model",
        "voltage",
        "size",
        "power",
        "torque",
        "protection",
        "speed",
        "frequency",
      ]}
      specColumns={2}
      lengths={["4 m", "6 m", "8 m"]}
      loads={[
        ["straight", "—", "50 kg", "40 kg", "30 kg"],
        ["l_track", "R400", "40 kg", "30 kg", "20 kg"],
      ]}
      tips={t("load.tips")}
      guide={[
        {
          key: "windows",
          words: CHUANGLIAN_WORDS.add1,
          className: "h-[1077px] pt-[70px]",
        },
        {
          key: "opening",
          words: CHUANGLIAN_WORDS.add2,
          className: "h-[708px] pt-[60px]",
        },
        {
          key: "measure",
          words: CHUANGLIAN_WORDS.add3,
          className: "h-[1542px] pt-[34px]",
          note: true,
        },
        {
          key: "mounting",
          words: DESKTOP_WORDS.bg22,
          className: "h-[782px] pt-[40px]",
        },
        {
          key: "box",
          words: CHUANGLIAN_WORDS.add5,
          className: "h-[984px] pt-[40px]",
        },
        {
          key: "outlet",
          words: CHUANGLIAN_WORDS.add6,
          className: "h-[783px] pt-[38px]",
        },
      ]}
    />
  );
}
