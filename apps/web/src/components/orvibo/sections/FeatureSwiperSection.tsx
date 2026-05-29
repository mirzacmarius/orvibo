"use client";

import NextLink from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { assetUrl } from "@/lib/orvibo/assetUrl";

interface FeatureSwiperSectionProps {
  ctaHref: string;
  ctaLabel: string;
  slides: Array<{
    alt: string;
    src: string;
  }>;
  subtitle: string;
  title: string;
}

export function FeatureSwiperSection({
  ctaHref,
  ctaLabel,
  slides,
  subtitle,
  title,
}: FeatureSwiperSectionProps) {
  const enableLoop = slides.length >= 3;

  return (
    <section className="relative mx-auto overflow-hidden text-center">
      <h2 className="mt-[calc(var(--orvibo-rem-scale)*0.93)] mb-[calc(var(--orvibo-rem-scale)*0.18)] text-[calc(var(--orvibo-rem-scale)*0.48)] font-bold leading-[calc(var(--orvibo-rem-scale)*0.67)] tracking-[calc(var(--orvibo-rem-scale)*0.02)] text-[#111]">
        {title}
      </h2>
      <p className="text-[calc(var(--orvibo-rem-scale)*0.28)] leading-[calc(var(--orvibo-rem-scale)*0.33)] tracking-[calc(var(--orvibo-rem-scale)*0.02)] text-[#111]">
        {subtitle}
      </p>
      <NextLink
        className="group relative mx-auto mt-[calc(var(--orvibo-rem-scale)*0.44)] mb-[calc(var(--orvibo-rem-scale)*0.44)] inline-flex h-[40px] items-center justify-center overflow-hidden rounded-[2px] border border-black bg-transparent px-[calc(var(--orvibo-rem-scale)*0.48)] text-[16px] font-medium leading-[40px] text-black before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-black before:transition-all before:duration-300 hover:text-white hover:before:w-full"
        href={ctaHref}
      >
        <span className="relative z-10">{ctaLabel}</span>
      </NextLink>
      <Swiper
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="mx-auto h-[calc(var(--orvibo-rem-scale)*8.08)] w-[min(16rem,calc(100%-32px))]"
        direction="vertical"
        loop={enableLoop}
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        watchOverflow
      >
        {slides.map((slide) => (
          <SwiperSlide className="h-full w-full" key={slide.src}>
            <img
              alt={slide.alt}
              className="block h-full w-full object-cover"
              loading="eager"
              src={assetUrl(slide.src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
