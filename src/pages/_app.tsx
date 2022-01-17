import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import { ChakraProvider } from '@chakra-ui/react';

const myApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link
          rel="shortcut icon"
          href="https://reactavancado.com.br/img/icon-512.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://reactavancado.com.br/img/icon-512.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ ChakraProvider>
  );
};

export default myApp;
