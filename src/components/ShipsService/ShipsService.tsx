import { gql, useQuery } from '@apollo/client';

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

export const getAllShips = () => {
  const { loading, error, data } = useQuery(QUERY);
  return { loading, error, data };
};
