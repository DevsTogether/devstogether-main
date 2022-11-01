import theme from '@src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
margin-top: 64px;
display: flex;
flex-direction: row;
color: white;
`

export const LayoutQuestions = styled.div`
display: flex;
flex-direction: column;
justify-content: left;

.Title_Questions {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 0.9rem;
    justify-content: center;
}

.description {
    display: flex;
    flex-direction: row;
}

.botão {
    width: 30%;
    margin-right: 10%;
}

p {
    font-size: 0.8em;
    margin-right: 15px;
}

hr {
    width: 50%;
}

hr {
        border: 0;
        width: 100%;
        border-top: .5px solid #4d5a65;
}

`

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
        border: 0;
        width: 100%;
        border-top: .5px solid #4d5a65;
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

