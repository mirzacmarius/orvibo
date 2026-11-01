"use client";

import { cn } from "@v1/ui/utils";
import { type ReactNode, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface PhoneSwiperSlide {
  key: string;
  content: ReactNode;
  /** The slide's name, for the "tabs" pagination. */
  label?: ReactNode;
}

/**
 * orvibo.com's phone swipers (SOPRO S): slides as wide as `slideClassName`
 * makes them (the next one peeking in when narrower than the box), swiped
 * one at a time. The pagination is a row of short "lines" (the active one
 * white), "tabs" (the slides' names, the active one with a gold bar under
 * it) or none; place it with `paginationClassName`. `arrow` gives the
 * prev/next arrows' picture (a right-pointing chevron), at the sides.
 */
export function PhoneSwiper({
  slides,
  className,
  slideClassName,
  pagination = "lines",
  paginationClassName,
  arrow,
  children,
}: {
  slides: PhoneSwiperSlide[];
  className?: string;
  slideClassName?: string;
  pagination?: "lines" | "tabs" | "none";
  paginationClassName?: string;
  arrow?: string;
  children?: ReactNode;
}) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [active, setActive] = useState(0);
  const last = slides.length - 1;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Swiper
        slidesPerView="auto"
        className="!overflow-visible"
        onSwiper={setSwiper}
        onActiveIndexChange={(instance) => setActive(instance.activeIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.key} className={slideClassName}>
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
      {children}
      {arrow &&
        (
          [
            ["prev", "left-[0.48rem] rotate-180", active === 0],
            ["next", "right-[0.48rem]", active === last],
          ] as const
        ).map(([side, at, off]) => (
          <button
            key={side}
            type="button"
            aria-label={side === "prev" ? "←" : "→"}
            disabled={off}
            onClick={() =>
              side === "prev" ? swiper?.slidePrev() : swiper?.slideNext()
            }
            className={cn(
              "absolute top-1/2 z-10 h-[0.33rem] w-[0.19rem] -translate-y-1/2 cursor-pointer bg-cover bg-no-repeat disabled:pointer-events-none disabled:opacity-[0.35]",
              at,
            )}
            style={{ backgroundImage: `url(${arrow})` }}
          />
        ))}
      {pagination !== "none" && (
        <div className={cn("absolute z-10 flex", paginationClassName)}>
          {slides.map((slide, index) =>
            pagination === "tabs" ? (
              <button
                key={slide.key}
                type="button"
                aria-current={index === active}
                onClick={() => swiper?.slideTo(index)}
                className={cn(
                  "relative mr-[0.6rem] cursor-pointer pb-[0.2rem] text-[0.32rem] leading-[0.45rem] font-extrabold text-white last:mr-0",
                  index === active
                    ? "after:absolute after:bottom-0 after:left-0 after:h-[0.05rem] after:w-full after:rounded-[0.03rem] after:bg-[#ffd697] after:content-['']"
                    : "opacity-[0.6]",
                )}
              >
                {slide.label}
              </button>
            ) : (
              <button
                key={slide.key}
                type="button"
                aria-label={`${index + 1} / ${slides.length}`}
                aria-current={index === active}
                onClick={() => swiper?.slideTo(index)}
                className={cn(
                  "mr-[10px] h-[0.06rem] w-[0.5rem] cursor-pointer rounded-[0.06rem]",
                  index === active ? "bg-white" : "bg-[#d4d3d3]/50",
                )}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}
