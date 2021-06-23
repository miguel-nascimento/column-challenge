import React, { useEffect } from "react";
import * as Contacts from "expo-contacts";
import { Container, Button, ButtonText } from "./styles";
import { FlatList } from "react-native";
import { useState } from "react";
import { Contact } from "expo-contacts";

import Card from "../../components/Card";
import { useNavigation } from "@react-navigation/native";

const List: React.FC = () => {
  const pageSize = 10;
  const navigation = useNavigation();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [nextPage, setHasNextPage] = useState<boolean>(true);

  const getMoreContacts = async () => {
    const { data, hasNextPage } = await Contacts.getContactsAsync({
      pageSize,
      pageOffset,
      fields: [Contacts.Fields.Image, Contacts.Fields.PhoneNumbers],
    });

    if (data.length > 0 && contacts) {
      setContacts([...contacts, ...data]);
      setHasNextPage(hasNextPage);
    }
  };

  const getContactsData = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === "granted") {
      await getMoreContacts();
    } else {
      alert("The app doesn't have permission to access the contacts list");
    }
  };

  useEffect(() => {
    if (contacts && contacts.length > 0) {
      getMoreContacts();
    }
  }, [pageOffset]);

  const goToDetail = (id: string) => {
    navigation.navigate("Detail", { id });
  };

  return (
    <Container>
      <FlatList<Contact>
        data={contacts}
        ListHeaderComponent={
          contacts.length === 0 ? (
            <Button onPress={() => getContactsData()}>
              <ButtonText>List all contacts</ButtonText>
            </Button>
          ) : null
        }
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            {item.phoneNumbers && (
              <Card
                onPress={() => goToDetail(item.id)}
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
        ListFooterComponent={
          nextPage && contacts[0] ? (
            <Button onPress={() => setPageOffset(pageOffset + pageSize)}>
              <ButtonText>Load More</ButtonText>
            </Button>
          ) : null
        }
      />
    </Container>
  );
};

export default List;
