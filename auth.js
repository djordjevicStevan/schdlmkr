import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { login, register } from '@frontend/api';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'signup',
      credentials: {
        firstName: {
          label: 'First Name',
          type: 'text',
          placeholder: 'First Name',
        },
        lastName: {
          label: 'Last Name',
          type: 'text',
          placeholder: 'Last Name',
        },
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
        passwordConfirm: {
          label: 'Confirm Password',
          type: 'password',
          placeholder: 'Confirm Password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        try {
          const res = await register({
            input: {
              firstName: String(credentials?.firstName),
              lastName: String(credentials?.lastName),
              email: String(credentials?.email),
              password: String(credentials?.password),
              passwordConfirm: String(credentials?.passwordConfirm),
            },
          });

          if (!res?.data?.data?._id) return null;

          return {
            id: res?.data?.data._id || '',
            name: `${res?.data?.data?.firstName} ${res?.data?.data?.lastName}`,
            email: res?.data?.data?.email,
            image: res?.data?.data?.avatar,
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
            id: res?.data?.data._id || '',
            name: `${res?.data?.data?.firstName} ${res?.data?.data?.lastName}`,
            email: res?.data?.data?.email,
            image: res?.data?.data?.avatar,
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
