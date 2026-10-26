import { ProductFocusCarousel } from "@/components/orvibo/product/ProductFocusCarousel";
import { ProductStickyScene } from "@/components/orvibo/product/ProductStickyScene";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

/**
 * sec3's comparison: each row's label, then the classic motorized curtain's
 * and the kit's cells (a text key, or true / false for a tick / a cross).
 */
const COMPARISON: [string, string | boolean, string | boolean][] = [
  ["set", "classic_set", "kit_set"],
  ["outlet", "needed", "not_needed"],
  ["wiring", "needed", "not_needed"],
  ["box", false, true],
  ["touch", true, true],
  ["manual", true, true],
  ["obstacle", true, true],
  ["memory", true, true],
  ["quiet", false, true],
  ["smart_home", false, true],
  ["voice", false, true],
];

export function ChuanglianOverview({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);

  /** A comparison cell: its text, or a tick or a cross (named for screen readers). */
  const mark = (cell: string | boolean, color: string) =>
    typeof cell === "string" ? (
      t(`sec3.${cell}`)
    ) : (
      <svg
        viewBox="0 0 12 12"
        role="img"
        aria-label={ts(cell ? "sec3.yes" : "sec3.no")}
        className={`mx-auto block h-[12px] w-[12px] ${color}`}
      >
        <path
          d={cell ? "M1.5 6.5l3 3 6-7" : "M2 2l8 8M10 2l-8 8"}
          fill="none"
          stroke="currentColor"
          strokeWidth={cell ? 1.4 : 1.6}
        />
      </svg>
    );

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* sec1 */}
      <div
        id="overview"
        className="bg-center text-center h-[800px] w-full bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/bg1-c37e179b4b.webp",
        )}
      >
        <h1 className="pt-[250px] text-[#2f2f2f] text-[36px] font-normal">
          {t("sec1.sec1")}
        </h1>
        <h2 className="text-[#2f2f2f] text-[30px] font-normal">
          {t("sec1.sec12")}
        </h2>
        <p className="mt-[24px] text-[#2f2f2f] text-[18px] leading-[1.6]">
          {t("sec1.sec13")}
        </p>
      </div>
      {/* sec2 */}
      <div>
        {/* block1 */}
        <div className="text-center w-full bg-[#f5f5f6]">
          <h2 className="mb-[24px] pt-[68px] text-[36px] text-[#2f2f2f] font-normal">
            {t("block1.block1")}
          </h2>
          <p className="text-[16px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[9rem] text-balance">
            {t("block1.block12")}
          </p>
          <div
            className="bg-center mx-auto mt-[12px] w-[276px] h-[50px] bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/new/products/chuanglian/add_icon1-1da466faa3.webp",
            )}
          />
          <div className="mt-[70px] mb-[60px] text-center h-[56px] overflow-hidden w-full">
            <div className="relative animate-caption-ticker motion-reduce:animate-none">
              <p className="whitespace-nowrap text-[36px] leading-[56px] text-[#2f2f2f] font-normal">
                {t("block1.content")}
              </p>
              <p className="whitespace-nowrap text-[36px] leading-[56px] text-[#2f2f2f] font-normal">
                {t("block1.content2")}
              </p>
              <p className="whitespace-nowrap text-[36px] leading-[56px] text-[#2f2f2f] font-normal">
                {t("block1.content3")}
              </p>
              <p
                aria-hidden="true"
                className="whitespace-nowrap text-[36px] leading-[56px] text-[#2f2f2f] font-normal"
              >
                {t("block1.content")}
              </p>
            </div>
          </div>
          <div className="flow-root">
            <div className="ml-[1%] w-[32%] relative float-left">
              <Image
                src={img(
                  "/guanwang_second/front/images/new/products/chuanglian/add_pic1-cfdd577068.webp",
                )}
                alt=""
                width={620}
                height={374}
                unoptimized
                className="block w-full h-auto"
              />
              <div className="absolute inset-0 z-[3] bg-black opacity-40 animate-spotlight-dim motion-reduce:animate-none motion-reduce:opacity-0" />
              <div className="opacity-0 animate-spotlight-caption motion-reduce:animate-none motion-reduce:opacity-100 text-center absolute left-0 bottom-0 h-[54px] bg-white/60 text-[18px] leading-[54px] text-[#2f2f2f] align-middle w-full z-[4]">
                {t("block1.text")}
              </div>
            </div>
            <div className="ml-[1%] w-[32%] relative float-left">
              <Image
                src={img(
                  "/guanwang_second/front/images/new/products/chuanglian/add_pic2-b11f28ab01.webp",
                )}
                alt=""
                width={620}
                height={374}
                unoptimized
                className="block w-full h-auto"
              />
              <div className="absolute inset-0 z-[3] bg-black opacity-40 animate-spotlight-dim [animation-delay:-4s] motion-reduce:animate-none motion-reduce:opacity-0" />
              <div className="opacity-0 animate-spotlight-caption [animation-delay:-4s] motion-reduce:animate-none motion-reduce:opacity-100 text-center absolute left-0 bottom-0 h-[54px] bg-white/60 text-[18px] leading-[54px] text-[#2f2f2f] align-middle w-full z-[4]">
                {t("block1.text2")}
              </div>
            </div>
            <div className="ml-[1%] w-[32%] relative float-left">
              <Image
                src={img(
                  "/guanwang_second/front/images/new/products/chuanglian/add_pic3-7ddff6f7a6.webp",
                )}
                alt=""
                width={620}
                height={374}
                unoptimized
                className="block w-full h-auto"
              />
              <div className="absolute inset-0 z-[3] bg-black opacity-40 animate-spotlight-dim [animation-delay:-2s] motion-reduce:animate-none motion-reduce:opacity-0" />
              <div className="opacity-0 animate-spotlight-caption [animation-delay:-2s] motion-reduce:animate-none motion-reduce:opacity-100 text-center absolute left-0 bottom-0 h-[54px] bg-white/60 text-[18px] leading-[54px] text-[#2f2f2f] align-middle w-full z-[4]">
                {t("block1.text3")}
              </div>
            </div>
          </div>
        </div>
        {/* block2 */}
        <div className="text-center h-[550px] w-full bg-[#fdfdfe]">
          <h2 className="pt-[66px] text-[36px] text-[#2f2f2f] font-normal">
            {t("block2.block2")}
          </h2>
          <p className="mt-[24px] text-[18px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[11rem] text-balance">
            {t("block2.block22")}
          </p>
          <div className="mx-auto mt-[132px] w-[1188px] flow-root">
            <div className="text-center w-[25%] float-left">
              <em
                className="bg-[position:-96px_0] mx-auto block w-[48px] h-[48px] bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/new/products/chuanglian/add_icons-b581d42bbd.webp",
                )}
              />
              <p className="mt-[16px] text-[22px] leading-[1.6] text-[#2f2f2f] px-[20px] text-balance">
                {t("block2.item")}
              </p>
            </div>
            <div className="text-center w-[25%] float-left">
              <em
                className="bg-[position:-144px_0] mx-auto block w-[48px] h-[48px] bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/new/products/chuanglian/add_icons-b581d42bbd.webp",
                )}
              />
              <p className="mt-[16px] text-[22px] leading-[1.6] text-[#2f2f2f] px-[20px] text-balance">
                {t("block2.item2")}
              </p>
            </div>
            <div className="text-center w-[25%] float-left">
              <em
                className="mx-auto block w-[48px] h-[48px] bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/new/products/chuanglian/add_icons-b581d42bbd.webp",
                )}
              />
              <p className="mt-[16px] text-[22px] leading-[1.6] text-[#2f2f2f] px-[20px] text-balance">
                {t("block2.item3")}
              </p>
            </div>
            <div className="text-center w-[25%] float-left">
              <em
                className="bg-[position:-48px_0] mx-auto block w-[48px] h-[48px] bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/new/products/chuanglian/add_icons-b581d42bbd.webp",
                )}
              />
              <p className="mt-[16px] text-[22px] leading-[1.6] text-[#2f2f2f] px-[20px] text-balance">
                {t("block2.item4")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* sec_add1 */}
      <div
        className="bg-center text-center h-[770px] bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/bg16-dbbf26ed41.webp",
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
      <div
        className="bg-center text-center h-[936px] bg-no-repeat w-full"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/add_bg1-a6ddd95c9f.webp",
        )}
      >
        <h2 className="pt-[70px] text-[36px] text-[#2f2f2f] font-normal">
          {t("sec3.sec3")}
        </h2>
        <table className="mx-auto mt-[64px] w-[998px] table-fixed border-collapse border border-[#d7d7d7] text-[16px] leading-[1.4] text-[#444444]">
          <thead>
            <tr className="h-[63px] bg-[#f0f0f0] font-medium text-[#2f2f2f]">
              <th
                scope="col"
                className="w-[332px] border border-[#d7d7d7] font-medium"
              >
                <span className="sr-only">{t("sec3.feature")}</span>
              </th>
              <th
                scope="col"
                className="w-[334px] border border-[#d7d7d7] px-[10px] font-medium"
              >
                {t("sec3.classic")}
              </th>
              <th
                scope="col"
                className="border border-[#d7d7d7] px-[10px] font-medium"
              >
                {t("sec3.kit")}
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map(([row, classic, kit]) => (
              <tr key={row} className="h-[50px]">
                <th
                  scope="row"
                  className="border border-[#d7d7d7] px-[10px] font-normal"
                >
                  {t(`sec3.${row}`)}
                </th>
                <td className="border border-[#d7d7d7] px-[10px]">
                  {mark(classic, "text-[#111111]")}
                </td>
                <td className="border border-[#d7d7d7] px-[10px] text-[#2f86f6]">
                  {mark(kit, "text-[#2f86f6]")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* sec5 */}
      <div
        className="bg-bottom h-[890px] w-full bg-no-repeat bg-white"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/bg6-a3e2443ea9.webp",
        )}
      >
        {/* container */}
        <div className="mx-auto w-[1188px]">
          <h2 className="pt-[62px] text-center text-[42px] text-[#2f2f2f] font-normal">
            {t("container.container")}
          </h2>
          <div className="ml-[712px] pt-[296px]">
            <p className="text-[36px] leading-[1.6] text-white max-w-[480px] text-balance">
              {t("container.title")}
            </p>
            <p className="mt-[20px] text-[16px] leading-[1.6] text-white max-w-[420px] text-pretty">
              {t("container.txt")}
            </p>
          </div>
        </div>
      </div>
      {/* sec6 */}
      <div
        className="bg-center h-[701px] w-full bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/bg7-ebf6417399.webp",
        )}
      >
        {/* container */}
        <div className="mx-auto pt-[330px] w-[1188px] relative">
          <div
            className="bg-center ml-[540px] animate-nudge-left motion-reduce:animate-none w-[48px] h-[14px] bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/new/products/chuanglian/arrow-59c2288d12.webp",
            )}
          />
          <div
            className="bg-center mt-[54px] ml-[450px] animate-nudge-left motion-reduce:animate-none w-[48px] h-[14px] bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/new/products/chuanglian/arrow-59c2288d12.webp",
            )}
          />
          <div className="absolute w-[400px] top-[330px] left-[786px]">
            <p className="text-[36px] leading-[1.6] text-[#2f2f2f] text-balance">
              {t("container.title2")}
            </p>
            <p className="mt-[26px] text-[16px] leading-[1.6] text-[#2f2f2f] max-w-[400px] text-pretty">
              {t("container.txt2")}
            </p>
          </div>
        </div>
      </div>
      {/* sec7 */}
      <div
        className="bg-center w-full h-[700px] bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/bg8-67050bf69d.webp",
        )}
      >
        {/* container */}
        <div className="mx-auto pt-[294px] w-[1188px]">
          <p className="ml-[68px] text-[36px] leading-[1.6] text-[#2f2f2f] max-w-[640px] text-balance">
            {t("container.title3")}
          </p>
          <p className="mt-[20px] ml-[68px] text-[16px] leading-[1.6] text-[#2f2f2f] max-w-[640px] text-pretty">
            {t("container.txt3")}
          </p>
        </div>
      </div>
      {/* sec8 */}
      <div className="relative">
        <Image
          src={img(
            "/guanwang_second/front/images/new/products/chuanglian/bg9-07e16a0d36.webp",
          )}
          alt=""
          width={1920}
          height={701}
          unoptimized
          className="w-full"
        />
        {/* container */}
        <div className="ml-[-594px] text-center w-[1188px] absolute top-0 left-1/2">
          <h2 className="pt-[300px] text-[36px] text-[#2f2f2f] font-normal">
            {t("container.container2")}
          </h2>
          <p className="mt-[22px] text-[16px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[10rem] text-balance">
            {t("container.container3")}
          </p>
        </div>
      </div>
      {/* sec4 */}
      <div>
        {/* block1 */}
        <div className="mt-[-6px] text-center w-full relative">
          <Image
            src={img(
              "/guanwang_second/front/images/new/products/chuanglian/add_bg2-da5097038a.webp",
            )}
            alt=""
            width={1920}
            height={871}
            unoptimized
            className="inline w-full"
          />
          <div className="mr-auto ml-[-594px] w-[1188px] absolute top-0 left-1/2">
            <h2 className="font-bold pt-[70px] text-[36px] text-white">
              {t("block1.container")}
            </h2>
            <p className="mt-[24px] text-[16px] leading-[1.6] text-white mx-auto max-w-[7.5rem] text-balance">
              {t("block1.container2")}
            </p>
          </div>
        </div>
        {/* block2 */}
        <div
          className="bg-center mt-[-6px] h-[870px] w-full bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/new/products/chuanglian/add_bg3-258559b9bf.webp",
          )}
        >
          <div className="mx-auto w-[1188px]">
            <h2 className="ml-[100px] pt-[336px] text-[36px] text-white font-normal max-w-[480px]">
              {t("block2.container")}
            </h2>
            <p className="mt-[24px] ml-[100px] text-[16px] leading-[1.6] text-white max-w-[400px] text-pretty">
              {t("block2.container2")}
            </p>
          </div>
        </div>
      </div>
      {/* sec9 */}
      <div
        className="bg-center mt-[-5px] text-center w-full h-[911px] bg-no-repeat relative"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/bg10-103f5f8e2d.webp",
        )}
      >
        <h2 className="pt-[76px] text-[36px] text-[#2f2f2f] font-normal">
          {t("sec9.sec9")}
        </h2>
        <p className="mt-[10px] text-[16px] leading-[1.6] text-[#2f2f2f] mx-auto max-w-[10rem] text-balance">
          {t("sec9.sec92")}
        </p>
        <div className="text-[14px] text-center text-[#b0b0b0] absolute w-full bottom-[80px]">
          {t("note.lab")}
        </div>
      </div>
      {/* sec10 */}
      <div
        className="bg-center text-center w-full h-[846px] bg-no-repeat relative"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/bg11-c142fc61b5.webp",
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
      <ProductStickyScene
        className="h-[150vh] w-full bg-[#070c12]"
        backdrop={
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={bg(
                "/guanwang_second/front/images/new/products/chuanglian/bg12-3b4daa0e31.webp",
              )}
            />
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-1000 ease-in-out group-data-[active]:opacity-100 motion-reduce:transition-none"
              style={bg(
                "/guanwang_second/front/images/new/products/chuanglian/bg15-c931e750ce.webp",
              )}
            />
          </>
        }
      >
        <div className="absolute inset-x-0 top-0 z-[9] text-center text-white">
          <h2 className="pt-[120px] text-[36px] font-normal transition-opacity [transition-duration:600ms] [transition-delay:1500ms] ease-in-out group-data-[active]:opacity-0 motion-reduce:transition-none">
            {t("fix.fix")}
          </h2>
          <p className="mx-auto mt-[24px] max-w-[10rem] text-balance text-[16px] leading-[1.6] transition-opacity [transition-duration:600ms] [transition-delay:1500ms] ease-in-out group-data-[active]:opacity-0 motion-reduce:transition-none">
            {t("fix.fix2")}
          </p>
        </div>
        <div className="absolute left-1/2 top-[100vh] z-[10] flex -translate-x-1/2 items-start gap-[20px] text-white">
          <p className="text-[80px] leading-[1.6]">{t("text.p1")}</p>
          <p className="mt-[30px] whitespace-nowrap text-[18px] leading-[1.6]">
            {t("text.p2")}
          </p>
        </div>
        <div className="text-[14px] text-center text-[#b0b0b0] absolute w-full bottom-[80px]">
          {t("note.lab")}
        </div>
      </ProductStickyScene>
      {/* sec_add2 */}
      <div
        className="bg-center text-center h-[708px] bg-no-repeat"
        style={bg(
          "/guanwang_second/front/images/new/products/chuanglian/bg17-b8685b16a1.webp",
        )}
      >
        <h2 className="pt-[68px] text-[36px] text-white font-normal">
          {t("sec_add2.sec_add2")}
        </h2>
        {/* container */}
        <div className="mx-auto mt-[360px] w-[1000px]">
          <p className="text-center float-left w-[33.3%] text-[20px] leading-[1.6] text-white text-balance">
            {t("container.container4")}
          </p>
          <p className="text-center float-left w-[30%] text-[20px] leading-[1.6] text-white text-balance">
            {t("container.container5")}
          </p>
          <p className="text-center float-right w-[26%] text-[20px] leading-[1.6] text-white text-balance">
            {t("container.container6")}
          </p>
        </div>
      </div>
      {/* sec12 */}
      <div className="text-center w-full h-[1018px] bg-white">
        <h2 className="pt-[122px] text-[36px] font-normal text-[#2f2f2f]">
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
                "/guanwang_second/front/images/new/products/chuanglian/pic4-092dab1390.webp",
              ),
            },
            {
              key: "bedroom",
              image: img(
                "/guanwang_second/front/images/new/products/chuanglian/pic5-76c86ae930.webp",
              ),
            },
            {
              key: "study",
              image: img(
                "/guanwang_second/front/images/new/products/chuanglian/pic6-6150a89115.webp",
              ),
            },
          ]}
        />
      </div>
      {/* sec13 */}
      <div className="text-center relative w-full">
        <h2 className="text-center text-[36px] font-normal text-[#2f2f2f] absolute w-full top-[64px]">
          {t("sec13.sec13")}
        </h2>
        <Image
          src={img(
            "/guanwang_second/front/images/new/products/chuanglian/bg13-a6cc43d940.webp",
          )}
          alt=""
          width={1920}
          height={1108}
          unoptimized
          className="inline mt-[-5px] w-full"
        />
        <Image
          src={img(
            "/guanwang_second/front/images/new/products/chuanglian/bg14-044cd1f6a3.webp",
          )}
          alt=""
          width={1920}
          height={962}
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
