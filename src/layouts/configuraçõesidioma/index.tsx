import LanguageUser from '@components/LanguageUser/index';
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

                    <div className='Idioma'>
                        <div className='Idiomaitens'>
                            <h1>Idioma</h1>

                            <h2>Recentes</h2>
                            <hr />
                            <LanguageUser />

                            <h2>Todas</h2>
                            <LanguageUser />
                        </div>
                    </div>
                </Menu>
            </PrincipalContainer>
        </>
    );
}

export default Configuração;

