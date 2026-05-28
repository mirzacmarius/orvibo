"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface ProductRevealProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** Replaces legacy scroll handler that adds `.show` to `.fadeInUp` blocks. */
export function ProductReveal({
  children,
  className = "sec_info",
  style,
}: ProductRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} fadeInUp${visible ? " show" : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
