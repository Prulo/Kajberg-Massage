import { NextResponse } from "next/server";

export function middleware(request) {
  const isAdmin = request.cookies.get("isAdmin")?.value;

  if (request.nextUrl.pathname.startsWith("/admin") && isAdmin !== "true") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
