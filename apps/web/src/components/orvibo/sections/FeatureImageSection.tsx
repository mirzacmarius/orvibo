import NextLink from "next/link";
import { assetUrl } from "@/lib/orvibo/assetUrl";

interface FeatureImageSectionProps {
  ctaHref: string;
  ctaLabel: string;
  imageFit?: "cover" | "contain";
  imageSrc: string;
  subtitle: string;
  title: string;
  titleTopMargin?: number;
}

export function FeatureImageSection({
  ctaHref,
  ctaLabel,
  imageFit = "cover",
  imageSrc,
  subtitle,
  title,
  titleTopMargin = 0.8,
}: FeatureImageSectionProps) {
  return (
    <section className="relative mx-auto overflow-hidden text-center">
      <h2
        className="text-[calc(var(--orvibo-rem-scale)*0.48)] font-extrabold leading-[calc(var(--orvibo-rem-scale)*0.67)] tracking-[calc(var(--orvibo-rem-scale)*0.02)] text-black"
        style={{
          marginTop: `calc(var(--orvibo-rem-scale) * ${titleTopMargin})`,
        }}
      >
        {title}
      </h2>
      <p className="mt-[calc(var(--orvibo-rem-scale)*0.12)] text-[calc(var(--orvibo-rem-scale)*0.28)] leading-normal tracking-[calc(var(--orvibo-rem-scale)*0.01)] text-[#666]">
        {subtitle}
      </p>
      <NextLink
        className="group relative mx-auto mt-[calc(var(--orvibo-rem-scale)*0.44)] inline-flex h-[40px] items-center justify-center overflow-hidden rounded-[2px] border border-black bg-transparent px-[calc(var(--orvibo-rem-scale)*0.48)] text-[16px] font-medium leading-[40px] text-black before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-black before:transition-all before:duration-300 hover:text-white hover:before:w-full"
        href={ctaHref}
      >
        <span className="relative z-10">{ctaLabel}</span>
      </NextLink>
      <NextLink
        className="mx-auto block w-[min(16rem,calc(100%-32px))] overflow-hidden"
        href={ctaHref}
      >
        <div
          className="h-[calc(var(--orvibo-rem-scale)*8.08)] bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${assetUrl(imageSrc)})`,
            backgroundSize: imageFit,
          }}
        />
      </NextLink>
    </section>
  );
}
