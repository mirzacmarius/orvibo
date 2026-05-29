import NextLink from "next/link";
import { assetUrl } from "@/lib/orvibo/assetUrl";

interface ProductGridItem {
  backgroundSize?: "cover" | "contain";
  href: string;
  imageSrc: string;
  title: string;
  wrapperHeight?: number;
  wrapperWidth?: number;
}

interface ProductGridSectionProps {
  items: ProductGridItem[];
  title: string;
  titleHref: string;
}

export function ProductGridSection({
  items,
  title,
  titleHref,
}: ProductGridSectionProps) {
  return (
    <section className="mx-auto mt-[calc(var(--orvibo-rem-scale)*1.4)] flex w-[min(16rem,calc(100%-32px))] flex-col items-center">
      <NextLink
        className="group relative text-[calc(var(--orvibo-rem-scale)*0.48)] font-extrabold leading-[calc(var(--orvibo-rem-scale)*0.66)] text-[#111] after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:text-[#111] hover:after:w-full"
        href={titleHref}
      >
        {title}
      </NextLink>
      <div className="mt-[calc(var(--orvibo-rem-scale)*0.6)] flex w-full flex-wrap gap-x-[calc(var(--orvibo-rem-scale)*0.38)] gap-y-[calc(var(--orvibo-rem-scale)*0.9)]">
        {items.map((item, index) => (
          <NextLink
            className="block shrink-0"
            href={item.href}
            key={`${item.href}-${item.title}`}
          >
            <div
              className="overflow-hidden"
              style={{
                height: `calc(var(--orvibo-rem-scale) * ${
                  item.wrapperHeight ?? 3.78
                })`,
                width: `calc(var(--orvibo-rem-scale) * ${
                  item.wrapperWidth ?? (index === 0 ? 10.55 : 5.07)
                })`,
              }}
            >
              <div
                className="h-full w-full bg-center bg-no-repeat transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url(${assetUrl(item.imageSrc)})`,
                  backgroundSize: item.backgroundSize ?? "cover",
                }}
              />
            </div>
            <div className="mt-[calc(var(--orvibo-rem-scale)*0.4)] text-[calc(var(--orvibo-rem-scale)*0.24)] font-bold leading-[calc(var(--orvibo-rem-scale)*0.32)] text-[#111]">
              {item.title}
            </div>
          </NextLink>
        ))}
      </div>
    </section>
  );
}
