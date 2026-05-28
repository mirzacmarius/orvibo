import redirectMap from "../../../public/orvibo/redirect-map.json";

export function resolveExternalUrl(url: string) {
  const map = redirectMap as Record<string, string>;
  return map[url] ?? url;
}

