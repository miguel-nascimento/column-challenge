import React from "react";
import { StyleSheet } from "react-native";
import { Image, PhoneNumber } from "expo-contacts";

import {
  Container,
  ImageContainer,
  ProfilePicture,
  InfoContainer,
  Name,
  Number,
  Type,
  Divider,
  Column,
} from "./styles";
import { GenericTouchableProps } from "react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface ContactInfoProps extends GenericTouchableProps {
  name: string;
  phoneNumbers?: PhoneNumber[];
  image: {
    imageAvaliable?: boolean;
    imageObj?: Image;
  };
}

const Card: React.FC<ContactInfoProps> = ({
  name,
  phoneNumbers,
  image,
  onPress,
}) => {
  const styles = StyleSheet.create({
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
  });
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container style={styles.shadow}>
        <ImageContainer>
          <ProfilePicture
            source={{
              uri: image.imageObj?.uri
                ? image.imageObj?.uri
                : "https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1",
            }}
          />
        </ImageContainer>
        <Column>
          <Name>{name}</Name>
          {phoneNumbers && (
            <InfoContainer>
              <Type>{phoneNumbers[0].label}</Type>
              <Divider />
              <Number>{phoneNumbers[0].number}</Number>
            </InfoContainer>
          )}
        </Column>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Card;
