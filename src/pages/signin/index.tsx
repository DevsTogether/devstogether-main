import Footer from '@src/components/Footer';
import Header from '@src/components/Header/index';
import Layout from '@src/layouts/Signin';
import { GetServerSidePropsContext } from 'next';
import { getCsrfToken } from "next-auth/react";

export interface SignInPageProps {
    csrfToken: string;
}

function SignIn({ csrfToken }: SignInPageProps): JSX.Element {
    return (
        <>
            <Header />
            <Layout csrfToken={csrfToken} />
            <Footer />
        </>
    );
}

export default SignIn;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const csrfToken = await getCsrfToken(context);

    return {
        props: { csrfToken },
    }
}



