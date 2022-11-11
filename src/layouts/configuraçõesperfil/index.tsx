import ProfileUser from '@components/ProfileUser';
import { Container, Drawer, Menu } from './style';


function Configuração(): JSX.Element {

    return (
        <>
            <Container>
                <Drawer>
                    {/* Menu lateral aonde o usuário irá navegar */}
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">
                        <i className="fas fa-bars" id="btn"></i>
                        <i className="fas fa-times" id="cancel"></i>
                    </label>
                    <div className="sidebar">
                        <header>
                            <br></br>
                        </header>
                        <a href="#" className="active">
                            <i className="fas fa-qrcode"></i>
                            <span>
                                <img src="/conta.png" alt="" />
                                Minha Conta
                            </span>
                        </a>
                        <a href="">
                            <i className="fas fa-link"></i>
                            <span>
                                <img src="/seguranca.png" alt="" />
                                Privacidade
                            </span>
                        </a>
                        <a href="#">
                            <i className="fas fa-stream"></i>
                            <span>
                                <img src="/musica.png" alt="" />
                                Voz e Vídeo
                            </span>
                        </a>
                        <a href="#">
                            <i className="fas fa-calendar"></i>
                            <span>
                                <img src="/aparencia.png" alt="" />
                                Aparência
                            </span>
                        </a>
                        <a href="#">
                            <i className="far fa-question-circle"></i>
                            <span>
                                <img src="/idiomaicon.png" alt="" />
                                Idioma
                            </span>
                        </a>
                    </div>

                </Drawer>
                <Menu>
                    <div>

                        <h2>Conta</h2>
                        <ProfileUser />
                    </div>
                </Menu>
            </Container>
        </>
    );
}

export default Configuração;
