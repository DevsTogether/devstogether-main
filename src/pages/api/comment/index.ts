import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

interface createCommentRequest {
    content: string
    questionId?: string,
    responseId?: string,
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const method = req.method;
    
    
    if (method === "PUT") {
        const body: createCommentRequest = req.body;;

        if (body?.questionId || body?.responseId && body?.content){
            const createdComment = await prisma.comment.create({
                data: {
                    content: body.content,
                    questionId: body?.questionId,
                    responseId: body?.responseId,
                    userId: "cl6bqqdyr00060glcs4wosa1j", //pegar da sessão
                },
            });

            res.json(createdComment);
        }
    }
};

export default handler;
