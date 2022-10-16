import Footer from '@components/footer';
import Header from '@components/header/index';
import Layout from '@src/components/configuraçõesprivacidade';
import GlobalStyles from '@src/styles/global';
import theme from '@styles/theme';

function Privacidade(): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <main>
                <Layout />
            </main>
        </>
    );
}

export default Privacidade;
