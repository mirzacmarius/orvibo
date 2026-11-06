import { ProductMoreToggle } from "@/components/orvibo/product/ProductMoreToggle";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { COMPARISON } from "./ChuanglianOverview";

const PHONE = "/orvibo/products/chuanglian/phone";
/** The spec lines (`spec.<key>`, "Label: value"), as on the desktop's spec tab. */
const SPEC = ["model", "power", "electrical", "performance", "control"];
/** The load table, transposed as on orvibo.com's phone page: a column per track (its radius, then its load for each
 * track length, as the desktop's ChuanglianSpec lists them). */
const LENGTHS = ["3 m", "4 m"];
const LOADS = [
  ["straight", "—", "50 kg", "40 kg"],
  ["l_track", "R400", "40 kg", "30 kg"],
];
/** The install guide's six pictures, whole (their heights at the page's width), with orvibo.com's title offsets. */
const GUIDE = [
  {
    key: "windows",
    image:
      "/guanwang_second/front/mobile/images/products/chuanglian/more1-f1d99be524.webp",
    className: "h-[12.76rem] pt-[0.76rem]",
  },
  {
    key: "opening",
    image:
      "/guanwang_second/front/mobile/images/products/chuanglian/more2-061297d643.webp",
    className: "h-[14.61rem] pt-[0.56rem]",
  },
  {
    key: "measure",
    image:
      "/guanwang_second/front/mobile/images/products/chuanglian/more3-41998c7747.webp",
    className: "h-[16.29rem] pt-[0.36rem]",
    note: true,
  },
  {
    key: "mounting",
    image:
      "/guanwang_second/front/mobile/images/products/chuanglian/more4-077c44c749.webp",
    className: "h-[9.76rem] pt-[0.6rem]",
  },
  {
    key: "box",
    image:
      "/guanwang_second/front/mobile/images/products/chuanglian/more5-730227ce99.webp",
    className: "h-[9.47rem] pt-[0.54rem]",
  },
  {
    key: "outlet",
    image:
      "/guanwang_second/front/mobile/images/products/chuanglian/more6-a74dcde664.webp",
    className: "h-[8.68rem] pt-[0.7rem]",
  },
];

/** A line of "a | b | c | d" claims, two a line (orvibo.com breaks the banner's four so). */
const pairs = (line: string) => {
  const parts = line.split(" | ");
  return (
    <>
      {parts.slice(0, 2).join(" | ")}
      <br />
      {parts.slice(2).join(" | ")}
    </>
  );
};

/** The Chocolate kit's page on phones: orvibo.com's phone page (/mobile/cn/product/chuanglian.html), its words in
 * Romanian and English, its comparison and load tables in HTML, the words in its app, parts and install pictures
 * redrawn, and the install guide shown whole under its toggle. */
export function ChuanglianPhone({ locale, text, common }: ProductViewProps) {
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
        className={`mx-auto block h-[0.18rem] w-[0.18rem] ${color}`}
      >
        <path
          d={cell ? "M1.5 6.5l3 3 6-7" : "M2 2l8 8M10 2l-8 8"}
          fill="none"
          stroke="currentColor"
          strokeWidth={cell ? 1.3 : 1.4}
        />
      </svg>
    );

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* sec1 */}
      <div
        id="overview-phone"
        className="bg-center block text-center h-[8rem] w-full bg-cover bg-no-repeat text-balance"
        style={bg(
          "/guanwang_second/front/mobile/images/products/chuanglian/bg1-de1cfe4baa.webp",
        )}
      >
        <h1 className="pt-[1.5rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
          {t("sec1.sec1")}
        </h1>
        <h2 className="mt-[0.1rem] font-normal text-[0.192rem] text-[#2f2f2f]">
          {t("sec1.sec12")}
        </h2>
        <p className="mx-auto mt-[0.26rem] px-[5%] text-[0.2rem] text-[#2f2f2f]">
          {pairs(ts("sec1.sec13"))}
        </p>
      </div>
      {/* sec2 */}
      <div className="block text-center bg-white text-balance">
        <h2 className="mb-[0.36rem] pt-[0.44rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
          {t("block1.block1")}
        </h2>
        <p className="mt-[0.14rem] px-[0.2rem] text-[0.192rem] text-[#2f2f2f]">
          {t("m.voice")}
        </p>
        {/* icons */}
        <div
          className="bg-center mx-auto my-[0.5rem] w-[5.04rem] h-[0.91rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/icon1-0e5290d61c.webp",
          )}
        />
        {/* item item1 */}
        <div
          className="bg-center mx-auto mt-[0.2rem] w-[7.1rem] h-[3.6rem] relative bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/pic1-1512cb50d5.webp",
          )}
        >
          <div className="w-full absolute bottom-0 h-[0.6rem] z-[2] opacity-[0.6] bg-[#fbfbfb]" />
          <div className="w-full absolute bottom-0 h-[0.6rem] z-[2]">
            <p className="text-[0.224rem] leading-[0.6rem] text-[#2f2f2f]">
              {t("block1.text")}
            </p>
          </div>
        </div>
        {/* item item2 */}
        <div
          className="bg-center mx-auto mt-[0.2rem] w-[7.1rem] h-[3.6rem] relative bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/pic2-4d2a947cf6.webp",
          )}
        >
          <div className="w-full absolute bottom-0 h-[0.6rem] z-[2] opacity-[0.6] bg-[#fbfbfb]" />
          <div className="w-full absolute bottom-0 h-[0.6rem] z-[2]">
            <p className="text-[0.224rem] leading-[0.6rem] text-[#2f2f2f]">
              {t("block1.text2")}
            </p>
          </div>
        </div>
        {/* item item3 */}
        <div
          className="bg-center mx-auto mt-[0.2rem] w-[7.1rem] h-[3.6rem] relative bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/pic3-099afea7b4.webp",
          )}
        >
          <div className="w-full absolute bottom-0 h-[0.6rem] z-[2] opacity-[0.6] bg-[#fbfbfb]" />
          <div className="w-full absolute bottom-0 h-[0.6rem] z-[2]">
            <p className="text-[0.224rem] leading-[0.6rem] text-[#2f2f2f]">
              {t("block1.text3")}
            </p>
          </div>
        </div>
      </div>
      {/* add1 */}
      <div className="px-[0.2rem] pb-[1rem] block text-center bg-[#fafafb] text-balance">
        <h2 className="pt-[0.5rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
          {t("block2.block2")}
        </h2>
        <p className="mt-[0.18rem] text-[0.192rem] text-[#2f2f2f]">
          {t("block2.block22")}
        </p>
        {/* icons clear */}
        <div className="flow-root">
          <div className="mt-[0.9rem] text-center w-[50%] float-left text-balance">
            <em
              className="bg-center mx-auto block w-[1.05rem] h-[1.05rem] bg-cover bg-no-repeat"
              style={bg(
                "/guanwang_second/front/mobile/images/products/chuanglian/icon2-7c6ef5c9e7.webp",
              )}
            />
            <p className="mt-[0.16rem] text-[0.224rem] text-[#2f2f2f]">
              {t("block2.item")}
            </p>
          </div>
          <div className="mt-[0.9rem] text-center w-[50%] float-left text-balance">
            <em
              className="bg-center mx-auto block w-[1.05rem] h-[1.05rem] bg-cover bg-no-repeat"
              style={bg(
                "/guanwang_second/front/mobile/images/products/chuanglian/icon3-dced0cfdc8.webp",
              )}
            />
            <p className="mt-[0.16rem] text-[0.224rem] text-[#2f2f2f]">
              {t("block2.item2")}
            </p>
          </div>
          <div className="mt-[0.9rem] text-center w-[50%] float-left text-balance">
            <em
              className="bg-center mx-auto block w-[1.05rem] h-[1.05rem] bg-cover bg-no-repeat"
              style={bg(
                "/guanwang_second/front/mobile/images/products/chuanglian/icon4-8bc195a9f4.webp",
              )}
            />
            <p className="mt-[0.16rem] text-[0.224rem] text-[#2f2f2f]">
              {t("block2.item3")}
            </p>
          </div>
          <div className="mt-[0.9rem] text-center w-[50%] float-left text-balance">
            <em
              className="bg-center mx-auto block w-[1.05rem] h-[1.05rem] bg-cover bg-no-repeat"
              style={bg(
                "/guanwang_second/front/mobile/images/products/chuanglian/icon5-9f616ea529.webp",
              )}
            />
            <p className="mt-[0.16rem] text-[0.224rem] text-[#2f2f2f]">
              {t("block2.item4")}
            </p>
          </div>
        </div>
      </div>
      {/* add2 */}
      <div
        className="bg-center block text-center h-[7.29rem] bg-cover bg-no-repeat text-balance"
        style={bg(
          "/guanwang_second/front/mobile/images/products/chuanglian/add1-a8f9ed787d.webp",
        )}
      >
        <h2 className="pt-[0.52rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
          {t("sec_add1.sec_add1")}
        </h2>
        <p className="mt-[0.24rem] px-[0.2rem] text-[0.192rem] text-[#2f2f2f]">
          {t("sec_add1.sec_add12")}
        </p>
      </div>
      {/* add3 */}
      <div
        className="bg-center block text-center min-h-[11.78rem] pb-[0.23rem] bg-cover bg-no-repeat text-balance"
        style={bg(`${PHONE}/add2.webp`)}
      >
        <h2 className="pt-[0.5rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
          {t("sec3.sec3")}
        </h2>
        <table className="mx-auto mt-[0.5rem] w-[7.11rem] table-fixed border-collapse border border-[#d7d7d7] text-[0.2rem] leading-[1.3] text-[#2a2a2a]">
          <thead>
            <tr className="h-[1rem] bg-[#f0f0f0]">
              <th scope="col" className="border border-[#d7d7d7] font-normal">
                <span className="sr-only">{t("sec3.feature")}</span>
              </th>
              <th
                scope="col"
                className="border border-[#d7d7d7] px-[0.1rem] font-normal"
              >
                {t("sec3.classic")}
              </th>
              <th
                scope="col"
                className="border border-[#d7d7d7] px-[0.1rem] font-normal"
              >
                {t("sec3.kit")}
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map(([row, classic, kit], index) => (
              <tr
                key={row}
                className={index === 0 ? "h-[1.12rem]" : "h-[0.8rem]"}
              >
                <th
                  scope="row"
                  className="border border-[#d7d7d7] px-[0.1rem] font-normal"
                >
                  {t(`sec3.${row}`)}
                </th>
                <td className="border border-[#d7d7d7] px-[0.1rem]">
                  {mark(classic, "text-black")}
                </td>
                <td className="border border-[#d7d7d7] px-[0.1rem] text-[#1c81fe]">
                  {mark(kit, "text-[#1c81fe]")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* sec2 */}
      <div className="block text-center bg-white text-balance">
        <h2 className="mb-[0.36rem] pt-[0.44rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
          {t("container.container")}
        </h2>
        {/* pic pic2 */}
        <div
          className="bg-center w-full h-[9.81rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/bg6-a4c621efd3.webp",
          )}
        >
          <h2 className="pt-[0.46rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
            {t("container.title")}
          </h2>
          <p className="mt-[0.2rem] px-[0.2rem] text-[0.192rem] text-[#2f2f2f]">
            {t("container.txt")}
          </p>
        </div>
        {/* pic pic3 */}
        <div
          className="bg-center w-full h-[8.6rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/bg7-295333c691.webp",
          )}
        >
          <h2 className="pt-[0.46rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
            {t("container.title2")}
          </h2>
          <p className="mt-[0.2rem] px-[0.2rem] text-[0.192rem] text-[#2f2f2f] mx-auto max-w-[5.1rem]">
            {t("container.txt2")}
          </p>
        </div>
        {/* pic pic4 */}
        <div
          className="bg-center w-full h-[9.61rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/bg8-026153ef75.webp",
          )}
        >
          <h2 className="pt-[0.46rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
            {t("container.title3")}
          </h2>
          <p className="mt-[0.2rem] px-[0.2rem] text-[0.192rem] text-[#2f2f2f]">
            {t("container.txt3")}
          </p>
        </div>
        {/* pic pic5 */}
        <div
          className="bg-center w-full h-[8.61rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/bg9-0a15e7037b.webp",
          )}
        >
          <h2 className="pt-[0.46rem] font-normal text-[0.288rem] text-white px-[5%] text-balance">
            {t("container.container2")}
          </h2>
          <p className="mt-[0.2rem] px-[0.2rem] text-[0.192rem] text-white">
            {t("container.container3")}
          </p>
        </div>
      </div>
      {/* add4 */}
      <div
        className="bg-center block text-center h-[6.96rem] bg-cover bg-no-repeat text-balance"
        style={bg(
          "/guanwang_second/front/mobile/images/products/chuanglian/add3-abf247f05b.webp",
        )}
      >
        <h2 className="pt-[0.5rem] font-normal text-[0.288rem] text-white px-[5%] text-balance">
          {t("block1.container")}
        </h2>
        <p className="mt-[0.16rem] px-[0.2rem] text-[0.192rem] text-white">
          {t("block1.container2")}
        </p>
      </div>
      {/* add5 */}
      <div
        className="bg-center block text-center h-[8.9rem] bg-cover bg-no-repeat text-balance"
        style={bg(
          "/guanwang_second/front/mobile/images/products/chuanglian/add4-b819575d80.webp",
        )}
      >
        <h2 className="pt-[0.5rem] font-normal text-[0.288rem] text-white px-[5%] text-balance">
          {t("block2.container")}
        </h2>
        <p className="mt-[0.16rem] px-[0.2rem] text-[0.192rem] text-white">
          {t("block2.container2")}
        </p>
      </div>
      {/* sec3 */}
      <div className="block">
        {/* pic pic1 */}
        <div
          className="bg-center text-center w-full h-[7.33rem] bg-cover bg-no-repeat relative text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/bg10-825d46ebb4.webp",
          )}
        >
          <h2 className="pt-[0.56rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
            {t("sec9.sec9")}
          </h2>
          <p className="mt-[0.2rem] px-[0.2rem] text-center text-[0.192rem] text-[#2f2f2f] text-balance">
            {t("sec9.sec92")}
          </p>
          <div className="px-[0.2rem] text-[0.2rem] w-full text-center absolute bottom-[0.2rem] text-[#b0b0b0] text-balance">
            {t("note.lab")}
          </div>
        </div>
        {/* pic pic2 */}
        <div
          className="bg-center text-center w-full h-[7.69rem] bg-cover bg-no-repeat relative text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/bg11-6cda6f2ca1.webp",
          )}
        >
          <h2 className="pt-[0.56rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
            {t("sec10.sec10")}
          </h2>
          <p className="mt-[0.2rem] px-[0.2rem] text-center text-[0.192rem] text-[#2f2f2f] text-balance">
            {t("sec10.sec102")}
          </p>
          <div className="px-[0.2rem] text-[0.2rem] w-full text-center absolute bottom-[0.2rem] text-[#b0b0b0] text-balance">
            {t("note.lab")}
          </div>
        </div>
      </div>
      {/* sec4 */}
      <div
        className="bg-center block text-center w-full h-[8.26rem] bg-cover bg-no-repeat relative text-balance"
        style={bg(
          "/guanwang_second/front/mobile/images/products/chuanglian/bg12-b8e25ebdfa.webp",
        )}
      >
        <h2 className="pt-[0.54rem] font-normal text-[0.288rem] text-white px-[5%] text-balance">
          {t("fix.fix")}
        </h2>
        <p className="mt-[0.2rem] px-[0.2rem] text-white text-[0.192rem]">
          {t("fix.fix2")}
        </p>
        {/* block block1 */}
        <div className="mt-[1.12rem] ml-[2.4rem] float-left w-[3.22rem]">
          <p className="float-left text-[0.48rem] leading-[1.2] text-white">
            {t("text.p1")}
          </p>
          <div className="mt-[0.1rem] ml-[0.12rem] float-left w-[1.16rem]">
            <p className="text-[0.192rem] leading-[1.2] text-white text-left">
              {ts("text.p2").split("\n")[0]}
            </p>
            <p className="text-[0.192rem] leading-[1.2] text-white text-left">
              {ts("text.p2").split("\n")[1]}
            </p>
          </div>
        </div>
        <div className="px-[0.2rem] text-[0.2rem] w-full text-center absolute bottom-[0.2rem] text-[#b0b0b0] text-balance">
          {t("note.lab")}
        </div>
      </div>
      {/* add6 */}
      <div
        className="bg-center block text-center h-[14.64rem] bg-cover bg-no-repeat text-balance"
        style={bg(
          "/guanwang_second/front/mobile/images/products/chuanglian/add5-18f2f408d0.webp",
        )}
      >
        <h2 className="pt-[0.52rem] font-normal text-[0.288rem] text-[#888888] px-[5%] text-balance">
          {t("sec_add2.sec_add2")}
        </h2>
      </div>
      {/* sec5 */}
      <div className="px-[0.2rem] pt-[0.56rem] pb-[0.86rem] block text-center bg-white text-balance">
        <h2 className="font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
          {t("sec12.sec12")}
        </h2>
        <p className="mt-[0.24rem] pb-[0.5rem] text-[0.192rem] text-[#2f2f2f] mx-auto max-w-[6.4rem]">
          {t("sec12.sec122")}
        </p>
        {/* pic1 */}
        <div
          className="bg-center mt-[0.1rem] h-[3rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/pic4-36bbe2dcf9.webp",
          )}
        />
        {/* pic2 */}
        <div
          className="bg-center mt-[0.1rem] h-[3rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/pic5-9c848d6113.webp",
          )}
        />
        {/* pic3 */}
        <div
          className="bg-center mt-[0.1rem] h-[3rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/pic6-dc4d35aae3.webp",
          )}
        />
      </div>
      {/* sec6 */}
      <div
        className="bg-center block text-center h-[17.99rem] bg-cover bg-no-repeat text-balance"
        style={bg(
          "/guanwang_second/front/mobile/images/products/chuanglian/bg13-a78ebbe368.webp",
        )}
      >
        <h2 className="pt-[0.54rem] font-normal text-[0.288rem] text-[#2f2f2f] px-[5%] text-balance">
          {t("sec13.sec13")}
        </h2>
      </div>
      {/* sec7 */}
      <div className="block bg-white">
        <h2 className="pt-[0.78rem] font-normal text-[0.288rem] text-center text-[#2f2f2f] px-[5%] text-balance">
          {common.productSpecTitle}
        </h2>
        {/* pic */}
        <div
          className="bg-center mx-auto mt-[0.7rem] mb-[0.5rem] w-[2.98rem] h-[1rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/products/chuanglian/pro-041bc59f02.webp",
          )}
        />
        <p className="px-[5%] text-center text-[0.24rem] text-[#2f2f2f] text-balance">
          {t("spec_name")}
        </p>
        {/* explain */}
        <ul className="mt-[0.36rem] pb-[0.36rem] pr-[0.4rem] pl-[0.74rem]">
          {SPEC.map((key) => {
            const line = ts(`spec.${key}`);
            const at = line.indexOf(": ");
            return (
              <li
                key={key}
                className="mt-[0.1rem] flex text-[0.192rem] leading-[1.6] text-[#2f2f2f]"
              >
                <span className="shrink-0">{line.slice(0, at + 1)}</span>
                <span className="ml-[0.06rem] text-[grey]">
                  {line.slice(at + 2)}
                </span>
              </li>
            );
          })}
        </ul>
        {/* table */}
        <div className="mb-[0.68rem] px-[0.18rem]">
          <p className="text-[0.2rem] leading-[1.4] text-[#2c2c2c]">
            {t("load.title")}
          </p>
          <table className="mt-[0.16rem] w-full table-fixed border-collapse border border-[#d7d7d7] text-center text-[0.19rem] leading-[1.3] text-[#2a2a2a]">
            <thead>
              <tr className="h-[1rem] bg-[#f0f0f0]">
                <th
                  scope="col"
                  className="border border-[#d7d7d7] px-[0.1rem] font-normal"
                >
                  {t("load.track")}
                </th>
                {LOADS.map(([track]) => (
                  <th
                    key={track}
                    scope="col"
                    className="border border-[#d7d7d7] px-[0.1rem] font-normal"
                  >
                    {t(`load.${track}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="h-[0.9rem]">
                <th
                  scope="row"
                  className="border border-[#d7d7d7] px-[0.1rem] font-normal"
                >
                  {t("load.radius")}
                </th>
                {LOADS.map(([track, radius]) => (
                  <td key={track} className="border border-[#d7d7d7]">
                    {radius}
                  </td>
                ))}
              </tr>
              {LENGTHS.map((length, index) => (
                <tr key={length} className="h-[0.9rem]">
                  <th
                    scope="row"
                    className="border border-[#d7d7d7] px-[0.1rem] font-normal"
                  >
                    {length}
                  </th>
                  {LOADS.map(([track, , ...loads]) => (
                    <td key={track} className="border border-[#d7d7d7]">
                      {loads[index]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* more */}
        <ProductMoreToggle
          label={`${ts("guide.link")} >`}
          openIcon={img(
            "/guanwang_second/front/mobile/images/products/chuanglian2/icon1-ffc9fbab96.webp",
          )}
          closeIcon={img(`${PHONE}/close.webp`)}
          className="pb-[0.6rem]"
          labelClassName="text-[0.192rem] leading-[1.6]"
          iconClassName="mt-[0.1rem] h-[0.6rem] w-[0.6rem]"
        >
          {/* more_block */}
          <div className="bg-white text-center">
            {GUIDE.map((part) => (
              <div
                key={part.key}
                className={`bg-center bg-cover bg-no-repeat ${part.className}`}
                style={bg(part.image)}
              >
                <h3 className="text-[0.32rem] leading-[1.6] font-normal text-[#2f2f2f] px-[5%] text-balance">
                  {t(`guide.${part.key}`)}
                </h3>
                {part.note && (
                  <p className="mx-auto mt-[0.16rem] max-w-[6rem] px-[5%] text-[0.176rem] leading-[1.6] text-[#2f2f2f] text-balance">
                    {t(`guide.${part.key}_note`)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ProductMoreToggle>
      </div>
      {/* data_source_tips */}
      <div className="px-[0.46rem] pt-[0.2rem] pb-[0.8rem] flex text-[0.192rem] leading-[1.6em] text-black/60 bg-white">
        {/* star */}
        <div className="shrink-0">{"*"}</div>
        {/* content */}
        <div className="flex-1">
          {common.productSpecNote.replace(/^\*\s*/, "")}
        </div>
      </div>
      {/* detail_tips */}
      <div className="px-[0.48rem] py-[0.6rem] w-full bg-[#202020]">
        <p className="text-[0.14rem] leading-[0.4rem] font-medium text-white/80 max-w-[19.5rem]">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
