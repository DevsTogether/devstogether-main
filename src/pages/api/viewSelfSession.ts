// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Auth from '@server/src/classes/Auth';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const auth = new Auth();
    
    res.json(await auth.getSession(req, res) || "sem sessão");
};

export default handler;
