import Button from '@mui/material/Button';
import { Menu } from './styles';
import Link from 'next/link';

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
                        <Link href="/signup">
                            <Button
                                className="a2"
                                variant="outlined"
                                color="success"
                            >
                                SignUp
                            </Button>
                        </Link>
                        <Link href="/sign">
                            <Button
                                className="a"
                                variant="contained"
                                color="success"
                            >
                                SignIn
                            </Button>
                        </Link>
                    </div>
                </nav>
            </header>
        </Menu>
    );
}

export default Header;
