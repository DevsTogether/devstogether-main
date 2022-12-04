import { Menu, PrincipalContainer } from './style';

const label1 = { inputProps: { 'aria-label': 'Switch demo' } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Layout(): JSX.Element {
    return (
        <>
            <PrincipalContainer>
                <Menu>
                    <div className='Conquistas'>
                        <h4>Benfeitor</h4>
                        <div className='itens'>
                            <img src='/iconemblema.png' />
                            <p>Faça a sua primeira pergunta</p>
                            <img src='/trofeuicon.png' />
                        </div>
                    </div>
                </Menu>
            </PrincipalContainer>
        </>
    );
}

export default Layout;

