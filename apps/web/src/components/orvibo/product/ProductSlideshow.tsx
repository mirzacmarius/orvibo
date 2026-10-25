"use client";

import { cn } from "@v1/ui/utils";
import { type ReactNode, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface ProductSlide {
  key: string;
  content: ReactNode;
  /**
   * How bright the slide is: while a "light" slide shows, the slideshow has
   * `data-tone="light"`, so text laid over it can turn dark with
   * `group-data-[tone=light]/slideshow:` classes.
   */
  tone?: "light" | "dark";
}

/**
 * orvibo.com's looping slideshows: one slide at a time, swipeable, with
 * clickable pagination at the bottom edge of the box set by `className`.
 * The pagination is Swiper's dots (the default) or slidesjs' "bars", 50 px
 * lines that fill up while their slide shows (move them with
 * `paginationClassName`). `children` are laid over the slides.
 */
export function ProductSlideshow({
  slides,
  className,
  delay = 4000,
  speed = 300,
  pagination = "dots",
  paginationClassName,
  children,
}: {
  slides: ProductSlide[];
  className?: string;
  /** Milliseconds each slide stays. */
  delay?: number;
  /** Milliseconds a slide takes to slide in. */
  speed?: number;
  pagination?: "dots" | "bars";
  paginationClassName?: string;
  children?: ReactNode;
}) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [active, setActive] = useState(0);

  return (
    <div
      data-tone={slides[active]?.tone}
      className={cn("group/slideshow relative overflow-hidden", className)}
    >
      <Swiper
        modules={[Autoplay]}
        loop
        speed={speed}
        autoplay={{ delay, disableOnInteraction: false }}
        onSwiper={setSwiper}
        onRealIndexChange={(instance) => setActive(instance.realIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.key}>{slide.content}</SwiperSlide>
        ))}
      </Swiper>
      {children}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-10 flex justify-center",
          pagination === "bars" ? "gap-[10px]" : "gap-[8px]",
          paginationClassName,
        )}
      >
        {slides.map((slide, index) =>
          pagination === "bars" ? (
            <button
              key={slide.key}
              type="button"
              aria-label={`${index + 1} / ${slides.length}`}
              aria-current={index === active}
              onClick={() => swiper?.slideToLoop(index)}
              className="relative h-[10px] w-[50px] cursor-pointer"
            >
              <span className="absolute inset-x-0 top-[4px] h-[2px] bg-[#2f2f2f]" />
              {index === active && (
                <span
                  className="absolute inset-x-0 top-[4px] h-[2px] origin-left animate-bar-fill bg-[#cccccc] motion-reduce:animate-none"
                  style={{ animationDuration: `${speed + delay}ms` }}
                />
              )}
            </button>
          ) : (
            <button
              key={slide.key}
              type="button"
              aria-label={`${index + 1} / ${slides.length}`}
              aria-current={index === active}
              onClick={() => swiper?.slideToLoop(index)}
              className={cn(
                "size-[0.1rem] cursor-pointer rounded-full",
                index === active ? "bg-white" : "bg-[#3c3c3c]",
              )}
            />
          ),
        )}
      </div>
    </div>
  );
}
