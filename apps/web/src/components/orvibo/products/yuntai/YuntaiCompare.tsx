"use client";

import {
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
  useRef,
  useState,
} from "react";

/** How far the split may go, in % of the 11.2rem picture: the 0.49rem handle stays whole inside it. */
const MIN = (0.245 / 11.2) * 100;
const MAX = 100 - MIN;

const clamp = (value: number) => Math.min(MAX, Math.max(MIN, value));

/** What each key does to the split (arrows in steps of 2%, Page keys of 10%). */
const KEYS: Record<string, (value: number) => number> = {
  ArrowLeft: (value) => value - 2,
  ArrowDown: (value) => value - 2,
  ArrowRight: (value) => value + 2,
  ArrowUp: (value) => value + 2,
  PageDown: (value) => value - 10,
  PageUp: (value) => value + 10,
  Home: () => MIN,
  End: () => MAX,
};

interface YuntaiCompareProps {
  /** Background styles of the 1080P picture (the whole frame) and the 720P one (its left part). */
  high: CSSProperties;
  low: CSSProperties;
  /** Background style of the round handle on the split. */
  handle: CSSProperties;
  /** Text alternative of the picture. */
  photoLabel: string;
  /** Accessible name of the handle. */
  sliderLabel: string;
  lowCaption: ReactNode;
  highCaption: ReactNode;
}

/**
 * "720P / 1080P": the 720P picture over the left part of the 1080P one, split
 * by a white line whose round handle drags sideways, as orvibo.com's
 * mousedown/mousemove handlers do. The handle also moves with the arrow keys,
 * Page Up/Down, Home and End.
 */
export function YuntaiCompare({
  high,
  low,
  handle,
  photoLabel,
  sliderLabel,
  lowCaption,
  highCaption,
}: YuntaiCompareProps) {
  const [split, setSplit] = useState(50);
  const frame = useRef<HTMLDivElement>(null);

  const follow = (event: PointerEvent<HTMLDivElement>) => {
    const box = frame.current?.getBoundingClientRect();
    if (!box?.width) return;
    setSplit(clamp(((event.clientX - box.left) / box.width) * 100));
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const move = KEYS[event.key];
    if (!move) return;
    event.preventDefault();
    setSplit((value) => clamp(move(value)));
  };

  return (
    <div className="mx-auto mt-[1rem] w-[11.2rem]">
      <div ref={frame} className="relative h-[6rem]">
        <div
          role="img"
          aria-label={photoLabel}
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={high}
        />
        <div
          className="absolute inset-y-0 left-0 border-r border-r-white bg-[length:11.2rem_6rem] bg-no-repeat"
          style={{ ...low, width: `${split}%` }}
        />
        <div
          role="slider"
          tabIndex={0}
          aria-label={sliderLabel}
          aria-orientation="horizontal"
          aria-valuemin={Math.round(MIN)}
          aria-valuemax={Math.round(MAX)}
          aria-valuenow={Math.round(split)}
          aria-valuetext={`${Math.round(split)}%`}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            follow(event);
          }}
          onPointerMove={(event) => {
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              follow(event);
            }
          }}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 size-[0.49rem] -translate-x-1/2 -translate-y-1/2 cursor-e-resize touch-none rounded-full bg-cover bg-no-repeat focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          style={{ ...handle, left: `${split}%` }}
        />
      </div>
      <p className="my-[0.2rem] flex justify-between text-[0.18rem] leading-[1em] text-[#2f2f2f]">
        <span>{lowCaption}</span>
        <span>{highCaption}</span>
      </p>
    </div>
  );
}
