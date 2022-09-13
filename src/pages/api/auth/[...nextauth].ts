import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient, User } from '@prisma/client';
import NextAuth, { NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import FacebookProvider from 'next-auth/providers/facebook';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { sendVerificationRequest } from './emailAuth';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID || "",
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
        }),
        EmailProvider({
            server: {
                //@ts-ignore
                server: {
                    host: process.env.EMAIL_SERVER_HOST,
                    port: process.env.EMAIL_SERVER_PORT,
                    auth: {
                        user: process.env.EMAIL_SERVER_USER,
                        pass: process.env.EMAIL_SERVER_PASSWORD,
                    },
                },
                from: process.env.EMAIL_FROM,
            },
            from: process.env.EMAIL_FROM,
            //@ts-ignore
            sendVerificationRequest,
        }),
    ],
    callbacks: {
        //@ts-ignore
        session: async ({ session, token, user }: {session: any, token: any, user: User}) => {
            session.user = user;
            return session;
        },
        redirect: async ({ url, baseUrl }) => {
            return `${baseUrl}/protected`;
        },
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'database',
        maxAge: 30 * 24 * 60 * 60,
    },
}

export default NextAuth(authOptions);
