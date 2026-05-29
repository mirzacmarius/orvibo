import type { ReactNode } from "react";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SiteScrollTop } from "./SiteScrollTop";

interface SiteShellProps {
  base: string;
  children: ReactNode;
  dict: Dictionary;
}

export function SiteShell({ base, children, dict }: SiteShellProps) {
  return (
    <div className="min-h-screen min-w-0 bg-orvibo-bg font-orvibo text-orvibo-fg">
      <SiteHeader base={base} nav={dict.nav} products={dict.navProducts} />
      {children}
      <SiteFooter base={base} dict={dict} />
      <SiteScrollTop />
    </div>
  );
}
