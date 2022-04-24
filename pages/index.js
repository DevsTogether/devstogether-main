import Image from 'next/image';
import logo from '../public/logo.png';

export default function Home() {
    return (
        <div>
            <Image src={logo} alt="" width={300} height={300} />
            <h1>DevsTogether</h1>
            <p>em breve</p>

            <footer>
                <p
                    style={{
                        fontSize: '1rem',
                        textDecoration: 'underline',
                    }}
                >
                    <a
                        href="https://www.notion.so/TCC-4cf7e32955ee4b0bbbc3a2887e9f226e"
                        target="_blanck"
                    >
                        mais informações
                    </a>{' '}
                </p>
            </footer>

            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }
                h1,
                p {
                    margin: 10px auto;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                        'Helvetica Neue', sans-serif;
                }
                h1 {
                    font-size: 4rem;
                    font-weight: bolder;
                }
                p {
                    opacity: 0.5;
                    font-size: 2rem;
                }
            `}</style>
        </div>
    );
}
