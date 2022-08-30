import Button from '@mui/material/Button';
import { Menu } from './styles';

function Header(): JSX.Element {
    return (
        <Menu>
            <header>
                <div className="menu">
                    <img src="/menu.png" />
                    <img src="/logo2.png" />
                    <h3>Devstogether</h3>
                </div>


                <nav>
                    <div className="buttons">
                        <Button className="a2" variant="contained" color="success">Sigin</Button>
                        <Button className="a" variant="outlined" color="success">Logout</Button>
                    </div>
                </nav>
            </header >
        </Menu >
    );
}

export default Header;