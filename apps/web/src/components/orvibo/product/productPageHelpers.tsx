import { type CSSProperties, Fragment, type ReactNode } from "react";
import type { Locale } from "@/lib/orvibo/i18n";
import { localizedAssetUrl } from "@/lib/orvibo/localizedAsset";
import type { ProductPageText } from "@/lib/orvibo/products/page-text";

function withLineBreaks(value: string): ReactNode {
  if (!value.includes("\n")) return value;
  const parts: ReactNode[] = [];
  const seen = new Map<string, number>();
  for (const line of value.split("\n")) {
    const count = (seen.get(line) ?? 0) + 1;
    seen.set(line, count);
    const key = `${line}-${count}`;
    if (parts.length > 0) parts.push(<br key={`br-${key}`} />);
    parts.push(<Fragment key={key}>{line}</Fragment>);
  }
  return parts;
}

/**
 * Helpers for product views converted from orvibo.com.
 *
 * - `t(key)` renders a string from the page's text file; `\n` becomes `<br />`.
 * - `ts(key)` returns the same string as plain text (for `alt` and `aria-label`).
 * - `lines(value)` renders any string with `\n` as line breaks.
 * - `img(path)` resolves an image, using its translated copy when there is one.
 * - `bg(path)` is `img` wrapped in a `backgroundImage` style.
 * - `pseudoBg("before" | "after", path)` sets `--before-bg` / `--after-bg`
 *   for a `before:bg-[image:var(--before-bg)]` class.
 *
 * A key missing from the text file renders as the key itself, so gaps are easy
 * to spot.
 */
export function productPageHelpers(locale: Locale, text: ProductPageText) {
  const ts = (key: string) => text[key] ?? key;
  const img = (path: string) => localizedAssetUrl(path, locale);
  return {
    t: (key: string) => withLineBreaks(ts(key)),
    ts,
    lines: withLineBreaks,
    img,
    bg: (path: string): CSSProperties => ({
      backgroundImage: `url(${img(path)})`,
    }),
    pseudoBg: (pseudo: "before" | "after", path: string) =>
      ({ [`--${pseudo}-bg`]: `url(${img(path)})` }) as CSSProperties,
  };
}
