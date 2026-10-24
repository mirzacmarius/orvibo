"use client";

import { cn } from "@v1/ui/utils";
import Image from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * Dot and label colours of the finish tabs, as on orvibo.com. CN's white tab
 * is white on the white photo; here it gets a ring and a grey label so it
 * can be seen.
 */
const TABS = [
  { dot: "bg-[#a18848]", label: "text-[#a18848]" },
  { dot: "bg-white ring-1 ring-[#c9c9c9]", label: "text-[#a9a9a9]" },
  { dot: "bg-[#4c5560]", label: "text-[#4c5560]" },
];

/** Height of the sticky product bar the photo stops under. */
const NAV_HEIGHT = 50;

interface SwitchColorsProps {
  /** One photo per finish, in tab order. */
  images: string[];
  labels: ReactNode[];
  /** The heading and copy laid over the top of the photo. */
  children: ReactNode;
}

/**
 * The finish chooser: the photo stays pinned under the product bar while the
 * tall section scrolls past and shows each finish in turn; a tab scrolls to
 * its finish. Replaces CN's scroll handler that pinned `.sec3 .item` with
 * `position: fixed` and swapped the image.
 */
export function SwitchColors({ images, labels, children }: SwitchColorsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = ref.current;
    const panel = section?.firstElementChild;
    if (!section || !(panel instanceof HTMLElement)) return;

    const update = () => {
      const travel = section.offsetHeight - panel.offsetHeight;
      if (travel <= 0) return;
      const progress =
        (NAV_HEIGHT - section.getBoundingClientRect().top) / travel;
      const index = Math.floor(progress * images.length);
      setActive(Math.min(images.length - 1, Math.max(0, index)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [images.length]);

  const choose = (index: number) => {
    const section = ref.current;
    const panel = section?.firstElementChild;
    if (!section || !(panel instanceof HTMLElement)) return;
    const travel = section.offsetHeight - panel.offsetHeight;
    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      NAV_HEIGHT +
      ((index + 0.5) / images.length) * travel;
    setActive(index);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div ref={ref} className="relative h-[18.9rem]">
      <div className="sticky top-[50px] h-[9.2rem] w-full overflow-hidden">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={1920}
            height={920}
            unoptimized
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-500 motion-reduce:transition-none",
              i === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute top-[1rem] left-1/2 w-[15rem] -translate-x-1/2">
          {children}
        </div>
        <ul className="absolute bottom-[0.6rem] w-full text-center">
          {labels.map((label, i) => (
            <li
              key={images[i]}
              className={cn("inline-block", i === 1 && "mx-[0.58rem]")}
            >
              <button
                type="button"
                aria-pressed={i === active}
                onClick={() => choose(i)}
                className="cursor-pointer"
              >
                <b
                  className={cn(
                    "mr-[0.18rem] inline-block h-[0.12rem] w-[0.12rem] rounded-full",
                    TABS[i]?.dot,
                  )}
                />
                <span
                  className={cn(
                    "text-[0.2rem] leading-[0.25rem]",
                    TABS[i]?.label,
                    i === active && "font-extrabold",
                  )}
                >
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
