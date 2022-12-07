import { Box, Modal, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import LanguageMenuOption from '@src/components/LanguageMenuOption';
import QuestionItem from '@src/components/QuestionItem';
import { useState } from 'react';
import { CommunityPageProps } from 'types/types';


import { Container, LanguageMenuContainer, QuestionContainer, QuestionCreationModalStyle } from './style';


export default function Comunidade(props: CommunityPageProps): JSX.Element {
    const { questions } = props;
    const [open, setOpen] = useState<boolean>(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeLang = (lang: string) => {
        const params = new URLSearchParams(window.location.search);

        params.set("lang", lang);

        window.location.assign(`/community?${params.toString()}`);
    };
    const handleChangePage = (action: "prev" | "next") => {
        const params = new URLSearchParams(window.location.search);

        params.set(
            "page",
            action === "prev" ?
                (parseInt(params.get("page") ?? "1") - 1).toString() :
                (parseInt(params.get("page") ?? "1") + 1).toString()
        );

        window.location.assign(`/community?${params.toString()}`);

    };

    return (
        <>
            <Container>
                <LanguageMenuContainer>
                    <h3>Linguagens</h3>
                    {
                        [
                            { tag: "js", label: "Javascript" },
                            { tag: "py", label: "Python" },
                            { tag: "php", label: "PHP" },
                            { tag: "c", label: "C" },
                            { tag: "c2", label: "C++" },
                            { tag: "c4", label: "C#" },
                        ].map((item, i) => (
                            <LanguageMenuOption
                                onClick={() => handleChangeLang(item.tag)}
                                label={item.label}
                                key={i}
                            />
                        ))
                    }
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
                    <div className='pagination-container'>
                        <Button onClick={() => handleChangePage("prev")}>Previous</Button>
                        <Button onClick={() => handleChangePage("next")}>Next</Button>
                    </div>
                </QuestionContainer>
            </Container>
            <QuestionCreationModal
                open={open}
                handleClose={() => handleClose()}
            />
        </>
    );
}

interface QuestionCreationModalProps {
    open: boolean;
    handleOpen?: any;
    handleClose: any;
};
function QuestionCreationModal(props: QuestionCreationModalProps) {
    const { open, handleOpen, handleClose } = props;

    return (
        <QuestionCreationModalStyle>
            <Modal
                open={open}
                onClose={() => {
                    handleClose();
                }}
                aria-labelledby="create-question"
                aria-describedby="write your problem the more details as possible"
            >
                <Box className="modal-external-container" style={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "75vw",
                    backgroundColor: "#ccc",
                    padding: 16
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                </Box>
            </Modal>
        </QuestionCreationModalStyle>
    );
}