import Footer from '@src/layouts/Footer';
import Header from '@src/layouts/Header';
import Perfil from '@src/layouts/Perfilcomponente';
import Layout from '@src/layouts/Perfildousuario1';
import styled from 'styled-components';

function Sobre(): JSX.Element {
    return (
        <>

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