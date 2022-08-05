import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const { id } = req.query;

    const tag = await prisma.tag.findUnique({
        where: {
            id: Number(id),
        },
    });

    res.send(tag);
};

export default handler;
