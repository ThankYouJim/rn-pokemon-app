import React from 'react';
import {Container, IconView, Name, Damage} from './styled';
import Icons from '../Icons';

export const Move = ({type, name, damage}) => {
  return (
    <Container>
      <IconView>
        <Icons type={type} />
      </IconView>
      <Name>{name}</Name>
      <Damage>{damage}</Damage>
    </Container>
  );
};
