import React, { useEffect } from "react";
import { useTheme } from "styled-components";
import { StatusBar } from "react-native";
import * as Contacts from "expo-contacts";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  Body,
  PhoneNumberContainer,
  Container,
  Header,
  InvisibleItem,
  Name,
  PhoneNumber,
  Numbers,
  Type,
  InfoContainer,
  Avatar,
  StyledSafe,
  BackIconContainer,
  CopyToClipboardContainer,
  AvatarSection,
} from "./styles";
import { useState } from "react";
import { Contact } from "expo-contacts";
import { DefaultTheme } from "styled-components/native";
import { useClipboard } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native";
import { GenericTouchableProps } from "react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable";

interface DetailProps {
  id: string;
}

const BackIcon: React.FC<GenericTouchableProps> = ({ onPress }) => {
  return (
    <BackIconContainer onPress={onPress}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </BackIconContainer>
  );
};

const ClipboardIcon: React.FC<{ theme: DefaultTheme }> = ({ theme }) => (
  <Feather name="clipboard" size={18} color={theme.color.primary} />
);

const Detail: React.FC<DetailProps> = ({ route }: any) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { id } = route.params;
  const [clipboard, setClipboard] = useClipboard();
  const [contact, setContact] = useState<Contact>();
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const data = await Contacts.getContactByIdAsync(id, [
          Contacts.Fields.Image,
          Contacts.Fields.PhoneNumbers,
        ]);
        setContact(data);
      }
    })();
  }, []);

  const copyToClipboard = (phoneNumber: string | undefined) => {
    if (phoneNumber) {
      setClipboard(phoneNumber);
      alert("The phone number was been copied to the clipboard");
    }
  };

  const goToList = () => {
    navigation.goBack();
  };

  return (
    <StyledSafe>
      <StatusBar backgroundColor={theme.color.primary} />
      <Container>
        {contact && (
          <InfoContainer>
            <Header>
              <BackIcon onPress={() => goToList()} />
              <AvatarSection>
                <Avatar
                  source={{
                    uri: contact.image?.uri
                      ? contact.image?.uri
                      : "https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1",
                  }}
                />
              </AvatarSection>
              <InvisibleItem />
            </Header>
            <Body>
              <Name>{contact.name}</Name>
              {contact!.phoneNumbers!.map((phone) => (
                <Numbers key={phone.number}>
                  <Type>{phone.label}</Type>
                  <CopyToClipboardContainer
                    onPress={() => copyToClipboard(phone.number)}
                  >
                    <PhoneNumberContainer>
                      <PhoneNumber>{phone.number}</PhoneNumber>
                      <ClipboardIcon theme={theme} />
                    </PhoneNumberContainer>
                  </CopyToClipboardContainer>
                </Numbers>
              ))}
            </Body>
          </InfoContainer>
        )}
      </Container>
    </StyledSafe>
  );
};
export default Detail;
