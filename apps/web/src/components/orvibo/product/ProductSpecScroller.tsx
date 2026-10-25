"use client";

import { SWIPER_ARROWS } from "@/components/orvibo/product/ProductFocusCarousel";
import { cn } from "@v1/ui/utils";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * A spec table wider than the page (orvibo.com's s_install downlights): its
 * columns scroll sideways, by trackpad, touch or the arrows beside it, which
 * move it by most of a view and fade out at either end. Pin the label
 * column with `sticky left-0` in the table itself, and give the cells of
 * one row `snap-start` (with `scroll-ml-*` the label column's width) so the
 * table stops on a column's edge.
 */
export function ProductSpecScroller({
  children,
  labels,
}: {
  children: ReactNode;
  /** Accessible names of the arrows. */
  labels: { prev: string; next: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ends, setEnds] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const box = ref.current;
    if (!box) return;
    setEnds({
      start: box.scrollLeft <= 1,
      end: box.scrollLeft + box.clientWidth >= box.scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (direction: -1 | 1) =>
    ref.current?.scrollBy({
      left: direction * ref.current.clientWidth * 0.75,
      behavior: "smooth",
    });

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={update}
        className="snap-x snap-mandatory overflow-x-auto"
      >
        {children}
      </div>
      {(["prev", "next"] as const).map((side) => {
        const hidden = side === "prev" ? ends.start : ends.end;
        return (
          <button
            key={side}
            type="button"
            aria-label={labels[side]}
            disabled={hidden}
            onClick={() => go(side === "prev" ? -1 : 1)}
            className={cn(
              "absolute top-1/2 -mt-[0.125rem] flex h-[0.25rem] w-[0.153rem] cursor-pointer items-center justify-center text-[#74797e] transition-opacity",
              side === "prev" ? "-left-[0.4rem]" : "-right-[0.4rem]",
              hidden && "pointer-events-none opacity-0",
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
        );
      })}
    </div>
  );
}
