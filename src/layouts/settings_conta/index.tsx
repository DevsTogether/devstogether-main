import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Bio from '@src/components/settings/BiograficArea/index';
import Skills from '@src/components/settings/ChipSkillsLanguages/index';
import PerfilUser from '@src/components/settings/Profile/index';
import Link from 'next/link';
import { Menu, PrincipalContainer } from './style';

const label1 = { inputProps: { 'aria-label': 'Switch demo' } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Configuração(): JSX.Element {
    return (
        <>
            <PrincipalContainer>
                <Menu>
                    <div className='Drawer'>
                        <div className='draweritens'>
                            <Link href="/@me/configurations/configinterface2">
                                <h3><img src='/conta.png' />Minha Conta</h3>
                            </Link>

                            <Link href="/@me/configurations/configinterface1">
                                <h3><img src='/seguranca.png' />Privacidade e Segurança</h3>
                            </Link>

                            <Link href="/@me/configurations/">
                                <h3><img src='/musica.png' />Voz e Video</h3>
                            </Link>

                            <Link href="/@me/configurations/configinterface4">
                                <h3><img src='/aparencia.png' />Aparência</h3>
                            </Link>

                            <Link href="/@me/configurations/configinterface3">
                                <h3><img src='/idiomaicon.png' />Idioma</h3>
                            </Link>
                        </div>
                    </div>

                    <div className='Perfil'>
                        <div className='Perfilitens'>
                            <div>

                                <h1>Conta</h1>
                                <PerfilUser />
                            </div>

                            <h1>Bio</h1>
                            <Bio />



                            <h1>Conexões e Perfil</h1>
                            <div className='ConexõesItens'>
                                <Avatar sx={{ bgcolor: '#353e46', m: 2, width: '10%' }} variant="square">
                                    <GitHubIcon />
                                </Avatar>

                                <Avatar sx={{ bgcolor: '#353e46', m: 2, width: '10%' }} variant="square">
                                    <img src='/twitch.png' />
                                </Avatar>

                                <Avatar sx={{ bgcolor: '#353e46', m: 2, width: '10%' }} variant="square">
                                    <img src='/youtube.png' />
                                </Avatar>

                                <Avatar sx={{ bgcolor: '#353e46', m: 2, width: '10%' }} variant="square">
                                    <img src='/linkedin.png' />
                                </Avatar>
                            </div>

                            <div className='ConexõesItens'>
                                <Avatar sx={{ bgcolor: '#353e46', m: 2, width: '80%', alignItems: 'left' }} variant="square">
                                    <GitHubIcon sx={{ mr: 1 }} /><h4>GitHub - Marcos Alves</h4>
                                </Avatar>
                            </div>

                            <hr />

                            <TextField sx={{ mt: 2, color: 'white', width: '80%' }} id="outlined-basic" label="Site pessoal" variant="outlined" />
                            <TextField sx={{ mt: 2, color: 'white', width: '80%' }} id="outlined-basic" label={<Skills />} variant="outlined" />

                            <h1>Senha e autentificação</h1>
                            <div>
                                <Button variant="contained">Alterar Senha</Button>
                            </div>
                            <hr />

                            <h4>Remoção de Conta</h4>
                            <p>Desativar sua conta significa que você pode recupera-lá, Mas excluí-lá para sempre!, tenha cuidado.</p>

                            <div className='Buttons'>
                                <Button sx={{ bgcolor: 'red', color: 'white', mr: 2 }} variant="outlined" color="error">
                                    Desativar Conta
                                </Button>

                                <Button variant="outlined" color="error">
                                    Excluir Conta
                                </Button>
                            </div>
                        </div>
                    </div>
                </Menu>
            </PrincipalContainer>
        </>
    );
}

export default Configuração;

