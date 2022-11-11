import styled from 'styled-components';

export const Container = styled.div`
    margin-block: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;

    .container {
        gap: 20px;
        width: 49vmin;
        height: 600px;
        background-color: #3c4144;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.7);
        border-radius: 4px;
        padding: 2rem;
        display: flex;
        align-items: center;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
    }

    .image_ilustration {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .content p {
        font-size: 1rem;
        text-align: center;
        height: 6rem;
        color: rgba(255, 255, 255, 0.7);
    }

    .cta {
        display: inline-block;
        padding: 8px 20px;
        background: #fff;
        color: #000;
        text-decoration: none;
        border-radius: 20px;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`;
