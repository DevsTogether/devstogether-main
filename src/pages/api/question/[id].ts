import { PrismaClient, Question } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const method = req.method;
    const { id } = req.query;

    if (method === 'GET') {
        const question = await prisma.question.findUnique({
            where: {
                id: id.toString(),
            },
        });

        res.send(question);
    } else if (method === 'POST') {
        const body: Question = JSON.parse(req.body);

        await prisma.question.create({
            data: {
                title: body.title,
                content: body.content,
                reward: 11,
                visits: 0,
                userId: '', //pegar da sessão
            },
        });
    } else if (method === 'DELETE') {
        await prisma.report.delete({
            where: {
                id: id.toString(),
            },
        });

        res.send({});
    }
};

export default handler;
