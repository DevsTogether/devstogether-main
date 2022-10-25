import { prisma } from '@server/PrismaClient';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    try {
        const vote = await prisma.vote.findFirst({
            select: {
                point: true,
                id: true,
            },
            where: {
                userId: 'cl6berue50018icvx4oelm5bn', //pegar da sessão,
                questionId: id?.toString(),
            },
        });

        if (vote?.id) {
            if (vote.point === -1) {
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
                        questionId: id?.toString(),
                        voteId: deletedVote.id,
                    },
                });
            } else {
                const updatedVote = await prisma.vote.update({
                    select: {
                        id: true,
                    },
                    where: {
                        id: vote.id,
                    },
                    data: {
                        point: -1,
                    },
                });

                res.json({
                    status: {
                        questionId: id?.toString(),
                        voteId: updatedVote.id,
                    },
                });
            }
        } else {
            const createdVote = await prisma.vote.create({
                select: {
                    id: true,
                },
                data: {
                    point: -1,
                    questionId: id?.toString(),
                    userId: 'cl6berue50018icvx4oelm5bn', //pegar da sessão,
                },
            });

            res.json({
                status: {
                    questionId: id?.toString(),
                    voteId: createdVote.id,
                },
            });
        }
    } catch (error) {
        res.json({ result: 'success', error: String(error) });
    }
};

export default handler;
