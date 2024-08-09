import React from 'react';
import {StyleSheet, Text} from 'react-native';

const UserForm = props => {
  return <Text>{props?.route?.params?.data?.name || 'Novo usuário'}</Text>;
};

const styles = StyleSheet.create({});

export default UserForm;
