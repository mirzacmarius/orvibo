"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { OrviboPlayCircle } from "@/components/orvibo/icons";
import { assetUrl } from "@/lib/orvibo/assetUrl";
import { OrviboSiteVideoOverlay } from "./OrviboSiteVideoOverlay";

interface OrviboVideoContextValue {
  openVideo: (src: string) => void;
  closeVideo: () => void;
}

const OrviboVideoContext = createContext<OrviboVideoContextValue | null>(null);

export function OrviboVideoProvider({ children }: { children: ReactNode }) {
  const [src, setSrc] = useState<string | null>(null);

  const openVideo = useCallback((next: string) => setSrc(assetUrl(next)), []);
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
  showPlayIcon = true,
  playOnDark = false,
}: {
  videoSrc: string;
  className?: string;
  id?: string;
  children: ReactNode;
  /** Renders Phosphor play-circle beside label (replaces CSS ::after sprites). */
  showPlayIcon?: boolean;
  /** White play icon on dark video overlays (mixstation, homeai4). */
  playOnDark?: boolean;
}) {
  const { openVideo } = useOrviboVideo();

  return (
    <div
      id={id}
      className={[className, showPlayIcon ? "orvibo-watch-trigger" : undefined]
        .filter(Boolean)
        .join(" ")}
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
      <span className="orvibo-watch-trigger__label">{children}</span>
      {showPlayIcon ? (
        <OrviboPlayCircle
          onDark={playOnDark}
          className="orvibo-watch-trigger__play"
          size={16}
        />
      ) : null}
    </div>
  );
}
