import { gql, useQuery } from '@apollo/client';
import { FixedSizeList as List } from 'react-window';
import Card from '~/entities/Card/Card';

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
      {data && (
        <div>
          <h1>Example of List Virtualization</h1>
          <List
            innerElementType={'ul'}
            width={2900}
            height={1300}
            itemData={data}
            useIsScrolling={true}
            itemSize={500}
            itemCount={data.vehicles.length}
          >
            {({ index, style }) => {
              return (
                <Card
                  key={data.vehicles[index].title}
                  title={data.vehicles[index].title}
                  description={data.vehicles[index].description}
                  iconsMedium={data.vehicles[index].icons.medium}
                  level={data.vehicles[index].level}
                  name={data.vehicles[index].type.name}
                  nation={data.vehicles[index].nation.title}
                  flag={data.vehicles[index].nation.icons.large}
                  type={data.vehicles[index].type.title}
                  innerStyle={style}
                />
              );
            }}
          </List>
        </div>
      )}
    </div>
  );
};
