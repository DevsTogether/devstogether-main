/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { Container, Header } from 'src/styles/pages/home';

const page: NextPage = () => {
    return (
        <>

            <Header>
                <div className="menu">
                    <img src="/menu.png" />
                </div>
                <div className="title">
                    <img src="/logo2.png" />
                    <h3>Devstogether</h3>
                </div>


                <nav>
                    <div className="buttons">
                        <a className="login" href='#'>Log in</a>
                        <a className="signup" href='#'>Sign up</a>
                    </div>
                </nav>
            </Header>

            <div align="center">
                <img src="/logo3.png" />
            </div>

            <Container>

                <title>Devstogether</title>

                <label className="label1"></label>
                <button className="button1" href='#'>Log In</button>
                <button className="button2" href='#'>Log In</button>
            </Container>

        </>

    );
};

export default page;
