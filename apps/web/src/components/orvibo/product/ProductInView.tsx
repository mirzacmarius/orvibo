"use client";

import { cn } from "@v1/ui/utils";
import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface ProductInViewProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Share of the block that must be on screen before it is marked. */
  threshold?: number;
}

/**
 * Replaces legacy scroll handlers that add `.show` to a section to start its
 * keyframe animations: the block gets `data-shown` once it scrolls into view,
 * and its children move to their end state with `group-data-[shown]:` classes
 * (plus `motion-reduce:transition-none` to skip the motion).
 */
export function ProductInView({
  children,
  className,
  style,
  threshold = 0.3,
}: ProductInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      data-shown={shown ? "" : undefined}
      className={cn("group", className)}
      style={style}
    >
      {children}
    </div>
  );
}
