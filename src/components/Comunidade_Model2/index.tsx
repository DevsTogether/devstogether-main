import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import React from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    ml: 50,
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[]
    ) => {
        setFormats(newFormats);
    };

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className="Container" "center" >
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
                        width: 1100,
                        height: 800,
                        ml: 25,
                        mt: 5,
                        backgroundColor: '#2D3237',
                        '&:hover': {
                            backgroundColor: 'gray',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <div className="imagem" "center">
                        <img src="/model2.png" />
                    </div>

                    <TextField
                        sx={{ mt: 2, ml: 25, width: 700, top: 20, mb: 2 }}
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={15}
                        defaultValue="Default Value"
                        variant="filled"
                    ></TextField>

                    <TextField
                        sx={{ ml: 25, width: 700, top: 20 }}
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={1}
                        defaultValue="Default Value"
                        variant="filled"
                    />

                    <Button
                        variant="outlined"
                        sx={{ top: 50, mr: 18 }}
                        color="success"
                    >
                        Próxima
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ top: 50, ml: 90 }}
                        color="success"
                    >
                        Próxima
                    </Button>
                </Box>
            </Modal >
        </div >
    );
}
