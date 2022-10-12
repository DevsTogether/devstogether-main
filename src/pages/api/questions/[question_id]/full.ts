import { prisma } from '@server/PrismaClient';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { question_id } = req.query;

    const fullQuestion = await prisma.question.findUnique({
        where: {
            id: question_id.toString(),
        },
        include: {
            tags: {
                select: {
                    tag: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
            Responses: {
                include: {
                    comments: {
                        select: {
                            content: true,
                            User: {
                                select: {
                                    id: true,
                                    name: true,
                                    image: true,
                                },
                            },
                        },
                    },
                    User: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        },
                    },
                },
            },
            User: {
                select: {
                    id: true,
                },
            },
        },
    });

    res.json(fullQuestion);
};

export default handler;
