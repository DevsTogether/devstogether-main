import { prisma } from '@server/PrismaClient';

export interface ILevel {
    id: number;
    name: string | null;
    reputationRequired: number | null;
}

class Level {
    async getAllLevels(): Promise<Array<ILevel>> {
        const roles = await prisma.level.findMany();

        return roles;
    }

    async getLevel({ id }: { id: number }): Promise<ILevel | null> {
        const level = await prisma.level.findUnique({
            where: {
                id: Number(id),
            },
        });

        return level;
    }

    async addLevel({
        name,
        minReputation,
    }: {
        name: string;
        minReputation: number;
    }): Promise<ILevel> {
        const role = await prisma.level.create({
            data: {
                name: name,
                reputationRequired: minReputation,
            },
        });

        return role;
    }
}

export default Level;
