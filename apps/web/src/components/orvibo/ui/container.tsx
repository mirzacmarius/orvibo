import * as React from "react";
import { cn } from "@v1/ui/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: "page" | "content";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, width = "page", ...props }, ref) => (
    <div
      className={cn(
        "mx-auto w-full px-[24px]",
        width === "page" ? "max-w-orvibo" : "max-w-[1200px]",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Container.displayName = "Container";
