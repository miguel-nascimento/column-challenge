import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #F9F9F9;
  margin: 15px 10px;
  border-radius: 5px;
  padding: 15px;
  flex-direction: row;
`

export const ImageContainer = styled.View`
  margin-right: 10px;
`

export const ProfilePicture = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

export const Name = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.color.primary};
  font-weight: 700;
  align-self: flex-start;
`

export const InfoContainer = styled.View`
  margin: 10px 0;
  width: 100%;
  flex-direction: row;
`

export const Number = styled.Text`
  color: ${({theme}) => theme.color.text.black};
  font-size: 14px;
  font-weight: 600;
  align-self: flex-start;
`

export const Type = styled.Text`
  color: ${({theme}) => theme.color.text.gray};
  font-weight: 700;
  text-transform: capitalize;
`

export const Divider = styled.View`
  margin: 0px 10px;
  height: 18px;
  width: 2px;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.color.text.lightGray};
`;

export const Column = styled.View`
  flex-direction: column;
`