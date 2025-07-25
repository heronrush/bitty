import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// type CredentialsType = {
//   email: string;
//   password: string;
// };

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Email",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "eg. johndoe@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("credentals from fe", credentials?.email, credentials?.password);

        // sends the data to the express backend
        try {
          const res = await axios.post("http://localhost:3002/api/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          const user = res.data;

          console.log("------------------");
          console.log(user);
          console.log("------------------");
          if (user.msg === "login successful") {
            return user;
          }

          return null;
        } catch (err) {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;

      return token;
    },

    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
      }

      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
