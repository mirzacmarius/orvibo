"use client";

import { cn } from "@v1/ui/utils";
import { type ReactNode, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface ProductSceneSlide {
  key: string;
  /** The slide's name in the row of tabs. */
  label: ReactNode;
  content: ReactNode;
}

/**
 * orvibo.com's scene films with named tabs (SOPRO S's living room, dining
 * room and bedroom): one slide at a time, swipeable, with the names in a
 * row near the bottom. The active name carries a gold bar; clicking a name
 * slides to its film in one second, as on orvibo.com.
 */
export function ProductSceneTabs({
  slides,
  className,
}: {
  slides: ProductSceneSlide[];
  className?: string;
}) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [active, setActive] = useState(0);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Swiper
        onSwiper={setSwiper}
        onActiveIndexChange={(instance) => setActive(instance.activeIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.key}>{slide.content}</SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-[0.8rem] left-0 z-10 w-full text-center">
        {slides.map((slide, index) => (
          <button
            key={slide.key}
            type="button"
            aria-current={index === active}
            onClick={() => swiper?.slideTo(index, 1000)}
            className={cn(
              "relative mx-[0.43rem] cursor-pointer overflow-hidden pt-[0.1rem] text-[0.24rem] font-medium leading-[0.32rem] before:absolute before:left-0 before:top-0 before:h-[0.02rem] before:w-full before:content-['']",
              index === active
                ? "text-white before:bg-[image:linear-gradient(90deg,#dc8b00_0px,#fff700_100%)]"
                : "text-white/70 before:bg-[image:linear-gradient(90deg,#686868_0px,#ffffff_100%)] before:opacity-[0.7]",
            )}
          >
            {slide.label}
          </button>
        ))}
      </div>
    </div>
  );
}
