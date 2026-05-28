"use client";

import { useEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/orvibo/assetUrl";

type Props = {
  className?: string;
  src: string;
  poster?: string;
  title?: string;
  autoPlayWhenVisible?: boolean;
  /** When true, omit the layout wrapper so Orvibo `.video__container` CSS applies directly to `<video>`. */
  bare?: boolean;
};

export function MarketingVideo({
  className,
  src,
  poster,
  title,
  autoPlayWhenVisible = true,
  bare = false,
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    function pause() {
      try {
        ref.current?.pause();
      } catch {
        // ignore
      }
    }

    async function play() {
      if (!autoPlayWhenVisible) return;
      try {
        await ref.current?.play();
      } catch {
        // Autoplay policies can block; user can play manually.
      }
    }

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) void play();
        else pause();
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer?.disconnect();
  }, [autoPlayWhenVisible]);

  const video = (
    <video
      ref={ref}
      className={className}
      muted
      playsInline
      loop
      preload="metadata"
      poster={poster ? assetUrl(poster) : undefined}
      aria-label={title}
      onCanPlay={() => setCanPlay(true)}
      onError={() => setFailed(true)}
    >
      <source src={assetUrl(src)} type="video/mp4" />
    </video>
  );

  if (bare) return video;

  return (
    <div className="relative">
      {video}

      {!canPlay && !failed ? (
        <div className="absolute inset-0 bg-black/20 animate-pulse" aria-hidden />
      ) : null}

      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm">
          Failed to load video
        </div>
      ) : null}
    </div>
  );
}

