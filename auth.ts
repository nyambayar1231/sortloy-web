import NextAuth, { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from './db';

export const authConfig = {
  providers: [
    GitHub,
    Google({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  adapter: DrizzleAdapter(db),
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const paths = ['/dashboard'];
      const isProtected = paths.some((path) =>
        nextUrl.pathname.startsWith(path)
      );
      const isOnRoot = nextUrl.pathname === '/';

      if (isLoggedIn && isOnRoot) {
        const redirectUrl = new URL('/dashboard', nextUrl.origin);
        redirectUrl.searchParams.append('/dashboard', nextUrl.href);
        return Response.redirect(redirectUrl);
      }

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL('api/auth/signin', nextUrl.origin);
        redirectUrl.searchParams.append('callbackUrl', nextUrl.href);
        return Response.redirect(redirectUrl);
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signOut } = NextAuth(authConfig);
