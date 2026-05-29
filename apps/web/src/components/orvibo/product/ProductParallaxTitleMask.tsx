"use client";

import { cn } from "@v1/ui/utils";
import { useEffect, useRef } from "react";
import { assetUrl } from "@/lib/orvibo/assetUrl";

interface ProductParallaxTitleMaskProps {
  title: string;
  description: string;
}

/** Replaces MixPad 7 inline scroll logic that shifts `.title__mask` horizontally. */
export function ProductParallaxTitleMask({
  title,
  description,
}: ProductParallaxTitleMaskProps) {
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
      const progress =
        1 - Math.min(Math.max((rect.top + rect.height * 0.5) / viewport, 0), 1);
      const offset = (progress - 0.5) * 40;
      maskNode.style.left = `${offset}%`;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-[0.89rem] left-1/2 z-10 -translate-x-1/2 overflow-hidden text-center"
    >
      <div
        ref={maskRef}
        className="absolute inset-0 z-[2] h-full w-full bg-cover bg-center bg-no-repeat transition-all ease-linear [transition-duration:250ms]"
        style={{
          backgroundImage: `url(${assetUrl(
            "/guanwang_second/front/images/products/mixpad_7/title_mask-efd6d22a03.png",
          )})`,
        }}
      />
      <div
        className={cn(
          "bg-clip-text font-orvibo text-[1.1rem] font-extrabold leading-[1.12rem] text-transparent",
          "bg-[linear-gradient(151deg,#88a6c5_0%,#dddfea_23%,#fff_38%,#fffdef_56%,#d2d2d2_75%,#d9f5ff_100%)]",
        )}
      >
        {title}
      </div>
      <div className="mt-[0.46rem] text-center font-orvibo text-[0.3rem] font-normal leading-[0.42rem] tracking-[0.01rem] text-white/80">
        {description}
      </div>
    </div>
  );
}
