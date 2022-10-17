import theme from '@src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 120px;
`;

export const Perguntas = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    border: 1px solid #4d5a65;
    margin: 10px;
    color: ${theme.colors.text};
    border-radius: 10px;
    @media (max-width: 712px) {
        width: 80%;
        margin-left: 50px;
    }

    @media (max-width: 322px) {
        width: 100%;
        margin-left: 30px;
    }

    .dificuldade {
        display: flex;
        flex-direction: row;
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
        margin-top: 5%;
        margin-bottom: 5%;
        border: 0;
        width: 100%;
        border-top: 1px solid #4d5a65;
    }
`;

export const Drawer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    color: ${theme.colors.text};
    margin-right: 2%;
    margin-left: 5%;

    h4 {
        font-size: 13px;
        margin-bottom: 20px;
    }

    hr {
        margin-top: 5%;
        margin-bottom: 5%;
        border: 0;
        width: 100%;
        border-top: 1px solid #4d5a65;
    }

    img {
        margin-right: 10px;
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
