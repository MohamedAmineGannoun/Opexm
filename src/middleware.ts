import { NextRequest, NextResponse } from "next/server";

const locales = ["fr", "en", "ar"];
const defaultLocale = "fr";

function getLocaleFromRequest(request: NextRequest): string {
  const cookieLocale = request.cookies
    .get("NEXT_LOCALE")
    ?.value.toLowerCase();
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;

  const accept = request.headers.get("accept-language") ?? "";
  for (const part of accept.split(",")) {
    const tag = part.split(";")[0]?.trim().toLowerCase() ?? "";
    const base = tag.split("-")[0];
    if (base && locales.includes(base)) return base;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Fichiers internes / assets : ne pas rediriger.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // fichiers (favicon, images...)
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = pathname.split("/")[1];
  if (locales.includes(pathnameLocale)) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", pathnameLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const locale = getLocaleFromRequest(request);
  return NextResponse.redirect(
    new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url),
  );
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
