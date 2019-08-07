import React from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, Image } from 'react-native';

export function PokeDetailModal({ action, visible }) {
  const openCloseModal = () => {
    action();
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={{ marginTop: 22 }}>
        <View>
          <Text>Hello World!</Text>
          <Image source={require('../../assets/pics/derpSquirtle.png')}/>
          <TouchableHighlight
            accessibilityLabel="Modal"
            accessibilityComponentType="button"
            accessibilityTraits="button"
            onPress={openCloseModal}>
            <Text>GO AWAY</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}
