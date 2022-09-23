import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Menu } from './style';


function Configuração(): JSX.Element {

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <>

      <Menu>
        {/* Menu lateral aonde o usuário irá navegar */}
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-times" id="cancel"></i>
        </label>
        <div className="sidebar">
          <header><br></br></header>
          <a href="#" className="active">
            <i className="fas fa-qrcode"></i>
            <span><img src='/conta.png' align="center" />Minha Conta</span>
          </a>
          <a href="">
            <i className="fas fa-link"></i>
            <span><img src='/seguranca.png' align="center" />Privacidade</span>
          </a>
          <a href="#">
            <i className="fas fa-stream"></i>
            <span><img src='/musica.png' align="center" />Voz e Vídeo</span>
          </a>
          <a href="#">
            <i className="fas fa-calendar"></i>
            <span><img src='/aparencia.png' align="center" />Aparência</span>
          </a>
          <a href="#">
            <i className="far fa-question-circle"></i>
            <span><img src='/idiomaicon.png' align="center" />Idioma</span>
          </a>
        </div>

        <div className='botaosair'>
          <img src='/botãosair.png' />
        </div>

        {/* Conteúdo principal da página  */}

        <div className='Container'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 36, height: 36, mt: 2, ml: 1 }} />
          <h1 className='nome_do_usuario'>Marcos Alves</h1><br />
          <div className='subcontainer'>
            <div className='terceiroContainer'>
              <div className='informações'>
                <p>Nome de Usuário<br />Marcos</p>
                <div className='buttoncolumn'>
                  <button className='botões'>editar</button><br />
                  <button className='botões'>editar</button><br />
                  <button className='botões'>editar</button><br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='Bio'>
          <h3>Bio</h3><br />
          <TextField label="fullWidth" id="fullWidth" multiline rows={4} />
          <hr />
        </div>

        <div className='Conexões'>
          <h3>Conexões</h3><br />
          <div className='Container_Conexões'>
            <div className='Subcontainer_Conexões1'>
              <img src='/logo' />
            </div>

            <div className='Subcontainer_Conexões2'>
              <img src='' />
            </div>

            <div className='Subcontainer_Conexões3'>
              <img src='' />
            </div>

            <div className='Subcontainer_Conexões4'>
              <img src='' />
            </div>

            <div className='Subcontainer_Conexões5'>
              <img src='' />
            </div>
          </div><br />

          <div className='Container_Conexões'>
            <img src='awfaw' />

          </div>
          <hr /><br />

          <TextField sx={{ width: '90ch', height: '10ch' }} className="input" id="outlined-basic" label="Email" variant="outlined" color="success" focused />

          <TextField sx={{ width: '90ch', height: '10ch' }} className="input" id="outlined-basic" label="Email" variant="outlined" color="success" focused />

          <TextField sx={{ width: '90ch', height: '10ch' }} className="input" id="outlined-basic" label="Email" variant="outlined" color="success" focused />

          <h1>Senhas e Autentificação</h1><br />
          <Button variant="contained">Contained</Button>

          <hr /><br />

          <h3>Remoção de Contas</h3>
          <p>Desativar conta e reaorfneaopfnaeoingoaewbnoigwaprngangp</p><br />
          <Button variant="outlined" color="error">
            Error
          </Button>

          <Button variant="outlined" color="error">
            Error
          </Button>
        </div>

      </Menu>
    </>

  );
}

export default Configuração;