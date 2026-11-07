import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { CurtainKitSpec } from "./CurtainKitSpec";
import { DESKTOP_WORDS } from "./pictureWords";

/** The Chocolate kit's spec tab (orvibo.com's chuanglian_install page). */
export function ChuanglianSpec(props: ProductViewProps) {
  return (
    <CurtainKitSpec
      {...props}
      photo={{
        path: "/guanwang_second/front/images/new/products/chuanglian/pro-56aa21a7a5.webp",
        className: "h-[100px] w-[298px]",
      }}
      specs={["model", "power", "electrical", "performance", "control"]}
      lengths={["3 m", "4 m"]}
      loads={[
        ["straight", "—", "50 kg", "40 kg"],
        ["l_track", "R400", "40 kg", "30 kg"],
      ]}
      guide={[
        {
          key: "windows",
          words: DESKTOP_WORDS.add1,
          className: "h-[1077px] pt-[70px]",
        },
        {
          key: "opening",
          words: DESKTOP_WORDS.add2,
          className: "h-[708px] pt-[60px]",
        },
        {
          key: "measure",
          words: DESKTOP_WORDS.add3,
          className: "h-[1542px] pt-[34px]",
          note: true,
        },
        {
          key: "mounting",
          words: DESKTOP_WORDS.add4,
          className: "h-[780px] pt-[40px]",
        },
        {
          key: "box",
          words: DESKTOP_WORDS.add5,
          className: "h-[984px] pt-[40px]",
        },
        {
          key: "outlet",
          words: DESKTOP_WORDS.add6,
          className: "h-[783px] pt-[38px]",
        },
      ]}
    />
  );
}
