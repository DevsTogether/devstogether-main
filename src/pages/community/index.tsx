import Layout from '@src/layouts/Comunidade_comunidade';
import Footer from '@src/layouts/Footer';
import Header from '@src/layouts/Header';
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
    const questions: SimpleQuestion[] = [
        {
            id: "123",
            date: new Date("2022/10/25").toISOString(),
            description: "descrição de uma pergunta",
            title: "Título de uma pergunta",
            vote: 2,
            tags: ["python", "javascript"],
            responses: 0,
            views: 3
        }
    ];

    return {
        props: {
            questions: questions
        },
    }
};