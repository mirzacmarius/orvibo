export interface MixstationSection {
  id: string;
  className: string;
  imagePath: string;
  title?: string;
  description?: string;
  reveal?: boolean;
}

const base = "/guanwang_second/front/images/new/products/mixstation";

export const mixstationHero = {
  imagePath: `${base}/sec1-7a1373cc0f.png`,
  logoPath: `${base}/MixStation-12a33eaf83.png`,
  videoSrc: "/orvibo/videos/mixStation.mp4",
};

export const mixstationSections: MixstationSection[] = [
  {
    id: "value",
    className: "sec2",
    imagePath: `${base}/sec2-3d7b16e746.png`,
    title: "One system, multiple modes — save energy and effort",
    reveal: true,
  },
  {
    id: "savings",
    className: "sec4",
    imagePath: `${base}/sec4-9b00bfc477.png`,
    title: "Lower running costs",
    reveal: true,
  },
  {
    id: "comfort",
    className: "sec5",
    imagePath: `${base}/sec5-4518e87583.png`,
    title: "Greater comfort",
    reveal: true,
  },
  {
    id: "compact",
    className: "sec3",
    imagePath: `${base}/sec3-8b32066edb.png`,
    title: "45% smaller footprint*",
    description: "Villa-grade comfort for medium and compact homes",
    reveal: true,
  },
  {
    id: "power",
    className: "sec11",
    imagePath: `${base}/sec11-fe0c16d3ec.png`,
    title: "Stronger performance",
    reveal: true,
  },
  {
    id: "smart",
    className: "sec6",
    imagePath: `${base}/sec6-3e7aebf1a6.png`,
    title: "Powered by MixPad smart panel",
    reveal: true,
  },
  {
    id: "design",
    className: "sec7",
    imagePath: `${base}/sec7-d416a0ab3a.png`,
    title: "Award-winning design",
    reveal: true,
  },
  {
    id: "airpro",
    className: "sec8",
    imagePath: `${base}/sec8-41a029f7dc.png`,
    title: "AirPro indoor units — quiet, efficient comfort",
    reveal: true,
  },
  {
    id: "sustainability",
    className: "sec9",
    imagePath: `${base}/sec9-84c88c36ea.png`,
    title: "Sustainable by design",
    reveal: true,
  },
  {
    id: "warranty",
    className: "sec10",
    imagePath: `${base}/sec10-e9e4e6e191.png`,
    title: "Up to 10-year warranty*",
    reveal: true,
  },
];
