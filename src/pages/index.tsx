import { Image } from '@chakra-ui/react';
import Auth from 'components/Auth';
import Base from 'components/Base';
import Header from 'components/Header';
import Main from 'components/Main';
import Home from '../Template/Home'
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import { ChakraProvider } from '@chakra-ui/react';
import Modal from 'components/Modal';
import { useContext } from 'react';
import ProfileContext from 'Provider/Context';

const Index = () => {
  const { data } = useContext(ProfileContext);

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
    { (data.globalState.status || data.globalState.message) && <Modal status={ data.globalState.status } /> }
    <Home />
  </ ChakraProvider>
  );
};

export default Index;
