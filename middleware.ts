// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  const { pathname } = request.nextUrl;

  // If not authenticated and trying to access /admin, redirect to login
  if (pathname.startsWith('/admin') && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Optional: prevent logged-in users from accessing /auth pages
  if (pathname.startsWith('/auth') && token) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/auth/:path*'],
};
