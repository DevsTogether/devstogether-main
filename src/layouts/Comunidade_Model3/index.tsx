import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import React from 'react';

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="Container">
            <Button
                onClick={handleOpen}
                sx={{ mt: 40, mb: 40 }}
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
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '50%',
                        height: '45%',
                        ml: '25%',
                        mt: 20,
                        backgroundColor: '#2D3237',
                    }}
                >
                    <Box
                        sx={{
                            width: '60%',
                            height: 200,
                            ml: '5%',
                            mr: '5%',
                            mt: 12,
                            color: 'white',
                            backgroundColor: '#02020221',
                        }}
                    >
                        <div>
                            <img className="imagem" src="/model3.png" alt="" />
                            <h3>Esperar resposta escrita </h3>
                        </div>
                    </Box>

                    <Box
                        sx={{
                            width: '60%',
                            height: 200,
                            ml: '5%',
                            mr: '5%',
                            mt: 12,
                            color: 'white',
                            backgroundColor: '#02020221',
                        }}
                    >
                        <div>
                            <img src="/model3_.png" alt="" />
                            <h3>Resolver em tempo real</h3>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
