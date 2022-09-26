import Avatar from '@mui/material/Avatar';
import { Menu } from './style';


function HeaderLogin(): JSX.Element {
    return (
        <Menu>
            <header>
                <div className="menu">
                    <img src="/menu.png" />
                    <img src="/logo2.png" />
                    <h3>Devstogether</h3>
                </div>


                <nav>
                    <Avatar sx={{ width: '30px', height: '30px' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </nav>
            </header >
        </Menu >
    );
}

export default HeaderLogin;