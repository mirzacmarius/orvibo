"use client";

import { cn } from "@v1/ui/utils";
import { type ReactNode, useRef, useState } from "react";

export interface ProductFocusSlide {
  key: string;
  /** Resolved image URL. */
  image: string;
  title: ReactNode;
  desc: ReactNode;
}

/**
 * The two looks orvibo.com gives this carousel. `pitch` is the slide width
 * plus the gap after it, in rem.
 */
const LOOKS = {
  /** MixPad 10's finishes: 16rem slides on black, darkened out of focus. */
  dark: {
    width: 16,
    pitch: 16.3,
    track: "duration-500 ease-out",
    slide: "mr-[0.3rem] w-[16rem]",
    image:
      "h-[7.5rem] after:bg-black after:transition-opacity after:duration-500",
    imageDimmed: "after:opacity-[0.75]",
    title:
      "mt-[0.4rem] text-[0.36rem] font-bold text-white transition-opacity duration-500",
    titleDimmed: "opacity-[0.35]",
    desc: "mt-[0.12rem] max-w-[9rem] text-[0.24rem] font-medium text-white/50",
  },
  /** S3's scenes: 14.44rem slides on white, veiled out of focus. */
  light: {
    width: 14.44,
    pitch: 14.74,
    track: "duration-300 [transition-timing-function:ease]",
    slide: "mr-[0.3rem] w-[14.44rem]",
    image:
      "h-[7.55rem] after:rounded-[0.22rem] after:bg-white after:transition-opacity after:[transition-duration:360ms] after:[transition-timing-function:ease]",
    imageDimmed: "after:opacity-25",
    title: "mt-[0.42rem] text-[0.36rem] font-medium text-black",
    titleDimmed: "",
    desc: "mt-[0.14rem] text-[0.2rem] font-normal text-black",
  },
};

/**
 * orvibo.com's centred-slide carousel (`centeredSlides`, `slidesPerView:
 * auto`): the active slide sits in the middle, the others are dimmed, and
 * clicking or swiping brings the next one to the centre. Focusing a slide
 * (Tab) centres it too; `overflow-clip` keeps the browser from scrolling the
 * track sideways to reveal it, which would add to the transform.
 */
export function ProductFocusCarousel({
  slides,
  look = "dark",
  className,
}: {
  slides: ProductFocusSlide[];
  look?: keyof typeof LOOKS;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const dragStart = useRef<number | null>(null);
  const style = LOOKS[look];

  const go = (index: number) =>
    setActive(Math.max(0, Math.min(slides.length - 1, index)));

  return (
    <div
      className={cn("relative overflow-clip", className)}
      onPointerDown={(event) => {
        dragStart.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (dragStart.current === null) return;
        const dx = event.clientX - dragStart.current;
        dragStart.current = null;
        if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
      }}
    >
      <ul
        className={cn("flex transition-transform", style.track)}
        style={{
          transform: `translateX(calc(50% - ${active * style.pitch + style.width / 2}rem))`,
        }}
      >
        {slides.map((slide, index) => {
          const current = index === active;
          return (
            <li key={slide.key} className={cn("shrink-0", style.slide)}>
              <button
                type="button"
                aria-current={current}
                onClick={() => go(index)}
                onFocus={() => go(index)}
                className="block w-full cursor-pointer text-left"
              >
                <span
                  className={cn(
                    "relative block overflow-hidden bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:content-['']",
                    style.image,
                    current ? "after:opacity-0" : style.imageDimmed,
                  )}
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <span
                  className={cn(
                    "block",
                    style.title,
                    !current && style.titleDimmed,
                  )}
                >
                  {slide.title}
                  <span className={cn("block", style.desc)}>{slide.desc}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
