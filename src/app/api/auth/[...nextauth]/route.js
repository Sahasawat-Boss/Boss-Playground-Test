import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {}, //custom credentials login
            async authorize(credentials, req) {

                const user = {id:"1"};
                return user;
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secrat: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signIn",
    },
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};