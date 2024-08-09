import {
  StyleSheet,
  Modal,
  View,
  Text,
  Alert,
  Dimensions,
  Button,
} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

const ConfirmScreen = ({isOpen, setIsOpen, text, functionToExecOnClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setIsOpen(!isOpen);
      }}>
      <View style={styles.conatiner}>
        <View style={styles.boxConfirm}>
          <Text style={styles.text}> {text}</Text>

          <View style={styles.buttons}>
            <Button
              title="Sim"
              color="#22527C"
              onPress={() => functionToExecOnClose()}
            />
            <Button
              title="Não"
              color="#f4511e"
              onPress={() => {
                setIsOpen(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: RFValue(15),
  },
  boxConfirm: {
    width: Dimensions.get('window').width - 50,
    gap: 20,
    minHeight: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ddddda',
    borderWidth: 1,
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ConfirmScreen;
