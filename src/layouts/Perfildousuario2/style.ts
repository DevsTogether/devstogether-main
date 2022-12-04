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
       width: 100%;
       height: 100vh;
       flex-direction: column;
       color: white;
       background: #2d3237;
    }

    .draweritens {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    .Container {
      display: flex;
      flex-direction: column;
      width: 45%;
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
    }

    .Sobremim {
      display: flex;
      flex-direction: column;
      margin-top: 2%;
      margin-bottom: 2%;
      width: 25%;
      margin-left: 3%;
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
    }


  
`;