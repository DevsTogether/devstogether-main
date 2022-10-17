import Footer from '@components/footer';
import Header from '@src/components/Header/index';
import Layout from '@src/components/layout_sigup4';
import GlobalStyles from '@src/styles/global';

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
