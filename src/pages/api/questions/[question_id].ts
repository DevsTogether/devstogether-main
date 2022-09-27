import { PrismaClient, Question } from '@prisma/client';
import Auth from '@server/src/classes/Auth';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const method = req.method;
    const { question_id } = req.query;

    if (method === 'GET') {
        const question = await prisma.question.findUnique({
            where: {
                id: question_id.toString(),
            },
        });

        res.json(question);
    } else if (method === 'POST') {
        const body: Question = req.body;
        const auth = new Auth();
        const session = await auth.getSession(req, res);

        if (session) {
            const createdQuestion = await prisma.question.create({
                select: { id: true },
                data: {
                    title: body.title,
                    content: body.content,
                    reward: 11,
                    visits: 0,
                    userId: session.user.id,
                },
            });

            res.json(createdQuestion);
        }
    } else if (method === 'PUT') {
        const body: Question = req.body;
        const auth = new Auth();
        const session = await auth.getSession(req, res);

        if (session) {
            const updatedQuestion = await prisma.question.update({
                where: {
                    id: question_id.toString(),
                },
                data: {
                    title: body.title,
                    content: body.content,
                    reward: 11,
                    visits: 0,
                },
            });
        }

    } else if (method === 'DELETE') {
        try {
            await prisma.report.delete({
                where: {
                    id: question_id.toString(),
                },
            });

            res.json({ status: question_id });
        } catch (error) {
            res.json({ status: null, error: error });
        }
    }
};

export default handler;
