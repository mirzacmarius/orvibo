"use client";

import NextLink from "next/link";
import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { useOrviboVideo } from "@/components/orvibo/OrviboVideoProvider";
import { Button } from "@/components/orvibo/ui/button";

interface StoreVideoSectionProps {
  body: string;
  playLabel: string;
  storeHref: string;
  storeLabel: string;
  title: string;
  videoSrc: string;
  watchVideoSrc: string;
}

export function StoreVideoSection({
  body,
  playLabel,
  storeHref,
  storeLabel,
  title,
  videoSrc,
  watchVideoSrc,
}: StoreVideoSectionProps) {
  const { openVideo } = useOrviboVideo();

  return (
    <section className="relative mx-auto mt-[calc(var(--orvibo-rem-scale)*1.4)] overflow-hidden before:absolute before:inset-0 before:z-10 before:bg-black/40">
      <MarketingVideo
        bare
        className="block w-full"
        src={videoSrc}
        title={title}
      />
      <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h2 className="h-[calc(var(--orvibo-rem-scale)*0.67)] text-[calc(var(--orvibo-rem-scale)*0.42)] font-extrabold leading-[calc(var(--orvibo-rem-scale)*0.67)] tracking-[calc(var(--orvibo-rem-scale)*0.02)] text-white">
          {title}
        </h2>
        <p className="mt-[calc(var(--orvibo-rem-scale)*0.1)] h-[calc(var(--orvibo-rem-scale)*0.36)] text-[calc(var(--orvibo-rem-scale)*0.24)] font-medium leading-[calc(var(--orvibo-rem-scale)*0.36)] tracking-[calc(var(--orvibo-rem-scale)*0.02)] text-white">
          {body}
        </p>
        <div className="mt-[calc(var(--orvibo-rem-scale)*0.6)] flex justify-center gap-[calc(var(--orvibo-rem-scale)*0.3)]">
          <Button
            asChild
            className="rounded-[calc(var(--orvibo-rem-scale)*0.02)] font-normal"
            size="wide"
            variant="white"
          >
            <NextLink href={storeHref}>{storeLabel}</NextLink>
          </Button>
          <Button
            className="rounded-[calc(var(--orvibo-rem-scale)*0.02)] font-normal"
            onClick={() => openVideo(watchVideoSrc)}
            size="wide"
            variant="white"
          >
            {playLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
