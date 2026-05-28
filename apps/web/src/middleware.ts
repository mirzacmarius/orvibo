import { redirectLegacyOrviboPath } from "@/lib/orvibo/routes";
import { NextResponse, type NextRequest } from "next/server";

const LOCALE = "en";

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

  const specTabMatch = pathname.match(new RegExp(`^/${LOCALE}/product/([^/]+)/spec$`));
  if (specTabMatch) {
    const url = request.nextUrl.clone();
    url.pathname = `/${LOCALE}/product/${specTabMatch[1]}`;
    url.hash = "specifications";
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${LOCALE}`, request.url));
  }

  if (!pathname.startsWith(`/${LOCALE}/`) && pathname !== `/${LOCALE}`) {
    return NextResponse.redirect(new URL(`/${LOCALE}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next).*)"],
};

