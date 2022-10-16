import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FaceIcon from '@mui/icons-material/Face';
import JavascriptIcon from '@mui/icons-material/Javascript';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Slider from '@mui/material/Slider';

import { Container, Desafios, Drawer, Perguntas } from './style';

function Comunidade(): JSX.Element {
    return (
        <>
            <Container>
                <Drawer>
                    <h3>Linguagem</h3>
                    <hr />
                    <h4>
                        <img src="/boloicon.png" />
                        Todas Linguagens
                    </h4>
                    <h4>
                        <img src="/boloicon.png" />
                        Python
                    </h4>
                    <h4>
                        <img src="/boloicon.png" />
                        C++
                    </h4>
                    <h4>{<JavascriptIcon />}Java</h4>
                    <h4>
                        <img src="/boloicon.png" />
                        Python
                    </h4>
                    <h4>
                        <img src="/boloicon.png" />
                        C++
                    </h4>
                    <h4>
                        <img src="/boloicon.png" />
                        Java
                    </h4>
                    <h4>
                        <img src="/boloicon.png" />
                        Python
                    </h4>
                    <h4>
                        <img src="/boloicon.png" />
                        C++
                    </h4>
                    <h4>
                        <img src="/boloicon.png" />
                        Java
                    </h4>
                    <h4>
                        <img src="/boloicon.png" />
                        Python
                    </h4>
                    <h4>
                        <img src="/boloicon.png" />
                        C++
                    </h4>
                    <h4>
                        <img src="/boloicon.png" />
                        Java
                    </h4>
                </Drawer>
                <Perguntas>
                    <div className="dificuldade">
                        <img src="/iniciar_chamada.png" />
                        <div className="botao">
                            <h1>Tem alguma dificuldade?</h1>
                            <Button variant="contained" sx={{ mr: 20 }}>
                                Contained
                            </Button>
                        </div>
                    </div>

                    <hr />

                    <div className="perguntas1">
                        <div>
                            <div className="votos">
                                <p>1 Voto</p>
                                <p>256 Votos</p>
                            </div>
                            <h4>O que faz o display flex no CSS</h4>
                            <br />
                            <Chip
                                icon={<EmojiEventsIcon />}
                                label="With Icon"
                            />
                        </div>
                        <p className="Faca_pergunta">data: 20/12/2026</p>
                    </div>

                    <hr />

                    <div className="perguntas1">
                        <div>
                            <div className="votos">
                                <p>1 Voto</p>
                                <p>256 Votos</p>
                            </div>
                            <h4>O que faz o display flex no CSS</h4>
                            <br />
                            <Chip
                                icon={<EmojiEventsIcon />}
                                label="With Icon"
                            />
                        </div>
                        <p className="Faca_pergunta">data: 20/12/2026</p>
                    </div>

                    <hr />

                    <div className="perguntas1">
                        <div>
                            <div className="votos">
                                <p>1 Voto</p>
                                <p>256 Votos</p>
                            </div>
                            <h4>O que faz o display flex no CSS</h4>
                            <br />
                            <Chip icon={<FaceIcon />} label="With Icon" />
                        </div>
                        <p className="Faca_pergunta">data: 20/12/2026</p>
                    </div>

                    <hr />

                    <div className="perguntas1">
                        <div>
                            <div className="votos">
                                <p>1 Voto</p>
                                <p>256 Votos</p>
                            </div>
                            <h4>O que faz o display flex no CSS</h4>
                            <br />
                            <Chip icon={<FaceIcon />} label="With Icon" />
                        </div>
                        <p className="Faca_pergunta">data: 20/12/2026</p>
                    </div>
                </Perguntas>

                <Desafios>
                    <h3>Desafios para fazer:</h3>
                    <hr />
                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress" align="center">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress" align="center">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress" align="center">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress" align="center">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress" align="center">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress" align="center">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress" align="center">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress" align="center">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress" align="center">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress" align="center">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress" align="center">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />
                </Desafios>
            </Container>
        </>
    );
}

export default Comunidade;
