import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({theme}) => theme.color.background};
  flex: 1;
`;

export const Button = styled(RectButton)`
  margin: 25px 0;
  align-self: center;
  height: 48px;
  width: 50%;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 38px;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  color: ${({ theme }) => theme.color.text.white};
`