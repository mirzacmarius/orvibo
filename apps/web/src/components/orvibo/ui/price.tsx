import type { Locale } from "@/lib/orvibo/i18n";
import { formatLei } from "@/lib/orvibo/money";
import { cn } from "@/lib/orvibo/cn";

export interface PriceProps {
  /** In bani (an integer), as Medusa stores RON prices. */
  amount: number;
  /** The old price, in bani, when the product is on sale. */
  compareAt?: number;
  locale?: Locale;
  /** `l` on the buy box and the cart total, `s` on cards and cart lines. */
  size?: "l" | "s";
  /** A note after the price, e.g. "TVA inclus" (once per page). */
  note?: string;
  className?: string;
}

/** A price in lei: "1.299 lei". On sale, the new price in `danger` and the old one struck through after it. */
export function Price({
  amount,
  className,
  compareAt,
  locale = "ro",
  note,
  size = "s",
}: PriceProps) {
  const onSale = compareAt !== undefined && compareAt > amount;
  return (
    <span
      className={cn(
        "inline-flex flex-wrap items-baseline gap-x-ov-2 tabular-nums",
        className,
      )}
    >
      <span
        className={cn(
          size === "l" ? "text-ov-price" : "text-ov-price-s",
          onSale ? "text-ov-danger" : "text-ov-ink",
        )}
      >
        {formatLei(amount, locale)}
      </span>
      {onSale ? (
        <s className="text-ov-body-s text-ov-ink-muted">
          {formatLei(compareAt, locale)}
        </s>
      ) : null}
      {note ? (
        <span className="text-ov-caption text-ov-ink-muted">{note}</span>
      ) : null}
    </span>
  );
}
