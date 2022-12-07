import { Menu, PrincipalContainer } from './style';

const label1 = { inputProps: { 'aria-label': 'Switch demo' } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Layout(): JSX.Element {
    return (
        <>
            <PrincipalContainer>
                <Menu>
                    <div className='Respostas'>
                        <div className='votos'>
                            <p>Votos a favor</p>
                        </div>
                        <div className='itens'>
                            <p>Memored function retorna undefied Porque?</p>
                        </div>
                        <div className='description'>
                            <p>awfawfwaf 23/11/21</p>
                        </div>
                    </div>
                </Menu>
            </PrincipalContainer>
        </>
    );
}

export default Layout;

