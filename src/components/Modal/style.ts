import styled, { css } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 99;
  background: rgba(0,0,0,0.4);
`;

export const Box = styled.div<{ color: string }>`
  ${ ({ color }) => css`
    width: 35%;
    height: 50%;
    display: flex;
    border-radius: 8px;
    background-color: black;
    box-shadow: 0px 0px 20px ${ color };
    color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
  ` }
`;

export const Status = styled.h2`
  ${ () => css`
    font-size: 24pt;
  ` }
`;


export const Message = styled.p`
  ${ () => css`
  ` }
`;

