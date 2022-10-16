import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
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
                    <a href="#">
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
                <div className="Conteudo">
                    <h1>Voz</h1>
                    <h2>Altos Falantes</h2>
                    <Box sx={{ minWidth: 200 }}>
                        <FormControl sx={{ m: 1, minWidth: 180 }}>
                            <InputLabel id="demo-simple-select-label">
                                Age
                            </InputLabel>
                            <Select
                                style={{ minHeight: 52 }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <div className="volume">
                        <Box sx={{ width: 200, mt: 5 }}>
                            {/* Parte do volume da página */}
                            <h3>Volume de Saída</h3>
                            <Stack
                                spacing={2}
                                direction="row"
                                sx={{ mb: 1 }}
                                alignItems="center"
                            >
                                <VolumeDown />
                                <Slider aria-label="Volume" />
                                <VolumeUp />
                            </Stack>
                        </Box>
                    </div>
                </div>

                <div className="Conteudo">
                    <h1>Microfone</h1>
                    <Box sx={{ minWidth: 200 }}>
                        <FormControl sx={{ m: 1, minWidth: 180 }}>
                            <InputLabel id="demo-simple-select-label">
                                Age
                            </InputLabel>
                            <Select
                                style={{ minHeight: 52 }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <div className="volume">
                        <Box sx={{ width: 200 }}>
                            {/* Parte do volume da página */}
                            <h3>Volume de Entrada</h3>
                            <Stack
                                spacing={2}
                                direction="row"
                                sx={{ mb: 1 }}
                                alignItems="center"
                            >
                                <VolumeDown />
                                <Slider aria-label="Volume" />
                                <VolumeUp />
                            </Stack>
                        </Box>
                        <br />
                        <br />
                        <br />

                        <Checkbox {...label} defaultChecked />

                        <h1>Vídeo</h1>
                        <h3>Camêra</h3>
                        <Box sx={{ minHeight: 64 }}>
                            <FormControl sx={{ m: 1, minWidth: 180 }}>
                                <InputLabel id="demo-simple-select-label">
                                    Age
                                </InputLabel>
                                <Select
                                    style={{ minHeight: 52 }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
            </Menu>
        </>
    );
}

export default Configuração;
