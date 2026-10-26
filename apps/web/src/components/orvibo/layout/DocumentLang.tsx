"use client";

import { useEffect } from "react";

/**
 * The root layout renders `<html lang>` for the default locale. Pages in
 * another locale set their own `lang` on `.orvibo-site`; this keeps the
 * document element in step so browsers detect the page language correctly.
 */
export function DocumentLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
