"use client";

import { cn } from "@v1/ui/utils";
import { type ReactNode, useRef, useState } from "react";

export interface ProductFocusSlide {
  key: string;
  /** Resolved image URL. */
  image: string;
  title?: ReactNode;
  desc?: ReactNode;
  /** Drawn on the image and dimmed with it (S5's captions). */
  overlay?: ReactNode;
}

interface Look {
  width: number;
  pitch: number;
  track: string;
  slide: string;
  image: string;
  imageDimmed: string;
  title: string;
  titleDimmed: string;
  desc: string;
  /** Pagination dots: the row, each dot, and the active and idle fills. */
  dots?: { row: string; dot: string; active: string; idle: string };
}

/**
 * The looks orvibo.com gives this carousel. `pitch` is the slide width plus
 * the gap after it, in rem.
 */
const LOOKS: Record<"dark" | "light" | "scenes", Look> = {
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
  /**
   * S5's scenes: 16.02rem slides on black, darkened out of focus, captions
   * on the photos and dots under the track (give the carousel the bottom
   * padding the dots sit in). orvibo.com never shows these photos (their
   * URLs are broken there), so its captions sit on black; here a soft shade
   * at the foot of each photo keeps them readable.
   */
  scenes: {
    width: 16.02,
    pitch: 16.54,
    track: "duration-300 [transition-timing-function:ease]",
    slide: "mr-[0.52rem] w-[16.02rem]",
    image:
      "h-[9.62rem] before:absolute before:inset-x-0 before:bottom-0 before:h-[40%] before:bg-gradient-to-t before:from-black/60 before:to-transparent before:content-[''] after:bg-black after:transition-opacity after:[transition-duration:360ms] after:[transition-timing-function:ease]",
    imageDimmed: "after:opacity-[0.75]",
    title: "",
    titleDimmed: "",
    desc: "",
    dots: {
      row: "absolute bottom-[2.08rem] left-0 w-full text-center",
      dot: "mr-[18px] inline-block h-[14px] w-[14px] cursor-pointer rounded-full",
      active: "bg-[#f9d6b5]",
      idle: "bg-white/20",
    },
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
  const dots = style.dots;

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
                >
                  {slide.overlay}
                </span>
                {(slide.title || slide.desc) && (
                  <span
                    className={cn(
                      "block",
                      style.title,
                      !current && style.titleDimmed,
                    )}
                  >
                    {slide.title}
                    <span className={cn("block", style.desc)}>
                      {slide.desc}
                    </span>
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      {dots && (
        <div className={dots.row}>
          {slides.map((slide, index) => (
            <button
              key={slide.key}
              type="button"
              aria-label={`${index + 1} / ${slides.length}`}
              aria-current={index === active}
              onClick={() => go(index)}
              className={cn(
                dots.dot,
                index === active ? dots.active : dots.idle,
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
