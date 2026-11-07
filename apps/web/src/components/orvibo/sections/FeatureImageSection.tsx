import NextLink from "next/link";
import { SectionHeading } from "@/components/orvibo/ui/section-heading";
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
      <SectionHeading
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        subtitle={subtitle}
        title={title}
        topMargin={titleTopMargin}
      />
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
