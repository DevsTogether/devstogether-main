import Link from 'next/link';
import { Rodapé } from './style';

function Footer(): JSX.Element {
    return (
        <Rodapé>
            <footer>
                <div className="footerLinks">
                    <ul>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/help">Help</a>
                        <a href="/terms-of-use">Terms of Use</a>
                        <a href="/contact">Contact</a>
                    </ul>
                </div>

                <div className="titulo_footer">
                    <img src="/logo2.png" alt="" />
                    <p>DevsTogether</p>
                </div>
            </footer>

            <hr />

            <div className="RedesSociais">
                <p>Copyright @Yout Website 2022</p>
                <div className="Logo_RedeSocial">
                    <img src="/logofooter.png" alt="" />
                    <img src="/logofooter2.png" alt="" />
                    <Link href="https://www.youtube.com/channel/UCym6nH2pDE1S00O0l62X8sg" target={'_blank'}>
                        <img src="/logofooter3.png" alt="" />
                    </Link>
                </div>
            </div>
        </Rodapé>
    );
}

export default Footer;
