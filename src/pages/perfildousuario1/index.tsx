import Footer from '@components/footer';
import Header from '@components/Headerlogin';
import Layout from '@src/components/Perfildousuario1';
import GlobalStyles from '@src/styles/global';
import Perfil from '@src/components/Perfilcomponente';
import theme from '@styles/theme';

function Sobre(): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>
                <Perfil />
                <Layout />
            </main>
            <Footer />
        </>

    );
}

export default Sobre;