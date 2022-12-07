import CssIcon from '@mui/icons-material/Css';
import DeleteIcon from '@mui/icons-material/Delete';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';
import Button from '@mui/material/Button';
import Link from 'next/link';
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
                    <div className='languages'>
                        <Link href="/signup/index3">

                            <Button
                                variant="outlined"
                                startIcon={<JavascriptIcon />}
                                color="success"
                                sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                            >
                                Javascript
                            </Button>
                        </Link>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Python
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Python
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Java
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<PhpIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            PHP
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<CssIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            CSS
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="success"
                            sx={{ ml: 2, mb: 2, mr: 2, width: '20%' }}
                        >
                            Outlined
                        </Button>

                    </div>
                </div>
            </Container>
        </>
    );
}
