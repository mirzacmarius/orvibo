import type { Dictionary } from "@/app/[locale]/dictionaries";
import { TextLink } from "@/components/orvibo/ui/text-link";
import type { Locale } from "@/lib/orvibo/i18n";
import { orviboRoutes } from "@/lib/orvibo/routes";
import { SiteShell } from "./SiteShell";

/** The site's 404 page, in the site shell of `locale`. */
export function NotFoundView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = `/${locale}`;
  const routes = orviboRoutes(base);
  const copy = dict.shell.notFound;

  return (
    <SiteShell base={base} dict={dict}>
      <main className="mx-auto max-w-ov-content px-ov-4 py-ov-24 sm:px-ov-6">
        <h1 className="mb-ov-4 text-ov-title-l text-ov-ink">{copy.title}</h1>
        <p className="mb-ov-8 max-w-[640px] text-ov-body text-ov-ink-muted">
          {copy.description}
        </p>
        <TextLink className="text-ov-body" href={routes.home}>
          {dict.shell.backHome}
        </TextLink>
      </main>
    </SiteShell>
  );
}
