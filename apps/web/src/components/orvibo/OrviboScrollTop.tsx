"use client";

import { useEffect, useState } from "react";
import { OrviboArrowUp } from "@/components/orvibo/icons";

export function OrviboScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed">
      <div
        className="getTop"
        role="button"
        tabIndex={0}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        <OrviboArrowUp className="orvibo-scroll-top__icon" />
      </div>
    </div>
  );
}
