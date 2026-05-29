"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@v1/ui/dialog";
import { OrviboClose } from "@/components/orvibo/icons";

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

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && onClose()}>
      <DialogContent className="fixed inset-0 left-0 top-0 z-[1000] grid h-screen w-screen max-w-none translate-x-0 translate-y-0 place-items-center border-0 bg-black/80 p-[24px] shadow-none data-[state=open]:slide-in-from-left-0 data-[state=open]:slide-in-from-top-0 [&>button:last-child]:hidden">
        <DialogTitle className="sr-only">Video player</DialogTitle>
        <DialogDescription className="sr-only">
          ORVIBO product video playback.
        </DialogDescription>
        <DialogClose
          className="absolute right-[24px] top-[24px] z-[1001] flex h-[36px] w-[36px] items-center justify-center text-white/80 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orvibo-link"
          aria-label="Close video"
        >
          <OrviboClose className="h-[24px] w-[24px]" />
        </DialogClose>
        <div className="h-full max-h-[80vh] w-full max-w-[1200px]">
          {src ? (
            <video
              src={src}
              autoPlay
              controls
              playsInline
              className="h-full w-full bg-black object-contain"
            >
              <track kind="captions" />
            </video>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
