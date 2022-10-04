import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
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
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };


  return (
    <div className='Container' align="center">
      <Button onClick={handleOpen} sx={{ mt: 40, mb: 40 }} color="success">Open modal</Button>
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
            <div align="center">
              <img className="imagem" align="center" src="/model3.png" />
              <h3 align="center">Esperar resposta escrita </h3>
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
              backgroundColor: '#02020221'
            }}
          >

            <div align="center">
              <img align="center" src='/model3_.png' />
              <h3 align="center">Resolver em tempo real</h3>
            </div>
          </Box>


        </Box>
      </Modal>
    </div>
  );
}
