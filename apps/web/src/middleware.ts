import { NextResponse, type NextRequest } from "next/server";

const LOCALE = "en";

function isPublicFile(pathname: string) {
  return pathname.includes(".") || pathname.startsWith("/favicon");
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

