import * as S from './style';
import { Input, Text, RadioGroup, Stack } from '@chakra-ui/react'
import { Button } from 'web3-components'
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from '../../utils/contracts/wavePortal.json';
import Auth from '../../components/Auth';
type Props = {
  title?: string;
};

const Form = ({ title = 'Form' }: Props) => {
  const [form, setForm] = useState({ name: '', email: '', color: '' });
  const [currentAccount, setCurrentAccount] = useState('');  
  const [isAuth, setIsAuth] = useState(false);
  const [totalVotes, setTotalVotes] = useState(0);

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
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const address = '0x194aEf5baB84A468D3f9daC20C838510e53d7128';
      const wavePortalContract = new ethers.Contract(address, abi.abi, signer);
      let count = await wavePortalContract.getTotalColors();
      setTotalVotes(count.toNumber());
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
    connectWallet();
  }, [])

  return (
    <S.Container>
      { isAuth ? (
        <>{/*
          <S.InputWrapper>
            <Text fontSize={"16px"}>Name: </Text>
            <Input minHeight="35" marginTop={5} value={form.name} onChange={({ target }: { target: any }) => handleChange('name', target.value)} width={"100%"} height={"30px"} />
          </ S.InputWrapper>
          
          <S.InputWrapper>
            <Text fontSize={"16px"}>Email: </Text>
            <Input minHeight="35" marginTop={5} value={form.email} type={"email"} onChange={({ target }: { target: any }) => handleChange('email', target.value)}  width={"100%"} height={"30px"} />
          </ S.InputWrapper>
        */}
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
          <Button.BorderGradient onClick={async () => {
            const { ethereum } = window;

            if (!ethereum) {
              alert("Please, get MetaMask!");
              return;
            }
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const address = '0x194aEf5baB84A468D3f9daC20C838510e53d7128';
            const wavePortalContract = new ethers.Contract(address, abi.abi, signer);
            await wavePortalContract.registerColor(form.color);
            
            let count = await wavePortalContract.getTotalColors();
            setTotalVotes(count.toNumber());
            console.log('Colors on blockchain: ', await wavePortalContract.getColors())
          }} 
          
          //@ts-ignore
          style={{ marginTop: '20px', width: '100%', height: '50px', fontSize: '14px' }} color="black" >
            Submit
          </Button.BorderGradient>
          <span style={{ fontSize: '14px', color: 'white' }}>Total votes: {totalVotes}</span>
        </>
      ) : (
        <S.Connect onClick={ connectWallet } >
          
          <Auth>
            <Button.BorderGradient glow=' #c43ad6' gradientColors={' #30CFD0, #c43ad6' } width='80%' border='gradient' color='black'><span style={{ fontSize: '14px' }}>Login</span></Button.BorderGradient>
          </Auth>
         
          <span style={{ fontSize: '14px', color: 'white' }}>Total votes: {totalVotes}</span>
        </S.Connect>
      )}
    </S.Container>
  );
}

export default Form;
