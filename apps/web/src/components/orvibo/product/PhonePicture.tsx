import { cn } from "@v1/ui/utils";
import type { ReactNode } from "react";

/** A picture's width and height, and a part of it (left, top, right, bottom), in one unit: hundreds of its pixels. */
type Size = readonly [number, number];
type Part = readonly [number, number, number, number];

interface PhonePictureProps {
  /** The picture's URL, resolved (e.g. by `img()`, for a translated copy). */
  src: string;
  size: Size;
  /** The part shown; the whole picture when left out. */
  part?: Part;
  alt?: string;
  className?: string;
  /** Words laid over the picture, placed by the caller. */
  children?: ReactNode;
}

/**
 * A part of one of a product page's pictures, for its phone layout (ProductDefinition.PhoneView): as wide as its box
 * and as tall as the part's shape makes it, so one wide desktop picture can give a phone its product, its room or
 * its words. It loads when it comes near the screen.
 */
export function PhonePicture({
  src,
  size: [width, height],
  part = [0, 0, width, height],
  alt = "",
  className,
  children,
}: PhonePictureProps) {
  const [left, top, right, bottom] = part;
  const partWidth = right - left;
  const partHeight = bottom - top;
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio: `${partWidth} / ${partHeight}` }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute max-w-none"
        style={{
          width: `${(width / partWidth) * 100}%`,
          left: `${(-left / partWidth) * 100}%`,
          top: `${(-top / partHeight) * 100}%`,
        }}
      />
      {children}
    </div>
  );
}
