import { prisma } from "@server/PrismaClient";
import { SimpleQuestion } from "types/types";

class Question {
    async getQuestionResponses(questionId: string): Promise<SimpleQuestion> {
        const questionsResponse = await prisma.question.findUniqueOrThrow({
            select: {
                title: true,
                id: true,
                content: true,
                createdAt: true,
                Responses: {
                    select: {
                        id: true
                    }
                },
                visits: true,
                Vote: {
                    select: {
                        point: true
                    }
                },
                tags: {
                    select: {
                        tag: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                User: {
                    select: {
                        id: true,
                        username: true
                    }
                }
            },
            where: {
                id: questionId
            }
        });

        return {
            id: questionsResponse.id,
            title: questionsResponse.title,
            description: questionsResponse.content,
            responses: questionsResponse.Responses.length,
            views: 0,
            tags: questionsResponse.tags.map((item) => (item.tag?.name ?? "")),
            vote: questionsResponse.Vote.reduce((p, c) => p + (c.point ?? 0), 0),
            date: questionsResponse.createdAt ?? "",
            user: {
                id: questionsResponse.User?.id ?? "",
                name: questionsResponse.User?.username ?? ""
            }
        };
    }

}

export default Question;
