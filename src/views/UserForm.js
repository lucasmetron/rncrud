import {RFValue} from 'react-native-responsive-fontsize';
import React, {useState, useContext} from 'react';
import {Button} from '@rneui/base';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import UserContext from '../context/UserContext';

const UserForm = ({route, navigation}) => {
  const [usersList, setUsersList] = useContext(UserContext);
  const [user, setUser] = useState(
    route?.params?.data ? route.params.data : {},
  );

  function saveOrEditItem() {
    if (user.id) {
      const newList = usersList.map(actualUser => {
        if (actualUser.id === user.id) {
          return {...actualUser, ...user};
        }
        return actualUser;
      });
      setUsersList(newList);
    } else {
      const newList = usersList;
      newList.push({...user, id: Math.random() * 1000});
      setUsersList(newList);
    }
    navigation.navigate('UserList');
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o nome"
          value={user.name}
          onChangeText={name => setUser(userState => ({...userState, name}))}
        />
      </View>

      <View>
        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o email"
          value={user.email}
          onChangeText={email => setUser(userState => ({...userState, email}))}
        />
      </View>

      <View>
        <Text style={styles.title}>Url Avatar</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira a URl"
          value={user.avatarUrl}
          onChangeText={avatarUrl =>
            setUser(userState => ({...userState, avatarUrl}))
          }
        />
      </View>

      <Button title="Salvar" onPress={saveOrEditItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    gap: 15,
  },

  title: {
    fontSize: RFValue(18),
  },

  input: {
    borderColor: '#ddddda',
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default UserForm;
