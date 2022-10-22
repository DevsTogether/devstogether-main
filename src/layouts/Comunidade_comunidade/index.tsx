import { Javascript } from '@mui/icons-material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FaceIcon from '@mui/icons-material/Face';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LanguageMenuOption from '@src/components/LanguageMenuOption';


import { Container, LanguageMenuContainer, Perguntas } from './style';

export default function Comunidade(): JSX.Element {
    return (
        <>
            <Container>
                <LanguageMenuContainer>
                    <h3>Linguagens</h3>
                    <LanguageMenuOption
                        image='/boloicon.png'
                        label='Todas as linguagens'
                    />
                    <LanguageMenuOption
                        image='/boloicon.png'
                        label='Python'
                    />
                    <LanguageMenuOption
                        image='/boloicon.png'
                        label='C++'
                    />
                    <LanguageMenuOption
                        label="Javascript"
                        imageComponent={() => <Javascript />}
                    />
                    <LanguageMenuOption
                        image='/boloicon.png'
                        label='Java'
                    />
                </LanguageMenuContainer>
                <Perguntas>
                    <div className="dificuldade">
                        <img src="/community_problem.svg" alt="" />
                        <div className="botao">
                            <h1>Tem alguma dificuldade?</h1>
                            <Button variant="contained" sx={{ mr: 20 }}>
                                faça uma pergunta
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

                {/* <Desafios>
                    <h3>Desafios para fazer:</h3>
                    <hr />
                    <div className="separador">
                        <div className="desafios1">
                            <h4>Pode contar comigo</h4>
                            <p>Realize 10 chamadas</p>
                        </div>

                        <div className="progress">
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

                        <div className="progress">
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

                        <div className="progress">
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

                        <div className="progress">
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

                        <div className="progress">
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

                        <div className="progress">
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

                        <div className="progress">
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

                        <div className="progress">
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

                        <div className="progress">
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

                        <div className="progress">
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

                        <div className="progress">
                            <Slider
                                sx={{ width: 100, top: '50%', mr: 5 }}
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                    <hr />
                </Desafios> */}
            </Container>
        </>
    );
}


