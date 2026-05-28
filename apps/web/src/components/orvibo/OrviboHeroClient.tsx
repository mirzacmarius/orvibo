"use client";

import { useState } from "react";
import { VideoModal } from "./VideoModal";

export function OrviboHeroClient({
  watchLabel,
  heroVideoSrc,
  heroVideoTitle,
}: {
  watchLabel: string;
  heroVideoSrc: string;
  heroVideoTitle: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sec1_content">
        <div
          className="btn btn2"
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setOpen(true);
          }}
        >
          <span>{watchLabel}</span>
        </div>
      </div>

      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        src={heroVideoSrc}
        title={heroVideoTitle}
      />
    </>
  );
}

