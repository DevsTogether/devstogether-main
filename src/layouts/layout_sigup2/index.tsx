import CssIcon from '@mui/icons-material/Css';
import DeleteIcon from '@mui/icons-material/Delete';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from './styles';

/* function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#101010' : '#fff',
                color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
} */

export default function RowAndColumnGap() {
    return (
        <>
            <Container>
                <div className="container">
                    <div className="Imagem_titulo">
                        <img src="/logo3.png" alt="" />
                        <h1>Sign Up</h1>
                        <br />
                        <p>
                            Para entrar primeiro prove suas habilidades.
                            <br />
                            Escolha uma linguagem para começar.
                        </p>
                    </div>

                    <title>Devstogether</title>
                    <div style={{ width: '125%' }}>
                        <Box
                            sx={{
                                display: 'grid',
                                columnGap: 3,
                                rowGap: 1,
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                mr: 30,
                                ml: 30,
                            }}
                        >
                            <Button
                                sx={{ width: '100%' }}
                                variant="outlined"
                                startIcon={<JavascriptIcon />}
                                color="success"
                            >
                                Javascript
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Python
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Java
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<PhpIcon />}
                                color="success"
                            >
                                PHP
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<CssIcon />}
                                color="success"
                            >
                                CSS
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="success"
                            >
                                Outlined
                            </Button>
                        </Box>
                    </div>
                </div>
            </Container>
        </>
    );
}
