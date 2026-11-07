import * as React from "react";
import { cn } from "@/lib/orvibo/cn";

/** A white `surface` panel on the paper page for one task. No border, no shadow; cards never nest. */
export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "flex flex-col gap-ov-4 rounded-ov-s bg-ov-surface p-ov-4 text-ov-ink sm:p-ov-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Card.displayName = "Card";

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("text-ov-title-m", className)} {...props} />;
}

export function CardText({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-ov-body text-ov-ink-muted", className)} {...props} />
  );
}
