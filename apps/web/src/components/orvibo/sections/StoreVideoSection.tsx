"use client";

import NextLink from "next/link";
import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { useOrviboVideo } from "@/components/orvibo/OrviboVideoProvider";

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
          <NextLink
            className="group relative inline-flex h-[calc(var(--orvibo-rem-scale)*0.4)] items-center justify-center overflow-hidden rounded-[calc(var(--orvibo-rem-scale)*0.02)] border border-white bg-transparent px-[calc(var(--orvibo-rem-scale)*0.56)] text-[calc(var(--orvibo-rem-scale)*0.16)] text-white before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-white before:transition-all before:duration-300 hover:text-black hover:before:w-full"
            href={storeHref}
          >
            <span className="relative z-10 leading-[calc(var(--orvibo-rem-scale)*0.4)]">
              {storeLabel}
            </span>
          </NextLink>
          <button
            className="group relative inline-flex h-[calc(var(--orvibo-rem-scale)*0.4)] items-center justify-center overflow-hidden rounded-[calc(var(--orvibo-rem-scale)*0.02)] border border-white bg-transparent px-[calc(var(--orvibo-rem-scale)*0.56)] text-[calc(var(--orvibo-rem-scale)*0.16)] text-white before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-white before:transition-all before:duration-300 hover:text-black hover:before:w-full"
            onClick={() => openVideo(watchVideoSrc)}
            type="button"
          >
            <span className="relative z-10 leading-[calc(var(--orvibo-rem-scale)*0.4)]">
              {playLabel}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
