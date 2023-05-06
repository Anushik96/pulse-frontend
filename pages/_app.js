import '@/styles/globals.scss'
import 'normalize.css/normalize.css';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
      return (
        <Component {...pageProps} />
    );
}