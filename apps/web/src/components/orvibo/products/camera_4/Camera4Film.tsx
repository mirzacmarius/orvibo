"use client";

import { MarketingVideo } from "@/components/orvibo/MarketingVideo";
import { type ReactNode, useEffect, useRef, useState } from "react";

/** Height of the sticky product bar the film stops under. */
const NAV_HEIGHT = 50;

/**
 * The looks orvibo.com steps through, by the share of the pinned distance
 * scrolled: the film through the words, the words grown past the screen, the
 * whole film, then the film framed under its title.
 */
const STEPS = [
  [0, "words"],
  [0.08, "zoom"],
  [0.25, "film"],
  [0.55, "framed"],
] as const;

type Step = (typeof STEPS)[number][1];

interface Camera4FilmProps {
  src: string;
  /** The words the film plays through. */
  words: string;
  title: ReactNode;
  text: ReactNode;
}

/**
 * The 2K film: pinned under the product bar while its tall section scrolls
 * past, it plays through the letters of a black card, the card grows past
 * the screen and fades, and the film then shrinks into a frame under its
 * title. Replaces orvibo.com's scroll handler that fixed `.sec3__content` and
 * stepped the film and an SVG card (2K 超高清画质 cut out of it) through the
 * same looks: here the words are text multiplied onto the film (white
 * letters let it through, black hides it), and the title, which orvibo.com
 * shows and hides at once, unfolds.
 */
export function Camera4Film({ src, words, title, text }: Camera4FilmProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<Step>("words");

  useEffect(() => {
    const update = () => {
      const section = ref.current;
      if (!section) return;
      const box = section.getBoundingClientRect();
      const pinned = box.height - (window.innerHeight - NAV_HEIGHT);
      const share = (NAV_HEIGHT - box.top) / Math.max(pinned, 1);
      let next: Step = "words";
      for (const [from, look] of STEPS) if (share >= from) next = look;
      setStep(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} data-step={step} className="group relative h-[28rem]">
      <div className="sticky top-[50px] flex h-[calc(100vh-50px)] flex-col items-center justify-center overflow-hidden">
        <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] [transition-duration:600ms] [transition-timing-function:linear] group-data-[step=framed]:grid-rows-[1fr] group-data-[step=framed]:opacity-100 motion-reduce:transition-none">
          <div className="overflow-hidden">
            <div className="pb-[1.14rem] text-center text-white">
              <h2 className="mx-auto max-w-[17rem] text-balance text-[0.54rem] leading-[0.76rem] font-extrabold">
                {title}
              </h2>
              <p className="mx-auto mt-[0.3rem] max-w-[10rem] text-[0.2rem] leading-[0.4rem] font-medium opacity-70">
                {text}
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full transition-[width,transform] [container-type:inline-size] [transition-duration:600ms] [transition-timing-function:linear] group-data-[step=film]:scale-[1.2] group-data-[step=framed]:w-[9.6rem] group-data-[step=zoom]:scale-[1.2] motion-reduce:transition-none">
          <MarketingVideo
            bare
            src={src}
            className="block aspect-[2500/1190] w-full"
          />
          <div
            aria-hidden
            className="absolute inset-0 z-10 flex items-center justify-center bg-black text-[length:7.5cqw] font-extrabold text-white mix-blend-multiply transition-[transform,opacity] [transition-duration:600ms] [transition-timing-function:linear] group-data-[step=film]:scale-[5] group-data-[step=film]:opacity-0 group-data-[step=framed]:scale-[5] group-data-[step=framed]:opacity-0 group-data-[step=zoom]:scale-[5] motion-reduce:transition-none"
          >
            {words}
          </div>
        </div>
      </div>
    </div>
  );
}
