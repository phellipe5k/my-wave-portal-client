import * as S from './style';

type Props = {
  name?: string,
  url: string,
  icon: any,
  color?: string
  rounded?: boolean
};

const SocialBadge = ({ name, url, icon, color, rounded }: Props) => (
  <S.Link rounded={rounded} color={ color } href={url} target="_blank" rel="nofollow">
    <S.Image src={icon} style={{ width: name ? '25%' : '100%', borderRadius: !name && rounded ? '8px' : '0' }} />
      { !!name && <S.Name>{ name }</S.Name>  }
    </S.Link>
);

export default SocialBadge;
