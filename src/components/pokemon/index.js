import React from 'react';
import {View, Text} from 'react-native';
import {
  Border,
  Container,
  Header,
  TitleContainer,
  Name,
  TopRight,
  HPLabel,
  HPValue,
  ImageBox,
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
          <TitleContainer>
            <Name>{name}</Name>
            <TopRight>
              <HPLabel>Max HP</HPLabel>
              <HPValue>{maxHP}</HPValue>
              {/* <Text>{types}</Text> */}
            </TopRight>
          </TitleContainer>
          <ImageBox>
            <Image
              source={{
                uri: image,
              }}
            />
          </ImageBox>
          <Captions>
            <CaptionText>
              {classification}. Length: {height.maximum}, Weight:{' '}
              {weight.maximum}.
            </CaptionText>
          </Captions>
        </Header>
      </Container>
    </Border>
  );
};

export default Pokemon;
