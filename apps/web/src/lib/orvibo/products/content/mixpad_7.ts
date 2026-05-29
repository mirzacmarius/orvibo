import type { ProductCopy } from "@/app/[locale]/dictionaries";

export const mixpad7ImageBase = "/guanwang_second/front/images/products/mixpad_7";

export const mixpad7Videos = {
  hero: "/orvibo/videos/mixpad7_banner3.mp4",
  sec2: "/orvibo/videos/mixpad_7_quanmian_2.mp4",
  sec3: "/orvibo/videos/mixpad7_jinbian.mp4",
  sec7: "/orvibo/videos/mixpad7_video.mp4",
  sec8: "/orvibo/videos/mixpad7_music3.mp4",
} as const;

export interface Mixpad7SpecRow {
  label: string;
  value: string;
}

export function buildMixpad7Specifications(
  copy: ProductCopy,
): Mixpad7SpecRow[] {
  const rows = copy.specifications?.rows;
  if (!rows) return [];
  return Object.values(rows);
}
