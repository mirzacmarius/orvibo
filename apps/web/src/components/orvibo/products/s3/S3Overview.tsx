import { ProductFocusCarousel } from "@/components/orvibo/product/ProductFocusCarousel";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";

/** The scene carousel: one evening in the bedroom, three light settings. */
const SCENES = [
  {
    key: "couple",
    image: "/guanwang_second/front/images/products/s3/sec3-2eec035b86.webp",
  },
  {
    key: "reading",
    image: "/guanwang_second/front/images/products/s3/sec4-05a63fa0c3.webp",
  },
  {
    key: "night",
    image: "/guanwang_second/front/images/products/s3/sec5-0130b452e6.webp",
  },
];

export function S3Overview({ locale, text, common }: ProductViewProps) {
  const { t, img, bg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      {/* s3 */}
      <div id="overview" className="bg-white">
        {/* sec1 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[10.8rem]"
          style={bg(
            "/guanwang_second/front/images/products/s3/sec1-fdd8292d2c.webp",
          )}
        />
        {/* sec2 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[10.8rem]"
          style={bg(
            "/guanwang_second/front/images/products/s3/sec2-b6ebff3bfc.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1.17rem] text-[0.6rem] font-extrabold leading-[0.72rem] text-center text-white">
              {t("sec2.title")}
            </div>
            <div className="pt-[0.55rem] text-center text-[0.25rem] font-medium text-white leading-[0.36rem] max-w-[12.3rem] mx-auto">
              {t("sec2.text")}
            </div>
          </ProductReveal>
        </div>
        {/* sec3 */}
        <ProductFocusCarousel
          look="light"
          className="z-[1] mx-auto mt-[1.2rem] pb-[0.93rem]"
          slides={SCENES.map((scene) => ({
            key: scene.key,
            image: img(scene.image),
            title: t(`sec3.${scene.key}.title`),
            desc: t(`sec3.${scene.key}.desc`),
          }))}
        />
        {/* sec4 */}
        <div>
          <ProductReveal className="pt-[1.17rem] text-center">
            <div className="text-[0.6rem] font-extrabold leading-[0.72rem] text-center text-black">
              {t("sec4.title")}
            </div>
            <div className="mt-[0.55rem] text-[0.25rem] font-medium text-black leading-[0.36rem]">
              {t("sec4.text")}
            </div>
          </ProductReveal>
          <div className="mt-[0.73rem] flex w-full items-start justify-center">
            <ProductReveal className="mr-[0.24rem] w-[4.67rem]">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/s3/pic1-1664c1029a.webp",
                )}
                alt=""
                width={467}
                height={516}
                unoptimized
                className="align-middle w-full h-[5.16rem]"
              />
              <p className="mt-[0.34rem] text-[0.25rem] font-semibold text-black leading-[0.36rem] text-center">
                {t("sec4.item")}
              </p>
            </ProductReveal>
            <ProductReveal className="mr-[0.24rem] w-[4.67rem]">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/s3/pic2-aa596b8fb0.webp",
                )}
                alt=""
                width={467}
                height={516}
                unoptimized
                className="align-middle w-full h-[5.16rem]"
              />
              <p className="mt-[0.34rem] text-[0.25rem] font-semibold text-black leading-[0.36rem] text-center">
                {t("sec4.item2")}
              </p>
            </ProductReveal>
            <ProductReveal className="w-[4.67rem]">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/s3/pic3-d065691e62.webp",
                )}
                alt=""
                width={467}
                height={516}
                unoptimized
                className="align-middle w-full h-[5.16rem]"
              />
              <p className="mt-[0.34rem] text-[0.25rem] font-semibold text-black leading-[0.36rem] text-center">
                {t("sec4.item3")}
              </p>
            </ProductReveal>
          </div>
          <div className="mt-[0.69rem] pb-[0.84rem] text-center text-[0.25rem] font-normal text-black leading-[0.36rem]">
            {t("sec4.text2")}
          </div>
        </div>
        {/* sec5 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[21.54rem] relative"
          style={bg(
            "/guanwang_second/front/images/products/s3/sec6-884b39c36d.webp",
          )}
        >
          <ProductReveal className="top-[0.85rem] text-center absolute w-full">
            <div className="text-[0.6rem] font-extrabold leading-[0.72rem] text-center text-white">
              {t("sec5.title")}
            </div>
          </ProductReveal>
          <ProductReveal className="absolute left-[3.93rem] top-[4.26rem] max-w-[3.9rem]">
            <div className="mb-[0.98rem]">
              <h4 className="mb-[0.29rem] text-[0.36rem] font-medium text-white leading-[0.36rem]">
                {t("sec5.item")}
              </h4>
              <p className="text-[0.26rem] text-white leading-[0.36rem]">
                {t("sec5.item2")}
              </p>
            </div>
            <div className="mb-[0.98rem]">
              <h4 className="mb-[0.29rem] text-[0.36rem] font-medium text-white leading-[0.36rem]">
                {t("sec5.item3")}
              </h4>
              <p className="text-[0.26rem] text-white leading-[0.36rem]">
                {t("sec5.item4")}
              </p>
            </div>
            <div className="mb-[0.98rem]">
              <h4 className="mb-[0.29rem] text-[0.36rem] font-medium text-white leading-[0.36rem]">
                {t("sec5.item5")}
              </h4>
              <p className="text-[0.26rem] text-white leading-[0.36rem]">
                {t("sec5.item6")}
              </p>
            </div>
          </ProductReveal>
          <ProductReveal className="pt-[13.35rem] flex justify-center">
            <ProductReveal className="mr-[0.29rem] w-[2.79rem]">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/s3/pic4-89f18ec43e.webp",
                )}
                alt=""
                width={279}
                height={496}
                unoptimized
                className="align-middle w-full h-[4.96rem]"
              />
              <p className="mt-[0.4rem] text-center text-[0.22rem] font-normal text-white leading-[0.3rem] max-w-[2.6rem] mx-auto">
                {t("sec5.item7")}
              </p>
            </ProductReveal>
            <ProductReveal className="mr-[0.29rem] w-[2.79rem]">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/s3/pic5-2bd7402a2f.webp",
                )}
                alt=""
                width={279}
                height={495}
                unoptimized
                className="align-middle w-full h-[4.96rem]"
              />
              <p className="mt-[0.4rem] text-center text-[0.22rem] font-normal text-white leading-[0.3rem] max-w-[2.6rem] mx-auto">
                {t("sec5.item8")}
              </p>
            </ProductReveal>
            <ProductReveal className="w-[2.79rem]">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/s3/pic6-75140c741c.webp",
                )}
                alt=""
                width={286}
                height={496}
                unoptimized
                className="align-middle w-full h-[4.96rem]"
              />
              <p className="mt-[0.4rem] text-center text-[0.22rem] font-normal text-white leading-[0.3rem] max-w-[2.4rem] mx-auto">
                {t("sec5.item9")}
              </p>
            </ProductReveal>
          </ProductReveal>
        </div>
        {/* sec6 */}
        <div>
          <ProductReveal className="pt-[1.16rem] text-center">
            <div className="text-[0.6rem] font-extrabold leading-[0.72rem] text-center text-black">
              {t("sec6.title")}
            </div>
          </ProductReveal>
          <div className="mt-[0.69rem] pb-[1.25rem] flex w-full items-start justify-center">
            <ProductReveal className="mr-[0.33rem] w-[3.37rem] text-center">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/s3/pic7-4a1af97621.webp",
                )}
                alt=""
                width={337}
                height={533}
                unoptimized
                className="align-middle w-full h-[5.33rem]"
              />
              <p className="mt-[0.46rem] mb-[0.18rem] text-[0.28rem] font-medium text-black leading-[0.3rem] text-center">
                {t("sec6.item")}
              </p>
              <span className="text-[0.2rem] font-medium text-black leading-[0.3rem]">
                {t("sec6.item2")}
              </span>
            </ProductReveal>
            <ProductReveal className="mr-[0.33rem] w-[3.37rem] text-center">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/s3/pic8-5343004e8c.webp",
                )}
                alt=""
                width={337}
                height={533}
                unoptimized
                className="align-middle w-full h-[5.33rem]"
              />
              <p className="mt-[0.46rem] mb-[0.18rem] text-[0.28rem] font-medium text-black leading-[0.3rem] text-center">
                {t("sec6.item3")}
              </p>
              <span className="text-[0.2rem] font-medium text-black leading-[0.3rem]">
                {t("sec6.item4")}
              </span>
            </ProductReveal>
            <ProductReveal className="mr-[0.33rem] w-[3.37rem] text-center">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/s3/pic9-ca6c562bb6.webp",
                )}
                alt=""
                width={337}
                height={532}
                unoptimized
                className="align-middle w-full h-[5.33rem]"
              />
              <p className="mt-[0.46rem] mb-[0.18rem] text-[0.28rem] font-medium text-black leading-[0.3rem] text-center">
                {"Ra≥90*"}
              </p>
              <span className="text-[0.2rem] font-medium text-black leading-[0.3rem]">
                {t("sec6.item5")}
              </span>
            </ProductReveal>
            <ProductReveal className="w-[3.37rem] text-center">
              <Image
                src={img(
                  "/guanwang_second/front/images/products/s3/pic10-4e1fcb4d5e.webp",
                )}
                alt=""
                width={338}
                height={532}
                unoptimized
                className="align-middle w-full h-[5.33rem]"
              />
              <p className="mt-[0.46rem] mb-[0.18rem] text-[0.28rem] font-medium text-black leading-[0.3rem] text-center">
                {t("sec6.item6")}
              </p>
              <span className="text-[0.2rem] font-medium text-black leading-[0.3rem]">
                {t("sec6.item7")}
              </span>
            </ProductReveal>
          </div>
        </div>
        {/* sec7 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover h-[10.8rem]"
          style={bg(
            "/guanwang_second/front/images/products/s3/sec7-77df32acc6.webp",
          )}
        >
          <ProductReveal className="">
            <div className="pt-[1.18rem] text-[0.6rem] font-extrabold leading-[0.72rem] text-center text-white">
              {t("sec7.title")}
            </div>
          </ProductReveal>
        </div>
        {/* sec8: orvibo.com shows these notes as an image */}
        <div className="bg-[#fffbf4] pt-[0.49rem] pb-[0.93rem]">
          <div className="mx-auto w-[14.48rem] text-[0.18rem] leading-[0.36rem] text-[#585654]">
            <p>{t("sec8.title")}</p>
            <p>{t("sec8.text")}</p>
          </div>
        </div>
      </div>
      {/* product_detail_tips */}
      <div className="p-[60px] bg-[#202020]">
        <p className="mx-auto max-w-[1200px] text-[14px] font-medium text-white/80 leading-[24px]">
          {lines(common.productDisclaimer)}
        </p>
      </div>
    </div>
  );
}
