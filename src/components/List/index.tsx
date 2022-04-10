import ProfileContext from 'Provider/Context';
import { useContext, useEffect, useState } from 'react';
import * as S from './style';

type Props = {
  title?: string;
};

const mock = [
]

const List = ({ title = 'List' }: Props) => {
  const [percentages, setPercentages] = useState([
    { color: 'blue', email: 'God', percentage: '0%'},
    { color: 'green', email: 'Human', percentage: '0%' },
    { color: 'red', email: 'Devil', percentage: '0%' }]);

  const { data } = useContext(ProfileContext);
  
  useEffect(() => {
    if (data.colors) {
      const total = data.colors.length;
      let colors = {
        red: (data.colors.filter(e => e == 'red').length * 100) / total,
        green: (data.colors.filter(e => e == 'green').length) * 100 / total,
        blue: (data.colors.filter(e => e == 'blue').length) * 100 / total,
      };
      
      setPercentages(v => v.map(e => ({...e, percentage: `${colors[e.color] ? colors[e.color].toFixed(2) : '0'}%`})));
    }
  }, [data.colors])
  
  return (
    <S.Container>
      { !!percentages && percentages.map((user: any) => (
        <S.Item color={user.color} percentage={ user.percentage }>
          <S.Name>{user.email}</S.Name>
          <S.Number>{user.percentage}</S.Number>
        </S.Item>
      )) }
    </S.Container>
  );
}

export default List;
