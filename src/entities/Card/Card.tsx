type Props = {
  title: string;
  description: string;
  iconsMedium: string;
  level: string;
  name: string;
  nation: string;
  flag: string;
  type: string;
  innerStyle: any;
};
export default function Card(props: Props) {
  const {
    title,
    description,
    iconsMedium,
    level,
    name,
    nation,
    flag,
    type,
    innerStyle,
  } = props;
  return (
    <li
      className="flex border mb-96 items-center"
      style={innerStyle}
      key={title}
    >
      <h1 className="mr-40">{title}</h1>
      <p className="mr-10 w-[900px]">{description}</p>
      <h3 className="mr-10">Уровень: {level}</h3>
      <div className="mr-10">
        <h3>Тип: {type}</h3>
      </div>
      <div className="mr-10">
        <h3>Нация: {nation}</h3>
      </div>

      <img src={iconsMedium} alt="Medium Icon" />
      <img src={flag} alt="Medium Icon" />
    </li>
  );
}

{
  /* <div className="my-96">
<img src={iconsMedium} alt="Medium Icon" />
<img src={flag} alt="Medium Icon" />
</div> */
}
