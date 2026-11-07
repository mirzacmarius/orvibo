"use client";

import { cn } from "@v1/ui/utils";
import { type CSSProperties, useState } from "react";

export interface Camera4LiveView {
  key: string;
  /** The caption drawn on the picture, as the card's name. */
  label: string;
  /** The picture, as a background style. */
  photo: CSSProperties;
}

interface Camera4LiveViewsProps {
  /** Four views, shown two at a time. */
  views: Camera4LiveView[];
}

/**
 * "Check in from your phone": four live views in a row that shows two at a
 * time; the others wait under a white veil. Choosing a veiled view slides
 * the row by two (0.72 s) and veils the pair that leaves, as orvibo.com's
 * click handler does.
 */
export function Camera4LiveViews({ views }: Camera4LiveViewsProps) {
  const [page, setPage] = useState(0);

  return (
    <div className="relative mt-[0.7rem] h-[4.54rem]">
      <ul
        className={cn(
          "absolute top-0 left-0 flex h-full transition-transform [transition-duration:720ms] [transition-timing-function:ease-in-out] motion-reduce:transition-none",
          page === 1 && "translate-x-[-15.66rem]",
        )}
      >
        {views.map((view, index) => {
          const veiled = Math.floor(index / 2) !== page;
          return (
            <li key={view.key} className="mr-[0.32rem] h-full w-[7.51rem]">
              <button
                type="button"
                aria-label={view.label}
                aria-current={veiled ? undefined : true}
                onClick={() => setPage(Math.floor(index / 2))}
                className={cn(
                  "relative block size-full cursor-pointer overflow-hidden rounded-[0.2rem] bg-cover bg-no-repeat after:absolute after:inset-0 after:bg-white after:opacity-0 after:transition-opacity after:content-[''] after:[transition-duration:360ms]",
                  veiled && "after:opacity-75",
                )}
                style={view.photo}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
