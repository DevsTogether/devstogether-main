import { Javascript } from '@mui/icons-material';
import Button from '@mui/material/Button';
import LanguageMenuOption from '@src/components/LanguageMenuOption';
import QuestionItem from '@src/components/QuestionItem';
import { CommunityPageProps } from 'types/types';


import { Container, LanguageMenuContainer, QuestionContainer } from './style';


export default function Comunidade(props: CommunityPageProps): JSX.Element {
    const { questions } = props;

    return (
        <>
            <Container>
                <LanguageMenuContainer>
                    <h3>Linguagens</h3>
                    <LanguageMenuOption
                        image='/boloicon.png'
                        label='Todas as linguagens'
                    />
                    <LanguageMenuOption
                        image='/boloicon.png'
                        label='Python'
                    />
                    <LanguageMenuOption
                        image='/boloicon.png'
                        label='C++'
                    />
                    <LanguageMenuOption
                        label="Javascript"
                        imageComponent={() => <Javascript />}
                    />
                    <LanguageMenuOption
                        image='/boloicon.png'
                        label='Java'
                    />
                </LanguageMenuContainer>
                <QuestionContainer>
                    <div className="container">
                        <div className="dificuldade">
                            <img src="/community_problem.svg" alt="" />
                            <div className="botao">
                                <h1>Tem alguma dificuldade?</h1>
                                <Button variant="contained" sx={{ mr: 20 }}>
                                    faça uma pergunta
                                </Button>
                            </div>
                        </div>
                        <hr />

                        {questions.map((question, i) => (
                            <div key={question.id}>
                                <QuestionItem question={question} />
                                {i !== questions.length - 1 && (
                                    <hr />
                                )}
                            </div>
                        ))}
                    </div>
                </QuestionContainer>
            </Container>
        </>
    );
}


