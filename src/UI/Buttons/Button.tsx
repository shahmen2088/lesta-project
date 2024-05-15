import { PropsCard } from '~/entities/Card/Card';

type Props = {
  filter: (
    value: string,
    list: PropsCard[],
    setList: React.Dispatch<React.SetStateAction<PropsCard[]>>,
  ) => void;
  list: PropsCard[];
  setList: React.Dispatch<React.SetStateAction<PropsCard[]>>;
  menuItems: [];
};

export default function Button({ filter, list, setList, menuItems }: Props) {
  return (
    <div className="d-flex justify-content-center">
      {menuItems.map((item, index) => {
        return (
          <button
            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            key={index}
            onClick={() => filter(item, list, setList)}
          >
            {item}
          </button>
        );
      })}
      <button
        className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
        onClick={() => setList(list && [])}
      >
        All
      </button>
    </div>
  );
}
