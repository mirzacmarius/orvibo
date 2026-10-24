"use client";

import { type ReactNode, useRef, useState } from "react";
import { cn } from "@v1/ui/utils";

export interface ProductFocusSlide {
  key: string;
  /** Resolved image URL. */
  image: string;
  title: ReactNode;
  desc: ReactNode;
}

/** Slide width plus the gap after it, in rem (orvibo.com: 16rem + 0.3rem). */
const PITCH = 16.3;
const HALF_SLIDE = 8;

/**
 * orvibo.com's centred-slide carousel (`centeredSlides`, `slidesPerView:
 * auto`): the active slide sits in the middle, the others are dimmed, and
 * clicking or swiping brings the next one to the centre.
 */
export function ProductFocusCarousel({
  slides,
  className,
}: {
  slides: ProductFocusSlide[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const dragStart = useRef<number | null>(null);

  const go = (index: number) =>
    setActive(Math.max(0, Math.min(slides.length - 1, index)));

  return (
    <div
      className={cn("relative overflow-hidden", className)}
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
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(calc(50% - ${active * PITCH + HALF_SLIDE}rem))`,
        }}
      >
        {slides.map((slide, index) => {
          const current = index === active;
          return (
            <li key={slide.key} className="mr-[0.3rem] w-[16rem] shrink-0">
              <button
                type="button"
                aria-current={current}
                onClick={() => go(index)}
                className="block w-full cursor-pointer text-left"
              >
                <span
                  className={cn(
                    "relative block h-[7.5rem] overflow-hidden bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-black after:transition-opacity after:duration-500 after:content-['']",
                    current ? "after:opacity-0" : "after:opacity-[0.75]",
                  )}
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <span
                  className={cn(
                    "mt-[0.4rem] block text-[0.36rem] font-bold text-white transition-opacity duration-500",
                    !current && "opacity-[0.35]",
                  )}
                >
                  {slide.title}
                  <span className="mt-[0.12rem] block max-w-[9rem] text-[0.24rem] font-medium text-white/50">
                    {slide.desc}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
