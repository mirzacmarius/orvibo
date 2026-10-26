"use client";

import { cn } from "@v1/ui/utils";
import { type ReactNode, useEffect, useRef, useState } from "react";

interface ProductStickySceneProps {
  /** Pinned to the top of the screen while the section scrolls past. */
  backdrop: ReactNode;
  children?: ReactNode;
  className?: string;
}

/**
 * orvibo.com's pinned scenes, where a scroll handler fixes a section's
 * backdrop to the screen while the section scrolls past and marks the section
 * `.active` once its top reaches the top of the screen. Here the backdrop is
 * `sticky`, and the section has `data-active` while its top is at (or above)
 * the top of the screen, so its children can change with
 * `group-data-[active]:` classes.
 *
 * Give the section a height taller than the screen; the backdrop stays put
 * for the difference. Its other children are laid over the backdrop.
 */
export function ProductStickyScene({
  backdrop,
  children,
  className,
}: ProductStickySceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const update = () => setActive(node.getBoundingClientRect().top <= 10);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-active={active ? "" : undefined}
      className={cn("group relative", className)}
    >
      <div className="sticky top-0 h-screen overflow-hidden">{backdrop}</div>
      {children}
    </div>
  );
}
