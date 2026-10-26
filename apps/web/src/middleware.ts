import { DEFAULT_LOCALE, splitLocalePath } from "@/lib/orvibo/i18n";
import { redirectLegacyOrviboPath } from "@/lib/orvibo/routes";
import { NextResponse, type NextRequest } from "next/server";

function isPublicFile(pathname: string) {
  if (pathname.startsWith("/favicon")) return true;
  if (!pathname.includes(".")) return false;
  return !pathname.toLowerCase().endsWith(".html");
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    isPublicFile(pathname)
  ) {
    return NextResponse.next();
  }

  const legacyPath = redirectLegacyOrviboPath(pathname);
  if (legacyPath && legacyPath !== pathname) {
    const url = request.nextUrl.clone();
    const hashIndex = legacyPath.indexOf("#");
    if (hashIndex >= 0) {
      url.pathname = legacyPath.slice(0, hashIndex);
      url.hash = legacyPath.slice(hashIndex + 1);
    } else {
      url.pathname = legacyPath;
    }
    return NextResponse.redirect(url, 308);
  }

  const { locale, rest } = splitLocalePath(pathname);

  if (!locale) {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LOCALE}${rest}`, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
