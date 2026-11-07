import NextLink from "next/link";
import { cn } from "@/lib/orvibo/cn";

export interface BreadcrumbItem {
  label: string;
  /** Left out on the last item, the current page. */
  href?: string;
}

/** Where a shop page sits: `body-s` links in `ink-muted` separated by "/", the current page in `ink`. */
export function Breadcrumb({
  className,
  items,
  label = "Breadcrumb",
}: {
  className?: string;
  items: BreadcrumbItem[];
  label?: string;
}) {
  return (
    <nav aria-label={label} className={className}>
      <ol className="flex flex-wrap items-center gap-ov-2 text-ov-body-s text-ov-ink-muted">
        {items.map((item, index) => (
          <li
            className={cn(
              "inline-flex items-center gap-ov-2",
              index > 0 && "before:text-ov-ink-disabled before:content-['/']",
            )}
            key={`${item.label}-${item.href ?? "current"}`}
          >
            {item.href ? (
              <NextLink
                className="ov-focus-ring transition-colors duration-300 hover:!text-ov-ink"
                href={item.href}
              >
                {item.label}
              </NextLink>
            ) : (
              <span aria-current="page" className="text-ov-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
