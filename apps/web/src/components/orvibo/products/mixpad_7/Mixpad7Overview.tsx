import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductInfoBlock } from "@/components/orvibo/product/ProductInfoBlock";
import { ProductParallaxTitleMask } from "@/components/orvibo/product/ProductParallaxTitleMask";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { ProductSpecificationsSection } from "@/components/orvibo/product/ProductSpecificationsSection";
import { assetUrl } from "@/lib/orvibo/assetUrl";
import {
  mixpad7ImageBase,
  mixpad7Specifications,
  mixpad7Videos,
} from "@/lib/orvibo/products/content/mixpad_7";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import Image from "next/image";
import "@/styles/orvibo/products/animate.css";
import "@/styles/orvibo/products/mixpad_7.css";

function bg(path: string) {
  return { backgroundImage: `url(${assetUrl(`${mixpad7ImageBase}/${path}`)})` };
}

export function Mixpad7Overview({ locale: _locale }: ProductViewProps) {
  return (
    <div id="overview">
      <div className="sec__video_container sec1 s__bg">
        <MarketingVideo
          bare
          className="sec__video"
          src={mixpad7Videos.hero}
          title="MixPad 7"
        />
        <div className="sec1__content">
          <div className="sec1__logo">
            <div className="sec1__word s__bg" />
            <div className="light__box row">
              <Image
                src={assetUrl(
                  `${mixpad7ImageBase}/sec1_light_1-759960fbf0.png`,
                )}
                alt=""
                width={400}
                height={200}
                className="light_row"
                unoptimized
              />
            </div>
            <div className="light__box col">
              <Image
                src={assetUrl(
                  `${mixpad7ImageBase}/sec1_light_2-43fd6988bb.png`,
                )}
                alt=""
                width={200}
                height={400}
                className="light_col"
                unoptimized
              />
            </div>
          </div>
          <ProductInfoBlock
            className="sec1__info"
            title="Big & Delicate"
            description="MixPad 7 Smart Panel"
          />
        </div>
      </div>

      <div className="sec__video_container sec2">
        <MarketingVideo
          bare
          className="sec__video"
          src={mixpad7Videos.sec2}
          title="MixPad 7"
        />
        <ProductParallaxTitleMask
          title="Outstanding in every way"
          description="7-Inch Beautiful Picture Screen"
        />
      </div>

      <div className="sec__video_container sec3">
        <MarketingVideo
          bare
          className="sec__video"
          src={mixpad7Videos.sec3}
          title="MixPad 7"
        />
        <ProductInfoBlock title="Special Golden Border" reveal={false} />
      </div>

      <section className="sec4 d__sec s__bg" style={bg("sec4-71abdd5f9b.png")}>
        <ProductInfoBlock
          title="Remote Control"
          description="Support 4-loop light control, built-in infrared remote control, easy to deal with all infrared home appliances control at home."
        />
      </section>

      <section className="sec5 d__sec s__bg" style={bg("sec5-5e2a040615.png")}>
        <ProductInfoBlock
          title="AImighty Gateway"
          description={
            <>
              Support Zigbee, WiFi, Bluetooth, Ethernet
              <br />
              The strongest compatibility in the smart home industry, and will
              soon fully support Matter.
            </>
          }
        />
        <div className="sec5__bg s__bg" style={bg("sec5_bg-210f0e9cc8.png")} />
      </section>

      <section className="sec6 d__sec">
        <ProductInfoBlock title="High-End Video Intercom" />
        <div className="sec6__content">
          <div className="sec6__row">
            <ProductReveal
              className="s__bg"
              style={{
                ...bg("sec6_1-a9e1631215.png"),
                width: "11.29rem",
                height: "5.68rem",
              }}
            />
            <ProductReveal
              className="row__item s__bg delay1"
              style={{
                ...bg("sec6_2-18da614cbb.png"),
                width: "4.44rem",
                height: "5.8rem",
              }}
            />
          </div>
          <div className="sec6__row">
            <ProductReveal
              className="s__bg"
              style={{
                ...bg("sec6_3-f5cea766fb.png"),
                width: "4.44rem",
                height: "5.68rem",
              }}
            />
            <ProductReveal
              className="s__bg delay1"
              style={{
                ...bg("sec6_4-56c12faaab.png"),
                width: "11.28rem",
                height: "5.71rem",
              }}
            />
          </div>
        </div>
      </section>

      <section className="sec7 s__bg" style={bg("sec7-6f6c0ffb5f.png")}>
        <ProductInfoBlock title="Super Smart" description="Photo AIbum" />
        <div className="marquee__container marquee__wrapper_bottom orvibo-product-marquee">
          <div className="marquee__wrapper">
            <div className="marquee__slide">
              <div className="slide__img s__bg" />
            </div>
            <div className="marquee__slide" aria-hidden>
              <div className="slide__img s__bg" />
            </div>
          </div>
        </div>
        <div
          className="video__container s__bg"
          style={bg("sec7_box-46e49a1a11.png")}
        >
          <div className="video__box">
            <MarketingVideo
              bare
              className="sec__video"
              src={mixpad7Videos.sec7}
              title="MixPad 7"
            />
          </div>
        </div>
      </section>

      <section className="sec8">
        <MarketingVideo
          bare
          className="sec__video"
          src={mixpad7Videos.sec8}
          title="MixPad 7 audio"
        />
        <ProductInfoBlock
          title={
            <>
              Hi-Fi Wall Stereo
              <br />
              Super Thin Sound
            </>
          }
          description={
            <>
              Premium acoustics with licensed streaming libraries,
              <br />
              listen without limits.
            </>
          }
        />
        <div
          className="sec8__bg s__bg"
          style={bg("sec8_info-7848168de8.png")}
        />
      </section>

      <section className="sec9 s__bg" style={bg("sec9-ec5f114629.png")}>
        <ProductInfoBlock
          title="One more thing"
          description="A perfect partner"
        />
      </section>

      <ProductSpecificationsSection rows={mixpad7Specifications} />
    </div>
  );
}
