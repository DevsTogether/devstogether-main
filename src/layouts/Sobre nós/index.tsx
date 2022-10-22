import { Container } from './style';

function Layout(): JSX.Element {
    return (
        <Container>
            <h1>O que é o projeto Devstogether</h1>

            <div className="video">
                <video src="wsinfw"></video>
                <p>
                    O projeto Devstogether tem o objetivo de que desenvolvedores
                    ajudem e sejam ajudadados de forma
                    <br />
                    prática e dinâmica, compartilhando experiências com outros
                    desenvolvedores e contribuindo na comunidade de
                    desenvolvedores
                </p>
            </div>

            <h1>Nosso time é composto por quatro integrantes</h1>

            <div className="container">
                <div className="card1">
                    <div className="content">
                        <img src="/iniciar_chamada.png" alt="" />
                        <h3>Matheus</h3>
                        <a href="#">Entrar</a>
                    </div>
                </div>

                <div className="container2">
                    <div className="card2">
                        <div className="content2">
                            <img src="/Entrar_comunidade.png" alt="" />
                            <h3>Marcos</h3>
                            <a href="#">Entrar</a>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="card1">
                        <div className="content">
                            <img src="/iniciar_chamada.png" alt="" />
                            <h3>Wayne</h3>
                            <a href="#">Entrar</a>
                        </div>
                    </div>

                    <div className="container2">
                        <div className="card2">
                            <div className="content2">
                                <img src="/Entrar_comunidade.png" alt="" />
                                <h3>Victor</h3>
                                <a href="#">Entrar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Layout;
