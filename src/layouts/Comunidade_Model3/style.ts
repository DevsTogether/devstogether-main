import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .Container {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 100px;
        margin-top: 500px;
        margin-bottom: 500px;
    }

    .imagem {
        margin-left: 60px;
    }

    .Itens {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .option-card-container {
        background-color: red;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 50%;
        height: 50%;
        margin: 20px auto auto 25%;
        background-color: #2D3237;
    }
`;
