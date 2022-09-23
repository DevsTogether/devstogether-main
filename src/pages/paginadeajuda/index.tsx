import Footer from '@components/footer';
import Header from '@components/Headerlogin';
import Layout from '@src/components/paginadeajuda';
import GlobalStyles from '@src/styles/global';
import theme from '@styles/theme';

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