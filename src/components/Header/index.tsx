import { Image } from '@chakra-ui/react';
import Auth from 'components/Auth';
import SocialBadge from 'components/SocialBadge';
import { useState } from 'react';
import * as S from './style';

type Props = {
  title?: string;
};

const Header = ({ title = 'Header' }: Props) => {
  const [hoverLogin, setHoverLogin] = useState(false);

  return (
    <S.Container>
      {/*<S.Logo><S.Image src={ 'assets/images/icon_dark.png' } /></S.Logo> */}
      <S.Title>Welcome to WavePortal 👋</S.Title>
    </S.Container>
  );
} 

export default Header;
