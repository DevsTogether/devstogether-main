import FaceIcon from '@mui/icons-material/Face';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Container } from './style';


function Layout(): JSX.Element {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <Container>
                <Box sx={{ width: '80%', bgcolor: '#353E46', height: '70%' }} align="center">
                    <Tabs value={value} onChange={handleChange} centered textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example">
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                        <Tab label="Item Three" />
                    </Tabs><br />

                    <div className='Emblemas2'>
                        <div>
                            <div className='votos'>
                                <p>1 Voto</p>
                                <p>256 Votos</p>
                            </div>
                            <h4>O que faz o display flex no CSS</h4>
                            <Chip icon={<FaceIcon />} label="With Icon" />
                            <p className='Faca_pergunta'>Faça sua 1 pergunta</p>
                        </div>
                    </div>

                    <div className='Emblemas3'>
                        <div>
                            <div className='votos'>
                                <p>1 Voto</p>
                                <p>256 Votos</p>
                            </div>
                            <h4>O que faz o display flex no CSS</h4>
                            <Chip icon={<FaceIcon />} label="With Icon" />
                            <p className='Faca_pergunta'>Faça sua 1 pergunta</p>
                        </div>
                    </div>

                    <div className='Emblemas4'>
                        <div>
                            <div className='votos'>
                                <p>1 Voto</p>
                                <p>256 Votos</p>
                            </div>
                            <h4>O que faz o display flex no CSS</h4>
                            <Chip icon={<FaceIcon />} label="With Icon" />
                            <p className='Faca_pergunta'>Faça sua 1 pergunta</p>
                        </div>
                    </div>

                    <div className='Emblemas5'>
                        <div>
                            <div className='votos'>
                                <p>1 Voto</p>
                                <p>256 Votos</p>
                            </div>
                            <h4>O que faz o display flex no CSS</h4>
                            <Chip icon={<FaceIcon />} label="With Icon" />
                            <p className='Faca_pergunta'>Faça sua 1 pergunta</p>
                        </div>
                    </div>

                </Box>

            </Container>
        </>
    );
}

export default Layout;
