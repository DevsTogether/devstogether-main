import { PrismaClient, Response } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const method = req.method;
    const { id } = req.query;

    if (method === 'GET') {
        const response = await prisma.response.findUnique({
            where: {
                id: id.toString(),
            },
        });

        res.json(response);
    } else if (method === 'POST') {
        const body: Response = JSON.parse(req.body);

        await prisma.response.create({
            data: {
                content: body.content,
                questionId: body.questionId,
            },
        });
    } else if (method === 'UPDATE') {
        const body: Response = JSON.parse(req.body);

        await prisma.response.update({
            where: {
                id: id.toString(),
            },
            data: {
                content: body.content,
            },
        });
    } else if (method === 'DELETE') {
        try {
            await prisma.response.delete({
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
