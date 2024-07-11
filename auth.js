import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/db";
// import { signInSchema } from "./lib/zod";
// import { saltAndHashPassword } from "@/utils/password";
// import { getUserFromDb } from "@/utils/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          // const { email, password } = await signInSchema.parseAsync(
          //   credentials
          // );

          // const pwHash = saltAndHashPassword(password);

          // user = await getUserFromDb(email, pwHash);

          // if (!user) {
          //   throw new Error("User not found.");
          // }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
        }
      },
    }),
  ],
});
