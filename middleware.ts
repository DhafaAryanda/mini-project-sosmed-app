import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isCookieExist = !!request.cookies.get('token')
  const isLoginPage = pathname.startsWith('/login')

  if (
    isCookieExist === false &&
    !isLoginPage &&
    !['/register'].includes(pathname)
  ) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isCookieExist && isLoginPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: '/((?!api|_next|static|public|favicon.ico).*)',
}
