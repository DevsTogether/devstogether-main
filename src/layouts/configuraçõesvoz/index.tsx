import SelectAltoFalantes from '@components/SelectAltoFalantes/index';
import SelectMicrofone from '@components/SelectMicrofone/index';
import SelectVideo from '@components/SelectVideo/index';
import Slider from '@components/VolumeSlider/index';
import Checkbox from '@mui/material/Checkbox';
import { Menu, PrincipalContainer } from './style';

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

                    <div className='Voz'>
                        <div className='VozItens'>
                            <h1>Voz</h1>
                            <h3>Alto falantes</h3>
                            <SelectAltoFalantes />
                            <h3>Volume de Entrada</h3>
                            <Slider />
                            <h3>Microfone</h3>
                            <SelectMicrofone />
                            <h3>Volume de Saída</h3>
                            <Slider />
                            <div className='checkbox'>
                                <Checkbox {...label} sx={{ width: '5%' }} />
                                <p>Sempre Iniciar chamadas com o microfone ligado</p>
                            </div>
                            <h1>Vídeo</h1>
                            <SelectVideo />
                            <div className='imagem_vídeo'>
                                <img src='/image 3.png' />
                            </div>
                        </div>
                    </div>
                </Menu>
            </PrincipalContainer>
        </>
    );
}

export default Configuração;
