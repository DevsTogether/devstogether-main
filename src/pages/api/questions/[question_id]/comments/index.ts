import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const { question_id } = req.query;

    const comments = await prisma.comment.findMany({
        where: {
            questionId: question_id.toString() 
        }
    });

    res.json(comments);
};

export default handler;
