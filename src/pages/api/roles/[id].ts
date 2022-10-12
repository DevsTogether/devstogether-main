import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const { id } = req.query;

    const role = await prisma.role.findUnique({
        where: {
            id: Number(id),
        },
    });

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate');
    res.json(role);
};

export default handler;
