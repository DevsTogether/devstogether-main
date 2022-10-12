/* eslint-disable  */
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const { id, field }: { [key: string]: string | string[] } = req.query;
    const select: any = {};
    select[field.toString()] = true;

    const tag = await prisma.tag.findUnique({
        where: {
            id: Number(id),
        },
        select: select,
    });

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate');
    res.json(tag);
};

export default handler;
