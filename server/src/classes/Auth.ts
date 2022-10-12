import { authOptions } from '@api/auth/[...nextauth]';
import { User } from '@prisma/client';
import constants from '@server/constants.json';
import { prisma } from '@server/PrismaClient';
import { NextApiRequest, NextApiResponse } from 'next';
import { Session, unstable_getServerSession } from 'next-auth';

export interface ICan {
    user?: User;
    userId?: string;
    context?: unknown;
    action:
        | 'see-public-reports'
        | 'see-private-reports'
        | 'create-question'
        | 'create-comment';
}

class Auth {
    async getSession(
        req: NextApiRequest,
        res: NextApiResponse
    ): Promise<Session | null> {
        const session = await unstable_getServerSession(req, res, authOptions);

        return session;
    }

    async can(options: ICan): Promise<boolean> {
        const user =
            options.user ||
            (await prisma.user.findUnique({ where: { id: options.userId } }));
        const checkers: { [key: string]: Function } = {
            'see-public-reports': (user: User, context: unknown): boolean =>
                true,
            'see-private-reports': (user: User, context: unknown): boolean => {
                return (
                    !user.banned && user.roleId === constants.USER_ROLES.ADMIN
                );
            },
            'create-comment': (user: User, context: unknown): boolean => {
                return (
                    !user.banned &&
                    user.reputation >=
                        constants.MIN_REPUTATION_TO_CREATE_COMMENT
                );
            },
        };

        const checkerFunction = checkers[options.action];

        return checkerFunction ? checkerFunction(user, options.context) : false;
    }

    getUnauthorizedResponse(): { error: string } {
        return { error: 'unauthorized request' };
    }
}

export default Auth;
