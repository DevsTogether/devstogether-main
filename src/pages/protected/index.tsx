/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const ProtectedPage: NextPage = () => {
    const { data: session } = useSession();
    const profilePicture: String =
        session?.user?.image ||
        'https://cdn2.iconfinder.com/data/icons/hacker-solid/100/hacker_hacker_human_-512.png';

    console.log(session);

    if (session) {
        return (
            <main style={{ padding: '2rem' }}>
                <div
                    style={{
                        display: 'flex',
                        alignContent: 'center',
                        gap: 24,
                        margin: '1rem',
                    }}
                >
                    <img
                        //@ts-ignore
                        src={profilePicture}
                        alt="foto de perfil"
                        style={{ width: 50, height: 50, borderRadius: '50%' }}
                    />
                    <p style={{ alignSelf: 'center' }}>
                        Signed in as{' '}
                        {session.user.email || session.user.username}
                    </p>{' '}
                </div>
                <button onClick={() => signOut()}>Sign out</button>
            </main>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
};

export default ProtectedPage;
