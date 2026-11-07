import type { Locale } from "./i18n";

/**
 * A price in lei the Romanian way: "1.299 lei", "349,90 lei" (dot for thousands, comma for decimals, a no-break space
 * before "lei"; decimals only when there are bani). `amount` is in bani, an integer, as Medusa stores RON prices.
 */
export function formatLei(amount: number, locale: Locale = "ro") {
  const hasBani = amount % 100 !== 0;
  const number = new Intl.NumberFormat(locale === "ro" ? "ro-RO" : "en-GB", {
    minimumFractionDigits: hasBani ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(amount / 100);
  return `${number} lei`;
}
