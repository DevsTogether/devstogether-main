import Button from '@mui/material/Button';
import { Container } from './style';

function Layout(): JSX.Element {
    return (
        <Container>
            <div className="button">
                <h1>Contato</h1>
                <p>PJOpajwfopjeopajpasgiopsajgesg´jirs´jgriá</p>
                <Button
                    sx={{ width: '20ch' }}
                    variant="contained"
                    color="success"
                >
                    Success
                </Button>
            </div>
            <img src="/contato.png" />
        </Container>
    );
}

export default Layout;
