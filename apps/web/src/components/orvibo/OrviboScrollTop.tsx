"use client";

import { useEffect, useState } from "react";

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
        <img
          src="/guanwang_second/front/images/2020/footer/arrowUp-28992f3e82.svg"
          alt=""
        />
      </div>
    </div>
  );
}
