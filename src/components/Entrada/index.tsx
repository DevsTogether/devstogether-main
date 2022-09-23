import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { signIn } from "next-auth/react";
import { Container } from './style';

function Layout(): JSX.Element {
    return (

        <Container>
           <div className="container">
    <div className="card1">
        <div className="content">
           <img src='safd' />
       	   <h3>Iniciar Uma chamada</h3>
       	   <p>Você inicia uma chamada compartilhando sua tela do código de forma remota.</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>


<div className="container2">
       <div className="card2">
       	 <div className="content2">
       	   <img src='safd' />
       	   <h3>Iniciar Uma chamada</h3>
       	   <p>Você inicia uma chamada compartilhando sua tela do código de forma remota.</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>
</div>
</div>
        </Container>

    );
}

export default Layout;