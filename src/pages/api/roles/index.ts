import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();

    const roles = await prisma.role.findMany();

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate');
    res.json(roles);
};

export default handler;
