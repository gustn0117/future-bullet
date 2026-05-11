import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Canonical domain. Old/secondary hosts 301-redirect here so search equity
// consolidates on a single origin.
const CANONICAL_HOST = "futurebullet.co.kr";
const REDIRECT_HOSTS = new Set([
  "futurebullet.kr",
  "www.futurebullet.kr",
  "www.futurebullet.co.kr",
]);

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();
  if (REDIRECT_HOSTS.has(host)) {
    const { pathname, search } = request.nextUrl;
    return NextResponse.redirect(
      `https://${CANONICAL_HOST}${pathname}${search}`,
      301,
    );
  }
  return NextResponse.next();
}

export const config = {
  // Skip Next internals and static assets; everything else gets host-checked.
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
