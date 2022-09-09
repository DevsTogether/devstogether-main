/* eslint-disable @next/next/no-img-element */
import Footer from '@components/footer';
import Header from '@components/header/index';
import Layout from '@src/components/layout_sigin';
import GlobalStyles from '@src/styles/global';
import theme from '@styles/theme';

export default function Home() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>
                <Layout />
            </main>
            <Footer />

        </>

    );
};


