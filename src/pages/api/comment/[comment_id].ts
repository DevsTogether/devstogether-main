import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

interface createCommentRequest {
    content: string
    questionId?: string,
    responseId?: string,
}

interface updateCommentRequest {
    content: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const method = req.method;
    const { comment_id } = req.query;

    if (method === "GET") {
        const comment = await prisma.comment.findUnique({
            where: {
                id: comment_id.toString()
            },
        });
        
        res.json(comment);
    } else if (method === "PUT") {
        const body: updateCommentRequest = req.body;

        const updatedComment = await prisma.comment.update({
            select: {
                id: true
            },
            where: {
                id: comment_id.toString()
            },
            data: {
                content: body.content
            }
        });

        res.json(updatedComment);
    } else if (method === "DELETE") {
        const deletedComment = await prisma.comment.delete({
            select: {
                id: true
            },
            where: {
                id: comment_id.toString()
            }
        });

        res.json(deletedComment);
    }
};

export default handler;
