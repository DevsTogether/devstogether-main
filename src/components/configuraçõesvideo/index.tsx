import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Menu } from './style';

const currencies = [
    {
        value: 'Grande',
        label: 'Large',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

export default function SelectTextFields() {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

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
                    <header>
                        <br></br>
                    </header>
                    <a href="#" className="active">
                        <i className="fas fa-qrcode"></i>
                        <span>
                            <img src="/conta.png" align="center" />
                            Minha Conta
                        </span>
                    </a>
                    <a href="">
                        <i className="fas fa-link"></i>
                        <span>
                            <img src="/seguranca.png" align="center" />
                            Privacidade
                        </span>
                    </a>
                    <a href="#">
                        <i className="fas fa-stream"></i>
                        <span>
                            <img src="/musica.png" align="center" />
                            Voz e Vídeo
                        </span>
                    </a>
                    <a href="#">
                        <i className="fas fa-calendar"></i>
                        <span>
                            <img src="/aparencia.png" align="center" />
                            Aparência
                        </span>
                    </a>
                    <a href="#">
                        <i className="far fa-question-circle"></i>
                        <span>
                            <img src="/idiomaicon.png" align="center" />
                            Idioma
                        </span>
                    </a>
                </div>

                <div className="botaosair">
                    <img src="/botãosair.png" />
                </div>

                {/* Conteúdo principal da página  */}

                <div className="Container">
                    <h1>Aparência</h1>

                    <h2>Tema</h2>
                    <div className="Container_Conexões">
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                        />
                    </div>
                    <br />

                    <div className="Container_Conexões">
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                        />
                    </div>
                    <br />

                    <div className="Container_Conexões">
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                        />
                    </div>
                    <br />

                    <h2>Tamanho da Fonte</h2>

                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Tamanho"
                        value={currency}
                        onChange={handleChange}
                        helperText="Escolha o tamanho ideal"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </Menu>
        </>
    );
}
