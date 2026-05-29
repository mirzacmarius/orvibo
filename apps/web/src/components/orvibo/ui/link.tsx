import type { VariantProps } from "class-variance-authority";
import NextLink, { type LinkProps } from "next/link";
import type * as React from "react";
import { cn } from "@v1/ui/utils";
import { Button } from "./button";
import type { ButtonProps, buttonVariants } from "./button";

type LinkVariant = VariantProps<typeof buttonVariants>;

export interface LinkComponentProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkVariant {
  button?: boolean;
}

export function Link({
  button = false,
  children,
  className,
  size,
  variant,
  ...props
}: LinkComponentProps) {
  if (button) {
    return (
      <Button
        asChild
        className={className}
        size={size as ButtonProps["size"]}
        variant={variant as ButtonProps["variant"]}
      >
        <NextLink {...props}>{children}</NextLink>
      </Button>
    );
  }

  return (
    <NextLink
      className={cn(
        "text-orvibo-link transition-colors hover:text-orvibo-link-hover active:text-orvibo-link-active",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
