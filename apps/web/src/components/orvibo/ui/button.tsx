import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@v1/ui/utils";

const buttonVariants = cva(
  "relative inline-flex h-[40px] items-center justify-center overflow-hidden whitespace-nowrap rounded-[4px] border px-[24px] text-[16px] font-medium leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orvibo-link focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-transparent disabled:bg-[#d9d9d9] disabled:text-orvibo-fg/40 disabled:opacity-100 before:absolute before:inset-y-0 before:left-0 before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full",
  {
    variants: {
      variant: {
        primary:
          "border-orvibo-link bg-orvibo-link text-white before:bg-orvibo-link-hover active:before:bg-orvibo-link-active",
        black:
          "rounded-[2px] border-orvibo-fg bg-transparent text-orvibo-fg before:bg-orvibo-fg hover:text-white",
        white:
          "rounded-[2px] border-white bg-transparent text-white before:bg-white hover:text-orvibo-fg",
      },
      size: {
        default: "h-[40px] px-[24px] text-[16px]",
        resizable:
          "h-[calc(var(--orvibo-rem-scale)*0.4)] rounded-[calc(var(--orvibo-rem-scale)*0.04)] px-[calc(var(--orvibo-rem-scale)*0.24)] text-[calc(var(--orvibo-rem-scale)*0.16)]",
        wide: "h-[calc(var(--orvibo-rem-scale)*0.4)] rounded-[calc(var(--orvibo-rem-scale)*0.04)] px-[calc(var(--orvibo-rem-scale)*0.56)] text-[calc(var(--orvibo-rem-scale)*0.16)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
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
        className={cn(buttonVariants({ className, size, variant }))}
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
