import { useContext, useEffect, useState } from 'react';
import * as Chakra from '@chakra-ui/react';
import * as S from './style';
import { Image } from '@chakra-ui/react';
import * as Actions from 'Provider/Actions';
import ProfileContext from 'Provider/Context';

type Props = {
  children?: any;
};


const Auth = ({ children }: Props) => {
  const [currentAccount, setCurrentAccount] = useState('');  
  const [hoverLogin, setHoverLogin] = useState(false);
  const { setData } = useContext(ProfileContext);

  const checkWalletAuth = async () => {
    // @ts-ignore
    const { ethereum } = window;
    try {
      // @ts-ignore
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please, get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length == 0 ) {
        Actions.setAlert({ status: 'warning', message: 'Not connected to metamask'}, setData)
        return;
      }
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    checkWalletAuth();
  }, []);
  return (
    <>
      { !currentAccount && (
        <S.Login visible={hoverLogin} onMouseOver={ () => setHoverLogin(true) } onMouseLeave={() => setHoverLogin(false)}>
          <Image src="assets/images/metamask-gray.svg" />
          <Image src="assets/images/metamask.svg" />  
          { !!children && children }
        </S.Login>
      ) }
    </>
  );
}

export default Auth;
