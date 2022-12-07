import Footer from '@src/components/LayoutComponets/Footer';
import Header from '@src/components/LayoutComponets/Header';
import Layout from '@src/layouts/home';
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



