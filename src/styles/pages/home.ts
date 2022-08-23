import styled from 'styled-components';

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 28px 15px 24px;
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 20px 20px;
  }
  
  .menu {
     display: flex;
     align-items: center;
     padding-left: 10px;
  }
  
  .title {
    display: flex;
    align-items: center;
    padding-right: 1300px;
  }
  
    h3 {
      color: #47AE2E;
      font-size: 20px;
      font-weight: 700;
  
    }
    nav {
      display: flex;
      align-items: center;
      
  }
  
   
       li {
          padding: 16px;
  }
          a {
            text-decoration: none;
            font-size: 16px;
            color: black;
            font-weight: 700;
        }
  
        .buttons {
        display: flex;
        margin-left: 28px;
    }
  
        a {
        display: inline-block;
        padding: 10px 20px;
        color: #47AE2E;
        text-transform: uppercase;
        letter-spacing: 4px;
        text-decoration: none;
        font-size: 08px;
        overflow: hidden;
        transition: 0.2s;
      }
  
       a:hover
        {
        color: #2D3237;
        background: #47AE2E;
        box-shadow: 0 0 10px #47AE2E, 0 0 40px #47AE2E, 0 0 80px #47AE2E;
        transition-delay: 1s;
        }
   
        }
  
        .login {
          color: white;
          background: green;
  
        }
        .signup {
          margin-left: 16px;
          background: #2D3237;
        }  
`

export const Container = styled.div`

width: 100vw;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1 {
  position: absolute;
  font-size: 54px;
  color: #47AE2E;
  margin-top: 40px;
  left: center;
  top: 15%;
}

p {
  margin-top: 24px;
  font-size: 24px;
  line-height: 32px;
}

.button1 {
  background-color: #47AE2E;
  position: fixed;
  width: 203px;
  height: 49.47px;
  left: 53%;
  top: 60%;
  
}

.button2 {
  background-color: #47AE2E;
  position: absolute;
  width: 203px;
  height: 49.47px;
  left: 40%;
  top: 60%;
  
}

.label1 {
 position: absolute;
 width: 40.2px;
 height: 380.58px;
 left: center;
 top: 30%;
 border: 1px solid #A1B1C2;
 border-radius: 4px;
 transform: matrix(0, 1, -1, 0, 0, 0);
}

`
