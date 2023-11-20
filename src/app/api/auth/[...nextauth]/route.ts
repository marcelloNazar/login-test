import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/utils/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials!.email });
          if (user) {
            const checkPassword = await bcrypt.compare(
              credentials!.password,
              user.password
            );
            if (checkPassword) {
              return user;
            } else {
              console.log("verificação da senha");
            }
          } else
            (err: any) => {
              console.log(err);
            };
        } catch (err: any) {
          console.log(err);
        }
      },
    }),
  ],

  pages: {
    error: "/login",
  },
});

export { handler as GET, handler as POST };
