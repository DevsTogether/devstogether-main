import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import * as React from 'react';
import { Estilobutton } from './style';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <Container maxWidth="lg">


                <Box
                    sx={{ bgcolor: '#353E46', height: '100%', color: 'white' }}
                >
                    <h2>Área de atuação</h2>
                    <FormGroup
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                            marginLeft: 3,
                        }}
                    >
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Front-end"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Back-end"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Mobile"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Fullstack"
                        />
                    </FormGroup>
                    <FormGroup
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                            marginLeft: 3,
                        }}
                    >
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Pentester & Cibersecurity"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Designer"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Game Developer"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Data Science"
                        />
                    </FormGroup>
                    <FormGroup
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                            marginLeft: 3,
                        }}
                    >
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Devops & Cloud Computing"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Estudante"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Web3"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Outro"
                        />
                    </FormGroup><br />


                    <h2 className='linguagens'>Linguagens</h2>
                    <FormGroup
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                        }}
                    >
                        <Estilobutton className="container">
                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/javaIcon.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/javaIcon.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/javaIcon.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/pythonIcon.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/pythonIcon.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/pythonIcon.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/pythonIcon.png" alt="" />
                                </Button>
                            </Box>
                        </Estilobutton>
                    </FormGroup>
                    <FormGroup
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 5,
                        }}
                    >
                        <Estilobutton className="container">
                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>
                        </Estilobutton>
                    </FormGroup>
                    <FormGroup
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 0,
                        }}
                    >
                        <Estilobutton className="container">
                            <br />
                            <br />
                            <br />

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>
                        </Estilobutton>
                    </FormGroup>
                    <FormGroup
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 0,
                        }}
                    >
                        <Estilobutton className="container">
                            <br />
                            <br />
                            <br />

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>

                            <Box
                                className="caixadobotao"
                                mt={5}
                                component="span"
                                sx={{
                                    p: 3.5,
                                    border: '1px grey',
                                }}
                            >
                                <Button>
                                    <img src="/logoJS.png" alt="" />
                                </Button>
                            </Box>
                        </Estilobutton>
                    </FormGroup>
                </Box>
            </Container>
        </React.Fragment>
    );
}
