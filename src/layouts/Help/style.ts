import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 6%;
    margin-bottom: 10%;
    width: 100%;
    height: 100%;

    .div_input {
        width: 100%;
        margin-bottom: 3%;
    }

    input {
        display: flex;
        flex-direction: row;
        border-radius: 2px;
        border: none;
        width: 100vh;
        height: 7vh;
        font-size: 20px;
    }

    h1 {
        color: white;
        margin-bottom: 50%;
        font-size: 40px;
    }

    h2 {
        color: white;
        margin-bottom: 4%;
    }
`;
