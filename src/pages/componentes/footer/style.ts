import styled from "styled-components"

export const Rodapé = styled.div`
footer {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  background-color: #2D3237;
  width: 100%;
  align-items: flex-end;
  margin: auto;
  bottom: 0;
   @media (max-width: 737px) { //quando a tela for pequena
     width: 20%;
     align-items: center;
     }
  
}

.titulo_footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 737px) { //quando a tela for pequena
     display: none;
     }

  & img {
    padding: 20px;
  }
}

.RedesSociais {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  flex-direction: row;
  @media (max-width: 737px) { //quando a tela for pequena
     display: none;
     }
  
  & p {
    margin-left: 65px;
  }
}

hr {
  border: 0;
  width: 90%;
  margin-left: 60px;
  border-top: 1px solid #4D5A65;
  @media (max-width: 737px) { //quando a tela for pequena
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
  @media (max-width: 737px) { //quando a tela for pequena
  flex-direction: column;
  }
}

p {
  color: #47AE2E;
}

.footerLinks {
display: flex;
align-items: center;
justify-content: space-between;
padding-right: 10%;
color: #1976D2; 

@media (max-width: 737px) { //quando a tela for pequena
        display: flex;
        align-items: center;
        width: 100%;
  }
}

a {
  display: flex;
  align-items: row;
  padding: 22px;
}
`
