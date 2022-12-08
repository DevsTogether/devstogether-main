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
                        width: '70%',
                        height: '85%',
                        mt: 5,
                        ml: '15%',
                        alignContent: 'center',
                        backgroundColor: '#2D3237',
                        '&:hover': {
                            backgroundColor: 'gray',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <div className="imagem">
                        <img src="/model1.png" alt="" />
                    </div>

                    <TextField
                        sx={{ ml: '20%', width: '50%', top: 20 }}
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={1}
                        defaultValue="Default Value"
                        variant="filled"
                    />

                    <TextField
                        sx={{ mt: 5, ml: '20%', width: '50%', top: 20 }}
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={15}
                        defaultValue="Default Value"
                        variant="filled"
                    ></TextField>

                    <Button
                        variant="contained"
                        sx={{ top: 450, ml: 5 }}
                        color="success"
                    >
                        Próxima
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
