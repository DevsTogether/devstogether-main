import theme from '@src/styles/theme';
import styled from 'styled-components';

export const HeaderActionsStyle = styled.div`
    display: flex;
    position: relative;
    
    @media (max-width: 548px) {
        //quando a tela for pequena
        display: flex;
        position: relative;
        align-items: center;
    }

    @media (max-width: 293px) {
        //quando a tela for pequena
        margin-left: 80%;
    }

    .a {
        margin-left: 10%;
    }

    .a:hover {
        color: ${theme.colors.text};
        background: ${theme.colors.darkBackground};
        box-shadow: 0 0 10px #47ae2e, 0 0 40px #47ae2e, 0 0 80px #47ae2e;
        transition-delay: 1s;
    }

    .a2:hover {
        color: ${theme.colors.text};
        background: ${theme.colors.darkBackground};
        box-shadow: 0 0 10px #47ae2e, 0 0 40px #47ae2e, 0 0 80px #47ae2e;
        transition-delay: 1s;
    }
`;
