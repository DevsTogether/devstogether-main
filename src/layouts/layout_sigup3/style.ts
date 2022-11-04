import theme from '@src/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;

    .titulo {
        margin-left: 38%;
        color: ${theme.colors.text};
        @media (max-width: 870px) {
        //quando a tela for pequena
        margin-left: 30%;
    }
    }

    p {
        color: ${theme.colors.text};
    }

    .submeter_session {
        margin-left: 5%auto;
        display: flex;
        flex-direction: row;
    }
`;
