import "../styles/orvibo.css";

import type { Metadata } from "next";
import { SiteShell } from "@/components/orvibo/layout";
import { Link } from "@/components/orvibo/ui/link";
import { DEFAULT_LOCALE } from "@/lib/orvibo/i18n";
import { orviboRoutes } from "@/lib/orvibo/routes";
import { getDictionary } from "./[locale]/dictionaries";

const LOCALE = DEFAULT_LOCALE;

export const metadata: Metadata = {
  title: "Pagina nu a fost găsită | ORVIBO",
};

export default async function NotFound() {
  const dict = await getDictionary(LOCALE);
  const base = `/${LOCALE}`;
  const routes = orviboRoutes(base);
  const copy = dict.shell.notFound;

  return (
    <div className="orvibo-site" data-locale={LOCALE}>
      <SiteShell base={base} dict={dict}>
        <main className="mx-auto max-w-[1200px] px-[24px] py-[96px]">
          <h1 className="mb-[16px] text-[32px] font-medium leading-[40px]">
            {copy.title}
          </h1>
          <p className="mb-[32px] max-w-[640px] text-[16px] leading-[26px] text-[#666]">
            {copy.description}
          </p>
          {/* `.orvibo-site a` inherits its colour, so the link is coloured via its wrapper. */}
          <p className="w-fit text-[16px] leading-[24px] text-orvibo-link hover:text-orvibo-link-hover">
            <Link href={routes.home}>{dict.shell.backHome}</Link>
          </p>
        </main>
      </SiteShell>
    </div>
  );
}
