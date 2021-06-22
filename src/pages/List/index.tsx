import React from "react";
import * as Contacts from "expo-contacts";
import { Container, Button, ButtonText } from "./styles";
import { FlatList } from "react-native";
import { useState } from "react";
import { Contact } from "expo-contacts";

import Card from "../../components/Card";
import { useNavigation } from "@react-navigation/native";

const List: React.FC = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState<Contact[]>();
  const getContactsData = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Image, Contacts.Fields.PhoneNumbers],
      });
      if (data.length > 0) {
        console.log(data);
        setContacts(data);
      }
    }
  };

  return (
    <Container>
      <FlatList<Contact>
        data={contacts}
        ListHeaderComponent={
          <Button onPress={() => getContactsData()}>
            <ButtonText>List all contacts</ButtonText>
          </Button>
        }
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            {item.phoneNumbers && (
              <Card
                onPress={() => navigation.navigate("Detail", { id: item.id })}
                image={{
                  imageAvaliable: item.imageAvailable,
                  imageObj: item.image,
                }}
                name={item.name}
                phoneNumbers={item.phoneNumbers}
              />
            )}
          </>
        )}
      />
    </Container>
  );
};

export default List;
