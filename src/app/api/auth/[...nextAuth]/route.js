import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      const subdomain = extractSubdomain(url);
      return subdomain ? `https://${subdomain}.yourdomain.com/dashboard` : `${baseUrl}/dashboard`;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export const { GET, POST } = NextAuth(authOptions);
