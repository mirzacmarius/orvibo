import { TextImage } from "@/components/orvibo/product/TextImage";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";
import { PHONE_WORDS } from "./pictureWords";

const PHONE = "/orvibo/products/mixpad_switch/phone";
/** The Zigbee claims' icons, cut from orvibo.com's picture (phone_clean.py): their sizes in its pixels. */
const ZIGBEE = [
  { n: 1, w: 27, h: 27 },
  { n: 2, w: 34, h: 21 },
  { n: 3, w: 32, h: 19 },
  { n: 4, w: 28, h: 28 },
  { n: 5, w: 37, h: 23 },
];
const flat = (line: string) => line.replace(/\s*\n\s*/g, " ");

/** The MixSwitch page on phones: orvibo.com's phone page (/mobile/cn/product/mixpad_switch.html), its words in
 * Romanian and English, the words in its scene, panel and app pictures redrawn, and its badges and Zigbee claims
 * in HTML. */
export function MixpadSwitchPhone({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* mixpadSwitchPage */}
      <div id="overview-phone" className="pb-[0.01rem] bg-[#111111]">
        {/* banner */}
        <div
          className="bg-center pt-[0.93rem] pl-[0.8rem] h-[13.63rem] bg-cover text-white tracking-[0.02rem] bg-no-repeat overflow-hidden"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_switch/banner-09f4d5450e.webp",
          )}
        >
          <div className="w-[2.22rem] h-[1.5rem]">
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/new/product/mixpad_switch/banner_logo-cf9864220d.webp",
              )}
              alt=""
              width={222}
              height={150}
              unoptimized
              className="align-middle w-full h-full"
            />
          </div>
          <div className="mt-[0.5rem] pr-[0.4rem] text-[0.46rem] leading-[0.62rem] font-extrabold">
            {t("banner.banner_title")}
          </div>
          <div className="mt-[0.16rem] pr-[0.8rem] text-[0.192rem] leading-[0.32rem] font-medium text-white tracking-[0.03rem] text-balance">
            {t("banner.subtitle")}
          </div>
          <div className="mt-[0.6rem] text-[0.24rem] font-medium max-w-[4rem]">
            {t("banner.banner_desc")}
          </div>
        </div>
        {/* banner_text */}
        <div className="h-[3.08rem] bg-white">
          <div className="border-b-[0.01rem] border-b-[#707070]/[0.22] flex">
            <div className="w-[50%] flex items-center justify-center px-[0.2rem] text-[0.192rem] leading-[1.4] text-[#111111] h-[1.54rem] text-center text-balance">
              {t("sec1.sec1")}
            </div>
            <div className="border-l-[0.01rem] border-l-[#707070]/[0.22] w-[50%] flex items-center justify-center px-[0.2rem] text-[0.192rem] leading-[1.4] text-[#111111] h-[1.54rem] text-center text-balance">
              {t("sec1.sec12")}
            </div>
          </div>
          <div className="flex">
            <div className="w-[50%] flex items-center justify-center px-[0.2rem] text-[0.192rem] leading-[1.4] text-[#111111] h-[1.54rem] text-center text-balance">
              {t("sec1.sec13")}
            </div>
            <div className="border-l-[0.01rem] border-l-[#707070]/[0.22] w-[50%] flex items-center justify-center px-[0.2rem] text-[0.192rem] leading-[1.4] text-[#111111] h-[1.54rem] text-center text-balance">
              {t("sec1.sec14")}
            </div>
          </div>
        </div>
        {/* sec1 */}
        <div
          className="bg-center h-[14rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_switch/sec1-570d4a4a26.webp",
          )}
        >
          <div className="pt-[1.1rem] pb-[0.3rem] text-[0.384rem] leading-[0.67rem] font-extrabold text-white tracking-[0.01rem] text-center px-[5%] text-balance">
            {t("sec2.title")}
          </div>
          <div className="text-[0.224rem] leading-[0.48rem] font-medium text-white tracking-[0.01rem] text-center px-[5%] max-w-[8.7rem] mx-auto text-balance">
            {flat(ts("sec2.desc"))}
          </div>
        </div>
        {/* sec2 */}
        <div className="pb-[0.7rem] bg-white">
          <div className="pt-[1.1rem] pb-[0.3rem] pl-[0.77rem] text-[0.384rem] leading-[0.67rem] font-extrabold text-[#111111] tracking-[0.01rem] text-left pr-[0.6rem] text-balance">
            {t("sec3.title")}
          </div>
          <div className="pb-[0.3rem] pl-[0.77rem] text-[0.224rem] leading-[0.48rem] font-medium text-[#111111] tracking-[0.01rem] text-left max-w-[7.5rem] pr-[0.5rem]">
            {flat(ts("sec3.desc"))}
          </div>
          <div className="w-[7.5rem] h-[9.57rem] relative isolate">
            <TextImage
              picture={PHONE_WORDS.sec2_1}
              locale={locale}
              text={text}
              fit={{ size: "cover" }}
              className="absolute inset-0 -z-10"
            />
          </div>
          <div className="w-[7.5rem] h-[9.66rem] relative isolate">
            <TextImage
              picture={PHONE_WORDS.sec2_2}
              locale={locale}
              text={text}
              fit={{ size: "cover" }}
              className="absolute inset-0 -z-10"
            />
          </div>
          <div className="w-[7.5rem] h-[8.58rem] relative isolate">
            <TextImage
              picture={PHONE_WORDS.sec2_3}
              locale={locale}
              text={text}
              fit={{ size: "cover" }}
              className="absolute inset-0 -z-10"
            />
          </div>
        </div>
        {/* sec3 */}
        <div
          className="bg-center pt-[1.1rem] pl-[0.7rem] h-[13.73rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_switch/sec3-a2aea9cbb2.webp",
          )}
        >
          <div className="mb-[0.3rem] text-[0.384rem] leading-[0.67rem] font-extrabold text-white tracking-[0.01rem] text-left pr-[0.6rem] text-balance">
            {t("sec4.title")}
          </div>
          <div className="text-[0.224rem] leading-[0.48rem] font-medium text-white tracking-[0.01rem] text-left max-w-[7.5rem] pr-[0.5rem]">
            {flat(ts("sec4.desc"))}
          </div>
        </div>
        {/* sec4 */}
        <div className="bg-white">
          <div className="pt-[1.1rem] pb-[0.3rem] text-[0.384rem] leading-[0.67rem] font-extrabold text-[#111111] tracking-[0.01rem] text-center px-[5%] text-balance">
            {t("sec5_1.title")}
          </div>
          <div className="pb-[0.86rem] text-[0.224rem] leading-[0.48rem] font-medium text-[#111111] tracking-[0.01rem] text-center px-[5%] max-w-[8.3rem] mx-auto text-balance">
            {flat(ts("sec5_1.desc"))}
          </div>
          <div
            className="bg-center w-[7.5rem] h-[6.07rem] bg-cover bg-no-repeat"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_switch/sec4_1-a93e5a10eb.webp",
            )}
          />
          <div className="w-[7.5rem] h-[7rem] relative isolate">
            <TextImage
              picture={PHONE_WORDS.sec4_2}
              locale={locale}
              text={text}
              fit={{ size: "cover" }}
              className="absolute inset-0 -z-10"
            />
          </div>
        </div>
        {/* sec5 */}
        <div className="pt-[1.1rem] bg-white overflow-hidden">
          <div className="mb-[0.6rem] text-[0.384rem] leading-[0.67rem] font-extrabold text-[#111111] tracking-[0.01rem] text-center px-[5%] text-balance">
            {t("sec6_1.title")}
          </div>
          <div className="px-[0.3rem]">
            <div className="mb-[0.6rem] min-h-[10.15rem] pb-[0.4rem] text-center bg-[#f3f3f3] text-balance">
              <Image
                src={img(
                  "/guanwang_second/front/mobile/images/new/product/mixpad_switch/sec5_1-97f67af1b5.webp",
                )}
                alt=""
                width={685}
                height={762}
                unoptimized
                className="inline align-middle w-[6.85rem] h-[7.62rem]"
              />
              <h3 className="mt-[0.7rem] mb-[0.2rem] font-extrabold text-[0.288rem] leading-[0.5rem] tracking-[0.01rem] text-[#111111]">
                {flat(ts("sec6.title"))}
              </h3>
              <p className="px-[5%] text-[0.192rem] font-normal text-[#111111] text-balance">
                {t("sec6.desc")}
              </p>
            </div>
            <div className="mb-[0.6rem] min-h-[10.53rem] pb-[0.4rem] text-center bg-[#f3f3f3] text-balance">
              <Image
                src={img(
                  "/guanwang_second/front/mobile/images/new/product/mixpad_switch/sec5_2-203eacad53.webp",
                )}
                alt=""
                width={685}
                height={800}
                unoptimized
                className="inline align-middle w-[6.85rem] h-[8rem]"
              />
              <h3 className="mt-[0.7rem] mb-[0.2rem] font-extrabold text-[0.288rem] leading-[0.5rem] tracking-[0.01rem] text-[#111111]">
                {flat(ts("sec6.title2"))}
              </h3>
              <p className="px-[5%] text-[0.192rem] font-normal text-[#111111] text-balance">
                {t("sec6.desc2")}
              </p>
            </div>
            <div className="mb-[0.6rem] min-h-[10.51rem] pb-[0.4rem] text-center bg-[#f3f3f3] text-balance">
              <Image
                src={img(
                  "/guanwang_second/front/mobile/images/new/product/mixpad_switch/sec5_3-670ed01742.webp",
                )}
                alt=""
                width={684}
                height={798}
                unoptimized
                className="inline align-middle w-[6.85rem] h-[7.98rem]"
              />
              <h3 className="mt-[0.7rem] mb-[0.2rem] font-extrabold text-[0.288rem] leading-[0.5rem] tracking-[0.01rem] text-[#111111]">
                {flat(ts("sec6.title3"))}
              </h3>
              <p className="px-[5%] text-[0.192rem] font-normal text-[#111111] text-balance">
                {flat(ts("sec6.desc3"))}
              </p>
            </div>
          </div>
        </div>
        {/* sec6 */}
        <div
          className="bg-center mt-[-0.01rem] pt-[1.04rem] pl-[0.67rem] h-[14.05rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_switch/sec6-16be273bdb.webp",
          )}
        >
          <div className="mb-[0.3rem] text-[0.384rem] leading-[0.67rem] font-extrabold text-[#111111] tracking-[0.01rem] text-left pr-[0.6rem] text-balance">
            {t("sec7_1.title")}
          </div>
          <div className="text-[0.224rem] leading-[0.48rem] font-medium text-[#111111] tracking-[0.01rem] text-left max-w-[5.5rem] pr-[0.5rem]">
            {flat(ts("sec7_1.desc"))}
          </div>
        </div>
        {/* sec7 */}
        <div className="pt-[1.1rem] pl-[0.67rem] bg-white relative">
          <span className="px-[0.23rem] py-[0.04rem] border-[0.02rem] border-[#111111] rounded-[0.32rem] text-[0.192rem] font-extrabold text-[#111111]">
            {t("m.frame")}
          </span>
          <div className="py-[0.3rem] text-[0.384rem] leading-[0.67rem] font-extrabold text-[#111111] tracking-[0.01rem] text-left pr-[0.6rem] text-balance">
            {t("sec8.title")}
          </div>
          <div className="text-[0.224rem] leading-[0.48rem] font-medium text-[#111111] tracking-[0.01rem] text-left max-w-[8.2rem] pr-[0.5rem]">
            {flat(ts("sec8.desc"))}
          </div>
          <div className="pt-[0.61rem] pb-[1.54rem] bg-white text-right">
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/new/product/mixpad_switch/sec7_1-4d7c337fb6.webp",
              )}
              alt=""
              width={634}
              height={208}
              unoptimized
              className="inline align-middle w-[6.34rem] h-[2.08rem]"
            />
          </div>
        </div>
        {/* sec7_2 */}
        <div
          className="bg-center w-[7.5rem] h-[1.86rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_switch/sec7_2-93d82ad950.webp",
          )}
        />
        {/* sec8 */}
        <div
          className="bg-center mb-[0.58rem] h-[16.22rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_switch/sec8-003360d1f8.webp",
          )}
        />
        {/* sec9 */}
        <div className="h-[14.28rem] bg-[#111111]">
          <div className="pt-[1.07rem] pl-[0.67rem] text-[0.384rem] leading-[0.67rem] font-extrabold text-white tracking-[0.01rem] text-left pr-[0.6rem] text-balance">
            {t("sec10.title")}
          </div>
          <div className="mb-[1.23rem] pt-[0.3rem] pl-[0.67rem] text-[0.224rem] leading-[0.48rem] font-medium text-white tracking-[0.01rem] text-left max-w-[7.5rem] pr-[0.5rem]">
            {flat(ts("sec10.desc"))}
          </div>
          <div className="text-center relative text-balance">
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/new/product/mixpad_switch/sec9-d2c6cbec47.webp",
              )}
              alt=""
              width={661}
              height={346}
              unoptimized
              className="inline align-middle w-[6.61rem] h-[3.46rem]"
            />
            <div className="absolute w-[0.02rem] bg-[#b5b5b5]/60 h-[1.65rem] top-[3.11rem] left-[1.69rem]" />
            <p className="absolute top-[4.81rem] left-[1.69rem] w-[1.5rem] -translate-x-1/2 text-center text-[0.17rem] leading-[0.24rem] text-white/60 text-balance">
              {t("sec10.line1")}
            </p>
            <div className="absolute w-[0.02rem] bg-[#b5b5b5]/60 h-[1.85rem] top-[2.91rem] left-[3.28rem]" />
            <p className="absolute top-[4.81rem] left-[3.295rem] w-[1.5rem] -translate-x-1/2 text-center text-[0.17rem] leading-[0.24rem] text-white/60 text-balance">
              {t("sec10.line2")}
            </p>
            <div className="absolute w-[0.02rem] bg-[#b5b5b5]/60 h-[1.94rem] top-[2.82rem] left-[4.85rem]" />
            <p className="absolute top-[4.81rem] left-[4.85rem] w-[1.5rem] -translate-x-1/2 text-center text-[0.17rem] leading-[0.24rem] text-white/60 text-balance">
              {t("sec10.line3")}
            </p>
            <div className="absolute w-[0.02rem] bg-[#b5b5b5]/60 h-[1.64rem] top-[3.14rem] left-[6.54rem]" />
            <p className="absolute top-[4.81rem] left-[6.56rem] w-[1.5rem] -translate-x-1/2 text-center text-[0.17rem] leading-[0.24rem] text-white/60 text-balance">
              {t("sec10.line4")}
            </p>
          </div>
          <div className="mt-[3rem] text-center text-white/40 text-[0.2rem] max-w-[8.2rem] mx-auto text-balance">
            {flat(ts("sec10.after"))}
          </div>
        </div>
        {/* sec10 */}
        <div
          className="bg-center pt-[0.8rem] pl-[0.67rem] h-[13.36rem] bg-cover bg-no-repeat"
          style={bg(`${PHONE}/sec10.webp`)}
        >
          <div className="text-[0.384rem] leading-[0.67rem] font-extrabold text-white tracking-[0.01rem] text-left pr-[0.6rem] text-balance">
            {t("sec11.title")}
          </div>
          <div className="mt-[0.3rem] text-[0.224rem] leading-[0.48rem] font-medium text-white tracking-[0.01rem] text-left max-w-[8.3rem] pr-[0.5rem]">
            {flat(ts("sec11.desc"))}
          </div>
          <ul className="mt-[0.45rem] ml-[0.05rem] grid grid-cols-[auto_auto] justify-start gap-x-[0.4rem] gap-y-[0.14rem] pr-[0.4rem]">
            {ZIGBEE.map(({ n, w, h }) => (
              <li
                key={n}
                className="flex items-center text-[0.2rem] leading-[0.28rem] text-[#b6b8bf]"
              >
                <span className="flex w-[0.37rem] shrink-0 items-center">
                  <Image
                    src={img(`${PHONE}/zigbee_${n}.png`)}
                    alt=""
                    width={w}
                    height={h}
                    unoptimized
                    style={{ width: `${w / 100}rem`, height: `${h / 100}rem` }}
                  />
                </span>
                <span className="ml-[0.1rem]">{t(`sec11.delay_${n}`)}</span>
              </li>
            ))}
          </ul>
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
