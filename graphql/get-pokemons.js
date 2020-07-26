// https://github.com/lucasbento/graphql-pokemon/blob/master/schemas/schema.graphql

import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      attacks {
        special {
          name
          type
          damage
        }
      }
      weaknesses
      evolutions {
        id
        name
        types
      }
      maxHP
      image
    }
  }
`;
