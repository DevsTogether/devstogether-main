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

    .Aparencia {
       display: flex;
       flex-direction: column;
       width: 75%;
       height: 130vh;
       color: white;
       background: #353e46;
    }

    .Aparenciaitens {
      display: flex;
      flex-direction: column;
      margin-top: 3%;
      margin-left: 10%;
    }

    .radio {
        display: flex;
        flex-direction: row;
        width: 90%;
        margin-top:2%;
        height: 20%;
        margin-bottom: 0.5%;
        background: gray;
        border-radius: 5px;
    } 
    
    h2 {
      margin-top: 2.5%;
    }
    
`;
