import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

export function MiniHostPhone({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* free_model clear */}
      <div id="overview-phone" className="block w-full">
        {/* zig_sec1 */}
        <section
          className="pt-[0.7rem] block w-full h-[7.91rem] text-center bg-cover relative text-[#333333] bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/zigbee/images/bg_01-dddd0feb3c.webp",
          )}
        >
          <h1 className="px-[5%] mb-[0.3rem] pt-[0.8rem] pl-[0.2rem] font-medium text-[0.384rem] text-balance">
            {t("pdbuy_center.pdbc_buyLeft")}
          </h1>
          <p className="px-[5%] text-[#888888] text-center text-[0.224rem] text-balance">
            {t("m.hero")}
          </p>
        </section>
        {/* zig_sec2 */}
        <section className="px-[5%] py-[0.5rem] block w-full bg-white">
          <div className="mx-auto w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <div className="w-[33.3333%] float-left">
              <span
                className="bg-center mx-auto mb-[0.2rem] bg-contain bg-no-repeat w-[1.5rem] h-[1.5rem] block"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/zigbee/images/icon_zig-76f9768037.webp",
                )}
              />
              <p className="text-[0.2rem] text-center text-balance">
                {t("m.feat.1")}
              </p>
            </div>
            <div className="w-[33.3333%] float-left">
              <span
                className="mx-auto mb-[0.2rem] bg-contain bg-no-repeat w-[1.5rem] h-[1.5rem] block"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/zigbee/images/icon_biezhen-71b685278f.webp",
                )}
              />
              <p className="text-[0.2rem] text-center max-w-[2.6rem] mx-auto text-balance">
                {t("m.feat.2")}
              </p>
            </div>
            <div className="w-[33.3333%] float-left">
              <span
                className="mx-auto mb-[0.2rem] bg-contain bg-no-repeat w-[1.5rem] h-[1.5rem] block"
                style={bg(
                  "/guanwang_second/front/mobile/images/details/zigbee/images/icon_ms-43f2e9d774.webp",
                )}
              />
              <p className="text-[0.2rem] text-center text-balance">
                {t("m.feat.3")}
              </p>
            </div>
          </div>
        </section>
        {/* zig_sec3 */}
        <section
          className="pt-[0.5rem] block w-full h-[10rem] bg-cover text-white text-center bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/zigbee/images/bg_02-509b2f08c6.webp",
          )}
        >
          <h2 className="px-[5%] mb-[0.3rem] font-medium text-[0.32rem] text-balance">
            {t("m.scenes.title")}
          </h2>
          <p className="px-[2%] text-white text-[0.192rem]">
            {t("m.scenes.text")}
          </p>
        </section>
        {/* zig_sec4 */}
        <section
          className="pt-[0.5rem] block w-full h-[5.99rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/details/zigbee/images/bg_03-dfca605f15.webp",
          )}
        />
        {/* zig_sec5 */}
        <section className="px-[5%] py-[0.5rem] block w-full text-center bg-white text-balance">
          <h2 className="px-[5%] mb-[0.3rem] font-medium text-[0.32rem] text-balance">
            {t("m.door.title")}{" "}
            <span className="font-bold">{t("m.door.bold")}</span>
          </h2>
          <p className="mb-[0.3rem] text-[0.192rem]">{t("m.door.text")}</p>
          <Image
            src={img(
              "/guanwang_second/front/mobile/images/details/zigbee/images/icon_04-42507e7003.webp",
            )}
            alt=""
            width={267}
            height={128}
            unoptimized
            className="inline mb-[0.25rem] align-middle w-[36%]"
          />
          <Image
            src={img(
              "/guanwang_second/front/mobile/images/details/zigbee/images/icon_05-cf1635c172.webp",
            )}
            alt=""
            width={446}
            height={123}
            unoptimized
            className="inline mb-[0.25rem] align-middle w-[80%]"
          />
        </section>
        {/* zig_sec6 */}
        <section
          className="pt-[0.5rem] block w-full h-[6rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/mobile/images/details/zigbee/images/bg_04-03c694f3c0.webp",
          )}
        />
        {/* zig_sec7 */}
        <section className="px-[5%] py-[0.5rem] block w-full text-center bg-white text-balance">
          <h2 className="px-[5%] mb-[0.3rem] font-medium text-[0.32rem] text-balance">
            {t("m.window.title")}{" "}
            <span className="font-bold">{t("m.window.bold")}</span>
          </h2>
          <p className="mb-[0.3rem] text-[0.192rem]">{t("m.window.text")}</p>
          <Image
            src={img(
              "/guanwang_second/front/mobile/images/details/zigbee/images/icon_04-42507e7003.webp",
            )}
            alt=""
            width={267}
            height={128}
            unoptimized
            className="inline mb-[0.25rem] align-middle w-[36%]"
          />
          <Image
            src={img(
              "/guanwang_second/front/mobile/images/details/zigbee/images/icon_06-d945e99827.webp",
            )}
            alt=""
            width={458}
            height={117}
            unoptimized
            className="inline mb-[0.25rem] ml-[0.2rem] align-middle w-[80%]"
          />
        </section>
        {/* zig_sec8 */}
        <section
          className="pt-[0.5rem] block w-full h-[11rem] bg-cover text-center text-white bg-no-repeat text-balance"
          style={bg(
            "/guanwang_second/front/mobile/images/details/zigbee/images/bg_05-0b42b94464.webp",
          )}
        >
          <h2 className="px-[5%] mb-[0.3rem] font-medium text-[0.288rem] text-balance">
            {t("m.away.title")}{" "}
            <span className="font-bold">{t("m.away.bold")}</span>
          </h2>
          <p className="px-[2%] text-white text-[0.192rem]">
            {t("m.away.text")}
          </p>
          <div className="relative mt-[0.3rem] inline-block align-middle w-[16.25%]">
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/zigbee/images/icon_07-a34f2611c9.webp",
              )}
              alt=""
              width={103}
              height={675}
              unoptimized
              className="block w-full"
            />
            <span className="absolute left-1/2 top-[18.3%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[0.2rem] text-white">
              {t("m.away.1")}
            </span>
            <span className="absolute left-1/2 top-[45.1%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[0.2rem] text-white">
              {t("m.away.2")}
            </span>
            <span className="absolute left-1/2 top-[71.9%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[0.2rem] text-white">
              {t("m.away.3")}
            </span>
            <span className="absolute left-1/2 top-[98.7%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[0.2rem] text-white">
              {t("m.away.4")}
            </span>
          </div>
        </section>
        {/* zig_sec9 */}
        <section className="pt-[0.5rem] block w-full bg-white text-center text-balance">
          <h2 className="px-[5%] mb-[0.3rem] font-medium text-[0.32rem] text-balance">
            {t("m.devices.title")}
          </h2>
          <div className="pt-[0.2rem] pb-[0.32rem] border-b border-b-[#cccccc]">
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/zigbee/images/zig_img_03-0780744d21.webp",
              )}
              alt=""
              width={600}
              height={300}
              unoptimized
              className="inline align-middle w-[93.75%]"
            />
            <p className="mt-[0.15rem] mb-[0.1rem] text-[0.208rem]">
              {t("m.devices.1")}
            </p>
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/zigbee/images/icon_08-c8a597dc56.webp",
              )}
              alt=""
              width={550}
              height={76}
              unoptimized
              className="inline align-middle w-[86%]"
            />
          </div>
          <div className="pt-[0.2rem] pb-[0.32rem] border-b border-b-[#cccccc]">
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/zigbee/images/zig_img_06-da125185fb.webp",
              )}
              alt=""
              width={600}
              height={300}
              unoptimized
              className="inline align-middle w-[93.75%]"
            />
            <p className="mt-[0.15rem] mb-[0.1rem] text-[0.208rem]">
              {t("m.devices.2")}
            </p>
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/zigbee/images/icon_08-c8a597dc56.webp",
              )}
              alt=""
              width={550}
              height={76}
              unoptimized
              className="inline align-middle w-[66%]"
            />
          </div>
          <div className="pt-[0.2rem] pb-[0.32rem] border-b border-b-[#cccccc]">
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/zigbee/images/zig_img_08-91306ca0f2.webp",
              )}
              alt=""
              width={600}
              height={300}
              unoptimized
              className="inline align-middle w-[93.75%]"
            />
            <p className="mt-[0.15rem] mb-[0.1rem] text-[0.208rem]">
              {t("m.devices.3")}
            </p>
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/zigbee/images/icon_10-2cef80d147.webp",
              )}
              alt=""
              width={445}
              height={83}
              unoptimized
              className="inline align-middle w-[69.5%]"
            />
          </div>
        </section>
        {/* zig_sec10 */}
        <section className="py-[0.5rem] border-b border-b-[#ededed] block w-full bg-white text-center text-balance">
          <h2 className="px-[5%] mb-[0.3rem] font-medium text-[0.32rem] text-balance">
            {t("m.install.title")}{" "}
            <span className="font-bold">{t("m.install.bold")}</span>
          </h2>
          <p className="mx-auto mb-[0.3rem] text-[#888888] text-[0.224rem] max-w-[6.3rem]">
            {t("m.install.text")}
          </p>
          <Image
            src={img(
              "/guanwang_second/front/mobile/images/details/zigbee/images/icon_11-9fcc2cba2a.webp",
            )}
            alt=""
            width={586}
            height={138}
            unoptimized
            className="inline align-middle w-[91.5625%]"
          />
          <ul className="mx-auto px-[2%] w-full before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <li className="float-left w-[33.3333%]">
              <p className="my-[0.2rem] text-[0.192rem] max-w-[4rem]">
                {t("m.install.1")}
              </p>
            </li>
            <li className="float-left w-[33.3333%]">
              <p className="my-[0.2rem] text-[0.192rem] max-w-[4rem]">
                {t("m.install.2")}
              </p>
            </li>
            <li className="float-left w-[33.3333%]">
              <p className="my-[0.2rem] text-[0.192rem] max-w-[4rem]">
                {t("m.install.3")}
              </p>
            </li>
          </ul>
        </section>
        {/* zig_sec11 */}
        <section className="pt-[1rem] pb-[0.4rem] block w-full bg-white">
          <h2 className="px-[5%] mb-[0.3rem] font-medium text-[0.32rem] text-center text-balance">
            {t("spec.title")}
          </h2>
          <div className="text-center text-balance">
            <Image
              src={img(
                "/guanwang_second/front/mobile/images/details/zigbee/images/product_zig-2315bb0b4b.webp",
              )}
              alt=""
              width={200}
              height={160}
              unoptimized
              className="inline align-middle w-[31.25%]"
            />
          </div>
          <h3 className="mt-[2em] mb-[0.8rem] font-medium text-[100%] text-[#888888] text-center text-balance">
            {t("pdbuy_center.pdbc_buyLeft")}
          </h3>
          <p
            className="bg-top mx-[5%] pt-[0.1rem] pl-[2%] bg-contain w-[90%] text-left text-[#888888] text-[0.224rem] bg-no-repeat"
            style={bg(
              "/guanwang_second/front/mobile/images/details/coco/line-59fc505db8.webp",
            )}
          >
            <label className="mb-[5px] inline-block font-bold text-[0.224rem] text-[#333333]">
              {t("m.spec.name")}
            </label>{" "}
            {t("pdbuy_center.pdbc_buyLeft")}
          </p>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <p
              key={n}
              className="bg-top mx-[5%] pt-[0.1rem] pl-[2%] bg-contain w-[90%] text-left text-[#888888] text-[0.224rem] bg-no-repeat"
              style={bg(
                "/guanwang_second/front/mobile/images/details/coco/line-59fc505db8.webp",
              )}
            >
              <label className="mb-[5px] inline-block font-bold text-[0.224rem] text-[#333333]">
                {t(`spec.l${n}`)}
              </label>{" "}
              {t(`spec.v${n}`)}
            </p>
          ))}
        </section>
      </div>
      {/* data_source_tips */}
      <div className="px-[0.46rem] pt-[0.2rem] pb-[0.8rem] flex w-full text-[0.192rem] leading-[1.6em] text-black/60 bg-white">
        {/* content */}
        <div className="flex-1">{t("pd_img.data_source_tips_white")}</div>
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
