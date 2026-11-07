import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/orvibo/cn";

const badgeVariants = cva(
  "inline-flex h-[24px] items-center gap-ov-1 whitespace-nowrap rounded-ov-pill text-[12px] font-semibold leading-none",
  {
    variants: {
      tone: {
        /** "Nou". */
        new: "bg-ov-champagne px-ov-3 text-[#111111]",
        /** A discount: "−15%". */
        sale: "bg-ov-danger px-ov-3 text-white",
        /** A protocol or property: "Zigbee". */
        neutral: "bg-ov-surface-muted px-ov-3 text-ov-ink",
        /** "În stoc": a dot and words, no fill. */
        stock: "text-ov-success",
        /** "Ultimele 3 bucăți". */
        low: "text-ov-warning",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/** A short label on a product. The words carry the meaning; colour only helps. One per card. */
export function Badge({ children, className, tone, ...props }: BadgeProps) {
  const dot = tone === "stock" || tone === "low";
  return (
    <span className={cn(badgeVariants({ tone }), className)} {...props}>
      {dot ? (
        <span
          aria-hidden="true"
          className="h-[8px] w-[8px] rounded-full bg-current"
        />
      ) : null}
      {children}
    </span>
  );
}

export { badgeVariants };
