"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SectionHeading } from "@/components/orvibo/ui/section-heading";
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
      <SectionHeading
        className="mb-[calc(var(--orvibo-rem-scale)*0.44)]"
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        subtitle={subtitle}
        title={title}
        topMargin={0.93}
      />
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
