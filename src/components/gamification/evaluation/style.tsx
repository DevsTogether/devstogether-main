import styled from 'styled-components';

export const PrincipalContainer = styled.div`
`

export const Menu = styled.div`

.Respostas {
    display: flex;
    width: 100%;
    margin-bottom: 1%;
    height: 50%;
    border: 4.5px;
    flex-direction: column;
    border: 2px solid;
    border-color: gray;
    border-radius: 2px;
}

.description {
    display: flex;
    flex-direction: row;
    justify-content: right;
}

.votos {
    display: flex;
    flex-direction: row;
    margin-right: 2%;
    margin-left: 2%;
}

p {
    margin-top: 1%;
    color: gray;
}

.itens {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 1%;
    margin-top: 1%;
}
  
`;