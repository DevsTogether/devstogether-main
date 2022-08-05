/* eslint-disable  */
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const { id, field }: { [key: string]: string | string[] } = req.query;
    const select: any = {};
    select[field.toString()] = true;

    const role = await prisma.role.findUnique({
        where: {
            id: Number(id),
        },
        select: select,
    });

    res.send(role);
};

export default handler;
