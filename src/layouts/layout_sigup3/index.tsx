import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import * as React from 'react';
import { Container } from './style';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Container>
                <div className="titulo">
                    <h1>Vamos Iniciar o Teste</h1>
                </div>

                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <div className="button">
                        <Button
                            sx={{ mt: 30, mb: 50, ml: '42%' }}
                            variant="outlined"
                            color="success"
                            onClick={handleClickOpen}
                        >
                            CLique para Começar
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Existe um erro neste código</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Esse teste serve para você provar o minimo de
                                    conhecimento na linguagem selecionada, você pode
                                    tentar quantas vezes forem nescesssarias para
                                    passar.
                                </DialogContentText>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={9}
                                    value="function mulktiply(a, b) {}"
                                    style={{ width: 500 }}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    sx={{ mr: 58 }}
                                    variant="contained"
                                    color="success"
                                    onClick={handleClose}
                                >
                                    Submeter
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </ThemeProvider>
            </Container>
        </>
    );
}
