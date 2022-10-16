import Footer from '@components/footer';
import Header from '@components/Headerlogin';
import Perfil from '@src/components/Perfilcomponente';
import Layout from '@src/components/Perfildousuario2';
import GlobalStyles from '@src/styles/global';
import styled from 'styled-components';

function Sobre(): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Container>
                <main className="container">
                    <Perfil />
                    <Layout />
                </main>
            </Container>
            <Footer />
        </>
    );
}

export const Container = styled.div`
    .container {
        display: flex;
        width: 100%;

        flex-direction: row;
    }
`;

export default Sobre;
