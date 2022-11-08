import Footer from '@src/components/Footer';
import Header from '@src/components/Header/index';
import Layout from '@src/layouts/EmailVerification';

function EmailVerificationPage(): JSX.Element {
    return (
        <>
            <Header />
            <Layout />
            <Footer />
        </>
    );
}

export default EmailVerificationPage;