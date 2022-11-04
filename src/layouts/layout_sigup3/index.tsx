import { Javascript } from '@mui/icons-material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
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
                                <div className='submeter_session'>
                                    <Button
                                        sx={{ mr: 58 }}
                                        variant="contained"
                                        color="success"
                                        onClick={handleClose}
                                    >
                                        Submeter
                                    </Button>

                                    <p>Esse teste serve para você provar o minimo de conhecimento na linguagem selecionada, você pode tentar quantas vezes forem nescessarias para passar</p><br />

                                    <InputLabel id="demo-simple-select-label">Linguagem Selecionada</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                        sx={{ width: '50%' }}
                                    >
                                        <MenuItem value={10}><Javascript />Javascript</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>
                            </DialogActions>
                        </Dialog>
                    </div>
                </ThemeProvider>
            </Container>
        </>
    );
}
