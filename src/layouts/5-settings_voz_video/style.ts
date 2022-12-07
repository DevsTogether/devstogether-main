import styled from 'styled-components';

export const PrincipalContainer = styled.div`
   width: 100%;
   height: 90vh;
   display: flex;
   flex-direction: column;
`

export const Menu = styled.div`
display: flex;
width: 100%;
flex-direction: row;

    
    .Drawer {
       display: flex;
       width: 22%;
       height: 100vh;
       flex-direction: column;
       color: white;
       background: #2d3237;
    }

    .draweritens {
      display: flex;
      flex-direction: column;
      margin-top: 15%;
      margin-left: 10%;
    }

    img {
      height: 20px;
      margin-right: 2.8%;
    }


    h3 {
      margin-top: 5%;
      cursor: pointer;

      @media(max-width: 610px) {
        display: flex;
        font-size: 0px;
        justify-content: center;

        hover: white;
      }
    }

    p {
      margin-left: 1%;
    }

    .Voz {
       display: flex;
       flex-direction: column;
       width: 75%;
       height: 100%;
       color: white;
       background: #353e46;
    }

    .VozItens {
      display: flex;
      flex-direction: column;
      margin-top: 3%;
      margin-left: 10%;
    }

    .checkbox {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .imagem_vídeo {
      display: flex;
      margin-right: 20%;
      justify-content: right;
    }
`;