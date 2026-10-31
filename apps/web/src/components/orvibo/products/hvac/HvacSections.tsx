import { productPageHelpers } from "@/components/orvibo/product/productPageHelpers";
import type { ProductViewProps } from "@/lib/orvibo/products/types";
import { cn } from "@v1/ui/utils";

/** Pictures several HVAC pages share, without their words (hvac_clean.py); every word here is HTML over them. */
const IMG = "/orvibo/products/hvac";

export const PHOTO = "bg-cover bg-center bg-no-repeat";
/** A box as wide as the 1920 px pictures, centred, so words laid over a cropped picture stay on their spot. */
export const FRAME = "absolute inset-y-0 left-1/2 w-[19.2rem] -translate-x-1/2";
/** Centres a box on its left/top point. */
export const CENTRE = "-translate-x-1/2 -translate-y-1/2 text-center";

type SectionProps = Pick<ProductViewProps, "locale" | "text">;

/** The CCTV banner (S350L and MixStation), its words over orvibo.com's picture without them. */
export function CctvBanner({ locale, text }: SectionProps) {
  const { t, bg } = productPageHelpers(locale, text);
  return (
    <section
      className={cn("relative h-[8.06rem] overflow-hidden", PHOTO)}
      style={bg(`${IMG}/cctv.webp`)}
    >
      <div className={FRAME}>
        <p
          className={cn(
            "absolute top-[2.485rem] left-[6.6rem] whitespace-nowrap text-[0.26rem] leading-[0.34rem] font-semibold text-[#f1d5c0]",
            CENTRE,
          )}
        >
          {t("cctv.brand")}
        </p>
        {/* orvibo.com writes this in gold brush strokes */}
        <h2
          className={cn(
            "absolute top-[3.82rem] left-[6.64rem] whitespace-nowrap bg-gradient-to-b from-[#fdf0e4] to-[#e2b28f] bg-clip-text pr-[0.1rem] text-[1rem] leading-[1.2rem] font-black text-transparent italic",
            CENTRE,
          )}
        >
          {t("cctv.title")}
        </h2>
        <p
          className={cn(
            "absolute top-[4.755rem] left-[6.62rem] whitespace-nowrap text-[0.23rem] leading-[0.3rem] font-medium text-[#e2bb9e]",
            CENTRE,
          )}
        >
          {t("cctv.channels")}
        </p>
      </div>
    </section>
  );
}

/** The CCTV banner as a card (V180 and the W pages); its words are the cctv.* strings of the wide banner. */
export function CctvCardBanner({ locale, text }: SectionProps) {
  const { t, bg } = productPageHelpers(locale, text);
  return (
    <section
      className={cn("relative h-[7.98rem] overflow-hidden", PHOTO)}
      style={bg(`${IMG}/cctv-card.webp`)}
    >
      <div className={FRAME}>
        <p
          className={cn(
            "absolute top-[3.035rem] left-[6.1rem] whitespace-nowrap text-[0.3rem] leading-[0.4rem] font-semibold text-[#a67f78]",
            CENTRE,
          )}
        >
          {t("cctv.brand")}
        </p>
        {/* orvibo.com writes this in gold brush strokes */}
        <h2
          className={cn(
            "absolute top-[4.55rem] left-[6.32rem] whitespace-nowrap bg-gradient-to-b from-[#fdf0e4] to-[#e2b28f] bg-clip-text pr-[0.1rem] text-[1.08rem] leading-[1.3rem] font-black text-transparent italic",
            CENTRE,
          )}
        >
          {t("cctv.title")}
        </h2>
        <p
          className={cn(
            "absolute top-[5.52rem] left-[6.22rem] whitespace-nowrap text-[0.27rem] leading-[0.36rem] font-medium text-[#e2ba9e]",
            CENTRE,
          )}
        >
          {t("cctv.channels")}
        </p>
      </div>
    </section>
  );
}

/** The academician section (V180, W260, W300): the lab photo with Ke Liu in a card. */
export function ResearchSection({ locale, text }: SectionProps) {
  const { t, bg } = productPageHelpers(locale, text);
  return (
    <section
      className={cn("relative h-[10.23rem] overflow-hidden", PHOTO)}
      style={bg(`${IMG}/research.webp`)}
    >
      <div className={FRAME}>
        <h2 className="absolute inset-x-0 top-[1.79rem] -translate-y-1/2 text-center text-[0.48rem] leading-[0.6rem] font-semibold text-white">
          {t("research.title")}
        </h2>
        <p className="absolute inset-x-0 top-[2.68rem] -translate-y-1/2 text-center text-[0.26rem] leading-[0.34rem] font-medium text-[#8c8c8c]">
          {t("research.lab")}
        </p>
        <div className="absolute top-[6.75rem] left-[14.2rem] w-[2.25rem] text-white">
          <h3 className="text-[0.37rem] leading-[0.48rem]">
            {t("research.name")}
          </h3>
          <p className="mt-[0.08rem] text-[0.14rem] leading-[0.2rem] font-medium text-[#e5e5e5]">
            {t("research.bio")}
          </p>
        </div>
        <div className="absolute top-[8.78rem] left-1/2 w-[14rem] -translate-x-1/2 text-balance text-center text-[0.23rem] leading-[0.36rem] font-medium text-[#8c8c8c]">
          <p>{t("research.tech")}</p>
          <p>{t("research.patents")}</p>
        </div>
      </div>
    </section>
  );
}
