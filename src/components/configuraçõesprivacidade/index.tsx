import Button from '@mui/material/Button';
import { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { Menu } from './style';

function Configuração(): JSX.Element {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <Menu>
                <body>
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
                                <img src="/conta.png" "center" />
                                Minha Conta
                            </span>
                        </a>
                        <a href="">
                            <i className="fas fa-link"></i>
                            <span>
                                <img src="/seguranca.png" "center" />
                                Privacidade
                            </span>
                        </a>
                        <a href="#">
                            <i className="fas fa-stream"></i>
                            <span>
                                <img src="/musica.png" "center" />
                                Voz e Vídeo
                            </span>
                        </a>
                        <a href="#">
                            <i className="fas fa-calendar"></i>
                            <span>
                                <img src="/aparencia.png" "center" />
                                Aparência
                            </span>
                        </a>
                        <a href="#">
                            <i className="far fa-question-circle"></i>
                            <span>
                                <img src="/idiomaicon.png" "center" />
                                Idioma
                            </span>
                        </a>
                    </div>

                    <div className="botaosair">
                        <img src="/botãosair.png" />
                    </div>

                    {/* Conteúdo principal da página  */}
                    <div className="Conteudo1">
                        <div className="titulo">
                            <h1>Privacidade e Segurança</h1>
                        </div>
                        <h2>Ultilizar dados para melhorar a experiencia</h2>
                        <h4>
                            Esta configuração nos permite a coleta de dados para
                            melhorar a sua experiência
                        </h4>
                    </div>

                    <div className="Conteudo2">
                        <h1>Personalizar expêriencia</h1>
                        <h4>
                            Permite utilização de dados de usuario para ajudar a
                            encontrar uma resposta para perguntas similares
                        </h4>
                    </div>

                    <div className="Conteudo3">
                        <h1>Utilizar dados para funcionamento</h1>
                        <h4>
                            precisamos armazenar e processar alguns dados para
                            te fornecer os serviços básicos, tais como chamadas,
                            utilizar o chat e interagir na comunidade. <br></br>
                            Ao usar o DevsTogether, você nos permite fornecer
                            estes serviços básicos. Você pode interromper isso
                            por desativar ou excluir sua conta
                        </h4>
                    </div>

                    <div className="Conteudo4">
                        <h1>Solicitar todos os meus dados</h1>
                        <h4>
                            Você pode solicitar todos os seus dados de uso da
                            plataforma de uma só vez.
                        </h4>
                    </div>

                    <Button variant="outlined" sx={{ ml: 50 }}>
                        Outlined
                    </Button>
                </body>
            </Menu>
        </>
    );
}

export default Configuração;
