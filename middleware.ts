// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // 🚫 If trying to access /admin but no token -> redirect to login
  if (pathname.startsWith('/admin') && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // 🔒 If logged in and trying to access /auth pages -> redirect to /admin
  if ((pathname.startsWith('/auth/login') || pathname.startsWith('/auth/register')) && token) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/auth/:path*'],
};
