import { signIn } from 'next-auth/react';
import { Container } from './style';

export default function OauthLoginButtons() {
    return (
        <Container>
            <div className="Logins">
                <img
                    className="oauth_btn"
                    src="/image 3.png"
                    onClick={() => signIn('google')}
                    alt=""
                    role="button"
                />
                <img
                    className="oauth_btn"
                    src="/image 4.png"
                    onClick={() => signIn('facebook')}
                    alt=""
                    role="button"
                />
                <img
                    className="oauth_btn"
                    src="/image 5.png"
                    onClick={() => signIn('github')}
                    alt=""
                    role="button"
                />
            </div>
        </Container>
    );
}