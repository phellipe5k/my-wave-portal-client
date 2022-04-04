import styled, { css } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  position: absolute;
  padding: 2% 0;
  top: 40px;
  left: 50%;
  transform: translateX(-34%);
  width: 100px;
  text-align: center;
  font-weight: bolder;
  font-size: 14px;
  color: #ccc;
  transition: .4s ease-in-out;

`;

export const Login = styled.div`
    ${({ visible }: { visible?: any }) => css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        width: 100%;
        cursor: pointer;
        position: relative;
        height: 200px;
        right: 0;
        border-radius: 8px;
        button {
          position: absolute;
          bottom: 0;

        }
        img {
            transition: .4s ease-in-out;
            width: 50%;
            left: 50%;
            top: -20px;
            transform: translateX(-50%);
            position: absolute;
        }

        img:nth-child(2) {
            opacity: ${ visible ? '1' : '0' };
        }

        &:hover {
          span {
          }
        }
    `}
`;