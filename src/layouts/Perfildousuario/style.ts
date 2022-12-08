import styled from 'styled-components';

export const PrincipalContainer = styled.div`
   width: 100%;
   height: 170vh;
   display: flex;
   flex-direction: column;
`

export const Menu = styled.div`
display: flex;
width: 100%;
flex-direction: row;

    
    .Drawer {
       display: flex;
       width: 100%;
       height: 100vh;
       flex-direction: column;
       color: white;
       background: #2d3237;
    }

    .draweritens {
      display: flex;
      flex-direction: row;
      width: 100%;
      
      @media(max-width: 821px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .Container {
      display: flex;
      flex-direction: column;
      width: 45%;

      @media(max-width: 821px) {
        width: 100%;
        align-items: center;
      }
    }

    .avatar {
      display: flex;
      flex-direction: row;
      margin-bottom: 4%;
      margin-left: 3%;
    }

    .Perguntas {
      display: flex;
      flex-direction: row;
      margin-top: 2%;
      margin-bottom: 2%;
      margin-left: 3%;
      
    }

    p {
      margin-right: 3%;
      
      @media(max-width: 821px) {
        margin-right: 1%;
        justify-content: center;
      }
      
    }

    .Sobremim {
      display: flex;
      flex-direction: column;
      margin-top: 2%;
      margin-bottom: 2%;
      width: 25%;
      margin-left: 3%;

      @media(max-width: 821px) {
        width: 70%;
        margin-left: 0%;
        align-items: center;
        justify-content: center;
      }
    }

    h3 {
      margin-top: 6%;
      margin-bottom: 6%;
    }

    .tags  {
      display: flex;
      flex-direction: column;
      margin-top: 2%;
      margin-bottom: 2%;
      margin-left: 4%;
    }

    .conquistas {
      display: flex;
      flex-direction: column;

      @media(max-width: 821px) {
        width: 120%;
        justify-content: center;
        align-items: center;
      }
    }

    .itensPerguntas {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 2%;
    }

    .itenstag {
      display: flex;
      flex-direction: row;
      margin-bottom: 2%;
      width: 50%;

      @media(max-width: 821px) {
        width: 120%;
        margin-bottom: 5%;
        align-items: center;
      }
    }


  
`;