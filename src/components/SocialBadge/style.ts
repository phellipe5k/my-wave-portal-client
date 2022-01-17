import styled, { css } from 'styled-components';

export const Link = styled.a`
    ${({ color, rounded }: { color?: string, rounded?: boolean }) => css`
      background-color: ${ color || 'transparent' };
      width: 120px;
      height: 28px;
      display: flex;
      border-radius: ${ rounded ? '8px' : '0' };
      align-items: center;
      margin: 2% 0;
    `}
`;

export const Image = styled.img`
  padding: 2%;
`;


export const Name = styled.span`
  color: white;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 75%;
  margin-left: 5px;
`;