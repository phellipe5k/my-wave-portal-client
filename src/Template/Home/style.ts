import styled, { css } from 'styled-components';

export const Row = styled.section`
    display: flex;
    margin-top: 70px;
    justify-content: space-between;

`;

export const Title = styled.h1`
    font-size: 53px;
    font-weight: bolder;
    letter-spacing: 4px;
    width: 50%;
    line-height: 70px;
    color: white;
    
  text-shadow: 0 0 80px rgb(192 219 255 / 35%), 0 0 32px rgb(65 120 255 / 24%);
`;

export const GradientText = styled.span`
  background: linear-gradient(to right, #30CFD0, #c43ad6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Subtitle = styled.h3`
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 3px;
    width: 100%;
    margin-top: 20px;
    line-height: 30px;
    color: white;
`;
export const Fixed = styled.div`
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 300px;
    display: flex;
    justify-content: space-around;
`;
