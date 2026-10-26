"use client";

import { cn } from "@v1/ui/utils";
import { type ReactNode, useId, useState } from "react";

interface ProductMoreToggleProps {
  label: string;
  /** Resolved URLs of orvibo.com's round 30 x 30 icons: a +, then a ×. */
  openIcon: string;
  closeIcon: string;
  className?: string;
  children: ReactNode;
}

/**
 * orvibo.com's "more" link under a spec sheet: a blue label over a round +
 * that slides a hidden section down (jQuery's slideDown, 400 ms). While the
 * section is open, the label fades and the + turns into a ×.
 *
 * The section stays in the page, clipped to no height and `invisible` while
 * closed; `visibility` flips at the end of the slide, so it slides shut
 * before it goes.
 */
export function ProductMoreToggle({
  label,
  openIcon,
  closeIcon,
  className,
  children,
}: ProductMoreToggleProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        className={cn("block w-full cursor-pointer text-center", className)}
      >
        <span
          className={cn(
            "block text-[16px] leading-[1.6] text-[#2f7cd3] transition-opacity",
            open && "opacity-0",
          )}
        >
          {label}
        </span>
        <img
          src={open ? closeIcon : openIcon}
          alt=""
          width={30}
          height={30}
          className="mx-auto mt-[16px] block h-[30px] w-[30px]"
        />
      </button>
      <div
        id={id}
        className={cn(
          "grid transition-[grid-template-rows,visibility] [transition-duration:400ms] ease-in-out motion-reduce:transition-none",
          open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </>
  );
}
