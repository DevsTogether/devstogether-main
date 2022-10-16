import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { Container } from './style';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
                <div className="titulo" align="center">
                    <h1>Vamos Iniciar o Teste</h1>
                </div>
            </Container>

            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <div className="button" align="center">
                    <Button
                        sx={{ mt: 30, mb: 50 }}
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
                                placeholder="Minimum 3 rows"
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
        </>
    );
}
