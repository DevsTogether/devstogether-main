import { PrismaClient, Response } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const method = req.method;
    const { response_id } = req.query;

    if (method === 'GET') {
        const response = await prisma.response.findUnique({
            where: {
                id: response_id.toString(),
            },
        });

        res.json(response);
    } else if (method === 'PUT') {
        const body: Response = req.body;

        await prisma.response.create({
            data: {
                content: body.content,
                questionId: body.questionId,
            },
        });
    } else if (method === 'UPDATE') {
        const body: Response = req.body;

        await prisma.response.update({
            where: {
                id: response_id.toString(),
            },
            data: {
                content: body.content,
            },
        });
    } else if (method === 'DELETE') {
        try {
            await prisma.response.delete({
                where: {
                    id: response_id.toString(),
                },
            });

            res.json({ status: response_id });
        } catch (error) {
            res.json({ status: null, error: error });
        }
    }
};

export default handler;
