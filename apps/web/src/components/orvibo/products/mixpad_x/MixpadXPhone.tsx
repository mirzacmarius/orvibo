import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { PhoneSwiper } from "@/components/orvibo/product/PhoneSwiper";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import { localizedAssetPath } from "@/lib/orvibo/localizedAsset";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

const FILMS = "/orvibo/products/mixpad_x/phone";
/** Text cards drawn as pictures on orvibo.com, in HTML as on the desktop page. */
const SCREEN_SPECS = [
  "size",
  "resolution",
  "brightness",
  "angle",
  "coating",
  "lifespan",
];
const AUDIO_SPECS = ["dts", "hifi", "tws", "library"];

/** The MixPad 12 page on phones: orvibo.com's phone page (/mobile/cn/product/mixpad_x.html), its words in Romanian
 * and English, its screen pictures' words redrawn, the GIFs with words as films per language and its big GIFs as
 * films. */
export function MixpadXPhone({ locale, text, common }: ProductViewProps) {
  const { t, bg, lines } = productPageHelpers(locale, text);
  /** A film with its words in this page's language, muted and looped while on screen. */
  const film = (name: string) => (
    <MarketingVideo
      bare
      src={`/orvibo/i18n/${locale}${FILMS}/${name}.mp4`}
      poster={`/orvibo/i18n/${locale}${FILMS}/${name}.jpg`}
      className="size-full object-cover"
    />
  );
  /** A film cut from one of orvibo.com's GIFs (its words as there), over its first frame. */
  const gifFilm = (name: string, poster: string) => (
    <MarketingVideo
      bare
      src={`${FILMS}/${name}.mp4`}
      poster={localizedAssetPath(poster, locale)}
      className="absolute inset-0 size-full object-cover"
    />
  );

  return (
    <div className="font-orvibo text-[0.256rem] leading-[1.6] text-[#333333]">
      {/* mixpadx */}
      <div id="overview-phone" className="bg-black">
        {/* x__banner */}
        <div className="relative h-[13.38rem]">
          <div
            className="bg-center bg-no-repeat bg-cover w-full h-full"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_x/banner-d0d80f60dd.webp",
            )}
          />
          <div className="absolute left-0 top-[4.56rem] flex flex-col items-center w-full">
            <div
              className="bg-center bg-no-repeat bg-cover w-[5.07rem] h-[1.45rem]"
              style={bg(
                "/guanwang_second/front/mobile/images/new/product/mixpad_x/icon_banner-6ac494eb3a.webp",
              )}
            />
            <div className="mt-[0.04rem] text-[0.328rem] leading-[0.58rem] font-normal text-white">
              {t("x_banner.banner_desc")}
            </div>
          </div>
          <div className="absolute bottom-[0.63rem] left-1/2 -translate-x-1/2 flex flex-col items-center whitespace-nowrap">
            <div
              className="bg-top bg-no-repeat bg-[length:1.51rem_0.98rem] w-[1.51rem] h-[0.64rem]"
              style={bg(
                "/guanwang_second/front/mobile/images/new/product/mixpad_x/icon_award-99656b7b9f.svg",
              )}
            />
            <div className="mt-[0.06rem] text-[0.17rem] leading-[0.26rem] font-medium text-white/[0.67]">
              {t("x_banner.award")}
            </div>
          </div>
        </div>
        {/* sec1 s__bg lazy */}
        <div
          className="bg-center bg-no-repeat bg-cover relative h-[11rem]"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec1-fa2580e68a.webp",
          )}
        >
          {gifFilm(
            "sec1",
            "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec1-fa2580e68a.webp",
          )}
          <OrviboWatchTrigger
            videoSrc="/8f4239b1vodgzp1251222210/47caebd93701925919897718905/hpJ09X6HrB0A.mp4"
            className="absolute left-1/2 bottom-[0.8rem] -translate-x-1/2 cursor-pointer"
            showPlayIcon={false}
          >
            <span className="text-white flex items-center h-[0.34rem] text-[0.192rem] leading-[0.34rem] font-medium">
              <span>{t("sec1.video_text")}</span>
              <i
                className="bg-center ml-[0.15rem] bg-no-repeat bg-cover block w-[0.26rem] h-[0.26rem]"
                style={bg(
                  "/guanwang_second/front/mobile/images/new/product/mixpad_x/icon_video-7836ef733d.webp",
                )}
              />
            </span>
          </OrviboWatchTrigger>
        </div>
        {/* sec2 */}
        <div className="pt-[1.13rem] h-[15.02rem]">
          <ProductReveal className="pl-[0.51rem]">
            <div className="pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
              {t("sec2.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.272rem] leading-[0.48rem] font-normal text-left text-white/70">
              {t("sec2.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center mx-auto mt-[0.56rem] bg-no-repeat bg-cover w-[6.4rem] h-[9rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec2_1-05e5413fdc.webp",
            )}
          />
        </div>
        {/* sec3 */}
        <div className="pt-[1.13rem] pl-[0.51rem] relative h-[13.3rem]">
          <ProductReveal className="">
            <div className="pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
              {t("sec4.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.272rem] leading-[0.48rem] font-normal text-left text-white/70">
              {t("sec4.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center bg-no-repeat bg-cover absolute left-0 bottom-0 w-full h-[8.04rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec3-77964320b0.webp",
            )}
          >
            {gifFilm(
              "sec3",
              "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec3-77964320b0.webp",
            )}
          </div>
        </div>
        {/* sec4 */}
        <div className="pt-[1.2rem] pl-[0.42rem] h-[14.51rem]">
          <ProductReveal className="pl-[0.1rem]">
            <div className="pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
              {t("sec5.title")}
            </div>
            <div className="mt-[0.3rem] pr-[0.83rem] text-[0.272rem] leading-[0.48rem] font-normal text-white/70 w-full">
              {t("sec5.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center mt-[1.2rem] bg-no-repeat bg-cover w-[6.69rem] h-[5.9rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec4-72d616a8f8.webp",
            )}
          />
        </div>
        {/* sec5 */}
        <div className="pt-[0.93rem] pb-[1.56rem] relative overflow-hidden">
          <ProductReveal className="pl-[0.4rem] w-full">
            <div
              className="bg-center ml-[-0.04rem] bg-no-repeat bg-cover w-[4.2rem] h-[0.48rem]"
              style={bg(
                "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec5_logo-27d96ad35e.webp",
              )}
            />
            <div className="mt-[0.4rem] pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
              {t("sec6.title")}
            </div>
          </ProductReveal>
          <div
            className="bg-center mt-[2rem] bg-no-repeat bg-cover w-full h-[8.31rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec5_bg-e7454a83be.webp",
            )}
          />
          <ul className="mx-auto mt-[0.8rem] grid w-[6.58rem] grid-cols-2 gap-[0.2rem]">
            {SCREEN_SPECS.map((spec) => (
              <li
                key={spec}
                className="flex h-[2.2rem] flex-col items-center justify-center rounded-[0.16rem] bg-[#14151a] px-[0.2rem] text-center text-balance"
              >
                <span className="text-[0.32rem] font-semibold leading-[0.5rem] text-white">
                  {t(`sec6.${spec}.title`)}
                </span>
                <span className="mt-[0.08rem] text-[0.192rem] leading-[0.32rem] text-white/70">
                  {t(`sec6.${spec}.desc`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* sec6 s__bg lazy */}
        <div
          className="bg-center pt-[1.2rem] bg-no-repeat bg-cover relative h-[12.8rem]"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec6_bg-21c1c1740a.webp",
          )}
        >
          <ProductReveal className="pl-[0.51rem]">
            <div className="pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
              {t("sec7.title")}
            </div>
            <div className="mt-[0.3rem] pr-[0.84rem] text-[0.272rem] leading-[0.48rem] font-normal text-white/70">
              {t("sec7.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec7 */}
        <div className="pt-[1.2rem] pb-[0.81rem] relative">
          <ProductReveal className="pl-[0.51rem] relative">
            <div className="pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
              {t("sec8.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.272rem] leading-[0.48rem] font-normal text-left text-white/70">
              {t("sec8.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center mt-[2.38rem] pt-[1.4rem] pl-[2.57rem] bg-no-repeat bg-cover relative w-full h-[6.54rem] overflow-hidden"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec7_box-bc9c757c50.webp",
            )}
          >
            <div className="relative w-full h-[3.49rem] overflow-auto">
              <div
                className="bg-center bg-no-repeat bg-cover w-[11.66rem] h-[3.49rem]"
                style={bg(
                  "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec7_bg-e47c1286dd.webp",
                )}
              />
            </div>
          </div>
          <div className="mt-[0.4rem] pr-[0.5rem] [animation:textMove_1.4s_ease-in-out_0_infinite_alternate_none] text-right text-[0.176rem] leading-[0.3rem] font-normal text-white">
            {t("m.swipe")}
          </div>
        </div>
        {/* sec8 */}
        <div className="relative h-[13.48rem]">
          <ProductReveal className="absolute top-[1.2rem] left-[0.51rem] z-[5]">
            <div className="pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
              {t("sec9.title")}
            </div>
            <div className="mt-[0.3rem] pr-[0.84rem] text-[0.272rem] leading-[0.48rem] font-normal text-white/70">
              {t("sec9.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center bg-no-repeat bg-cover absolute left-0 bottom-0 w-full h-[10.08rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec8-9b1f3c35b0.webp",
            )}
          >
            <div
              className="bg-center bg-no-repeat bg-cover absolute left-0 bottom-0 w-full h-[10.08rem]"
              style={bg(
                "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec8-118dfe2cd8.gif",
              )}
            />
          </div>
        </div>
        {/* sec9 s__bg lazy */}
        <div
          className="bg-center pt-[1.2rem] pl-[0.51rem] bg-no-repeat bg-cover relative h-[14.48rem]"
          style={bg(
            "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec9-f8d60c9cb4.webp",
          )}
        >
          <ProductReveal className="pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
            {t("sec10.title")}
          </ProductReveal>
          <ul className="absolute left-1/2 bottom-[0.79rem] grid w-[6.62rem] -translate-x-1/2 grid-cols-2 gap-[0.24rem]">
            {AUDIO_SPECS.map((spec) => (
              <li
                key={spec}
                className="flex h-[2.19rem] items-center justify-center whitespace-pre-line rounded-[0.16rem] bg-white/[0.12] px-[0.2rem] text-center text-[0.24rem] font-medium leading-[0.42rem] text-white text-balance"
              >
                {t(`sec10.${spec}`)}
              </li>
            ))}
          </ul>
        </div>
        {/* sec10 */}
        <div className="pt-[1.2rem] relative h-[13.4rem]">
          <div
            className="bg-center bg-no-repeat bg-cover absolute left-0 bottom-0 w-full h-[8.61rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec10-6ab066d448.webp",
            )}
          />
          <ProductReveal className="pl-[0.47rem]">
            <div className="pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
              {t("sec11.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.272rem] leading-[0.48rem] font-normal text-left text-white/70">
              {t("sec11.desc")}
            </div>
          </ProductReveal>
        </div>
        {/* sec11 */}
        <div className="pt-[1.2rem] pb-[0.45rem] relative">
          <ProductReveal className="pl-[0.5rem]">
            <div className="pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
              {t("sec12.title")}
            </div>
            <div className="mt-[0.3rem] pr-[0.85rem] text-[0.272rem] leading-[0.48rem] font-normal text-white/70 w-full">
              {t("sec12.desc")}
            </div>
          </ProductReveal>
          <div
            className="bg-center mt-[1.04rem] bg-no-repeat bg-cover w-full h-[10.83rem]"
            style={bg(
              "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec11-163fa8ffbf.webp",
            )}
          />
          <div className="mt-[0.44rem] w-full text-center text-[0.224rem] leading-[0.4rem] text-white/70 text-balance">
            {t("sec12.remind")}
          </div>
        </div>
        {/* sec_x__swiper sec12 */}
        <div className="pt-[1.1rem] pl-[0.42rem] h-[14.6rem]">
          <ProductReveal className="pl-[0.08rem]">
            <div className="mb-[0.17rem] text-[0.288rem] leading-[0.48rem] font-medium text-white">
              {t("m.butler")}
            </div>
            <div className="pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
              {t("m.butler.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.272rem] leading-[0.48rem] font-normal text-left text-white/70">
              {t("sec13.desc")}
            </div>
          </ProductReveal>
          <PhoneSwiper
            className="mt-[0.88rem] h-[8.66rem]"
            slideClassName="!w-[6.35rem] pr-[0.3rem]"
            paginationClassName="bottom-0 left-0"
            slides={[
              {
                key: "lights",
                content: (
                  <div className="relative overflow-hidden rounded-[0.2rem] w-[6.05rem] h-[8rem]">
                    <div
                      className="size-full bg-center bg-no-repeat bg-cover"
                      style={bg(
                        "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec12_1-e944b30b4b.webp",
                      )}
                    >
                      <div
                        className="size-full bg-center bg-no-repeat bg-cover"
                        style={bg(
                          "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec12_1-301a3d37ac.gif",
                        )}
                      />
                    </div>
                    <div className="absolute top-[0.47rem] left-[0.53rem] right-[0.4rem]">
                      <div className="text-[0.288rem] font-extrabold text-white">
                        {t("sec13.video_title2")}
                      </div>
                      <div className="mt-[0.19rem] text-[0.2rem] text-white">
                        {t("sec13.video_subhead2")}
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                key: "voice",
                content: (
                  <div className="relative overflow-hidden rounded-[0.2rem] w-[6.05rem] h-[8rem]">
                    {film("p12_2")}
                    <div className="absolute top-[0.47rem] left-[0.53rem] right-[0.4rem]">
                      <div className="text-[0.288rem] font-extrabold text-white">
                        {t("sec13.video_title")}
                      </div>
                      <div className="mt-[0.19rem] text-[0.2rem] text-white">
                        {t("sec13.video_subhead")}
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                key: "tv",
                content: (
                  <div className="relative overflow-hidden rounded-[0.2rem] w-[6.05rem] h-[8rem]">
                    {film("p12_3")}
                    <div className="absolute top-[0.47rem] left-[0.53rem] right-[0.4rem]">
                      <div className="text-[0.288rem] font-extrabold text-white">
                        {t("sec13.video_title3")}
                      </div>
                      <div className="mt-[0.19rem] text-[0.2rem] text-white">
                        {t("sec13.video_subhead3")}
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
        {/* sec_x__swiper sec13 */}
        <div className="pt-[1.2rem] pl-[0.42rem] h-[14.56rem]">
          <ProductReveal className="pl-[0.08rem]">
            <div className="pr-[0.45rem] text-[0.496rem] leading-[0.8rem] font-extrabold text-left text-white text-balance">
              {t("sec14.title")}
            </div>
            <div className="mt-[0.3rem] text-[0.272rem] leading-[0.48rem] font-normal text-left text-white/70">
              {t("sec14.desc")}
            </div>
          </ProductReveal>
          <PhoneSwiper
            className="mt-[0.88rem] h-[8.66rem]"
            slideClassName="!w-[6.35rem] pr-[0.3rem]"
            paginationClassName="bottom-0 left-0"
            slides={[
              {
                key: "home",
                content: (
                  <div className="relative overflow-hidden rounded-[0.2rem] w-[6.05rem] h-[8rem]">
                    {film("p13_1")}
                    <div className="absolute bottom-[0.47rem] left-[0.53rem] right-[0.4rem]">
                      <div className="text-[0.32rem] font-extrabold text-white">
                        {t("sec14.video_title")}
                      </div>
                      <div className="mt-[0.19rem] text-[0.216rem] text-white">
                        {t("sec14.video_desc")}
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                key: "wake",
                content: (
                  <div className="relative overflow-hidden rounded-[0.2rem] w-[6.05rem] h-[8rem]">
                    <div
                      className="size-full bg-center bg-no-repeat bg-cover"
                      style={bg(
                        "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec13_2-655ad4b90a.webp",
                      )}
                    >
                      {gifFilm(
                        "sec13_2",
                        "/guanwang_second/front/mobile/images/new/product/mixpad_x/sec13_2-655ad4b90a.webp",
                      )}
                    </div>
                    <div className="absolute bottom-[0.47rem] left-[0.53rem] right-[0.4rem]">
                      <div className="text-[0.32rem] font-extrabold text-white">
                        {t("sec14.video_title2")}
                      </div>
                      <div className="mt-[0.19rem] text-[0.216rem] text-white">
                        {t("sec14.video_desc2")}
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                key: "night",
                content: (
                  <div className="relative overflow-hidden rounded-[0.2rem] w-[6.05rem] h-[8rem]">
                    {film("p13_3")}
                    <div className="absolute bottom-[0.47rem] left-[0.53rem] right-[0.4rem]">
                      <div className="text-[0.32rem] font-extrabold text-white">
                        {t("sec14.video_title3")}
                      </div>
                      <div className="mt-[0.19rem] text-[0.216rem] text-white">
                        {t("sec14.video_desc3")}
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
        {/* sec16 */}
        <div className="border-t border-t-white/10 relative flex flex-col justify-center items-center h-[2.34rem] bg-[#0a0a0a] px-[0.9rem] text-center text-[0.192rem] leading-[0.36rem] font-medium text-white/40 text-balance">
          <p>{t("m.labNote.1")}</p>
          <p>{t("m.labNote.2")}</p>
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
