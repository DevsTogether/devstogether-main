import Level from '@server/src/classes/Level';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const level = new Level();

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    res.json(await level.getAllLevels());
};

export default handler;
