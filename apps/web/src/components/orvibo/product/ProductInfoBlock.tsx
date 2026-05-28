import type { ReactNode } from "react";
import { ProductReveal } from "@/components/orvibo/product/ProductReveal";

interface ProductInfoBlockProps {
  title: ReactNode;
  description?: ReactNode;
  reveal?: boolean;
  className?: string;
}

export function ProductInfoBlock({
  title,
  description,
  reveal = true,
  className = "sec__info",
}: ProductInfoBlockProps) {
  const content = (
    <>
      <div className="sec__title">{title}</div>
      {description ? <div className="sec__desc">{description}</div> : null}
    </>
  );

  if (!reveal) {
    return <div className={className}>{content}</div>;
  }

  return <ProductReveal className={className}>{content}</ProductReveal>;
}
