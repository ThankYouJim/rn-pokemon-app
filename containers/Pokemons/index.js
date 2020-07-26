 import React from 'react';
import {View} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import Pokemon from '../../components/pokemon';
import {GET_POKEMONS} from '../../graphql/get-pokemons';

export function Pokemons() {
  const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
    variables: {first: 9},
  });

  return (
    <View>
      {pokemons &&
        pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </View>
  );
}
