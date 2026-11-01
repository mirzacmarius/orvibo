import { WSeriesPhone } from "@/components/orvibo/products/hvac/WSeriesPhone";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** The ORVIBO Integrated HVAC W260 page on phones: the W series phone view (shared with W300) with W260's hero, chart and specifications. */
export function W260Phone(props: ProductViewProps) {
  return <WSeriesPhone {...props} model="w260" />;
}
