import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container } from './style';

function Layout(): JSX.Element {
    return (

        <Container>
            <div className='container'>
                <div className="Imagem_titulo" align="center">
                    <img src="/logo3.png"  />
                </div>

                <title>Devstogether</title>

                <div className='textfield'>
                    <TextField className="input" id="outlined-basic" label="Email" variant="outlined" />
                </div>

                <div className='buttons'>
                    <div className='button1'>
                        <Button variant="contained" color="success">Success</Button>
                    </div>
                    <div className='button2'>
                        <Button variant="contained" color="success">Success</Button>
                    </div>
                </div>
            </div>

        </Container>

    );
}

export default Layout;