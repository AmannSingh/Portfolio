import Theme from '../styles/theme';
import Meta from '..meta';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Meta>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Meta>
    </>
  );
}
 