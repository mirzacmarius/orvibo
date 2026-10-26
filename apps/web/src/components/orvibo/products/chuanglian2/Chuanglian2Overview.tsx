import { ProductFocusCarousel } from "@/components/orvibo/product/ProductFocusCarousel";
import { ProductSlideshow } from "@/components/orvibo/product/ProductSlideshow";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function Chuanglian2Overview({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* sec1 */}
      <div
        id="overview"
        className="bg-center text-center h-[800px] w-full bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg1-8023289d8a.webp",
        )}
      >
        <h1 className="pt-[210px] text-[#2f2f2f] font-normal text-[48px]">
          {t("sec1.sec1")}
        </h1>
        <h2 className="mt-[10px] text-[#2f2f2f] font-normal text-[30px] px-[20px] text-balance">
          {t("sec1.sec12")}
        </h2>
        <p className="mt-[10px] text-[18px] leading-[1.6] text-[#2f2f2f] px-[20px] text-balance">
          {t("sec1.sec13")}
        </p>
      </div>
      {/* sec2 */}
      <div className="flow-root px-[20px] pt-[66px] pb-[30px] text-center bg-white relative">
        <h2 className="mb-[72px] text-[36px] text-[#2f2f2f] font-normal">
          {t("sec2.sec2")}
        </h2>
        {/* item */}
        <div className="mr-[2%] float-left w-[32%] relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/chuanglian/2/pic1-36e54ceba8.webp",
            )}
            alt=""
            width={614}
            height={434}
            unoptimized
            className="inline w-full"
          />
          <div className="absolute w-full bottom-0 min-h-[178px] bg-white/60">
            <p className="pt-[40px] text-[24px] leading-[1.6] text-[#2f2f2f] px-[20px] text-balance">
              {t("item.title")}
            </p>
            <p className="mt-[18px] text-[16px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[540px] px-[20px] text-balance">
              {t("item.txt")}
            </p>
          </div>
        </div>
        {/* item item2 */}
        <div className="mr-[2%] float-left w-[32%] relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/chuanglian/2/pic2-3e4c19e99b.webp",
            )}
            alt=""
            width={608}
            height={434}
            unoptimized
            className="inline w-full"
          />
          <div className="absolute w-full bottom-0 min-h-[178px] bg-white/60">
            <p className="pt-[36px] text-[24px] leading-[1.6] text-[#2f2f2f] px-[20px] text-balance">
              {t("item.title2")}
            </p>
            <p className="mt-[18px] text-[16px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[540px] px-[20px] text-balance">
              {t("item.txt2")}
            </p>
          </div>
        </div>
        {/* item */}
        <div className="float-left w-[32%] relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/chuanglian/2/pic3-bee5506d95.webp",
            )}
            alt=""
            width={618}
            height={434}
            unoptimized
            className="inline w-full"
          />
          <div className="absolute w-full bottom-0 min-h-[178px] bg-white/60">
            <p className="pt-[40px] text-[24px] leading-[1.6] text-[#2f2f2f] px-[20px] text-balance">
              {t("item.title3")}
            </p>
            <p className="mt-[18px] text-[16px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[540px] px-[20px] text-balance">
              {t("item.txt3")}
            </p>
          </div>
        </div>
        <div className="text-[14px] text-center text-[#b0b0b0] absolute w-[98%] bottom-[8px]">
          {t("note.lab")}
        </div>
      </div>
      {/* sec_add1 */}
      <div
        className="bg-center text-center h-[799px] bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg2-da081d00fb.webp",
        )}
      >
        <h2 className="pt-[68px] text-[36px] text-[#2f2f2f] font-normal">
          {t("sec_add1.sec_add1")}
        </h2>
        <p className="mt-[22px] text-[18px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[11rem] text-balance">
          {t("sec_add1.sec_add12")}
        </p>
      </div>
      {/* sec3 */}
      <ProductSlideshow
        pagination="bars"
        delay={3800}
        speed={1200}
        className="h-[801px] w-full"
        paginationClassName="bottom-[50px]"
        slides={[
          {
            key: "morning",
            tone: "light",
            content: (
              <div
                className="h-[801px] w-full bg-cover bg-center bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/new/products/chuanglian/2/bg3-2c9d3ddf61.webp",
                )}
              >
                <div className="mx-auto w-[1188px] text-[#2f2f2f]">
                  <p className="ml-[64px] pt-[306px] text-[24px] leading-[1.6]">
                    {t("scene.morning")}
                  </p>
                  <p className="mt-[16px] ml-[64px] text-[16px] leading-[1.6]">
                    {t("scene.morning_txt")}
                  </p>
                </div>
              </div>
            ),
          },
          {
            key: "night",
            tone: "dark",
            content: (
              <div
                className="h-[801px] w-full bg-cover bg-center bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/new/products/chuanglian/2/bg4-77a3e6c27a.webp",
                )}
              >
                <div className="mx-auto w-[1188px] text-white">
                  <p className="ml-[64px] pt-[306px] text-[24px] leading-[1.6]">
                    {t("scene.night")}
                  </p>
                  <p className="mt-[16px] ml-[64px] text-[16px] leading-[1.6]">
                    {t("scene.night_txt")}
                  </p>
                </div>
              </div>
            ),
          },
          {
            key: "cinema",
            tone: "dark",
            content: (
              <div
                className="h-[801px] w-full bg-cover bg-center bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/new/products/chuanglian/2/bg5-2555ef5490.webp",
                )}
              >
                <div className="mx-auto w-[1188px] text-white">
                  <p className="ml-[64px] pt-[306px] text-[24px] leading-[1.6]">
                    {t("scene.cinema")}
                  </p>
                  <p className="mt-[16px] ml-[64px] text-[16px] leading-[1.6]">
                    {t("scene.cinema_txt")}
                  </p>
                </div>
              </div>
            ),
          },
        ]}
      >
        <h2 className="absolute top-[68px] z-10 w-full text-center text-[36px] font-normal text-white transition-colors duration-700 group-data-[tone=light]/slideshow:text-[#2f2f2f]">
          {t("sec3.sec3")}
        </h2>
        <p className="absolute top-[138px] z-10 w-full px-[20px] text-center text-[16px] leading-[1.6] text-white text-balance transition-colors duration-700 group-data-[tone=light]/slideshow:text-[#2f2f2f]">
          {t("sec3.sec32")}
        </p>
      </ProductSlideshow>
      {/* sec4 */}
      <div
        className="bg-bottom h-[872px] w-full bg-no-repeat bg-white"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg6-f9a1b5f986.webp",
        )}
      >
        {/* container */}
        <div className="mx-auto w-[1188px]">
          <h2 className="pt-[66px] text-center text-[42px] text-[#2f2f2f] font-normal text-balance">
            {t("container.container")}
          </h2>
          <div className="mt-[300px] mb-[62px]">
            <p className="mb-[24px] text-[36px] leading-[1.6] text-[#2f2f2f] max-w-[640px] text-balance">
              {t("container.title")}
            </p>
            <p className="pb-[10px] text-[16px] leading-[1.6] text-[#2f2f2f] max-w-[600px] text-pretty">
              {t("container.txt")}
            </p>
            <p className="pb-[10px] text-[16px] leading-[1.6] text-[#2f2f2f] max-w-[600px] text-pretty">
              {t("container.txt2")}
            </p>
            <div
              className="bg-center mt-[15px] w-[276px] h-[50px] bg-no-repeat"
              style={bg(
                "/guanwang_second/front/images/new/products/chuanglian/icon1-f914238f2d.webp",
              )}
            />
          </div>
        </div>
      </div>
      {/* sec5 */}
      <div
        className="bg-center h-[670px] w-full bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg7-e0377950f7.webp",
        )}
      >
        {/* container */}
        <div className="mx-auto w-[1188px]">
          <div className="ml-[460px] pt-[480px]">
            <p className="text-[36px] leading-[1.6] text-white whitespace-nowrap">
              {t("container.title2")}
            </p>
            <p className="mt-[20px] text-[16px] leading-[1.6] text-white max-w-[640px] text-pretty">
              {t("container.txt3")}
            </p>
          </div>
        </div>
      </div>
      {/* sec6 */}
      <div
        className="bg-center h-[699px] w-full bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg8-202a2a296c.webp",
        )}
      >
        {/* container */}
        <div className="mx-auto pt-[200px] w-[1188px] relative">
          <div
            className="bg-center ml-[300px] animate-nudge-left motion-reduce:animate-none w-[48px] h-[14px] bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/new/products/chuanglian/arrow-59c2288d12.webp",
            )}
          />
          <div
            className="bg-center mt-[54px] ml-[250px] animate-nudge-left motion-reduce:animate-none w-[48px] h-[14px] bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/new/products/chuanglian/arrow-59c2288d12.webp",
            )}
          />
          <div className="absolute w-[520px] top-[254px] left-[418px]">
            <p className="text-[36px] leading-[1.6] text-[#2f2f2f] text-balance">
              {t("container.title3")}
            </p>
            <p className="mt-[26px] text-[16px] leading-[1.6] text-[#2f2f2f] text-pretty">
              {t("container.txt4")}
            </p>
          </div>
        </div>
      </div>
      {/* sec7 */}
      <div
        className="bg-center w-full h-[700px] bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg9-c3b30d534a.webp",
        )}
      >
        {/* container */}
        <div className="mx-auto pt-[340px] w-[1188px]">
          <p className="ml-[600px] text-[36px] leading-[1.6] text-[#2f2f2f] max-w-[660px] text-balance">
            {t("container.title4")}
          </p>
          <p className="mt-[20px] ml-[600px] text-[16px] leading-[1.6] text-[#2f2f2f] max-w-[560px] text-pretty">
            {t("container.txt5")}
          </p>
        </div>
      </div>
      {/* sec8 */}
      <div className="relative">
        <Image
          src={img(
            "/guanwang_second/front/images/new/products/chuanglian/2/bg10-c4f7d1d984.webp",
          )}
          alt=""
          width={1920}
          height={701}
          unoptimized
          className="w-full"
        />
        {/* container */}
        <div className="ml-[-594px] text-center w-[1188px] absolute top-0 left-1/2">
          <h2 className="pt-[300px] text-[36px] text-[#2f2f2f] font-normal px-[20px] text-balance">
            {t("container.container2")}
          </h2>
          <p className="mt-[22px] text-[16px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[10rem] text-balance">
            {t("container.container3")}
          </p>
        </div>
      </div>
      {/* sec9 */}
      <div
        className="bg-center mt-[-5px] text-center w-full h-[908px] bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg11-8f710a9269.webp",
        )}
      >
        <h2 className="pt-[76px] text-[36px] text-[#2f2f2f] font-normal">
          {t("sec9.sec9")}
        </h2>
        <p className="mt-[10px] text-[16px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[10rem] text-balance">
          {t("sec9.sec92")}
        </p>
      </div>
      {/* sec10 */}
      <div
        className="bg-center text-center w-full h-[902px] bg-no-repeat relative"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg12-5e81e8639c.webp",
        )}
      >
        <h2 className="pt-[72px] font-normal text-[36px] text-[#2f2f2f]">
          {t("sec10.sec10")}
        </h2>
        <p className="mt-[18px] text-[16px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[10rem] text-balance">
          {t("sec10.sec102")}
        </p>
        <div className="text-[14px] text-center text-[#b0b0b0] absolute w-full bottom-[80px]">
          {t("note.lab")}
        </div>
      </div>
      {/* sec11 */}
      <div
        className="bg-center h-[1126px] w-full relative bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg13-fb00bd3f77.webp",
        )}
      >
        {/* fix */}
        <div className="text-center">
          <h2 className="pt-[70px] text-[36px] text-[#888888] font-normal">
            {t("fix.fix")}
          </h2>
          <p className="mt-[20px] text-[16px] leading-[1.6] text-[#888888] mx-auto max-w-[10rem] text-balance">
            {t("fix.fix2")}
          </p>
        </div>
        <div className="mx-auto mt-[86px] flex w-[1188px]">
          <div className="flex w-1/2 items-start">
            <p className="ml-[220px] text-[80px] leading-[1.6] text-[#888888]">
              {t("text.p1")}
            </p>
            <p className="mt-[30px] ml-[20px] whitespace-nowrap text-[18px] leading-[1.6] text-[#888888]">
              {t("text.p2")}
            </p>
          </div>
          <div className="flex w-1/2 items-start">
            <p className="ml-[220px] text-[80px] leading-[1.6] text-[#888888]">
              {"3"}
            </p>
            <p className="mt-[30px] ml-[20px] whitespace-nowrap text-[18px] leading-[1.6] text-[#888888]">
              {t("text.p22")}
            </p>
          </div>
        </div>
        <div className="text-[14px] text-center text-[#b0b0b0] absolute w-full bottom-[80px]">
          {t("note.lab")}
        </div>
      </div>
      {/* sec_add3 */}
      <div
        className="bg-center h-[789px] bg-no-repeat relative"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg14-4885bc87e7.webp",
        )}
      >
        {/* container */}
        <div className="mx-auto w-[1188px]">
          <h2 className="ml-[640px] pt-[380px] text-[36px] font-normal text-[#888888] w-[580px] text-balance">
            {t("container.container4")}
          </h2>
          <p className="mt-[24px] ml-[640px] w-[580px] text-[#888888] text-[16px] leading-[1.6] text-pretty">
            {t("container.container5")}
          </p>
          <p className="mt-[24px] ml-[640px] w-[580px] text-[#b0b0b0] text-[14px] leading-[1.6]">
            {t("note.lab")}
          </p>
        </div>
      </div>
      {/* sec_add4 */}
      <div
        className="bg-center text-center h-[909px] bg-no-repeat relative"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg15-5d467927b6.webp",
        )}
      >
        <h2 className="pt-[80px] text-[36px] text-[#888888] font-normal">
          {t("sec_add4.sec_add4")}
        </h2>
        <p className="mt-[24px] text-[16px] leading-[1.6] text-[#888888] mx-auto max-w-[11rem] text-balance">
          {t("sec_add4.sec_add42")}
        </p>
        <div className="text-[14px] text-center text-[#b0b0b0] absolute w-full bottom-[80px]">
          {t("note.lab")}
        </div>
      </div>
      {/* sec_add2 */}
      <div
        className="bg-center text-center h-[710px] bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/2/bg16-e6c0a34546.webp",
        )}
      >
        <h2 className="pt-[68px] text-[36px] text-[#888888] font-normal">
          {t("sec_add2.sec_add2")}
        </h2>
        {/* container */}
        <div className="mx-auto mt-[360px] w-[1000px]">
          <p className="text-center float-left w-[33.3%] text-[20px] leading-[1.6] text-[#888888] text-balance">
            {t("container.container7")}
          </p>
          <p className="text-center float-left w-[30%] text-[20px] leading-[1.6] text-[#888888] text-balance">
            {t("container.container8")}
          </p>
          <p className="text-center float-right w-[26%] text-[20px] leading-[1.6] text-[#888888] text-balance">
            {t("container.container9")}
          </p>
        </div>
      </div>
      {/* sec12 */}
      <div className="text-center w-full h-[1018px] bg-white">
        <h2 className="pt-[122px] text-[36px] text-[#2f2f2f] font-normal">
          {t("sec12.sec12")}
        </h2>
        <p className="mt-[22px] text-[16px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[8rem] text-balance">
          {t("sec12.sec122")}
        </p>
        <ProductFocusCarousel
          look="rooms"
          className="mt-[64px] mb-[14px]"
          labels={{ prev: common.previous, next: common.next }}
          slides={[
            {
              key: "living",
              image: img(
                "/guanwang_second/front/images/new/products/chuanglian/2/pic4-fa9c53e795.webp",
              ),
            },
            {
              key: "lounge",
              image: img(
                "/guanwang_second/front/images/new/products/chuanglian/2/pic5-2f6f6cf008.webp",
              ),
            },
            {
              key: "dining",
              image: img(
                "/guanwang_second/front/images/new/products/chuanglian/2/pic6-5504998f1b.webp",
              ),
            },
          ]}
        />
      </div>
      {/* sec13 */}
      <div className="text-center w-full relative">
        <h2 className="text-center text-[36px] text-[#2f2f2f] font-normal absolute w-full top-[64px]">
          {t("sec13.sec13")}
        </h2>
        <Image
          src={img(
            "/guanwang_second/front/images/new/products/chuanglian/2/bg17-f8188ed1d0.webp",
          )}
          alt=""
          width={1920}
          height={670}
          unoptimized
          className="inline mt-[-5px] w-full"
        />
        <Image
          src={img(
            "/guanwang_second/front/images/new/products/chuanglian/2/bg18-81b2a77741.webp",
          )}
          alt=""
          width={1920}
          height={968}
          unoptimized
          className="inline mt-[-5px] w-full"
        />
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
