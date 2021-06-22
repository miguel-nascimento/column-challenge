import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as Contacts from "expo-contacts";

import { Container } from "./styles";
import { useState } from "react";
import { Contact } from "expo-contacts";

interface DetailProps {
  id: string;
}

const Detail: React.FC<DetailProps> = ({ route }: any) => {
  const { id } = route.params;
  const [contact, setContact] = useState<Contact>();
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        setContact(
          await Contacts.getContactByIdAsync(id, [
            Contacts.Fields.Image,
            Contacts.Fields.PhoneNumbers,
          ])
        );
      }
    })();
  }, []);

  return <Container>{contact && <Text>{contact.id}</Text>}</Container>;
};
export default Detail;
