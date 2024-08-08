import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {users} from '../data/users';

import {RFValue} from 'react-native-responsive-fontsize';

const UserList = props => {
  function getUserItem(value) {
    return (
      <>
        <TouchableOpacity
          style={styles.itemList}
          onPress={() => {
            props.navigation.navigate('UserForm');
          }}>
          <Image style={styles.imgItem} source={{uri: value.avatarUrl}} />
          <View style={styles.infos}>
            <Text style={styles.title}>{value.name}</Text>
            <Text style={styles.subTitle}>{value.email}</Text>
          </View>
        </TouchableOpacity>
        {/* <View style={styles.line} /> */}
      </>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={value => getUserItem(value.item)}
        numColumns={2}
        key={2}
        style={{gap: 5}}
      />
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
    borderWidth: 1,
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
});

export default UserList;
