import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * `cn` for the design system's Tailwind names. Plain tailwind-merge reads `text-ov-title-l` (a font size) and
 * `text-ov-ink` (a colour) as the same group and drops one of them; this one knows the `ov` sizes.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "ov-title-l",
            "ov-title-m",
            "ov-title-s",
            "ov-body",
            "ov-body-s",
            "ov-caption",
            "ov-label",
            "ov-nav",
            "ov-price",
            "ov-price-s",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
