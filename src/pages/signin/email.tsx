import Footer from '@src/components/LayoutComponets/Footer';
import Header from '@src/components/LayoutComponets/Header/index';
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