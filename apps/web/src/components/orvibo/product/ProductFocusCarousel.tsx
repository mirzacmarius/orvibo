"use client";

import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { cn } from "@v1/ui/utils";
import { type ReactNode, useEffect, useRef, useState } from "react";

export interface ProductFocusSlide {
  key: string;
  /** Resolved image URL (a film's poster when `video` is set). */
  image: string;
  /** A film that plays over the image while the slide is in view. */
  video?: string;
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
  /** Where the prev and next arrows sit (left / right offsets). */
  arrows?: { prev: string; next: string };
  /** Endless: copies of the last and first slides wait beyond each end. */
  loop?: boolean;
}

type LookName =
  | "dark"
  | "light"
  | "scenes"
  | "products"
  | "sensor"
  | "films"
  | "rooms";

/** A 40 x 100 tile with an 11 x 18 glyph (the rooms look's arrows). */
const ROOM_ARROW =
  "top-[2.62rem] mt-0 h-[1rem] w-[0.4rem] rounded-[0.08rem] bg-white/90 px-[0.145rem] py-[0.41rem] text-[#2f2f2f] transition-colors hover:bg-[#2f2f2f] hover:text-white";

/**
 * The looks orvibo.com gives this carousel. `pitch` is the slide width plus
 * the gap after it, in rem.
 */
const LOOKS: Record<LookName, Look> = {
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
  /**
   * Daofeng's lights: 15rem slides on black, none dimmed, endless, with
   * arrows just inside the centred slide's edges.
   */
  products: {
    width: 15,
    pitch: 15.4,
    track: "duration-300 [transition-timing-function:ease]",
    slide: "mr-[0.4rem] w-[15rem]",
    image: "h-[6.8rem]",
    imageDimmed: "",
    title: "",
    titleDimmed: "",
    desc: "",
    arrows: {
      prev: "left-[calc((100%-14.75rem)/2)]",
      next: "right-[calc((100%-13.95rem)/2)]",
    },
    loop: true,
  },
  /**
   * SOPRO S's AISense slides: 12rem photos on black, darkened out of focus,
   * with a caption under each that fades with it.
   */
  sensor: {
    width: 12,
    pitch: 12.69,
    track: "duration-300 [transition-timing-function:ease]",
    slide: "mr-[0.69rem] w-[12rem]",
    image:
      "h-[6.05rem] rounded-[0.2rem] after:rounded-[0.2rem] after:bg-black after:transition-opacity after:duration-300",
    imageDimmed: "after:opacity-[0.75]",
    title:
      "mt-[0.29rem] text-[0.24rem] font-bold text-white transition-opacity duration-300",
    titleDimmed: "opacity-[0.35]",
    desc: "",
  },
  /**
   * The Elf curtain motor's scene films: 14.82rem slides on white, none
   * dimmed, with a caption under each.
   */
  films: {
    width: 14.82,
    pitch: 15.12,
    track: "duration-300 [transition-timing-function:ease]",
    slide: "mr-[0.3rem] w-[14.82rem]",
    image: "h-[7.12rem] rounded-[0.2rem]",
    imageDimmed: "",
    title:
      "mt-[0.24rem] pl-[0.46rem] text-[0.22rem] leading-[0.36rem] font-normal text-[#545454]",
    titleDimmed: "",
    desc: "",
  },
  /**
   * The curtain kits' rooms: 11.1rem photos on white, none dimmed, endless,
   * sliding with jQuery's easeInOutQuad, and orvibo.com's tall rounded
   * arrow tiles on the centred photo's edges (dark when hovered).
   */
  rooms: {
    width: 11.1,
    pitch: 11.45,
    track:
      "duration-[600ms] [transition-timing-function:cubic-bezier(0.455,0.03,0.515,0.955)]",
    slide: "mr-[0.35rem] w-[11.1rem]",
    image: "h-[6.25rem]",
    imageDimmed: "",
    title: "",
    titleDimmed: "",
    desc: "",
    arrows: {
      prev: `left-[calc(50%-5.55rem)] ${ROOM_ARROW}`,
      next: `right-[calc(50%-5.55rem)] ${ROOM_ARROW}`,
    },
    loop: true,
  },
};

/** Copies of the slides kept beyond each end of an endless track. */
const CLONES = 2;

/** orvibo.com's (Swiper's) arrow glyphs, 27 x 44. */
export const SWIPER_ARROWS = {
  prev: "M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22z",
  next: "M27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22z",
};

/**
 * orvibo.com's centred-slide carousel (`centeredSlides`, `slidesPerView:
 * auto`): the active slide sits in the middle, the others are dimmed, and
 * clicking or swiping brings the next one to the centre. Focusing a slide
 * (Tab) centres it too; `overflow-clip` keeps the browser from scrolling the
 * track sideways to reveal it, which would add to the transform.
 *
 * An endless look (`loop`) renders copies of the slides beyond each end;
 * once the track settles on a copy it jumps, without a transition, to the
 * slide the copy stands for.
 */
export function ProductFocusCarousel({
  slides,
  look = "dark",
  className,
  labels,
}: {
  slides: ProductFocusSlide[];
  look?: LookName;
  className?: string;
  /** Accessible names of the arrows, for looks that have them. */
  labels?: { prev: string; next: string };
}) {
  const style = LOOKS[look];
  const dots = style.dots;
  const count = slides.length;
  const clones = style.loop && count > 1 ? CLONES : 0;
  const track = clones
    ? [...slides.slice(-clones), ...slides, ...slides.slice(0, clones)]
    : slides;
  /** Position on the track (copies included); the real slide is `active`. */
  const [position, setPosition] = useState(clones);
  const [jumping, setJumping] = useState(false);
  const dragStart = useRef<number | null>(null);
  const active = (((position - clones) % count) + count) % count;

  const go = (index: number) =>
    setPosition(Math.max(0, Math.min(track.length - 1, index)));

  useEffect(() => {
    if (!jumping) return;
    // Let the jump paint before the transition comes back.
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setJumping(false));
    });
    return () => cancelAnimationFrame(frame);
  }, [jumping]);

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
        if (Math.abs(dx) > 40) go(position + (dx < 0 ? 1 : -1));
      }}
    >
      <ul
        className={cn("flex transition-transform", style.track)}
        style={{
          transform: `translateX(calc(50% - ${position * style.pitch + style.width / 2}rem))`,
          transitionDuration: jumping ? "0s" : undefined,
        }}
        onTransitionEnd={(event) => {
          if (event.target !== event.currentTarget || !clones) return;
          if (position >= clones && position < clones + count) return;
          setJumping(true);
          setPosition(clones + active);
        }}
      >
        {track.map((slide, index) => {
          const current = index === position;
          const copy = index < clones || index >= clones + count;
          return (
            <li
              key={copy ? `${slide.key}-copy${index}` : slide.key}
              className={cn("shrink-0", style.slide)}
              aria-hidden={copy || undefined}
            >
              <button
                type="button"
                aria-current={current}
                tabIndex={copy ? -1 : undefined}
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
                  {slide.video && (
                    <MarketingVideo
                      bare
                      src={slide.video}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
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
              onClick={() => go(clones + index)}
              className={cn(
                dots.dot,
                index === active ? dots.active : dots.idle,
              )}
            />
          ))}
        </div>
      )}
      {style.arrows &&
        (["prev", "next"] as const).map((side) => (
          <button
            key={side}
            type="button"
            aria-label={labels?.[side]}
            onClick={() => go(position + (side === "prev" ? -1 : 1))}
            className={cn(
              "absolute top-1/2 z-10 -mt-[0.125rem] flex h-[0.25rem] w-[0.153rem] cursor-pointer items-center justify-center text-[#74797e]",
              style.arrows?.[side],
            )}
          >
            <svg
              viewBox="0 0 27 44"
              aria-hidden="true"
              className="h-full w-full fill-current"
            >
              <path d={SWIPER_ARROWS[side]} />
            </svg>
          </button>
        ))}
    </div>
  );
}
