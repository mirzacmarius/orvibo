import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "./dictionaries";
import { OrviboVideoCenter } from "@/components/orvibo/OrviboVideoCenter";
import { SiteShell } from "@/components/orvibo/layout";
import { ActionCardsSection } from "@/components/orvibo/sections/ActionCardsSection";
import { FeatureImageSection } from "@/components/orvibo/sections/FeatureImageSection";
import { FeatureSwiperSection } from "@/components/orvibo/sections/FeatureSwiperSection";
import { HeroVideoBanner } from "@/components/orvibo/sections/HeroVideoBanner";
import { ProductGridSection } from "@/components/orvibo/sections/ProductGridSection";
import { StoreVideoSection } from "@/components/orvibo/sections/StoreVideoSection";
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

  return (
    <div className="orvibo-home min-h-screen min-w-0 bg-[#f0f2f5] text-[#111]">
      <SiteShell base={base} dict={dict}>
        <div className="w-full">
          <HeroVideoBanner
            learnMoreHref={routes.product("mixstation")}
            learnMoreLabel={dict.common.learnMore}
            learnMoreTopMargin={0.45}
            logo={{
              alt: "MixStation",
              height: 2.23,
              src: "/guanwang_second/front/images/new/products/mixstation/logo_home-1a3457a96c.png",
              width: 5.95,
            }}
            maskTopPadding={3.67}
            videoSrc="/orvibo/videos/mixstation_1.mp4"
            watchLabel={dict.common.watchVideo}
            watchVideoSrc="/orvibo/videos/mixStation.mp4"
          />

          <HeroVideoBanner
            description={dict.hero.headline}
            learnMoreHref={base}
            learnMoreLabel={dict.common.learnMore}
            marginTop={0.2}
            poster="/orvibo/posters/orvibo_quanzhai_bg.jpg"
            title={dict.hero.subheadline}
            videoSrc="/orvibo/videos/orvibo_quanzhai_bg.mp4"
          />

          <HeroVideoBanner
            learnMoreHref={base}
            learnMoreLabel={dict.common.learnMore}
            logo={{
              alt: "HomeAI",
              height: 0.67,
              marginTop: 0.3,
              src: "/guanwang_second/front/images/homeai4/icon_home_logo-7a0f0510b9.svg",
              width: 4.69,
            }}
            marginTop={0.2}
            title={dict.hero.tagline}
            titleTopMargin={0}
            videoSrc="/orvibo/videos/orvibo_homeai4_all_banner2.mp4"
            watchLabel={dict.common.watchVideo}
            watchVideoSrc="/orvibo/videos/orvibo_homeai4_all.mp4"
          />

          <FeatureImageSection
            ctaHref={routes.product("gaosi")}
            ctaLabel={dict.common.learnMore}
            imageSrc="/guanwang_second/front/images/products/gaosi/1600--808-dd596dd4a5.jpg"
            subtitle={dict.highlights.switchTagline}
            title={dict.highlights.switch}
          />

          <FeatureSwiperSection
            ctaHref={routes.product("mixpad_7_ultra")}
            ctaLabel={dict.common.learnMore}
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
            subtitle={dict.highlights.mixPadTagline}
            title={dict.highlights.mixPad}
          />

          <FeatureImageSection
            ctaHref={routes.product("cangqiong")}
            ctaLabel={dict.common.learnMore}
            imageSrc="/guanwang_second/front/images/2020/index/sec3-e67092a725.png"
            subtitle={dict.highlights.lightingTagline}
            title={dict.highlights.lighting}
          />

          <ProductGridSection
            items={[
              {
                href: routes.product("curtain_3d"),
                imageSrc:
                  "/guanwang_second/front/images/2020/index/pic-8c18754e44.png",
                title: dict.productGrid.curtain3d,
                wrapperHeight: 5.26,
                wrapperWidth: 10.55,
              },
              {
                backgroundSize: "contain",
                href: routes.product("s5"),
                imageSrc:
                  "/guanwang_second/front/images/products/s5/pro-7d582e11c3.png",
                title: dict.productGrid.spotlightS5,
                wrapperHeight: 5.26,
                wrapperWidth: 5.07,
              },
              {
                href: routes.product("daofeng"),
                imageSrc:
                  "/guanwang_second/front/images/2020/index/daofeng-2ef460b3b8.png",
                title: dict.productGrid.daofeng,
              },
              {
                backgroundSize: "contain",
                href: routes.product("v5"),
                imageSrc:
                  "/guanwang_second/front/images/2020/nav/product_2_4-0080946f53.png",
                title: dict.productGrid.lockV5,
              },
              {
                backgroundSize: "contain",
                href: routes.product("light"),
                imageSrc:
                  "/guanwang_second/front/mobile/images/new/product/light/product-f57bbf70ce.png",
                title: dict.productGrid.bauhausLight,
              },
            ]}
            title={dict.productGrid.title}
            titleHref={routes.productList}
          />

          <StoreVideoSection
            body={dict.store.body}
            playLabel={dict.common.playVideo}
            storeHref={base}
            storeLabel={dict.common.visitStore}
            title={dict.store.title}
            videoSrc="/orvibo/videos/orvibo_store_pc.mp4"
            watchVideoSrc="/orvibo/videos/orvibo_store_all.mp4"
          />

          <ActionCardsSection
            items={[
              {
                body: dict.cards.partnership.desc,
                href: base,
                imageSrc:
                  "/guanwang_second/front/images/2020/index/sec6_1-89269b671e.jpg",
                label: dict.common.learnMore,
                title: dict.cards.partnership.title,
              },
              {
                body: dict.cards.custom.desc,
                href: base,
                imageSrc:
                  "/guanwang_second/front/images/2020/index/sec6_2-574c2a4402.jpg",
                label: dict.common.learnMore,
                title: dict.cards.custom.title,
              },
              {
                body: dict.cards.cases.desc,
                href: base,
                imageSrc:
                  "/guanwang_second/front/images/2020/index/sec6_3-f265c5b27d.jpg",
                label: dict.common.learnMore,
                title: dict.cards.cases.title,
              },
            ]}
          />

          <OrviboVideoCenter
            heading={dict.videos.sectionTitle}
            headingHref={base}
            items={[
              {
                id: "video05",
                layout: "wide",
                thumbSrc:
                  "/guanwang_second/front/images/2020/index/video_mixstation-507ffdc772.png",
                title: dict.videos.items.mixstation,
                mp4Src: "/orvibo/videos/mixStation.mp4",
              },
              {
                id: "video04",
                layout: "standard",
                thumbSrc:
                  "/guanwang_second/front/images/2020/index/video_product-4de220e270.png",
                title: dict.videos.items.tvc,
                mp4Src: "/orvibo/videos/orvibo_tvc_matter.mp4",
              },
              {
                id: "video02",
                layout: "standard",
                thumbSrc:
                  "/guanwang_second/front/mobile/images/home/sopro-b8d4b6986b.png",
                title: dict.videos.items.sopro,
                mp4Src:
                  "/8f4239b1vodgzp1251222210/3a80b318387702293679134921/0lwcQ5V5mQEA.mp4",
              },
              {
                id: "video01",
                layout: "standard",
                thumbSrc:
                  "/guanwang_second/front/images/2020/index/video_s5-9f7375ca96.png",
                title: dict.videos.items.s5,
                mp4Src:
                  "/8f4239b1vodgzp1251222210/e0a1ec6a5285890810435126378/jSP056nNeWMA.mp4",
              },
              {
                id: "video03",
                layout: "standard",
                thumbSrc:
                  "/guanwang_second/front/images/2020/index/video_quanwu-eafb6b7634.png",
                title: dict.videos.items.wholeHome,
                mp4Src: "/orvibo/videos/orvibo_2022_quanwu.mp4",
              },
            ]}
          />
        </div>
      </SiteShell>
    </div>
  );
}
