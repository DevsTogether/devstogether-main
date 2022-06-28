import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient();

export default NextAuth({
    //adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),/* 
        EmailProvider({
            server: {
                server: {
                    host: process.env.EMAIL_SERVER_HOST,
                    port: process.env.EMAIL_SERVER_PORT,
                    auth: {
                        user: process.env.EMAIL_SERVER_USER,
                        pass: process.env.EMAIL_SERVER_PASSWORD
                    }
                },
                from: process.env.EMAIL_FROM
            },
            from: process.env.EMAIL_FROM
        }), */
        CredentialsProvider({
            name: 'guest',
            async authorize() {
                const user = {
                    id: randomUUID(),
                    name: `AnonymousCoder`,
                };

                return user;
            },
        }),
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        jwt: true
    }
});
