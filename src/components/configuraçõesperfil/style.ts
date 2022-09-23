import styled from "styled-components"
import theme from "@src/styles/theme"

export const Menu = styled.div`
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.sidebar {
  position: fixed;
  width: 250px;
  height: 100%;
  background: #2D3237;
  transition: all .5sease;
  font-size: 12px;
}
.sidebar header{
  font-size: 30px;
  color: white;
  line-height: 70px;
  text-align: center;
  background: #2D3237;
  user-select: none;
  font-family: 'Montserrat', sans-serif;
}
.sidebar a{
  display: flex;
  height: 80px;
  width: 100%;
  color: white;
  line-height: 65px;
  padding-left: 10px;
  box-sizing: border-box;
  border-left: 5px solid transparent;
  font-family: 'Open Sans', sans-serif;
  transition: all .5s ease;
}
a.active,a:hover{
  border-left: 5px solid #47AE2E;
  color: #F8F8F8;
}
.sidebar a i{
  font-size: 20px;
  margin-right: 16px;

}
.sidebar a span{
  letter-spacing: 1px;
  text-transform: uppercase;
}
#check{
  display: none;
}
label #btn,label #cancel{
  position: absolute;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  border: 1px solid #262626;
  margin: 15px 30px;
  font-size: 29px;
  background: #2D3237;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 45px;
  transition: all .5s ease;
}
label #cancel{
  opacity: 0;
  visibility: hidden;
}
#check:checked ~ .sidebar{
  left: 0;
}
#check:checked ~ label #btn{
  margin-left: 245px;
  opacity: 0;
  visibility: hidden;
}
#check:checked ~ label #cancel{
  margin-left: 245px;
  opacity: 1;
  visibility: visible;
}
@media(max-width : 860px){
  .sidebar{
    height: auto;
    width: 70px;
    left: 0;
    margin: 100px 0;
  }
  header,#btn,#cancel{
    display: none;
  }
  span{
    position: absolute;
    margin-left: 10px;
    opacity: 0;
    visibility: hidden;
    flex-direction: row;
    font-size: 0px;
  }

  .sidebar a{
    height: 60px;
  }
  .sidebar a i{
    margin-left: -20px;
  }
  a:hover {
    width: 50px;
    background: inherit;
  }
  .sidebar a:hover span{
    opacity: 1;
    visibility: visible;
  }
}

.Container {
    display: flex;
    flex-direction: column;
    margin-left: 30%;
    width: 60%;
    height: 300px;
    background: ${theme.colors.links};
    border-radius: 15px;
}

.subcontainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 700px;
    border-radius: 15px;
    background: black;
}

.terceiroContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    height: 220px;
    margin-bottom: 10%;
    background: #353E46;
    border-radius: 15px;
    background: gray;
}

.nome_do_usuario {
    color: ${theme.colors.text};
    height: 40px;
    margin-left: 5%;
    margin-top: 2%;
    font-size: 100%;
}

.informações {
    display: flex;
    color: white;
    font-size: 18px;
    margin-top: 2%;
    flex-direction: row;
    margin-left: 2%;
    width: 100%;
    justify-content: space-between;
}

.paragrafo_azul {
  margin-right: 420px;
}

.buttoncolumn {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-right: 5%;

}

.botões {
  background: #5F6A75;
  border: none;
  color: white;
  font-size: 10px;
  border-radius: 10px;
  justify-content: center;
  width: 100px;
  height: 30px;
}

.Bio {
  margin-top: 15%;
  margin-left: 32%;
  color: white;
}

.Conexões {
  margin-top: 3%;
  margin-left: 32%;
  color: white;
}

hr {
  border: 0;
  width: 90%;
  margin-top: 5%;
  border-top: 1px solid #4D5A65;
}

.Container_Conexões {
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 60px;
    background: black;
    border-radius: 5px;
}

.Subcontainer_Conexões1 {
   display: flex;
    flex-direction: column;
    width: 10%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    height: 40px;
    border-radius: 2px;
    background: gray;
}

.Subcontainer_Conexões2 {
   display: flex;
    flex-direction: column;
    width: 10%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    height: 40px;
    border-radius: 3px;
    background: gray;
}

.Subcontainer_Conexões3 {
   display: flex;
    flex-direction: column;
    width: 10%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    height: 40px;
    border-radius: 3px;
    background: gray;
}

.Subcontainer_Conexões4 {
   display: flex;
    flex-direction: column;
    width: 10%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    height: 40px;
    border-radius: 3px;
    background: gray;
}

.Subcontainer_Conexões5 {
   display: flex;
    flex-direction: column;
    width: 10%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    height: 40px;
    border-radius: 3px;
    background: gray;
}

 
` 