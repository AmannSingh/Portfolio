import Theme from '../styles/theme';
import Helmet from 'react-helmet';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Helmet>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://amannsingh.netlify.app/"/>
      <meta property="og:title" content="Amann Singh "/>
      <meta property="og:description" content="Portfolio showcasing my work as software engineer student "/>
      <meta property="og:image" content="/images/img2.png"/>
    </Helmet>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    
    </>
  );
}
 