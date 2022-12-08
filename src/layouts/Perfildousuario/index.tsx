import FaceIcon from '@mui/icons-material/Face';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Tabs from '@src/components/gamification/TabsEmblems/index';
import { Menu, PrincipalContainer } from './style';

const label1 = { inputProps: { 'aria-label': 'Switch demo' } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Layout(): JSX.Element {
    return (
        <>
            <PrincipalContainer>
                <Menu>
                    <div className='Drawer'>
                        <div className='draweritens'>
                            <div className='Container'>
                                <div className='avatar'>
                                    <Avatar sx={{ width: 76, height: 76, mr: 3 }} alt="Travis Howard" src="/avatar.png" />
                                    <div>
                                        <h2>Marcos Alves</h2>
                                        <Chip icon={<FaceIcon />} sx={{ mt: 1, mr: 1 }} label="Dev Junior" color="primary" />
                                        <Chip icon={<FaceIcon />} sx={{ mt: 1, mr: 1 }} label="122 Pontos" color="primary" />
                                    </div>
                                </div>
                                <div className='Perguntas'>
                                    <div className='itensPerguntas'>
                                        <p>Perguntas</p>
                                        <p>3</p>
                                    </div>

                                    <div className='itensPerguntas'>
                                        <p>Respostas</p>
                                        <p>3</p>
                                    </div>

                                    <div className='itensPerguntas'>
                                        <p>Agradeçeram</p>
                                        <p>3</p>
                                    </div>


                                </div>

                                <div className='Sobremim'>
                                    <h3>Sobre mim</h3>
                                    <p>ioanfoiawnfioniownfonawoingoienagioebgageuieapg
                                        geuiagasegnruiosgnuionsdiogjnjoasgnnsjignonaskn
                                        gioaengpisuergniosnagionasriognusriongiuosrngug
                                    </p>
                                </div>

                                <div className='tags'>
                                    <div className='itenstag'>
                                        <p><img src='/cake.png' />Membro afnaiof</p>
                                    </div>

                                    <div className='itenstag'>
                                        <p><img src='/emailicon.png' />Membro afnaiof</p>
                                    </div>

                                    <div className='itenstag'>
                                        <p><img src='/twitch (3).png' />Membro afnaiof</p>
                                    </div>

                                    <div className='itenstag'>
                                        <p><img src='/githubicon.png' />Membro afnaiof</p>
                                    </div>
                                </div>


                                <div className='conquistas'>
                                    <Chip sx={{ width: '25%', mt: 1, mb: 1, ml: 2 }} icon={<FaceIcon />} label="With Icon" />
                                    <Chip sx={{ width: '25%', mt: 1, mb: 1, ml: 2 }} icon={<FaceIcon />} label="With Icon" />
                                    <Chip sx={{ width: '25%', mt: 1, mb: 1, ml: 2 }} icon={<FaceIcon />} label="With Icon" />
                                    <Chip sx={{ width: '25%', mt: 1, mb: 1, ml: 2 }} icon={<FaceIcon />} label="With Icon" />
                                </div>
                            </div>
                            <Tabs />
                        </div>
                    </div>
                </Menu>
            </PrincipalContainer>
        </>
    );
}

export default Layout;

