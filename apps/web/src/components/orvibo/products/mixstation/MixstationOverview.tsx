import { cn } from "@v1/ui/utils";
import type { CSSProperties } from "react";
import { OrviboWatchTrigger } from "@/components/orvibo/OrviboVideoProvider";
import { ProductBackgroundSection } from "@/components/orvibo/product/ProductBackgroundSection";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import {
  buildMixstationSections,
  mixstationHero,
} from "@/lib/orvibo/products/content/mixstation";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { assetUrl } from "@/lib/orvibo/assetUrl";

interface SectionPresentation {
  height: number;
  infoClassName: string;
  titleClassName?: string;
  titleStyle?: CSSProperties;
  descriptionClassName?: string;
}

const centeredInfo = "w-full text-center font-orvibo text-white";

const titleBase =
  "font-orvibo text-[0.56rem] font-extrabold leading-[0.76rem] text-white";

const descriptionBase =
  "mt-[0.15rem] font-orvibo text-[0.26rem] font-normal leading-[0.48rem] text-white";

const presentationById: Record<string, SectionPresentation> = {
  value: {
    height: 10.8,
    infoClassName: cn(centeredInfo, "pt-[1.45rem]"),
  },
  savings: {
    height: 21.61,
    infoClassName: cn(centeredInfo, "pt-[1.22rem]"),
    titleStyle: {
      backgroundImage: "linear-gradient(270deg, #3EF28F 0%, #3EF2E0 100%)",
    },
    descriptionClassName: "text-[#57D19F]",
  },
  comfort: {
    height: 32.4,
    infoClassName: cn(centeredInfo, "pt-[1.5rem]"),
    titleStyle: {
      backgroundImage: "linear-gradient(90deg, #76E4D5 0%, #4CD282 100%)",
    },
    descriptionClassName: "text-[#58BBA3]",
  },
  compact: {
    height: 10.8,
    infoClassName: cn(centeredInfo, "pt-[1.25rem]"),
    descriptionClassName: "mt-[0.34rem]",
  },
  power: {
    height: 10.8,
    infoClassName: cn(centeredInfo, "pt-[0.78rem]"),
    titleStyle: {
      backgroundImage: "linear-gradient(90deg, #FF7934 0%, #58A1FF 100%)",
    },
    descriptionClassName: "text-[#d5d5d5]",
  },
  smart: {
    height: 19.21,
    infoClassName: cn(centeredInfo, "pt-[1.28rem]"),
    descriptionClassName: "text-[0.36rem] font-medium",
  },
  design: {
    height: 11.92,
    infoClassName: cn(centeredInfo, "pt-[1.5rem]"),
    titleStyle: {
      backgroundImage: "linear-gradient(128deg, #FFFFFF 0%, #5D5D5D 100%)",
    },
    descriptionClassName: "text-[0.36rem] font-medium text-[#d5d5d5]",
  },
  airpro: {
    height: 9.7,
    infoClassName:
      "w-full pt-[0.15rem] pl-[3.06rem] text-left font-orvibo text-white",
    titleClassName: "text-[0.48rem] leading-[0.62rem]",
    descriptionClassName: "mt-[0.32rem]",
  },
  sustainability: {
    height: 10.8,
    infoClassName:
      "w-full pt-[1.63rem] pl-[3.06rem] text-left font-orvibo text-white",
    titleClassName: "text-[0.48rem] font-semibold leading-[0.62rem]",
    descriptionClassName: "mt-[0.32rem]",
  },
  warranty: {
    height: 14.29,
    infoClassName:
      "w-full pt-[1.5rem] pr-[3.18rem] text-right font-orvibo text-white",
    titleClassName: "text-[0.48rem] font-semibold leading-[0.62rem]",
    descriptionClassName: "mt-[0.32rem]",
  },
};

const fallbackPresentation = presentationById.value;

function MixstationTextSection({
  id,
  imagePath,
  title,
  description,
}: {
  id: string;
  imagePath: string;
  title?: string;
  description?: string;
}) {
  const presentation = presentationById[id] ?? fallbackPresentation;
  if (!presentation) return null;

  return (
    <ProductBackgroundSection
      assetPath={imagePath}
      id={id}
      className="w-full"
      style={{
        height: `${presentation.height}rem`,
      }}
    >
      {title || description ? (
        <ProductReveal className={presentation.infoClassName}>
          {title ? (
            <div
              className={cn(
                titleBase,
                presentation.titleStyle && "bg-clip-text text-transparent",
                presentation.titleClassName,
              )}
              style={presentation.titleStyle}
            >
              {title}
            </div>
          ) : null}
          {description ? (
            <div
              className={cn(descriptionBase, presentation.descriptionClassName)}
            >
              {description}
            </div>
          ) : null}
        </ProductReveal>
      ) : null}
    </ProductBackgroundSection>
  );
}

export function MixstationOverview({ copy, common }: ProductViewProps) {
  const mixstationSections = buildMixstationSections(copy);

  return (
    <div id="overview" className="w-full bg-black">
      <ProductBackgroundSection
        assetPath={mixstationHero.imagePath}
        className="h-[10.8rem] w-full"
        eager
      >
        <div className="pt-[2.8rem] pl-[3.04rem]">
          <div
            className="h-[4.56rem] w-[6.48rem] bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${assetUrl(mixstationHero.logoPath)})`,
            }}
            role="img"
            aria-label="MixStation"
          />
          <OrviboWatchTrigger
            videoSrc={mixstationHero.videoSrc}
            className="mx-auto mt-[0.7rem] flex w-fit cursor-pointer items-center pl-[2.56rem] font-orvibo text-[0.24rem] leading-[0.24rem] text-white"
            id="mixstation-product-video"
            playOnDark
          >
            {common.watchVideo}
          </OrviboWatchTrigger>
        </div>
      </ProductBackgroundSection>

      {mixstationSections.map((section) => (
        <MixstationTextSection
          key={section.id}
          id={section.id}
          imagePath={section.imagePath}
          title={section.title}
          description={section.description}
        />
      ))}
    </div>
  );
}
