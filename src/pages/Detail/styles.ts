import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';


export const StyledSafe = styled(SafeAreaView)`
  flex: 1;
`

export const Container = styled.View`
  background-color: ${({theme}) => theme.color.background};
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.color.background};
`


export const Body = styled.View`
  margin-top: 36px;
  padding: 0 20px;
`
export const Name = styled.Text`
  align-self: center;
  font-size: 24px;
  font-weight: 700;
  color: ${({theme}) => theme.color.primary};
`
export const Numbers = styled.View`
  margin-top: 20px;
`
export const Type = styled.Text`
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 700;
  color: ${({theme}) => theme.color.text.black};
`
export const PhoneNumberContainer = styled.View`
  margin-top: 6px;
  flex-direction: row;
  border-radius: 8px;
  padding: 8px 6px;
  align-items: center;
  justify-content: space-between;
`

export const PhoneNumber = styled.Text`
  font-size: 18px;
`

export const Avatar = styled.Image`
  width: 86px;
  height: 86px;
  border-radius: 43px;
`

export const CopyToClipboardContainer = styled.TouchableWithoutFeedback``

export const Header = styled.View`
  background-color: ${({theme}) => theme.color.primary};
  height: 120px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const BackIconContainer = styled.TouchableOpacity`
  padding-left: 20px;
`

export const AvatarSection = styled.View`
`

export const InvisibleItem = styled.View`
  padding-right: 44px;
`