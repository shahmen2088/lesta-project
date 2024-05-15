import Button from '~/UI/Buttons/Button';
import { PropsCard } from '~/entities/Card/Card';
import { filterClass, filterLevel, filterNation } from '~/utils/filtres';

type Props = {
  list: PropsCard[];
  setList: React.Dispatch<React.SetStateAction<PropsCard[]>>;
};

export default function ButtonList({ list, setList }: Props) {
  const levelItems = [
    ...new Set(list.map((Val: PropsCard) => Val.level)),
  ].sort();
  const nationItems = [
    ...new Set(list.map((Val: PropsCard) => Val.nation.title)),
  ];
  const typeItems = [...new Set(list.map((Val: PropsCard) => Val.type.title))];

  return (
    <ul>
      <li>
        <Button
          filter={filterLevel}
          list={list}
          setList={setList}
          menuItems={levelItems}
        />
        <Button
          filter={filterNation}
          list={list}
          setList={setList}
          menuItems={nationItems}
        />
        <Button
          filter={filterClass}
          list={list}
          setList={setList}
          menuItems={typeItems}
        />
      </li>
    </ul>
  );
}
