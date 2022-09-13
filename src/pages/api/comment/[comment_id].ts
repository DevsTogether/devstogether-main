import Comment from '@server/src/classes/Comment';
import type { NextApiRequest, NextApiResponse } from 'next';

interface updateCommentRequest {
    content: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method;
    const commentController = new Comment();
    const { comment_id } = req.query;

    if (method === "GET") {
        const comment = await commentController.getComment(comment_id.toString());

        res.json(comment);
    } else if (method === "PUT") {
        const body: updateCommentRequest = req.body;
        const updatedComment = await commentController.updateComment({
            content: body.content,
            commentId: comment_id.toString()
        });

        res.json(updatedComment);

    } else if (method === "DELETE") {
        const id = commentController.deleteComment({ commentId: comment_id.toString() });

        res.json({ id: id });
    }
};

export default handler;
