import theme from '@src/styles/theme';
import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    background-color: aqua;
    background-color: ${theme.colors.darkBackground};
    overflow-x: hidden;

    .meet-container {
        height: 90vh;
        width: 100vw;
        background-color: blue;
        overflow-x: hidden;
        display: flex;
        transition: width .3s;
    }

    .chat-hidden {
        width: calc(100vw + 55vw);
    }

    .medias-container, .chat-container {
        height: 100%;
    }
    .medias-container {
        width: 65%;
        background-color: blanchedalmond;
    }

    .chat-container {
        width: 35%;
        background-color: aquamarine;
    }

    .controls-container {
        height: 10vh;
    }
`;

export const ControlsBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: blueviolet;
    max-height: 220px;
    height: 100%;
    width: 100%;
`;