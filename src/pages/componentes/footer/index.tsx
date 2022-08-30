import { Rodapé } from './style';

function Footer(): JSX.Element {
    return (
        <Rodapé>
            <footer>
                <div className="footerLinks">
                    <ul>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Legal</a>
                        <a href="#">Site Map</a>
                        <a href="#">Contact Us</a>
                        
                    </ul>
                </div>

                <div className="titulo_footer">
                    <img src='/logo2.png' />
                    <p>DevsTogether</p>
                </div>

            </footer>

            <hr />

            <div className="RedesSociais">
                <p>Copyright @Yout Website 2022</p>
                <div className='Logo_RedeSocial'>
                    <img src='/logofooter.png' />
                    <img src='/logofooter2.png' />
                    <img src='/logofooter3.png' />
                </div>
            </div>
        </Rodapé>
    );
}

export default Footer;