import theme from '@src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    top: 0;
    left: 0;
    z-index: 11;

    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-bottom: 10%;
    }

    img {
        margin-top: 03%;
        margin-bottom: 09%;
    }

    .input {
        color: white;
    }

    .textfield {
        margin-bottom: 20px;
        @media (max-width: 450px) {
            //quando a tela for pequena
            display: flex;
            flex-direction: column;
        }
    }

    .buttons {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
    }

    .pequeno_aviso {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    h1 {
        font-size: 45px;
        margin-left: 25%;
        color: ${theme.colors.text};
    }

    p {
        color: ${theme.colors.text};
        font-size: 20px;
        margin-bottom: 20px;
    }

    .img2 {
        margin-left: 15px;
        margin-right: 15px;
        height: 50px;
    }

    .languages {
        align-items: center;
        width: 70%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;
