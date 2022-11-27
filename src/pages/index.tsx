import Footer from '@src/components/Footer';
import Header from '@src/components/Header';
import Layout from '@src/layouts/Entrada';
import { GetStaticProps } from "next";

export default function Cards({ date }): JSX.Element {
    return (
        <>
            <h1>{date}</h1>
            <Header />
            <Layout />
            <Footer />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {

    return {
        props: {
            date: new Date().toISOString(),
        },
        revalidate: 60 * 60
    };
};



