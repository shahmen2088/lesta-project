import { PropsCard } from '~/entities/Card/Card';

export const filterLevel = (
  value: string,
  list: PropsCard[],
  setList: React.Dispatch<React.SetStateAction<PropsCard[]>>,
) => {
  const newItem: PropsCard[] = list.filter((newVal: PropsCard) => {
    return newVal.level === value;
  });

  setList(newItem);
};
export const filterNation = (
  value: string,
  list: PropsCard[],
  setList: React.Dispatch<React.SetStateAction<PropsCard[]>>,
) => {
  const newItem: PropsCard[] = list.filter((newVal: PropsCard) => {
    return newVal.nation.title === value;
  });
  setList(newItem);
};
export const filterClass = (
  value: string,
  list: PropsCard[],
  setList: React.Dispatch<React.SetStateAction<PropsCard[]>>,
) => {
  const newItem: PropsCard[] = list.filter((newVal: PropsCard) => {
    return newVal.type.title === value;
  });
  setList(newItem);
};
