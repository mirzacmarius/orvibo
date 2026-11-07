import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/orvibo/cn";

/**
 * The design system's Button: `primary` (ink fill) once per view for the thing the page is for, `outline` (the ORVIBO
 * sweep button: a fill slides in from the left on hover) for everything else. Inside an `ov-band` both invert by
 * themselves; `white` is the outline button forced white, for films and pictures that are not a band.
 *
 * Text colours carry `!` because `.orvibo-site a { color: inherit }` otherwise wins on a `<Link button>`.
 */
const buttonVariants = cva(
  "ov-motion relative isolate inline-flex items-center justify-center gap-ov-2 overflow-hidden whitespace-nowrap border font-orvibo font-medium leading-none transition-colors duration-300 ease-in-out before:absolute before:inset-y-0 before:left-0 before:-z-10 before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ov-accent disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-transparent disabled:bg-ov-surface-muted disabled:!text-ov-ink-disabled disabled:before:hidden",
  {
    variants: {
      variant: {
        primary:
          "rounded-ov-s border-ov-ink bg-ov-ink !text-ov-on-ink before:bg-ov-ink-hover",
        outline:
          "rounded-ov-xs border-ov-ink bg-transparent !text-ov-ink before:bg-ov-ink hover:!text-ov-on-ink",
        /** @deprecated The old name of `outline`. */
        black:
          "rounded-ov-xs border-ov-ink bg-transparent !text-ov-ink before:bg-ov-ink hover:!text-ov-on-ink",
        white:
          "rounded-ov-xs border-white bg-transparent !text-white before:bg-white hover:!text-[#111111]",
      },
      size: {
        s: "h-ov-control-s px-ov-4 text-[14px]",
        m: "h-ov-control-m px-ov-6 text-[16px]",
        l: "h-ov-control-l px-ov-8 text-[16px]",
        /** @deprecated The old name of `m`. */
        default: "h-ov-control-m px-ov-6 text-[16px]",
        /** Stage sizes: scale with the viewport like the orvibo.com sections around them. */
        resizable:
          "h-[calc(var(--orvibo-rem-scale)*0.4)] rounded-[calc(var(--orvibo-rem-scale)*0.04)] px-[calc(var(--orvibo-rem-scale)*0.24)] text-[calc(var(--orvibo-rem-scale)*0.16)]",
        wide: "h-[calc(var(--orvibo-rem-scale)*0.4)] rounded-[calc(var(--orvibo-rem-scale)*0.04)] px-[calc(var(--orvibo-rem-scale)*0.56)] text-[calc(var(--orvibo-rem-scale)*0.16)]",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "m",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, children, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ size, variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
