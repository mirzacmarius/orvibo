"use client";

import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { useEffect, useRef, useState } from "react";

/** Height of the sticky product bar the film stops under. */
const NAV_HEIGHT = 50;

/**
 * The looks orvibo.com steps through as the page scrolls on, counted in px
 * from where the film pins: [from, film scale, title scale, title opacity].
 */
const STEPS = [
  [0, 1, 1, 1],
  [300, 1.05, 1.4, 1],
  [500, 1.1, 2, 1],
  [700, 1, 4, 1],
  [1300, 1, 6, 0],
] as const;

interface DaofengGroupControlProps {
  src: string;
  /** The heading the film shows through (one line per `\n`). */
  title: string;
}

/**
 * "1,000 lights": the film plays through the letters of a black title card,
 * pinned under the product bar while the tall section scrolls past; the card
 * grows, then fades, and the whole film shows. Replaces CN's scroll handler
 * that fixed `.sec9__content` and scaled an SVG card with the Chinese title
 * cut out of it: here the title is text, multiplied onto the film (white
 * letters let it through, black hides it).
 */
export function DaofengGroupControl({ src, title }: DaofengGroupControlProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = ref.current;
      if (!section) return;
      const scrolled = NAV_HEIGHT - section.getBoundingClientRect().top;
      let index = 0;
      STEPS.forEach(([from], i) => {
        if (scrolled >= from) index = i;
      });
      setStep(index);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const [, film, card, opacity] = STEPS[step] ?? STEPS[0];

  return (
    <div ref={ref} className="relative h-[28rem]">
      <div className="sticky top-[50px] flex h-[calc(100vh-50px)] items-center overflow-hidden">
        <div
          className="relative w-full transition-transform [transition-duration:600ms] ease-linear motion-reduce:transition-none"
          style={{ transform: `scale(${film})` }}
        >
          <MarketingVideo
            bare
            src={src}
            className="block w-full aspect-[1920/860] object-cover"
          />
          <div
            className="absolute top-0 left-0 z-10 flex w-full aspect-[2184/1024] items-center justify-center bg-black mix-blend-multiply transition-[transform,opacity] [transition-duration:600ms] ease-linear motion-reduce:transition-none"
            style={{ transform: `scale(${card})`, opacity }}
          >
            <h2 className="whitespace-pre-line text-center text-[1.3rem] leading-[1.7rem] font-extrabold text-white">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
