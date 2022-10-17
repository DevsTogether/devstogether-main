import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { signIn } from 'next-auth/react';
import { Container } from './style';

function Layout(): JSX.Element {
    return (
        <Container>
            <div className="container">
                <div className="Imagem_titulo">
                    <img src="/logo3.png" />
                </div>

                <title>Devstogether</title>

                <div className="textfield">
                    <TextField
                        sx={{ width: '40ch' }}
                        className="input"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        color="success"
                        focused
                    />
                </div>

                <div className="buttons">
                    <div className="button1">
                        <Button
                            sx={{ width: '20ch' }}
                            variant="outlined"
                            color="success"
                        >
                            Success
                        </Button>
                    </div>
                    <div className="button2">
                        <Button
                            sx={{ width: '20ch' }}
                            variant="contained"
                            color="success"
                        >
                            Success
                        </Button>
                    </div>
                </div>
                <br></br>
                <hr />

                <div className="Logins">
                    <img
                        className="img2"
                        src="/image 3.png"
                        onClick={() => signIn('google')}
                    />
                    <img
                        className="img2"
                        src="/image 4.png"
                        onClick={() => signIn('facebook')}
                    />
                    <img
                        className="img2"
                        src="/image 5.png"
                        onClick={() => signIn('github')}
                    />
                </div>
            </div>
        </Container >
    );
}

export default Layout;
