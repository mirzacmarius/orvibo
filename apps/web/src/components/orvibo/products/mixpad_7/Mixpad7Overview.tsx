import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { ProductParallaxTitleMask } from "@/components/orvibo/product/ProductParallaxTitleMask";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { ProductSpecificationsSection } from "@/components/orvibo/product/ProductSpecificationsSection";
import { assetUrl } from "@/lib/orvibo/assetUrl";
import type { Locale } from "@/lib/orvibo/i18n";
import { localizedAssetUrl } from "@/lib/orvibo/localizedAsset";
import { getMixpad7Section } from "@/lib/orvibo/products/content/mixpad-sections";
import {
  type Mixpad7VoiceTone,
  buildMixpad7Specifications,
  mixpad7ImageBase,
  mixpad7Videos,
  mixpad7VoiceAvatarBase,
  mixpad7VoiceBubbles,
} from "@/lib/orvibo/products/content/mixpad_7";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

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

function bg(path: string, locale: Locale) {
  return {
    backgroundImage: `url(${localizedAssetUrl(`${mixpad7ImageBase}/${path}`, locale)})`,
  };
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
  locale,
}: {
  className: string;
  path: string;
  locale: Locale;
}) {
  return (
    <ProductReveal
      className={cn("bg-cover bg-center bg-no-repeat", className)}
      style={bg(path, locale)}
    />
  );
}

/** A captioned image that fades up into view; `delay` lags it 150 ms behind its neighbours. */
function RevealCard({
  className,
  path,
  label,
  locale,
  delay,
}: {
  className: string;
  path: string;
  label?: string;
  locale: Locale;
  delay?: boolean;
}) {
  return (
    <ProductReveal
      className={cn(className, delay && "[transition-delay:150ms]")}
    >
      <div
        role="img"
        aria-label={label}
        className="h-full w-full bg-cover bg-center bg-no-repeat"
        style={bg(path, locale)}
      />
    </ProductReveal>
  );
}

const voiceTones: Record<Mixpad7VoiceTone, string> = {
  amber: "bg-[rgba(205,89,6,0.24)] shadow-[0_0.1rem_0.5rem_rgba(205,89,6,0.3)]",
  olive:
    "bg-[rgba(189,181,55,0.21)] shadow-[0_0.1rem_0.5rem_rgba(189,181,55,0.26)]",
  indigo:
    "bg-[rgba(45,37,191,0.26)] shadow-[0_0.1rem_0.5rem_rgba(45,37,191,0.36)]",
  teal: "bg-[rgba(42,162,200,0.24)] shadow-[0_0.1rem_0.5rem_rgba(42,162,200,0.3)]",
};

/** One tile of the scrolling voice-command strip; rendered twice for a seamless loop. */
function VoiceStrip({
  items,
  hidden,
}: {
  items: Record<string, string>;
  hidden?: boolean;
}) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="relative h-[6.03rem] w-[24rem] shrink-0 font-orvibo"
    >
      {mixpad7VoiceBubbles.map((bubble) => {
        const text = items[bubble.id];
        if (!text) return null;
        if (!bubble.speaker) {
          return (
            <li
              key={bubble.id}
              className={cn(
                "absolute flex h-[0.8rem] items-center whitespace-nowrap rounded-full bg-[rgba(202,202,209,0.12)] px-[0.4rem] text-[0.18rem] font-medium text-white/85",
                bubble.position,
              )}
            >
              {text}
            </li>
          );
        }
        return (
          <li
            key={bubble.id}
            className={cn(
              "absolute flex h-[0.92rem] items-center gap-[0.16rem] whitespace-nowrap rounded-full pr-[0.4rem] pl-[0.14rem]",
              voiceTones[bubble.speaker.tone],
              bubble.position,
            )}
          >
            <span className="relative block size-[0.62rem] shrink-0 overflow-hidden rounded-full shadow-[0_0_0_0.06rem_rgba(0,0,0,0.18)]">
              <Image
                src={assetUrl(
                  `${mixpad7VoiceAvatarBase}/${bubble.speaker.avatar}`,
                )}
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
            </span>
            <span className="flex flex-col gap-[0.04rem]">
              <span className="text-[0.14rem] leading-[0.18rem] text-white/75">
                {items[`${bubble.id}Name`]}
              </span>
              <span className="text-[0.17rem] font-semibold leading-[0.22rem] text-white">
                {text}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

const audioBadges = [
  { id: "hifi", label: "HiFi" },
  { id: "tws", label: "TWS" },
] as const;

function AudioBadges({ items }: { items?: Record<string, string> }) {
  return (
    <div className="absolute bottom-[1.16rem] left-[1.63rem] flex font-orvibo text-[#ffdaab]/80">
      {audioBadges.map((badge, index) => (
        <div
          key={badge.id}
          className={cn(
            "flex flex-col items-center px-[0.32rem]",
            index === 0 ? "pl-0" : "border-l border-white/20",
          )}
        >
          <span className="text-[0.4rem] font-semibold leading-[0.44rem]">
            {badge.label}
          </span>
          <span className="mt-[0.08rem] whitespace-pre-line text-center text-[0.14rem] leading-[0.19rem]">
            {items?.[badge.id]}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Mixpad7Overview({ copy, locale }: ProductViewProps) {
  const productTitle = copy.title;
  const hero = getMixpad7Section(copy, "hero");
  const screen = getMixpad7Section(copy, "screen");
  const border = getMixpad7Section(copy, "border");
  const remote = getMixpad7Section(copy, "remote");
  const gateway = getMixpad7Section(copy, "gateway");
  const intercom = getMixpad7Section(copy, "intercom");
  const voice = getMixpad7Section(copy, "voice");
  const audio = getMixpad7Section(copy, "audio");
  const album = getMixpad7Section(copy, "album");
  const partner = getMixpad7Section(copy, "partner");
  const extra = getMixpad7Section(copy, "extra");
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
              style={bg("sec1_word-7689e2d07f.svg", locale)}
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
        style={bg("sec4-71abdd5f9b.png", locale)}
      >
        <InfoBlock
          className="mx-auto w-full overflow-hidden"
          description={remote.description}
          descriptionClassName="mx-auto max-w-[12rem]"
          title={remote.title}
        />
      </section>

      <section
        className="relative h-[10.8rem] w-full bg-cover bg-center bg-no-repeat"
        style={bg("sec5-5e2a040615.png", locale)}
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
          style={bg("sec5_bg-210f0e9cc8.png", locale)}
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
              locale={locale}
              className="h-[5.68rem] w-[11.29rem]"
              path="sec6_1-a9e1631215.png"
            />
            <RevealImage
              locale={locale}
              className="h-[5.8rem] w-[4.44rem]"
              path="sec6_2-18da614cbb.png"
            />
          </div>
          <div className="flex w-full justify-between">
            <RevealImage
              locale={locale}
              className="h-[5.68rem] w-[4.44rem]"
              path="sec6_3-f5cea766fb.png"
            />
            <RevealImage
              locale={locale}
              className="h-[5.71rem] w-[11.28rem]"
              path="sec6_4-56c12faaab.png"
            />
          </div>
        </div>
      </section>

      <section
        className="relative h-[11rem] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={bg("sec7-6f6c0ffb5f.png", locale)}
      >
        <InfoBlock
          className="absolute top-[1.36rem] left-0 z-50 w-full overflow-hidden"
          description={voice.description}
          descriptionClassName="mx-auto max-w-[13rem]"
          title={voice.title}
          titleStyle={{
            backgroundImage:
              "linear-gradient(150deg, #abd5ff 0%, #dddfea 23%, #fbe8f0 38%, #fffdef 56%, #fbe8f0 75%, #b9ecff 100%)",
          }}
        />
        <div className="absolute top-[4.61rem] left-0 z-[5] overflow-hidden">
          <div className="flex w-max animate-mixpad-marquee">
            <VoiceStrip items={voice.items ?? {}} />
            <VoiceStrip hidden items={voice.items ?? {}} />
          </div>
        </div>
        <div
          className="absolute top-[4.78rem] left-[7.02rem] z-20 h-[4.15rem] w-[6.37rem] bg-cover bg-center bg-no-repeat"
          style={bg("sec7_box-46e49a1a11.png", locale)}
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
              style={bg("sec7_mask-b441de4385.png", locale)}
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
        <AudioBadges items={audio.items} />
      </section>

      <section
        className="relative h-[10rem] w-full bg-cover bg-center bg-no-repeat"
        style={bg("sec9-ec5f114629.png", locale)}
      >
        <InfoBlock
          className="absolute top-[3.14rem] left-1/2 -translate-x-1/2 overflow-hidden"
          title={multilineText(album.title)}
          titleStyle={{
            backgroundImage:
              "linear-gradient(193deg, #f9e8d8 0%, #ba9471 100%)",
          }}
        />
      </section>

      {/* MixPad Extra, the door station that pairs with it. The headings sit in
          the flow (CN places them absolutely), so a longer translation pushes
          the images down instead of running into them; each heading is only as
          wide as its text, so its gradient spans the text as on CN. */}
      <section className="flex flex-col items-center pt-[2.97rem] pb-[0.78rem]">
        <InfoBlock
          className="overflow-hidden"
          title={multilineText(partner.title)}
          titleStyle={{
            backgroundImage: "linear-gradient(151deg, #fff 0%, #ceb67f 100%)",
          }}
        />
        <RevealCard
          className="mt-[1.18rem] h-[9rem] w-[16rem]"
          label={partner.items?.card}
          locale={locale}
          path="sec10-fc34d8a0b1.png"
        />
      </section>

      <section className="flex flex-col items-center pt-[1.2rem] pb-[1.32rem]">
        <InfoBlock
          className="overflow-hidden"
          title={multilineText(extra.title)}
          titleStyle={{
            backgroundImage:
              "linear-gradient(158deg, #536271 0%, #dddfea 23%, #f3fbe8 38%, #fff 56%, #d1bb87 75%, #272727 100%)",
          }}
        />
        <div className="mt-[1.69rem] flex gap-[0.15rem]">
          <div className="w-[7.93rem]">
            <RevealCard
              className="h-[2.53rem] w-full"
              label={extra.items?.microphones}
              locale={locale}
              path="sec11_1-113f04b91f.png"
            />
            <div className="mt-[0.15rem] flex justify-between">
              <div className="flex h-[5.91rem] w-[3.91rem] flex-col justify-between">
                <RevealCard
                  className="h-[2.3rem] w-full"
                  label={extra.items?.scanner}
                  locale={locale}
                  path="sec11_2-4a76c7a7b9.png"
                />
                <RevealCard
                  delay
                  className="h-[3.46rem] w-full"
                  label={extra.items?.unlock}
                  locale={locale}
                  path="sec11_3-3ce5ef562e.png"
                />
              </div>
              <RevealCard
                delay
                className="h-[5.91rem] w-[3.87rem]"
                label={extra.items?.screen}
                locale={locale}
                path="sec11_4-56eaffce28.png"
              />
            </div>
          </div>
          <div className="w-[7.93rem]">
            <RevealCard
              className="h-[4.21rem] w-full"
              label={extra.items?.product}
              locale={locale}
              path="sec11_5-9898d3ddee.png"
            />
            <div className="mt-[0.15rem] flex justify-between">
              <RevealCard
                className="h-[4.23rem] w-[3.89rem]"
                label={extra.items?.match}
                locale={locale}
                path="sec11_6-22b9db367e.png"
              />
              <RevealCard
                delay
                className="h-[4.23rem] w-[3.89rem]"
                label={extra.items?.camera}
                locale={locale}
                path="sec11_7-fc33cb0699.png"
              />
            </div>
          </div>
        </div>
      </section>

      <ProductSpecificationsSection rows={specRows} title={specTitle} />
    </div>
  );
}
