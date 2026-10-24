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

export const mixpad7VoiceAvatarBase = "/orvibo/products/mixpad_7";

export type Mixpad7VoiceTone = "amber" | "olive" | "indigo" | "teal";

export interface Mixpad7VoiceBubble {
  /** Key of the sentence in `sections.album.items`. */
  id: string;
  /** Tailwind position inside one 24rem × 6.03rem strip tile. */
  position: string;
  /** Family member bubbles show an avatar, a name (`<id>Name`) and a tint. */
  speaker?: { avatar: string; tone: Mixpad7VoiceTone };
}

/** Voice commands floating behind the photo frame in the "Super Smart" section. */
export const mixpad7VoiceBubbles: Mixpad7VoiceBubble[] = [
  { id: "weather", position: "top-[0.4rem] left-[0.2rem]" },
  {
    id: "grandpa",
    position: "top-[0.1rem] left-[5.4rem]",
    speaker: { avatar: "voice-grandpa.webp", tone: "amber" },
  },
  {
    id: "dad",
    position: "top-[1rem] left-[12.9rem]",
    speaker: { avatar: "voice-dad.webp", tone: "olive" },
  },
  { id: "dryingRack", position: "top-[1.1rem] left-[18.8rem]" },
  { id: "livingRoomAc", position: "top-[2.25rem] left-[0.6rem]" },
  { id: "acOn", position: "top-[2.25rem] left-[7.6rem]" },
  { id: "cleaning", position: "top-[2.25rem] left-[18.8rem]" },
  {
    id: "mom",
    position: "top-[3rem] left-[12.4rem]",
    speaker: { avatar: "voice-mom.webp", tone: "indigo" },
  },
  { id: "alarm", position: "top-[4.2rem] left-[0.3rem]" },
  {
    id: "daughter",
    position: "top-[3.8rem] left-[6.2rem]",
    speaker: { avatar: "voice-daughter.webp", tone: "teal" },
  },
  { id: "music", position: "top-[4rem] left-[16rem]" },
  { id: "window", position: "top-[5.05rem] left-[9rem]" },
  { id: "date", position: "top-[5.05rem] left-[12.6rem]" },
];
