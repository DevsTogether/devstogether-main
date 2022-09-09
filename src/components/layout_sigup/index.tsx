import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { signIn } from "next-auth/react";
import { Container } from './styles';
import Link from 'next/link'

function SignUp(): JSX.Element {
    return (

        <Container>
            <div className='container'>
                <div className="Imagem_titulo" align="center">
                    <img src="/logo3.png" />
                </div>

                <title>Devstogether</title>

                <div className='textfield'>
                    <TextField sx={{ width: '15ch' }} sx={{ ml: 2 }} className="input" id="outlined-basic" label="Email" variant="outlined" color="success" focused />
                    <TextField sx={{ width: '15ch' }} sx={{ ml: 2 }} className="input" id="outlined-basic" label="Email" variant="outlined" color="success" focused />
                </div>

                <div>
                    <TextField sx={{ width: '49.5ch' }} className="input" id="outlined-basic" label="Email" variant="outlined" margin="dense" color="success" focused />
                </div>

                <div>
                    <TextField sx={{ width: '50ch' }} className="input" id="outlined-basic" label="Email" variant="outlined" margin="dense" color="success" focused />
                </div>

                <div className='buttons'>
                    <div className='button1'>
                        <Link href="/signup/index2">
                            <Button sx={{ width: '55ch' }} variant="contained" color="success">Success</Button>
                        </Link>
                    </div>
                </div><br></br>

                <div className='pequeno_aviso'>
                    <p>Already have an account? Sign in</p>
                </div>

                <div className='Logins'>
                    <img className="img2" src='/image 3.png' onClick={() => signIn('google')} />
                    <img className="img2" src='/image 4.png' onClick={() => signIn('facebook')} />
                    <img className="img2" src='/image 5.png' onClick={() => signIn('github')} />
                </div>


            </div>

        </Container>

    );
}

export default SignUp;