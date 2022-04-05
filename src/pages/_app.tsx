import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import { ChakraProvider } from '@chakra-ui/react';

const myApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Head>
        <title>WavePortal</title>
        <link
          rel="shortcut icon"
          href="assets/images/icon.png"
        />
        <link
          rel="apple-touch-icon"
          href="assets/images/icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ ChakraProvider>
  );
};

export default myApp;
