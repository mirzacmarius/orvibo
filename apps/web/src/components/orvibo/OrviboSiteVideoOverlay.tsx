"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  src: string | null;
  onClose: () => void;
};

export function OrviboSiteVideoOverlay({ open, src, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open || !src) return null;

  return (
    <>
      <div
        className="video__btn_close"
        style={{ display: "block" }}
        role="button"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
        aria-label="Close video"
      />
      <div
        className="video_mask"
        style={{ display: "block" }}
        role="presentation"
        onClick={onClose}
      />
      <div className="video_modal" style={{ display: "block" }}>
        <video
          src={src}
          autoPlay
          controls
          playsInline
          className="w-full h-full"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        >
          <track kind="captions" />
        </video>
      </div>
    </>
  );
}
