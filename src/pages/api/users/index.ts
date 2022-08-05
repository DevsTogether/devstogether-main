import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();

    const users = await prisma.user.findMany({
        include: {
            _count: {
                select: {
                    accounts: true,
                },
            },
        },
    });

    res.send(users);
};

export default handler;