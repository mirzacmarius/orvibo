import NextLink, { type LinkProps } from "next/link";
import type * as React from "react";
import { cn } from "@/lib/orvibo/cn";

export interface TextLinkProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {}

/**
 * A link inside running text: `accent-ink`, underlined on hover. Navigation (header, footer, breadcrumbs) uses `Link`
 * instead, which inherits its colour. The `!` beats the site's `.orvibo-site a { color: inherit }` reset.
 */
export function TextLink({ className, ...props }: TextLinkProps) {
  return (
    <NextLink
      className={cn(
        "ov-motion ov-focus-ring rounded-ov-xs !text-ov-accent-ink underline-offset-[3px] transition-colors duration-300 hover:!text-ov-accent hover:underline",
        className,
      )}
      {...props}
    />
  );
}
