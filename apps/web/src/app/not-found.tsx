import "../styles/orvibo.css";

import { NotFoundView } from "@/components/orvibo/layout/NotFoundView";
import { DEFAULT_LOCALE } from "@/lib/orvibo/i18n";
import type { Metadata } from "next";
import { getDictionary } from "./[locale]/dictionaries";

/**
 * 404 outside the `[locale]` routes (missing files; the middleware sends every
 * other path to `/ro/...`), in the default locale. Pages under a locale use
 * `[locale]/not-found.tsx`.
 */
const LOCALE = DEFAULT_LOCALE;

export const metadata: Metadata = {
  title: "Pagina nu a fost găsită | ORVIBO",
};

export default async function NotFound() {
  const dict = await getDictionary(LOCALE);

  return (
    <div className="orvibo-site" data-locale={LOCALE}>
      <NotFoundView locale={LOCALE} dict={dict} />
    </div>
  );
}
