import styled from 'styled-components';
import {Text} from 'react-native';

const MainText = styled(Text)`
  /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
  font-family: 'Gill Sans';
`;

/** INDEX
 * Border
   - Container
     - Header
       - TitleContainer
         - Name
         - TopRight
           - HPLabel
           - HPValue
           - <Icon />
          ImageBox
          Captions
          - CaptionText
     - Body
 */

export const Border = styled.View`
  width: 316px;
  height: 440px;
  border-radius: 16px;
  background-color: gold;
  padding: 16px;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: orange;
  align-items: stretch;
`;

export const Header = styled.View`
  align-items: stretch;
  padding: 16px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Name = styled(MainText)`
  font-size: 20px;
  font-weight: bold;
`;

export const TopRight = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const HPLabel = styled(MainText)`
  font-size: 8px;
  font-weight: bold;
`;

export const HPValue = styled.Text`
  font-family: 'Futura';
  font-weight: bold;
`;

export const ImageBox = styled.View`
  border: 6px solid khaki;
  background-color: white;
  padding: 8px;
`;

export const Image = styled.Image`
  min-height: 160px;
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

export const Body = styled.View`
  padding: 4px;
  flex: 1;
`;

export const Moves = styled.ScrollView``;