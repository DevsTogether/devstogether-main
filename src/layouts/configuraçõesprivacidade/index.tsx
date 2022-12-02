import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { Menu, PrincipalContainer } from './style';

const label1 = { inputProps: { 'aria-label': 'Switch demo' } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Configuração(): JSX.Element {
    return (
        <>
            <PrincipalContainer>
                <Menu>
                    <div className='Drawer'>
                        <div className='draweritens'>
                            <h3><img src='/conta.png' />Minha Conta</h3>
                            <h3><img src='/seguranca.png' />Privacidade e Segurança</h3>
                            <h3><img src='/conta.png' />Voz e Video</h3>
                            <h3><img src='/aparencia.png' />Aparência</h3>
                            <h3><img src='/idiomaicon.png' />Idioma</h3>
                        </div>
                    </div>

                    <div className='Privacidade'>
                        <div className='Privacidadeitens'>
                            <h1>Privacidade e Segurança</h1>
                            <h2>Ultilizar dados para melhorar a experiencia<Switch sx={{ ml: '20%' }} {...label} defaultChecked /></h2>
                            <h4>
                                Esta configuração nos permite a coleta de dados para
                                melhorar a sua experiência
                            </h4>

                            <h2>Personalizar expêriencia</h2>
                            <h4>
                                Permite utilização de dados de usuario para ajudar a
                                encontrar uma resposta para perguntas similares
                            </h4>

                            <h2>Utilizar dados para funcionamento</h2>
                            <h4>
                                precisamos armazenar e processar alguns dados para
                                te fornecer os serviços básicos, tais como chamadas,
                                utilizar o chat e interagir na comunidade. <br></br>
                                Ao usar o DevsTogether, você nos permite fornecer
                                estes serviços básicos. Você pode interromper isso
                                por desativar ou excluir sua conta
                            </h4>

                            <h2>Solicitar todos os meus dados</h2>
                            <h4>
                                Você pode solicitar todos os seus dados de uso da
                                plataforma de uma só vez.
                            </h4>
                            <Button variant="outlined" sx={{ width: '10%' }}>Solicitar</Button>
                        </div>
                    </div>
                </Menu>
            </PrincipalContainer>
        </>
    );
}

export default Configuração;

