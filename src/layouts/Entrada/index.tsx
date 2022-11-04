import { GetStaticPaths } from 'next';
import { Container } from './style';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: false,
    }
}

function Layout(): JSX.Element {
    return (
        <Container>
            <div className="container">
                <div className="content">
                    <img
                        className="image_ilustration"
                        src="/iniciar_chamada.png"
                        alt=""
                    />
                    <p>
                        Você inicia uma chamada para resolver o problema junto a
                        um amigo
                    </p>
                    <a href="/room" className="cta">Iniciar Uma chamada</a>
                </div>
            </div>

            <div className="container">
                <div className="content">
                    <img
                        className="image_ilustration"
                        src="/Entrar_comunidade.png"
                        alt=""
                    />
                    <p>
                        Você tira suas dúvidas e ajuda outros devs, por meio das
                        suas respostas ou entrando em uma chamada para ajudar ou
                        ser ajudado
                    </p>
                    <a href="/community" className="cta">Entrar na comunidade</a>
                </div>
            </div>

        </Container>
    );
}

export default Layout;
