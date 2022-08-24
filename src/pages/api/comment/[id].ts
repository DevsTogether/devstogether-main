import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const method = req.method;
    const { id } = req.query;

    const comment = await prisma.comment.findUnique({
        where: {
            id: id.toString()
        },
    });

    res.json(comment);
    if (method === 'GET') {
    }
};

export default handler;
