import React from 'react';
import {Text} from 'react-native';
import {Container, Image} from './styled';

const Pokemon = ({pokemon}) => {
  return (
    <Container>
      <Text>{pokemon.name}</Text>
      <Image
        source={{
          uri: pokemon.image,
        }}
      />
    </Container>
  );
};

export default Pokemon;
