import styled from "styled-components"
import theme from "@src/styles/theme"

export const Menu = styled.div`
display: flex;
flex-direction: column;
margin-top: 10%;
margin-left: 5%;

.Avatar {
    display: flex;
    width: 15%;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 1%;
}

p {
    margin-bottom: 1%;
    width: 14%;
}

img {
    margin-right: 3%;
}

.chips_usuario {
    display: flex;
    justify-content: space-between;
    width: 14%;
    margin-left: 3.5%;
    margin-bottom: 2%;
}

.letras {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 20%;
    margin-bottom: 2%;
}

.numeros {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 20%;
    margin-bottom: 2%;
}

.sobremim {
    display: flex;
    width: 30%;
    flex-direction: column;
    color: white;
}

.links {
    display: flex;
    margin-left: 5%;
    flex-direction: column;
    margin-bottom: 3%;

}

.icones {
    display: flex;
    flex-direction: column;
    margin-left: 4%;
    width: 7%;
}
  
  
 
`