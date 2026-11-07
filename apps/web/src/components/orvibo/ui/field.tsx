import { ChevronDown } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/orvibo/cn";

const control =
  "ov-motion h-ov-control-l w-full rounded-ov-s border bg-ov-surface px-ov-4 text-ov-body text-ov-ink transition-colors duration-300 placeholder:text-ov-ink-muted hover:border-ov-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ov-accent disabled:cursor-not-allowed disabled:bg-ov-surface-muted disabled:text-ov-ink-disabled";

export interface FieldProps {
  id: string;
  label: string;
  /** Help under the control; replaced by `error` when there is one. */
  help?: string;
  /** Says what is wrong and how to fix it ("Numărul are 10 cifre…"). */
  error?: string;
  className?: string;
  children: (props: {
    id: string;
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
  }) => React.ReactNode;
}

/** A label above a control and help or error text below it. Render the control with the props it passes. */
export function Field({
  children,
  className,
  error,
  help,
  id,
  label,
}: FieldProps) {
  const note = error ?? help;
  const noteId = note ? `${id}-note` : undefined;
  return (
    <div className={cn("flex flex-col gap-ov-2", className)}>
      <label className="text-ov-label text-ov-ink" htmlFor={id}>
        {label}
      </label>
      {children({
        id,
        "aria-describedby": noteId,
        "aria-invalid": error ? true : undefined,
      })}
      {note ? (
        <p
          className={cn(
            "text-ov-body-s",
            error ? "text-ov-danger" : "text-ov-ink-muted",
          )}
          id={noteId}
        >
          {note}
        </p>
      ) : null}
    </div>
  );
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    className={cn(
      control,
      "border-ov-line-strong aria-[invalid=true]:border-ov-danger",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => (
  <span className="relative block">
    <select
      className={cn(
        control,
        "appearance-none border-ov-line-strong pr-ov-12 aria-[invalid=true]:border-ov-danger",
        className,
      )}
      ref={ref}
      {...props}
    />
    <ChevronDown
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-ov-4 h-[16px] w-[16px] -translate-y-1/2 text-ov-ink"
      strokeWidth={1.8}
    />
  </span>
));
Select.displayName = "Select";

export interface ChoiceProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: "checkbox" | "radio";
  label: React.ReactNode;
}

/** A checkbox or radio with its whole label clickable: a 20px box, `accent` when checked. */
export const Choice = React.forwardRef<HTMLInputElement, ChoiceProps>(
  ({ className, label, type = "checkbox", ...props }, ref) => (
    <label
      className={cn(
        "inline-flex cursor-pointer items-center gap-ov-3 text-ov-body text-ov-ink",
        className,
      )}
    >
      <input
        className={cn(
          "peer h-[20px] w-[20px] shrink-0 cursor-pointer border-ov-line-strong accent-[var(--ov-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ov-accent",
          type === "radio" ? "rounded-full" : "rounded-ov-xs",
        )}
        ref={ref}
        type={type}
        {...props}
      />
      {label}
    </label>
  ),
);
Choice.displayName = "Choice";
