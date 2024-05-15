export type PropsCard = {
  title: string;
  description: string;
  level: string;
  type: {
    title: string;
  };
  icons: {
    medium: string;
  };
  nation: {
    title: string;
    icons: {
      large: string;
    };
  };
};
export default function Card(props: PropsCard) {
  const { title, description, level, type, icons, nation } = props;
  return (
    <li className="flex border px-4 items-center">
      <div>
        <h1 className="mr-40 font-bold">{title}</h1>
        <p className="mr-10 w-[900px]">{description}</p>
        <h3 className="font-medium mr-10">Уровень: {level}</h3>
        <div className="font-medium mr-10">
          <h3>Тип: {type.title}</h3>
        </div>
        <div className="font-medium mr-10">
          <h3>{nation.title}</h3>{' '}
        </div>
      </div>

      <div className="flex w-[230px] bg-cover bg-no-repeat bg-center">
        <img src={nation.icons.large} alt="Medium Icon" />

        <img src={icons.medium} alt="Medium Icon" />
      </div>
    </li>
  );
}
