import theme from '@src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%auto;
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
        align-items: center;
        margin-bottom: 15%;
    }

    img {
        margin-top: 12%;
        margin-bottom: 09%;
    }

    form {
        display: flex;
        gap: 12px;
        flex-direction:column;
    }

    .input {
        width: 100%;
        color: white;
    }

    .input_line {
        gap: 16px;
        display: flex;
        justify-content: center;
    }

    .textfield {
        margin-bottom: 20px;
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

    p {
        color: ${theme.colors.links};
    }

    .img2 {
        margin-left: 15px;
        margin-right: 15px;
        height: 50px;
    }
`;
