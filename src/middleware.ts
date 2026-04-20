import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const host = request.headers.get('host');
    const url = request.nextUrl.clone();

    // The primary domain we want to enforce
    const primaryDomain = 'ramainteriors.co'; // Updated to .co as per your request

    // Check if we are in production and NOT on the primary domain (including www)
    // We also exclude localhost to allow local development
    if (
        process.env.NODE_ENV === 'production' &&
        host &&
        host !== primaryDomain &&
        host !== `www.${primaryDomain}` &&
        !host.includes('localhost')
    ) {
        url.host = primaryDomain;
        url.protocol = 'https:';
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

// Config to run middleware on all routes
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
