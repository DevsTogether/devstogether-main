/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import Layout from '@src/layouts/MeetRoom';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const page: NextPage = () => {
    const nextRouter = useRouter();

    const { call_id: roomId } = nextRouter.query;

    return <Layout />;
};

export default page;
