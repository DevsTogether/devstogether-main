import FaceIcon from '@mui/icons-material/Face';
import Chip from '@mui/material/Chip';
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
                            <p>1 Voto</p>
                            <p>225 Votos</p>
                        </div>
                        <div className='itens'>
                            <p>Memored function retorna undefied Porque?</p>
                        </div>
                        <div className='description'>
                            <Chip sx={{ width: '25%', mt: 1, mb: 1, ml: 2, mr: 2 }} icon={<FaceIcon />} label="With Icon" />
                            <p>awfawfwaf 23/11/21</p>
                        </div>
                    </div>
                </Menu>
            </PrincipalContainer>
        </>
    );
}

export default Layout;

