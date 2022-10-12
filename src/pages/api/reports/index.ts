import { PrismaClient } from '@prisma/client';
import Auth from '@server/src/classes/Auth';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const auth = new Auth();
    const session = await auth.getSession(req, res);

    if (await auth.can(session, 'see-reports')) {
        const reports = await prisma.report.findMany();

        res.json(reports);
    } else {
        res.json({});
    }
};

export default handler;
