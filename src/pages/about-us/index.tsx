import logo from '@public/logo.png';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <div className="container">
            <div className="logo">
                <Image src={logo} alt="" style={{ width: 64, height: 64 }} />
                <h1>DevsTogether</h1>
            </div>
            <h2>O que é o DevsTogether?</h2>
            <section style={{ display: 'flex', gap: '2em' }}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Nr9PCAX5jJA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <p style={{ opacity: '0.5' }}>
                    A ideia do projeto DevsTogether é que desenvolvedores ajudem
                    e sejam ajudados de forma prática e dinâmica, compartilhando
                    experiencias com outros desenvolvedores e contribuindo na
                    comunidade dev
                </p>
            </section>
            <section>
                <h2>Sobre o projeto</h2>
                <p style={{ color: '#000', width: '60vw', margin: 0 }}>
                    O DevsTogether esta atualmente em desenvolvimento. Veja o{' '}
                    <a
                        href="https://www.notion.so/TCC-4cf7e32955ee4b0bbbc3a2887e9f226e"
                        target="_blanck"
                    >
                        progresso do projeto
                    </a>
                </p>
            </section>

            <style jsx>{`
                .container {
                    padding: 64px;
                }
                .logo {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 20vw;
                    margin: auto;
                }
                iframe {
                    min-width: 40vw;
                }
                section {
                    margin-bottom: 128px;
                }
                h1,
                p {
                    margin: 10px auto;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                        'Helvetica Neue', sans-serif;
                }
                h1,
                h2 {
                    font-size: 2rem;
                    font-weight: bolder;
                }
                p {
                    font-size: 1.5rem;
                }
                a {
                    opacity: 0.5;
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default Home;
