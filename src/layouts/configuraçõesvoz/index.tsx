import { Menu, PrincipalContainer } from './style';

function Configuração(): JSX.Element {
    return (
        <>
            <PrincipalContainer>
                <Menu>
                    <div className='Drawer'>
                        <h3>Minha Conta</h3>
                        <h3>Privacidade e Segurança</h3>
                        <h3>Voz e Video</h3>
                        <h3>Aparência</h3>
                        <h3>Idioma</h3>
                    </div>

                    <div className='Voz'>
                        <h1>Voz</h1>
                        <h3>Alto falantes</h3>
                        <h3>Microfone</h3>
                        <h3>Volume de Entrada</h3>
                    </div>
                </Menu>
            </PrincipalContainer>
        </>
    );
}

export default Configuração;
