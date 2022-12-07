import { prisma } from "@server/PrismaClient";
import { CompleteQuestion, SimpleQuestion } from "types/types";

class Question {
    async getSimpleQuestion(questionId: string): Promise<SimpleQuestion> {
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
            views: questionsResponse.visits,
            tags: questionsResponse.tags.map((item) => (item.tag?.name ?? "")),
            vote: questionsResponse.Vote.reduce((p, c) => p + (c.point ?? 0), 0),
            date: questionsResponse.createdAt ?? "",
            user: {
                id: questionsResponse.User?.id ?? "",
                name: questionsResponse.User?.username ?? ""
            }
        };
    }

    async getSimpleQuestionList(offset: number, length: number, tagId?: string | undefined): Promise<SimpleQuestion[]> {
        let filter = {};

        if (tagId) {
            filter = {
                tags: {
                    some: {
                        tagId: {
                            equals: tagId
                        }
                    }
                }
            }
        }

        const questionsResponse = await prisma.question.findMany({
            skip: offset,
            take: length,
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
            where: filter
        });

        return questionsResponse.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.content,
            responses: item.Responses.length,
            views: item.visits,
            tags: item.tags.map((item) => (item.tag?.name ?? "")),
            vote: item.Vote.reduce((p, c) => p + (c.point ?? 0), 0),
            date: item.createdAt ?? "",
            user: {
                id: item.User?.id ?? "",
                name: item.User?.username ?? ""
            }
        }));
    }

    async getCompleteQuestion(questionId: string): Promise<CompleteQuestion> {
        const question = await prisma.question.findUniqueOrThrow({
            select: {
                title: true,
                id: true,
                content: true,
                createdAt: true,
                Responses: {
                    include: {
                        User: {
                            select: {
                                id: true,
                                image: true,
                                username: true,
                                specialization: true,
                                reputation: true
                            }
                        }
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
                closed: true,
                type: true,
                updatedAt: true,
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
            id: question.id,
            title: question.title,
            description: question.content,
            responses: question.Responses,
            views: question.visits,
            tags: question.tags.map((item) => (item.tag?.name ?? "")),
            vote: question.Vote.reduce((p, c) => p + (c.point ?? 0), 0),
            date: question.createdAt ?? "",
            closed: question.closed,
            type: question.type ?? "write",
            updatedAt: question.updatedAt?.toLocaleDateString() ?? "",
            user: {
                id: question.User?.id ?? "",
                name: question.User?.username ?? ""
            }
        };
    }
}

export default Question;
