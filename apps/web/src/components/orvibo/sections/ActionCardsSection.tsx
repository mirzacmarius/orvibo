import NextLink from "next/link";
import { OrviboCaretRight } from "@/components/orvibo/icons";
import { assetUrl } from "@/lib/orvibo/assetUrl";

interface ActionCardItem {
  body: string;
  href: string;
  imageSrc: string;
  label: string;
  title: string;
}

export function ActionCardsSection({ items }: { items: ActionCardItem[] }) {
  return (
    <section className="mx-auto mt-[calc(var(--orvibo-rem-scale)*0.44)] flex h-[calc(var(--orvibo-rem-scale)*3.41)] w-[min(16rem,calc(100%-32px))] justify-between">
      {items.map((item) => (
        <NextLink
          className="group block h-[calc(var(--orvibo-rem-scale)*3.41)] w-[calc(var(--orvibo-rem-scale)*5.13)] bg-cover bg-center bg-no-repeat text-center"
          href={item.href}
          key={`${item.href}-${item.title}`}
          style={{ backgroundImage: `url(${assetUrl(item.imageSrc)})` }}
        >
          <h2 className="mt-[calc(var(--orvibo-rem-scale)*0.98)] h-[calc(var(--orvibo-rem-scale)*0.58)] text-[calc(var(--orvibo-rem-scale)*0.36)] font-medium leading-[calc(var(--orvibo-rem-scale)*0.58)] tracking-[calc(var(--orvibo-rem-scale)*0.01)] text-white">
            {item.title}
          </h2>
          <p className="h-[calc(var(--orvibo-rem-scale)*0.26)] text-[calc(var(--orvibo-rem-scale)*0.16)] font-medium leading-[calc(var(--orvibo-rem-scale)*0.26)] text-white">
            {item.body}
          </p>
          <span className="relative mt-[calc(var(--orvibo-rem-scale)*0.4)] inline-flex h-[calc(var(--orvibo-rem-scale)*0.22)] items-center text-[calc(var(--orvibo-rem-scale)*0.16)] font-medium leading-[calc(var(--orvibo-rem-scale)*0.22)] tracking-[calc(var(--orvibo-rem-scale)*0.01)] text-white before:absolute before:bottom-[-4px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 group-hover:before:w-[5em]">
            {item.label}
            <OrviboCaretRight className="ml-[4px] translate-y-[1px] text-white" />
          </span>
        </NextLink>
      ))}
    </section>
  );
}
