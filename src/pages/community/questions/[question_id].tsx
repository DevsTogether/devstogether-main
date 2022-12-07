/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import Footer from '@src/components/LayoutComponets/Footer';
import Header from '@src/components/LayoutComponets/Header';
import Layout from '@src/layouts/perguntas_individual/question';
import { GetServerSidePropsContext } from 'next';

export default function page({ question }: any) {
    return (
        <>
            <Header />
            <Layout />
            <Footer />
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    /* const QuestionObject = new Question();

    // @ts-ignore
    const { question_id } = context.params;

    console.log(JSON.stringify(await QuestionObject.getCompleteQuestion(question_id), undefined, 4)); */

    return {
        props: {
            question: {}
        },
    }
};
