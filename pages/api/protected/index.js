import { getSession } from 'next-auth/react';
import { getException } from '../../../utils/exceptionHandler/exceptionHandler.js';

const handler = async (req, res) => {
    const session = await getSession({ req });

    if (!session) res.send(getException('api-endpoint-auth-required'));

    res.send(session);
};

export default handler;
