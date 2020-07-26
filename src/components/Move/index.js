import React from 'react';
import {View, Text} from 'react-native';
import {Container, IconView, Name, Damage} from './styled';

export const Move = ({type, name, damage}) => {
  return (
    <Container>
      <IconView>
        <Text>{type}</Text>
      </IconView>
      <Name>{name}</Name>
      <Damage>{damage}</Damage>
    </Container>
  );
};
