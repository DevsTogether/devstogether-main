/* eslint-disable  */
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();

    const { id } = req.query;

    await prisma.user.update({
        where: {
            id: id.toString(),
        },
        data: {
            active: false,
        },
    });

    res.send({});
};

export default handler;
