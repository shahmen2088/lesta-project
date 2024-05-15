import { getAllShips } from '../ShipsService/ShipsService';
import CardList from '~/entities/CardList/CardList';

export const App = () => {
  const { loading, error, data } = getAllShips();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error </p>;
  }

  return (
    <div className="w-[1500px]">
      <CardList vehicles={data.vehicles} />
    </div>
  );
};
