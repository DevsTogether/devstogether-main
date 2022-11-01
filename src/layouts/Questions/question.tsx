import Button from '@mui/material/Button';
import LanguageMenu from '@src/components/LanguagesMenu';
import { VoteButtons } from '@src/components/VoteButtons';
import { CommunityPageProps } from 'types/types';
import { Container, LayoutQuestions } from './style';

export default function Questions(props: CommunityPageProps): JSX.Element {
    const { questions } = props;

    return (
        <>

            <Container>

                <LanguageMenu />

                <LayoutQuestions>
                    <div className='Title_Questions'>
                        <div className='title'>
                            <h1>alom ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus id dui eu auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae?
                                lom ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus id dui eu auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae?</h1><br />
                        </div>
                        <div className='botão'>
                            <Button color="success" variant="contained" sx={{ ml: 2 }}>Fazer pergunta</Button>
                        </div>
                    </div>
                    <div className='description'>
                        <p>Perguntas: Dias</p>
                        <p>Editado: 1 hora</p>
                        <p>Visualizações: 400 Visualizações</p>
                    </div><br />
                    <hr />
                </LayoutQuestions>
            </Container>


            <VoteButtons
                context={{ type: 'question', questionId: "12345" }}
                number={3}
            />


        </>
    );
}


