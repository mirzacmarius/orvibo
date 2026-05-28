"use client";

import { useEffect, useId, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  src: string;
  title?: string;
};

export function VideoModal({ open, onClose, src, title }: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="fixed inset-0 m-0 p-0 w-screen h-screen bg-black/70 backdrop:bg-black/70"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClose={onClose}
    >
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="relative w-full max-w-5xl">
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm"
          >
            Close
          </button>
          <div className="sr-only" id={titleId}>
            {title ?? "Video"}
          </div>
          <video
            controls
            autoPlay
            playsInline
            className="w-full rounded-md bg-black"
          >
            <source src={src} type="video/mp4" />
            <track kind="captions" />
          </video>
        </div>
      </div>
    </dialog>
  );
}

