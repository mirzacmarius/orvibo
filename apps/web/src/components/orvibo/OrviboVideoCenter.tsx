"use client";

import { useState } from "react";
import { VideoModal } from "./VideoModal";

type VideoItem = {
  id: string;
  className: string; // video1..video5
  thumbSrc: string;
  title: string;
  mp4Src: string;
};

export function OrviboVideoCenter({
  heading,
  items,
}: {
  heading: string;
  items: VideoItem[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = items.find((i) => i.id === openId) ?? null;

  return (
    <>
      <div className="sec w sec7">
        <a href="/en" className="link__title">
          {heading}
        </a>

        <div className="videos">
          {items.slice(0, 2).map((v) => (
            <div
              key={v.id}
              className={`video ${v.className}`}
              id={v.id}
              role="button"
              tabIndex={0}
              onClick={() => setOpenId(v.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setOpenId(v.id);
              }}
            >
              <div className="bg">
                <img src={v.thumbSrc} alt="" />
              </div>
              <div className="title">{v.title}</div>
            </div>
          ))}
        </div>

        <div className="videos">
          {items.slice(2).map((v) => (
            <div
              key={v.id}
              className={`video ${v.className}`}
              id={v.id}
              role="button"
              tabIndex={0}
              onClick={() => setOpenId(v.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setOpenId(v.id);
              }}
            >
              <div className="bg">
                <img src={v.thumbSrc} alt="" />
              </div>
              <div className="title">{v.title}</div>
            </div>
          ))}
        </div>
      </div>

      {active ? (
        <VideoModal
          open
          onClose={() => setOpenId(null)}
          src={active.mp4Src}
          title={active.title}
        />
      ) : null}
    </>
  );
}

