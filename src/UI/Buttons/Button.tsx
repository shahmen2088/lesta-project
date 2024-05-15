import { PropsCard } from '~/entities/Card/Card';

export type PropsButton = {
  filter: (
    value: string,
    list: PropsCard[],
    setList: React.Dispatch<React.SetStateAction<PropsCard[]>>,
  ) => void;
  list: PropsCard[];
  setList: React.Dispatch<React.SetStateAction<PropsCard[]>>;
  menuItems: [];
};

export default function Button({
  filter,
  list,
  setList,
  menuItems,
}: PropsButton) {
  return (
    <div className="d-flex px-4 border justify-content-center">
      <h4 className="font-bold">Фильтр: </h4>
      {menuItems.map((item, index) => {
        return (
          <button
            className="bg-black mb-4  btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            key={index}
            onClick={() => filter(item, list, setList)}
          >
            {item}
          </button>
        );
      })}
      <button
        className="bg-black btn-dark text-white px-3 mx-5 fw-bold btn mb-4"
        onClick={() => setList(list)}
      >
        Показать все!
      </button>
    </div>
  );
}
