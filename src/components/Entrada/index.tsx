import { Container } from './style';

function Layout(): JSX.Element {
    return (
        <Container>
            <div className="container">
                <div className="content">
                    <img className="image_ilustration" src="/iniciar_chamada.png" />
                    <p>
                        Você inicia uma chamada para resolver o problema junto a um amigo
                    </p>
                    <a href="/room">Iniciar Uma chamada</a>
                </div>
            </div>

            <div className="container">
                <div className="content">
                    <img className="image_ilustration" src="/Entrar_comunidade.png" />
                    <p>
                        Você tira suas dúvidas e ajuda outros devs, por meio das suas respostas ou entrando em uma chamada para ajudar ou ser ajudado
                    </p>
                    <a href="/community">Entrar na comunidade</a>
                </div>
            </div>
        </Container>
    );
}

export default Layout;
