import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OauthLoginButtons from '@src/components/LayoutComponets/OauthLoginButtons';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Container } from './styles';

function SignUp(): JSX.Element {
    return (
        <Container>
            <div className="container">
                <div className="Imagem_titulo">
                    <img src="/logo3.png" alt="" />
                </div>

                <title>Devstogether</title>

                <form>
                    <div className='input_line'>
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            color="success"
                            focused
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            color="success"
                            focused
                        />
                    </div>

                    <div className='input_line'>
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            margin="dense"
                            color="success"
                            focused
                        />
                    </div>

                    <div className='input_line'>
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            margin="dense"
                            color="success"
                            focused
                        />
                    </div>
                </form>

                <div className="buttons">
                    <div className="button1">
                        <Link href="/signup/index2">
                            <Button
                                sx={{ width: '55ch' }}
                                variant="contained"
                                color="success"
                            >
                                Success
                            </Button>
                        </Link>
                    </div>
                </div>
                <br></br>

                <div className="pequeno_aviso">
                    <p>Already have an account? Sign in</p>
                </div>
                <OauthLoginButtons />
            </div>
        </Container>
    );
}

export const getSaticProps: GetStaticProps = async () => {

    return {
        props: {
            date: new Date().toISOString(),
        },
        revalidate: 5,
    }
}

export default SignUp;
