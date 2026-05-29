"use client";

import { cn } from "@v1/ui/utils";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { assetUrl } from "@/lib/orvibo/assetUrl";

interface ProductBackgroundSectionProps {
  assetPath: string;
  children?: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  eager?: boolean;
}

export function ProductBackgroundSection({
  assetPath,
  children,
  className,
  id,
  style,
  eager = false,
}: ProductBackgroundSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [hasLoadedBackground, setHasLoadedBackground] = useState(eager);

  useEffect(() => {
    const node = ref.current;
    if (hasLoadedBackground || !node) return;

    if (!("IntersectionObserver" in window)) {
      setHasLoadedBackground(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setHasLoadedBackground(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasLoadedBackground]);

  return (
    <section
      className={cn("relative bg-cover bg-center bg-no-repeat", className)}
      id={id}
      ref={ref}
      style={{
        ...style,
        ...(hasLoadedBackground
          ? { backgroundImage: `url(${assetUrl(assetPath)})` }
          : {}),
      }}
    >
      {children}
    </section>
  );
}
