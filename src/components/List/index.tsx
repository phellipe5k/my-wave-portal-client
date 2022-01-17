import * as S from './style';

type Props = {
  title?: string;
};

const mock = [
  { color: 'blue', email: 'God', percentage: '25%'},
  { color: 'green', email: 'Human', percentage: '60%' },
  { color: 'red', email: 'Devil', percentage: '15%' }
]

const List = ({ title = 'List' }: Props) => (
  <S.Container>
    { !!mock && mock.map((user: any) => (
      <S.Item color={user.color} percentage={ user.percentage }>
        <S.Name>{user.email}</S.Name>
        <S.Number>{user.percentage}</S.Number>
      </S.Item>
    )) }
  </S.Container>
);

export default List;
