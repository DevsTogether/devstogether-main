import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
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
                                <h3><img src='/conta.png' />Voz e Video</h3>
                            </Link>

                            <Link href="/@me/configurations/configinterface4">
                                <h3><img src='/aparencia.png' />Aparência</h3>
                            </Link>

                            <Link href="/@me/configurations/configinterface3">
                                <h3><img src='/idiomaicon.png' />Idioma</h3>
                            </Link>
                        </div>
                    </div>

                    <div className='Aparencia'>
                        <div className='Aparenciaitens'>
                            <h1>Aparência</h1>

                            <h2>tema</h2>

                            <div className='radio'>
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                />
                            </div>

                            <div className='radio'>
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                />
                            </div>

                            <div className='radio'>
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                />
                            </div>

                            <h2>Tamanho da fonte</h2>
                            <TextField sx={{ mt: '3%', width: '70%', height: '20%' }} fullWidth label="fullWidth" id="fullWidth" />
                        </div>
                    </div>
                </Menu>
            </PrincipalContainer>
        </>
    );
}

export default Configuração;
