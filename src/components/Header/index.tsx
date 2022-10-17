import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Menu } from './styles';

interface HeaderProps {
    logged?: boolean;
}

interface HeaderAvatar {
    name: string | null | undefined;
    image: string | null | undefined;
}

function Header(props: HeaderProps): JSX.Element {
    const { data: session } = useSession();
    const { logged = !!session } = props;

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
                        {
                            logged && (
                                <HeaderAvatar
                                    name={session?.user?.username}
                                    image={session?.user?.image}
                                />
                            )
                        }
                        {
                            !logged && <HeaderActions />
                        }
                    </div>
                </nav>
            </header>
        </Menu>
    );
}

function HeaderActions(){
    return (
        <>
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
        </>
    );
}

function HeaderAvatar({ name, image }: HeaderAvatar){
    return (
        <Avatar
            sx={{ width: '30px', height: '30px' }}
            alt={name || ""}
            src={image || "https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"}
        />
    );
}

export default Header;
