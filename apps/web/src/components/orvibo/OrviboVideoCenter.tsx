"use client";

import NextLink from "next/link";
import { PlayCircleIcon } from "@phosphor-icons/react";
import { useOrviboVideo } from "@/components/orvibo/OrviboVideoProvider";
import { assetUrl } from "@/lib/orvibo/assetUrl";

type VideoItem = {
  id: string;
  layout: "wide" | "standard";
  thumbSrc: string;
  title: string;
  mp4Src: string;
};

export function OrviboVideoCenter({
  heading,
  headingHref,
  items,
}: {
  heading: string;
  headingHref: string;
  items: VideoItem[];
}) {
  const { openVideo } = useOrviboVideo();
  const firstRow = items.slice(0, 2);
  const secondRow = items.slice(2);

  return (
    <section className="mx-auto mt-[calc(var(--orvibo-rem-scale)*1.2)] flex w-[min(16rem,calc(100%-32px))] flex-col items-center pb-[calc(var(--orvibo-rem-scale)*1.36)]">
      <NextLink
        className="group relative text-[calc(var(--orvibo-rem-scale)*0.48)] font-extrabold leading-[calc(var(--orvibo-rem-scale)*0.66)] text-[#111] after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:text-[#111] hover:after:w-full"
        href={headingHref}
      >
        {heading}
      </NextLink>

      <div className="mt-[calc(var(--orvibo-rem-scale)*0.4)] flex w-full justify-between">
        {firstRow.map((item) => (
          <VideoCard
            imageHeight={5.46}
            item={item}
            key={item.id}
            onOpen={openVideo}
          />
        ))}
      </div>

      <div className="mt-[calc(var(--orvibo-rem-scale)*0.4)] flex w-full justify-between">
        {secondRow.map((item) => (
          <VideoCard
            imageHeight={3.4}
            item={item}
            key={item.id}
            onOpen={openVideo}
          />
        ))}
      </div>
    </section>
  );
}

function VideoCard({
  imageHeight,
  item,
  onOpen,
}: {
  imageHeight: number;
  item: VideoItem;
  onOpen: (src: string) => void;
}) {
  function open() {
    onOpen(item.mp4Src);
  }

  const width = item.layout === "wide" ? 10.57 : 5.13;

  return (
    <button
      className="group block shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orvibo-link"
      id={item.id}
      onClick={open}
      type="button"
      style={{ width: `calc(var(--orvibo-rem-scale) * ${width})` }}
    >
      <span
        className="relative block w-full cursor-pointer overflow-hidden bg-[#e8e8e8] before:absolute before:inset-0 before:z-10 before:bg-black/20 before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100"
        style={{ height: `calc(var(--orvibo-rem-scale) * ${imageHeight})` }}
      >
        <img
          alt=""
          className="absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-300 group-hover:scale-110"
          src={assetUrl(item.thumbSrc)}
        />
        <PlayCircleIcon
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 z-20 h-[calc(var(--orvibo-rem-scale)*0.8)] w-[calc(var(--orvibo-rem-scale)*0.8)] -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          weight="bold"
        />
      </span>
      <span className="mt-[calc(var(--orvibo-rem-scale)*0.1)] block h-[calc(var(--orvibo-rem-scale)*0.32)] cursor-pointer text-left text-[calc(var(--orvibo-rem-scale)*0.2)] font-normal leading-[calc(var(--orvibo-rem-scale)*0.32)] tracking-[calc(var(--orvibo-rem-scale)*0.02)] text-black">
        {item.title}
      </span>
    </button>
  );
}
