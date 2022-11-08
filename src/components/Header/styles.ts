import theme from '@src/styles/theme';
import styled from 'styled-components';

export const Menu = styled.div`
    width: 100%;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
        padding: 1%;
    }

    .menu {
        display: flex;
        position: relative;
        width: 100%;
        align-items: center;
    }

    .img_Menu {
        margin-left: 5%;
    }

    .img_Logo {
        margin-left: 2%;
    }

    .title {
        display: flex;
        align-items: center;
    }

    h3 {
        color: ${theme.colors.primary};
        font-size: 20px;
        font-weight: 700;
        margin-left: 1%;
        cursor: pointer;
        
    }
    nav {
        display: flex;
        align-items: right;
        margin-left: 60%;
    }
`;
