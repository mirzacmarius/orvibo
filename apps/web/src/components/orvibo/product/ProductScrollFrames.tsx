"use client";

import { cn } from "@v1/ui/utils";
import { type ReactNode, useEffect, useRef, useState } from "react";

export interface ProductScrollFrame {
  key: string;
  content: ReactNode;
}

interface ProductScrollFramesProps {
  frames: ProductScrollFrame[];
  /** Laid over every frame (a title, say). */
  children?: ReactNode;
  /** The section: give it a height taller than the frame. */
  className?: string;
  /** The frame: its height, and a `top` that centres it on the screen. */
  frameClassName?: string;
}

/**
 * orvibo.com's pinned picture sequences (the S2 lock's scenes): while a
 * section taller than the screen scrolls past, a full-width frame stays put
 * on the screen and shows one picture after another, each taking an equal
 * share of the scroll. A column of dots on the right marks the picture on
 * show. The frame is `sticky`, and the share of its travel down the section
 * picks the picture.
 */
export function ProductScrollFrames({
  frames,
  children,
  className,
  frameClassName,
}: ProductScrollFramesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    if (!section || !frame) return;

    const update = () => {
      const outer = section.getBoundingClientRect();
      const inner = frame.getBoundingClientRect();
      const travel = outer.height - inner.height;
      const progress = travel > 0 ? (inner.top - outer.top) / travel : 0;
      const index = Math.floor(progress * frames.length);
      setActive(Math.min(frames.length - 1, Math.max(0, index)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [frames.length]);

  return (
    <div ref={sectionRef} className={cn("relative", className)}>
      <div
        ref={frameRef}
        className={cn("sticky w-full overflow-hidden", frameClassName)}
      >
        {frames.map((frame, index) => (
          <div
            key={frame.key}
            aria-hidden={index !== active}
            className={cn(
              "absolute inset-0 transition-opacity duration-300 motion-reduce:transition-none",
              index === active ? "opacity-100" : "opacity-0",
            )}
          >
            {frame.content}
          </div>
        ))}
        {children}
        <ul className="absolute top-1/2 right-[0.7rem] -translate-y-1/2">
          {frames.map((frame, index) => (
            <li
              key={frame.key}
              className="flex size-[0.23rem] items-center justify-center"
            >
              <span
                className={cn(
                  "flex items-center justify-center rounded-full",
                  index === active
                    ? "size-[23px] bg-white/30"
                    : "size-[8px] bg-white",
                )}
              >
                {index === active && (
                  <span className="size-[8px] rounded-full bg-white" />
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
