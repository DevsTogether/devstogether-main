import { Javascript } from '@mui/icons-material';
import LanguageMenuOption from '@src/components/LanguageMenuOption';
import { Container, LanguageMenuContainer, LayoutQuestions } from './style';


function SignUp(): JSX.Element {
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

                <LayoutQuestions>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus id dui eu auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae?</h1><br />
                    <div className='description'>
                        <p>Perguntas: Dias</p>
                        <p>Editado: 1 hora</p>
                        <p>Visualizações: 400 Visualizações</p>
                    </div>
                </LayoutQuestions>
            </Container>
        </>
    );
}

export default SignUp;
