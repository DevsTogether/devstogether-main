import theme from '@src/styles/theme';
import styled from 'styled-components';

export const Rodapé = styled.div`
    @media (max-width: 737px) {
        //quando a tela for pequena
        display: block;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    footer {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        background-color: ${theme.colors.darkBackground};
        margin: auto;
        bottom: 0;
        @media (max-width: 737px) {
            //quando a tela for pequena
            width: 100%;  
            align-items: center;
        }
    }

    .titulo_footer {
        display: flex;
        flex-direction: row;
        align-items: center;

        & img {
            padding: 20px;
        }

        @media (max-width: 737px) {
            //quando a tela for pequena
            display: none;
        }
    }

    .RedesSociais {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        flex-direction: row;
        @media (max-width: 737px) {
            //quando a tela for pequena
            display: none;
        }

        & p {
            margin-left: 65px;
            font-size: 20px;
        }
    }

    hr {
        border: 0;
        width: 90%;
        margin-left: 60px;
        border-top: 1px solid #4d5a65;
        @media (max-width: 737px) {
            //quando a tela for pequena
            display: none;
        }
    }

    .Logo_RedeSocial {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding-inline: 12%;
    }

    img {
        margin-left: 30%;
        height: 80%;
    }

    ul {
        display: flex;
        flex-direction: row;
        @media (max-width: 737px) {
            //quando a tela for pequena
            flex-direction: column;
        }
    }

    p {
        color: #47ae2e;
    }

    .footerLinks {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 10%;
        color: ${theme.colors.links};

        @media (max-width: 737px) {
            //quando a tela for pequena
            display: flex;
            align-items: center;
            width: 100%;
            padding-right: 0%;
            margin-left: 50%;
        }
    }

    a {
        display: flex;
        padding: 22px;
        @media (max-width: 389px) {
            //quando a tela for pequena
            justify-content: center;
            font-size: 10px;
            align-items: center;
        }
    }
`;
