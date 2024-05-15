import { gql, useQuery } from '@apollo/client';
import CardList from '~/entities/CardList/CardList';

const QUERY = gql`
  query Vehicles($languageCode: String = "ru") {
    vehicles(lang: $languageCode) {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;

export const App = () => {
  const { loading, error, data } = useQuery(QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error </p>;
  }

  return (
    <div className="w-full">
      <CardList vehicles={data.vehicles} />
    </div>
  );
};
