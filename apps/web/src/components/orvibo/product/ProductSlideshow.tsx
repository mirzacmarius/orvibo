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
}

/**
 * orvibo.com's looping slideshow (Swiper with `loop`, `autoplay` and clickable
 * pagination dots): one slide at a time, swipeable, with the dots at the
 * bottom edge of the box set by `className`.
 */
export function ProductSlideshow({
  slides,
  className,
  delay = 4000,
}: {
  slides: ProductSlide[];
  className?: string;
  /** Milliseconds each slide stays. */
  delay?: number;
}) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [active, setActive] = useState(0);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay, disableOnInteraction: false }}
        onSwiper={setSwiper}
        onRealIndexChange={(instance) => setActive(instance.realIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.key}>{slide.content}</SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center gap-[8px]">
        {slides.map((slide, index) => (
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
        ))}
      </div>
    </div>
  );
}
