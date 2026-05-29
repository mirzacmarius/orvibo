import type { ProductCopy } from "@/app/[locale]/dictionaries";

export interface MixstationSection {
  id: string;
  className: string;
  imagePath: string;
  title?: string;
  description?: string;
  reveal?: boolean;
}

const base = "/guanwang_second/front/images/new/products/mixstation";

const sectionLayout: Omit<MixstationSection, "title" | "description">[] = [
  { id: "value", className: "sec2", imagePath: `${base}/sec2-3d7b16e746.png`, reveal: true },
  { id: "savings", className: "sec4", imagePath: `${base}/sec4-9b00bfc477.png`, reveal: true },
  { id: "comfort", className: "sec5", imagePath: `${base}/sec5-4518e87583.png`, reveal: true },
  {
    id: "compact",
    className: "sec3",
    imagePath: `${base}/sec3-8b32066edb.png`,
    reveal: true,
  },
  { id: "power", className: "sec11", imagePath: `${base}/sec11-fe0c16d3ec.png`, reveal: true },
  { id: "smart", className: "sec6", imagePath: `${base}/sec6-3e7aebf1a6.png`, reveal: true },
  { id: "design", className: "sec7", imagePath: `${base}/sec7-d416a0ab3a.png`, reveal: true },
  { id: "airpro", className: "sec8", imagePath: `${base}/sec8-41a029f7dc.png`, reveal: true },
  {
    id: "sustainability",
    className: "sec9",
    imagePath: `${base}/sec9-84c88c36ea.png`,
    reveal: true,
  },
  {
    id: "warranty",
    className: "sec10",
    imagePath: `${base}/sec10-e9e4e6e191.png`,
    reveal: true,
  },
];

export const mixstationHero = {
  imagePath: `${base}/sec1-7a1373cc0f.png`,
  logoPath: `${base}/MixStation-12a33eaf83.png`,
  videoSrc: "/orvibo/videos/mixstation_1.mp4",
};

export function buildMixstationSections(copy: ProductCopy): MixstationSection[] {
  return sectionLayout.map((layout) => {
    const text = copy.sections[layout.id];
    return {
      ...layout,
      title: text?.title,
      description: text?.description,
    };
  });
}

/** Image paths for asset sync — copy-agnostic. */
export const mixstationSectionImagePaths = sectionLayout.map(
  (section) => section.imagePath,
);
