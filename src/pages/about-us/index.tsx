import Footer from '@components/footer';
import Header from '@src/components/Header/index';
import Layout from '@src/components/Sobre nós';
import GlobalStyles from '@src/styles/global';

function Cards(): JSX.Element {
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

export default Cards;
