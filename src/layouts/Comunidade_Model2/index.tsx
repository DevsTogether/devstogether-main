import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import React from 'react';

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="Container">
            <Button
                onClick={handleOpen}
                sx={{ mt: 40, mb: 40, ml: '50%' }}
                color="success"
            >
                Open modal
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        width: '65%',
                        height: '85%',
                        mt: 5,
                        ml: '15%',
                        backgroundColor: '#2D3237',
                        '&:hover': {
                            backgroundColor: 'gray',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <div className="imagem">
                        <img src="/model2.png" alt="" />
                    </div>

                    <TextField
                        sx={{ mt: 2, ml: '20%', width: '50%', top: 20, mb: 2 }}
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={15}
                        defaultValue="Default Value"
                        variant="filled"
                    ></TextField>

                    <TextField
                        sx={{ ml: '20%', width: '50%', top: 20, mb: 4 }}
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={1}
                        defaultValue="Default Value"
                        variant="filled"
                    />

                    <div className='botões'>
                        <Button
                            variant="outlined"
                            sx={{ mt: 2, mr: 2, ml: 3 }}
                            color="success"
                        >
                            Próxima
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ mt: 2, mr: 2, ml: '60%' }}
                            color="success"
                        >
                            Próxima
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
