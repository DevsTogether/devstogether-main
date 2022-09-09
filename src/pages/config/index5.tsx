import Footer from '@components/footer';
import Header from '@components/header/index';
import Layout from '@src/components/configurações1/config';
import GlobalStyles from '@src/styles/global';
import theme from '@styles/theme';

function SignUp(): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <main>
                <Layout />
            </main>
        </>

    );
}

export default SignUp;