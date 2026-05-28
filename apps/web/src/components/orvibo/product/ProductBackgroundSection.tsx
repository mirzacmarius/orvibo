import type { ReactNode } from "react";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";
import { assetUrl } from "@/lib/orvibo/assetUrl";

interface ProductBackgroundSectionProps {
  id?: string;
  className: string;
  imagePath: string;
  title?: string;
  description?: string;
  reveal?: boolean;
  children?: ReactNode;
}

export function ProductBackgroundSection({
  id,
  className,
  imagePath,
  title,
  description,
  reveal = false,
  children,
}: ProductBackgroundSectionProps) {
  const infoContent = (
    <>
      {title ? <div className="sec_title">{title}</div> : null}
      {description ? <div className="sec_text">{description}</div> : null}
    </>
  );

  const info =
    title || description ? (
      reveal ? (
        <ProductReveal>{infoContent}</ProductReveal>
      ) : (
        <div className="sec_info">{infoContent}</div>
      )
    ) : null;

  return (
    <section
      id={id}
      className={`${className} s__bg`}
      style={{ backgroundImage: `url(${assetUrl(imagePath)})` }}
    >
      {info}
      {children}
    </section>
  );
}
