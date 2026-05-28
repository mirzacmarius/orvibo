import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "./dictionaries";
import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboVerticalSwiper } from "@/components/orvibo/OrviboVerticalSwiper";
import { OrviboVideoCenter } from "@/components/orvibo/OrviboVideoCenter";
import { OrviboHeader } from "@/components/orvibo/OrviboHeader";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { OrviboFooter } from "@/components/orvibo/OrviboFooter";
import { OrviboScrollTop } from "@/components/orvibo/OrviboScrollTop";
import { OrviboCaretRight } from "@/components/orvibo/icons";
import { assetUrl } from "@/lib/orvibo/assetUrl";
import { orviboRoutes } from "@/lib/orvibo/routes";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const base = `/${locale}`;
  const routes = orviboRoutes(base);
  const media = (path: string) => assetUrl(path);

  return (
    <div className="orvibo-home min-h-screen min-w-0 bg-[#f0f2f5] text-[#111]">
      <OrviboHeader base={base} nav={dict.nav} products={dict.navProducts} />

      <div className="conference__conent">
        <div className="video__container mixstation">
          <MarketingVideo
            bare
            className="product__video"
            src="/orvibo/videos/mixstation_1.mp4"
            title="MixStation"
          />
          <div className="video__mask">
            <Link href={`${routes.product("mixstation")}`} className="video__more">
              <span className="more__text">{dict.common.learnMore}</span>
            </Link>
            <OrviboWatchTrigger
              videoSrc="/orvibo/videos/mixStation.mp4"
              className="video__watch"
              id="mixstation-video"
              playOnDark
            >
              {dict.common.watchVideo}
            </OrviboWatchTrigger>
          </div>
        </div>

        <div className="video__container" style={{ marginTop: ".2rem" }}>
          <MarketingVideo
            bare
            className="product__video"
            src="/orvibo/videos/orvibo_quanzhai_bg.mp4"
            poster="/orvibo/posters/orvibo_quanzhai_bg.jpg"
            title={dict.hero.headline}
          />
          <div className="video__mask">
            <div className="video__desc">{dict.hero.headline}</div>
            <div className="video__title">{dict.hero.subheadline}</div>
            <Link href={`${base}`} className="video__more">
              <span className="more__text">{dict.common.learnMore}</span>
            </Link>
          </div>
        </div>

        <div className="video__container homeai4" style={{ marginTop: ".2rem" }}>
          <MarketingVideo
            bare
            className="product__video"
            src="/orvibo/videos/orvibo_homeai4_all_banner2.mp4"
            title={dict.hero.tagline}
          />
          <div className="video__mask">
            <div className="video__title">{dict.hero.tagline}</div>
            <div className="homeai__logo" />
            <Link href={`${base}`} className="video__more">
              <span className="more__text">{dict.common.learnMore}</span>
            </Link>
            <OrviboWatchTrigger
              videoSrc="/orvibo/videos/orvibo_homeai4_all.mp4"
              className="video__watch"
              id="homeai-video"
              playOnDark
            >
              {dict.common.watchVideo}
            </OrviboWatchTrigger>
          </div>
        </div>

        <section className="sec sec2">
          <div className="title">{dict.highlights.switch}</div>
          <div className="sec2__subtitle">{dict.highlights.switchTagline}</div>
          <Link href={`${routes.product("gaosi")}`} className="new_btn black">
            <span>{dict.common.learnMore}</span>
          </Link>
          <Link href={`${routes.product("gaosi")}`} className="sec2__video">
            <div
              className="bg__video"
              style={{
                height: "8.08rem",
                backgroundImage:
                  `url(${media("/guanwang_second/front/images/products/gaosi/1600--808-dd596dd4a5.jpg)")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Link>
        </section>

        <section className="sec sec02">
          <div className="title">{dict.highlights.mixPad}</div>
          <div className="subtitle">{dict.highlights.mixPadTagline}</div>
          <Link href={`${routes.product("mixpad_7_ultra")}`} className="new_btn black">
            <span>{dict.common.learnMore}</span>
          </Link>
          <OrviboVerticalSwiper
            slides={[
              {
                src: "/guanwang_second/front/images/2020/index/sec02_1-34b9929249.jpg",
                alt: dict.highlights.mixPad,
              },
              {
                src: "/guanwang_second/front/images/2020/index/sec02_2-ca97560daa.jpg",
                alt: dict.highlights.mixPad,
              },
            ]}
          />
        </section>

        <section className="sec sec2">
          <div className="title">{dict.highlights.lighting}</div>
          <div className="sec2__subtitle">{dict.highlights.lightingTagline}</div>
          <Link href={`${routes.product("cangqiong")}`} className="new_btn black">
            <span>{dict.common.learnMore}</span>
          </Link>
          <Link href={`${routes.product("cangqiong")}`} className="sec2__video">
            <div
              className="bg__video"
              style={{
                height: "8.08rem",
                backgroundImage:
                  `url(${media("/guanwang_second/front/images/2020/index/sec3-e67092a725.png)")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Link>
        </section>

        <div className="sec4">
          <Link href={`${routes.productList}`} className="link__title">
            {dict.productGrid.title}
          </Link>
          <div className="sec4__list">
            <Link href={`${routes.product("curtain_3d")}`} className="sec4__item mr38">
              <div className="img__wrap" style={{ width: "10.55rem", height: "5.26rem" }}>
                <div
                  className="item__img"
                  style={{
                    backgroundImage:
                      `url(${media("/guanwang_second/front/images/2020/index/pic-8c18754e44.png)")})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className="item__title">{dict.productGrid.curtain3d}</div>
            </Link>
            <Link href={`${routes.product("s5")}`} className="sec4__item">
              <div className="img__wrap" style={{ width: "5.07rem", height: "5.26rem" }}>
                <div
                  className="item__img"
                  style={{
                    backgroundImage:
                      `url(${media("/guanwang_second/front/images/products/s5/pro-7d582e11c3.png)")})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className="item__title">{dict.productGrid.spotlightS5}</div>
            </Link>
            <Link href={`${routes.product("daofeng")}`} className="sec4__item mr38 mt90">
              <div className="img__wrap" style={{ width: "5.07rem", height: "3.78rem" }}>
                <div
                  className="item__img"
                  style={{
                    backgroundImage:
                      `url(${media("/guanwang_second/front/images/2020/index/daofeng-2ef460b3b8.png)")})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className="item__title">{dict.productGrid.daofeng}</div>
            </Link>
            <Link href={`${routes.product("v5")}`} className="sec4__item mr38 mt90">
              <div className="img__wrap" style={{ width: "5.07rem", height: "3.78rem" }}>
                <div
                  className="item__img"
                  style={{
                    backgroundImage:
                      `url(${media("/guanwang_second/front/images/2020/nav/product_2_4-0080946f53.png)")})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className="item__title">{dict.productGrid.lockV5}</div>
            </Link>
            <Link href={`${routes.product("light")}`} className="sec4__item mt90">
              <div className="img__wrap">
                <div
                  className="item__img"
                  style={{
                    backgroundImage:
                      `url(${media("/guanwang_second/front/mobile/images/new/product/light/product-f57bbf70ce.png)")})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                    minHeight: "3.78rem",
                  }}
                />
              </div>
              <div className="item__title">{dict.productGrid.bauhausLight}</div>
            </Link>
          </div>
        </div>

        <section className="sec sec5">
          <MarketingVideo
            bare
            className="sec__video"
            src="/orvibo/videos/orvibo_store_pc.mp4"
            title={dict.store.title}
          />
          <div className="sec5__content">
            <div className="title">{dict.store.title}</div>
            <div className="desc">{dict.store.body}</div>
            <Link href={`${base}`} className="new_btn white resizable wide">
              <span>{dict.common.visitStore}</span>
            </Link>
            <OrviboWatchTrigger
              videoSrc="/orvibo/videos/orvibo_store_all.mp4"
              className="new_btn white resizable wide"
              id="sec5-video"
              showPlayIcon={false}
            >
              <span>{dict.common.playVideo}</span>
            </OrviboWatchTrigger>
          </div>
        </section>

        <section className="sec w sec6">
          <Link
            href={`${base}`}
            className="card bg"
            style={{
              backgroundImage:
                `url(${media("/guanwang_second/front/images/2020/index/sec6_1-89269b671e.jpg)")})`,
            }}
          >
            <div className="title">{dict.cards.partnership.title}</div>
            <div className="desc">{dict.cards.partnership.desc}</div>
            <span className="act">
              {dict.common.learnMore}
              <OrviboCaretRight className="sec6-chevron" />
            </span>
          </Link>
          <Link
            href={`${base}`}
            className="card bg"
            style={{
              backgroundImage:
                `url(${media("/guanwang_second/front/images/2020/index/sec6_2-574c2a4402.jpg)")})`,
            }}
          >
            <div className="title">{dict.cards.custom.title}</div>
            <div className="desc">{dict.cards.custom.desc}</div>
            <span className="act">
              {dict.common.learnMore}
              <OrviboCaretRight className="sec6-chevron" />
            </span>
          </Link>
          <Link
            href={`${base}`}
            className="card bg"
            style={{
              backgroundImage:
                `url(${media("/guanwang_second/front/images/2020/index/sec6_3-f265c5b27d.jpg)")})`,
            }}
          >
            <div className="title">{dict.cards.cases.title}</div>
            <div className="desc">{dict.cards.cases.desc}</div>
            <span className="act">
              {dict.common.learnMore}
              <OrviboCaretRight className="sec6-chevron" />
            </span>
          </Link>
        </section>

        <OrviboVideoCenter
          heading={dict.videos.sectionTitle}
          items={[
            {
              id: "video05",
              className: "video1",
              thumbSrc:
                "/guanwang_second/front/images/2020/index/video_mixstation-507ffdc772.png",
              title: dict.videos.items.mixstation,
              mp4Src: "/orvibo/videos/mixStation.mp4",
            },
            {
              id: "video04",
              className: "video2",
              thumbSrc:
                "/guanwang_second/front/images/2020/index/video_product-4de220e270.png",
              title: dict.videos.items.tvc,
              mp4Src: "/orvibo/videos/orvibo_tvc_matter.mp4",
            },
            {
              id: "video02",
              className: "video3",
              thumbSrc:
                "/guanwang_second/front/mobile/images/home/sopro-b8d4b6986b.png",
              title: dict.videos.items.sopro,
              mp4Src:
                "/8f4239b1vodgzp1251222210/3a80b318387702293679134921/0lwcQ5V5mQEA.mp4",
            },
            {
              id: "video01",
              className: "video3",
              thumbSrc:
                "/guanwang_second/front/images/2020/index/video_s5-9f7375ca96.png",
              title: dict.videos.items.s5,
              mp4Src:
                "/8f4239b1vodgzp1251222210/e0a1ec6a5285890810435126378/jSP056nNeWMA.mp4",
            },
            {
              id: "video03",
              className: "video3",
              thumbSrc:
                "/guanwang_second/front/images/2020/index/video_quanwu-eafb6b7634.png",
              title: dict.videos.items.wholeHome,
              mp4Src: "/orvibo/videos/orvibo_2022_quanwu.mp4",
            },
          ]}
        />
      </div>

      <OrviboFooter base={base} dict={dict} />
      <OrviboScrollTop />
    </div>
  );
}
