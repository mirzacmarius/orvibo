"use client";

import { cn } from "@/lib/orvibo/cn";

export interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  /** The stock left. */
  max?: number;
  size?: "m" | "s";
  labels?: { decrease: string; increase: string; quantity: string };
  className?: string;
}

const RO_LABELS = {
  decrease: "Scade cantitatea",
  increase: "Crește cantitatea",
  quantity: "Cantitate",
};

/** Minus, the number, plus, in a pill. Minus stops at `min` (1); removing a line is a separate action. */
export function QuantityStepper({
  className,
  labels = RO_LABELS,
  max = Number.POSITIVE_INFINITY,
  min = 1,
  onChange,
  size = "m",
  value,
}: QuantityStepperProps) {
  const button = cn(
    "ov-motion h-full rounded-ov-pill text-ov-ink transition-colors duration-300 hover:bg-ov-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ov-accent disabled:cursor-not-allowed disabled:bg-transparent disabled:text-ov-ink-disabled",
    size === "s" ? "w-ov-control-s text-[16px]" : "w-ov-control-m text-[20px]",
  );
  return (
    <div
      aria-label={labels.quantity}
      className={cn(
        "inline-flex items-center rounded-ov-pill border border-ov-line-strong bg-ov-surface tabular-nums",
        size === "s" ? "h-ov-control-s" : "h-ov-control-m",
        className,
      )}
      role="group"
    >
      <button
        aria-label={labels.decrease}
        className={button}
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
        type="button"
      >
        −
      </button>
      <output
        aria-live="polite"
        className="min-w-[32px] text-center text-[16px] font-semibold leading-[24px]"
      >
        {value}
      </output>
      <button
        aria-label={labels.increase}
        className={button}
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
        type="button"
      >
        +
      </button>
    </div>
  );
}
