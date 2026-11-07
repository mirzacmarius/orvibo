import { cn } from "@v1/ui/utils";
import { Fragment, type ReactNode } from "react";

/** A string in two tones: its [bracketed] words in `accent`; a "*" is a small raised footnote mark; "\n" breaks the line. */
export function richWords(value: string, accent = ""): ReactNode {
  const seen = new Map<string, number>();
  return value
    .split(/(\[[^\]]*\]|\*|\n)/)
    .filter(Boolean)
    .map((part) => {
      const count = (seen.get(part) ?? 0) + 1;
      seen.set(part, count);
      const key = `${part}-${count}`;
      if (part === "\n") return <br key={key} />;
      if (part === "*") {
        return (
          <sup key={key} className="text-[0.5em]">
            *
          </sup>
        );
      }
      if (part.startsWith("[")) {
        return (
          <span key={key} className={accent}>
            {part.slice(1, -1)}
          </span>
        );
      }
      return <Fragment key={key}>{part}</Fragment>;
    });
}

/** A figure with its unit (% or ¥, with the space before it) set smaller, as orvibo.com draws it. */
export function figureWithUnit(value: string, unitClass: string): ReactNode {
  return value
    .split(/( ?[%¥])/)
    .filter(Boolean)
    .map((part, index) =>
      /[%¥]/.test(part) ? (
        <span
          key={part}
          className={cn(
            index === 0 ? "mr-[0.03rem]" : "ml-[0.03rem]",
            unitClass,
          )}
        >
          {part}
        </span>
      ) : (
        <Fragment key={part}>{part}</Fragment>
      ),
    );
}
