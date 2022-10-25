import Box from '@mui/material/Box';
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
                <Box sx={{ width: '80%', bgcolor: '#353E46', height: '70%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                        <Tab label="Item Three" />
                    </Tabs>
                    <br />

                    <div className="Emblemas2">
                        <div>
                            <p>1 voto</p>
                            <h5>O que faz o display flex no CSS</h5>
                            <p>Descrição da Pergunta: </p>
                            <p className="Faca_pergunta">data: 20/12/2026</p>
                        </div>
                    </div>

                    <div className="Emblemas3">
                        <div>
                            <p>1 voto</p>
                            <h5>O que faz o display flex no CSS</h5>
                            <p>Descrição da Pergunta: </p>
                            <p className="Faca_pergunta">data: 20/12/2026</p>
                        </div>
                    </div>

                    <div className="Emblemas4">
                        <div>
                            <p>1 voto</p>
                            <h5>O que faz o display flex no CSS</h5>
                            <p>Descrição da Pergunta: </p>
                            <p className="Faca_pergunta">data: 20/12/2026</p>
                        </div>
                    </div>

                    <div className="Emblemas5">
                        <div>
                            <p>1 voto</p>
                            <h5>O que faz o display flex no CSS</h5>
                            <p>Descrição da Pergunta: </p>
                            <p className="Faca_pergunta">data: 20/12/2026</p>
                        </div>
                    </div>
                </Box>
            </Container>
        </>
    );
}

export default Layout;