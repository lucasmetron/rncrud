/* eslint-disable react/no-unstable-nested-components */
import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={{
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: 'white',
            headerTitleStyle: {fontWeight: 'bold'},
          }}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => {
              return {
                title: 'Lista de usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type="clear"
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                ),
              };
            }}
          />

          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{title: 'Formulário de usuários'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
