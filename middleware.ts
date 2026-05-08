import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

import { createServerClient } from '@supabase/ssr'

export async function middleware(
  request: NextRequest
) {
  let response = NextResponse.next({
    request,
  })

  const supabase =
    createServerClient(
      process.env
        .NEXT_PUBLIC_SUPABASE_URL!,

      process.env
        .NEXT_PUBLIC_SUPABASE_ANON_KEY!,

      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)
              ?.value
          },

          set(
            name: string,
            value: string,
            options: any
          ) {
            request.cookies.set({
              name,
              value,
              ...options,
            })

            response =
              NextResponse.next({
                request,
              })

            response.cookies.set({
              name,
              value,
              ...options,
            })
          },

          remove(
            name: string,
            options: any
          ) {
            request.cookies.set({
              name,
              value: '',
              ...options,
            })

            response =
              NextResponse.next({
                request,
              })

            response.cookies.set({
              name,
              value: '',
              ...options,
            })
          },
        },
      }
    )

  const {
    data: { user },
  } =
    await supabase.auth.getUser()

  const pathname =
    request.nextUrl.pathname

  const protectedRoutes = [
    '/dashboard',
  ]

  const authRoutes = [
    '/login',
    '/register',
    '/verify',
  ]

  const isProtectedRoute =
    protectedRoutes.some((route) =>
      pathname.startsWith(route)
    )

  const isAuthRoute =
    authRoutes.some((route) =>
      pathname.startsWith(route)
    )

  /*
    BLOCK UNAUTHENTICATED USERS
  */

  if (
    isProtectedRoute &&
    !user
  ) {
    return NextResponse.redirect(
      new URL(
        '/login',
        request.url
      )
    )
  }

  /*
    BLOCK AUTH PAGES FOR LOGGED-IN USERS
  */

  if (
    isAuthRoute &&
    user
  ) {
    return NextResponse.redirect(
      new URL(
        '/dashboard',
        request.url
      )
    )
  }

  return response
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/register',
    '/verify',
  ],
}