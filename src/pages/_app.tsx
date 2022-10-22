import GlobalStyles from '@src/styles/global';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

//@ts-ignore
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </>
    );
}

export default MyApp;
