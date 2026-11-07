import { TextImage } from "@/components/orvibo/product/TextImage";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";
import { PHONE_WORDS } from "./pictureWords";

const LINE =
  "/guanwang_second/front/mobile/images/details/coco/line-59fc505db8.webp";

export function BodysensorPhone({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* free_model clear */}
      <div id="overview-phone" className="block w-full bg-contain">
        {/* sensor_sec1 */}
        <section
          className="pt-[0.7rem] block w-full bg-cover text-center h-[7.91rem] relative text-[#333333] bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/sensor/images/bg_01-56e939781f.webp",
          )}
        >
          <h1 className="mb-[0.2rem] pt-[0.7rem] font-medium text-[0.384rem]">
            {t("pdbuy_center.pdbc_buyLeft")}
          </h1>
          <p className="px-[0.6rem] text-center text-[#888888] text-[0.224rem] text-balance">
            {t("m.hero")}
          </p>
        </section>
        {/* sensor_sec2 */}
        <section className="px-[5%] py-[0.5rem] block w-full bg-white">
          <div className="mx-auto w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <div className="w-[33.3333%] float-left">
              <span
                className="bg-center mx-auto mb-[0.2rem] bg-contain bg-no-repeat w-[1.5rem] h-[1.5rem] block"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/zigbee/images/icon_zig-76f9768037.webp",
                )}
              />
              <p className="text-center text-[0.2rem] text-balance">
                {t("m.features.protocol")}
              </p>
            </div>
            <div className="w-[33.3333%] float-left">
              <span
                className="mx-auto mb-[0.2rem] bg-contain bg-no-repeat w-[1.5rem] h-[1.5rem] block"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/zigbee/images/icon_biezhen-71b685278f.webp",
                )}
              />
              <p className="text-center text-[0.2rem] max-w-[2.6rem] mx-auto text-balance">
                {t("m.features.platforms")}
              </p>
            </div>
            <div className="w-[33.3333%] float-left">
              <span
                className="mx-auto mb-[0.2rem] bg-contain bg-no-repeat w-[1.5rem] h-[1.5rem] block"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/zigbee/images/icon_ms-43f2e9d774.webp",
                )}
              />
              <p className="text-center text-[0.2rem] text-balance">
                {t("m.features.speed")}
              </p>
            </div>
          </div>
        </section>
        {/* sensor_sec3 */}
        <section
          className="pt-[0.6rem] block w-full bg-cover text-center h-[10rem] text-white bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/sensor/images/bg_02-2e849bcfb3.webp",
          )}
        >
          <h2 className="mb-[0.3rem] font-medium text-[0.32rem]">
            {t("m.rooms.title")}
          </h2>
          <p className="px-[5%] text-white text-[0.2rem]">
            {t("m.rooms.desc")}
          </p>
        </section>
        {/* sensor_sec4 */}
        <section
          className="block w-full bg-cover h-[5.99rem] bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/details/sensor/images/bg_03-886cefc5c6.webp",
          )}
        />
        {/* sensor_sec5 */}
        <section className="px-[5%] py-[0.5rem] block w-full text-center bg-white text-balance">
          <h2 className="mb-[0.3rem] font-medium text-[0.32rem]">
            {t("m.night.title")}{" "}
            <span className="font-bold">{t("m.night.bold")}</span>
          </h2>
          <p className="mb-[0.6rem] text-[0.2rem]">{t("m.night.how")}</p>
          <TextImage
            picture={PHONE_WORDS.icon_04}
            locale={locale}
            text={text}
            className="block mx-auto mb-[0.2rem] align-middle w-[38%]"
          />
          <TextImage
            picture={PHONE_WORDS.icon_01}
            locale={locale}
            text={text}
            className="block mx-auto mb-[0.2rem] align-middle w-[55%]"
          />
        </section>
        {/* sensor_sec6 */}
        <section
          className="block w-full bg-cover h-[6rem] bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/details/sensor/images/bg_04-88726ca0ef.webp",
          )}
        />
        {/* sensor_sec7 */}
        <section className="px-[5%] py-[0.5rem] block w-full text-center bg-white text-balance">
          <h2 className="mb-[0.3rem] font-medium text-[0.32rem]">
            {t("m.delay.title")}{" "}
            <span className="font-bold">{t("m.delay.bold")}</span>
          </h2>
          <p className="mb-[0.6rem] text-[0.2rem]">{t("m.delay.how")}</p>
          <TextImage
            picture={PHONE_WORDS.bg_05}
            locale={locale}
            text={text}
            className="inline-block align-middle w-full"
          />
        </section>
        {/* sensor_sec8 */}
        <section className="pt-[1.2rem] block w-full text-center h-[12rem] text-white text-balance relative isolate">
          <TextImage
            picture={PHONE_WORDS.bg_05_2}
            locale={locale}
            text={text}
            fit={{ size: "cover", x: 0, y: 0 }}
            className="absolute inset-0 -z-10"
          />
          <h2 className="mb-[0.3rem] font-medium text-[0.272rem]">
            {t("m.away.title")}{" "}
            <span className="font-bold">{t("m.away.bold")}</span>
          </h2>
          <p className="px-[2%] text-white text-[0.192rem]">
            {t("m.away.how")}
          </p>
        </section>
        {/* sensor_sec9 */}
        <section
          className="pt-[1.2rem] block w-full bg-cover text-center h-[9rem] bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/sensor/images/bg_06-0e27775926.webp",
          )}
        >
          <h2 className="mb-[0.3rem] px-[5%] font-medium text-[0.32rem]">
            {t("m.mount.title")}
          </h2>
          <p className="px-[2%] text-[#333333] text-[0.192rem]">
            {t("m.mount.desc")}
          </p>
        </section>
        {/* sensor_sec10 */}
        <section className="py-[1.2rem] block w-full bg-contain text-center text-balance">
          <h2 className="mb-[0.3rem] px-[5%] font-medium text-[0.32rem]">
            {t("m.install.title")}
          </h2>
          <p className="mb-[0.6rem]">{t("m.install.desc")}</p>
          <div className="mx-auto px-[3.75%] w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <div className="w-[33.3333%] float-left text-center text-balance">
              <span
                className="bg-center mx-auto mb-[0.2rem] bg-contain bg-no-repeat block w-[91%] h-[1.4rem]"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/sensor/images/icon_03-5c0712f5ff.webp",
                )}
              />
              <p className="mb-[0.6rem] text-[0.2rem]">
                {t("m.install.step1")}
              </p>
            </div>
            <div className="w-[33.3333%] float-left text-center text-balance">
              <span
                className="bg-center mx-auto mb-[0.2rem] bg-contain bg-no-repeat block w-[91%] h-[1.4rem]"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/sensor/images/icon_04-207b12fa53.webp",
                )}
              />
              <p className="mb-[0.6rem] text-[0.2rem]">
                {t("m.install.step2")}
              </p>
            </div>
            <div className="w-[33.3333%] float-left text-center text-balance">
              <span
                className="bg-center mx-auto mb-[0.2rem] bg-contain bg-no-repeat block w-[91%] h-[1.4rem]"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/sensor/images/icon_05-6c64a5185a.webp",
                )}
              />
              <p className="mb-[0.6rem] text-[0.2rem]">
                {t("m.install.step3")}
              </p>
            </div>
          </div>
        </section>
        {/* sensor_sec11 */}
        <section className="pt-[1rem] pb-[0.4rem] block w-full bg-white">
          <h2 className="mb-[0.3rem] font-medium text-[0.32rem] text-center text-balance">
            {t("spec.title")}
          </h2>
          <div className="text-center text-balance">
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/sensor/images/product_sensor-79fded435f.webp",
              )}
              alt=""
              width={122}
              height={175}
              unoptimized
              className="inline align-middle w-[20%]"
            />
          </div>
          <h3 className="mt-[2em] mb-[0.8rem] font-medium text-[100%] text-[#888888] text-center text-balance">
            {t("m.spec.product")}
          </h3>
          {[
            { label: "m.spec.name", value: t("pdbuy_center.pdbc_buyLeft") },
            { label: "m.spec.model", value: "SN10ZW" },
            ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
              label: `spec.l${n}`,
              value: t(`spec.v${n}`),
            })),
          ].map(({ label, value }) => (
            <p
              key={label}
              className="bg-top mx-[5%] pt-[0.1rem] pl-[2%] bg-contain w-[90%] text-left text-[0.208rem] text-[#888888] bg-no-repeat"
              style={bg(LINE)}
            >
              <span className="mb-[5px] mr-[0.1rem] inline-block font-bold text-[0.224rem] text-[#333333]">
                {t(label)}
              </span>
              {value}
            </p>
          ))}
        </section>
      </div>
      {/* data_source_tips */}
      <div className="px-[0.46rem] pt-[0.2rem] pb-[0.8rem] flex w-full text-[0.192rem] leading-[1.6em] text-black/60 bg-white">
        {/* star */}
        <div className="shrink-0">{"*"}</div>
        {/* content */}
        <div className="flex-1">{t("m.labNote")}</div>
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
