import Level from '@server/src/classes/Level';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const level = new Level();
    const { id } = req.query;

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    res.json(await level.getLevel({ id: Number(id) }));
};

export default handler;
