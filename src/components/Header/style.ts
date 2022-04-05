import styled, { css } from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Logo = styled.div`
  width: 60px;
  position: absolute;
  top: 4px;
  left: 4px;
`;

export const Image = styled.img`
  width: 100%;
`


export const Title = styled.h1`
  font-size: 26px;
  font-weight: bolder;
  color: white;
  text-shadow: 0 0 80px rgb(192 219 255 / 35%), 0 0 32px rgb(65 120 255 / 24%);
  background: linear-gradient(to right, #30CFD0, #c43ad6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`

export const SocialMedia = styled.div`
position: absolute;
top: 4px;
right: 4px;
`;

export const Login = styled.div`
    ${({ visible }: { visible?: any }) => css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 70px;
        cursor: pointer;
        position: absolute;
        right: 0;
        border-radius: 8px;
        img {
            transition: .4s ease-in-out;
            width: 100%;
            left: 16px;
            position: absolute;
        }

        img:nth-child(2) {
            opacity: ${ visible ? '1' : '0' };
        }
    `}
`;