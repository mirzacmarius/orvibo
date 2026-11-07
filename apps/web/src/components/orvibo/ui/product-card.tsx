import Image from "next/image";
import NextLink from "next/link";
import { assetUrl } from "@/lib/orvibo/assetUrl";
import { cn } from "@/lib/orvibo/cn";
import type { Locale } from "@/lib/orvibo/i18n";
import { Badge, type BadgeProps } from "./badge";
import { Price } from "./price";

export interface ProductCardProps {
  href: string;
  /** The product cut-out (a transparent picture), not a room scene. */
  image: { src: string; alt: string; width: number; height: number };
  name: string;
  tagline?: string;
  /** In bani. */
  price?: number;
  compareAt?: number;
  badge?: { label: string; tone: BadgeProps["tone"] };
  locale?: Locale;
  className?: string;
}

/** The product in a list: a square white picture well, name, one-line tagline and price. The whole card is one link. */
export function ProductCard({
  badge,
  className,
  compareAt,
  href,
  image,
  locale = "ro",
  name,
  price,
  tagline,
}: ProductCardProps) {
  return (
    <NextLink
      className={cn(
        "ov-motion ov-focus-ring group flex flex-col overflow-hidden rounded-ov-s bg-ov-surface !text-ov-ink transition-shadow duration-300 hover:shadow-ov-pop",
        className,
      )}
      href={href}
    >
      <div className="relative grid aspect-square place-items-center overflow-hidden">
        <Image
          alt={image.alt}
          className="ov-motion h-[80%] w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
          height={image.height}
          src={assetUrl(image.src)}
          unoptimized
          width={image.width}
        />
        {badge ? (
          <Badge className="absolute top-ov-3 left-ov-3" tone={badge.tone}>
            {badge.label}
          </Badge>
        ) : null}
      </div>
      <div className="flex flex-col gap-ov-1 px-ov-4 pt-ov-3 pb-ov-4 sm:px-ov-6 sm:pt-ov-4 sm:pb-ov-6">
        <p className="text-ov-title-s">{name}</p>
        {tagline ? (
          <p className="truncate text-ov-body-s text-ov-ink-muted">{tagline}</p>
        ) : null}
        {price !== undefined ? (
          <Price
            amount={price}
            className="mt-ov-3"
            compareAt={compareAt}
            locale={locale}
          />
        ) : null}
      </div>
    </NextLink>
  );
}
