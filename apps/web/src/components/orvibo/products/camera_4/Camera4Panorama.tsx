"use client";

import { cn } from "@v1/ui/utils";
import { type CSSProperties, type ReactNode, useState } from "react";

/** Where the wide picture sits in its 16rem window: orvibo.com starts it a quarter of its width in. */
const SHIFTS = {
  left: "translate-x-0",
  middle: "translate-x-[-6rem]",
  right: "translate-x-[-7.99rem]",
} as const;

interface Camera4PanoramaProps {
  /** Background style of the 23.99rem-wide room picture. */
  photo: CSSProperties;
  /** Background style of the round arrow between the two buttons. */
  arrow: CSSProperties;
  left: ReactNode;
  right: ReactNode;
}

/**
 * "Scheduled patrols": a room wider than its window, with Left and Right
 * buttons on a round arrow that slide it to either end, as orvibo.com's
 * click handler does (0.66 s, ease-in-out).
 */
export function Camera4Panorama({
  photo,
  arrow,
  left,
  right,
}: Camera4PanoramaProps) {
  const [side, setSide] = useState<keyof typeof SHIFTS>("middle");
  const button =
    "absolute top-1/2 h-[0.4rem] -translate-y-1/2 cursor-pointer whitespace-nowrap text-[0.18rem] leading-[0.4rem] text-white opacity-70 hover:opacity-100";

  return (
    <div className="relative mt-[0.66rem] h-[5.47rem] w-[16rem] overflow-hidden rounded-[0.2rem]">
      <div
        className={cn(
          "h-full w-[23.99rem] bg-cover bg-no-repeat transition-transform [transition-duration:660ms] [transition-timing-function:ease-in-out] motion-reduce:transition-none",
          SHIFTS[side],
        )}
        style={photo}
      />
      <div
        className="absolute bottom-[0.48rem] left-[7.16rem] z-[5] size-[1.69rem] bg-cover bg-no-repeat"
        style={arrow}
      >
        <button
          type="button"
          aria-pressed={side === "left"}
          onClick={() => setSide("left")}
          className={cn(button, "right-[1.11rem] pr-[0.6rem] pl-[0.1rem]")}
        >
          {left}
        </button>
        <button
          type="button"
          aria-pressed={side === "right"}
          onClick={() => setSide("right")}
          className={cn(button, "left-[1.11rem] pr-[0.1rem] pl-[0.6rem]")}
        >
          {right}
        </button>
      </div>
    </div>
  );
}
