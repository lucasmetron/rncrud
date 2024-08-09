/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useLayoutEffect, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {users} from '../data/users';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import ConfirmScreen from '../components/ConfirmScreen';
import UserContext from '../context/UserContext';

const UserList = props => {
  const [usersList, setUsersList] = useContext(UserContext);
  const [isOponModal, setIsOponModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  function openModal(user) {
    setIsOponModal(true);
    setUserToDelete(user);
  }

  function deleteFunction() {
    const newList = usersList.filter(user => user.id !== userToDelete.id);
    setUsersList(newList);
    setIsOponModal(false);
  }

  function edit(user) {
    props.navigation.navigate('UserForm', {data: user});
  }

  function getUserItem(value) {
    return (
      <>
        <View style={styles.itemList}>
          <Image style={styles.imgItem} source={{uri: value.avatarUrl}} />
          <View style={styles.infos}>
            <Text style={styles.title}>{value.name}</Text>
            <Text style={styles.subTitle}>{value.email}</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => edit(value)}>
              <IconFeather name="edit-2" color="#22527C" size={RFValue(22)} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openModal(value)}>
              <IconAntDesign name="delete" color="#f4511e" size={RFValue(22)} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line} />
      </>
    );
  }

  //limpa usuário para deletar toda vez q a modal fechar
  useLayoutEffect(() => {
    if (!isOponModal && userToDelete !== null) {
      setUserToDelete(null);
    }
  }, [isOponModal]);

  useLayoutEffect(() => {
    if (users.length > 0) {
      setUsersList(usersList);
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={usersList}
        keyExtractor={user => user.id.toString()}
        renderItem={value => getUserItem(value.item)}
      />
      {isOponModal && (
        <ConfirmScreen
          isOpen={isOponModal}
          setIsOpen={setIsOponModal}
          text={`Tem certeza que deseja deletar o usuário ${
            userToDelete?.name || 'Erro'
          }?`}
          functionToExecOnClose={deleteFunction}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemList: {
    backgroundColor: 'white',
    gap: RFValue(15),
    flexDirection: 'row',
    padding: RFValue(15),
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  infos: {
    flex: 1,
  },
  imgItem: {
    width: RFValue(28),
    height: RFValue(28),
    borderRadius: 50,
  },
  title: {
    fontSize: RFValue(15),
    color: 'black',
  },
  subTitle: {
    fontSize: RFValue(12),
    color: 'black',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddddda',
  },

  buttons: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserList;
