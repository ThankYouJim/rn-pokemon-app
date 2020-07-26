import React from 'react';
import {SafeAreaView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {GET_POKEMONS} from '../../graphql/get-pokemons';
import Pokemon from '../../components/pokemon';
import {ScrollableV} from './styled';

export function Pokemons() {
  const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
    variables: {first: 9},
  });

  return (
    <SafeAreaView>
      <ScrollableV>
        {pokemons &&
          pokemons.map(pokemon => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </ScrollableV>
    </SafeAreaView>
  );
}
