import Auth from '@server/src/classes/Auth';
import Comment from '@server/src/classes/Comment';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';

interface createCommentRequest {
    content: string
    questionId?: string,
    responseId?: string,
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.time("res");
    const method = req.method;

    if (method === "POST") {
        const body: createCommentRequest = req.body;
        const auth = new Auth();
        const commentController = new Comment();
        const session: Session | null = await auth.getSession(req, res);

        if (!session) {
            res.json(auth.getUnauthorizedResponse());
            return;
        }

        if (
            (body?.questionId || body?.responseId) &&
            body?.content &&
            await auth.can({
                action: 'create-comment',
                user: session.user,
            })
        ) {
            const commentId = await commentController.createComment({
                content: body.content,
                subject: {
                    id: (body?.questionId ?? body?.responseId ?? ""),
                    type: body?.questionId ? "question" : "response"
                },
                userId: session.user.id
            });

            res.json({ id: commentId });
            return;
        }

        res.json({ "error": "unable to create comment" });
    }
};

export default handler;
