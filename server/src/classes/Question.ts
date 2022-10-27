import { prisma } from "@server/PrismaClient";
import { SimpleQuestion } from "types/types";

class Question {
    async getSimpleQuestion(): Promise<SimpleQuestion> {
        return [];
    }

    async getSimpleQuestionList(offset: number, length: number): Promise<SimpleQuestion[]> {
        const questionsAndResponses = await prisma.question.findMany({
            skip: offset,
            take: length,
            orderBy: {
                createdAt: true,
            },
            select: {
                content: true,
                createdAt: true,
                Responses: {
                    select: {
                        _count: true
                    }
                },
                visits: true,
                Vote: {
                    select: {
                        point: true
                    }
                }
            }
        });
    }
}

export default Question;
