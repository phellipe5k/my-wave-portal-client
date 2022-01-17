import * as S from './style';
import { Input, Text, RadioGroup, Stack, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import Auth from 'components/Auth';
type Props = {
  title?: string;
};

const Form = ({ title = 'Form' }: Props) => {
  const [form, setForm] = useState({ name: '', email: '', color: '' });
  const [currentAccount, setCurrentAccount] = useState('');  
  const [isAuth, setIsAuth] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((v: any) => ({...v, [field]: value}))
  }

  const connectWallet = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please, get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      if (accounts) {
        setCurrentAccount(accounts[0]);
        setIsAuth(true);
        return;
      }
      alert("No account selected!");
    } catch (err) {
      console.log(err);
    }
  }

  const isWalletInMeta = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please, get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length == 0 ) {
        console.log('Not connected to metamask');
        return;
      }
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    isWalletInMeta();
  }, [])

  return (
    <S.Container>
      { isAuth ? (
        <>
          <S.InputWrapper>
            <Text fontSize={"16px"}>Name: </Text>
            <Input value={form.name} onChange={({ target }: { target: any }) => handleChange('name', target.value)} width={"100%"} height={"30px"} />
          </ S.InputWrapper>
          
          <S.InputWrapper>
            <Text fontSize={"16px"}>Email: </Text>
            <Input value={form.email} type={"email"} onChange={({ target }: { target: any }) => handleChange('email', target.value)}  width={"100%"} height={"30px"} />
          </ S.InputWrapper>
          
          <S.InputWrapper>
            <Text fontSize={"16px"} >Select a color:</Text>
            <RadioGroup colorScheme="#854BC1" marginTop={"20px"} onChange={(v: any) => handleChange('color', v) } value={form.color}>
            <Stack justifyContent={'center'} direction='row'>
              <S.Radio isSelected={ form.color == 'blue' } display={"flex"} flexDirection={"column"} value='blue'><S.ColorBullet color="#2a5fd1" /></S.Radio>
              <S.Radio isSelected={ form.color == 'green' } display={"flex"} flexDirection={"column"} value='green'><S.ColorBullet color="#27b861" /></S.Radio>
              <S.Radio isSelected={ form.color == 'red' } display={"flex"} flexDirection={"column"} value='red'><S.ColorBullet color='#f13e3e' /></S.Radio>
            </Stack>
          </RadioGroup>
          </ S.InputWrapper>
          <Button marginTop={"10px"} border={"1px solid #854BC1"} bgColor={'transparent'}
          width="70%" height="40px" fontSize={"16px"} color='#854BC1'>Submit</Button>
        </>
      ) : (
        <S.Connect onClick={ connectWallet } >
          
          <Auth>
            <Button fontSize={11} bgColor="transparent" width="80%" height="40px" textColor="#854BC1">Connect my MetaMask Wallet</Button>
          </Auth>
         
        </S.Connect>
      )}
    </S.Container>
  );
}

export default Form;
