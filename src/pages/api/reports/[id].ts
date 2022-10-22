import { PrismaClient, Report } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    //const auth = new Auth();
    const method = req.method;
    const { id } = req.query;

    //const session = await auth.getSession(req, res);

    /* res.json(session);
    res.end(); */

    if (method === 'GET') {
        const report = await prisma.report.findUnique({
            where: {
                id: id?.toString(),
            },
        });

        res.json(report);
    } else if (method === 'PUT') {
        const body: Report = req.body;

        await prisma.report.create({
            data: {
                details: body.details,
                origin: body.origin,
                reason: body.reason,
                userId: body.userId, //temporario, pegar da sessão
                userReportedId: body.userId,
            },
        });
    } else if (method === 'DELETE') {
        await prisma.report.delete({
            where: {
                id: id?.toString(),
            },
        });

        res.send({});
    }
};

export default handler;
