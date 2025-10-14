import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // Check host header (strip port if present) and detect portal subdomain
  const hostHeader = request.headers.get('host') || 'tawf.xyz'
  const hostname = hostHeader.split(':')[0].toLowerCase()

  // Match portal as a subdomain (handles portal.tawf.xyz, www.portal.tawf.xyz,
  // portal.localhost, or any *.portal.localhost)
  const isPortalHost = /(^|\.)portal\.(localhost|tawf\.xyz)$/.test(hostname)

  if (isPortalHost) {
    url.pathname = `/portal${url.pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
