import FaceIcon from '@mui/icons-material/Face';
import { Chip } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Container } from './style';

function Layout(): JSX.Element {
    const [tab, setTab] = React.useState(0);
    const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    return (
        <>
            <Container>
                <Box sx={{ width: '80%', bgcolor: '#353E46', height: '70%' }}>
                    <Tabs
                        value={tab}
                        onChange={tabHandleChange}
                        centered
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab label="MEDALHAS" value={0} />
                        <Tab label="RESPOSTAS" value={1} />
                        <Tab label="PERGUNTAS" value={2} />
                        <Tab label="AVALIAÇÕES" value={3} />
                    </Tabs>
                </Box>
                {tab === 0 && <ProfileMedals />}
                {tab === 1 && <ProfileResponses />}
                {tab === 2 && <ProfileQuestions />}
                {tab === 3 && <ProfileVotes />}
            </Container>
        </>
    );
}

function ProfileMedals() {
    return (
        <>
            <div className="Emblemas1">
                <div>
                    <h3>Emblemas</h3>
                    <p>
                        Responda perguntas, ajude outros desenvolvedores e
                        desbloqueie emblemas!
                    </p>
                </div>
            </div>

            <div className="Emblemas2">
                <div>
                    <h3>
                        <img src="/iconemblema.png" alt="" />
                        Benfeitor
                    </h3>
                    <p>Faça sua 1 pergunta</p>
                </div>
                <img className="trofeu" src="/trofeuicon.png" alt="" />
            </div>

            <div className="Emblemas3">
                <div>
                    <h3>
                        <img src="/iconemblema.png" alt="" />
                        Benfeitor
                    </h3>
                    <p>Faça sua 1 pergunta</p>
                </div>
                <img className="trofeu" src="/trofeuicon.png" alt="" />
            </div>

            <div className="Emblemas4">
                <div>
                    <h3>
                        <img src="/iconemblema.png" alt="" />
                        Benfeitor
                    </h3>
                    <p>Faça sua 1 pergunta</p>
                </div>
                <img className="trofeu" src="/trofeuicon.png" alt="" />
            </div>

            <div className="Emblemas5">
                <div>
                    <h3>
                        <img src="/iconemblema.png" alt="" />
                        Benfeitor
                    </h3>
                    <p>Faça sua 1 pergunta</p>
                </div>
                <img className="trofeu" src="/trofeuicon.png" alt="" />
            </div>
        </>
    );
}

function ProfileResponses() {
    return (
        <>
            <div className="Emblemas2">
                <div>
                    <div className="votos">
                        <p>1 Voto</p>
                        <p>256 Votos</p>
                    </div>
                    <h4>O que faz o display flex no CSS</h4>
                    <Chip icon={<FaceIcon />} label="With Icon" />
                    <p className="Faca_pergunta">Faça sua 1 pergunta</p>
                </div>
            </div>

            <div className="Emblemas3">
                <div>
                    <div className="votos">
                        <p>1 Voto</p>
                        <p>256 Votos</p>
                    </div>
                    <h4>O que faz o display flex no CSS</h4>
                    <Chip icon={<FaceIcon />} label="With Icon" />
                    <p className="Faca_pergunta">Faça sua 1 pergunta</p>
                </div>
            </div>

            <div className="Emblemas4">
                <div>
                    <div className="votos">
                        <p>1 Voto</p>
                        <p>256 Votos</p>
                    </div>
                    <h4>O que faz o display flex no CSS</h4>
                    <Chip icon={<FaceIcon />} label="With Icon" />
                    <p className="Faca_pergunta">Faça sua 1 pergunta</p>
                </div>
            </div>

            <div className="Emblemas5">
                <div>
                    <div className="votos">
                        <p>1 Voto</p>
                        <p>256 Votos</p>
                    </div>
                    <h4>O que faz o display flex no CSS</h4>
                    <Chip icon={<FaceIcon />} label="With Icon" />
                    <p className="Faca_pergunta">Faça sua 1 pergunta</p>
                </div>
            </div>
        </>
    );
}

function ProfileQuestions() {
    return (
        <>
            <div className="Emblemas2">
                <div>
                    <div className="votos">
                        <p>1 Voto</p>
                        <p>256 Votos</p>
                    </div>
                    <h4>O que faz o display flex no CSS</h4>
                    <Chip icon={<FaceIcon />} label="With Icon" />
                    <p className="Faca_pergunta">data: 20/12/2026</p>
                </div>
            </div>

            <div className="Emblemas3">
                <div>
                    <div className="votos">
                        <p>1 Voto</p>
                        <p>256 Votos</p>
                    </div>
                    <h4>O que faz o display flex no CSS</h4>
                    <Chip icon={<FaceIcon />} label="With Icon" />
                    <p className="Faca_pergunta">data: 20/12/2026</p>
                </div>
            </div>

            <div className="Emblemas4">
                <div>
                    <div className="votos">
                        <p>1 Voto</p>
                        <p>256 Votos</p>
                    </div>
                    <h4>O que faz o display flex no CSS</h4>
                    <Chip icon={<FaceIcon />} label="With Icon" />
                    <p className="Faca_pergunta">data: 20/12/2026</p>
                </div>
            </div>

            <div className="Emblemas5">
                <div>
                    <div className="votos">
                        <p>1 Voto</p>
                        <p>256 Votos</p>
                    </div>
                    <h4>O que faz o display flex no CSS</h4>
                    <Chip icon={<FaceIcon />} label="With Icon" />
                    <p className="Faca_pergunta">data: 20/12/2026</p>
                </div>
            </div>
        </>
    );
}

function ProfileVotes() {
    return (
        <>
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
        </>
    );
}

export default Layout;
