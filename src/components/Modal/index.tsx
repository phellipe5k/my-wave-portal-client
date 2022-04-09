import ProfileContext from 'Provider/Context';
import { useContext, useEffect } from 'react';
import { Button } from 'web3-components';
import * as Actions from 'Provider/Actions';
import * as S from './style';

type Props = {
  status: 'success' | 'warning' | 'error'
};

const Modal = ({ status = 'success' }: Props) => {
  const {data, setData} = useContext(ProfileContext);
  const { globalState } = data;
  const handleColor = () => {
    switch (status) {
      case 'warning':
        return 'yellow';
      case 'error':
        return 'red';
      case 'success':
        return 'green';
    }
  }

  useEffect(() => {
    setTimeout(() => setData({...data, globalState: {...data.globalState, status: '', message: ''}}), 5000)
  }, [])
  return (
    <S.Container>
      <S.Box color={handleColor()}>  
        <S.Status>{ globalState.status }!!</S.Status>
        <S.Message>{ globalState.message }</S.Message>
        <Button.Gradient  onClick={() => Actions.disableAlert(setData)}>OK!</Button.Gradient>
      </S.Box>
    </S.Container>
  )
};

export default Modal;
