import type { ProductCopy } from "@/app/[locale]/dictionaries";

export type Mixpad7SectionKey =
  | "hero"
  | "screen"
  | "border"
  | "remote"
  | "gateway"
  | "intercom"
  | "voice"
  | "audio"
  | "album"
  | "partner"
  | "extra";

export function getMixpad7Section(
  copy: ProductCopy,
  key: Mixpad7SectionKey,
): NonNullable<ProductCopy["sections"][string]> {
  const section = copy.sections[key];
  if (!section) {
    throw new Error(`Missing MixPad 7 dictionary section: ${key}`);
  }
  return section;
}
