import Button from '@mui/material/Button';
import { Container } from './style';

function Layout(): JSX.Element {
    return (
        <Container>
            <div className="button">
                <h1>Contato</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum facere minima maiores perspiciatis odit, quod, odio eligendi ratione sunt modi praesentium ad sed, excepturi necessitatibus tenetur? Repudiandae accusantium iusto culpa.</p>
                <Button
                    sx={{ width: '20ch' }}
                    variant="contained"
                    color="success"
                >
                    Success
                </Button>
            </div>
            <img src="/contato.png" alt="" />
        </Container>
    );
}

export default Layout;
