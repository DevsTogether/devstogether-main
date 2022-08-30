import styled from "styled-components"

export const Menu = styled.div`

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 1%;
    @media (max-width: 548px) { //quando a tela for pequena
    display: flex;
    padding: 5%;
    margin-left: 0%;
    @media (max-width: 389px) { //quando a tela for pequena
    margin-left: 0%;
    
    }
  }
}
  
  .menu {
     display: flex;
     justify-content: space-between;
     position: relative;
     align-items: center;
     @media (max-width: 293px) { //quando a tela for pequena
      display: none;
        }
   
  }

  img {
    margin-left: 18%;
    
  }
    
  
  .title {
    display: flex;
    align-items: center;
  }
  
    h3 {
      color: #47AE2E;
      font-size: 20px;
      font-weight: 700;
      @media (max-width: 548px) { //quando a tela for pequena
      display: none;
      }
    }
    nav {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      
  }
  
        .buttons {
        display: flex;
        position: relative;
        @media (max-width: 548px) { //quando a tela for pequena
        display: flex;
        position: relative;
        align-items: center;
        }

        @media (max-width: 293px) { //quando a tela for pequena
          margin-left: 80%; 
        }
      }

        .a {
          margin-left: 10%;
        }
  
       .a:hover
        {
        color: #2D3237;
        background: #47AE2E;
        box-shadow: 0 0 10px #47AE2E, 0 0 40px #47AE2E, 0 0 80px #47AE2E;
        transition-delay: 1s;
        }

        .a2:hover
        {
        color: #2D3237;
        background: #47AE2E;
        box-shadow: 0 0 10px #47AE2E, 0 0 40px #47AE2E, 0 0 80px #47AE2E;
        transition-delay: 1s;
        }
`