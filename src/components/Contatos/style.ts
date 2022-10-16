import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    height: 100vh;

    h1 {
        font-size: 45px;
        margin-bottom: 5%;
    }

    p {
        margin-bottom: 10%;
        margin-top: 7%;
    }

    .button {
        color: white;
        margin-left: 10%;
    }

    img {
        height: 95%;
    }
`;
