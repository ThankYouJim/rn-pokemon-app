import React from 'react';
import {View, Text} from 'react-native';
import {Move} from '../Move';
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
  Body,
  Moves,
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
  const fast = attacks ? attacks.fast : [];
  const special = attacks ? attacks.special : [];
  const allAttacks = [...fast, ...special].sort((a, b) => a.damage - b.damage);

  return (
    <Border>
      <Container>
        <Header>
          <TitleContainer>
            <Name>{name}</Name>
            {/* <TopRight> */}
            {/* <HPLabel>Max HP</HPLabel> */}
            {/* <HPValue>{maxHP}</HPValue> */}
            {/* <Text>{types}</Text> */}
            {/* </TopRight> */}
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
        <Body>
          <Moves>
            {allAttacks.map((atk, index) => {
              const {type, name, damage} = atk;
              return <Move key={index} type={type} name={name} damage={damage} />;
            })}
          </Moves>
        </Body>
      </Container>
    </Border>
  );
};

export default Pokemon;
