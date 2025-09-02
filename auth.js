import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/db/dbconnect.js";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (credentials == null) return null;

        try {
          await dbConnect();
          const user = await User.findOne({ email: credentials?.email }).lean();

          if (user) {
            const isMatch = await bcrypt.compare(
              credentials?.password,
              user.password
            );

            if (isMatch) {
              const { password, ...rest } = user;
              return rest;
            } else {
              console.error("password mismatch");
              throw new Error("Check your password");
            }
          } else {
            console.error("User not found");
            throw new Error("User not found");
          }
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id.toString();
        token.role = user.role;
        token.semester = user.semester;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.semester = token.semester;
      session.user.image = token.image;
      return session;
    },
  },
});
