import { useState } from 'react';
import Card, { PropsCard } from '../Card/Card';
import Button from '~/UI/Buttons/Button';

type PropsList = {
  vehicles: [];
};

export default function CardList({ vehicles }: PropsList) {
  const [arrayList, setList] = useState(vehicles);
  const list: PropsCard[] = [...arrayList];
  const levelItems = [...new Set(vehicles.map((Val: PropsCard) => Val.level))];
  const nationItems = [
    ...new Set(vehicles.map((Val: PropsCard) => Val.nation.title)),
  ];
  const typeItems = [
    ...new Set(vehicles.map((Val: PropsCard) => Val.type.title)),
  ];

  const filterLevel = (
    value: string,
    list: PropsCard[],
    setList: React.Dispatch<React.SetStateAction<PropsCard[]>>,
  ) => {
    const newItem: PropsCard[] = list.filter((newVal: PropsCard) => {
      return newVal.level === value;
    });
    setList(newItem);
  };
  const filterNation = (
    value: string,
    list: PropsCard[],
    setList: React.Dispatch<React.SetStateAction<PropsCard[]>>,
  ) => {
    const newItem: PropsCard[] = list.filter((newVal: PropsCard) => {
      return newVal.nation.title === value;
    });
    setList(newItem);
  };
  const filterClass = (
    value: string,
    list: PropsCard[],
    setList: React.Dispatch<React.SetStateAction<PropsCard[]>>,
  ) => {
    const newItem: PropsCard[] = list.filter((newVal: PropsCard) => {
      return newVal.type.title === value;
    });
    setList(newItem);
  };

  return (
    <>
      <h1>Example of List Virtualization</h1>
      <Button
        filter={filterLevel}
        list={vehicles}
        setList={setList}
        menuItems={levelItems && []}
      />
      <Button
        filter={filterNation}
        list={vehicles}
        setList={setList}
        menuItems={nationItems && []}
      />
      <Button
        filter={filterClass}
        list={vehicles}
        setList={setList}
        menuItems={typeItems && []}
      />
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
