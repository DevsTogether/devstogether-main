import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const method = req.method;
    const { id } = req.query;

    try {
        if (method === 'POST') {
            const vote = await prisma.vote.create({
                select: {
                    id: true,
                },
                data: {
                    userId: 'cl6berue50018icvx4oelm5bn', //pegar da sessão
                    questionId: id.toString(),
                    point: 1,
                },
            });

            res.json({
                status: {
                    questionId: id.toString(),
                    voteId: vote.id,
                },
            });
        } else if (method === 'DELETE') {
            const vote = await prisma.vote.findFirst({
                select: {
                    id: true,
                },
                where: {
                    AND: {
                        questionId: id.toString(),
                        userId: 'cl6berue50018icvx4oelm5bn', // pegar da sessão
                    },
                },
            });

            const deletedVote = await prisma.vote.delete({
                select: {
                    id: true,
                },
                where: {
                    id: vote?.id,
                },
            });

            res.json({
                status: {
                    questionId: id.toString(),
                    voteId: deletedVote.id,
                },
            });
        }
    } catch (error) {
        res.json({ status: null, error: error });
    }
};

export default handler;
