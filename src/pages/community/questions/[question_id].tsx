/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
<<<<<<< HEAD
import Question from '@server/src/classes/Question';
import Footer from '@src/components/Footer';
import Header from '@src/components/Header';
import Layout from '@src/layouts/Questions/question';
import type { GetServerSidePropsContext } from 'next';
=======
import Footer from '@src/components/LayoutComponets/Footer';
import Header from '@src/components/LayoutComponets/Header';
import Layout from '@src/layouts/14-perguntas_individual/question';
import type { NextPage } from 'next';
>>>>>>> c513bd7 (muita coisa)

export default function page({ question }: any) {
    return (
        <>
            <Header />
            <Layout question={question} />
            <Footer />
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const QuestionObject = new Question();

    // @ts-ignore
    const { question_id } = context.params;

    console.log(JSON.stringify(await QuestionObject.getCompleteQuestion(question_id), undefined, 4));

    return {
        props: {
            question: {}
        },
    }
};
