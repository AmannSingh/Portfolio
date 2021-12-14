import Theme from '../styles/theme';
import Header from '../components/Header/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
    
      <Theme>
        <Component {...pageProps} />
      </Theme>
    
    </>
  );
}
 