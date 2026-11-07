"use client";

import { cn } from "@v1/ui/utils";
import Image from "next/image";
import { type CSSProperties, type ReactNode, useId, useState } from "react";

/**
 * Where each device sits in sec11's 16rem frame, in orvibo.com's order
 * (icon1..6 and item1..6): its icon, its card and the blue connector from
 * the icon to the card (lines and a dot, drawn into orvibo.com's card
 * pictures). The cards keep orvibo.com's edge on the connector's side and
 * grow away from it with longer text: the camera's to the left (the motion
 * sensor's card is on its right), the motion sensor's and the lock's wrap
 * before they reach the next connector or card. `thumb` is the product
 * picture's size and its gap from the card's left edge.
 */
const SPOTS = [
  {
    icon: "left-[3.05rem] top-[6.68rem]",
    card: "right-[10.2rem] bottom-[7.75rem] min-w-[3.67rem] pl-[0.23rem]",
    text: "max-w-[3.8rem]",
    thumb: "h-[0.48rem] w-[0.35rem]",
    size: [35, 48],
    lines: ["left-[3.31rem] top-[3.35rem] h-[3.28rem] w-px"],
    dot: "left-[3.28rem] top-[3.32rem]",
  },
  {
    icon: "left-[4.05rem] top-[7.39rem]",
    card: "left-[4.67rem] top-[9.17rem] pl-[0.27rem]",
    text: "max-w-[2.5rem]",
    thumb: "h-[0.52rem] w-[0.3rem]",
    size: [30, 52],
    lines: [
      "left-[4.32rem] top-[8.12rem] h-[1.5rem] w-px",
      "left-[4.32rem] top-[9.62rem] h-px w-[0.25rem]",
    ],
    dot: "left-[4.54rem] top-[9.59rem]",
  },
  {
    icon: "left-[6.27rem] top-[5.78rem]",
    card: "left-[5.92rem] bottom-[7.75rem] pl-[0.18rem]",
    text: "max-w-[1.7rem]",
    thumb: "h-[0.46rem] w-[0.39rem]",
    size: [39, 46],
    lines: ["left-[6.52rem] top-[3.35rem] h-[2.2rem] w-px"],
    dot: "left-[6.49rem] top-[3.32rem]",
  },
  {
    icon: "left-[7.23rem] top-[7.55rem]",
    card: "left-[8.48rem] top-[9.17rem] pl-[0.15rem]",
    text: "max-w-[3.6rem]",
    thumb: "h-[0.48rem] w-[0.38rem]",
    size: [38, 48],
    lines: [
      "left-[7.95rem] top-[7.82rem] h-px w-[1.4rem]",
      "left-[9.34rem] top-[7.82rem] h-[1.23rem] w-px",
    ],
    dot: "left-[9.31rem] top-[9.02rem]",
  },
  {
    icon: "left-[8.6rem] top-[4.68rem]",
    card: "left-[9.57rem] top-[3.16rem] -translate-y-1/2 pl-[0.24rem]",
    text: "max-w-[4.2rem]",
    thumb: "h-[0.46rem] w-[0.46rem]",
    size: [46, 46],
    lines: [
      "left-[8.84rem] top-[3.16rem] h-px w-[0.62rem]",
      "left-[8.84rem] top-[3.16rem] h-[1.27rem] w-px",
    ],
    dot: "left-[9.43rem] top-[3.13rem]",
  },
  {
    icon: "left-[11.75rem] top-[7.77rem]",
    card: "right-[2.18rem] bottom-[5.84rem] pl-[0.24rem]",
    text: "max-w-[3.6rem]",
    thumb: "h-[0.42rem] w-[0.47rem]",
    size: [47, 42],
    lines: [
      "left-[13.58rem] top-[5.27rem] h-[2.8rem] w-px",
      "left-[12.48rem] top-[8.07rem] h-px w-[1.11rem]",
    ],
    dot: "left-[13.56rem] top-[5.24rem]",
  },
] as const;

export interface YuntaiDevice {
  key: string;
  /** The device's name as plain text, for its icon. */
  name: string;
  title: ReactNode;
  desc: ReactNode;
  /** The icon, as a background style. */
  icon: CSSProperties;
  /** URL of the product picture on the card. */
  thumb: string;
}

interface YuntaiDevicesProps {
  /** The six devices, in SPOTS order. */
  devices: YuntaiDevice[];
  /** The ring around every icon, as `pseudoBg("after", …)`. */
  ring: CSSProperties;
}

/**
 * The devices around the house in "Smart security that works together": a
 * blue icon on each, ringed by a pulse (orvibo.com's sh-ripple). Choosing an
 * icon fades in the device's card and its connector (jQuery's fadeIn, 0.4 s);
 * choosing it again hides them (orvibo.com keeps them).
 */
export function YuntaiDevices({ devices, ring }: YuntaiDevicesProps) {
  const id = useId();
  const [open, setOpen] = useState<string[]>([]);
  const toggle = (key: string) =>
    setOpen((keys) =>
      keys.includes(key) ? keys.filter((k) => k !== key) : [...keys, key],
    );

  return devices.map((device, index) => {
    const spot = SPOTS[index];
    if (!spot) return null;
    const shown = open.includes(device.key);
    return (
      <div key={device.key}>
        <button
          type="button"
          aria-label={device.name}
          aria-expanded={shown}
          aria-controls={`${id}-${device.key}`}
          onClick={() => toggle(device.key)}
          className={cn(
            "absolute flex size-[0.6rem] cursor-pointer items-center justify-center rounded-full bg-[length:0.53rem_0.53rem] bg-center bg-no-repeat after:pointer-events-none after:absolute after:top-[-0.175rem] after:left-[-0.175rem] after:size-[0.95rem] after:bg-[image:var(--after-bg)] after:bg-[length:0.95rem_0.95rem] after:bg-center after:bg-no-repeat after:content-[''] after:animate-hotspot-ripple motion-reduce:after:animate-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d7fef]",
            spot.icon,
          )}
          style={{ ...device.icon, ...ring }}
        />
        <div
          id={`${id}-${device.key}`}
          className={cn(
            "transition-[opacity,visibility] [transition-duration:400ms] motion-reduce:transition-none",
            shown ? "visible opacity-100" : "invisible opacity-0",
          )}
        >
          {spot.lines.map((line) => (
            <span key={line} className={`absolute bg-[#0590f5] ${line}`} />
          ))}
          <span
            className={`absolute size-[0.06rem] rounded-full bg-[#0590f5] ${spot.dot}`}
          />
          <div
            className={cn(
              "absolute flex min-h-[0.77rem] items-center gap-x-[0.21rem] rounded-[0.07rem] bg-[rgba(198,198,198,0.06)] py-[0.12rem] pr-[0.3rem] text-left",
              spot.card,
            )}
          >
            <Image
              src={device.thumb}
              alt=""
              width={spot.size[0]}
              height={spot.size[1]}
              unoptimized
              className={cn("shrink-0", spot.thumb)}
            />
            <div className={spot.text}>
              <p className="text-[0.16rem] leading-[0.2rem] text-[#b2b2b2]">
                {device.title}
              </p>
              <p className="mt-[0.03rem] text-[0.14rem] leading-[0.2rem] text-[#878787]">
                {device.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
