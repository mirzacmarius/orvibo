"use client";

import { useEffect, useRef } from "react";

interface ProductParallaxTitleMaskProps {
  title: string;
  description: string;
}

/** Replaces MixPad 7 inline scroll logic that shifts `.title__mask` horizontally. */
export function ProductParallaxTitleMask({ title, description }: ProductParallaxTitleMaskProps) {
  const maskRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mask = maskRef.current;
    const container = containerRef.current;
    if (!mask || !container) return;

    function onScroll() {
      const node = containerRef.current;
      const maskNode = maskRef.current;
      if (!node || !maskNode) return;

      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = 1 - Math.min(Math.max((rect.top + rect.height * 0.5) / viewport, 0), 1);
      const offset = (progress - 0.5) * 40;
      maskNode.style.left = `${offset}%`;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="sec__info">
      <div ref={maskRef} className="title__mask" />
      <div className="sec__title">{title}</div>
      <div className="sec__desc">{description}</div>
    </div>
  );
}
