import createMiddleware from "next-intl/middleware";
import { type NextRequest, type NextResponse } from "next/server";
import { locales, type Locale, defaultLocale } from "@/config/locale";

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale: defaultLocale satisfies Locale,
  localePrefix: "never",
});

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  // match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
