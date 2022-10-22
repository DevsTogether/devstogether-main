import { Box } from '@mui/system';
import { Container } from './style';

function EmailVerification(): JSX.Element {
    return (
        <Container>
            <Box>
                <h1>Verifique o <i>Link mágico</i> que foi enviado ao seu email</h1>
            </Box>
        </Container>
    );
}

export default EmailVerification;
