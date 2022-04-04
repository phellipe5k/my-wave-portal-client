import styled, { css } from 'styled-components';
import * as Chakra from '@chakra-ui/react';

export const Container = styled.main`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: 4%;
`;

export const Title = styled.h1`
  font-size: 4rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  p {
    font-weight: bold;
    color: white;
  }
  input {
    color: white;
    font-size: 14px;
  }

  span:nth-child(2) {
    width: 20px;
    height: 20px;
    margin-bottom: 8px;
  }
`;

export const ColorBullet = styled.div`
  ${({ color }: { color?: string }) => css`
    width: 40px;
    height: 40px;
    background-color: ${color || 'black'};
    border-radius: 50%;
  `}
`;

export const Radio = styled(Chakra.Radio)`
  ${({ isSelected }) => css`
    background-color: ${ isSelected ? '#854bc1' : 'none' };
  `}

`

export const Connect = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;