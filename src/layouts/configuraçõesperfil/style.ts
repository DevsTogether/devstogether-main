import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%auto;
`;

export const Drawer = styled.div`
    .sidebar {
        position: fixed;
        width: 250px;
        height: 100%;
        background: black;
        transition: all 0.5sease;
        font-size: 12px;
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

    span {
        flex-direction: row;
        font-size: 1.5em;
    }

    img {
        margin-right: 10px;
        height: 20px;
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
            margin-left: 10px;
            opacity: 1;
            visibility: hidden;
            font-size: 0px;
            flex-direction: row;
        }

        .sidebar a {
            height: 60px;
        }
        .sidebar a i {
            margin-left: -20px;
        }
        a:hover {
            width: 50px;
            background: inherit;
        }
        .sidebar a:hover span {
            opacity: 1;
            visibility: hidden;
        }

        img { 
            visibility: visible;
        }
    }
`;

export const Menu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 60px;
width: 100%;

h2 {
    margin-bottom: 20px;
}

`;
