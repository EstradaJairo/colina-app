import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If accessing a protected route and no accessToken in session storage
  if (
    pathname.startsWith("/patient-list") ||
    pathname.startsWith("patient-overview")
  ) {
    const accessToken = request.cookies.get("accessToken");
    if (!accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}