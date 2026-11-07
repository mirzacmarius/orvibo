import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { BalancedLines } from "@/components/orvibo/product/BalancedLines";
import { ProductInView } from "@/components/orvibo/product/ProductInView";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { Camera4Film } from "./Camera4Film";
import { Camera4LiveViews } from "./Camera4LiveViews";
import { Camera4Panorama } from "./Camera4Panorama";

/** The banner title's sheen (orvibo.com's gradient text). */
const SHINE =
  "bg-[image:linear-gradient(306deg,rgb(171,213,255)_0px,rgb(221,223,234)_23%,rgb(251,232,240)_38%,rgb(255,253,239)_56%,rgb(251,232,240)_75%,rgb(185,236,255)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]";

/** A section title and its paragraph (orvibo.com's sec__title and sec__desc). */
const TITLE =
  "mx-auto max-w-[17rem] text-balance text-center text-[0.54rem] leading-[0.76rem] font-extrabold text-white";
const DESC =
  "mx-auto mt-[0.3rem] max-w-[10rem] text-balance text-center text-[0.2rem] leading-[0.4rem] font-medium text-white opacity-70";

/** One of the AI card's radar rings (orvibo.com's circleWave, 2 s). */
const WAVE =
  "absolute rounded-full opacity-0 animate-circle-wave motion-reduce:animate-none";

/** One of the rings pulsing around the camera in sec12 (circleWave, 2.1 s linear). */
const RING =
  "absolute rounded-full bg-[image:radial-gradient(rgb(0,0,0)_0px,rgb(16,50,92)_100%)] opacity-0 animate-circle-wave-linear motion-reduce:animate-none";

export function Camera4Overview({ locale, text, common }: ProductViewProps) {
  const { t, ts, img, bg, pseudoBg, lines } = productPageHelpers(locale, text);

  return (
    <div className="font-orvibo text-[16px] leading-[1.6] text-[#666666]">
      <div id="overview" className="bg-black">
        {/* camera__banner */}
        <div
          className="relative h-[8.7rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/camera/banner-7668cfc5ef.webp",
          )}
        >
          <div className="absolute top-[2.02rem] left-[2.7rem]">
            <h1 className="w-fit text-[0.68rem] leading-[0.78rem] font-extrabold">
              <span className={`block ${SHINE}`}>
                {t("camera_banner.text")}
              </span>
              <span className={`block ${SHINE}`}>
                {t("camera_banner.text2")}
              </span>
            </h1>
            <p className="mt-[0.29rem] text-[0.4rem] leading-[0.4rem] tracking-[0.02em] text-white">
              {t("camera_banner.banner_subtitle")}
              <span className="ml-[0.3rem]">{t("camera_banner.last")}</span>
            </p>
            <p className="mt-[0.85rem] text-[0.2rem] leading-[0.28rem] text-white">
              {t("camera_banner.banner_desc")}
            </p>
            <div
              role="img"
              aria-label={ts("alt.awards")}
              className="mt-[1.22rem] h-[0.5rem] w-[3.37rem] bg-cover bg-no-repeat"
              style={bg(
                "/guanwang_second/front/images/products/camera/banner_logo-221925fbc6.webp",
              )}
            />
          </div>
        </div>
        {/* sec1 */}
        <div
          className="relative h-[10.49rem] bg-cover bg-no-repeat"
          style={bg(
            "/guanwang_second/front/images/products/camera/sec1-867150e160.webp",
          )}
        >
          <ProductReveal className="absolute bottom-[1.2rem] left-0 w-full text-center">
            <h2 className="text-[0.68rem] leading-[0.76rem] font-medium tracking-[0.02em] text-white">
              {t("sec1.title")}
            </h2>
            <p className="mx-auto mt-[0.23rem] max-w-[10rem] text-[0.22rem] leading-[0.36rem] font-medium text-white opacity-70">
              {t("sec1.desc")}
            </p>
          </ProductReveal>
        </div>
        {/* sec2 */}
        <div className="flex flex-col items-center pt-[1.2rem] pb-[1.47rem]">
          <ProductReveal className="w-full">
            <h2 className={TITLE}>{t("sec2.title")}</h2>
          </ProductReveal>
          <div
            className="mt-[0.9rem] h-[7.99rem] w-[13.61rem] bg-cover bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/products/camera/sec2-5a30feacb8.webp",
            )}
          />
        </div>
        {/* sec3: the 2K film */}
        <Camera4Film
          src="/8f4239b1vodgzp1251222210/299e8e2f387702292180208168/LALY2910OVsA.mp4"
          words={ts("sec3.mask")}
          title={t("sec3.title")}
          text={<BalancedLines text={ts("sec3.desc")} />}
        />
        {/* sec4: AI person detection, then tracking */}
        <div className="flex flex-col items-center pt-[1.2rem]">
          <ProductReveal className="w-full">
            <h2 className={TITLE}>{t("sec4.title")}</h2>
            <p className={DESC}>
              <BalancedLines text={ts("sec4.desc")} />
            </p>
          </ProductReveal>
          <div className="mt-[0.75rem] flex pb-[1.36rem]">
            <div className="h-[7.67rem] w-[10.81rem] overflow-hidden rounded-[0.2rem]">
              <MarketingVideo
                bare
                src="/8f4239b1vodgzp1251222210/29d2bf09387702292180234712/ZVyJyzmCtFQA.mp4"
                className="aspect-[1080/760] h-full w-full"
              />
            </div>
            <div className="relative ml-[0.4rem] h-[7.67rem] w-[4.95rem] overflow-hidden rounded-[0.2rem] bg-[#121314]">
              <div className="absolute top-[0.64rem] left-0 z-[5] w-full px-[0.2rem] text-center text-white">
                <h3 className="text-[0.36rem] leading-[0.5rem] font-extrabold">
                  {t("sec4.content_title")}
                </h3>
                <p className="mt-[0.15rem] text-[0.2rem] leading-[0.28rem]">
                  {t("sec4.content_desc")}
                </p>
              </div>
              {/* radar: three rings swelling from the camera */}
              <div className="absolute top-[1.47rem] left-[0.99rem] size-[2.66rem]">
                <div className={`${WAVE} inset-0 bg-[#1b4c92]/[0.36]`} />
                <div
                  className={`${WAVE} inset-[0.36rem] bg-[#1b4c92]/[0.54] [animation-delay:500ms]`}
                />
                <div
                  className={`${WAVE} inset-[0.69rem] bg-[#1b4c92]/[0.72] [animation-delay:1000ms]`}
                />
                <div
                  className="absolute top-1/2 left-1/2 z-[5] h-[0.82rem] w-[0.56rem] -translate-x-1/2 -translate-y-1/2 bg-cover bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/products/camera/sec4_4-ab094f1782.webp",
                  )}
                />
              </div>
              <div
                className="absolute bottom-0 left-[0.1rem] h-[3.64rem] w-[4.36rem] bg-cover bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/products/camera/sec4_3-4c4adfc324.webp",
                )}
              />
            </div>
          </div>
          <ProductReveal className="w-full">
            <h3 className={TITLE}>{t("sec4.title2")}</h3>
          </ProductReveal>
          <div className="mt-[1.09rem] flex pb-[1.25rem]">
            <div className="w-[6.3rem]">
              <div
                className="h-[9.3rem] w-full bg-cover bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/products/camera/sec4_1-ea18bf3c4d.webp",
                )}
              />
              <ProductReveal className="mt-[0.37rem] text-[0.2rem] leading-[0.36rem] text-white">
                {t("sec4.item_desc")}
              </ProductReveal>
            </div>
            <div className="ml-[0.57rem] w-[9.14rem] pt-[1.34rem]">
              <div
                className="h-[5.93rem] w-full bg-cover bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/products/camera/sec4_2-4060def21f.webp",
                )}
              />
              <ProductReveal className="mt-[0.58rem] text-[0.2rem] leading-[0.36rem] text-white">
                {t("sec4.item_desc2")}
              </ProductReveal>
            </div>
          </div>
        </div>
        {/* sec5: the view, then the patrol panorama */}
        <div className="flex flex-col items-center bg-[#101010] pt-[1.32rem] pb-[2.02rem]">
          <ProductReveal className="w-full">
            <h2 className={TITLE}>{t("sec5.title")}</h2>
            <p className={DESC}>{t("sec5.desc")}</p>
          </ProductReveal>
          <div
            className="mt-[1.06rem] mb-[1.85rem] h-[7.7rem] w-[16rem] bg-cover bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/products/camera/sec5-5a80d03dde.webp",
            )}
          />
          <ProductReveal className="w-full">
            <h3 className={TITLE}>{t("sec5.title2")}</h3>
          </ProductReveal>
          <Camera4Panorama
            photo={bg(
              "/guanwang_second/front/images/products/camera/sec5_2-d861ebc358.webp",
            )}
            arrow={bg(
              "/guanwang_second/front/images/products/camera/icon_arrow-445ec5fa28.webp",
            )}
            left={t("sec5.arrow_text")}
            right={t("sec5.arrow_text2")}
          />
        </div>
        {/* sec6: night vision */}
        <div
          className="relative flex h-[18rem] flex-col items-center bg-cover bg-no-repeat pt-[1.2rem]"
          style={bg(
            "/guanwang_second/front/images/products/camera/sec6-bd9dbc5f11.webp",
          )}
        >
          <ProductReveal className="flex w-full flex-col items-center">
            <h2 className={TITLE}>{t("sec6.title")}</h2>
            <p className={DESC}>
              <BalancedLines text={ts("sec6.desc")} />
            </p>
            <div className="mt-[0.52rem] flex items-center gap-x-[2rem] text-center">
              <div>
                <p className="text-[0.56rem] leading-[0.78rem] font-extrabold text-[#57d1ff]">
                  {t("sec6.range")}
                </p>
                <p className="mt-[0.19rem] text-[0.24rem] leading-[0.32rem] font-extrabold text-white">
                  {t("sec6.feature_desc")}
                </p>
              </div>
              <div>
                <p className="text-[0.56rem] leading-[0.78rem] font-extrabold text-[#57d1ff]">
                  {t("sec6.feature_title")}
                </p>
                <p className="mt-[0.19rem] text-[0.24rem] leading-[0.32rem] font-extrabold text-white">
                  {t("sec6.feature_desc2")}
                </p>
              </div>
              <div>
                <p className="text-[0.56rem] leading-[0.78rem] font-extrabold text-[#57d1ff]">
                  {t("sec6.aperture")}
                </p>
                <p className="mt-[0.19rem] text-[0.24rem] leading-[0.32rem] font-extrabold text-white">
                  {t("sec6.feature_desc3")}
                </p>
              </div>
            </div>
          </ProductReveal>
          <div className="absolute bottom-[0.63rem] left-1/2 -translate-x-1/2">
            <div className="flex gap-x-[0.22rem]">
              <div className="relative h-[6.05rem] w-[4.6rem] overflow-hidden rounded-[0.2rem]">
                <MarketingVideo
                  bare
                  src="/8f4239b1vodgzp1251222210/29d2b2ca387702292180234452/aK0xOEl6nlgA.mp4"
                  className="aspect-[460/604] w-full"
                />
                <p className="absolute bottom-[0.7rem] left-0 w-full px-[0.2rem] text-center text-[0.26rem] leading-[0.36rem] font-extrabold text-white">
                  {t("sec6.video_title")}
                </p>
              </div>
              <div className="relative h-[6.05rem] w-[4.6rem] overflow-hidden rounded-[0.2rem]">
                <MarketingVideo
                  bare
                  src="/8f4239b1vodgzp1251222210/2a099092387702292180265609/WIWQ7kijD0sA.mp4"
                  className="aspect-[460/604] w-full"
                />
                <p className="absolute bottom-[0.7rem] left-0 w-full px-[0.2rem] text-center text-[0.26rem] leading-[0.36rem] font-extrabold text-white">
                  {t("sec6.video_title2")}
                </p>
              </div>
              <div className="relative h-[6.05rem] w-[4.6rem] overflow-hidden rounded-[0.2rem]">
                <MarketingVideo
                  bare
                  src="/8f4239b1vodgzp1251222210/299e8944387702292180208013/pbpWSLoEuA4A.mp4"
                  className="aspect-[460/604] w-full"
                />
                <p className="absolute bottom-[0.7rem] left-0 w-full px-[0.2rem] text-center text-[0.26rem] leading-[0.36rem] font-extrabold text-white">
                  {t("sec6.video_title3")}
                </p>
              </div>
            </div>
            <p className="mt-[0.56rem] text-center text-[0.16rem] leading-[0.22rem] font-bold text-white">
              {t("sec6.video_desc")}
            </p>
          </div>
        </div>
        {/* sec7 */}
        <div className="flex flex-col items-center pt-[1.2rem] pb-[1rem]">
          <ProductReveal className="w-full">
            <h2 className={TITLE}>{t("sec7.title")}</h2>
            <p className={DESC}>
              <BalancedLines text={ts("sec7.desc")} />
            </p>
          </ProductReveal>
          <div
            className="mt-[0.9rem] h-[8rem] w-[15.6rem] bg-cover bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/products/camera/sec7-d8c2430460.webp",
            )}
          />
        </div>
        {/* sec8: the bubbles' words over pictures that stretch with them */}
        <div className="flex flex-col items-center">
          <ProductReveal className="w-full">
            <h2 className={TITLE}>{t("sec8.title")}</h2>
            <p className={DESC}>{t("sec8.desc")}</p>
          </ProductReveal>
          <div
            className="relative mt-[0.56rem] h-[15.96rem] w-[9.88rem] bg-cover bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/products/camera/sec8-27a568f99b.webp",
            )}
          >
            <p
              className="absolute top-[3.2rem] right-[6.628rem] h-[2.856rem] whitespace-nowrap border-r-[1.536rem] border-l-[2.4rem] pt-[1.102rem] text-[0.324rem] leading-[0.4rem] font-bold text-white [border-image-slice:0_128_0_200_fill]"
              style={{
                borderImageSource: `url(${img("/guanwang_second/front/images/products/camera/sec8_3-ba6b6274e6.webp")})`,
              }}
            >
              {t("sec8.motion")}
            </p>
            <p
              className="absolute top-[4.8rem] left-[5.69rem] h-[2.91rem] whitespace-nowrap border-r-[1.57rem] border-l-[2.19rem] pt-[0.95rem] text-[0.27rem] leading-[0.4rem] font-bold text-white [border-image-slice:0_157_0_219_fill]"
              style={{
                borderImageSource: `url(${img("/guanwang_second/front/images/products/camera/sec8_2-5be2cd0f95.webp")})`,
              }}
            >
              {t("sec8.person")}
            </p>
            <p
              className="absolute top-[7.66rem] left-[6.51rem] h-[2.86rem] whitespace-nowrap border-r-[1.51rem] border-l-[2.02rem] pt-[0.925rem] text-[0.27rem] leading-[0.4rem] font-bold text-white [border-image-slice:0_151_0_202_fill]"
              style={{
                borderImageSource: `url(${img("/guanwang_second/front/images/products/camera/sec8_4-d8f6a0a17b.webp")})`,
              }}
            >
              {t("sec8.crying")}
            </p>
            <p
              className="absolute top-[9.92rem] right-[6.8rem] h-[2.697rem] whitespace-nowrap border-r-[1.433rem] border-l-[1.905rem] pt-[0.861rem] text-[0.255rem] leading-[0.4rem] font-bold text-white [border-image-slice:0_152_0_202_fill]"
              style={{
                borderImageSource: `url(${img("/guanwang_second/front/images/products/camera/sec8_1-5a47d287dc.webp")})`,
              }}
            >
              {t("sec8.sound")}
            </p>
          </div>
        </div>
        {/* sec9 */}
        <div className="flex flex-col items-center">
          <ProductReveal className="w-full">
            <h2 className={TITLE}>{t("sec9.title")}</h2>
            <p className={DESC}>
              <BalancedLines text={ts("sec9.desc")} />
            </p>
          </ProductReveal>
          <div
            className="mt-[0.9rem] h-[6.6rem] w-[16rem] bg-cover bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/products/camera/sec9-7eb0ec3300.webp",
            )}
          />
        </div>
        {/* sec10: live views, two at a time */}
        <div className="mt-[2.25rem] flex w-full flex-col items-center overflow-hidden">
          <div className="w-[16rem]">
            <h2 className="text-[0.54rem] leading-[0.76rem] font-extrabold text-white">
              {t("sec10.title")}
            </h2>
            <Camera4LiveViews
              views={[
                {
                  key: "kids",
                  label: ts("sec10.kids"),
                  photo: bg(
                    "/guanwang_second/front/images/products/camera/sec10_1-b1c6f42532.webp",
                  ),
                },
                {
                  key: "pets",
                  label: ts("sec10.pets"),
                  photo: bg(
                    "/guanwang_second/front/images/products/camera/sec10_2-d788d8a67e.webp",
                  ),
                },
                {
                  key: "grandparents",
                  label: ts("sec10.grandparents"),
                  photo: bg(
                    "/guanwang_second/front/images/products/camera/sec10_3-a1b954239b.webp",
                  ),
                },
                {
                  key: "homework",
                  label: ts("sec10.homework"),
                  photo: bg(
                    "/guanwang_second/front/images/products/camera/sec10_4-8040a389ad.webp",
                  ),
                },
              ]}
            />
          </div>
        </div>
        {/* sec11 */}
        <div className="mt-[2.08rem] flex flex-col items-center pb-[1.91rem]">
          <ProductReveal className="w-full">
            <h2 className={TITLE}>{t("sec11.title")}</h2>
            <p className={DESC}>
              <BalancedLines text={ts("sec11.desc")} />
            </p>
          </ProductReveal>
          <div
            className="mt-[0.93rem] h-[4.62rem] w-[16rem] bg-cover bg-no-repeat"
            style={bg(
              "/guanwang_second/front/images/products/camera/sec11-e6b95d3ff7.webp",
            )}
          />
        </div>
        {/* sec12: the devices around the camera grow in once it is on screen */}
        <div className="flex flex-col items-center bg-[image:linear-gradient(rgb(0,0,0)_0px,rgb(18,19,20)_100%)] pb-[1.79rem]">
          <ProductInView
            threshold={0.2}
            className="relative h-[10rem] w-full overflow-hidden after:absolute after:bottom-[-3rem] after:left-0 after:z-[10] after:h-[5.73rem] after:w-full after:bg-[image:var(--after-bg)] after:bg-cover after:bg-center after:bg-no-repeat after:content-['']"
            style={pseudoBg(
              "after",
              "/guanwang_second/front/images/products/camera/sec12_bg-51eeb37d3c.webp",
            )}
          >
            <h2 className={`relative z-[15] ${TITLE}`}>{t("sec12.title")}</h2>
            <div className="absolute top-[2.26rem] left-1/2 z-[5] size-[5.3rem] -translate-x-1/2">
              <div
                className={`${RING} inset-0 z-[5] [animation-delay:1000ms]`}
              />
              <div
                className={`${RING} top-1/2 left-1/2 mt-[-4.33rem] ml-[-4.33rem] size-[8.66rem]`}
              />
              <div
                className={`${RING} top-1/2 left-1/2 mt-[-3.43rem] ml-[-3.43rem] size-[6.86rem] [animation-delay:500ms]`}
              />
              <div
                className="absolute top-1/2 left-1/2 z-[15] h-[3.44rem] w-[2.32rem] -translate-x-1/2 -translate-y-1/2 bg-cover bg-no-repeat"
                style={bg(
                  "/guanwang_second/front/images/products/camera/sec12_prd-cce18a2311.webp",
                )}
              />
            </div>
            <p className="absolute top-[3.49rem] left-[3rem] z-[5] flex size-[2.38rem] scale-0 items-center justify-center rounded-full bg-[#31445b] text-center text-[0.26rem] leading-[1.25] text-white opacity-0 transition-[transform,opacity] [transition-delay:300ms] [transition-duration:660ms] [transition-timing-function:ease-in-out] group-data-[shown]:scale-100 group-data-[shown]:opacity-100 motion-reduce:transition-none">
              {t("sec12.dialog_item")}
            </p>
            <p className="absolute top-[1.6rem] left-[5.3rem] z-[5] flex size-[1.94rem] scale-0 items-center justify-center rounded-full bg-[#31445b] text-center text-[0.22rem] leading-[1.25] text-white opacity-0 transition-[transform,opacity] [transition-delay:660ms] [transition-duration:660ms] [transition-timing-function:ease-in-out] group-data-[shown]:scale-100 group-data-[shown]:opacity-100 motion-reduce:transition-none">
              {t("sec12.dialog_item2")}
            </p>
            <p className="absolute top-[1.4rem] left-[9.8rem] z-[5] flex size-[1.34rem] scale-0 items-center justify-center rounded-full bg-[#31445b] text-center text-[0.22rem] leading-[1.25] text-white opacity-0 transition-[transform,opacity] [transition-delay:660ms] [transition-duration:660ms] [transition-timing-function:ease-in-out] group-data-[shown]:scale-100 group-data-[shown]:opacity-100 motion-reduce:transition-none">
              {t("sec12.dialog_item3")}
            </p>
            <p className="absolute top-[2.7rem] right-[3.4rem] z-[5] flex size-[2.24rem] scale-0 items-center justify-center rounded-full bg-[#31445b] text-center text-[0.26rem] leading-[1.25] text-white opacity-0 transition-[transform,opacity] [transition-delay:300ms] [transition-duration:660ms] [transition-timing-function:ease-in-out] group-data-[shown]:scale-100 group-data-[shown]:opacity-100 motion-reduce:transition-none">
              {t("sec12.dialog_item4")}
            </p>
            <p className="absolute top-[5.2rem] right-[4.9rem] z-[5] flex size-[2.24rem] scale-0 items-center justify-center rounded-full bg-[#31445b] text-center text-[0.26rem] leading-[1.25] text-white opacity-0 transition-[transform,opacity] [transition-delay:300ms] [transition-duration:660ms] [transition-timing-function:ease-in-out] group-data-[shown]:scale-100 group-data-[shown]:opacity-100 motion-reduce:transition-none">
              {t("sec12.dialog_item5")}
            </p>
            <p className="absolute top-[1.7rem] right-[1.4rem] z-[5] flex size-[1.48rem] scale-0 items-center justify-center rounded-full bg-[#31445b] text-center text-[0.16rem] leading-[1.25] text-white opacity-0 transition-[transform,opacity] [transition-delay:1960ms] [transition-duration:660ms] [transition-timing-function:ease-in-out] group-data-[shown]:scale-100 group-data-[shown]:opacity-[0.22] motion-reduce:transition-none">
              {t("sec12.dialog_item6")}
            </p>
            <p className="absolute top-[5rem] right-[2.4rem] z-[5] flex size-[1.52rem] scale-0 items-center justify-center rounded-full bg-[#31445b] text-center text-[0.26rem] leading-[1.25] text-white opacity-0 transition-[transform,opacity] [transition-delay:1320ms] [transition-duration:660ms] [transition-timing-function:ease-in-out] group-data-[shown]:scale-100 group-data-[shown]:opacity-[0.54] motion-reduce:transition-none">
              {t("sec12.dialog_item7")}
            </p>
            <p className="absolute top-[7.3rem] right-[2rem] z-[5] flex size-[1.52rem] scale-0 items-center justify-center rounded-full bg-[#31445b] text-center text-[0.2rem] leading-[1.25] text-white opacity-0 transition-[transform,opacity] [transition-delay:1960ms] [transition-duration:660ms] [transition-timing-function:ease-in-out] group-data-[shown]:scale-100 group-data-[shown]:opacity-[0.22] motion-reduce:transition-none">
              {t("sec12.dialog_item8")}
            </p>
            <p className="absolute top-[5.9rem] left-[1.6rem] z-[5] flex size-[1.52rem] scale-0 items-center justify-center rounded-full bg-[#31445b] text-center text-[0.16rem] leading-[1.25] text-white opacity-0 transition-[transform,opacity] [transition-delay:1960ms] [transition-duration:660ms] [transition-timing-function:ease-in-out] group-data-[shown]:scale-100 group-data-[shown]:opacity-[0.22] motion-reduce:transition-none">
              {t("sec12.dialog_item9")}
            </p>
            <p className="absolute top-[5.8rem] left-[5rem] z-[5] flex size-[1.92rem] scale-0 items-center justify-center rounded-full bg-[#31445b] text-center text-[0.26rem] leading-[1.25] text-white opacity-0 transition-[transform,opacity] [transition-delay:1320ms] [transition-duration:660ms] [transition-timing-function:ease-in-out] group-data-[shown]:scale-100 group-data-[shown]:opacity-[0.54] motion-reduce:transition-none">
              {t("sec12.dialog_item10")}
            </p>
            <p className="absolute top-[2.1rem] left-[1.6rem] z-[5] flex size-[1.52rem] scale-0 items-center justify-center rounded-full bg-[#31445b] text-center text-[0.22rem] leading-[1.25] text-white opacity-0 transition-[transform,opacity] [transition-delay:660ms] [transition-duration:660ms] [transition-timing-function:ease-in-out] group-data-[shown]:scale-100 group-data-[shown]:opacity-100 motion-reduce:transition-none">
              {t("sec12.dialog_item11")}
            </p>
          </ProductInView>
          <div className="flex flex-col items-center">
            <div className="flex">
              <ProductReveal className="mr-[0.7rem] w-[10.4rem]">
                <div
                  className="relative h-[6.6rem] w-full overflow-hidden rounded-[0.2rem] bg-cover bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/products/camera/sec11_1-95f7727628.webp",
                  )}
                />
                <p className="mt-[0.4rem] text-[0.24rem] leading-[0.43rem] text-white">
                  {t("sec12.item_desc")}
                </p>
              </ProductReveal>
              <ProductReveal className="w-[4.9rem]">
                <div
                  className="relative h-[6.6rem] w-full overflow-hidden rounded-[0.2rem] bg-cover bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/products/camera/sec11_2-534e75f6b5.webp",
                  )}
                />
                <p className="mt-[0.4rem] text-[0.24rem] leading-[0.43rem] text-white">
                  {t("sec12.item_desc2")}
                </p>
              </ProductReveal>
            </div>
            <div className="mt-[1.08rem] flex">
              <ProductReveal className="mr-[0.7rem] w-[4.9rem]">
                <div
                  className="relative h-[6.6rem] w-full overflow-hidden rounded-[0.2rem] bg-cover bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/products/camera/sec11_3-5ea14ee062.webp",
                  )}
                >
                  <p className="absolute bottom-[0.43rem] left-[0.41rem] text-[0.24rem] leading-[0.33rem] text-white opacity-50">
                    {t("sec12.bg_desc")}
                  </p>
                </div>
                <p className="mt-[0.4rem] text-[0.24rem] leading-[0.43rem] text-white">
                  {t("sec12.item_desc3")}
                </p>
              </ProductReveal>
              <ProductReveal className="w-[10.4rem]">
                <div
                  className="relative h-[6.6rem] w-full overflow-hidden rounded-[0.2rem] bg-cover bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/products/camera/sec11_4-4aa01b5d70.webp",
                  )}
                />
                <p className="mt-[0.4rem] text-[0.24rem] leading-[0.43rem] text-white">
                  {t("sec12.item_desc4")}
                </p>
              </ProductReveal>
            </div>
          </div>
        </div>
        {/* sec13 */}
        <div className="flex justify-center bg-[#0a0a0a] pt-[1.48rem] pb-[2rem]">
          <ul className="flex w-[14.2rem] justify-between">
            <li className="w-[4.6rem]">
              <div className="mx-auto flex size-[2.22rem] items-center justify-center">
                <div
                  className="h-[2.22rem] w-full bg-cover bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/products/camera/sec12_1-dfc61b95d2.webp",
                  )}
                />
              </div>
              <p className="mt-[0.5rem] text-center text-[0.26rem] leading-[0.48rem] font-extrabold text-white">
                <BalancedLines text={ts("sec13.item_desc")} />
              </p>
            </li>
            <li className="w-[4.6rem]">
              <div className="mx-auto flex size-[2.22rem] items-center justify-center">
                <div
                  className="h-[2.22rem] w-full bg-cover bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/products/camera/sec12_2-9cb125358b.webp",
                  )}
                />
              </div>
              <p className="mt-[0.5rem] text-center text-[0.26rem] leading-[0.48rem] font-extrabold text-white">
                <BalancedLines text={ts("sec13.item_desc2")} />
              </p>
            </li>
            <li className="w-[4.6rem]">
              <div className="mx-auto flex size-[2.22rem] items-center justify-center">
                <div
                  className="h-[1.37rem] w-full bg-cover bg-no-repeat"
                  style={bg(
                    "/guanwang_second/front/images/products/camera/sec12_3-48f88344bd.webp",
                  )}
                />
              </div>
              <p className="mt-[0.5rem] text-center text-[0.26rem] leading-[0.48rem] font-extrabold text-white">
                <BalancedLines text={ts("sec13.item_desc3")} />
              </p>
            </li>
          </ul>
        </div>
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
