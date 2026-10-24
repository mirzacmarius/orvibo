"use client";

import { cn } from "@v1/ui/utils";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/orvibo/assetUrl";

type Phase = "intro" | "played" | "skipped";

/**
 * The MixPad Elf banner opening, as on orvibo.com: the "fun" logo video plays
 * once, large and centred, then moves to the left and the copy and the
 * rotating product (`children`) fade in. When the video can't autoplay, fails
 * or the visitor prefers reduced motion, the banner starts in that end state.
 */
export function ElfBannerIntro({
  src,
  children,
}: {
  src: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("intro");

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const skip = () => {
      setPhase("skipped");
      // Show the logo, the video's last frame.
      const toEnd = () => {
        if (Number.isFinite(video.duration)) video.currentTime = video.duration;
      };
      if (video.readyState >= 1) toEnd();
      else video.addEventListener("loadedmetadata", toEnd, { once: true });
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      skip();
      return;
    }
    video.play().catch(skip);
  }, []);

  const done = phase !== "intro";

  return (
    <>
      <video
        ref={ref}
        src={assetUrl(src)}
        muted
        playsInline
        preload="auto"
        aria-hidden
        onEnded={() => setPhase((p) => (p === "intro" ? "played" : p))}
        onError={() => setPhase("skipped")}
        className={cn(
          "absolute",
          phase === "played" &&
            "transition-[top,left,width,height] ease-in-out [transition-duration:1200ms]",
          done
            ? "left-[1.63rem] top-[2.72rem] h-[4.51rem] w-[6.2rem]"
            : "left-[calc((100%-11rem)/2)] top-[0.18rem] h-[7.34rem] w-[10.1rem]",
        )}
      />
      <div
        className={cn(
          phase === "played" &&
            "transition-opacity [transition-delay:1200ms] [transition-duration:1600ms]",
          done ? "opacity-100" : "opacity-0",
        )}
      >
        {children}
      </div>
    </>
  );
}
