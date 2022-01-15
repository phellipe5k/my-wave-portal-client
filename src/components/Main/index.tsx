import * as S from './style';

// Icons

type Props = {
  title?: string;
  description?: string;
  illustrationSrc?: string;
};

const Main = ({ title, description, illustrationSrc }: Props) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src={illustrationSrc} />
  </S.Container>
);

export default Main;
