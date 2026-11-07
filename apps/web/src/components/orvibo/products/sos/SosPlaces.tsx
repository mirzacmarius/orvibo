"use client";

import { cn } from "@v1/ui/utils";
import { type CSSProperties, type ReactNode, useState } from "react";

/**
 * Each place's glyph in orvibo.com's icon sprite: its size, its grey and green
 * positions, and the green one again for hover.
 */
const GLYPHS = [
  {
    size: "h-[26px] w-[26px]",
    grey: "bg-[position:0_-104px] group-hover:bg-[position:0_-130px]",
    green: "bg-[position:0_-130px]",
  },
  {
    size: "h-[27px] w-[22px]",
    grey: "bg-[position:0_-26px] group-hover:bg-[position:0_0]",
    green: "bg-[position:0_0]",
  },
  {
    size: "h-[26px] w-[23px]",
    grey: "bg-[position:0_-52px] group-hover:bg-[position:0_-78px]",
    green: "bg-[position:0_-78px]",
  },
];

export interface SosPlace {
  key: string;
  label: ReactNode;
  /** The place's photo, as a background style. */
  photo: CSSProperties;
}

interface SosPlacesProps {
  heading: ReactNode;
  /** Hospital, kindergarten and care home, in GLYPHS order. */
  places: SosPlace[];
  /** Background styles of the round buttons (grey, green) and the glyph sprite. */
  ringGrey: CSSProperties;
  ringGreen: CSSProperties;
  sprite: CSSProperties;
}

/**
 * "More places to use it": a photo on the left half and round buttons on the
 * right; choosing a place shows its photo and turns its button green, as
 * orvibo.com's click handler does. The three photos are stacked so the next
 * one is loaded before it is chosen.
 */
export function SosPlaces({
  heading,
  places,
  ringGrey,
  ringGreen,
  sprite,
}: SosPlacesProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex h-[777px]">
      <div className="relative w-1/2" aria-hidden>
        {places.map((place, index) => (
          <div
            key={place.key}
            className={cn(
              "absolute inset-0 bg-center bg-no-repeat",
              index !== active && "invisible",
            )}
            style={place.photo}
          />
        ))}
      </div>
      <div className="pl-[80px]">
        <h2 className="mb-[110px] pt-[400px] text-[34px] text-[#333333]">
          {heading}
        </h2>
        <ul className="flex gap-x-[40px]">
          {places.map((place, index) => {
            const on = index === active;
            const glyph = GLYPHS[index];
            return (
              <li key={place.key}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(index)}
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <span
                    className="mb-[20px] block h-[70px] w-[70px] bg-no-repeat pt-[20px]"
                    style={on ? ringGreen : ringGrey}
                  >
                    <span
                      className={cn(
                        "mx-auto block bg-no-repeat",
                        glyph?.size,
                        on ? glyph?.green : glyph?.grey,
                      )}
                      style={sprite}
                    />
                  </span>
                  <span className={on ? "text-[#32d052]" : "text-[#cfcfcf]"}>
                    {place.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
