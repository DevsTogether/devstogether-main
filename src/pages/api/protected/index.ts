import { getException } from '@utils/exceptionHandler/exceptionHandler';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) res.send(getException('api-endpoint-auth-required'));

    res.send(session);
};

export default handler;
