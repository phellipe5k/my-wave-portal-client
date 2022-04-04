import { Image } from '@chakra-ui/react';
import Auth from 'components/Auth';
import Base from 'components/Base';
import Header from 'components/Header';
import Main from 'components/Main';
import Home from '../Template/Home'
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import { ChakraProvider } from '@chakra-ui/react';

const Index = () => {
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
    </Head>
    <GlobalStyles />
    <Home />
  </ ChakraProvider>
  );
};

export default Index;
