import { Image } from '@chakra-ui/react';
import Auth from 'components/Auth';
import Base from 'components/Base';
import Form from 'components/Form';
import Header from 'components/Header';
import List from 'components/List';
import Main from 'components/Main';
import SocialBadge from 'components/SocialBadge';
import { useState } from 'react';
import * as S from './style';

const Home = () => {
    const [hoverLogin, setHoverLogin] = useState(false);
  return (
    <Base>
    <S.Fixed>
        <SocialBadge url='https://phellipe.hashnode.dev/' rounded icon="https://camo.githubusercontent.com/4903b1622b93d6b463a65bfd79c818140334fb599ee94d2c3143a3ba58683138/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f486173686e6f64652d3239363246463f7374796c653d666f722d7468652d6261646765266c6f676f3d686173686e6f6465266c6f676f436f6c6f723d7768697465" />
        <SocialBadge rounded url="https://buildspace.so/" icon="assets/images/unicorn.png" color="#7694EA" name="buildspace" />
    </S.Fixed>
    <Header />
    <S.Row>
    <S.Title>
        Do you want to see a magic?
    <   S.Subtitle>Fill the form and get a chance to own a NFT!!</S.Subtitle>
    </S.Title>
    <Form />
    </S.Row>
    <S.Row>
      <S.Subtitle>
        <strong>List of votes</strong>
        <List />
      </S.Subtitle>
    </S.Row>
    </Base>
  );
};

export default Home;
