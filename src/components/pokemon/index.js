import React from 'react';
import {View, Text} from 'react-native';
import {
  Border,
  Container,
  Header,
  Title,
  TopRight,
  Label,
  Numerals,
  Window,
  Image,
  Captions,
  CaptionText,
} from './styled';

const Pokemon = ({pokemon}) => {
  const {
    name,
    weight,
    height,
    classification,
    types,
    attacks,
    weaknesses,
    evolutions,
    maxHP,
    image,
  } = pokemon;

  return (
    <Border>
      <Container>
        <Header>
          <Title>{name}</Title>
          <TopRight>
            <Label>Max HP</Label>
            <Numerals>{maxHP}</Numerals>
            <Text>{types}</Text>
          </TopRight>
        </Header>
        <Window>
          <Image
            source={{
              uri: image,
            }}
          />
          <Captions>
            <CaptionText>
              {classification}. Length: {height.maximum}, Weight: {weight.maximum}.
            </CaptionText>
          </Captions>
        </Window>
      </Container>
    </Border>
  );
};

export default Pokemon;
