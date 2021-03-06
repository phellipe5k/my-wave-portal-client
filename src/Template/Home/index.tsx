import { Image } from '@chakra-ui/react';
import Auth from '../../components/Auth';
import Base from '../../components/Base';
import Form from '../../components/Form';
import Header from '../../components/Header';
import List from '../../components/List';
import Main from '../../components/Main';
import Modal from 'components/Modal';
import SocialBadge from '../../components/SocialBadge';
import { useEffect, useState } from 'react';
import * as S from './style';
import BuildspaceIcon from '../../assets/images/unicorn.png'

const Home = () => {
  console.log('rerendered!!!!!!')
    const [hoverLogin, setHoverLogin] = useState(false);
    
    return (
    <Base>
    <S.Fixed>
        <SocialBadge name="github" color="black" url='https://github.com/phellipe5k' rounded icon={ '/assets/images/github.png' } />
        <SocialBadge rounded url="https://buildspace.so/" icon={'/assets/images/unicorn.png'} color="#7694EA" name="buildspace" />
    </S.Fixed>
    <Header />
    <S.Row>
    <S.Title>
        Do you want to <S.GradientText>see a magic?</S.GradientText>
    <   S.Subtitle>Fill the form and get a chance to <S.GradientText>own ETH!!</S.GradientText></S.Subtitle>
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
