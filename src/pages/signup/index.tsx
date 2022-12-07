import Footer from '@src/components/LayoutComponets/Footer';
import Header from '@src/components/LayoutComponets/Header/index';
import LayoutHome from '@src/layouts/sign_up1';
import LayoutSelectLanguages from '@src/layouts/sign_up2';
import LayoutTest from '@src/layouts/sign_up3';
import LayoutProfile from '@src/layouts/sign_up4';
import { useState } from 'react';

export interface SignUpForm {
    firstName: string;
    LastName: string;
    email: string;
    username: string;
    skills: Array<number>;
    languages: Array<number>;
}

function SignUp(): JSX.Element {
    const [form, setForm] = useState<SignUpForm>();
    const [pageStep, setPageStep] = useState<number>(0);
    return (
        <>
            <Header />
            {

                pageStep === 0 && (
                    <LayoutHome />
                )
            }
            {
                pageStep === 1 && (
                    <LayoutSelectLanguages />
                )
            }
            {
                pageStep === 2 && (
                    <LayoutTest />
                )
            }
            {
                pageStep === 3 && (
                    <LayoutProfile />
                )
            }
            <Footer />
        </>
    );
}

export default SignUp;
