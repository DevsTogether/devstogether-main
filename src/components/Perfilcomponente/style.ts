import styled from "styled-components"
import theme from "@src/styles/theme"

export const Menu = styled.div`
display: flex;
flex-direction: column;
width: 30%;
margin-top: 10%;
margin-left: 5%;

.Avatar {
    display: flex;
    width: 60%;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 1%;
}

p {
    margin-bottom: 1%;
    width: 14%;
}

img {
    margin-right: 5%;
}

.chips_usuario {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-left: 15%;
    margin-bottom: 7%;
}

.letras {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 50%;
    margin-bottom: 2%;
}

.numeros {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 50%;
    margin-left: 8%;
    margin-bottom: 6%;
}

.sobremim {
    display: flex;
    width: 30%;
    flex-direction: column;
    color: white;
    margin-bottom: 7%;
}

.links {
    width: 100%;
    display: flex;
    margin-left: 5%;
    flex-direction: column;
    margin-bottom: 7%;

}

.icones {
    display: flex;
    flex-direction: column;
    margin-left: 4%;
    width: 25%;
}
  
  
 
`