import { WSeriesPhone } from "@/components/orvibo/products/hvac/WSeriesPhone";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** The ORVIBO Integrated HVAC W300 page on phones: the W series phone view (shared with W260) with W300's hero, chart and specifications. */
export function W300Phone(props: ProductViewProps) {
  return <WSeriesPhone {...props} model="w300" />;
}
