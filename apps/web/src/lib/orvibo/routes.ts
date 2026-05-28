/** Canonical Next.js paths for the Orvibo marketing site (no `.html`). */

export interface OrviboRoutes {
  home: string;
  productList: string;
  product: (slug: string) => string;
  productCategory: (categoryId: number | string) => string;
  about: (slug: string) => string;
  cooperation: string;
  estateCooperation: string;
  service: (slug: string) => string;
  app: string;
  store: string;
  exploreConference: string;
}

export function orviboRoutes(base: string): OrviboRoutes {
  return {
    home: base,
    productList: `${base}/product`,
    product: (slug) => `${base}/product/${normalizeProductSlug(slug)}`,
    productCategory: (id) => `${base}/product#${id}`,
    about: (slug) => `${base}/about/${slug}`,
    cooperation: `${base}/cooperation`,
    estateCooperation: `${base}/cooperation/estate`,
    service: (slug) => `${base}/services/${slug}`,
    app: `${base}/app`,
    store: `${base}/store`,
    exploreConference: `${base}/explore/conference-2023`,
  };
}

export function normalizeProductSlug(slug: string): string {
  const trimmed = slug.replace(/\.html$/i, "").replace(/\/index$/i, "");
  const segment = trimmed.split("/").filter(Boolean).pop();
  return segment ?? trimmed;
}

/** Maps legacy `.html` request paths to canonical App Router paths. */
export function redirectLegacyOrviboPath(pathname: string): string | null {
  if (!pathname.toLowerCase().endsWith(".html")) return null;

  let path = pathname.slice(0, -5);

  if (path.endsWith("/index")) path = path.slice(0, -"/index".length);

  if (path.endsWith("/product/productList")) {
    return path.replace(/\/productList$/, "/product");
  }

  if (path.endsWith("/cooperation/estateCooperation")) {
    return path.replace(/estateCooperation$/, "estate");
  }

  if (path.endsWith("/conference2023")) {
    return path.replace(/\/conference2023$/, "/explore/conference-2023");
  }

  if (path.endsWith("/orviboStore")) {
    return path.replace(/\/orviboStore$/, "/store");
  }

  const installMatch = path.match(/^(.*\/product\/[^/]+)_install$/);
  if (installMatch) {
    return `${installMatch[1]}#specifications`;
  }

  return path;
}
