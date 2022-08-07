import { PrismaClient, Report } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const method = req.method;
    const { id } = req.query;

    if (method === 'GET') {
        const report = await prisma.report.findUnique({
            where: {
                id: id.toString(),
            },
        });

        res.send(report);
    } else if (method === 'POST') {
        const body: Report = JSON.parse(req.body);

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
                id: id.toString(),
            },
        });

        res.send({});
    }
};

export default handler;
