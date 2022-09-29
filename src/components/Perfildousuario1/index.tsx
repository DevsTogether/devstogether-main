import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

        <Container>
            <Box sx={{ width: '40%', bgcolor: '#353E46', height: '70%' }}>
                <Tabs value={value} onChange={handleChange} centered textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                    <Tab label="Item Three" />
                </Tabs><br />

                <div className='Emblemas1'>
                    <h3>Emblemas</h3>
                    <p>Responda perguntas, ajude outros desenvolvedores e desbloqueie emblemas!</p>
                </div>

                <div className='Emblemas2'>
                    <div>
                        <h3><img src="/iconemblema.png" />Benfeitor</h3>
                        <p>Faça sua 1 pergunta</p>
                    </div>
                    <img className="trofeu" src="/trofeuicon.png" align="right" />
                </div>

                <div className='Emblemas3'>
                    <div>
                        <h3><img src="/iconemblema.png" />Benfeitor</h3>
                        <p>Faça sua 1 pergunta</p>
                    </div>
                    <img className="trofeu" src="/trofeuicon.png" align="right" />

                </div>

                <div className='Emblemas4'>
                    <div>
                        <h3><img src="/iconemblema.png" />Benfeitor</h3>
                        <p>Faça sua 1 pergunta</p>
                    </div>
                    <img className="trofeu" src="/trofeuicon.png" align="right" />
                </div>

                <div className='Emblemas5'>
                    <div>
                        <h3><img src="/iconemblema.png" />Benfeitor</h3>
                        <p>Faça sua 1 pergunta</p>
                    </div>
                    <img className="trofeu" src="/trofeuicon.png" align="right" />
                </div>
            </Box>


            <div className='button'>
                <Button sx={{ mr: 30, top: 2 }} variant="contained">Contained</Button>
            </div>
        </Container>

    );
}

export default Layout;
