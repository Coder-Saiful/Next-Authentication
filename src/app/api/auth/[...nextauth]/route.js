import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { NEXTAUTH_URL } from "../../../../../lib/config";

export const nextAuthOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        // console.log(credentials)
        let url;
        let data;

        if (credentials?.type === 'login') {
          url = `${NEXTAUTH_URL}/api/users/signin`,
          data = {
            email: credentials.email,
            password: credentials.password
          }
        } else {
          url = `${NEXTAUTH_URL}/api/users/signup`,
          data = {
            name: credentials.name,
            email: credentials.email,
            password: credentials.password
          }
        }

        
          // console.log({credentials})

        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data)
        })

        const user = await res.json();

        if (res.ok && user) {
          return user;
        }

        throw new Error(JSON.stringify(user.error));
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  callbacks: {
    async jwt({
      token,
      user
    }) {
      return {
        ...token,
        ...user
      }
    },
    async session({
      session,
      token
    }) {
      session.user = token;
      return session;
    },
    async signIn({
      account,
      profile
    }) {
      // console.log({ account, profile})
      return true
    },
  },
  pages: {
    signIn: '/auth/signin'
  }
}

const handler = NextAuth(nextAuthOptions);

export {
  handler as GET, handler as POST
};