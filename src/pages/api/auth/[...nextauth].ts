/* eslint-disable no-param-reassign */
import authApi from 'api/authApi';
import { AxiosResponse } from 'axios';
import { NextAuthOptions, User } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { ILoginReponse } from 'types/auth';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: 'credentials',
      name: 'credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'beefiker@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { data: userData }: AxiosResponse<ILoginReponse> = await authApi.get(`/api/me`, {
          data: {
            email: credentials?.email,
            password: credentials?.password,
          },
        });

        const user: User = {
          id: 0,
          accessToken: userData.accessToken,
          refreshToken: userData.refreshToken,
          email: userData.email,
          image: userData.image,
          name: userData.name,
        };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        }
        // If you return null then an error will be displayed advising the user to check their details.
        return null;
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 2,
  },
  callbacks: {
    async session({ session, token }) {
      // set the user's accessToken and refreshToken in the session
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // push the user's accessToken and refreshToken to the token
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default NextAuth(authOptions);
