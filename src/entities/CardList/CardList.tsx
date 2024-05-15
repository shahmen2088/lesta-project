import { useState } from 'react';
import Card, { PropsCard } from '../Card/Card';
import ButtonList from '~/components/ButtonList/ButtonList';

type PropsList = {
  vehicles: [];
};

export default function CardList({ vehicles }: PropsList) {
  const [arrayList, setList] = useState(vehicles);
  const list: PropsCard[] = [...arrayList];

  return (
    <>
      <h1>Example of List Ships</h1>
      {list && <ButtonList list={vehicles} setList={setList} />}

      {list &&
        list.map((item: PropsCard, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              level={item.level}
              type={{
                title: item.type.title,
              }}
              icons={{
                medium: item.icons.medium,
              }}
              nation={{
                title: item.nation.title,
                icons: {
                  large: item.nation.icons.large,
                },
              }}
            />
          );
        })}
    </>
  );
}
