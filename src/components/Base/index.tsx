import * as S from './style';

type Props = {
  children: any;
};

const Base = ({ children }: Props) => (
  <S.Container>
    { children }
  </S.Container>
);

export default Base;
