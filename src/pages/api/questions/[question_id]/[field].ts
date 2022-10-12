import { prisma } from '@server/PrismaClient';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { question_id, field }: { [key: string]: string | string[] } =
        req.query;
    const select: any = {};
    select[field.toString()] = true;

    const question = await prisma.question.findUnique({
        where: {
            id: question_id.toString(),
        },
        select: select,
    });
    res.send(question);
};

export default handler;
