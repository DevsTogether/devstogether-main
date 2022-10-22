import HeaderActions from '@src/components/HeaderActions';
import HeaderAvatar from '@src/components/HeaderAvatar';
import { useSession } from 'next-auth/react';
import { Menu } from './styles';

export interface HeaderProps {
    logged?: boolean;
}

function Header(props: HeaderProps): JSX.Element {
    const { data: session } = useSession();
    const { logged = !!session } = props;

    return (
        <Menu>
            <header>
                <div className="menu">
                    <img src="/menu.png" alt="" />
                    <img src="/logo2.png" alt="" />
                    <h3>Devstogether</h3>
                </div>

                <nav>
                    {logged && (
                        <HeaderAvatar
                            name={session?.user?.username}
                            image={session?.user?.image}
                        />
                    )}

                    {!logged && <HeaderActions />}
                </nav>
            </header>
        </Menu>
    );
}

export default Header;
