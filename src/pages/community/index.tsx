import Footer from '@components/footer';
import Header from '@components/Headerlogin';
import Layout from '@src/components/Comunidade_comunidade';
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
