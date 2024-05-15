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
    <li className="flex border mb-96 items-center">
      <h1 className="mr-40">{title}</h1>
      <p className="mr-10 w-[900px]">{description}</p>
      <h3 className="mr-10">Уровень: {level}</h3>
      <div className="mr-10">
        <h3>Тип: {type.title}</h3>
      </div>
      <div className="mr-10">
        <h3>{nation.title}</h3>{' '}
      </div>

      <img src={icons.medium} alt="Medium Icon" />
      <img src={nation.icons.large} alt="Medium Icon" />
    </li>
  );
}
