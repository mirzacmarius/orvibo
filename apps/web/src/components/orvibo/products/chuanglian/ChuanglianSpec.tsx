import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { CurtainKitSpec } from "./CurtainKitSpec";

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
          image:
            "/guanwang_second/front/images/new/products/chuanglian/add1-0d7e01aab7.webp",
          className: "h-[1077px] pt-[70px]",
        },
        {
          key: "opening",
          image:
            "/guanwang_second/front/images/new/products/chuanglian/add2-bb52ed5de2.webp",
          className: "h-[708px] pt-[60px]",
        },
        {
          key: "measure",
          image:
            "/guanwang_second/front/images/new/products/chuanglian/add3-09c12ba550.webp",
          className: "h-[1542px] pt-[34px]",
          note: true,
        },
        {
          key: "mounting",
          image:
            "/guanwang_second/front/images/new/products/chuanglian/add4-cb70080127.webp",
          className: "h-[780px] pt-[40px]",
        },
        {
          key: "box",
          image:
            "/guanwang_second/front/images/new/products/chuanglian/add5-6ac1c23aea.webp",
          className: "h-[984px] pt-[40px]",
        },
        {
          key: "outlet",
          image:
            "/guanwang_second/front/images/new/products/chuanglian/add6-a4041319e3.webp",
          className: "h-[783px] pt-[38px]",
        },
      ]}
    />
  );
}
