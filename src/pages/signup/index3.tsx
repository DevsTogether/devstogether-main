import Footer from '@components/footer';
import Header from '@components/header/index';
import Layout from '@src/components/layout_sigup3';
import GlobalStyles from '@src/styles/global';
import theme from '@styles/theme';

function SignUp(): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>
                <Layout />
            </main>
            <Footer />
        </>
    );
}

export default SignUp;
