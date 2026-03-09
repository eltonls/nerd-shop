import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./shared/i18n/config";

export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname.startsWith("/api")
  ) {
    return;
  }

  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`),
  );

  if (pathnameHasLocale) return;

  const acceptLanguage = request.headers.get("accept-language");
  const detectedLocale = acceptLanguage?.split(",")[0].split("-")[0];

  const locale = locales.includes(detectedLocale as any)
    ? detectedLocale
    : defaultLocale;

  return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
};
