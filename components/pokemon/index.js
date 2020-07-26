import React from 'react';
import {Text, View} from 'react-native';
import {Container} from './styled';

const Pokemon = ({pokemon}) => {
  return (
    <Container>
      <Text>{pokemon.name}</Text>
    </Container>
  );
};

export default Pokemon;
