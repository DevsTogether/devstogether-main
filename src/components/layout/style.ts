import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 0;
top:0;
left:0;
z-index:11;

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15%;
}

img {
   margin-top: 12%;
   margin-bottom: 09%;
}


.input {
    color: white;
}

.textfield {
    margin-bottom: 20px;

}

.buttons {
   display: flex;
   flex-direction: row;
}

.button2 {
    margin-left: 20px;
}

hr {
  border: 0;
  width: 100%;
  margin-left: 10px;
  border-top: 1px solid #4D5A65;
}

 
.img2 {
    margin-left: 15px;
    margin-right: 15px;
    height: 50px;
}

`
