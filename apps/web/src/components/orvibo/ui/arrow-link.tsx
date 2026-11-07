import NextLink, { type LinkProps } from "next/link";
import type * as React from "react";
import { OrviboCaretRight } from "@/components/orvibo/icons";
import { cn } from "@/lib/orvibo/cn";

export interface ArrowLinkProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {}

/** "Află mai multe ›": a text action with a chevron and a 2px underline that grows on hover (pictures, films, cards). */
export function ArrowLink({ children, className, ...props }: ArrowLinkProps) {
  return (
    <NextLink
      className={cn(
        "ov-motion ov-focus-ring group relative inline-flex items-center gap-ov-1 text-[16px] font-semibold leading-[22px] !text-ov-ink after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
        className,
      )}
      {...props}
    >
      {children}
      <OrviboCaretRight aria-hidden="true" className="translate-y-[1px]" />
    </NextLink>
  );
}
