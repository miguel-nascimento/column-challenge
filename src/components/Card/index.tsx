import React, { memo } from "react";
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
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}
      >
        <ImageContainer>
          <ProfilePicture
            source={{
              uri: image.imageObj?.uri
                ? "https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1"
                : image.imageObj?.uri,
            }}
          />
        </ImageContainer>
        <Name>{name}</Name>
        {phoneNumbers && (
          <InfoContainer>
            <Type>{phoneNumbers[0].label}</Type>
            <Divider />
            <Number>{phoneNumbers[0].number}</Number>
          </InfoContainer>
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Card;
