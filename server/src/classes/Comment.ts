import { prisma } from '@server/PrismaClient';

export interface ICreateCommentRequest {
    userId: string;
    subject: {
        type: "question" | "response";
        id: string;
    };
    content: string;
}

export interface IUpdateCommentRequest {
    commentId: string;
    content: string;
}
export interface IDeleteCommentRequest {
    commentId: string;
}

export interface IComment {
    id: string;
    content: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    questionId: string | null;
    responseId: string | null;
    userId: string | null;
}

class Comment {
    async getComment(id: string): Promise<IComment | null> {
        return (await prisma.comment.findUnique({ where: { id: id.toString() } }));
    }

    async createComment({ userId, subject, content }: ICreateCommentRequest): Promise<string> {
        const createdComment = await prisma.comment.create({
            select: {
                id: true
            },
            data: {
                userId: userId,
                content: content,
                questionId: subject.type === "question" ? subject.id : null,
                responseId: subject.type === "response" ? subject.id : null,
            },
        });

        return createdComment.id;
    }

    async updateComment({ commentId, content }: IUpdateCommentRequest): Promise<string> {
        const updateComment = await prisma.comment.update({
            select: { id: true },
            where: { id: commentId },
            data: { content: content },
        });

        return updateComment.id;
    }

    async deleteComment({ commentId }: IDeleteCommentRequest): Promise<string> {
        return (await prisma.comment.delete({ select: { id: true }, where: { id: commentId } })).id;
    }
}

export default Comment;