import type { Locale } from "@/lib/orvibo/i18n";
import { localizedAssetUrl } from "@/lib/orvibo/localizedAsset";
import type { ProductPageText } from "@/lib/orvibo/products/page-text";
import { cn } from "@v1/ui/utils";
import { type CSSProperties, Fragment, type ReactNode } from "react";

/**
 * How one run of words sits on a picture. Everything is in the picture's own proportions, so the words scale with
 * it: `x`, sizes and paddings in % of its width, `y` in % of its height.
 */
export interface TextImageStyle {
  /** Where the run is anchored across: its left edge, middle or right edge, as `align` says. */
  x: number;
  /** The run's vertical middle. */
  y: number;
  /** Which side of the run sits at `x`, and how its lines line up. Default `center`. */
  align?: "left" | "center" | "right";
  /** Font size. */
  size: number;
  /** Inter weight. Default 400. */
  weight?: number;
  color?: string;
  /** Line height, unitless. Default 1.25. */
  leading?: number;
  /** Letter spacing, in em. */
  tracking?: number;
  /** Degrees clockwise, about the run's middle. */
  rotate?: number;
  opacity?: number;
  /** A CSS text-shadow. */
  shadow?: string;
  /** The colour of the parts of the words written {like this}. */
  accent?: string;
  /** A pill behind the words, as wide as they are plus `padX` on each side. */
  pill?: {
    height: number;
    padX: number;
    radius: number;
    fill?: string;
    /** An outline instead of (or with) the fill: its width and colour. */
    border?: number;
    borderColor?: string;
  };
  /** A small picture before the words (a numbered badge): its width and height, and the gap after it. */
  icon?: { src: string; width: number; height: number; gap: number };
}

export interface TextImageLabel extends TextImageStyle {
  /** The words' key in the page's text file: `\n` breaks a line, {…} marks the accent. An empty string hides the
   * run in that language. */
  k: string;
  /** Changes in one language (a longer Romanian line set smaller or placed elsewhere). */
  ro?: Partial<TextImageStyle>;
  en?: Partial<TextImageStyle>;
  /** Changes on phones (below 1024 px): bigger words when a desktop picture is shown on a phone, say. */
  phone?: Partial<TextImageStyle>;
}

/** A picture without its words, and its words as runs of text placed on it. */
export interface TextImagePicture {
  /** The picture without its words (one copy for every language). */
  src: string;
  width: number;
  height: number;
  labels: TextImageLabel[];
}

/** Words with {…} parts in the accent colour. */
function accented(words: string, accent: string | undefined): ReactNode {
  if (!words.includes("{")) return words;
  return words.split(/\{([^}]*)\}/).map((part, i) =>
    i % 2 === 1 ? (
      // biome-ignore lint/suspicious/noArrayIndexKey: the parts of a fixed string
      <span key={i} style={{ color: accent }}>
        {part}
      </span>
    ) : (
      // biome-ignore lint/suspicious/noArrayIndexKey: the parts of a fixed string
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function Run({
  words,
  s,
  locale,
  className,
}: {
  words: string;
  s: TextImageStyle;
  locale: Locale;
  className?: string;
}) {
  const align = s.align ?? "center";
  const shift = align === "left" ? 0 : align === "right" ? -100 : -50;
  const style: CSSProperties = {
    left: `${s.x}%`,
    top: `${s.y}%`,
    transform: `translate(${shift}%, -50%)${s.rotate ? ` rotate(${s.rotate}deg)` : ""}`,
    fontSize: `${s.size}cqw`,
    lineHeight: s.leading ?? 1.25,
    fontWeight: s.weight ?? 400,
    color: s.color,
    letterSpacing: s.tracking ? `${s.tracking}em` : undefined,
    opacity: s.opacity,
    textShadow: s.shadow,
    textAlign: align,
  };
  const { pill, icon } = s;
  if (pill) {
    style.height = `${pill.height}cqw`;
    style.paddingInline = `${pill.padX}cqw`;
    style.borderRadius = `${pill.radius}cqw`;
    style.background = pill.fill;
    if (pill.border)
      style.border = `${pill.border}cqw solid ${pill.borderColor ?? s.color}`;
  }
  return (
    <span
      className={cn(
        "absolute whitespace-pre",
        (pill || icon) && "flex items-center justify-center",
        className,
      )}
      style={style}
    >
      {icon && (
        <img
          src={localizedAssetUrl(icon.src, locale)}
          alt=""
          width={icon.width}
          height={icon.height}
          className="block shrink-0"
          style={{
            width: `${icon.width}cqw`,
            height: "auto",
            marginRight: `${icon.gap}cqw`,
          }}
        />
      )}
      {icon ? (
        <span>{accented(words, s.accent)}</span>
      ) : (
        accented(words, s.accent)
      )}
    </span>
  );
}

/**
 * A picture whose words are HTML: the picture without them, and each run of words placed where the picture had it,
 * in the same font, size and colour, scaled with the picture (container query units). The words come from the
 * page's text file, so they change per language, and can be edited, without redrawing the picture.
 *
 * The box is the picture's own size (as wide as its parent, height by its ratio). Where a section shows the picture
 * as a cropped background, place this box in the section the same way (e.g. centred with `absolute top-1/2
 * -translate-y-1/2`) and let the section clip it.
 */
export function TextImage({
  picture,
  locale,
  text,
  className,
  style,
}: {
  picture: TextImagePicture;
  locale: Locale;
  text: ProductPageText;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "relative font-orvibo normal-case tracking-normal [container-type:inline-size]",
        className,
      )}
      style={style}
    >
      <img
        src={localizedAssetUrl(picture.src, locale)}
        alt=""
        width={picture.width}
        height={picture.height}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
      {picture.labels.map((label) => {
        const words = text[label.k] ?? label.k;
        if (!words) return null;
        const { k, ro, en, phone, ...base } = label;
        const s = { ...base, ...(locale === "ro" ? ro : en) };
        const key = `${k}@${label.x},${label.y}`;
        if (!phone)
          return <Run key={key} words={words} s={s} locale={locale} />;
        return (
          <Fragment key={key}>
            <Run
              words={words}
              s={s}
              locale={locale}
              className="max-lg:hidden"
            />
            <Run
              words={words}
              s={{ ...s, ...phone }}
              locale={locale}
              className="lg:hidden"
            />
          </Fragment>
        );
      })}
    </div>
  );
}
