import HeaderAvatar from '@src/components/LayoutComponets/HeaderAvatar';
import HeaderActions from '@src/components/LayoutComponets/HeaderActions';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
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
                <div className='align'>
                    <div className="menu">
                        <img src="/menu.png" className='img_Menu' />
                        <img src="/logo2.png" className='img_Logo' />
                        <Link href="/" className='title_logo'><h3>Devstogether</h3></Link>
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
                </div>
            </header>
        </Menu>
    );
}

export default Header;
