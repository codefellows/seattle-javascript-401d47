import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, Linking } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const results = await Contacts.getContactsAsync();
        setContacts(results.data);
      }
    }
    getContacts();
    // console.log(contacts[3]);
  }, [])


  // const Item = ({ title }) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //   </View>
  // );

  const call = (contact) => {
    let phoneNumber = contact.phoneNumbers[0].digits;
    // make a phone call on "click"
    const link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch(console.error);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.title}>
          <Text>My Contacts</Text>
        </View>
        <View style={styles.content}>
          <FlatList
            data={contacts}
            keyExtractor={contact => contact.id}
            renderItem={({ item }) => <Button title={item.name} onPress={() => call(item)}/>
            }
          />

        </View>
        <StatusBar style="auto" />

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    flex: 4,
    backgroundColor: 'blue',
  }
});
