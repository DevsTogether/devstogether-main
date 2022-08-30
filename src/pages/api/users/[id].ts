import { PrismaClient, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const method = req.method;
    const { id } = req.query;
    const response: { data: any } = { data: null };

    if (method === 'GET') {
        const user = await prisma.user.findUnique({
            where: {
                id: id.toString(),
            },
        });

        res.send(user);
    } else if (method === 'UPDATE') {
        const body: User = req.body;

        await prisma.user.update({
            where: {
                id: id.toString(),
            },
            data: {
                banned: body.banned,
                bio: body.bio,
                email: body.email,
                emailVerified: body.emailVerified,
                image: body.image,
                levelId: body.levelId,
                name: body.name,
                reputation: body.reputation,
                username: body.username,
            },
        });

        res.send(body);
    } else if (method === 'DELETE') {
        await prisma.user.delete({
            where: {
                id: id.toString(),
            },
        });

        res.send({});
    }

    res.send(response.data);
};

export default handler;
