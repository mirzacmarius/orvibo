import { WSeriesOverview } from "@/components/orvibo/products/hvac/WSeriesOverview";
import type { ProductViewProps } from "@/lib/orvibo/products/types";

/** The ORVIBO Integrated HVAC W260 page: the W series view (shared with W300) with W260's hero, chart and specifications. */
export function W260Overview(props: ProductViewProps) {
  return <WSeriesOverview {...props} model="w260" />;
}
