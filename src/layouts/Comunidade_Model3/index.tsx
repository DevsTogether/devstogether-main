import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import React from 'react';
import { Container } from './style';

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container>
            <div className="Container">
                <Button
                    onClick={handleOpen}
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
                    <div className='option-card-container' >
                        <Box
                            sx={{
                                width: '50%',
                                height: '50%',
                                alignItems: 'center',
                                color: 'white',
                                backgroundColor: '#02020221',
                            }}
                        >
                            <div className='Itens'>
                                <img className="imagem" src="/model3.png" alt="" />
                                <h3>Esperar resposta escrita </h3>
                            </div>
                        </Box>

                        <Box
                            sx={{
                                width: '50%',
                                height: '50%',
                                alignItems: 'center',
                                color: 'white',
                                backgroundColor: '#02020221',
                            }}
                        >
                            <div>
                                <img src="/model3_.png" alt="" />
                                <h3>Resolver em tempo real</h3>
                            </div>
                        </Box>
                    </div>
                </Modal>
            </div>
        </Container>

    );
}
