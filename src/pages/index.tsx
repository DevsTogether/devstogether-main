import Footer from '@components/footer';
import Header from '@components/Header';
import Layout from '@src/components/Entrada';
import GlobalStyles from '@src/styles/global';

function Cards(): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <Header/>
            <main>
                <Layout />
            </main>
            <Footer />
        </>
    );
}

export default Cards;
