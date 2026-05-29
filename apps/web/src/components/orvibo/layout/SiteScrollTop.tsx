"use client";

import { useEffect, useState } from "react";
import { OrviboArrowUp } from "@/components/orvibo/icons";
import { assetUrl } from "@/lib/orvibo/assetUrl";

export function SiteScrollTop() {
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
    <button
      type="button"
      aria-label="Scroll to top"
      className="fixed right-[10px] bottom-[50px] z-[900] flex h-[68px] w-[68px] cursor-pointer items-center justify-center bg-contain bg-center bg-no-repeat text-white opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orvibo-link"
      style={{
        backgroundImage: `url(${assetUrl(
          "/guanwang_second/front/images/2020/footer/getTop-39af3f63e1.png",
        )})`,
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <OrviboArrowUp aria-hidden="true" className="h-[20px] w-[17px]" />
    </button>
  );
}
