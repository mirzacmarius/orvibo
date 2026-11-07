import NextLink from "next/link";
import { cn } from "@/lib/orvibo/cn";
import { Button } from "./button";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  /** Space above the title, in stage units (× --orvibo-rem-scale). */
  topMargin?: number;
  className?: string;
}

/**
 * Opens a home or landing section: a centred stage title (0.48 stage units, 800, tracked), an `ink-muted` subtitle
 * (0.28) and one outline Button. Sizes follow the viewport like the orvibo.com sections around it.
 */
export function SectionHeading({
  className,
  ctaHref,
  ctaLabel,
  subtitle,
  title,
  topMargin = 0.8,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("flex flex-col items-center text-center", className)}
      style={{ marginTop: `calc(var(--orvibo-rem-scale) * ${topMargin})` }}
    >
      <h2 className="text-balance text-[calc(var(--orvibo-rem-scale)*0.48)] font-extrabold leading-[calc(var(--orvibo-rem-scale)*0.67)] tracking-[calc(var(--orvibo-rem-scale)*0.02)] text-ov-ink">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-[calc(var(--orvibo-rem-scale)*0.12)] text-[calc(var(--orvibo-rem-scale)*0.28)] leading-normal tracking-[calc(var(--orvibo-rem-scale)*0.01)] text-ov-ink-muted">
          {subtitle}
        </p>
      ) : null}
      {ctaHref && ctaLabel ? (
        <Button
          asChild
          className="mt-[calc(var(--orvibo-rem-scale)*0.44)] px-[calc(var(--orvibo-rem-scale)*0.48)]"
          variant="outline"
        >
          <NextLink href={ctaHref}>{ctaLabel}</NextLink>
        </Button>
      ) : null}
    </div>
  );
}
