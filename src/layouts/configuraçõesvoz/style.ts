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
       width: 25%;
       height: 100vh;
       flex-direction: column;
       color: white;
       background: #2d3237;
    }

    .Voz {
       display: flex;
       flex-direction: column;
       width: 75%;
       height: 100vh;
       color: white;
       background: #353e46;
    }
`;
