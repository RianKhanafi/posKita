import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { axiosApp } from "utils/axios";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      type: "credentials",
      id: "credentials",
      credentials: {
        identifier: {
          label: "text",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials: any, req: any) {
        const data = {
          identifier: "kasirpos",
          password: "TopSecretPassw0|)",
        };

        const res = await axiosApp.post("/auth/local", data);

        console.log("aaaaaa", res);
        if (!res.status) {
          throw new Error("error ini");
        }
        // If no error and we have user data, return it
        if (res.status === 201) {
          return res;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  debug: false,
  pages: {
    signIn: "/dashboard/auth/signup",
    error: "/dashboard/auth/signup",
  },
};

export default NextAuth(authOptions);
