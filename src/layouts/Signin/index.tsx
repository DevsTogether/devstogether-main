import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OauthLoginButtons from '@src/components/OauthLoginButtons';
import { SignInPageProps } from '@src/pages/signin';
import { Container } from './style';

function Layout({ csrfToken }: SignInPageProps): JSX.Element {

    return (
        <Container>
            <form method="post" action="/api/auth/signin/email" className="container">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                <div className="Imagem_titulo">
                    <img src="/logo3.png" alt="" />
                </div>

                <title>Devstogether</title>

                <div className="textfield">
                    <TextField
                        sx={{ width: '40ch' }}
                        type="email"
                        className="input"
                        id="outlined-basic"
                        variant="outlined"
                        color="success"
                        focused
                        placeholder='Email'
                        name="email"
                    />
                </div>

                <div className="buttons">
                    <div className="button1">
                        <Button
                            sx={{ width: '20ch' }}
                            variant="outlined"
                            color="success"
                            onClick={() => window.location.href = '/signup'}
                        >
                            Register
                        </Button>
                    </div>
                    <div className="button2">
                        <Button
                            sx={{ width: '20ch' }}
                            variant="contained"
                            color="success"
                            type="submit"
                        >
                            Login
                        </Button>
                    </div>
                </div>
                <br />
                <br />
                <hr />
                <OauthLoginButtons />
            </form>
        </Container>
    );
}

export default Layout;
