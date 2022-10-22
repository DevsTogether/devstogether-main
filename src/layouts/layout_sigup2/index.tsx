import DeleteIcon from '@mui/icons-material/Delete';
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
                    <div style={{ width: '100%' }}>
                        <Box
                            sx={{
                                display: 'grid',
                                columnGap: 3,
                                rowGap: 1,
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                mr: 20,
                                ml: 20,
                            }}
                        >
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                Outlined
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
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
