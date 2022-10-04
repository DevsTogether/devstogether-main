import styled from 'styled-components';
import theme from '@src/styles/theme';

export const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
margin-top: 50px;
margin-bottom: 120px;	
`

export const Perguntas = styled.div`
width: 60%;
display: flex;
flex-direction: column;
justify-content: center;
border: 2px solid #4D5A65;
margin: 10px;
color: ${theme.colors.text};
border-radius: 10px;

.dificuldade {
	display: flex;
	flex-direction: row;
}

.botao {
	display: flex;
	flex-direction: column;
	margin-top: 40px;

}

h1 {
	margin-bottom: 20px;
    top: 300px;
}

img {
	height: 200px;
}

.perguntas1 {
	display: flex;
	margin-left: 20px;
	justify-content: space-between;
}

.votos {
	display: flex;
	flex-direction: row;
	padding-right: 10px;
}


.voto2 {
	margin-left: 10px;
}

.Faca_pergunta {
	
}


hr {
  margin-top: 5%;
  margin-bottom: 5%;
  border: 0;
  width: 100%;
  border-top: 2px solid #4D5A65;
}

`

export const Drawer = styled.div`
display: flex;
flex-direction: column;
width: 20%;
color: ${theme.colors.text};
margin-right: 2%;
margin-left: 5%;
	

h4 {
	font-size: 13px;
	margin-bottom: 20px;
}

hr {
  margin-top: 5%;
  margin-bottom: 5%;
  border: 0;
  width: 100%;
  border-top: 2px solid #4D5A65;
}

img {
	margin-right: 10px;
}

`

export const Desafios = styled.div`
display: flex;
flex-direction: column;
width: 20%;
color: ${theme.colors.text};
border: 2px solid #4D5A65;
border-radius: 10px;
margin-right: 1%;


.desafios1 {
	margin-left: 10px;
}

hr {
  margin-top: 5%;
  margin-bottom: 5%;
  border: 0;
  width: 100%;
  border-top: 2px solid #4D5A65;
}

`