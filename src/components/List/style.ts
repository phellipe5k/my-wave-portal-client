import styled, {css} from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  padding: 2% 0;
`;

const handleColor = (color: string) => {
  switch (color) {
    case 'blue':
      return '#2a5fd1';
    case 'green':
      return '#27b861';
    case 'red':
      return '#f13e3e';
    default:
      return 'black';

  }
};

export const Item = styled.div`
  ${({ percentage, color }: { percentage?: any, color: string }) => css`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 2%;
    height: 60px;
    margin: 1% 0;
    display: flex;
    position: relative;
    justify-content: space-between;
    h4 {
      color: ${ percentage !== '0%' ? 'white' : handleColor(color) }
    }
    &:before {
      content: '';
      text-align: right;
      vertical-align: 10px;
      height: 100%;
      background-color: ${ handleColor(color) };
      width: ${percentage ? percentage : '0px'};
      top: 0;
      left: 0;
      border-radius: 8px;
      z-index: -1;
      position: absolute;
    }
  `}
`;

export const Name = styled.h4`
  font-weight: bold;
  color: white;

`;

export const Number = styled.div`
  font-weight: 600;
  color: black;
`;
