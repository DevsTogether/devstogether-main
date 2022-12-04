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
    }

    .Perfil {
       display: flex;
       flex-direction: column;
       width: 75%;
       height: 270vh;
       color: white;
       background: #353e46;
    }

    .Perfilitens {
      display: flex;
      flex-direction: column;
      margin-top: 3%;
      margin-left: 10%;
    }

    .ConexõesItens {
        display: flex;
        flex-direction: row;
        width: 90%;
        margin-top:2%;
        height: 40%;
        margin-bottom: 0.5%;
        background: #2d3237;
        border-radius: 5px;
    } 

    .Buttons {
      display: flex;
      width: 80%;
      flex-direction: row;
      margin-top: 4%;
    }

    hr {
        border: 0;
        margin-top: 4%;
        margin-bottom: 4%;
        width: 80%;
        margin-left: 10px;
        border-top: 1px solid #4d5a65;
    }

    h1 {
      margin-top: 4%;
      margin-bottom: 3%;
    }

    
`;