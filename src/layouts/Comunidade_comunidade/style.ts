import theme from '@src/styles/theme';
import styled from 'styled-components';

export const LanguageMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
    color: ${theme.colors.text};
    padding: 1rem 2rem;

    h3 {
        margin-bottom: 1rem;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 120px;
`;

export const QuestionContainer = styled.div`
    width: 100%;
    
    .container {
        margin: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: start;
        border: 1px solid #4d5a65;
        color: ${theme.colors.text};
        border-radius: 8px;
    }

    .dificuldade {
        display: flex;
        gap: 2rem;
    }

    .botao {
        margin: 2rem 0rem;
    }

    h1 {
        margin-bottom: 20px;
    }

    img {
        height: 90%;
        @media (max-width: 712px) {
            height: 100px;
        }
    }

    .perguntas1 {
        display: flex;
        margin-left: 20px;
        justify-content: space-between;
    }

    .votos {
        display: flex;
        flex-direction: row;
        padding-right: 10px;
    }

    .voto2 {
        margin-left: 10px;
    }

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        width: 100%;
        border-top: 1px solid #4d5a65;
    }
`;

export const Desafios = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    color: ${theme.colors.text};
    border: 1px solid #4d5a65;
    border-radius: 10px;
    margin-right: 1%;
    @media (max-width: 930px) {
        display: none;
    }

    .desafios1 {
        margin-left: 10px;
    }

    .separador {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    h3 {
        margin-left: 10px;
        margin-top: 20px;
    }
    hr {
        margin-top: 5%;
        margin-bottom: 5%;
        border: 0;
        width: 100%;
        border-top: 1px solid #4d5a65;
    }
`;
