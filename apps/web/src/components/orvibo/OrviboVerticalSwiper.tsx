"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Slide {
  src: string;
  alt: string;
}

export function OrviboVerticalSwiper({ slides }: { slides: Slide[] }) {
  const enableLoop = slides.length >= 3;

  return (
    <Swiper
      className="swiper-container orvibo-vertical-swiper"
      direction="vertical"
      loop={enableLoop}
      modules={[Autoplay]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      slidesPerView={1}
      spaceBetween={0}
      watchOverflow
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.src} className="swiper-slide">
          <img src={slide.src} alt={slide.alt} loading="eager" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
