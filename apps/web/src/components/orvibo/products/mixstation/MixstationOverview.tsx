import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductBackgroundSection } from "@/components/orvibo/product/ProductBackgroundSection";
import {
  mixstationHero,
  mixstationSections,
} from "@/lib/orvibo/products/content/mixstation";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { assetUrl } from "@/lib/orvibo/assetUrl";
import "@/styles/orvibo/products/animate.css";
import "@/styles/orvibo/products/mixstation.css";

export function MixstationOverview({ locale: _locale }: ProductViewProps) {
  return (
    <div id="overview">
      <section
        className="sec1 s__bg"
        style={{ backgroundImage: `url(${assetUrl(mixstationHero.imagePath)})` }}
      >
        <div className="sec_info">
          <div
            className="logo s__bg"
            style={{ backgroundImage: `url(${assetUrl(mixstationHero.logoPath)})` }}
            role="img"
            aria-label="MixStation"
          />
          <OrviboWatchTrigger
            videoSrc={mixstationHero.videoSrc}
            className="video__btn"
            id="mixstation-product-video"
            playOnDark
          >
            <span className="video__text">Watch video</span>
          </OrviboWatchTrigger>
        </div>
      </section>

      {mixstationSections.map((section) => (
        <ProductBackgroundSection
          key={section.id}
          id={section.id}
          className={section.className}
          imagePath={section.imagePath}
          title={section.title}
          description={section.description}
          reveal={section.reveal}
        />
      ))}
    </div>
  );
}
