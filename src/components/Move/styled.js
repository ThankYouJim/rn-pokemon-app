import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  border-bottom-width: 1px;
  /* border-bottom-color: black; */
  padding: 4px;
`;

export const IconView = styled.View``;

export const Name = styled.Text`
  flex: 1;
  font-family: 'Gill Sans';
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const Damage = styled.Text`
  font-family: 'Futura';
  font-size: 24px;
`;
