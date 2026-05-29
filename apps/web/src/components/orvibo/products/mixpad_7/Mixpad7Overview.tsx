import { cn } from "@v1/ui/utils";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductParallaxTitleMask } from "@/components/orvibo/product/ProductParallaxTitleMask";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { ProductSpecificationsSection } from "@/components/orvibo/product/ProductSpecificationsSection";
import { assetUrl } from "@/lib/orvibo/assetUrl";
import {
  buildMixpad7Specifications,
  mixpad7ImageBase,
  mixpad7Videos,
} from "@/lib/orvibo/products/content/mixpad_7";
import { getMixpad7Section } from "@/lib/orvibo/products/content/mixpad-sections";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

function multilineText(value: string): ReactNode {
  const lines = value.split("\n");
  if (lines.length === 1) return value;
  return lines.map((line, index) => (
    <span key={line}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

const titleGradient =
  "linear-gradient(142deg, #88a6c5 0%, #dddfea 23%, #fff 38%, #fffdef 56%, #d2d2d2 75%, #d9f5ff 100%)";

function bg(path: string) {
  return { backgroundImage: `url(${assetUrl(`${mixpad7ImageBase}/${path}`)})` };
}

function GradientTitle({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "bg-clip-text text-center font-orvibo text-[0.72rem] font-extrabold leading-[0.94rem] text-transparent",
        className,
      )}
      style={{ backgroundImage: titleGradient, ...style }}
    >
      {children}
    </div>
  );
}

function InfoBlock({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  titleStyle,
  reveal = true,
}: {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  titleStyle?: CSSProperties;
  reveal?: boolean;
}) {
  const content = (
    <>
      <GradientTitle className={titleClassName} style={titleStyle}>
        {title}
      </GradientTitle>
      {description ? (
        <div
          className={cn(
            "mt-[0.46rem] text-center font-orvibo text-[0.3rem] font-normal leading-[0.42rem] tracking-[0.01rem] text-white/80",
            descriptionClassName,
          )}
        >
          {description}
        </div>
      ) : null}
    </>
  );

  if (!reveal) {
    return <div className={className}>{content}</div>;
  }

  return <ProductReveal className={className}>{content}</ProductReveal>;
}

function VideoPlate({
  className,
  videoClassName,
  src,
  title,
}: {
  className: string;
  videoClassName?: string;
  src: string;
  title: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-black", className)}>
      <MarketingVideo
        bare
        className={cn("block h-full w-full object-cover", videoClassName)}
        src={src}
        title={title}
      />
    </section>
  );
}

function RevealImage({
  className,
  path,
}: {
  className: string;
  path: string;
}) {
  return (
    <ProductReveal
      className={cn("bg-cover bg-center bg-no-repeat", className)}
      style={bg(path)}
    />
  );
}

export function Mixpad7Overview({ copy }: ProductViewProps) {
  const productTitle = copy.title;
  const hero = getMixpad7Section(copy, "hero");
  const screen = getMixpad7Section(copy, "screen");
  const border = getMixpad7Section(copy, "border");
  const remote = getMixpad7Section(copy, "remote");
  const gateway = getMixpad7Section(copy, "gateway");
  const intercom = getMixpad7Section(copy, "intercom");
  const album = getMixpad7Section(copy, "album");
  const audio = getMixpad7Section(copy, "audio");
  const partner = getMixpad7Section(copy, "partner");
  const specRows = buildMixpad7Specifications(copy);
  const specTitle = copy.specifications?.title ?? "Specifications";

  return (
    <div id="overview" className="w-full bg-black">
      <VideoPlate
        className="h-[10rem]"
        src={mixpad7Videos.hero}
        title={productTitle}
      />

      <section className="relative mt-[-10rem] h-[10rem] overflow-hidden bg-transparent">
        <div className="absolute top-[2.85rem] left-[2.24rem]">
          <div className="absolute top-[2.96rem] left-[1.02rem] z-[2]">
            <div
              className="relative z-50 h-[0.8rem] w-[3.85rem] bg-contain bg-center bg-no-repeat"
              style={bg("sec1_word-7689e2d07f.svg")}
            />
            <div className="absolute top-[-2.65rem] right-[-2.65rem] h-[2.65rem] w-[5.3rem]">
              <Image
                src={assetUrl(
                  `${mixpad7ImageBase}/sec1_light_1-759960fbf0.png`,
                )}
                alt=""
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="absolute top-0 right-[-2.65rem] h-[2.65rem] w-[5.3rem]">
              <Image
                src={assetUrl(
                  `${mixpad7ImageBase}/sec1_light_2-43fd6988bb.png`,
                )}
                alt=""
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <InfoBlock
            className="relative z-10 overflow-hidden"
            description={hero.description}
            descriptionClassName="mt-[0.66rem] text-[0.46rem] leading-[0.6rem] tracking-[0.06rem]"
            reveal={false}
            title={hero.title}
            titleClassName="text-[1.1rem] leading-[1.12rem] tracking-[0.05rem]"
          />
        </div>
      </section>

      <VideoPlate
        className="min-h-[9rem]"
        src={mixpad7Videos.sec2}
        title={productTitle}
      />
      <section className="relative mt-[-9rem] h-[9rem]">
        <ProductParallaxTitleMask
          title={screen.title}
          description={screen.description ?? ""}
        />
      </section>

      <VideoPlate
        className="min-h-[9rem]"
        src={mixpad7Videos.sec3}
        title={productTitle}
      />
      <section className="relative mt-[-9rem] h-[9rem]">
        <InfoBlock
          className="absolute top-[6.2rem] left-[0.92rem] overflow-hidden"
          reveal={false}
          title={border.title}
          titleClassName="text-left"
        />
      </section>

      <section
        className="relative box-border h-[10rem] w-full bg-cover bg-center bg-no-repeat pt-[1.36rem]"
        style={bg("sec4-71abdd5f9b.png")}
      >
        <InfoBlock
          className="mx-auto w-full overflow-hidden"
          description={remote.description}
          title={remote.title}
        />
      </section>

      <section
        className="relative h-[10.8rem] w-full bg-cover bg-center bg-no-repeat"
        style={bg("sec5-5e2a040615.png")}
      >
        <InfoBlock
          className="absolute top-[2.14rem] left-[1.62rem] overflow-hidden"
          description={multilineText(gateway.description ?? "")}
          descriptionClassName="text-left"
          title={gateway.title}
          titleClassName="text-left"
        />
        <div
          className="absolute bottom-[1.95rem] left-[1.62rem] h-[1.27rem] w-[6.66rem] bg-contain bg-center bg-no-repeat"
          style={bg("sec5_bg-210f0e9cc8.png")}
        />
      </section>

      <section className="relative bg-[#05080b] pb-[1.98rem]">
        <InfoBlock
          className="absolute top-[1.2rem] left-1/2 z-10 -translate-x-1/2 overflow-hidden"
          title={intercom.title}
        />
        <div className="mx-auto flex w-[16.03rem] flex-col gap-[0.3rem] pt-[4.15rem]">
          <div className="flex w-full justify-between">
            <RevealImage
              className="h-[5.68rem] w-[11.29rem]"
              path="sec6_1-a9e1631215.png"
            />
            <RevealImage
              className="h-[5.8rem] w-[4.44rem]"
              path="sec6_2-18da614cbb.png"
            />
          </div>
          <div className="flex w-full justify-between">
            <RevealImage
              className="h-[5.68rem] w-[4.44rem]"
              path="sec6_3-f5cea766fb.png"
            />
            <RevealImage
              className="h-[5.71rem] w-[11.28rem]"
              path="sec6_4-56c12faaab.png"
            />
          </div>
        </div>
      </section>

      <section
        className="relative h-[11rem] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={bg("sec7-6f6c0ffb5f.png")}
      >
        <InfoBlock
          className="absolute top-[1.36rem] left-0 z-50 w-full overflow-hidden"
          description={album.description}
          title={album.title}
          titleStyle={{
            backgroundImage:
              "linear-gradient(150deg, #abd5ff 0%, #dddfea 23%, #fbe8f0 38%, #fffdef 56%, #fbe8f0 75%, #b9ecff 100%)",
          }}
        />
        <div className="absolute top-[4.61rem] left-0 z-[5] overflow-hidden">
          <div className="flex w-max animate-mixpad-marquee">
            <div
              className="h-[6.03rem] w-[21.22rem] bg-cover bg-center bg-no-repeat"
              style={bg("sec7_1-6150d94cdd.png")}
            />
            <div
              aria-hidden
              className="h-[6.03rem] w-[21.22rem] bg-cover bg-center bg-no-repeat"
              style={bg("sec7_1-6150d94cdd.png")}
            />
          </div>
        </div>
        <div
          className="absolute top-[4.78rem] left-[7.02rem] z-20 h-[4.15rem] w-[6.37rem] bg-cover bg-center bg-no-repeat"
          style={bg("sec7_box-46e49a1a11.png")}
        >
          <div className="relative h-[3.23rem] w-[5.09rem] overflow-hidden">
            <MarketingVideo
              bare
              className="mt-[0.12rem] ml-[0.2rem] block w-[90%]"
              src={mixpad7Videos.sec7}
              title={productTitle}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={bg("sec7_mask-b441de4385.png")}
            />
          </div>
        </div>
      </section>

      <VideoPlate
        className="min-h-[9rem]"
        src={mixpad7Videos.sec8}
        title={`${productTitle} audio`}
      />
      <section className="relative mt-[-9rem] h-[9rem]">
        <InfoBlock
          className="absolute top-[3.52rem] left-[1.63rem] overflow-hidden"
          description={multilineText(audio.description ?? "")}
          descriptionClassName="mt-[0.4rem] text-left text-[#ffdfb7]"
          title={multilineText(audio.title)}
          titleClassName="text-left"
          titleStyle={{
            backgroundImage: "linear-gradient(166deg, #fff 0%, #ffd49f 100%)",
          }}
        />
        <div
          className="absolute bottom-[1.16rem] left-[1.63rem] h-[0.83rem] w-[2.7rem] bg-contain bg-center bg-no-repeat"
          style={bg("sec8_info-7848168de8.png")}
        />
      </section>

      <section
        className="relative h-[10rem] w-full bg-cover bg-center bg-no-repeat"
        style={bg("sec9-ec5f114629.png")}
      >
        <InfoBlock
          className="absolute top-[3.14rem] left-1/2 -translate-x-1/2 overflow-hidden"
          description={partner.description}
          title={partner.title}
          titleStyle={{
            backgroundImage:
              "linear-gradient(193deg, #f9e8d8 0%, #ba9471 100%)",
          }}
        />
      </section>

      <ProductSpecificationsSection rows={specRows} title={specTitle} />
    </div>
  );
}
