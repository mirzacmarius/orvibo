import { WSeriesOverview } from "@/components/orvibo/products/hvac/WSeriesOverview";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** The ORVIBO Integrated HVAC W300 page: the W series view (shared with W260) with W300's hero, chart and specifications. */
export function W300Overview(props: ProductViewProps) {
  return <WSeriesOverview {...props} model="w300" />;
}
