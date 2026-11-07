import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/orvibo/cn";

const TONES = {
  info: { ground: "bg-ov-info-soft", icon: "text-ov-accent", Icon: Info },
  success: {
    ground: "bg-ov-success-soft",
    icon: "text-ov-success",
    Icon: CheckCircle2,
  },
  warning: {
    ground: "bg-ov-warning-soft",
    icon: "text-ov-warning",
    Icon: AlertTriangle,
  },
  danger: {
    ground: "bg-ov-danger-soft",
    icon: "text-ov-danger",
    Icon: AlertTriangle,
  },
} as const;

export interface NoticeProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: keyof typeof TONES;
  /** The bold first phrase: what happened or what is true. */
  title: string;
}

/** A short message in the flow of the page: an icon, a bold first phrase, then one sentence on what to do. */
export function Notice({
  children,
  className,
  title,
  tone = "info",
  ...props
}: NoticeProps) {
  const { ground, icon, Icon } = TONES[tone];
  return (
    <div
      className={cn(
        "flex items-start gap-ov-3 rounded-ov-s p-ov-4 text-ov-body-s text-ov-ink",
        ground,
        className,
      )}
      role={tone === "danger" ? "alert" : "status"}
      {...props}
    >
      <Icon
        aria-hidden="true"
        className={cn("mt-[2px] h-[18px] w-[18px] shrink-0", icon)}
        strokeWidth={1.8}
      />
      <p>
        <strong className="font-bold">{title}</strong>
        {children ? <> {children}</> : null}
      </p>
    </div>
  );
}
