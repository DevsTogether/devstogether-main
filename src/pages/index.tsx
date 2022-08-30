/* eslint-disable @next/next/no-img-element */
import GlobalStyles from '@src/styles/global';
import Footer from './componentes/footer';
import Header from './componentes/header/index';
import Layout from './componentes/layout';

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


