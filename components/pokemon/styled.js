import styled from 'styled-components';
import {Text} from 'react-native';

const MainText = styled(Text)`
  /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
  font-family: 'Gill Sans';
`;

export const Border = styled.View`
  width: 316px;
  height: 440px;
  border-radius: 16px;
  align-items: center;
  background-color: khaki;
  padding: 16px;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: orange;
`;

/**
 * HEADER
 * * Title
 * * HP
 * * Icon
 */
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled(MainText)`
  font-weight: bold;
`;

export const TopRight = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Label = styled(MainText)`
  font-size: 8px;
  font-weight: bold;
`;

export const Numerals = styled.Text`
  font-family: 'Futura';
  font-weight: bold;
`;

/**
 * WINDOW
 * * Image
 * * Stats
 */
export const Window = styled.View`
  width: 90%;
`;

export const Image = styled.Image`
  height: 200px;
  background-color: violet;
  border: 4px solid gold;
  resize-mode: contain;
`;

export const Captions = styled.View`
  background-color: gold;
  margin-top: 4px;
  align-items: center;
`;

export const CaptionText = styled.Text`
  font-family: 'GillSans-SemiBoldItalic';
  font-size: 12px;
`;
