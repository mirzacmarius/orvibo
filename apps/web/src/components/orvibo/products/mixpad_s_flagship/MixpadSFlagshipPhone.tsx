import { ProductScrollFrames } from "@/components/orvibo/product/ProductScrollFrames";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";
import type { ReactNode } from "react";

/** The desktop page's laurels and award wall background. */
const ASSETS = "/orvibo/products/mixpad_s_flagship";
/** The two laurel badges in the banner (text keys `banner.<key>` and `banner.<key>_stat`). */
const BANNER_AWARDS = ["award1", "award2"];
/** The award wall (text keys `sec1.award<n>` and `sec1.award<n>_note`), in orvibo.com's order. */
const AWARDS = [1, 2, 3, 4, 5, 6, 7, 8];
/** The colour pictures (full paths, for phone/register.py) and their names' colours (names: m.color.<n>). */
const COLORS: [string, string][] = [
  [
    "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec4_1-cc834c7b46.webp",
    "text-[#b1a085]",
  ],
  [
    "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec4_2-515188374b.webp",
    "text-[#dfe0e0]",
  ],
  [
    "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec4_3-346fcd942f.webp",
    "text-[#ababab]",
  ],
];

/** The desktop's titles and lines carry its line breaks: on the phone they flow. */
const flat = (line: string) => line.replace(/\s*\n\s*/g, " ");

/** A badge's last line, e.g. "{96} patents": the number in braces set large, as on the desktop page. */
function Stat({ text }: { text: string }): ReactNode {
  const match = /^(.*)\{(.+)\}(.*)$/.exec(text);
  if (!match) return text;
  const [, before, figure, after] = match;
  return (
    <>
      {before}
      <span className="mx-[0.03rem] align-[-0.02rem] text-[0.208rem] font-light leading-[0.26rem] text-[#cac2a9]">
        {figure}
      </span>
      {after}
    </>
  );
}

/** The MixPad S flagship page on phones: orvibo.com's phone page (/mobile/cn/product/mixpad_s_flagship.html), its
 * words in Romanian and English, its screens' words redrawn and its award pictures in HTML. */
export function MixpadSFlagshipPhone({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* mixpadSflagshipPage */}
      <div id="overview-phone" className="pb-[0.01rem] bg-[#111111]">
        {/* sec1 */}
        <div
          className="relative bg-center h-[14rem] bg-cover bg-no-repeat overflow-hidden"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec1-8cfd4467f2.webp",
          )}
        >
          <div className="pt-[1.09rem] pb-[0.2rem] text-[0.496rem] leading-[0.84rem] text-white font-extrabold text-center text-balance">
            {t("banner.bannerTitle")}
          </div>
          <div className="text-[0.24rem] leading-[0.42rem] text-white font-medium text-center flex items-center justify-center text-balance">
            <span className="inline-block">{t("banner.bannerDesc")}</span>
            <span className="ml-[0.1rem] inline-flex h-[0.32rem] items-center rounded-full bg-[linear-gradient(90deg,#cdc4ad,#958b6f)] px-[0.14rem] text-[0.18rem] font-semibold leading-none text-[#141310]">
              {t("banner.badge")}
            </span>
          </div>
          <ul className="absolute inset-x-0 top-[4.02rem] flex justify-center gap-[0.2rem]">
            {BANNER_AWARDS.map((key) => (
              <li key={key} className="flex h-[0.84rem] items-center">
                <Image
                  src={img(`${ASSETS}/laurel-grey-left.webp`)}
                  alt=""
                  width={32}
                  height={70}
                  unoptimized
                  className="h-[0.74rem] w-[0.34rem] shrink-0"
                />
                <div className="whitespace-nowrap px-[0.04rem] text-center text-[0.15rem] leading-[0.22rem] text-white/80 text-balance">
                  {t(`banner.${key}`)}
                  <br />
                  <Stat text={ts(`banner.${key}_stat`)} />
                </div>
                <Image
                  src={img(`${ASSETS}/laurel-grey-right.webp`)}
                  alt=""
                  width={33}
                  height={70}
                  unoptimized
                  className="h-[0.74rem] w-[0.35rem] shrink-0"
                />
              </li>
            ))}
          </ul>
        </div>
        {/* sec2 */}
        <div
          className="bg-center h-[7.53rem] bg-cover bg-no-repeat pt-[0.86rem]"
          style={bg(`${ASSETS}/awards-bg.webp`)}
        >
          <ul className="grid grid-cols-2 gap-y-[0.5rem] px-[0.1rem]">
            {AWARDS.map((n) => (
              <li
                key={n}
                className="flex h-[1.04rem] items-center justify-center"
              >
                <Image
                  src={img(`${ASSETS}/laurel-gold-left.webp`)}
                  alt=""
                  width={44}
                  height={96}
                  unoptimized
                  className="h-[0.86rem] w-[0.39rem] shrink-0"
                />
                <div className="w-[2.5rem] bg-[linear-gradient(90deg,#efece2,#b4a782)] bg-clip-text px-[0.04rem] text-center text-[0.17rem] font-semibold leading-[0.24rem] text-transparent text-balance">
                  {t(`sec1.award${n}`)}
                  <br />
                  {t(`sec1.award${n}_note`)}
                </div>
                <Image
                  src={img(`${ASSETS}/laurel-gold-right.webp`)}
                  alt=""
                  width={45}
                  height={96}
                  unoptimized
                  className="h-[0.86rem] w-[0.4rem] shrink-0"
                />
              </li>
            ))}
          </ul>
        </div>
        {/* sec3 */}
        <div
          className="bg-center h-[15.52rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec3-f2f6ec5160.webp",
          )}
        />
        {/* sec4 */}
        <ProductScrollFrames
          dots={false}
          className="h-[40.02rem]"
          frameClassName="top-[50px] h-[14rem]"
          frames={COLORS.map(([src, color], n) => ({
            key: src,
            content: (
              <div
                className="relative bg-center w-full h-full bg-cover bg-no-repeat"
                style={bg(src)}
              >
                <div className="pt-[1.1rem] pb-[0.3rem] text-[0.384rem] leading-[0.67rem] text-white font-extrabold text-center text-balance">
                  {flat(ts("sec4.title"))}
                </div>
                <div className="text-[0.224rem] leading-[0.48rem] text-white font-medium text-center px-[5%] max-w-[8.5rem] mx-auto text-balance">
                  {flat(ts("sec4.desc"))}
                </div>
                <div
                  className={`absolute top-[10.39rem] left-[1.44rem] -translate-x-1/2 [writing-mode:vertical-rl] text-[0.26rem] leading-none tracking-[0.04em] whitespace-nowrap ${color}`}
                >
                  {t(`m.color.${n + 1}`)}
                </div>
              </div>
            ),
          }))}
        />
        {/* sec5 */}
        <div
          className="bg-center h-[12.95rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec5-953f007d91.webp",
          )}
        >
          <div className="pt-[1rem] pb-[0.3rem] text-[0.384rem] leading-[0.67rem] text-white font-extrabold text-center text-balance">
            {flat(ts("sec5.title"))}
          </div>
          <div className="text-[0.224rem] leading-[0.48rem] text-white font-medium text-center px-[5%] max-w-[7.1rem] mx-auto text-balance">
            {flat(ts("m.sec5.desc"))}
          </div>
        </div>
        {/* sec6 */}
        <div
          className="bg-center h-[12.75rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec6-a965572928.webp",
          )}
        >
          <div className="pt-[1.1rem] pb-[0.3rem] text-[0.384rem] leading-[0.67rem] text-white font-extrabold text-center text-balance">
            {flat(ts("sec6.title"))}
          </div>
          <div className="text-[0.224rem] leading-[0.48rem] text-white font-medium text-center px-[5%] max-w-[6.9rem] mx-auto text-balance">
            {flat(ts("sec6.desc"))}
          </div>
        </div>
        {/* sec7 */}
        <div
          className="bg-center pt-[0.79rem] pl-[0.77rem] h-[12.6rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec7-defeecbe2c.webp",
          )}
        >
          <div className="mb-[0.3rem] pr-[0.6rem] text-[0.384rem] leading-[0.67rem] text-white font-extrabold text-left text-balance">
            {flat(ts("sec7.title"))}
          </div>
          <div className="pr-[0.6rem] text-[0.224rem] leading-[0.48rem] text-white font-medium text-left max-w-[7.5rem]">
            {flat(ts("sec7.desc"))}
          </div>
        </div>
        {/* sec8 */}
        <div
          className="bg-center h-[18.5rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec8-e6e37aede4.webp",
          )}
        >
          <div className="pt-[0.75rem] pb-[0.2rem] text-[0.384rem] leading-[0.67rem] text-white font-extrabold text-center text-balance">
            {flat(ts("sec8.title"))}
          </div>
          <div className="text-[0.224rem] leading-[0.4rem] text-white font-medium text-center px-[5%] max-w-[8.7rem] mx-auto text-balance">
            {flat(ts("sec8.desc"))}
          </div>
        </div>
        {/* sec9 */}
        <div
          className="bg-center h-[12rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec9-ae6ca34b9b.webp",
          )}
        >
          <div className="pt-[1.1rem] pb-[0.3rem] text-[0.384rem] leading-[0.67rem] text-white font-extrabold text-center text-balance">
            {flat(ts("sec9.title"))}
          </div>
          <div className="text-[0.224rem] leading-[0.48rem] text-white font-medium text-center px-[5%] max-w-[7.4rem] mx-auto text-balance">
            {flat(ts("sec9.desc"))}
          </div>
        </div>
        {/* sec10 */}
        <div className="pb-[0.21rem] bg-white text-center text-balance">
          <div className="pt-[1.1rem] pb-[0.3rem] text-[0.384rem] leading-[0.67rem] text-[#111111] font-extrabold text-center text-balance">
            {flat(ts("sec10.title"))}
          </div>
          <div className="mb-[0.55rem] text-[0.224rem] leading-[0.48rem] text-[#111111] font-medium text-center px-[5%] max-w-[8.8rem] mx-auto text-balance">
            {flat(ts("sec10.desc"))}
          </div>
          <Image
            src={img(
              "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec10_1-8dae44e43c.webp",
            )}
            alt=""
            width={694}
            height={267}
            unoptimized
            className="mb-[0.2rem] align-middle inline-block w-[6.94rem] h-[2.67rem]"
          />
          <Image
            src={img(
              "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec10_2-800fae98d9.webp",
            )}
            alt=""
            width={694}
            height={267}
            unoptimized
            className="mb-[0.2rem] align-middle inline-block w-[6.94rem] h-[2.67rem]"
          />
          <Image
            src={img(
              "/guanwang_second/front/mobile/images/new/product/mixpad_s_flagship/sec10_3-984e3ac109.webp",
            )}
            alt=""
            width={694}
            height={267}
            unoptimized
            className="mb-[0.2rem] align-middle inline-block w-[6.94rem] h-[2.67rem]"
          />
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
