import styled from 'styled-components';

export const Menu = styled.div`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    body {
        background: #353e46;
        font-size: 15px;
    }

    .sidebar {
        position: fixed;
        width: 250px;
        height: 100%;
        background: #2d3237;
        transition: all 0.5sease;
        font-size: 12px;
    }
    .sidebar header {
        font-size: 30px;
        color: white;
        line-height: 70px;
        text-align: center;
        background: #2d3237;
        user-select: none;
        font-family: 'Montserrat', sans-serif;
    }
    .sidebar a {
        display: flex;
        height: 80px;
        width: 100%;
        color: white;
        line-height: 65px;
        padding-left: 10px;
        box-sizing: border-box;
        border-left: 5px solid transparent;
        font-family: 'Open Sans', sans-serif;
        transition: all 0.5s ease;
    }
    a.active,
    a:hover {
        border-left: 5px solid #47ae2e;
        color: #f8f8f8;
    }
    .sidebar a i {
        font-size: 20px;
        margin-right: 16px;
    }
    .sidebar a span {
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    #check {
        display: none;
    }
    label #btn,
    label #cancel {
        position: absolute;
        cursor: pointer;
        color: white;
        border-radius: 5px;
        border: 1px solid #262626;
        margin: 15px 30px;
        font-size: 29px;
        background: #2d3237;
        height: 45px;
        width: 45px;
        text-align: center;
        line-height: 45px;
        transition: all 0.5s ease;
    }
    label #cancel {
        opacity: 0;
        visibility: hidden;
    }
    #check:checked ~ .sidebar {
        left: 0;
    }
    #check:checked ~ label #btn {
        margin-left: 245px;
        opacity: 0;
        visibility: hidden;
    }
    #check:checked ~ label #cancel {
        margin-left: 245px;
        opacity: 1;
        visibility: visible;
    }
    @media (max-width: 860px) {
        .sidebar {
            height: auto;
            width: 70px;
            left: 0;
            margin: 100px 0;
        }
        header,
        #btn,
        #cancel {
            display: none;
        }
        span {
            position: absolute;
            margin-left: 23px;
            opacity: 0;
            visibility: hidden;
        }
        .sidebar a {
            height: 60px;
        }
        .sidebar a i {
            margin-left: -10px;
        }
        a:hover {
            width: 250px;
            background: inherit;
        }
        .sidebar a:hover span {
            opacity: 1;
            visibility: visible;
        }
    }

    .Conteudo1 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20%;
        color: white;
        margin-bottom: 10px;
    }

    .titulo {
        font-size: 31px;
        margin-bottom: 50px;
    }

    .Conteudo2 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20%;
        margin-bottom: 1px;
        color: white;
    }

    .Conteudo3 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20%;
        margin-bottom: 10px;
        color: white;
    }

    .Conteudo4 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20%;
        margin-bottom: 10px;
        color: white;
    }

    .botaosair {
        display: flex;
        justify-content: flex-end;
        margin-right: 100px;
    }

    h1 {
        margin-top: 20px;
        font-size: 30px;
    }

    h2 {
        margin-bottom: 10px;
    }

    h4 {
        color: gray;
    }

    img {
        margin-right: 10px;
    }

    .switch {
        display: flex;
        margin-left: 70%;
    }

    /* Don't Forget to Subscribe our Channel[CodingNepal] */
`;
