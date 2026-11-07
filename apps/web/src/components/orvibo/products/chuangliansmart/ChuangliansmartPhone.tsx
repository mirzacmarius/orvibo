import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

const PHONE = "/orvibo/products/chuangliansmart/phone";
const DESK = "/guanwang_second/front/images/products/chuangliansmart";
/** The banner's three pills (in its picture): their words, at their tops. */
const BANNER_PILLS = [
  { key: "banner.pill", top: "top-[3.98rem]" },
  { key: "banner.pill2", top: "top-[5.06rem]" },
  { key: "banner.pill3", top: "top-[6.12rem]" },
];
/** The time card's three pills (in its picture): their times, at their tops. */
const TIMES = [
  { key: "sec3.time1", top: "top-[3.29rem]" },
  { key: "sec3.time2", top: "top-[4.13rem]" },
  { key: "sec3.time3", top: "top-[4.96rem]" },
];
/** The scene pills of the "sliver of sun" and nap cards, with the desktop page's icons. */
const SUN = [
  { key: "sec3.tips", icon: "sec3_yellow_moon-9fc881a488.webp" },
  { key: "sec3.tips2", icon: "sec3_green-17ce5245be.webp" },
];
const NAP = [
  { key: "sec3.tips3", icon: "sec3_green-17ce5245be.webp" },
  { key: "sec3.tips4", icon: "sec3_green_moon-bcb7e4fc89.webp" },
];
/** The service badges (in the picture, without their words): the name and the line under it. */
const BADGES = [
  { name: "sec8.content", line: "sec8.content2" },
  { name: "sec8.content3", line: "sec8.content4" },
];
/** The kit's three products and their spec lines, as on the desktop's spec tab (spec.<product>.<key>). */
const SPEC = [
  {
    id: "switch",
    keys: [
      "name",
      "cpu",
      "screen",
      "touch",
      "mic",
      "body",
      "power",
      "scenes",
      "network",
    ],
  },
  {
    id: "motor",
    keys: [
      "name",
      "model",
      "size",
      "power",
      "input",
      "current",
      "torque",
      "speed",
      "temp",
      "wifi",
      "warranty",
    ],
  },
  { id: "track", keys: ["name", "model", "length", "load", "wall", "width"] },
];

/** The Super Smart curtain page on phones: orvibo.com's phone page (/mobile/cn/product/chuangliansmart.html), its
 * words in Romanian and English, the words in its pictures redrawn or set in HTML on them, and the desktop's spec
 * at its end. */
export function ChuangliansmartPhone({
  locale,
  text,
  common,
}: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* chuangliansmart */}
      <div id="overview-phone" className="pb-[0.01rem] bg-white">
        {/* banner */}
        <div
          className="relative pt-[1.28rem] h-[11.46rem] bg-cover text-[#111111] tracking-[0.02rem] text-center overflow-hidden text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/chuangliansmart/banner-145c9a2ebb.webp",
          )}
        >
          <div className="leading-[0.32rem]">
            <span className="inline-block rounded-[18px] border-[2px] border-[#111111] px-[0.2rem] text-[0.2rem] leading-[0.3rem] font-extrabold">
              {t("banner.bannerTitle2")}
            </span>
          </div>
          <div className="mt-[0.12rem] px-[0.3rem] text-[0.42rem] leading-[1.25] font-extrabold">
            {t("banner.bannerTitle")}
          </div>
          <Image
            src={img(
              "/guanwang_second/front/images/products/chuangliansmart/banner_text-4d74747657.webp",
            )}
            alt=""
            width={490}
            height={179}
            unoptimized
            className="inline mt-[-0.32rem] ml-[-0.65rem] align-middle w-[4.9rem] h-[1.79rem]"
          />
          {BANNER_PILLS.map(({ key, top }) => (
            <div
              key={key}
              className={`absolute left-[1.97rem] flex h-[0.83rem] w-[2.47rem] items-center justify-center px-[0.18rem] text-[0.21rem] leading-[1.25] text-[#1a1a1a] tracking-normal text-balance ${top}`}
            >
              {t(key)}
            </div>
          ))}
        </div>
        {/* sec title */}
        <div className="pt-[0.76rem] tracking-[0.01rem] text-[#111111] text-center text-[0.384rem] leading-[0.77rem] font-extrabold h-[2.95rem] bg-[#f1f1f1] px-[5%] text-balance">
          {t("sec1.title")}
        </div>
        {/* sec1 */}
        <div
          className="pt-[1.1rem] h-[11.22rem] bg-cover"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec1-14a702bf92.webp",
          )}
        >
          <div className="text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-[#111111] text-center px-[5%] text-balance">
            {t("sec1.card")}
          </div>
          <div className="mt-[0.2rem] text-[0.224rem] leading-[0.38rem] font-normal text-[#111111] text-center max-w-[7.9rem] mx-auto px-[5%] text-balance">
            {t("sec1.card2")}
          </div>
        </div>
        {/* sec2 */}
        <div
          className="pt-[1.1rem] h-[11.05rem] bg-cover"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec2-d3c843cb48.webp",
          )}
        >
          <div className="text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-[#111111] text-center px-[5%] text-balance">
            {t("sec1.card3")}
          </div>
          <div className="mt-[0.2rem] text-[0.224rem] leading-[0.38rem] font-normal text-[#111111] text-center max-w-[7.9rem] mx-auto px-[5%] text-balance">
            {t("sec1.card4")}
          </div>
        </div>
        {/* sec3 */}
        <div
          className="pt-[1.1rem] h-[11.64rem] bg-cover"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec3-fae7d6218d.webp",
          )}
        >
          <div className="text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-white text-center px-[5%] text-balance">
            {t("sec1.card5")}
          </div>
          <div className="mt-[0.2rem] text-[0.224rem] leading-[0.38rem] font-normal text-white text-center max-w-[8rem] mx-auto px-[5%] text-balance">
            {t("sec1.card6")}
          </div>
        </div>
        {/* sec4 */}
        <div
          className="relative pt-[1.1rem] h-[8.2rem] bg-cover"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec4-38ddea2f2f.webp",
          )}
        >
          <div className="text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-[#111111] text-center px-[5%] text-balance">
            {t("sec2.title")}
          </div>
          <div className="mt-[0.3rem] text-[0.224rem] leading-[0.38rem] font-normal text-[#111111] text-center text-balance">
            {t("sec2.desc")}
          </div>
          <p className="absolute inset-x-0 top-[6.3rem] mx-auto text-[0.192rem] leading-[0.4rem] font-medium text-[#111111] w-[6.62rem] text-center text-balance">
            {t("sec2.info")}
          </p>
        </div>
        {/* sec5 */}
        <div className="h-[29.38rem]">
          <div className="pt-[0.7rem] pb-[0.6rem] tracking-[0.01rem] text-[#111111] text-center text-[0.384rem] leading-[0.77rem] font-extrabold px-[5%] text-balance">
            {t("sec3.title")}
          </div>
          <div
            className="relative mx-auto mb-[0.2rem] pt-[0.72rem] pl-[0.55rem] pr-[0.45rem] w-[7.1rem] h-[9rem] bg-cover"
            style={bg(`${PHONE}/sec5_1.webp`)}
          >
            <div className="mb-[0.2rem] text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-[#111111] text-left">
              {t("sec3.content")}
            </div>
            <div className="text-[0.224rem] leading-[0.38rem] font-normal text-[#111111] text-left max-w-[7.9rem]">
              {t("sec3.content2")}
            </div>
            {TIMES.map(({ key, top }) => (
              <span
                key={key}
                className={`absolute left-[1.1rem] flex h-[0.61rem] items-center text-[0.2rem] text-[#111111] ${top}`}
              >
                {t(key)}
              </span>
            ))}
          </div>
          <div
            className="relative mx-auto mb-[0.2rem] pt-[0.72rem] pl-[0.55rem] pr-[0.45rem] w-[7.1rem] h-[9rem] bg-cover"
            style={bg(`${PHONE}/sec5_2.webp`)}
          >
            <div className="mb-[0.2rem] text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-[#111111] text-left">
              {t("sec3.content3")}
            </div>
            <div className="text-[0.224rem] leading-[0.38rem] font-normal text-[#111111] text-left min-h-[1.48rem]">
              {t("sec3.content4")}
            </div>
            <div className="-ml-[0.07rem] flex flex-col items-start gap-[0.18rem]">
              {SUN.map(({ key, icon }) => (
                <span
                  key={key}
                  className="flex min-h-[0.61rem] max-w-[6.2rem] items-center rounded-[0.31rem] bg-white/60 py-[0.06rem] pl-[0.13rem] pr-[0.26rem] shadow-[0_0.04rem_0.12rem_rgba(0,0,0,0.06)]"
                >
                  <Image
                    src={img(`${DESK}/${icon}`)}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="w-[0.32rem] h-[0.32rem] shrink-0"
                  />
                  <span className="ml-[0.11rem] text-[0.2rem] leading-[1.25] text-[#111111]">
                    {t(key)}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div
            className="relative mx-auto mb-[0.2rem] pt-[0.72rem] pl-[0.55rem] pr-[0.45rem] w-[7.1rem] h-[9rem] bg-cover"
            style={bg(`${PHONE}/sec5_3.webp`)}
          >
            <div className="mb-[0.2rem] text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-[#111111] text-left">
              {t("sec3.content5")}
            </div>
            <div className="text-[0.224rem] leading-[0.38rem] font-normal text-[#111111] text-left min-h-[1.48rem]">
              {t("sec3.content6")}
            </div>
            <div className="-ml-[0.1rem] flex flex-col items-start gap-[0.18rem]">
              {NAP.map(({ key, icon }) => (
                <span
                  key={key}
                  className="flex min-h-[0.61rem] max-w-[6.2rem] items-center rounded-[0.31rem] bg-white/60 py-[0.06rem] pl-[0.13rem] pr-[0.26rem] shadow-[0_0.04rem_0.12rem_rgba(0,0,0,0.06)]"
                >
                  <Image
                    src={img(`${DESK}/${icon}`)}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="w-[0.32rem] h-[0.32rem] shrink-0"
                  />
                  <span className="ml-[0.11rem] text-[0.2rem] leading-[1.25] text-[#111111]">
                    {t(key)}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* sec6 */}
        <div>
          <div className="pt-[0.93rem] pb-[0.6rem] tracking-[0.01rem] text-[#111111] text-center text-[0.384rem] leading-[0.77rem] font-extrabold px-[5%] text-balance">
            {t("m.more")}
          </div>
          <div
            className="pt-[1.02rem] pl-[0.7rem] h-[9rem] bg-cover"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec6_1-eddead50d5.webp",
            )}
          >
            <div className="mb-[0.3rem] text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-[#111111] text-left pr-[0.6rem] text-balance">
              {t("sec4.title")}
            </div>
            <div className="text-[0.224rem] leading-[0.38rem] font-normal text-[#111111] text-left max-w-[7.1rem] pr-[0.6rem]">
              {t("sec4.desc")}
            </div>
          </div>
          <div
            className="pt-[1.1rem] pl-[0.7rem] h-[9rem] bg-cover"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec6_2-5c1d37115c.webp",
            )}
          >
            <div className="mb-[0.3rem] text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-[#111111] text-left pr-[0.6rem] text-balance">
              {t("sec5.title")}
            </div>
            <div className="text-[0.224rem] leading-[0.38rem] font-normal text-[#111111] text-left max-w-[7.9rem] pr-[0.6rem]">
              {t("sec5.desc")}
            </div>
          </div>
          <div
            className="pt-[1.1rem] pr-[0.7rem] h-[9rem] bg-cover"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec6_3-375c3af1f8.webp",
            )}
          >
            <div className="mb-[0.3rem] text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-[#111111] text-right ml-auto max-w-[4.4rem] text-balance">
              {t("sec6.title")}
            </div>
            <div className="text-[0.224rem] leading-[0.38rem] font-normal text-[#111111] text-right ml-auto max-w-[4.4rem]">
              {t("sec6.desc")}
            </div>
          </div>
        </div>
        {/* sec7 */}
        <div
          className="pt-[1.1rem] h-[12.8rem] bg-cover"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec7-d1002d3314.webp",
          )}
        >
          <div className="text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-[#111111] text-center px-[5%] text-balance">
            {t("sec7.title")}
          </div>
          <div className="mt-[0.42rem] text-[0.224rem] leading-[0.38rem] font-normal text-[#111111] text-center text-balance">
            {t("sec7.desc")}
          </div>
        </div>
        {/* sec8 */}
        <div
          className="relative pt-[1.1rem] h-[14.54rem] bg-cover"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec8-44ae20af90.webp",
          )}
        >
          <div className="text-[0.288rem] leading-[0.5rem] font-extrabold tracking-[0.02rem] text-[#111111] text-center px-[5%] text-balance">
            {t("sec8.title")}
          </div>
          <div className="mt-[0.3rem] text-[0.224rem] leading-[0.38rem] font-normal text-[#111111] text-center max-w-[7.9rem] mx-auto px-[5%] text-balance">
            {t("sec8.desc")}
          </div>
          <div className="absolute left-[0.2rem] top-[12.78rem] flex w-[7.08rem]">
            {BADGES.map(({ name, line }) => (
              <div
                key={name}
                className="w-1/2 px-[0.2rem] text-center text-balance"
              >
                <div className="text-[0.22rem] leading-[1.3] font-bold text-[#252628] text-balance">
                  {t(name)}
                </div>
                <div className="mt-[0.08rem] text-[0.18rem] leading-[1.3] text-[#adadac] text-balance">
                  {t(line)}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* sec9 */}
        <div className="h-[14.57rem] bg-[#f8f8f8]">
          <div className="pt-[1.1rem] pb-[0.4rem] tracking-[0.01rem] text-[#111111] text-center text-[0.34rem] leading-[0.6rem] font-extrabold px-[5%] text-balance">
            {t("sec9.title")}
          </div>
          <div
            className="mx-auto mb-[0.2rem] pt-[0.99rem] pl-[0.4rem] w-[6.92rem] h-[3.33rem] bg-cover"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec9_1-10461e97f0.webp",
            )}
          >
            <div className="mb-[0.2rem] text-[0.24rem] leading-[0.42rem] font-extrabold text-[#111111] max-w-[2.8rem]">
              {t("sec9.bg")}
            </div>
            <div className="text-[0.176rem] font-medium text-[#111111] max-w-[3rem]">
              {t("sec9.bg2")}
            </div>
          </div>
          <div
            className="mx-auto mb-[0.2rem] pt-[0.99rem] pl-[3.86rem] w-[6.92rem] h-[3.33rem] bg-cover"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec9_2-a25a2534d9.webp",
            )}
          >
            <div className="mb-[0.2rem] text-[0.24rem] leading-[0.42rem] font-extrabold text-[#111111] max-w-[2.8rem]">
              {t("sec9.bg3")}
            </div>
            <div className="text-[0.176rem] font-medium text-[#111111] max-w-[2.8rem]">
              {t("sec9.bg4")}
            </div>
          </div>
          <div
            className="mx-auto mb-[0.2rem] pt-[0.99rem] pl-[0.4rem] w-[6.92rem] h-[3.33rem] bg-cover"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/chuangliansmart/sec9_1-10461e97f0.webp",
            )}
          >
            <div className="mb-[0.2rem] text-[0.24rem] leading-[0.42rem] font-extrabold text-[#111111] max-w-[2.8rem]">
              {t("sec9.bg5")}
            </div>
            <div className="text-[0.176rem] font-medium text-[#111111] max-w-[3rem]">
              {t("sec9.bg6")}
            </div>
          </div>
        </div>
        {/* params */}
        <div className="pb-[1.4rem]">
          <div className="mx-auto pt-[1.1rem] tracking-[0.01rem] text-[#111111] text-center text-[0.384rem] leading-[0.77rem] font-extrabold w-[6.2rem] text-balance">
            {common.productSpecTitle}
          </div>
          {SPEC.map(({ id, keys }) => (
            <ul
              key={id}
              className="mx-auto w-[6.2rem] pt-[0.73rem] pb-[0.71rem] border-b border-b-[#111111]/50 last-of-type:border-b-0 last-of-type:pb-[0.92rem]"
            >
              {keys.map((key) => {
                const line = ts(`spec.${id}.${key}`);
                const at = line.indexOf(": ");
                return (
                  <li
                    key={key}
                    className="py-[0.08rem] pl-[0.24rem] -indent-[0.24rem] text-[0.192rem] leading-[0.34rem] text-[#111111]"
                  >
                    <span className="font-extrabold">
                      {line.slice(0, at + 1)}
                    </span>{" "}
                    {line.slice(at + 2)}
                  </li>
                );
              })}
            </ul>
          ))}
          <p className="mx-auto w-[6.2rem] text-[0.192rem] leading-[0.38rem] text-[#111111]/60">
            {common.productSpecNote}
          </p>
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
