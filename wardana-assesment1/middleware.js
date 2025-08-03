import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC_PATHS = ['/authentication/sign-in', '/signup'];

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  const token = req.cookies.get('token')?.value;
  const token_api = req.cookies.get('token_api')?.value;
  // console.log(token_api);
  
  if (!token) {
    return NextResponse.redirect(new URL('/authentication/sign-in', req.url));
  }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    // jwt.verify(token, process.env.JWT_SECRET);
    jwtVerify(token, secret);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/authentication/sign-in', req.url));
  }
}

export const config = {
  matcher: ['/home/:path*','/assesmentpage1/:path*','/assesmentpage2/:path*','/profile/:path*','/table/:path*'], // protect everything under /dashboard
};
