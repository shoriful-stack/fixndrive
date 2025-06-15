import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import LinkedInProvider from "next-auth/providers/linkedin";
import bcrypt from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }

        const db = await connectDB();
        const userCollection = await db.collection("users");
        const currentUser = await userCollection.findOne({ email });
        if (!currentUser) {
          return null;
        }
        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          return null;
        }
        return currentUser;
      },
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET,
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
