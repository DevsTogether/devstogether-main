import Question from '@server/src/classes/Question';
import Footer from '@src/components/Footer';
import Header from '@src/components/Header';
import Layout from '@src/layouts/Comunidade_comunidade';
import { GetServerSidePropsContext } from 'next';
import { CommunityPageProps, SimpleQuestion } from 'types/types';

export default function Community(props: CommunityPageProps): JSX.Element {
    const { questions } = props;

    return (
        <>
            <Header />
            <Layout
                questions={questions}
            />
            <Footer />
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const QuestionObject = new Question();

    const { page, lang } = context.query;

    const questions: SimpleQuestion[] = await QuestionObject.getSimpleQuestionList(
        page ? parseInt(page.toString()) - 1 : 0,
        10,
        `${lang || ""}`
    );

    questions.forEach((val) => {
        val.date = val.date.toLocaleString();
    });

    return {
        props: {
            questions: questions
        },
    }
};