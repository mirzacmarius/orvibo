"use client";

import { useRef, type ReactNode } from "react";

type Props = {
  panelId: string;
  active: boolean;
  children: ReactNode;
};

export function OrviboProductSwiper({ panelId, active, children }: Props) {
  const listRef = useRef<HTMLUListElement | null>(null);

  function scrollByPage(direction: -1 | 1) {
    const list = listRef.current;
    if (!list) return;
    const firstItem = list.querySelector("li");
    const step = firstItem ? firstItem.getBoundingClientRect().width + 24 : 200;
    list.scrollBy({ left: direction * step * 3, behavior: "smooth" });
  }

  return (
    <div className={`swiperContainer${active ? " show" : ""}`} data-panel={panelId}>
      <div className="swiperWrapper">
        <ul ref={listRef} className="swiperAnimated">
          {children}
        </ul>
        <div
          className="prev"
          role="button"
          tabIndex={0}
          onClick={() => scrollByPage(-1)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") scrollByPage(-1);
          }}
        >
          <span />
        </div>
        <div
          className="next"
          role="button"
          tabIndex={0}
          onClick={() => scrollByPage(1)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") scrollByPage(1);
          }}
        >
          <span />
        </div>
      </div>
    </div>
  );
}
