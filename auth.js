import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { login, register } from '@frontend/api';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'signup',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        try {
          const res = await register({
            input: {
              email: String(credentials?.email),
              password: String(credentials?.password),
            },
          });

          if (!res?.data?.data?._id) return null;

          return {
            id: res?.data?.data._id || '',
            email: res?.data?.data?.email,
            token: res?.token || '',
          };
        } catch (error) {
          const err = error;
          throw new Error(err.message || 'Something went wrong');
        }
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'login',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        try {
          const res = await login({
            input: {
              email: String(credentials?.email),
              password: String(credentials?.password),
            },
          });

          if (!res?.data?.data?._id) return null;

          return {
            name: `${res?.data?.data?.firstName} ${res?.data?.data?.lastName}`,
            email: res?.data?.data?.email,
            token: res?.token || '',
          };
        } catch (error) {
          const err = error;
          throw new Error(err.message || 'Something went wrong');
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user && user.token) {
        token.token = user.token;
      }
      return token;
    },
    session({ session, token }) {
      if (token && token.token) session.user.token = String(token.token || '');
      return session;
    },
    async authorized(params) {
      return !!params.auth?.user?.token;
    },
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/login',
  },
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
  update,
} = NextAuth(authOptions);
