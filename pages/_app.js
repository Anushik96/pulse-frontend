import '@/styles/globals.scss'
import 'normalize.css/normalize.css';

import Layout from '@/components/layouts/Layout';
export default function MyApp({ Component, pageProps }) {
  
  if (Component.name === 'ComingSoon') {
    return (
        <Component {...pageProps} />
    );
  }else{
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
  }
}