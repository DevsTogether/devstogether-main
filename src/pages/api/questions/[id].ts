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

        res.json(question);
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
    } else if (method === 'UPDATE') {
        const body: Question = JSON.parse(req.body);

        await prisma.question.update({
            where: {
                id: id.toString(),
            },
            data: {
                title: body.title,
                content: body.content,
                reward: 11,
                visits: 0,
                userId: '', //pegar da sessão
            },
        });
    } else if (method === 'DELETE') {
        try {
            await prisma.report.delete({
                where: {
                    id: id.toString(),
                },
            });

            res.json({ status: id });
        } catch (error) {
            res.json({ status: null, error: error });
        }
    }
};

export default handler;
