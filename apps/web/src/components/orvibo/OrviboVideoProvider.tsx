"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { OrviboSiteVideoOverlay } from "./OrviboSiteVideoOverlay";

interface OrviboVideoContextValue {
  openVideo: (src: string) => void;
  closeVideo: () => void;
}

const OrviboVideoContext = createContext<OrviboVideoContextValue | null>(null);

export function OrviboVideoProvider({ children }: { children: ReactNode }) {
  const [src, setSrc] = useState<string | null>(null);

  const openVideo = useCallback((next: string) => setSrc(next), []);
  const closeVideo = useCallback(() => setSrc(null), []);

  const value = useMemo(
    () => ({ openVideo, closeVideo }),
    [openVideo, closeVideo],
  );

  return (
    <OrviboVideoContext.Provider value={value}>
      {children}
      <OrviboSiteVideoOverlay open={Boolean(src)} src={src} onClose={closeVideo} />
    </OrviboVideoContext.Provider>
  );
}

export function useOrviboVideo() {
  const ctx = useContext(OrviboVideoContext);
  if (!ctx) throw new Error("useOrviboVideo must be used within OrviboVideoProvider");
  return ctx;
}

export function OrviboWatchTrigger({
  videoSrc,
  className,
  id,
  children,
}: {
  videoSrc: string;
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  const { openVideo } = useOrviboVideo();

  return (
    <div
      id={id}
      className={className}
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        openVideo(videoSrc);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openVideo(videoSrc);
        }
      }}
    >
      {children}
    </div>
  );
}
