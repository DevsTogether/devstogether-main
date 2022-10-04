import Footer from '@components/footer';
import Header from '@components/Headerlogin';
import Layout from '@src/components/Comunidade_Model3';
import GlobalStyles from '@src/styles/global';
import theme from '@styles/theme';

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