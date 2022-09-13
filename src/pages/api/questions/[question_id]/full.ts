import { prisma } from '@server/PrismaClient';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { question_id }: { [key: string]: string | string[] } = req.query;

    const question = await prisma.question.findUnique({
        /*  */
    });
    res.send(question);
};

export default handler;
