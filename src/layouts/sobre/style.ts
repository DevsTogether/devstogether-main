import styled from 'styled-components';

export const Container = styled.div`
    .container {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        z-index: 1;
        margin-top: 10%;
        padding-bottom: 10%;
    }

    .container .card1 {
        position: relative;
        width: 250px; /*A largura dos cards*/
        height: 450px; /*altura dos cards*/
        margin-left: 70px;
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.1);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container .card1 .content {
        padding: 20px;
        text-align: center;
        transform: translateY(10px);
        opacity: 1;
        transition: 0.5s;
    }

    .container .card1:hover .content {
        transform: translateY(0px);
        opacity: 1;
    }

    .container .card1 .content h2 {
        position: absolute;
        top: -80px;
        right: 30px;
        font-size: 8em;
        color: rgba(255, 255, 255, 0.05);
        pointer-events: none;
    }

    .container .card1 .content h3 {
        font-size: 1.8em;
        color: #fff;
        z-index: 1;
    }
    .container .card1 .content p {
        font-size: 1em;
        color: #fff;
        font-weight: 300;
    }

    .container .card1 .content a {
        position: relative;
        display: inline-block;
        padding: 8px 20px;
        margin-top: 15px;
        background: #fff;
        color: #000;
        text-decoration: none;
        border-radius: 20px;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .container2 {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        z-index: 1;
    }

    .container2 .card2 {
        position: relative;
        width: 250px; /*A largura dos cards*/
        height: 450px; /*altura dos cards*/
        margin-left: 60px;
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.1);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container2 .card2 .content2 {
        padding: 20px;
        text-align: center;
        transform: translateY(10px);
        opacity: 1;
        transition: 0.5s;
    }

    .container2 .card2:hover .content2 {
        transform: translateY(0px);
        opacity: 1;
    }

    .container2 .card2 .content2 h2 {
        position: absolute;
        top: -80px;
        right: 30px;
        font-size: 8em;
        color: rgba(255, 255, 255, 0.05);
        pointer-events: none;
    }

    .container2 .card2 .content2 h3 {
        font-size: 1.8em;
        color: #fff;
        z-index: 1;
    }
    .container2 .card2 .content2 p {
        font-size: 1em;
        color: #fff;
        font-weight: 300;
    }

    .container2 .card2 .content2 a {
        position: relative;
        display: inline-block;
        padding: 8px 20px;
        margin-top: 15px;
        background: #fff;
        color: #000;
        text-decoration: none;
        border-radius: 20px;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    h1 {
        color: white;
        margin-left: 5%;
    }

    p {
        font-size: 20px;
        color: white;
    }

    .video {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 5%;
        margin-bottom: 5%;
    }

    img {
        height: 200px;
    }
`;