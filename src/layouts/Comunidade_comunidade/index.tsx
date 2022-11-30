import { ModalUnstyled } from '@mui/base';
import { Javascript } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import LanguageMenuOption from '@src/components/LanguageMenuOption';
import QuestionItem from '@src/components/QuestionItem';
import { useState } from 'react';
import { CommunityPageProps } from 'types/types';


import { Container, LanguageMenuContainer, QuestionContainer } from './style';


export default function Comunidade(props: CommunityPageProps): JSX.Element {
    const { questions } = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                                <Button variant="contained" sx={{ mr: 20 }} onClick={() => handleOpen()}>
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
            <ModalUnstyled
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    backgroundColor: '#ccc',
                    border: '2px solid #000',
                    padding: 2
                }}
            >
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                </Box>
            </ModalUnstyled>
        </>
    );
}
