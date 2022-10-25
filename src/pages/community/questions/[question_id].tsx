/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import Footer from '@src/layouts/Footer';
import Header from '@src/layouts/Header';
import Layout from '@src/layouts/Questions/question';
import type { NextPage } from 'next';

const page: NextPage = () => {
    return (
        <>
            <Header />
            <Layout />
            <Footer />
        </>
    );
};

export default page;