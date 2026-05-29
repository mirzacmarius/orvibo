"use client";

import NextLink from "next/link";
import { cn } from "@v1/ui/utils";
import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { OrviboPlayCircle } from "@/components/orvibo/icons";
import { useOrviboVideo } from "@/components/orvibo/OrviboVideoProvider";
import { assetUrl } from "@/lib/orvibo/assetUrl";

interface HeroVideoBannerProps {
  className?: string;
  description?: string;
  learnMoreHref: string;
  learnMoreLabel: string;
  learnMoreTopMargin?: number;
  logo?: {
    alt: string;
    height: number;
    marginTop?: number;
    src: string;
    width: number;
  };
  maskTopPadding?: number;
  marginTop?: number;
  poster?: string;
  title?: string;
  titleTopMargin?: number;
  videoSrc: string;
  watchLabel?: string;
  watchVideoSrc?: string;
}

export function HeroVideoBanner({
  className,
  description,
  learnMoreHref,
  learnMoreLabel,
  learnMoreTopMargin = 0.56,
  logo,
  marginTop = 0,
  maskTopPadding = 3.1,
  poster,
  title,
  titleTopMargin = 0.14,
  videoSrc,
  watchLabel,
  watchVideoSrc,
}: HeroVideoBannerProps) {
  const { openVideo } = useOrviboVideo();
  const hasWatch = Boolean(watchVideoSrc && watchLabel);

  function handleWatchClick() {
    if (!watchVideoSrc) return;
    openVideo(watchVideoSrc);
  }

  return (
    <section
      className={cn(
        "relative w-full max-w-full overflow-hidden bg-black",
        className,
      )}
      style={
        marginTop
          ? { marginTop: `calc(var(--orvibo-rem-scale) * ${marginTop})` }
          : undefined
      }
    >
      <MarketingVideo
        bare
        className="block h-auto w-full max-w-full object-cover"
        poster={poster}
        src={videoSrc}
        title={title ?? description ?? logo?.alt}
      />
      <div
        className="absolute inset-0 z-10 flex h-full w-full flex-col items-center bg-black/20 text-white"
        style={{
          paddingTop: `calc(var(--orvibo-rem-scale) * ${maskTopPadding})`,
        }}
      >
        {logo ? (
          <div
            aria-label={logo.alt}
            className="bg-contain bg-center bg-no-repeat"
            role="img"
            style={{
              backgroundImage: `url(${assetUrl(logo.src)})`,
              height: `calc(var(--orvibo-rem-scale) * ${logo.height})`,
              marginTop: logo.marginTop
                ? `calc(var(--orvibo-rem-scale) * ${logo.marginTop})`
                : undefined,
              width: `calc(var(--orvibo-rem-scale) * ${logo.width})`,
            }}
          />
        ) : null}

        {description ? (
          <div className="mt-[calc(var(--orvibo-rem-scale)*0.08)] text-[calc(var(--orvibo-rem-scale)*0.6)] font-semibold leading-[calc(var(--orvibo-rem-scale)*0.78)] tracking-[calc(var(--orvibo-rem-scale)*0.09)]">
            {description}
          </div>
        ) : null}

        {title ? (
          <div
            className="text-[calc(var(--orvibo-rem-scale)*0.2)] font-normal leading-[calc(var(--orvibo-rem-scale)*0.32)] tracking-[calc(var(--orvibo-rem-scale)*0.06)]"
            style={{
              marginTop: `calc(var(--orvibo-rem-scale) * ${titleTopMargin})`,
            }}
          >
            {title}
          </div>
        ) : null}

        <NextLink
          className="group relative flex h-[40px] w-[calc(var(--orvibo-rem-scale)*1.56)] items-center justify-center overflow-hidden rounded-[calc(var(--orvibo-rem-scale)*0.04)] border border-white text-[calc(var(--orvibo-rem-scale)*0.16)] font-normal leading-none tracking-[calc(var(--orvibo-rem-scale)*0.01)] text-white opacity-70 transition-opacity before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-white before:transition-all before:duration-300 hover:text-black hover:opacity-100 hover:before:w-full"
          href={learnMoreHref}
          style={{
            marginTop: `calc(var(--orvibo-rem-scale) * ${learnMoreTopMargin})`,
          }}
        >
          <span className="relative z-10">{learnMoreLabel}</span>
        </NextLink>

        {hasWatch ? (
          <button
            className="mt-[calc(var(--orvibo-rem-scale)*0.23)] inline-flex cursor-pointer items-center gap-[calc(var(--orvibo-rem-scale)*0.06)] text-[calc(var(--orvibo-rem-scale)*0.16)] font-extrabold leading-[calc(var(--orvibo-rem-scale)*0.22)] tracking-[calc(var(--orvibo-rem-scale)*0.01)] text-white"
            onClick={handleWatchClick}
            type="button"
          >
            <span>{watchLabel}</span>
            <OrviboPlayCircle
              className="mt-[calc(var(--orvibo-rem-scale)*0.01)] h-[calc(var(--orvibo-rem-scale)*0.16)] w-[calc(var(--orvibo-rem-scale)*0.16)]"
              onDark
            />
          </button>
        ) : null}
      </div>
    </section>
  );
}
