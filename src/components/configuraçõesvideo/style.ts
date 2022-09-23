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
    margin-left: 25%;
    width: 60%;
  
    background: ${theme.colors.background};
    border-radius: 15px;
}

hr {
  border: 0;
  width: 90%;
  border-top: 1px solid #4D5A65;
}

h1 {
  color: white;
  margin-bottom: 50px;
}

h2 {
  color: white;
  margin-bottom: 20px;
}

.Container_Conexões {
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 60px;
    background: gray;
    border-radius: 5px;
}

 
` 