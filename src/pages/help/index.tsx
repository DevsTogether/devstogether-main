import Footer from '@components/footer';
import Header from '@components/Header';
import Layout from '@src/components/Ajuda';
import GlobalStyles from '@src/styles/global';

function Sobre(): JSX.Element {
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
}

export default Sobre;
